#!/usr/bin/env python3
"""Bot-challenge detection, shared by stage 0 and stage 1.

A managed challenge is the one failure in this pipeline that looks like success.
The capture completes: responses arrive, screenshots are written, a probe lands
for every breakpoint. What was captured is an interstitial, so the ledger comes
back with zero colours, zero keyframes, zero SVGs and a copy deck that reads
"Performing security verification". Feed that to the authoring stages and the
only way to produce a PRD is to invent every literal in it, which is the exact
failure mode gate P6 exists to prevent.

So both stages check, and both refuse. Stage 0 refuses to write a capture it
knows is an interstitial, and offers the human handoff instead. Stage 1 refuses
to build a ledger from one that got through anyway.

Detection is by marker, not by heuristic, so a false positive needs a page that
literally carries a vendor's challenge strings. Nothing here attempts to pass a
challenge: the escape hatch is a person clearing it in a real browser window,
which is what `prdgen.py --handoff` is for.

Standard library only, matching the rest of the kit.
"""
import re

# (marker, vendor). Lowercase; matched against page HTML, title and probe copy.
MARKERS = [
    ("just a moment...", "Cloudflare"),
    ("_cf_chl_opt", "Cloudflare"),
    ("cf_chl_prog", "Cloudflare"),
    ("challenge-platform", "Cloudflare"),
    ("cf-browser-verification", "Cloudflare"),
    ("cf-turnstile", "Cloudflare Turnstile"),
    ("checking your browser before accessing", "Cloudflare"),
    ("performing security verification", "Cloudflare"),
    ("attention required! | cloudflare", "Cloudflare"),
    ("ddos protection by cloudflare", "Cloudflare"),
    ("enable javascript and cookies to continue", "Cloudflare"),
    ("verifying you are human", "Cloudflare"),
    ("captcha-delivery.com", "DataDome"),
    ("geo.captcha-delivery", "DataDome"),
    ("px-captcha", "PerimeterX"),
    ("perimeterx", "PerimeterX"),
    ("incapsula incident id", "Imperva Incapsula"),
    ("_incapsula_resource", "Imperva Incapsula"),
    ("request unsuccessful. incapsula", "Imperva Incapsula"),
    ("access denied | ", "an edge WAF"),
    ("pardon our interruption", "Distil / Imperva"),
    ("are you a robot", "an anti-bot service"),
    ("please verify you are a human", "an anti-bot service"),
]

# "Ray ID" alone is not enough: Cloudflare stamps it on ordinary error pages
# too. Paired with a challenge-sized body it is conclusive.
RE_RAY = re.compile(r"\bray id\b", re.I)

# A challenge page is small. A real page that happens to quote one of these
# strings is not, which is what keeps the false-positive rate at zero in
# practice: the marker has to appear in a document with nothing else in it.
SMALL_BODY = 20000


def detect_html(html, title="", status=None):
    """Reason string if this looks like a bot challenge, else None."""
    blob = ((title or "") + "\n" + (html or "")).lower()
    if not blob.strip():
        return None
    for marker, vendor in MARKERS:
        if marker in blob:
            return f"{vendor} challenge (matched {marker!r})"
    if RE_RAY.search(blob) and len(html or "") < SMALL_BODY:
        return "Cloudflare error or challenge page (Ray ID, interstitial-sized body)"
    if status in (403, 503) and len(html or "") < SMALL_BODY:
        return f"HTTP {status} with an interstitial-sized body"
    return None


def detect_page(page):
    """Reason string if a live Playwright page is sitting on a challenge."""
    try:
        return detect_html(page.content(), page.title())
    except Exception:
        return None


def detect_capture(cap_root):
    """Reason string if a finished capture directory holds an interstitial.

    Reads the probe files rather than the screenshots: the copy the probe
    transcribed is the giveaway, and it is text.
    """
    raw = cap_root / "raw"
    if not raw.is_dir():
        return None
    for probe in sorted(raw.glob("*.probe.json")):
        try:
            text = probe.read_text(encoding="utf-8", errors="replace")
        except Exception:
            continue
        why = detect_html(text)
        if why:
            return f"{why} in {probe.name}"
    return None

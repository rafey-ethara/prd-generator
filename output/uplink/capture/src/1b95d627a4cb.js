var Cu = Object.defineProperty;
var Pu = (a, t, e) => t in a ? Cu(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e;
var hs = (a, t, e) => (Pu(a, typeof t != "symbol" ? t + "" : t, e), e);
/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
const Po = "148", Ui = { LEFT: 0, MIDDLE: 1, RIGHT: 2, ROTATE: 0, DOLLY: 1, PAN: 2 }, ki = { ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3 }, Lu = 0, rl = 1, Du = 2, Hc = 1, Ru = 2, Br = 3, Pi = 0, ln = 1, Lo = 2, us = 3, Jn = 0, hr = 1, sl = 2, al = 3, ol = 4, Iu = 5, sr = 100, Ou = 101, zu = 102, ll = 103, cl = 104, Fu = 200, Nu = 201, Uu = 202, ku = 203, Wc = 204, Xc = 205, Bu = 206, Gu = 207, Vu = 208, Hu = 209, Wu = 210, Xu = 0, qu = 1, Yu = 2, eo = 3, $u = 4, ju = 5, Zu = 6, Ku = 7, qc = 0, Ju = 1, Qu = 2, gn = 0, Yc = 1, $c = 2, jc = 3, Zc = 4, td = 5, Kc = 300, mr = 301, gr = 302, no = 303, io = 304, ta = 306, ro = 1e3, pn = 1001, so = 1002, Me = 1003, hl = 1004, ha = 1005, Xe = 1006, ed = 1007, Zr = 1008, Li = 1009, nd = 1010, id = 1011, Jc = 1012, rd = 1013, yi = 1014, bi = 1015, Kr = 1016, sd = 1017, ad = 1018, ur = 1020, od = 1021, ld = 1022, mn = 1023, cd = 1024, hd = 1025, Si = 1026, _r = 1027, ud = 1028, dd = 1029, fd = 1030, pd = 1031, md = 1033, ua = 33776, da = 33777, fa = 33778, pa = 33779, ul = 35840, dl = 35841, fl = 35842, pl = 35843, gd = 36196, ml = 37492, gl = 37496, _l = 37808, vl = 37809, xl = 37810, yl = 37811, bl = 37812, Ml = 37813, Sl = 37814, wl = 37815, Tl = 37816, El = 37817, Al = 37818, Cl = 37819, Pl = 37820, Ll = 37821, Dl = 36492, Di = 3e3, Ht = 3001, _d = 3200, vd = 3201, Qc = 0, xd = 1, fn = "srgb", Jr = "srgb-linear", ma = 7680, yd = 519, ao = 35044, Rl = "300 es", oo = 1035;
class Fi {
  addEventListener(t, e) {
    this._listeners === void 0 && (this._listeners = {});
    const n = this._listeners;
    n[t] === void 0 && (n[t] = []), n[t].indexOf(e) === -1 && n[t].push(e);
  }
  hasEventListener(t, e) {
    if (this._listeners === void 0)
      return !1;
    const n = this._listeners;
    return n[t] !== void 0 && n[t].indexOf(e) !== -1;
  }
  removeEventListener(t, e) {
    if (this._listeners === void 0)
      return;
    const i = this._listeners[t];
    if (i !== void 0) {
      const r = i.indexOf(e);
      r !== -1 && i.splice(r, 1);
    }
  }
  dispatchEvent(t) {
    if (this._listeners === void 0)
      return;
    const n = this._listeners[t.type];
    if (n !== void 0) {
      t.target = this;
      const i = n.slice(0);
      for (let r = 0, o = i.length; r < o; r++)
        i[r].call(this, t);
      t.target = null;
    }
  }
}
const be = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"];
let Il = 1234567;
const Wr = Math.PI / 180, Hs = 180 / Math.PI;
function Gn() {
  const a = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0;
  return (be[a & 255] + be[a >> 8 & 255] + be[a >> 16 & 255] + be[a >> 24 & 255] + "-" + be[t & 255] + be[t >> 8 & 255] + "-" + be[t >> 16 & 15 | 64] + be[t >> 24 & 255] + "-" + be[e & 63 | 128] + be[e >> 8 & 255] + "-" + be[e >> 16 & 255] + be[e >> 24 & 255] + be[n & 255] + be[n >> 8 & 255] + be[n >> 16 & 255] + be[n >> 24 & 255]).toLowerCase();
}
function fe(a, t, e) {
  return Math.max(t, Math.min(e, a));
}
function Do(a, t) {
  return (a % t + t) % t;
}
function bd(a, t, e, n, i) {
  return n + (a - t) * (i - n) / (e - t);
}
function Md(a, t, e) {
  return a !== t ? (e - a) / (t - a) : 0;
}
function Xr(a, t, e) {
  return (1 - e) * a + e * t;
}
function Sd(a, t, e, n) {
  return Xr(a, t, 1 - Math.exp(-e * n));
}
function wd(a, t = 1) {
  return t - Math.abs(Do(a, t * 2) - t);
}
function Td(a, t, e) {
  return a <= t ? 0 : a >= e ? 1 : (a = (a - t) / (e - t), a * a * (3 - 2 * a));
}
function Ed(a, t, e) {
  return a <= t ? 0 : a >= e ? 1 : (a = (a - t) / (e - t), a * a * a * (a * (a * 6 - 15) + 10));
}
function Ad(a, t) {
  return a + Math.floor(Math.random() * (t - a + 1));
}
function Cd(a, t) {
  return a + Math.random() * (t - a);
}
function Pd(a) {
  return a * (0.5 - Math.random());
}
function Ld(a) {
  a !== void 0 && (Il = a);
  let t = Il += 1831565813;
  return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
}
function Dd(a) {
  return a * Wr;
}
function Rd(a) {
  return a * Hs;
}
function lo(a) {
  return (a & a - 1) === 0 && a !== 0;
}
function Id(a) {
  return Math.pow(2, Math.ceil(Math.log(a) / Math.LN2));
}
function Ws(a) {
  return Math.pow(2, Math.floor(Math.log(a) / Math.LN2));
}
function Od(a, t, e, n, i) {
  const r = Math.cos, o = Math.sin, s = r(e / 2), l = o(e / 2), c = r((t + n) / 2), h = o((t + n) / 2), u = r((t - n) / 2), d = o((t - n) / 2), m = r((n - t) / 2), g = o((n - t) / 2);
  switch (i) {
    case "XYX":
      a.set(s * h, l * u, l * d, s * c);
      break;
    case "YZY":
      a.set(l * d, s * h, l * u, s * c);
      break;
    case "ZXZ":
      a.set(l * u, l * d, s * h, s * c);
      break;
    case "XZX":
      a.set(s * h, l * g, l * m, s * c);
      break;
    case "YXY":
      a.set(l * m, s * h, l * g, s * c);
      break;
    case "ZYZ":
      a.set(l * g, l * m, s * h, s * c);
      break;
    default:
      console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + i);
  }
}
function Bn(a, t) {
  switch (t.constructor) {
    case Float32Array:
      return a;
    case Uint16Array:
      return a / 65535;
    case Uint8Array:
      return a / 255;
    case Int16Array:
      return Math.max(a / 32767, -1);
    case Int8Array:
      return Math.max(a / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function Gt(a, t) {
  switch (t.constructor) {
    case Float32Array:
      return a;
    case Uint16Array:
      return Math.round(a * 65535);
    case Uint8Array:
      return Math.round(a * 255);
    case Int16Array:
      return Math.round(a * 32767);
    case Int8Array:
      return Math.round(a * 127);
    default:
      throw new Error("Invalid component type.");
  }
}
var Vn = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  DEG2RAD: Wr,
  RAD2DEG: Hs,
  generateUUID: Gn,
  clamp: fe,
  euclideanModulo: Do,
  mapLinear: bd,
  inverseLerp: Md,
  lerp: Xr,
  damp: Sd,
  pingpong: wd,
  smoothstep: Td,
  smootherstep: Ed,
  randInt: Ad,
  randFloat: Cd,
  randFloatSpread: Pd,
  seededRandom: Ld,
  degToRad: Dd,
  radToDeg: Rd,
  isPowerOfTwo: lo,
  ceilPowerOfTwo: Id,
  floorPowerOfTwo: Ws,
  setQuaternionFromProperEuler: Od,
  normalize: Gt,
  denormalize: Bn
});
class vt {
  constructor(t = 0, e = 0) {
    vt.prototype.isVector2 = !0, this.x = t, this.y = e;
  }
  get width() {
    return this.x;
  }
  set width(t) {
    this.x = t;
  }
  get height() {
    return this.y;
  }
  set height(t) {
    this.y = t;
  }
  set(t, e) {
    return this.x = t, this.y = e, this;
  }
  setScalar(t) {
    return this.x = t, this.y = t, this;
  }
  setX(t) {
    return this.x = t, this;
  }
  setY(t) {
    return this.y = t, this;
  }
  setComponent(t, e) {
    switch (t) {
      case 0:
        this.x = e;
        break;
      case 1:
        this.y = e;
        break;
      default:
        throw new Error("index is out of range: " + t);
    }
    return this;
  }
  getComponent(t) {
    switch (t) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + t);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(t) {
    return this.x = t.x, this.y = t.y, this;
  }
  add(t) {
    return this.x += t.x, this.y += t.y, this;
  }
  addScalar(t) {
    return this.x += t, this.y += t, this;
  }
  addVectors(t, e) {
    return this.x = t.x + e.x, this.y = t.y + e.y, this;
  }
  addScaledVector(t, e) {
    return this.x += t.x * e, this.y += t.y * e, this;
  }
  sub(t) {
    return this.x -= t.x, this.y -= t.y, this;
  }
  subScalar(t) {
    return this.x -= t, this.y -= t, this;
  }
  subVectors(t, e) {
    return this.x = t.x - e.x, this.y = t.y - e.y, this;
  }
  multiply(t) {
    return this.x *= t.x, this.y *= t.y, this;
  }
  multiplyScalar(t) {
    return this.x *= t, this.y *= t, this;
  }
  divide(t) {
    return this.x /= t.x, this.y /= t.y, this;
  }
  divideScalar(t) {
    return this.multiplyScalar(1 / t);
  }
  applyMatrix3(t) {
    const e = this.x, n = this.y, i = t.elements;
    return this.x = i[0] * e + i[3] * n + i[6], this.y = i[1] * e + i[4] * n + i[7], this;
  }
  min(t) {
    return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this;
  }
  max(t) {
    return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this;
  }
  clamp(t, e) {
    return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this;
  }
  clampScalar(t, e) {
    return this.x = Math.max(t, Math.min(e, this.x)), this.y = Math.max(t, Math.min(e, this.y)), this;
  }
  clampLength(t, e) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(t, Math.min(e, n)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
  }
  roundToZero() {
    return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this;
  }
  dot(t) {
    return this.x * t.x + this.y * t.y;
  }
  cross(t) {
    return this.x * t.y - this.y * t.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  distanceTo(t) {
    return Math.sqrt(this.distanceToSquared(t));
  }
  distanceToSquared(t) {
    const e = this.x - t.x, n = this.y - t.y;
    return e * e + n * n;
  }
  manhattanDistanceTo(t) {
    return Math.abs(this.x - t.x) + Math.abs(this.y - t.y);
  }
  setLength(t) {
    return this.normalize().multiplyScalar(t);
  }
  lerp(t, e) {
    return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this;
  }
  lerpVectors(t, e, n) {
    return this.x = t.x + (e.x - t.x) * n, this.y = t.y + (e.y - t.y) * n, this;
  }
  equals(t) {
    return t.x === this.x && t.y === this.y;
  }
  fromArray(t, e = 0) {
    return this.x = t[e], this.y = t[e + 1], this;
  }
  toArray(t = [], e = 0) {
    return t[e] = this.x, t[e + 1] = this.y, t;
  }
  fromBufferAttribute(t, e) {
    return this.x = t.getX(e), this.y = t.getY(e), this;
  }
  rotateAround(t, e) {
    const n = Math.cos(e), i = Math.sin(e), r = this.x - t.x, o = this.y - t.y;
    return this.x = r * n - o * i + t.x, this.y = r * i + o * n + t.y, this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
class Ye {
  constructor() {
    Ye.prototype.isMatrix3 = !0, this.elements = [
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ];
  }
  set(t, e, n, i, r, o, s, l, c) {
    const h = this.elements;
    return h[0] = t, h[1] = i, h[2] = s, h[3] = e, h[4] = r, h[5] = l, h[6] = n, h[7] = o, h[8] = c, this;
  }
  identity() {
    return this.set(
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ), this;
  }
  copy(t) {
    const e = this.elements, n = t.elements;
    return e[0] = n[0], e[1] = n[1], e[2] = n[2], e[3] = n[3], e[4] = n[4], e[5] = n[5], e[6] = n[6], e[7] = n[7], e[8] = n[8], this;
  }
  extractBasis(t, e, n) {
    return t.setFromMatrix3Column(this, 0), e.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this;
  }
  setFromMatrix4(t) {
    const e = t.elements;
    return this.set(
      e[0],
      e[4],
      e[8],
      e[1],
      e[5],
      e[9],
      e[2],
      e[6],
      e[10]
    ), this;
  }
  multiply(t) {
    return this.multiplyMatrices(this, t);
  }
  premultiply(t) {
    return this.multiplyMatrices(t, this);
  }
  multiplyMatrices(t, e) {
    const n = t.elements, i = e.elements, r = this.elements, o = n[0], s = n[3], l = n[6], c = n[1], h = n[4], u = n[7], d = n[2], m = n[5], g = n[8], f = i[0], p = i[3], _ = i[6], b = i[1], x = i[4], y = i[7], M = i[2], A = i[5], P = i[8];
    return r[0] = o * f + s * b + l * M, r[3] = o * p + s * x + l * A, r[6] = o * _ + s * y + l * P, r[1] = c * f + h * b + u * M, r[4] = c * p + h * x + u * A, r[7] = c * _ + h * y + u * P, r[2] = d * f + m * b + g * M, r[5] = d * p + m * x + g * A, r[8] = d * _ + m * y + g * P, this;
  }
  multiplyScalar(t) {
    const e = this.elements;
    return e[0] *= t, e[3] *= t, e[6] *= t, e[1] *= t, e[4] *= t, e[7] *= t, e[2] *= t, e[5] *= t, e[8] *= t, this;
  }
  determinant() {
    const t = this.elements, e = t[0], n = t[1], i = t[2], r = t[3], o = t[4], s = t[5], l = t[6], c = t[7], h = t[8];
    return e * o * h - e * s * c - n * r * h + n * s * l + i * r * c - i * o * l;
  }
  invert() {
    const t = this.elements, e = t[0], n = t[1], i = t[2], r = t[3], o = t[4], s = t[5], l = t[6], c = t[7], h = t[8], u = h * o - s * c, d = s * l - h * r, m = c * r - o * l, g = e * u + n * d + i * m;
    if (g === 0)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const f = 1 / g;
    return t[0] = u * f, t[1] = (i * c - h * n) * f, t[2] = (s * n - i * o) * f, t[3] = d * f, t[4] = (h * e - i * l) * f, t[5] = (i * r - s * e) * f, t[6] = m * f, t[7] = (n * l - c * e) * f, t[8] = (o * e - n * r) * f, this;
  }
  transpose() {
    let t;
    const e = this.elements;
    return t = e[1], e[1] = e[3], e[3] = t, t = e[2], e[2] = e[6], e[6] = t, t = e[5], e[5] = e[7], e[7] = t, this;
  }
  getNormalMatrix(t) {
    return this.setFromMatrix4(t).invert().transpose();
  }
  transposeIntoArray(t) {
    const e = this.elements;
    return t[0] = e[0], t[1] = e[3], t[2] = e[6], t[3] = e[1], t[4] = e[4], t[5] = e[7], t[6] = e[2], t[7] = e[5], t[8] = e[8], this;
  }
  setUvTransform(t, e, n, i, r, o, s) {
    const l = Math.cos(r), c = Math.sin(r);
    return this.set(
      n * l,
      n * c,
      -n * (l * o + c * s) + o + t,
      -i * c,
      i * l,
      -i * (-c * o + l * s) + s + e,
      0,
      0,
      1
    ), this;
  }
  //
  scale(t, e) {
    return this.premultiply(ga.makeScale(t, e)), this;
  }
  rotate(t) {
    return this.premultiply(ga.makeRotation(-t)), this;
  }
  translate(t, e) {
    return this.premultiply(ga.makeTranslation(t, e)), this;
  }
  // for 2D Transforms
  makeTranslation(t, e) {
    return this.set(
      1,
      0,
      t,
      0,
      1,
      e,
      0,
      0,
      1
    ), this;
  }
  makeRotation(t) {
    const e = Math.cos(t), n = Math.sin(t);
    return this.set(
      e,
      -n,
      0,
      n,
      e,
      0,
      0,
      0,
      1
    ), this;
  }
  makeScale(t, e) {
    return this.set(
      t,
      0,
      0,
      0,
      e,
      0,
      0,
      0,
      1
    ), this;
  }
  //
  equals(t) {
    const e = this.elements, n = t.elements;
    for (let i = 0; i < 9; i++)
      if (e[i] !== n[i])
        return !1;
    return !0;
  }
  fromArray(t, e = 0) {
    for (let n = 0; n < 9; n++)
      this.elements[n] = t[n + e];
    return this;
  }
  toArray(t = [], e = 0) {
    const n = this.elements;
    return t[e] = n[0], t[e + 1] = n[1], t[e + 2] = n[2], t[e + 3] = n[3], t[e + 4] = n[4], t[e + 5] = n[5], t[e + 6] = n[6], t[e + 7] = n[7], t[e + 8] = n[8], t;
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
const ga = /* @__PURE__ */ new Ye();
function th(a) {
  for (let t = a.length - 1; t >= 0; --t)
    if (a[t] >= 65535)
      return !0;
  return !1;
}
function Qr(a) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", a);
}
function wi(a) {
  return a < 0.04045 ? a * 0.0773993808 : Math.pow(a * 0.9478672986 + 0.0521327014, 2.4);
}
function Us(a) {
  return a < 31308e-7 ? a * 12.92 : 1.055 * Math.pow(a, 0.41666) - 0.055;
}
const _a = {
  [fn]: { [Jr]: wi },
  [Jr]: { [fn]: Us }
}, Ce = {
  legacyMode: !0,
  get workingColorSpace() {
    return Jr;
  },
  set workingColorSpace(a) {
    console.warn("THREE.ColorManagement: .workingColorSpace is readonly.");
  },
  convert: function(a, t, e) {
    if (this.legacyMode || t === e || !t || !e)
      return a;
    if (_a[t] && _a[t][e] !== void 0) {
      const n = _a[t][e];
      return a.r = n(a.r), a.g = n(a.g), a.b = n(a.b), a;
    }
    throw new Error("Unsupported color space conversion.");
  },
  fromWorkingColorSpace: function(a, t) {
    return this.convert(a, this.workingColorSpace, t);
  },
  toWorkingColorSpace: function(a, t) {
    return this.convert(a, t, this.workingColorSpace);
  }
}, eh = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
}, re = { r: 0, g: 0, b: 0 }, hn = { h: 0, s: 0, l: 0 }, ds = { h: 0, s: 0, l: 0 };
function va(a, t, e) {
  return e < 0 && (e += 1), e > 1 && (e -= 1), e < 1 / 6 ? a + (t - a) * 6 * e : e < 1 / 2 ? t : e < 2 / 3 ? a + (t - a) * 6 * (2 / 3 - e) : a;
}
function fs(a, t) {
  return t.r = a.r, t.g = a.g, t.b = a.b, t;
}
class Ot {
  constructor(t, e, n) {
    return this.isColor = !0, this.r = 1, this.g = 1, this.b = 1, e === void 0 && n === void 0 ? this.set(t) : this.setRGB(t, e, n);
  }
  set(t) {
    return t && t.isColor ? this.copy(t) : typeof t == "number" ? this.setHex(t) : typeof t == "string" && this.setStyle(t), this;
  }
  setScalar(t) {
    return this.r = t, this.g = t, this.b = t, this;
  }
  setHex(t, e = fn) {
    return t = Math.floor(t), this.r = (t >> 16 & 255) / 255, this.g = (t >> 8 & 255) / 255, this.b = (t & 255) / 255, Ce.toWorkingColorSpace(this, e), this;
  }
  setRGB(t, e, n, i = Ce.workingColorSpace) {
    return this.r = t, this.g = e, this.b = n, Ce.toWorkingColorSpace(this, i), this;
  }
  setHSL(t, e, n, i = Ce.workingColorSpace) {
    if (t = Do(t, 1), e = fe(e, 0, 1), n = fe(n, 0, 1), e === 0)
      this.r = this.g = this.b = n;
    else {
      const r = n <= 0.5 ? n * (1 + e) : n + e - n * e, o = 2 * n - r;
      this.r = va(o, r, t + 1 / 3), this.g = va(o, r, t), this.b = va(o, r, t - 1 / 3);
    }
    return Ce.toWorkingColorSpace(this, i), this;
  }
  setStyle(t, e = fn) {
    function n(r) {
      r !== void 0 && parseFloat(r) < 1 && console.warn("THREE.Color: Alpha component of " + t + " will be ignored.");
    }
    let i;
    if (i = /^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(t)) {
      let r;
      const o = i[1], s = i[2];
      switch (o) {
        case "rgb":
        case "rgba":
          if (r = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))
            return this.r = Math.min(255, parseInt(r[1], 10)) / 255, this.g = Math.min(255, parseInt(r[2], 10)) / 255, this.b = Math.min(255, parseInt(r[3], 10)) / 255, Ce.toWorkingColorSpace(this, e), n(r[4]), this;
          if (r = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))
            return this.r = Math.min(100, parseInt(r[1], 10)) / 100, this.g = Math.min(100, parseInt(r[2], 10)) / 100, this.b = Math.min(100, parseInt(r[3], 10)) / 100, Ce.toWorkingColorSpace(this, e), n(r[4]), this;
          break;
        case "hsl":
        case "hsla":
          if (r = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s)) {
            const l = parseFloat(r[1]) / 360, c = parseFloat(r[2]) / 100, h = parseFloat(r[3]) / 100;
            return n(r[4]), this.setHSL(l, c, h, e);
          }
          break;
      }
    } else if (i = /^\#([A-Fa-f\d]+)$/.exec(t)) {
      const r = i[1], o = r.length;
      if (o === 3)
        return this.r = parseInt(r.charAt(0) + r.charAt(0), 16) / 255, this.g = parseInt(r.charAt(1) + r.charAt(1), 16) / 255, this.b = parseInt(r.charAt(2) + r.charAt(2), 16) / 255, Ce.toWorkingColorSpace(this, e), this;
      if (o === 6)
        return this.r = parseInt(r.charAt(0) + r.charAt(1), 16) / 255, this.g = parseInt(r.charAt(2) + r.charAt(3), 16) / 255, this.b = parseInt(r.charAt(4) + r.charAt(5), 16) / 255, Ce.toWorkingColorSpace(this, e), this;
    }
    return t && t.length > 0 ? this.setColorName(t, e) : this;
  }
  setColorName(t, e = fn) {
    const n = eh[t.toLowerCase()];
    return n !== void 0 ? this.setHex(n, e) : console.warn("THREE.Color: Unknown color " + t), this;
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(t) {
    return this.r = t.r, this.g = t.g, this.b = t.b, this;
  }
  copySRGBToLinear(t) {
    return this.r = wi(t.r), this.g = wi(t.g), this.b = wi(t.b), this;
  }
  copyLinearToSRGB(t) {
    return this.r = Us(t.r), this.g = Us(t.g), this.b = Us(t.b), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(t = fn) {
    return Ce.fromWorkingColorSpace(fs(this, re), t), fe(re.r * 255, 0, 255) << 16 ^ fe(re.g * 255, 0, 255) << 8 ^ fe(re.b * 255, 0, 255) << 0;
  }
  getHexString(t = fn) {
    return ("000000" + this.getHex(t).toString(16)).slice(-6);
  }
  getHSL(t, e = Ce.workingColorSpace) {
    Ce.fromWorkingColorSpace(fs(this, re), e);
    const n = re.r, i = re.g, r = re.b, o = Math.max(n, i, r), s = Math.min(n, i, r);
    let l, c;
    const h = (s + o) / 2;
    if (s === o)
      l = 0, c = 0;
    else {
      const u = o - s;
      switch (c = h <= 0.5 ? u / (o + s) : u / (2 - o - s), o) {
        case n:
          l = (i - r) / u + (i < r ? 6 : 0);
          break;
        case i:
          l = (r - n) / u + 2;
          break;
        case r:
          l = (n - i) / u + 4;
          break;
      }
      l /= 6;
    }
    return t.h = l, t.s = c, t.l = h, t;
  }
  getRGB(t, e = Ce.workingColorSpace) {
    return Ce.fromWorkingColorSpace(fs(this, re), e), t.r = re.r, t.g = re.g, t.b = re.b, t;
  }
  getStyle(t = fn) {
    return Ce.fromWorkingColorSpace(fs(this, re), t), t !== fn ? `color(${t} ${re.r} ${re.g} ${re.b})` : `rgb(${re.r * 255 | 0},${re.g * 255 | 0},${re.b * 255 | 0})`;
  }
  offsetHSL(t, e, n) {
    return this.getHSL(hn), hn.h += t, hn.s += e, hn.l += n, this.setHSL(hn.h, hn.s, hn.l), this;
  }
  add(t) {
    return this.r += t.r, this.g += t.g, this.b += t.b, this;
  }
  addColors(t, e) {
    return this.r = t.r + e.r, this.g = t.g + e.g, this.b = t.b + e.b, this;
  }
  addScalar(t) {
    return this.r += t, this.g += t, this.b += t, this;
  }
  sub(t) {
    return this.r = Math.max(0, this.r - t.r), this.g = Math.max(0, this.g - t.g), this.b = Math.max(0, this.b - t.b), this;
  }
  multiply(t) {
    return this.r *= t.r, this.g *= t.g, this.b *= t.b, this;
  }
  multiplyScalar(t) {
    return this.r *= t, this.g *= t, this.b *= t, this;
  }
  lerp(t, e) {
    return this.r += (t.r - this.r) * e, this.g += (t.g - this.g) * e, this.b += (t.b - this.b) * e, this;
  }
  lerpColors(t, e, n) {
    return this.r = t.r + (e.r - t.r) * n, this.g = t.g + (e.g - t.g) * n, this.b = t.b + (e.b - t.b) * n, this;
  }
  lerpHSL(t, e) {
    this.getHSL(hn), t.getHSL(ds);
    const n = Xr(hn.h, ds.h, e), i = Xr(hn.s, ds.s, e), r = Xr(hn.l, ds.l, e);
    return this.setHSL(n, i, r), this;
  }
  equals(t) {
    return t.r === this.r && t.g === this.g && t.b === this.b;
  }
  fromArray(t, e = 0) {
    return this.r = t[e], this.g = t[e + 1], this.b = t[e + 2], this;
  }
  toArray(t = [], e = 0) {
    return t[e] = this.r, t[e + 1] = this.g, t[e + 2] = this.b, t;
  }
  fromBufferAttribute(t, e) {
    return this.r = t.getX(e), this.g = t.getY(e), this.b = t.getZ(e), this;
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
}
Ot.NAMES = eh;
let Bi;
class nh {
  static getDataURL(t) {
    if (/^data:/i.test(t.src) || typeof HTMLCanvasElement > "u")
      return t.src;
    let e;
    if (t instanceof HTMLCanvasElement)
      e = t;
    else {
      Bi === void 0 && (Bi = Qr("canvas")), Bi.width = t.width, Bi.height = t.height;
      const n = Bi.getContext("2d");
      t instanceof ImageData ? n.putImageData(t, 0, 0) : n.drawImage(t, 0, 0, t.width, t.height), e = Bi;
    }
    return e.width > 2048 || e.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", t), e.toDataURL("image/jpeg", 0.6)) : e.toDataURL("image/png");
  }
  static sRGBToLinear(t) {
    if (typeof HTMLImageElement < "u" && t instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && t instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && t instanceof ImageBitmap) {
      const e = Qr("canvas");
      e.width = t.width, e.height = t.height;
      const n = e.getContext("2d");
      n.drawImage(t, 0, 0, t.width, t.height);
      const i = n.getImageData(0, 0, t.width, t.height), r = i.data;
      for (let o = 0; o < r.length; o++)
        r[o] = wi(r[o] / 255) * 255;
      return n.putImageData(i, 0, 0), e;
    } else if (t.data) {
      const e = t.data.slice(0);
      for (let n = 0; n < e.length; n++)
        e instanceof Uint8Array || e instanceof Uint8ClampedArray ? e[n] = Math.floor(wi(e[n] / 255) * 255) : e[n] = wi(e[n]);
      return {
        data: e,
        width: t.width,
        height: t.height
      };
    } else
      return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), t;
  }
}
class ih {
  constructor(t = null) {
    this.isSource = !0, this.uuid = Gn(), this.data = t, this.version = 0;
  }
  set needsUpdate(t) {
    t === !0 && this.version++;
  }
  toJSON(t) {
    const e = t === void 0 || typeof t == "string";
    if (!e && t.images[this.uuid] !== void 0)
      return t.images[this.uuid];
    const n = {
      uuid: this.uuid,
      url: ""
    }, i = this.data;
    if (i !== null) {
      let r;
      if (Array.isArray(i)) {
        r = [];
        for (let o = 0, s = i.length; o < s; o++)
          i[o].isDataTexture ? r.push(xa(i[o].image)) : r.push(xa(i[o]));
      } else
        r = xa(i);
      n.url = r;
    }
    return e || (t.images[this.uuid] = n), n;
  }
}
function xa(a) {
  return typeof HTMLImageElement < "u" && a instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && a instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && a instanceof ImageBitmap ? nh.getDataURL(a) : a.data ? {
    data: Array.from(a.data),
    width: a.width,
    height: a.height,
    type: a.data.constructor.name
  } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let zd = 0;
class Oe extends Fi {
  constructor(t = Oe.DEFAULT_IMAGE, e = Oe.DEFAULT_MAPPING, n = pn, i = pn, r = Xe, o = Zr, s = mn, l = Li, c = Oe.DEFAULT_ANISOTROPY, h = Di) {
    super(), this.isTexture = !0, Object.defineProperty(this, "id", { value: zd++ }), this.uuid = Gn(), this.name = "", this.source = new ih(t), this.mipmaps = [], this.mapping = e, this.wrapS = n, this.wrapT = i, this.magFilter = r, this.minFilter = o, this.anisotropy = c, this.format = s, this.internalFormat = null, this.type = l, this.offset = new vt(0, 0), this.repeat = new vt(1, 1), this.center = new vt(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new Ye(), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.encoding = h, this.userData = {}, this.version = 0, this.onUpdate = null, this.isRenderTargetTexture = !1, this.needsPMREMUpdate = !1;
  }
  get image() {
    return this.source.data;
  }
  set image(t) {
    this.source.data = t;
  }
  updateMatrix() {
    this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    return this.name = t.name, this.source = t.source, this.mipmaps = t.mipmaps.slice(0), this.mapping = t.mapping, this.wrapS = t.wrapS, this.wrapT = t.wrapT, this.magFilter = t.magFilter, this.minFilter = t.minFilter, this.anisotropy = t.anisotropy, this.format = t.format, this.internalFormat = t.internalFormat, this.type = t.type, this.offset.copy(t.offset), this.repeat.copy(t.repeat), this.center.copy(t.center), this.rotation = t.rotation, this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrix.copy(t.matrix), this.generateMipmaps = t.generateMipmaps, this.premultiplyAlpha = t.premultiplyAlpha, this.flipY = t.flipY, this.unpackAlignment = t.unpackAlignment, this.encoding = t.encoding, this.userData = JSON.parse(JSON.stringify(t.userData)), this.needsUpdate = !0, this;
  }
  toJSON(t) {
    const e = t === void 0 || typeof t == "string";
    if (!e && t.textures[this.uuid] !== void 0)
      return t.textures[this.uuid];
    const n = {
      metadata: {
        version: 4.5,
        type: "Texture",
        generator: "Texture.toJSON"
      },
      uuid: this.uuid,
      name: this.name,
      image: this.source.toJSON(t).uuid,
      mapping: this.mapping,
      repeat: [this.repeat.x, this.repeat.y],
      offset: [this.offset.x, this.offset.y],
      center: [this.center.x, this.center.y],
      rotation: this.rotation,
      wrap: [this.wrapS, this.wrapT],
      format: this.format,
      type: this.type,
      encoding: this.encoding,
      minFilter: this.minFilter,
      magFilter: this.magFilter,
      anisotropy: this.anisotropy,
      flipY: this.flipY,
      generateMipmaps: this.generateMipmaps,
      premultiplyAlpha: this.premultiplyAlpha,
      unpackAlignment: this.unpackAlignment
    };
    return Object.keys(this.userData).length > 0 && (n.userData = this.userData), e || (t.textures[this.uuid] = n), n;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  transformUv(t) {
    if (this.mapping !== Kc)
      return t;
    if (t.applyMatrix3(this.matrix), t.x < 0 || t.x > 1)
      switch (this.wrapS) {
        case ro:
          t.x = t.x - Math.floor(t.x);
          break;
        case pn:
          t.x = t.x < 0 ? 0 : 1;
          break;
        case so:
          Math.abs(Math.floor(t.x) % 2) === 1 ? t.x = Math.ceil(t.x) - t.x : t.x = t.x - Math.floor(t.x);
          break;
      }
    if (t.y < 0 || t.y > 1)
      switch (this.wrapT) {
        case ro:
          t.y = t.y - Math.floor(t.y);
          break;
        case pn:
          t.y = t.y < 0 ? 0 : 1;
          break;
        case so:
          Math.abs(Math.floor(t.y) % 2) === 1 ? t.y = Math.ceil(t.y) - t.y : t.y = t.y - Math.floor(t.y);
          break;
      }
    return this.flipY && (t.y = 1 - t.y), t;
  }
  set needsUpdate(t) {
    t === !0 && (this.version++, this.source.needsUpdate = !0);
  }
}
Oe.DEFAULT_IMAGE = null;
Oe.DEFAULT_MAPPING = Kc;
Oe.DEFAULT_ANISOTROPY = 1;
class Zt {
  constructor(t = 0, e = 0, n = 0, i = 1) {
    Zt.prototype.isVector4 = !0, this.x = t, this.y = e, this.z = n, this.w = i;
  }
  get width() {
    return this.z;
  }
  set width(t) {
    this.z = t;
  }
  get height() {
    return this.w;
  }
  set height(t) {
    this.w = t;
  }
  set(t, e, n, i) {
    return this.x = t, this.y = e, this.z = n, this.w = i, this;
  }
  setScalar(t) {
    return this.x = t, this.y = t, this.z = t, this.w = t, this;
  }
  setX(t) {
    return this.x = t, this;
  }
  setY(t) {
    return this.y = t, this;
  }
  setZ(t) {
    return this.z = t, this;
  }
  setW(t) {
    return this.w = t, this;
  }
  setComponent(t, e) {
    switch (t) {
      case 0:
        this.x = e;
        break;
      case 1:
        this.y = e;
        break;
      case 2:
        this.z = e;
        break;
      case 3:
        this.w = e;
        break;
      default:
        throw new Error("index is out of range: " + t);
    }
    return this;
  }
  getComponent(t) {
    switch (t) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + t);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(t) {
    return this.x = t.x, this.y = t.y, this.z = t.z, this.w = t.w !== void 0 ? t.w : 1, this;
  }
  add(t) {
    return this.x += t.x, this.y += t.y, this.z += t.z, this.w += t.w, this;
  }
  addScalar(t) {
    return this.x += t, this.y += t, this.z += t, this.w += t, this;
  }
  addVectors(t, e) {
    return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this.w = t.w + e.w, this;
  }
  addScaledVector(t, e) {
    return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this.w += t.w * e, this;
  }
  sub(t) {
    return this.x -= t.x, this.y -= t.y, this.z -= t.z, this.w -= t.w, this;
  }
  subScalar(t) {
    return this.x -= t, this.y -= t, this.z -= t, this.w -= t, this;
  }
  subVectors(t, e) {
    return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this.w = t.w - e.w, this;
  }
  multiply(t) {
    return this.x *= t.x, this.y *= t.y, this.z *= t.z, this.w *= t.w, this;
  }
  multiplyScalar(t) {
    return this.x *= t, this.y *= t, this.z *= t, this.w *= t, this;
  }
  applyMatrix4(t) {
    const e = this.x, n = this.y, i = this.z, r = this.w, o = t.elements;
    return this.x = o[0] * e + o[4] * n + o[8] * i + o[12] * r, this.y = o[1] * e + o[5] * n + o[9] * i + o[13] * r, this.z = o[2] * e + o[6] * n + o[10] * i + o[14] * r, this.w = o[3] * e + o[7] * n + o[11] * i + o[15] * r, this;
  }
  divideScalar(t) {
    return this.multiplyScalar(1 / t);
  }
  setAxisAngleFromQuaternion(t) {
    this.w = 2 * Math.acos(t.w);
    const e = Math.sqrt(1 - t.w * t.w);
    return e < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = t.x / e, this.y = t.y / e, this.z = t.z / e), this;
  }
  setAxisAngleFromRotationMatrix(t) {
    let e, n, i, r;
    const l = t.elements, c = l[0], h = l[4], u = l[8], d = l[1], m = l[5], g = l[9], f = l[2], p = l[6], _ = l[10];
    if (Math.abs(h - d) < 0.01 && Math.abs(u - f) < 0.01 && Math.abs(g - p) < 0.01) {
      if (Math.abs(h + d) < 0.1 && Math.abs(u + f) < 0.1 && Math.abs(g + p) < 0.1 && Math.abs(c + m + _ - 3) < 0.1)
        return this.set(1, 0, 0, 0), this;
      e = Math.PI;
      const x = (c + 1) / 2, y = (m + 1) / 2, M = (_ + 1) / 2, A = (h + d) / 4, P = (u + f) / 4, v = (g + p) / 4;
      return x > y && x > M ? x < 0.01 ? (n = 0, i = 0.707106781, r = 0.707106781) : (n = Math.sqrt(x), i = A / n, r = P / n) : y > M ? y < 0.01 ? (n = 0.707106781, i = 0, r = 0.707106781) : (i = Math.sqrt(y), n = A / i, r = v / i) : M < 0.01 ? (n = 0.707106781, i = 0.707106781, r = 0) : (r = Math.sqrt(M), n = P / r, i = v / r), this.set(n, i, r, e), this;
    }
    let b = Math.sqrt((p - g) * (p - g) + (u - f) * (u - f) + (d - h) * (d - h));
    return Math.abs(b) < 1e-3 && (b = 1), this.x = (p - g) / b, this.y = (u - f) / b, this.z = (d - h) / b, this.w = Math.acos((c + m + _ - 1) / 2), this;
  }
  min(t) {
    return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this.w = Math.min(this.w, t.w), this;
  }
  max(t) {
    return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this.w = Math.max(this.w, t.w), this;
  }
  clamp(t, e) {
    return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this.z = Math.max(t.z, Math.min(e.z, this.z)), this.w = Math.max(t.w, Math.min(e.w, this.w)), this;
  }
  clampScalar(t, e) {
    return this.x = Math.max(t, Math.min(e, this.x)), this.y = Math.max(t, Math.min(e, this.y)), this.z = Math.max(t, Math.min(e, this.z)), this.w = Math.max(t, Math.min(e, this.w)), this;
  }
  clampLength(t, e) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(t, Math.min(e, n)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this;
  }
  roundToZero() {
    return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this;
  }
  dot(t) {
    return this.x * t.x + this.y * t.y + this.z * t.z + this.w * t.w;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(t) {
    return this.normalize().multiplyScalar(t);
  }
  lerp(t, e) {
    return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this.w += (t.w - this.w) * e, this;
  }
  lerpVectors(t, e, n) {
    return this.x = t.x + (e.x - t.x) * n, this.y = t.y + (e.y - t.y) * n, this.z = t.z + (e.z - t.z) * n, this.w = t.w + (e.w - t.w) * n, this;
  }
  equals(t) {
    return t.x === this.x && t.y === this.y && t.z === this.z && t.w === this.w;
  }
  fromArray(t, e = 0) {
    return this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this.w = t[e + 3], this;
  }
  toArray(t = [], e = 0) {
    return t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t[e + 3] = this.w, t;
  }
  fromBufferAttribute(t, e) {
    return this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this.w = t.getW(e), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
}
class Ri extends Fi {
  constructor(t = 1, e = 1, n = {}) {
    super(), this.isWebGLRenderTarget = !0, this.width = t, this.height = e, this.depth = 1, this.scissor = new Zt(0, 0, t, e), this.scissorTest = !1, this.viewport = new Zt(0, 0, t, e);
    const i = { width: t, height: e, depth: 1 };
    this.texture = new Oe(i, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.encoding), this.texture.isRenderTargetTexture = !0, this.texture.flipY = !1, this.texture.generateMipmaps = n.generateMipmaps !== void 0 ? n.generateMipmaps : !1, this.texture.internalFormat = n.internalFormat !== void 0 ? n.internalFormat : null, this.texture.minFilter = n.minFilter !== void 0 ? n.minFilter : Xe, this.depthBuffer = n.depthBuffer !== void 0 ? n.depthBuffer : !0, this.stencilBuffer = n.stencilBuffer !== void 0 ? n.stencilBuffer : !1, this.depthTexture = n.depthTexture !== void 0 ? n.depthTexture : null, this.samples = n.samples !== void 0 ? n.samples : 0;
  }
  setSize(t, e, n = 1) {
    (this.width !== t || this.height !== e || this.depth !== n) && (this.width = t, this.height = e, this.depth = n, this.texture.image.width = t, this.texture.image.height = e, this.texture.image.depth = n, this.dispose()), this.viewport.set(0, 0, t, e), this.scissor.set(0, 0, t, e);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    this.width = t.width, this.height = t.height, this.depth = t.depth, this.viewport.copy(t.viewport), this.texture = t.texture.clone(), this.texture.isRenderTargetTexture = !0;
    const e = Object.assign({}, t.texture.image);
    return this.texture.source = new ih(e), this.depthBuffer = t.depthBuffer, this.stencilBuffer = t.stencilBuffer, t.depthTexture !== null && (this.depthTexture = t.depthTexture.clone()), this.samples = t.samples, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class rh extends Oe {
  constructor(t = null, e = 1, n = 1, i = 1) {
    super(null), this.isDataArrayTexture = !0, this.image = { data: t, width: e, height: n, depth: i }, this.magFilter = Me, this.minFilter = Me, this.wrapR = pn, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class Fd extends Oe {
  constructor(t = null, e = 1, n = 1, i = 1) {
    super(null), this.isData3DTexture = !0, this.image = { data: t, width: e, height: n, depth: i }, this.magFilter = Me, this.minFilter = Me, this.wrapR = pn, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class Ii {
  constructor(t = 0, e = 0, n = 0, i = 1) {
    this.isQuaternion = !0, this._x = t, this._y = e, this._z = n, this._w = i;
  }
  static slerpFlat(t, e, n, i, r, o, s) {
    let l = n[i + 0], c = n[i + 1], h = n[i + 2], u = n[i + 3];
    const d = r[o + 0], m = r[o + 1], g = r[o + 2], f = r[o + 3];
    if (s === 0) {
      t[e + 0] = l, t[e + 1] = c, t[e + 2] = h, t[e + 3] = u;
      return;
    }
    if (s === 1) {
      t[e + 0] = d, t[e + 1] = m, t[e + 2] = g, t[e + 3] = f;
      return;
    }
    if (u !== f || l !== d || c !== m || h !== g) {
      let p = 1 - s;
      const _ = l * d + c * m + h * g + u * f, b = _ >= 0 ? 1 : -1, x = 1 - _ * _;
      if (x > Number.EPSILON) {
        const M = Math.sqrt(x), A = Math.atan2(M, _ * b);
        p = Math.sin(p * A) / M, s = Math.sin(s * A) / M;
      }
      const y = s * b;
      if (l = l * p + d * y, c = c * p + m * y, h = h * p + g * y, u = u * p + f * y, p === 1 - s) {
        const M = 1 / Math.sqrt(l * l + c * c + h * h + u * u);
        l *= M, c *= M, h *= M, u *= M;
      }
    }
    t[e] = l, t[e + 1] = c, t[e + 2] = h, t[e + 3] = u;
  }
  static multiplyQuaternionsFlat(t, e, n, i, r, o) {
    const s = n[i], l = n[i + 1], c = n[i + 2], h = n[i + 3], u = r[o], d = r[o + 1], m = r[o + 2], g = r[o + 3];
    return t[e] = s * g + h * u + l * m - c * d, t[e + 1] = l * g + h * d + c * u - s * m, t[e + 2] = c * g + h * m + s * d - l * u, t[e + 3] = h * g - s * u - l * d - c * m, t;
  }
  get x() {
    return this._x;
  }
  set x(t) {
    this._x = t, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(t) {
    this._y = t, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(t) {
    this._z = t, this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(t) {
    this._w = t, this._onChangeCallback();
  }
  set(t, e, n, i) {
    return this._x = t, this._y = e, this._z = n, this._w = i, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(t) {
    return this._x = t.x, this._y = t.y, this._z = t.z, this._w = t.w, this._onChangeCallback(), this;
  }
  setFromEuler(t, e) {
    const n = t._x, i = t._y, r = t._z, o = t._order, s = Math.cos, l = Math.sin, c = s(n / 2), h = s(i / 2), u = s(r / 2), d = l(n / 2), m = l(i / 2), g = l(r / 2);
    switch (o) {
      case "XYZ":
        this._x = d * h * u + c * m * g, this._y = c * m * u - d * h * g, this._z = c * h * g + d * m * u, this._w = c * h * u - d * m * g;
        break;
      case "YXZ":
        this._x = d * h * u + c * m * g, this._y = c * m * u - d * h * g, this._z = c * h * g - d * m * u, this._w = c * h * u + d * m * g;
        break;
      case "ZXY":
        this._x = d * h * u - c * m * g, this._y = c * m * u + d * h * g, this._z = c * h * g + d * m * u, this._w = c * h * u - d * m * g;
        break;
      case "ZYX":
        this._x = d * h * u - c * m * g, this._y = c * m * u + d * h * g, this._z = c * h * g - d * m * u, this._w = c * h * u + d * m * g;
        break;
      case "YZX":
        this._x = d * h * u + c * m * g, this._y = c * m * u + d * h * g, this._z = c * h * g - d * m * u, this._w = c * h * u - d * m * g;
        break;
      case "XZY":
        this._x = d * h * u - c * m * g, this._y = c * m * u - d * h * g, this._z = c * h * g + d * m * u, this._w = c * h * u + d * m * g;
        break;
      default:
        console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + o);
    }
    return e !== !1 && this._onChangeCallback(), this;
  }
  setFromAxisAngle(t, e) {
    const n = e / 2, i = Math.sin(n);
    return this._x = t.x * i, this._y = t.y * i, this._z = t.z * i, this._w = Math.cos(n), this._onChangeCallback(), this;
  }
  setFromRotationMatrix(t) {
    const e = t.elements, n = e[0], i = e[4], r = e[8], o = e[1], s = e[5], l = e[9], c = e[2], h = e[6], u = e[10], d = n + s + u;
    if (d > 0) {
      const m = 0.5 / Math.sqrt(d + 1);
      this._w = 0.25 / m, this._x = (h - l) * m, this._y = (r - c) * m, this._z = (o - i) * m;
    } else if (n > s && n > u) {
      const m = 2 * Math.sqrt(1 + n - s - u);
      this._w = (h - l) / m, this._x = 0.25 * m, this._y = (i + o) / m, this._z = (r + c) / m;
    } else if (s > u) {
      const m = 2 * Math.sqrt(1 + s - n - u);
      this._w = (r - c) / m, this._x = (i + o) / m, this._y = 0.25 * m, this._z = (l + h) / m;
    } else {
      const m = 2 * Math.sqrt(1 + u - n - s);
      this._w = (o - i) / m, this._x = (r + c) / m, this._y = (l + h) / m, this._z = 0.25 * m;
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(t, e) {
    let n = t.dot(e) + 1;
    return n < Number.EPSILON ? (n = 0, Math.abs(t.x) > Math.abs(t.z) ? (this._x = -t.y, this._y = t.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -t.z, this._z = t.y, this._w = n)) : (this._x = t.y * e.z - t.z * e.y, this._y = t.z * e.x - t.x * e.z, this._z = t.x * e.y - t.y * e.x, this._w = n), this.normalize();
  }
  angleTo(t) {
    return 2 * Math.acos(Math.abs(fe(this.dot(t), -1, 1)));
  }
  rotateTowards(t, e) {
    const n = this.angleTo(t);
    if (n === 0)
      return this;
    const i = Math.min(1, e / n);
    return this.slerp(t, i), this;
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
  }
  dot(t) {
    return this._x * t._x + this._y * t._y + this._z * t._z + this._w * t._w;
  }
  lengthSq() {
    return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
  }
  length() {
    return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
  }
  normalize() {
    let t = this.length();
    return t === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (t = 1 / t, this._x = this._x * t, this._y = this._y * t, this._z = this._z * t, this._w = this._w * t), this._onChangeCallback(), this;
  }
  multiply(t) {
    return this.multiplyQuaternions(this, t);
  }
  premultiply(t) {
    return this.multiplyQuaternions(t, this);
  }
  multiplyQuaternions(t, e) {
    const n = t._x, i = t._y, r = t._z, o = t._w, s = e._x, l = e._y, c = e._z, h = e._w;
    return this._x = n * h + o * s + i * c - r * l, this._y = i * h + o * l + r * s - n * c, this._z = r * h + o * c + n * l - i * s, this._w = o * h - n * s - i * l - r * c, this._onChangeCallback(), this;
  }
  slerp(t, e) {
    if (e === 0)
      return this;
    if (e === 1)
      return this.copy(t);
    const n = this._x, i = this._y, r = this._z, o = this._w;
    let s = o * t._w + n * t._x + i * t._y + r * t._z;
    if (s < 0 ? (this._w = -t._w, this._x = -t._x, this._y = -t._y, this._z = -t._z, s = -s) : this.copy(t), s >= 1)
      return this._w = o, this._x = n, this._y = i, this._z = r, this;
    const l = 1 - s * s;
    if (l <= Number.EPSILON) {
      const m = 1 - e;
      return this._w = m * o + e * this._w, this._x = m * n + e * this._x, this._y = m * i + e * this._y, this._z = m * r + e * this._z, this.normalize(), this._onChangeCallback(), this;
    }
    const c = Math.sqrt(l), h = Math.atan2(c, s), u = Math.sin((1 - e) * h) / c, d = Math.sin(e * h) / c;
    return this._w = o * u + this._w * d, this._x = n * u + this._x * d, this._y = i * u + this._y * d, this._z = r * u + this._z * d, this._onChangeCallback(), this;
  }
  slerpQuaternions(t, e, n) {
    return this.copy(t).slerp(e, n);
  }
  random() {
    const t = Math.random(), e = Math.sqrt(1 - t), n = Math.sqrt(t), i = 2 * Math.PI * Math.random(), r = 2 * Math.PI * Math.random();
    return this.set(
      e * Math.cos(i),
      n * Math.sin(r),
      n * Math.cos(r),
      e * Math.sin(i)
    );
  }
  equals(t) {
    return t._x === this._x && t._y === this._y && t._z === this._z && t._w === this._w;
  }
  fromArray(t, e = 0) {
    return this._x = t[e], this._y = t[e + 1], this._z = t[e + 2], this._w = t[e + 3], this._onChangeCallback(), this;
  }
  toArray(t = [], e = 0) {
    return t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._w, t;
  }
  fromBufferAttribute(t, e) {
    return this._x = t.getX(e), this._y = t.getY(e), this._z = t.getZ(e), this._w = t.getW(e), this;
  }
  _onChange(t) {
    return this._onChangeCallback = t, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
}
class R {
  constructor(t = 0, e = 0, n = 0) {
    R.prototype.isVector3 = !0, this.x = t, this.y = e, this.z = n;
  }
  set(t, e, n) {
    return n === void 0 && (n = this.z), this.x = t, this.y = e, this.z = n, this;
  }
  setScalar(t) {
    return this.x = t, this.y = t, this.z = t, this;
  }
  setX(t) {
    return this.x = t, this;
  }
  setY(t) {
    return this.y = t, this;
  }
  setZ(t) {
    return this.z = t, this;
  }
  setComponent(t, e) {
    switch (t) {
      case 0:
        this.x = e;
        break;
      case 1:
        this.y = e;
        break;
      case 2:
        this.z = e;
        break;
      default:
        throw new Error("index is out of range: " + t);
    }
    return this;
  }
  getComponent(t) {
    switch (t) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + t);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(t) {
    return this.x = t.x, this.y = t.y, this.z = t.z, this;
  }
  add(t) {
    return this.x += t.x, this.y += t.y, this.z += t.z, this;
  }
  addScalar(t) {
    return this.x += t, this.y += t, this.z += t, this;
  }
  addVectors(t, e) {
    return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this;
  }
  addScaledVector(t, e) {
    return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this;
  }
  sub(t) {
    return this.x -= t.x, this.y -= t.y, this.z -= t.z, this;
  }
  subScalar(t) {
    return this.x -= t, this.y -= t, this.z -= t, this;
  }
  subVectors(t, e) {
    return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this;
  }
  multiply(t) {
    return this.x *= t.x, this.y *= t.y, this.z *= t.z, this;
  }
  multiplyScalar(t) {
    return this.x *= t, this.y *= t, this.z *= t, this;
  }
  multiplyVectors(t, e) {
    return this.x = t.x * e.x, this.y = t.y * e.y, this.z = t.z * e.z, this;
  }
  applyEuler(t) {
    return this.applyQuaternion(Ol.setFromEuler(t));
  }
  applyAxisAngle(t, e) {
    return this.applyQuaternion(Ol.setFromAxisAngle(t, e));
  }
  applyMatrix3(t) {
    const e = this.x, n = this.y, i = this.z, r = t.elements;
    return this.x = r[0] * e + r[3] * n + r[6] * i, this.y = r[1] * e + r[4] * n + r[7] * i, this.z = r[2] * e + r[5] * n + r[8] * i, this;
  }
  applyNormalMatrix(t) {
    return this.applyMatrix3(t).normalize();
  }
  applyMatrix4(t) {
    const e = this.x, n = this.y, i = this.z, r = t.elements, o = 1 / (r[3] * e + r[7] * n + r[11] * i + r[15]);
    return this.x = (r[0] * e + r[4] * n + r[8] * i + r[12]) * o, this.y = (r[1] * e + r[5] * n + r[9] * i + r[13]) * o, this.z = (r[2] * e + r[6] * n + r[10] * i + r[14]) * o, this;
  }
  applyQuaternion(t) {
    const e = this.x, n = this.y, i = this.z, r = t.x, o = t.y, s = t.z, l = t.w, c = l * e + o * i - s * n, h = l * n + s * e - r * i, u = l * i + r * n - o * e, d = -r * e - o * n - s * i;
    return this.x = c * l + d * -r + h * -s - u * -o, this.y = h * l + d * -o + u * -r - c * -s, this.z = u * l + d * -s + c * -o - h * -r, this;
  }
  project(t) {
    return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix);
  }
  unproject(t) {
    return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld);
  }
  transformDirection(t) {
    const e = this.x, n = this.y, i = this.z, r = t.elements;
    return this.x = r[0] * e + r[4] * n + r[8] * i, this.y = r[1] * e + r[5] * n + r[9] * i, this.z = r[2] * e + r[6] * n + r[10] * i, this.normalize();
  }
  divide(t) {
    return this.x /= t.x, this.y /= t.y, this.z /= t.z, this;
  }
  divideScalar(t) {
    return this.multiplyScalar(1 / t);
  }
  min(t) {
    return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this;
  }
  max(t) {
    return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this;
  }
  clamp(t, e) {
    return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this.z = Math.max(t.z, Math.min(e.z, this.z)), this;
  }
  clampScalar(t, e) {
    return this.x = Math.max(t, Math.min(e, this.x)), this.y = Math.max(t, Math.min(e, this.y)), this.z = Math.max(t, Math.min(e, this.z)), this;
  }
  clampLength(t, e) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(t, Math.min(e, n)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
  }
  roundToZero() {
    return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
  }
  dot(t) {
    return this.x * t.x + this.y * t.y + this.z * t.z;
  }
  // TODO lengthSquared?
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(t) {
    return this.normalize().multiplyScalar(t);
  }
  lerp(t, e) {
    return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this;
  }
  lerpVectors(t, e, n) {
    return this.x = t.x + (e.x - t.x) * n, this.y = t.y + (e.y - t.y) * n, this.z = t.z + (e.z - t.z) * n, this;
  }
  cross(t) {
    return this.crossVectors(this, t);
  }
  crossVectors(t, e) {
    const n = t.x, i = t.y, r = t.z, o = e.x, s = e.y, l = e.z;
    return this.x = i * l - r * s, this.y = r * o - n * l, this.z = n * s - i * o, this;
  }
  projectOnVector(t) {
    const e = t.lengthSq();
    if (e === 0)
      return this.set(0, 0, 0);
    const n = t.dot(this) / e;
    return this.copy(t).multiplyScalar(n);
  }
  projectOnPlane(t) {
    return ya.copy(this).projectOnVector(t), this.sub(ya);
  }
  reflect(t) {
    return this.sub(ya.copy(t).multiplyScalar(2 * this.dot(t)));
  }
  angleTo(t) {
    const e = Math.sqrt(this.lengthSq() * t.lengthSq());
    if (e === 0)
      return Math.PI / 2;
    const n = this.dot(t) / e;
    return Math.acos(fe(n, -1, 1));
  }
  distanceTo(t) {
    return Math.sqrt(this.distanceToSquared(t));
  }
  distanceToSquared(t) {
    const e = this.x - t.x, n = this.y - t.y, i = this.z - t.z;
    return e * e + n * n + i * i;
  }
  manhattanDistanceTo(t) {
    return Math.abs(this.x - t.x) + Math.abs(this.y - t.y) + Math.abs(this.z - t.z);
  }
  setFromSpherical(t) {
    return this.setFromSphericalCoords(t.radius, t.phi, t.theta);
  }
  setFromSphericalCoords(t, e, n) {
    const i = Math.sin(e) * t;
    return this.x = i * Math.sin(n), this.y = Math.cos(e) * t, this.z = i * Math.cos(n), this;
  }
  setFromCylindrical(t) {
    return this.setFromCylindricalCoords(t.radius, t.theta, t.y);
  }
  setFromCylindricalCoords(t, e, n) {
    return this.x = t * Math.sin(e), this.y = n, this.z = t * Math.cos(e), this;
  }
  setFromMatrixPosition(t) {
    const e = t.elements;
    return this.x = e[12], this.y = e[13], this.z = e[14], this;
  }
  setFromMatrixScale(t) {
    const e = this.setFromMatrixColumn(t, 0).length(), n = this.setFromMatrixColumn(t, 1).length(), i = this.setFromMatrixColumn(t, 2).length();
    return this.x = e, this.y = n, this.z = i, this;
  }
  setFromMatrixColumn(t, e) {
    return this.fromArray(t.elements, e * 4);
  }
  setFromMatrix3Column(t, e) {
    return this.fromArray(t.elements, e * 3);
  }
  setFromEuler(t) {
    return this.x = t._x, this.y = t._y, this.z = t._z, this;
  }
  equals(t) {
    return t.x === this.x && t.y === this.y && t.z === this.z;
  }
  fromArray(t, e = 0) {
    return this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this;
  }
  toArray(t = [], e = 0) {
    return t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t;
  }
  fromBufferAttribute(t, e) {
    return this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
  }
  randomDirection() {
    const t = (Math.random() - 0.5) * 2, e = Math.random() * Math.PI * 2, n = Math.sqrt(1 - t ** 2);
    return this.x = n * Math.cos(e), this.y = n * Math.sin(e), this.z = t, this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
}
const ya = /* @__PURE__ */ new R(), Ol = /* @__PURE__ */ new Ii();
class ri {
  constructor(t = new R(1 / 0, 1 / 0, 1 / 0), e = new R(-1 / 0, -1 / 0, -1 / 0)) {
    this.isBox3 = !0, this.min = t, this.max = e;
  }
  set(t, e) {
    return this.min.copy(t), this.max.copy(e), this;
  }
  setFromArray(t) {
    let e = 1 / 0, n = 1 / 0, i = 1 / 0, r = -1 / 0, o = -1 / 0, s = -1 / 0;
    for (let l = 0, c = t.length; l < c; l += 3) {
      const h = t[l], u = t[l + 1], d = t[l + 2];
      h < e && (e = h), u < n && (n = u), d < i && (i = d), h > r && (r = h), u > o && (o = u), d > s && (s = d);
    }
    return this.min.set(e, n, i), this.max.set(r, o, s), this;
  }
  setFromBufferAttribute(t) {
    let e = 1 / 0, n = 1 / 0, i = 1 / 0, r = -1 / 0, o = -1 / 0, s = -1 / 0;
    for (let l = 0, c = t.count; l < c; l++) {
      const h = t.getX(l), u = t.getY(l), d = t.getZ(l);
      h < e && (e = h), u < n && (n = u), d < i && (i = d), h > r && (r = h), u > o && (o = u), d > s && (s = d);
    }
    return this.min.set(e, n, i), this.max.set(r, o, s), this;
  }
  setFromPoints(t) {
    this.makeEmpty();
    for (let e = 0, n = t.length; e < n; e++)
      this.expandByPoint(t[e]);
    return this;
  }
  setFromCenterAndSize(t, e) {
    const n = ui.copy(e).multiplyScalar(0.5);
    return this.min.copy(t).sub(n), this.max.copy(t).add(n), this;
  }
  setFromObject(t, e = !1) {
    return this.makeEmpty(), this.expandByObject(t, e);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    return this.min.copy(t.min), this.max.copy(t.max), this;
  }
  makeEmpty() {
    return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this;
  }
  isEmpty() {
    return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
  }
  getCenter(t) {
    return this.isEmpty() ? t.set(0, 0, 0) : t.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(t) {
    return this.isEmpty() ? t.set(0, 0, 0) : t.subVectors(this.max, this.min);
  }
  expandByPoint(t) {
    return this.min.min(t), this.max.max(t), this;
  }
  expandByVector(t) {
    return this.min.sub(t), this.max.add(t), this;
  }
  expandByScalar(t) {
    return this.min.addScalar(-t), this.max.addScalar(t), this;
  }
  expandByObject(t, e = !1) {
    t.updateWorldMatrix(!1, !1);
    const n = t.geometry;
    if (n !== void 0)
      if (e && n.attributes != null && n.attributes.position !== void 0) {
        const r = n.attributes.position;
        for (let o = 0, s = r.count; o < s; o++)
          ui.fromBufferAttribute(r, o).applyMatrix4(t.matrixWorld), this.expandByPoint(ui);
      } else
        n.boundingBox === null && n.computeBoundingBox(), ba.copy(n.boundingBox), ba.applyMatrix4(t.matrixWorld), this.union(ba);
    const i = t.children;
    for (let r = 0, o = i.length; r < o; r++)
      this.expandByObject(i[r], e);
    return this;
  }
  containsPoint(t) {
    return !(t.x < this.min.x || t.x > this.max.x || t.y < this.min.y || t.y > this.max.y || t.z < this.min.z || t.z > this.max.z);
  }
  containsBox(t) {
    return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y && this.min.z <= t.min.z && t.max.z <= this.max.z;
  }
  getParameter(t, e) {
    return e.set(
      (t.x - this.min.x) / (this.max.x - this.min.x),
      (t.y - this.min.y) / (this.max.y - this.min.y),
      (t.z - this.min.z) / (this.max.z - this.min.z)
    );
  }
  intersectsBox(t) {
    return !(t.max.x < this.min.x || t.min.x > this.max.x || t.max.y < this.min.y || t.min.y > this.max.y || t.max.z < this.min.z || t.min.z > this.max.z);
  }
  intersectsSphere(t) {
    return this.clampPoint(t.center, ui), ui.distanceToSquared(t.center) <= t.radius * t.radius;
  }
  intersectsPlane(t) {
    let e, n;
    return t.normal.x > 0 ? (e = t.normal.x * this.min.x, n = t.normal.x * this.max.x) : (e = t.normal.x * this.max.x, n = t.normal.x * this.min.x), t.normal.y > 0 ? (e += t.normal.y * this.min.y, n += t.normal.y * this.max.y) : (e += t.normal.y * this.max.y, n += t.normal.y * this.min.y), t.normal.z > 0 ? (e += t.normal.z * this.min.z, n += t.normal.z * this.max.z) : (e += t.normal.z * this.max.z, n += t.normal.z * this.min.z), e <= -t.constant && n >= -t.constant;
  }
  intersectsTriangle(t) {
    if (this.isEmpty())
      return !1;
    this.getCenter(Pr), ps.subVectors(this.max, Pr), Gi.subVectors(t.a, Pr), Vi.subVectors(t.b, Pr), Hi.subVectors(t.c, Pr), Xn.subVectors(Vi, Gi), qn.subVectors(Hi, Vi), di.subVectors(Gi, Hi);
    let e = [
      0,
      -Xn.z,
      Xn.y,
      0,
      -qn.z,
      qn.y,
      0,
      -di.z,
      di.y,
      Xn.z,
      0,
      -Xn.x,
      qn.z,
      0,
      -qn.x,
      di.z,
      0,
      -di.x,
      -Xn.y,
      Xn.x,
      0,
      -qn.y,
      qn.x,
      0,
      -di.y,
      di.x,
      0
    ];
    return !Ma(e, Gi, Vi, Hi, ps) || (e = [1, 0, 0, 0, 1, 0, 0, 0, 1], !Ma(e, Gi, Vi, Hi, ps)) ? !1 : (ms.crossVectors(Xn, qn), e = [ms.x, ms.y, ms.z], Ma(e, Gi, Vi, Hi, ps));
  }
  clampPoint(t, e) {
    return e.copy(t).clamp(this.min, this.max);
  }
  distanceToPoint(t) {
    return ui.copy(t).clamp(this.min, this.max).sub(t).length();
  }
  getBoundingSphere(t) {
    return this.getCenter(t.center), t.radius = this.getSize(ui).length() * 0.5, t;
  }
  intersect(t) {
    return this.min.max(t.min), this.max.min(t.max), this.isEmpty() && this.makeEmpty(), this;
  }
  union(t) {
    return this.min.min(t.min), this.max.max(t.max), this;
  }
  applyMatrix4(t) {
    return this.isEmpty() ? this : (In[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t), In[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t), In[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t), In[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t), In[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t), In[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t), In[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t), In[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t), this.setFromPoints(In), this);
  }
  translate(t) {
    return this.min.add(t), this.max.add(t), this;
  }
  equals(t) {
    return t.min.equals(this.min) && t.max.equals(this.max);
  }
}
const In = [
  /* @__PURE__ */ new R(),
  /* @__PURE__ */ new R(),
  /* @__PURE__ */ new R(),
  /* @__PURE__ */ new R(),
  /* @__PURE__ */ new R(),
  /* @__PURE__ */ new R(),
  /* @__PURE__ */ new R(),
  /* @__PURE__ */ new R()
], ui = /* @__PURE__ */ new R(), ba = /* @__PURE__ */ new ri(), Gi = /* @__PURE__ */ new R(), Vi = /* @__PURE__ */ new R(), Hi = /* @__PURE__ */ new R(), Xn = /* @__PURE__ */ new R(), qn = /* @__PURE__ */ new R(), di = /* @__PURE__ */ new R(), Pr = /* @__PURE__ */ new R(), ps = /* @__PURE__ */ new R(), ms = /* @__PURE__ */ new R(), fi = /* @__PURE__ */ new R();
function Ma(a, t, e, n, i) {
  for (let r = 0, o = a.length - 3; r <= o; r += 3) {
    fi.fromArray(a, r);
    const s = i.x * Math.abs(fi.x) + i.y * Math.abs(fi.y) + i.z * Math.abs(fi.z), l = t.dot(fi), c = e.dot(fi), h = n.dot(fi);
    if (Math.max(-Math.max(l, c, h), Math.min(l, c, h)) > s)
      return !1;
  }
  return !0;
}
const Nd = /* @__PURE__ */ new ri(), Lr = /* @__PURE__ */ new R(), Sa = /* @__PURE__ */ new R();
class os {
  constructor(t = new R(), e = -1) {
    this.center = t, this.radius = e;
  }
  set(t, e) {
    return this.center.copy(t), this.radius = e, this;
  }
  setFromPoints(t, e) {
    const n = this.center;
    e !== void 0 ? n.copy(e) : Nd.setFromPoints(t).getCenter(n);
    let i = 0;
    for (let r = 0, o = t.length; r < o; r++)
      i = Math.max(i, n.distanceToSquared(t[r]));
    return this.radius = Math.sqrt(i), this;
  }
  copy(t) {
    return this.center.copy(t.center), this.radius = t.radius, this;
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    return this.center.set(0, 0, 0), this.radius = -1, this;
  }
  containsPoint(t) {
    return t.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(t) {
    return t.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(t) {
    const e = this.radius + t.radius;
    return t.center.distanceToSquared(this.center) <= e * e;
  }
  intersectsBox(t) {
    return t.intersectsSphere(this);
  }
  intersectsPlane(t) {
    return Math.abs(t.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(t, e) {
    const n = this.center.distanceToSquared(t);
    return e.copy(t), n > this.radius * this.radius && (e.sub(this.center).normalize(), e.multiplyScalar(this.radius).add(this.center)), e;
  }
  getBoundingBox(t) {
    return this.isEmpty() ? (t.makeEmpty(), t) : (t.set(this.center, this.center), t.expandByScalar(this.radius), t);
  }
  applyMatrix4(t) {
    return this.center.applyMatrix4(t), this.radius = this.radius * t.getMaxScaleOnAxis(), this;
  }
  translate(t) {
    return this.center.add(t), this;
  }
  expandByPoint(t) {
    if (this.isEmpty())
      return this.center.copy(t), this.radius = 0, this;
    Lr.subVectors(t, this.center);
    const e = Lr.lengthSq();
    if (e > this.radius * this.radius) {
      const n = Math.sqrt(e), i = (n - this.radius) * 0.5;
      this.center.addScaledVector(Lr, i / n), this.radius += i;
    }
    return this;
  }
  union(t) {
    return t.isEmpty() ? this : this.isEmpty() ? (this.copy(t), this) : (this.center.equals(t.center) === !0 ? this.radius = Math.max(this.radius, t.radius) : (Sa.subVectors(t.center, this.center).setLength(t.radius), this.expandByPoint(Lr.copy(t.center).add(Sa)), this.expandByPoint(Lr.copy(t.center).sub(Sa))), this);
  }
  equals(t) {
    return t.center.equals(this.center) && t.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const On = /* @__PURE__ */ new R(), wa = /* @__PURE__ */ new R(), gs = /* @__PURE__ */ new R(), Yn = /* @__PURE__ */ new R(), Ta = /* @__PURE__ */ new R(), _s = /* @__PURE__ */ new R(), Ea = /* @__PURE__ */ new R();
class sh {
  constructor(t = new R(), e = new R(0, 0, -1)) {
    this.origin = t, this.direction = e;
  }
  set(t, e) {
    return this.origin.copy(t), this.direction.copy(e), this;
  }
  copy(t) {
    return this.origin.copy(t.origin), this.direction.copy(t.direction), this;
  }
  at(t, e) {
    return e.copy(this.direction).multiplyScalar(t).add(this.origin);
  }
  lookAt(t) {
    return this.direction.copy(t).sub(this.origin).normalize(), this;
  }
  recast(t) {
    return this.origin.copy(this.at(t, On)), this;
  }
  closestPointToPoint(t, e) {
    e.subVectors(t, this.origin);
    const n = e.dot(this.direction);
    return n < 0 ? e.copy(this.origin) : e.copy(this.direction).multiplyScalar(n).add(this.origin);
  }
  distanceToPoint(t) {
    return Math.sqrt(this.distanceSqToPoint(t));
  }
  distanceSqToPoint(t) {
    const e = On.subVectors(t, this.origin).dot(this.direction);
    return e < 0 ? this.origin.distanceToSquared(t) : (On.copy(this.direction).multiplyScalar(e).add(this.origin), On.distanceToSquared(t));
  }
  distanceSqToSegment(t, e, n, i) {
    wa.copy(t).add(e).multiplyScalar(0.5), gs.copy(e).sub(t).normalize(), Yn.copy(this.origin).sub(wa);
    const r = t.distanceTo(e) * 0.5, o = -this.direction.dot(gs), s = Yn.dot(this.direction), l = -Yn.dot(gs), c = Yn.lengthSq(), h = Math.abs(1 - o * o);
    let u, d, m, g;
    if (h > 0)
      if (u = o * l - s, d = o * s - l, g = r * h, u >= 0)
        if (d >= -g)
          if (d <= g) {
            const f = 1 / h;
            u *= f, d *= f, m = u * (u + o * d + 2 * s) + d * (o * u + d + 2 * l) + c;
          } else
            d = r, u = Math.max(0, -(o * d + s)), m = -u * u + d * (d + 2 * l) + c;
        else
          d = -r, u = Math.max(0, -(o * d + s)), m = -u * u + d * (d + 2 * l) + c;
      else
        d <= -g ? (u = Math.max(0, -(-o * r + s)), d = u > 0 ? -r : Math.min(Math.max(-r, -l), r), m = -u * u + d * (d + 2 * l) + c) : d <= g ? (u = 0, d = Math.min(Math.max(-r, -l), r), m = d * (d + 2 * l) + c) : (u = Math.max(0, -(o * r + s)), d = u > 0 ? r : Math.min(Math.max(-r, -l), r), m = -u * u + d * (d + 2 * l) + c);
    else
      d = o > 0 ? -r : r, u = Math.max(0, -(o * d + s)), m = -u * u + d * (d + 2 * l) + c;
    return n && n.copy(this.direction).multiplyScalar(u).add(this.origin), i && i.copy(gs).multiplyScalar(d).add(wa), m;
  }
  intersectSphere(t, e) {
    On.subVectors(t.center, this.origin);
    const n = On.dot(this.direction), i = On.dot(On) - n * n, r = t.radius * t.radius;
    if (i > r)
      return null;
    const o = Math.sqrt(r - i), s = n - o, l = n + o;
    return s < 0 && l < 0 ? null : s < 0 ? this.at(l, e) : this.at(s, e);
  }
  intersectsSphere(t) {
    return this.distanceSqToPoint(t.center) <= t.radius * t.radius;
  }
  distanceToPlane(t) {
    const e = t.normal.dot(this.direction);
    if (e === 0)
      return t.distanceToPoint(this.origin) === 0 ? 0 : null;
    const n = -(this.origin.dot(t.normal) + t.constant) / e;
    return n >= 0 ? n : null;
  }
  intersectPlane(t, e) {
    const n = this.distanceToPlane(t);
    return n === null ? null : this.at(n, e);
  }
  intersectsPlane(t) {
    const e = t.distanceToPoint(this.origin);
    return e === 0 || t.normal.dot(this.direction) * e < 0;
  }
  intersectBox(t, e) {
    let n, i, r, o, s, l;
    const c = 1 / this.direction.x, h = 1 / this.direction.y, u = 1 / this.direction.z, d = this.origin;
    return c >= 0 ? (n = (t.min.x - d.x) * c, i = (t.max.x - d.x) * c) : (n = (t.max.x - d.x) * c, i = (t.min.x - d.x) * c), h >= 0 ? (r = (t.min.y - d.y) * h, o = (t.max.y - d.y) * h) : (r = (t.max.y - d.y) * h, o = (t.min.y - d.y) * h), n > o || r > i || ((r > n || isNaN(n)) && (n = r), (o < i || isNaN(i)) && (i = o), u >= 0 ? (s = (t.min.z - d.z) * u, l = (t.max.z - d.z) * u) : (s = (t.max.z - d.z) * u, l = (t.min.z - d.z) * u), n > l || s > i) || ((s > n || n !== n) && (n = s), (l < i || i !== i) && (i = l), i < 0) ? null : this.at(n >= 0 ? n : i, e);
  }
  intersectsBox(t) {
    return this.intersectBox(t, On) !== null;
  }
  intersectTriangle(t, e, n, i, r) {
    Ta.subVectors(e, t), _s.subVectors(n, t), Ea.crossVectors(Ta, _s);
    let o = this.direction.dot(Ea), s;
    if (o > 0) {
      if (i)
        return null;
      s = 1;
    } else if (o < 0)
      s = -1, o = -o;
    else
      return null;
    Yn.subVectors(this.origin, t);
    const l = s * this.direction.dot(_s.crossVectors(Yn, _s));
    if (l < 0)
      return null;
    const c = s * this.direction.dot(Ta.cross(Yn));
    if (c < 0 || l + c > o)
      return null;
    const h = -s * Yn.dot(Ea);
    return h < 0 ? null : this.at(h / o, r);
  }
  applyMatrix4(t) {
    return this.origin.applyMatrix4(t), this.direction.transformDirection(t), this;
  }
  equals(t) {
    return t.origin.equals(this.origin) && t.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class ee {
  constructor() {
    ee.prototype.isMatrix4 = !0, this.elements = [
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ];
  }
  set(t, e, n, i, r, o, s, l, c, h, u, d, m, g, f, p) {
    const _ = this.elements;
    return _[0] = t, _[4] = e, _[8] = n, _[12] = i, _[1] = r, _[5] = o, _[9] = s, _[13] = l, _[2] = c, _[6] = h, _[10] = u, _[14] = d, _[3] = m, _[7] = g, _[11] = f, _[15] = p, this;
  }
  identity() {
    return this.set(
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  clone() {
    return new ee().fromArray(this.elements);
  }
  copy(t) {
    const e = this.elements, n = t.elements;
    return e[0] = n[0], e[1] = n[1], e[2] = n[2], e[3] = n[3], e[4] = n[4], e[5] = n[5], e[6] = n[6], e[7] = n[7], e[8] = n[8], e[9] = n[9], e[10] = n[10], e[11] = n[11], e[12] = n[12], e[13] = n[13], e[14] = n[14], e[15] = n[15], this;
  }
  copyPosition(t) {
    const e = this.elements, n = t.elements;
    return e[12] = n[12], e[13] = n[13], e[14] = n[14], this;
  }
  setFromMatrix3(t) {
    const e = t.elements;
    return this.set(
      e[0],
      e[3],
      e[6],
      0,
      e[1],
      e[4],
      e[7],
      0,
      e[2],
      e[5],
      e[8],
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  extractBasis(t, e, n) {
    return t.setFromMatrixColumn(this, 0), e.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this;
  }
  makeBasis(t, e, n) {
    return this.set(
      t.x,
      e.x,
      n.x,
      0,
      t.y,
      e.y,
      n.y,
      0,
      t.z,
      e.z,
      n.z,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  extractRotation(t) {
    const e = this.elements, n = t.elements, i = 1 / Wi.setFromMatrixColumn(t, 0).length(), r = 1 / Wi.setFromMatrixColumn(t, 1).length(), o = 1 / Wi.setFromMatrixColumn(t, 2).length();
    return e[0] = n[0] * i, e[1] = n[1] * i, e[2] = n[2] * i, e[3] = 0, e[4] = n[4] * r, e[5] = n[5] * r, e[6] = n[6] * r, e[7] = 0, e[8] = n[8] * o, e[9] = n[9] * o, e[10] = n[10] * o, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this;
  }
  makeRotationFromEuler(t) {
    const e = this.elements, n = t.x, i = t.y, r = t.z, o = Math.cos(n), s = Math.sin(n), l = Math.cos(i), c = Math.sin(i), h = Math.cos(r), u = Math.sin(r);
    if (t.order === "XYZ") {
      const d = o * h, m = o * u, g = s * h, f = s * u;
      e[0] = l * h, e[4] = -l * u, e[8] = c, e[1] = m + g * c, e[5] = d - f * c, e[9] = -s * l, e[2] = f - d * c, e[6] = g + m * c, e[10] = o * l;
    } else if (t.order === "YXZ") {
      const d = l * h, m = l * u, g = c * h, f = c * u;
      e[0] = d + f * s, e[4] = g * s - m, e[8] = o * c, e[1] = o * u, e[5] = o * h, e[9] = -s, e[2] = m * s - g, e[6] = f + d * s, e[10] = o * l;
    } else if (t.order === "ZXY") {
      const d = l * h, m = l * u, g = c * h, f = c * u;
      e[0] = d - f * s, e[4] = -o * u, e[8] = g + m * s, e[1] = m + g * s, e[5] = o * h, e[9] = f - d * s, e[2] = -o * c, e[6] = s, e[10] = o * l;
    } else if (t.order === "ZYX") {
      const d = o * h, m = o * u, g = s * h, f = s * u;
      e[0] = l * h, e[4] = g * c - m, e[8] = d * c + f, e[1] = l * u, e[5] = f * c + d, e[9] = m * c - g, e[2] = -c, e[6] = s * l, e[10] = o * l;
    } else if (t.order === "YZX") {
      const d = o * l, m = o * c, g = s * l, f = s * c;
      e[0] = l * h, e[4] = f - d * u, e[8] = g * u + m, e[1] = u, e[5] = o * h, e[9] = -s * h, e[2] = -c * h, e[6] = m * u + g, e[10] = d - f * u;
    } else if (t.order === "XZY") {
      const d = o * l, m = o * c, g = s * l, f = s * c;
      e[0] = l * h, e[4] = -u, e[8] = c * h, e[1] = d * u + f, e[5] = o * h, e[9] = m * u - g, e[2] = g * u - m, e[6] = s * h, e[10] = f * u + d;
    }
    return e[3] = 0, e[7] = 0, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this;
  }
  makeRotationFromQuaternion(t) {
    return this.compose(Ud, t, kd);
  }
  lookAt(t, e, n) {
    const i = this.elements;
    return Ve.subVectors(t, e), Ve.lengthSq() === 0 && (Ve.z = 1), Ve.normalize(), $n.crossVectors(n, Ve), $n.lengthSq() === 0 && (Math.abs(n.z) === 1 ? Ve.x += 1e-4 : Ve.z += 1e-4, Ve.normalize(), $n.crossVectors(n, Ve)), $n.normalize(), vs.crossVectors(Ve, $n), i[0] = $n.x, i[4] = vs.x, i[8] = Ve.x, i[1] = $n.y, i[5] = vs.y, i[9] = Ve.y, i[2] = $n.z, i[6] = vs.z, i[10] = Ve.z, this;
  }
  multiply(t) {
    return this.multiplyMatrices(this, t);
  }
  premultiply(t) {
    return this.multiplyMatrices(t, this);
  }
  multiplyMatrices(t, e) {
    const n = t.elements, i = e.elements, r = this.elements, o = n[0], s = n[4], l = n[8], c = n[12], h = n[1], u = n[5], d = n[9], m = n[13], g = n[2], f = n[6], p = n[10], _ = n[14], b = n[3], x = n[7], y = n[11], M = n[15], A = i[0], P = i[4], v = i[8], w = i[12], L = i[1], U = i[5], j = i[9], O = i[13], I = i[2], k = i[6], $ = i[10], Z = i[14], G = i[3], Q = i[7], K = i[11], V = i[15];
    return r[0] = o * A + s * L + l * I + c * G, r[4] = o * P + s * U + l * k + c * Q, r[8] = o * v + s * j + l * $ + c * K, r[12] = o * w + s * O + l * Z + c * V, r[1] = h * A + u * L + d * I + m * G, r[5] = h * P + u * U + d * k + m * Q, r[9] = h * v + u * j + d * $ + m * K, r[13] = h * w + u * O + d * Z + m * V, r[2] = g * A + f * L + p * I + _ * G, r[6] = g * P + f * U + p * k + _ * Q, r[10] = g * v + f * j + p * $ + _ * K, r[14] = g * w + f * O + p * Z + _ * V, r[3] = b * A + x * L + y * I + M * G, r[7] = b * P + x * U + y * k + M * Q, r[11] = b * v + x * j + y * $ + M * K, r[15] = b * w + x * O + y * Z + M * V, this;
  }
  multiplyScalar(t) {
    const e = this.elements;
    return e[0] *= t, e[4] *= t, e[8] *= t, e[12] *= t, e[1] *= t, e[5] *= t, e[9] *= t, e[13] *= t, e[2] *= t, e[6] *= t, e[10] *= t, e[14] *= t, e[3] *= t, e[7] *= t, e[11] *= t, e[15] *= t, this;
  }
  determinant() {
    const t = this.elements, e = t[0], n = t[4], i = t[8], r = t[12], o = t[1], s = t[5], l = t[9], c = t[13], h = t[2], u = t[6], d = t[10], m = t[14], g = t[3], f = t[7], p = t[11], _ = t[15];
    return g * (+r * l * u - i * c * u - r * s * d + n * c * d + i * s * m - n * l * m) + f * (+e * l * m - e * c * d + r * o * d - i * o * m + i * c * h - r * l * h) + p * (+e * c * u - e * s * m - r * o * u + n * o * m + r * s * h - n * c * h) + _ * (-i * s * h - e * l * u + e * s * d + i * o * u - n * o * d + n * l * h);
  }
  transpose() {
    const t = this.elements;
    let e;
    return e = t[1], t[1] = t[4], t[4] = e, e = t[2], t[2] = t[8], t[8] = e, e = t[6], t[6] = t[9], t[9] = e, e = t[3], t[3] = t[12], t[12] = e, e = t[7], t[7] = t[13], t[13] = e, e = t[11], t[11] = t[14], t[14] = e, this;
  }
  setPosition(t, e, n) {
    const i = this.elements;
    return t.isVector3 ? (i[12] = t.x, i[13] = t.y, i[14] = t.z) : (i[12] = t, i[13] = e, i[14] = n), this;
  }
  invert() {
    const t = this.elements, e = t[0], n = t[1], i = t[2], r = t[3], o = t[4], s = t[5], l = t[6], c = t[7], h = t[8], u = t[9], d = t[10], m = t[11], g = t[12], f = t[13], p = t[14], _ = t[15], b = u * p * c - f * d * c + f * l * m - s * p * m - u * l * _ + s * d * _, x = g * d * c - h * p * c - g * l * m + o * p * m + h * l * _ - o * d * _, y = h * f * c - g * u * c + g * s * m - o * f * m - h * s * _ + o * u * _, M = g * u * l - h * f * l - g * s * d + o * f * d + h * s * p - o * u * p, A = e * b + n * x + i * y + r * M;
    if (A === 0)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const P = 1 / A;
    return t[0] = b * P, t[1] = (f * d * r - u * p * r - f * i * m + n * p * m + u * i * _ - n * d * _) * P, t[2] = (s * p * r - f * l * r + f * i * c - n * p * c - s * i * _ + n * l * _) * P, t[3] = (u * l * r - s * d * r - u * i * c + n * d * c + s * i * m - n * l * m) * P, t[4] = x * P, t[5] = (h * p * r - g * d * r + g * i * m - e * p * m - h * i * _ + e * d * _) * P, t[6] = (g * l * r - o * p * r - g * i * c + e * p * c + o * i * _ - e * l * _) * P, t[7] = (o * d * r - h * l * r + h * i * c - e * d * c - o * i * m + e * l * m) * P, t[8] = y * P, t[9] = (g * u * r - h * f * r - g * n * m + e * f * m + h * n * _ - e * u * _) * P, t[10] = (o * f * r - g * s * r + g * n * c - e * f * c - o * n * _ + e * s * _) * P, t[11] = (h * s * r - o * u * r - h * n * c + e * u * c + o * n * m - e * s * m) * P, t[12] = M * P, t[13] = (h * f * i - g * u * i + g * n * d - e * f * d - h * n * p + e * u * p) * P, t[14] = (g * s * i - o * f * i - g * n * l + e * f * l + o * n * p - e * s * p) * P, t[15] = (o * u * i - h * s * i + h * n * l - e * u * l - o * n * d + e * s * d) * P, this;
  }
  scale(t) {
    const e = this.elements, n = t.x, i = t.y, r = t.z;
    return e[0] *= n, e[4] *= i, e[8] *= r, e[1] *= n, e[5] *= i, e[9] *= r, e[2] *= n, e[6] *= i, e[10] *= r, e[3] *= n, e[7] *= i, e[11] *= r, this;
  }
  getMaxScaleOnAxis() {
    const t = this.elements, e = t[0] * t[0] + t[1] * t[1] + t[2] * t[2], n = t[4] * t[4] + t[5] * t[5] + t[6] * t[6], i = t[8] * t[8] + t[9] * t[9] + t[10] * t[10];
    return Math.sqrt(Math.max(e, n, i));
  }
  makeTranslation(t, e, n) {
    return this.set(
      1,
      0,
      0,
      t,
      0,
      1,
      0,
      e,
      0,
      0,
      1,
      n,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationX(t) {
    const e = Math.cos(t), n = Math.sin(t);
    return this.set(
      1,
      0,
      0,
      0,
      0,
      e,
      -n,
      0,
      0,
      n,
      e,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationY(t) {
    const e = Math.cos(t), n = Math.sin(t);
    return this.set(
      e,
      0,
      n,
      0,
      0,
      1,
      0,
      0,
      -n,
      0,
      e,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationZ(t) {
    const e = Math.cos(t), n = Math.sin(t);
    return this.set(
      e,
      -n,
      0,
      0,
      n,
      e,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationAxis(t, e) {
    const n = Math.cos(e), i = Math.sin(e), r = 1 - n, o = t.x, s = t.y, l = t.z, c = r * o, h = r * s;
    return this.set(
      c * o + n,
      c * s - i * l,
      c * l + i * s,
      0,
      c * s + i * l,
      h * s + n,
      h * l - i * o,
      0,
      c * l - i * s,
      h * l + i * o,
      r * l * l + n,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeScale(t, e, n) {
    return this.set(
      t,
      0,
      0,
      0,
      0,
      e,
      0,
      0,
      0,
      0,
      n,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeShear(t, e, n, i, r, o) {
    return this.set(
      1,
      n,
      r,
      0,
      t,
      1,
      o,
      0,
      e,
      i,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  compose(t, e, n) {
    const i = this.elements, r = e._x, o = e._y, s = e._z, l = e._w, c = r + r, h = o + o, u = s + s, d = r * c, m = r * h, g = r * u, f = o * h, p = o * u, _ = s * u, b = l * c, x = l * h, y = l * u, M = n.x, A = n.y, P = n.z;
    return i[0] = (1 - (f + _)) * M, i[1] = (m + y) * M, i[2] = (g - x) * M, i[3] = 0, i[4] = (m - y) * A, i[5] = (1 - (d + _)) * A, i[6] = (p + b) * A, i[7] = 0, i[8] = (g + x) * P, i[9] = (p - b) * P, i[10] = (1 - (d + f)) * P, i[11] = 0, i[12] = t.x, i[13] = t.y, i[14] = t.z, i[15] = 1, this;
  }
  decompose(t, e, n) {
    const i = this.elements;
    let r = Wi.set(i[0], i[1], i[2]).length();
    const o = Wi.set(i[4], i[5], i[6]).length(), s = Wi.set(i[8], i[9], i[10]).length();
    this.determinant() < 0 && (r = -r), t.x = i[12], t.y = i[13], t.z = i[14], un.copy(this);
    const c = 1 / r, h = 1 / o, u = 1 / s;
    return un.elements[0] *= c, un.elements[1] *= c, un.elements[2] *= c, un.elements[4] *= h, un.elements[5] *= h, un.elements[6] *= h, un.elements[8] *= u, un.elements[9] *= u, un.elements[10] *= u, e.setFromRotationMatrix(un), n.x = r, n.y = o, n.z = s, this;
  }
  makePerspective(t, e, n, i, r, o) {
    const s = this.elements, l = 2 * r / (e - t), c = 2 * r / (n - i), h = (e + t) / (e - t), u = (n + i) / (n - i), d = -(o + r) / (o - r), m = -2 * o * r / (o - r);
    return s[0] = l, s[4] = 0, s[8] = h, s[12] = 0, s[1] = 0, s[5] = c, s[9] = u, s[13] = 0, s[2] = 0, s[6] = 0, s[10] = d, s[14] = m, s[3] = 0, s[7] = 0, s[11] = -1, s[15] = 0, this;
  }
  makeOrthographic(t, e, n, i, r, o) {
    const s = this.elements, l = 1 / (e - t), c = 1 / (n - i), h = 1 / (o - r), u = (e + t) * l, d = (n + i) * c, m = (o + r) * h;
    return s[0] = 2 * l, s[4] = 0, s[8] = 0, s[12] = -u, s[1] = 0, s[5] = 2 * c, s[9] = 0, s[13] = -d, s[2] = 0, s[6] = 0, s[10] = -2 * h, s[14] = -m, s[3] = 0, s[7] = 0, s[11] = 0, s[15] = 1, this;
  }
  equals(t) {
    const e = this.elements, n = t.elements;
    for (let i = 0; i < 16; i++)
      if (e[i] !== n[i])
        return !1;
    return !0;
  }
  fromArray(t, e = 0) {
    for (let n = 0; n < 16; n++)
      this.elements[n] = t[n + e];
    return this;
  }
  toArray(t = [], e = 0) {
    const n = this.elements;
    return t[e] = n[0], t[e + 1] = n[1], t[e + 2] = n[2], t[e + 3] = n[3], t[e + 4] = n[4], t[e + 5] = n[5], t[e + 6] = n[6], t[e + 7] = n[7], t[e + 8] = n[8], t[e + 9] = n[9], t[e + 10] = n[10], t[e + 11] = n[11], t[e + 12] = n[12], t[e + 13] = n[13], t[e + 14] = n[14], t[e + 15] = n[15], t;
  }
}
const Wi = /* @__PURE__ */ new R(), un = /* @__PURE__ */ new ee(), Ud = /* @__PURE__ */ new R(0, 0, 0), kd = /* @__PURE__ */ new R(1, 1, 1), $n = /* @__PURE__ */ new R(), vs = /* @__PURE__ */ new R(), Ve = /* @__PURE__ */ new R(), zl = /* @__PURE__ */ new ee(), Fl = /* @__PURE__ */ new Ii();
class si {
  constructor(t = 0, e = 0, n = 0, i = si.DefaultOrder) {
    this.isEuler = !0, this._x = t, this._y = e, this._z = n, this._order = i;
  }
  get x() {
    return this._x;
  }
  set x(t) {
    this._x = t, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(t) {
    this._y = t, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(t) {
    this._z = t, this._onChangeCallback();
  }
  get order() {
    return this._order;
  }
  set order(t) {
    this._order = t, this._onChangeCallback();
  }
  set(t, e, n, i = this._order) {
    return this._x = t, this._y = e, this._z = n, this._order = i, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(t) {
    return this._x = t._x, this._y = t._y, this._z = t._z, this._order = t._order, this._onChangeCallback(), this;
  }
  setFromRotationMatrix(t, e = this._order, n = !0) {
    const i = t.elements, r = i[0], o = i[4], s = i[8], l = i[1], c = i[5], h = i[9], u = i[2], d = i[6], m = i[10];
    switch (e) {
      case "XYZ":
        this._y = Math.asin(fe(s, -1, 1)), Math.abs(s) < 0.9999999 ? (this._x = Math.atan2(-h, m), this._z = Math.atan2(-o, r)) : (this._x = Math.atan2(d, c), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-fe(h, -1, 1)), Math.abs(h) < 0.9999999 ? (this._y = Math.atan2(s, m), this._z = Math.atan2(l, c)) : (this._y = Math.atan2(-u, r), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(fe(d, -1, 1)), Math.abs(d) < 0.9999999 ? (this._y = Math.atan2(-u, m), this._z = Math.atan2(-o, c)) : (this._y = 0, this._z = Math.atan2(l, r));
        break;
      case "ZYX":
        this._y = Math.asin(-fe(u, -1, 1)), Math.abs(u) < 0.9999999 ? (this._x = Math.atan2(d, m), this._z = Math.atan2(l, r)) : (this._x = 0, this._z = Math.atan2(-o, c));
        break;
      case "YZX":
        this._z = Math.asin(fe(l, -1, 1)), Math.abs(l) < 0.9999999 ? (this._x = Math.atan2(-h, c), this._y = Math.atan2(-u, r)) : (this._x = 0, this._y = Math.atan2(s, m));
        break;
      case "XZY":
        this._z = Math.asin(-fe(o, -1, 1)), Math.abs(o) < 0.9999999 ? (this._x = Math.atan2(d, c), this._y = Math.atan2(s, r)) : (this._x = Math.atan2(-h, m), this._y = 0);
        break;
      default:
        console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + e);
    }
    return this._order = e, n === !0 && this._onChangeCallback(), this;
  }
  setFromQuaternion(t, e, n) {
    return zl.makeRotationFromQuaternion(t), this.setFromRotationMatrix(zl, e, n);
  }
  setFromVector3(t, e = this._order) {
    return this.set(t.x, t.y, t.z, e);
  }
  reorder(t) {
    return Fl.setFromEuler(this), this.setFromQuaternion(Fl, t);
  }
  equals(t) {
    return t._x === this._x && t._y === this._y && t._z === this._z && t._order === this._order;
  }
  fromArray(t) {
    return this._x = t[0], this._y = t[1], this._z = t[2], t[3] !== void 0 && (this._order = t[3]), this._onChangeCallback(), this;
  }
  toArray(t = [], e = 0) {
    return t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._order, t;
  }
  _onChange(t) {
    return this._onChangeCallback = t, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._order;
  }
  // @deprecated since r138, 02cf0df1cb4575d5842fef9c85bb5a89fe020d53
  toVector3() {
    console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead");
  }
}
si.DefaultOrder = "XYZ";
si.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"];
class Ro {
  constructor() {
    this.mask = 1;
  }
  set(t) {
    this.mask = (1 << t | 0) >>> 0;
  }
  enable(t) {
    this.mask |= 1 << t | 0;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(t) {
    this.mask ^= 1 << t | 0;
  }
  disable(t) {
    this.mask &= ~(1 << t | 0);
  }
  disableAll() {
    this.mask = 0;
  }
  test(t) {
    return (this.mask & t.mask) !== 0;
  }
  isEnabled(t) {
    return (this.mask & (1 << t | 0)) !== 0;
  }
}
let Bd = 0;
const Nl = /* @__PURE__ */ new R(), Xi = /* @__PURE__ */ new Ii(), zn = /* @__PURE__ */ new ee(), xs = /* @__PURE__ */ new R(), Dr = /* @__PURE__ */ new R(), Gd = /* @__PURE__ */ new R(), Vd = /* @__PURE__ */ new Ii(), Ul = /* @__PURE__ */ new R(1, 0, 0), kl = /* @__PURE__ */ new R(0, 1, 0), Bl = /* @__PURE__ */ new R(0, 0, 1), Hd = { type: "added" }, Gl = { type: "removed" };
class ze extends Fi {
  constructor() {
    super(), this.isObject3D = !0, Object.defineProperty(this, "id", { value: Bd++ }), this.uuid = Gn(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = ze.DefaultUp.clone();
    const t = new R(), e = new si(), n = new Ii(), i = new R(1, 1, 1);
    function r() {
      n.setFromEuler(e, !1);
    }
    function o() {
      e.setFromQuaternion(n, void 0, !1);
    }
    e._onChange(r), n._onChange(o), Object.defineProperties(this, {
      position: {
        configurable: !0,
        enumerable: !0,
        value: t
      },
      rotation: {
        configurable: !0,
        enumerable: !0,
        value: e
      },
      quaternion: {
        configurable: !0,
        enumerable: !0,
        value: n
      },
      scale: {
        configurable: !0,
        enumerable: !0,
        value: i
      },
      modelViewMatrix: {
        value: new ee()
      },
      normalMatrix: {
        value: new Ye()
      }
    }), this.matrix = new ee(), this.matrixWorld = new ee(), this.matrixAutoUpdate = ze.DefaultMatrixAutoUpdate, this.matrixWorldNeedsUpdate = !1, this.matrixWorldAutoUpdate = ze.DefaultMatrixWorldAutoUpdate, this.layers = new Ro(), this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.userData = {};
  }
  onBeforeRender() {
  }
  onAfterRender() {
  }
  applyMatrix4(t) {
    this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(t), this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  applyQuaternion(t) {
    return this.quaternion.premultiply(t), this;
  }
  setRotationFromAxisAngle(t, e) {
    this.quaternion.setFromAxisAngle(t, e);
  }
  setRotationFromEuler(t) {
    this.quaternion.setFromEuler(t, !0);
  }
  setRotationFromMatrix(t) {
    this.quaternion.setFromRotationMatrix(t);
  }
  setRotationFromQuaternion(t) {
    this.quaternion.copy(t);
  }
  rotateOnAxis(t, e) {
    return Xi.setFromAxisAngle(t, e), this.quaternion.multiply(Xi), this;
  }
  rotateOnWorldAxis(t, e) {
    return Xi.setFromAxisAngle(t, e), this.quaternion.premultiply(Xi), this;
  }
  rotateX(t) {
    return this.rotateOnAxis(Ul, t);
  }
  rotateY(t) {
    return this.rotateOnAxis(kl, t);
  }
  rotateZ(t) {
    return this.rotateOnAxis(Bl, t);
  }
  translateOnAxis(t, e) {
    return Nl.copy(t).applyQuaternion(this.quaternion), this.position.add(Nl.multiplyScalar(e)), this;
  }
  translateX(t) {
    return this.translateOnAxis(Ul, t);
  }
  translateY(t) {
    return this.translateOnAxis(kl, t);
  }
  translateZ(t) {
    return this.translateOnAxis(Bl, t);
  }
  localToWorld(t) {
    return this.updateWorldMatrix(!0, !1), t.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(t) {
    return this.updateWorldMatrix(!0, !1), t.applyMatrix4(zn.copy(this.matrixWorld).invert());
  }
  lookAt(t, e, n) {
    t.isVector3 ? xs.copy(t) : xs.set(t, e, n);
    const i = this.parent;
    this.updateWorldMatrix(!0, !1), Dr.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? zn.lookAt(Dr, xs, this.up) : zn.lookAt(xs, Dr, this.up), this.quaternion.setFromRotationMatrix(zn), i && (zn.extractRotation(i.matrixWorld), Xi.setFromRotationMatrix(zn), this.quaternion.premultiply(Xi.invert()));
  }
  add(t) {
    if (arguments.length > 1) {
      for (let e = 0; e < arguments.length; e++)
        this.add(arguments[e]);
      return this;
    }
    return t === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", t), this) : (t && t.isObject3D ? (t.parent !== null && t.parent.remove(t), t.parent = this, this.children.push(t), t.dispatchEvent(Hd)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", t), this);
  }
  remove(t) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++)
        this.remove(arguments[n]);
      return this;
    }
    const e = this.children.indexOf(t);
    return e !== -1 && (t.parent = null, this.children.splice(e, 1), t.dispatchEvent(Gl)), this;
  }
  removeFromParent() {
    const t = this.parent;
    return t !== null && t.remove(this), this;
  }
  clear() {
    for (let t = 0; t < this.children.length; t++) {
      const e = this.children[t];
      e.parent = null, e.dispatchEvent(Gl);
    }
    return this.children.length = 0, this;
  }
  attach(t) {
    return this.updateWorldMatrix(!0, !1), zn.copy(this.matrixWorld).invert(), t.parent !== null && (t.parent.updateWorldMatrix(!0, !1), zn.multiply(t.parent.matrixWorld)), t.applyMatrix4(zn), this.add(t), t.updateWorldMatrix(!1, !0), this;
  }
  getObjectById(t) {
    return this.getObjectByProperty("id", t);
  }
  getObjectByName(t) {
    return this.getObjectByProperty("name", t);
  }
  getObjectByProperty(t, e) {
    if (this[t] === e)
      return this;
    for (let n = 0, i = this.children.length; n < i; n++) {
      const o = this.children[n].getObjectByProperty(t, e);
      if (o !== void 0)
        return o;
    }
  }
  getObjectsByProperty(t, e) {
    let n = [];
    this[t] === e && n.push(this);
    for (let i = 0, r = this.children.length; i < r; i++) {
      const o = this.children[i].getObjectsByProperty(t, e);
      o.length > 0 && (n = n.concat(o));
    }
    return n;
  }
  getWorldPosition(t) {
    return this.updateWorldMatrix(!0, !1), t.setFromMatrixPosition(this.matrixWorld);
  }
  getWorldQuaternion(t) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Dr, t, Gd), t;
  }
  getWorldScale(t) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Dr, Vd, t), t;
  }
  getWorldDirection(t) {
    this.updateWorldMatrix(!0, !1);
    const e = this.matrixWorld.elements;
    return t.set(e[8], e[9], e[10]).normalize();
  }
  raycast() {
  }
  traverse(t) {
    t(this);
    const e = this.children;
    for (let n = 0, i = e.length; n < i; n++)
      e[n].traverse(t);
  }
  traverseVisible(t) {
    if (this.visible === !1)
      return;
    t(this);
    const e = this.children;
    for (let n = 0, i = e.length; n < i; n++)
      e[n].traverseVisible(t);
  }
  traverseAncestors(t) {
    const e = this.parent;
    e !== null && (t(e), e.traverseAncestors(t));
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0;
  }
  updateMatrixWorld(t) {
    this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || t) && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, t = !0);
    const e = this.children;
    for (let n = 0, i = e.length; n < i; n++) {
      const r = e[n];
      (r.matrixWorldAutoUpdate === !0 || t === !0) && r.updateMatrixWorld(t);
    }
  }
  updateWorldMatrix(t, e) {
    const n = this.parent;
    if (t === !0 && n !== null && n.matrixWorldAutoUpdate === !0 && n.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), e === !0) {
      const i = this.children;
      for (let r = 0, o = i.length; r < o; r++) {
        const s = i[r];
        s.matrixWorldAutoUpdate === !0 && s.updateWorldMatrix(!1, !0);
      }
    }
  }
  toJSON(t) {
    const e = t === void 0 || typeof t == "string", n = {};
    e && (t = {
      geometries: {},
      materials: {},
      textures: {},
      images: {},
      shapes: {},
      skeletons: {},
      animations: {},
      nodes: {}
    }, n.metadata = {
      version: 4.5,
      type: "Object",
      generator: "Object3D.toJSON"
    });
    const i = {};
    i.uuid = this.uuid, i.type = this.type, this.name !== "" && (i.name = this.name), this.castShadow === !0 && (i.castShadow = !0), this.receiveShadow === !0 && (i.receiveShadow = !0), this.visible === !1 && (i.visible = !1), this.frustumCulled === !1 && (i.frustumCulled = !1), this.renderOrder !== 0 && (i.renderOrder = this.renderOrder), Object.keys(this.userData).length > 0 && (i.userData = this.userData), i.layers = this.layers.mask, i.matrix = this.matrix.toArray(), this.matrixAutoUpdate === !1 && (i.matrixAutoUpdate = !1), this.isInstancedMesh && (i.type = "InstancedMesh", i.count = this.count, i.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (i.instanceColor = this.instanceColor.toJSON()));
    function r(s, l) {
      return s[l.uuid] === void 0 && (s[l.uuid] = l.toJSON(t)), l.uuid;
    }
    if (this.isScene)
      this.background && (this.background.isColor ? i.background = this.background.toJSON() : this.background.isTexture && (i.background = this.background.toJSON(t).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== !0 && (i.environment = this.environment.toJSON(t).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      i.geometry = r(t.geometries, this.geometry);
      const s = this.geometry.parameters;
      if (s !== void 0 && s.shapes !== void 0) {
        const l = s.shapes;
        if (Array.isArray(l))
          for (let c = 0, h = l.length; c < h; c++) {
            const u = l[c];
            r(t.shapes, u);
          }
        else
          r(t.shapes, l);
      }
    }
    if (this.isSkinnedMesh && (i.bindMode = this.bindMode, i.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (r(t.skeletons, this.skeleton), i.skeleton = this.skeleton.uuid)), this.material !== void 0)
      if (Array.isArray(this.material)) {
        const s = [];
        for (let l = 0, c = this.material.length; l < c; l++)
          s.push(r(t.materials, this.material[l]));
        i.material = s;
      } else
        i.material = r(t.materials, this.material);
    if (this.children.length > 0) {
      i.children = [];
      for (let s = 0; s < this.children.length; s++)
        i.children.push(this.children[s].toJSON(t).object);
    }
    if (this.animations.length > 0) {
      i.animations = [];
      for (let s = 0; s < this.animations.length; s++) {
        const l = this.animations[s];
        i.animations.push(r(t.animations, l));
      }
    }
    if (e) {
      const s = o(t.geometries), l = o(t.materials), c = o(t.textures), h = o(t.images), u = o(t.shapes), d = o(t.skeletons), m = o(t.animations), g = o(t.nodes);
      s.length > 0 && (n.geometries = s), l.length > 0 && (n.materials = l), c.length > 0 && (n.textures = c), h.length > 0 && (n.images = h), u.length > 0 && (n.shapes = u), d.length > 0 && (n.skeletons = d), m.length > 0 && (n.animations = m), g.length > 0 && (n.nodes = g);
    }
    return n.object = i, n;
    function o(s) {
      const l = [];
      for (const c in s) {
        const h = s[c];
        delete h.metadata, l.push(h);
      }
      return l;
    }
  }
  clone(t) {
    return new this.constructor().copy(this, t);
  }
  copy(t, e = !0) {
    if (this.name = t.name, this.up.copy(t.up), this.position.copy(t.position), this.rotation.order = t.rotation.order, this.quaternion.copy(t.quaternion), this.scale.copy(t.scale), this.matrix.copy(t.matrix), this.matrixWorld.copy(t.matrixWorld), this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrixWorldNeedsUpdate = t.matrixWorldNeedsUpdate, this.matrixWorldAutoUpdate = t.matrixWorldAutoUpdate, this.layers.mask = t.layers.mask, this.visible = t.visible, this.castShadow = t.castShadow, this.receiveShadow = t.receiveShadow, this.frustumCulled = t.frustumCulled, this.renderOrder = t.renderOrder, this.userData = JSON.parse(JSON.stringify(t.userData)), e === !0)
      for (let n = 0; n < t.children.length; n++) {
        const i = t.children[n];
        this.add(i.clone());
      }
    return this;
  }
}
ze.DefaultUp = /* @__PURE__ */ new R(0, 1, 0);
ze.DefaultMatrixAutoUpdate = !0;
ze.DefaultMatrixWorldAutoUpdate = !0;
const dn = /* @__PURE__ */ new R(), Fn = /* @__PURE__ */ new R(), Aa = /* @__PURE__ */ new R(), Nn = /* @__PURE__ */ new R(), qi = /* @__PURE__ */ new R(), Yi = /* @__PURE__ */ new R(), Vl = /* @__PURE__ */ new R(), Ca = /* @__PURE__ */ new R(), Pa = /* @__PURE__ */ new R(), La = /* @__PURE__ */ new R();
class Mn {
  constructor(t = new R(), e = new R(), n = new R()) {
    this.a = t, this.b = e, this.c = n;
  }
  static getNormal(t, e, n, i) {
    i.subVectors(n, e), dn.subVectors(t, e), i.cross(dn);
    const r = i.lengthSq();
    return r > 0 ? i.multiplyScalar(1 / Math.sqrt(r)) : i.set(0, 0, 0);
  }
  // static/instance method to calculate barycentric coordinates
  // based on: http://www.blackpawn.com/texts/pointinpoly/default.html
  static getBarycoord(t, e, n, i, r) {
    dn.subVectors(i, e), Fn.subVectors(n, e), Aa.subVectors(t, e);
    const o = dn.dot(dn), s = dn.dot(Fn), l = dn.dot(Aa), c = Fn.dot(Fn), h = Fn.dot(Aa), u = o * c - s * s;
    if (u === 0)
      return r.set(-2, -1, -1);
    const d = 1 / u, m = (c * l - s * h) * d, g = (o * h - s * l) * d;
    return r.set(1 - m - g, g, m);
  }
  static containsPoint(t, e, n, i) {
    return this.getBarycoord(t, e, n, i, Nn), Nn.x >= 0 && Nn.y >= 0 && Nn.x + Nn.y <= 1;
  }
  static getUV(t, e, n, i, r, o, s, l) {
    return this.getBarycoord(t, e, n, i, Nn), l.set(0, 0), l.addScaledVector(r, Nn.x), l.addScaledVector(o, Nn.y), l.addScaledVector(s, Nn.z), l;
  }
  static isFrontFacing(t, e, n, i) {
    return dn.subVectors(n, e), Fn.subVectors(t, e), dn.cross(Fn).dot(i) < 0;
  }
  set(t, e, n) {
    return this.a.copy(t), this.b.copy(e), this.c.copy(n), this;
  }
  setFromPointsAndIndices(t, e, n, i) {
    return this.a.copy(t[e]), this.b.copy(t[n]), this.c.copy(t[i]), this;
  }
  setFromAttributeAndIndices(t, e, n, i) {
    return this.a.fromBufferAttribute(t, e), this.b.fromBufferAttribute(t, n), this.c.fromBufferAttribute(t, i), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    return this.a.copy(t.a), this.b.copy(t.b), this.c.copy(t.c), this;
  }
  getArea() {
    return dn.subVectors(this.c, this.b), Fn.subVectors(this.a, this.b), dn.cross(Fn).length() * 0.5;
  }
  getMidpoint(t) {
    return t.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
  }
  getNormal(t) {
    return Mn.getNormal(this.a, this.b, this.c, t);
  }
  getPlane(t) {
    return t.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(t, e) {
    return Mn.getBarycoord(t, this.a, this.b, this.c, e);
  }
  getUV(t, e, n, i, r) {
    return Mn.getUV(t, this.a, this.b, this.c, e, n, i, r);
  }
  containsPoint(t) {
    return Mn.containsPoint(t, this.a, this.b, this.c);
  }
  isFrontFacing(t) {
    return Mn.isFrontFacing(this.a, this.b, this.c, t);
  }
  intersectsBox(t) {
    return t.intersectsTriangle(this);
  }
  closestPointToPoint(t, e) {
    const n = this.a, i = this.b, r = this.c;
    let o, s;
    qi.subVectors(i, n), Yi.subVectors(r, n), Ca.subVectors(t, n);
    const l = qi.dot(Ca), c = Yi.dot(Ca);
    if (l <= 0 && c <= 0)
      return e.copy(n);
    Pa.subVectors(t, i);
    const h = qi.dot(Pa), u = Yi.dot(Pa);
    if (h >= 0 && u <= h)
      return e.copy(i);
    const d = l * u - h * c;
    if (d <= 0 && l >= 0 && h <= 0)
      return o = l / (l - h), e.copy(n).addScaledVector(qi, o);
    La.subVectors(t, r);
    const m = qi.dot(La), g = Yi.dot(La);
    if (g >= 0 && m <= g)
      return e.copy(r);
    const f = m * c - l * g;
    if (f <= 0 && c >= 0 && g <= 0)
      return s = c / (c - g), e.copy(n).addScaledVector(Yi, s);
    const p = h * g - m * u;
    if (p <= 0 && u - h >= 0 && m - g >= 0)
      return Vl.subVectors(r, i), s = (u - h) / (u - h + (m - g)), e.copy(i).addScaledVector(Vl, s);
    const _ = 1 / (p + f + d);
    return o = f * _, s = d * _, e.copy(n).addScaledVector(qi, o).addScaledVector(Yi, s);
  }
  equals(t) {
    return t.a.equals(this.a) && t.b.equals(this.b) && t.c.equals(this.c);
  }
}
let Wd = 0;
class Er extends Fi {
  constructor() {
    super(), this.isMaterial = !0, Object.defineProperty(this, "id", { value: Wd++ }), this.uuid = Gn(), this.name = "", this.type = "Material", this.blending = hr, this.side = Pi, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.blendSrc = Wc, this.blendDst = Xc, this.blendEquation = sr, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.depthFunc = eo, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = yd, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = ma, this.stencilZFail = ma, this.stencilZPass = ma, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0;
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(t) {
    this._alphaTest > 0 != t > 0 && this.version++, this._alphaTest = t;
  }
  onBuild() {
  }
  onBeforeRender() {
  }
  onBeforeCompile() {
  }
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  setValues(t) {
    if (t !== void 0)
      for (const e in t) {
        const n = t[e];
        if (n === void 0) {
          console.warn("THREE.Material: '" + e + "' parameter is undefined.");
          continue;
        }
        const i = this[e];
        if (i === void 0) {
          console.warn("THREE." + this.type + ": '" + e + "' is not a property of this material.");
          continue;
        }
        i && i.isColor ? i.set(n) : i && i.isVector3 && n && n.isVector3 ? i.copy(n) : this[e] = n;
      }
  }
  toJSON(t) {
    const e = t === void 0 || typeof t == "string";
    e && (t = {
      textures: {},
      images: {}
    });
    const n = {
      metadata: {
        version: 4.5,
        type: "Material",
        generator: "Material.toJSON"
      }
    };
    n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen !== void 0 && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(t).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(t).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(t).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.iridescence !== void 0 && (n.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(t).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(t).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(t).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(t).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(t).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(t).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(t).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(t).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(t).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(t).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(t).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(t).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(t).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(t).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(t).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(t).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(t).uuid, this.combine !== void 0 && (n.combine = this.combine)), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(t).uuid), this.transmission !== void 0 && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(t).uuid), this.thickness !== void 0 && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(t).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (n.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (n.size = this.size), this.shadowSide !== null && (n.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== hr && (n.blending = this.blending), this.side !== Pi && (n.side = this.side), this.vertexColors && (n.vertexColors = !0), this.opacity < 1 && (n.opacity = this.opacity), this.transparent === !0 && (n.transparent = this.transparent), n.depthFunc = this.depthFunc, n.depthTest = this.depthTest, n.depthWrite = this.depthWrite, n.colorWrite = this.colorWrite, n.stencilWrite = this.stencilWrite, n.stencilWriteMask = this.stencilWriteMask, n.stencilFunc = this.stencilFunc, n.stencilRef = this.stencilRef, n.stencilFuncMask = this.stencilFuncMask, n.stencilFail = this.stencilFail, n.stencilZFail = this.stencilZFail, n.stencilZPass = this.stencilZPass, this.rotation !== void 0 && this.rotation !== 0 && (n.rotation = this.rotation), this.polygonOffset === !0 && (n.polygonOffset = !0), this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (n.linewidth = this.linewidth), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.dithering === !0 && (n.dithering = !0), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), this.alphaToCoverage === !0 && (n.alphaToCoverage = this.alphaToCoverage), this.premultipliedAlpha === !0 && (n.premultipliedAlpha = this.premultipliedAlpha), this.wireframe === !0 && (n.wireframe = this.wireframe), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === !0 && (n.flatShading = this.flatShading), this.visible === !1 && (n.visible = !1), this.toneMapped === !1 && (n.toneMapped = !1), this.fog === !1 && (n.fog = !1), Object.keys(this.userData).length > 0 && (n.userData = this.userData);
    function i(r) {
      const o = [];
      for (const s in r) {
        const l = r[s];
        delete l.metadata, o.push(l);
      }
      return o;
    }
    if (e) {
      const r = i(t.textures), o = i(t.images);
      r.length > 0 && (n.textures = r), o.length > 0 && (n.images = o);
    }
    return n;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    this.name = t.name, this.blending = t.blending, this.side = t.side, this.vertexColors = t.vertexColors, this.opacity = t.opacity, this.transparent = t.transparent, this.blendSrc = t.blendSrc, this.blendDst = t.blendDst, this.blendEquation = t.blendEquation, this.blendSrcAlpha = t.blendSrcAlpha, this.blendDstAlpha = t.blendDstAlpha, this.blendEquationAlpha = t.blendEquationAlpha, this.depthFunc = t.depthFunc, this.depthTest = t.depthTest, this.depthWrite = t.depthWrite, this.stencilWriteMask = t.stencilWriteMask, this.stencilFunc = t.stencilFunc, this.stencilRef = t.stencilRef, this.stencilFuncMask = t.stencilFuncMask, this.stencilFail = t.stencilFail, this.stencilZFail = t.stencilZFail, this.stencilZPass = t.stencilZPass, this.stencilWrite = t.stencilWrite;
    const e = t.clippingPlanes;
    let n = null;
    if (e !== null) {
      const i = e.length;
      n = new Array(i);
      for (let r = 0; r !== i; ++r)
        n[r] = e[r].clone();
    }
    return this.clippingPlanes = n, this.clipIntersection = t.clipIntersection, this.clipShadows = t.clipShadows, this.shadowSide = t.shadowSide, this.colorWrite = t.colorWrite, this.precision = t.precision, this.polygonOffset = t.polygonOffset, this.polygonOffsetFactor = t.polygonOffsetFactor, this.polygonOffsetUnits = t.polygonOffsetUnits, this.dithering = t.dithering, this.alphaTest = t.alphaTest, this.alphaToCoverage = t.alphaToCoverage, this.premultipliedAlpha = t.premultipliedAlpha, this.visible = t.visible, this.toneMapped = t.toneMapped, this.userData = JSON.parse(JSON.stringify(t.userData)), this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  set needsUpdate(t) {
    t === !0 && this.version++;
  }
}
class ah extends Er {
  constructor(t) {
    super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new Ot(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = qc, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.color.copy(t.color), this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.fog = t.fog, this;
  }
}
const Qt = /* @__PURE__ */ new R(), ys = /* @__PURE__ */ new vt();
class _n {
  constructor(t, e, n = !1) {
    if (Array.isArray(t))
      throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    this.isBufferAttribute = !0, this.name = "", this.array = t, this.itemSize = e, this.count = t !== void 0 ? t.length / e : 0, this.normalized = n, this.usage = ao, this.updateRange = { offset: 0, count: -1 }, this.version = 0;
  }
  onUploadCallback() {
  }
  set needsUpdate(t) {
    t === !0 && this.version++;
  }
  setUsage(t) {
    return this.usage = t, this;
  }
  copy(t) {
    return this.name = t.name, this.array = new t.array.constructor(t.array), this.itemSize = t.itemSize, this.count = t.count, this.normalized = t.normalized, this.usage = t.usage, this;
  }
  copyAt(t, e, n) {
    t *= this.itemSize, n *= e.itemSize;
    for (let i = 0, r = this.itemSize; i < r; i++)
      this.array[t + i] = e.array[n + i];
    return this;
  }
  copyArray(t) {
    return this.array.set(t), this;
  }
  applyMatrix3(t) {
    if (this.itemSize === 2)
      for (let e = 0, n = this.count; e < n; e++)
        ys.fromBufferAttribute(this, e), ys.applyMatrix3(t), this.setXY(e, ys.x, ys.y);
    else if (this.itemSize === 3)
      for (let e = 0, n = this.count; e < n; e++)
        Qt.fromBufferAttribute(this, e), Qt.applyMatrix3(t), this.setXYZ(e, Qt.x, Qt.y, Qt.z);
    return this;
  }
  applyMatrix4(t) {
    for (let e = 0, n = this.count; e < n; e++)
      Qt.fromBufferAttribute(this, e), Qt.applyMatrix4(t), this.setXYZ(e, Qt.x, Qt.y, Qt.z);
    return this;
  }
  applyNormalMatrix(t) {
    for (let e = 0, n = this.count; e < n; e++)
      Qt.fromBufferAttribute(this, e), Qt.applyNormalMatrix(t), this.setXYZ(e, Qt.x, Qt.y, Qt.z);
    return this;
  }
  transformDirection(t) {
    for (let e = 0, n = this.count; e < n; e++)
      Qt.fromBufferAttribute(this, e), Qt.transformDirection(t), this.setXYZ(e, Qt.x, Qt.y, Qt.z);
    return this;
  }
  set(t, e = 0) {
    return this.array.set(t, e), this;
  }
  getX(t) {
    let e = this.array[t * this.itemSize];
    return this.normalized && (e = Bn(e, this.array)), e;
  }
  setX(t, e) {
    return this.normalized && (e = Gt(e, this.array)), this.array[t * this.itemSize] = e, this;
  }
  getY(t) {
    let e = this.array[t * this.itemSize + 1];
    return this.normalized && (e = Bn(e, this.array)), e;
  }
  setY(t, e) {
    return this.normalized && (e = Gt(e, this.array)), this.array[t * this.itemSize + 1] = e, this;
  }
  getZ(t) {
    let e = this.array[t * this.itemSize + 2];
    return this.normalized && (e = Bn(e, this.array)), e;
  }
  setZ(t, e) {
    return this.normalized && (e = Gt(e, this.array)), this.array[t * this.itemSize + 2] = e, this;
  }
  getW(t) {
    let e = this.array[t * this.itemSize + 3];
    return this.normalized && (e = Bn(e, this.array)), e;
  }
  setW(t, e) {
    return this.normalized && (e = Gt(e, this.array)), this.array[t * this.itemSize + 3] = e, this;
  }
  setXY(t, e, n) {
    return t *= this.itemSize, this.normalized && (e = Gt(e, this.array), n = Gt(n, this.array)), this.array[t + 0] = e, this.array[t + 1] = n, this;
  }
  setXYZ(t, e, n, i) {
    return t *= this.itemSize, this.normalized && (e = Gt(e, this.array), n = Gt(n, this.array), i = Gt(i, this.array)), this.array[t + 0] = e, this.array[t + 1] = n, this.array[t + 2] = i, this;
  }
  setXYZW(t, e, n, i, r) {
    return t *= this.itemSize, this.normalized && (e = Gt(e, this.array), n = Gt(n, this.array), i = Gt(i, this.array), r = Gt(r, this.array)), this.array[t + 0] = e, this.array[t + 1] = n, this.array[t + 2] = i, this.array[t + 3] = r, this;
  }
  onUpload(t) {
    return this.onUploadCallback = t, this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const t = {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.from(this.array),
      normalized: this.normalized
    };
    return this.name !== "" && (t.name = this.name), this.usage !== ao && (t.usage = this.usage), (this.updateRange.offset !== 0 || this.updateRange.count !== -1) && (t.updateRange = this.updateRange), t;
  }
  // @deprecated
  copyColorsArray() {
    console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.");
  }
  copyVector2sArray() {
    console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.");
  }
  copyVector3sArray() {
    console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.");
  }
  copyVector4sArray() {
    console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.");
  }
}
class oh extends _n {
  constructor(t, e, n) {
    super(new Uint16Array(t), e, n);
  }
}
class lh extends _n {
  constructor(t, e, n) {
    super(new Uint32Array(t), e, n);
  }
}
class $e extends _n {
  constructor(t, e, n) {
    super(new Float32Array(t), e, n);
  }
}
let Xd = 0;
const Qe = /* @__PURE__ */ new ee(), Da = /* @__PURE__ */ new ze(), $i = /* @__PURE__ */ new R(), He = /* @__PURE__ */ new ri(), Rr = /* @__PURE__ */ new ri(), ue = /* @__PURE__ */ new R();
class xn extends Fi {
  constructor() {
    super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", { value: Xd++ }), this.uuid = Gn(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
  }
  getIndex() {
    return this.index;
  }
  setIndex(t) {
    return Array.isArray(t) ? this.index = new (th(t) ? lh : oh)(t, 1) : this.index = t, this;
  }
  getAttribute(t) {
    return this.attributes[t];
  }
  setAttribute(t, e) {
    return this.attributes[t] = e, this;
  }
  deleteAttribute(t) {
    return delete this.attributes[t], this;
  }
  hasAttribute(t) {
    return this.attributes[t] !== void 0;
  }
  addGroup(t, e, n = 0) {
    this.groups.push({
      start: t,
      count: e,
      materialIndex: n
    });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(t, e) {
    this.drawRange.start = t, this.drawRange.count = e;
  }
  applyMatrix4(t) {
    const e = this.attributes.position;
    e !== void 0 && (e.applyMatrix4(t), e.needsUpdate = !0);
    const n = this.attributes.normal;
    if (n !== void 0) {
      const r = new Ye().getNormalMatrix(t);
      n.applyNormalMatrix(r), n.needsUpdate = !0;
    }
    const i = this.attributes.tangent;
    return i !== void 0 && (i.transformDirection(t), i.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
  }
  applyQuaternion(t) {
    return Qe.makeRotationFromQuaternion(t), this.applyMatrix4(Qe), this;
  }
  rotateX(t) {
    return Qe.makeRotationX(t), this.applyMatrix4(Qe), this;
  }
  rotateY(t) {
    return Qe.makeRotationY(t), this.applyMatrix4(Qe), this;
  }
  rotateZ(t) {
    return Qe.makeRotationZ(t), this.applyMatrix4(Qe), this;
  }
  translate(t, e, n) {
    return Qe.makeTranslation(t, e, n), this.applyMatrix4(Qe), this;
  }
  scale(t, e, n) {
    return Qe.makeScale(t, e, n), this.applyMatrix4(Qe), this;
  }
  lookAt(t) {
    return Da.lookAt(t), Da.updateMatrix(), this.applyMatrix4(Da.matrix), this;
  }
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter($i).negate(), this.translate($i.x, $i.y, $i.z), this;
  }
  setFromPoints(t) {
    const e = [];
    for (let n = 0, i = t.length; n < i; n++) {
      const r = t[n];
      e.push(r.x, r.y, r.z || 0);
    }
    return this.setAttribute("position", new $e(e, 3)), this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new ri());
    const t = this.attributes.position, e = this.morphAttributes.position;
    if (t && t.isGLBufferAttribute) {
      console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".', this), this.boundingBox.set(
        new R(-1 / 0, -1 / 0, -1 / 0),
        new R(1 / 0, 1 / 0, 1 / 0)
      );
      return;
    }
    if (t !== void 0) {
      if (this.boundingBox.setFromBufferAttribute(t), e)
        for (let n = 0, i = e.length; n < i; n++) {
          const r = e[n];
          He.setFromBufferAttribute(r), this.morphTargetsRelative ? (ue.addVectors(this.boundingBox.min, He.min), this.boundingBox.expandByPoint(ue), ue.addVectors(this.boundingBox.max, He.max), this.boundingBox.expandByPoint(ue)) : (this.boundingBox.expandByPoint(He.min), this.boundingBox.expandByPoint(He.max));
        }
    } else
      this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new os());
    const t = this.attributes.position, e = this.morphAttributes.position;
    if (t && t.isGLBufferAttribute) {
      console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".', this), this.boundingSphere.set(new R(), 1 / 0);
      return;
    }
    if (t) {
      const n = this.boundingSphere.center;
      if (He.setFromBufferAttribute(t), e)
        for (let r = 0, o = e.length; r < o; r++) {
          const s = e[r];
          Rr.setFromBufferAttribute(s), this.morphTargetsRelative ? (ue.addVectors(He.min, Rr.min), He.expandByPoint(ue), ue.addVectors(He.max, Rr.max), He.expandByPoint(ue)) : (He.expandByPoint(Rr.min), He.expandByPoint(Rr.max));
        }
      He.getCenter(n);
      let i = 0;
      for (let r = 0, o = t.count; r < o; r++)
        ue.fromBufferAttribute(t, r), i = Math.max(i, n.distanceToSquared(ue));
      if (e)
        for (let r = 0, o = e.length; r < o; r++) {
          const s = e[r], l = this.morphTargetsRelative;
          for (let c = 0, h = s.count; c < h; c++)
            ue.fromBufferAttribute(s, c), l && ($i.fromBufferAttribute(t, c), ue.add($i)), i = Math.max(i, n.distanceToSquared(ue));
        }
      this.boundingSphere.radius = Math.sqrt(i), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
    }
  }
  computeTangents() {
    const t = this.index, e = this.attributes;
    if (t === null || e.position === void 0 || e.normal === void 0 || e.uv === void 0) {
      console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
      return;
    }
    const n = t.array, i = e.position.array, r = e.normal.array, o = e.uv.array, s = i.length / 3;
    this.hasAttribute("tangent") === !1 && this.setAttribute("tangent", new _n(new Float32Array(4 * s), 4));
    const l = this.getAttribute("tangent").array, c = [], h = [];
    for (let L = 0; L < s; L++)
      c[L] = new R(), h[L] = new R();
    const u = new R(), d = new R(), m = new R(), g = new vt(), f = new vt(), p = new vt(), _ = new R(), b = new R();
    function x(L, U, j) {
      u.fromArray(i, L * 3), d.fromArray(i, U * 3), m.fromArray(i, j * 3), g.fromArray(o, L * 2), f.fromArray(o, U * 2), p.fromArray(o, j * 2), d.sub(u), m.sub(u), f.sub(g), p.sub(g);
      const O = 1 / (f.x * p.y - p.x * f.y);
      isFinite(O) && (_.copy(d).multiplyScalar(p.y).addScaledVector(m, -f.y).multiplyScalar(O), b.copy(m).multiplyScalar(f.x).addScaledVector(d, -p.x).multiplyScalar(O), c[L].add(_), c[U].add(_), c[j].add(_), h[L].add(b), h[U].add(b), h[j].add(b));
    }
    let y = this.groups;
    y.length === 0 && (y = [{
      start: 0,
      count: n.length
    }]);
    for (let L = 0, U = y.length; L < U; ++L) {
      const j = y[L], O = j.start, I = j.count;
      for (let k = O, $ = O + I; k < $; k += 3)
        x(
          n[k + 0],
          n[k + 1],
          n[k + 2]
        );
    }
    const M = new R(), A = new R(), P = new R(), v = new R();
    function w(L) {
      P.fromArray(r, L * 3), v.copy(P);
      const U = c[L];
      M.copy(U), M.sub(P.multiplyScalar(P.dot(U))).normalize(), A.crossVectors(v, U);
      const O = A.dot(h[L]) < 0 ? -1 : 1;
      l[L * 4] = M.x, l[L * 4 + 1] = M.y, l[L * 4 + 2] = M.z, l[L * 4 + 3] = O;
    }
    for (let L = 0, U = y.length; L < U; ++L) {
      const j = y[L], O = j.start, I = j.count;
      for (let k = O, $ = O + I; k < $; k += 3)
        w(n[k + 0]), w(n[k + 1]), w(n[k + 2]);
    }
  }
  computeVertexNormals() {
    const t = this.index, e = this.getAttribute("position");
    if (e !== void 0) {
      let n = this.getAttribute("normal");
      if (n === void 0)
        n = new _n(new Float32Array(e.count * 3), 3), this.setAttribute("normal", n);
      else
        for (let d = 0, m = n.count; d < m; d++)
          n.setXYZ(d, 0, 0, 0);
      const i = new R(), r = new R(), o = new R(), s = new R(), l = new R(), c = new R(), h = new R(), u = new R();
      if (t)
        for (let d = 0, m = t.count; d < m; d += 3) {
          const g = t.getX(d + 0), f = t.getX(d + 1), p = t.getX(d + 2);
          i.fromBufferAttribute(e, g), r.fromBufferAttribute(e, f), o.fromBufferAttribute(e, p), h.subVectors(o, r), u.subVectors(i, r), h.cross(u), s.fromBufferAttribute(n, g), l.fromBufferAttribute(n, f), c.fromBufferAttribute(n, p), s.add(h), l.add(h), c.add(h), n.setXYZ(g, s.x, s.y, s.z), n.setXYZ(f, l.x, l.y, l.z), n.setXYZ(p, c.x, c.y, c.z);
        }
      else
        for (let d = 0, m = e.count; d < m; d += 3)
          i.fromBufferAttribute(e, d + 0), r.fromBufferAttribute(e, d + 1), o.fromBufferAttribute(e, d + 2), h.subVectors(o, r), u.subVectors(i, r), h.cross(u), n.setXYZ(d + 0, h.x, h.y, h.z), n.setXYZ(d + 1, h.x, h.y, h.z), n.setXYZ(d + 2, h.x, h.y, h.z);
      this.normalizeNormals(), n.needsUpdate = !0;
    }
  }
  // @deprecated since r144
  merge() {
    return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."), this;
  }
  normalizeNormals() {
    const t = this.attributes.normal;
    for (let e = 0, n = t.count; e < n; e++)
      ue.fromBufferAttribute(t, e), ue.normalize(), t.setXYZ(e, ue.x, ue.y, ue.z);
  }
  toNonIndexed() {
    function t(s, l) {
      const c = s.array, h = s.itemSize, u = s.normalized, d = new c.constructor(l.length * h);
      let m = 0, g = 0;
      for (let f = 0, p = l.length; f < p; f++) {
        s.isInterleavedBufferAttribute ? m = l[f] * s.data.stride + s.offset : m = l[f] * h;
        for (let _ = 0; _ < h; _++)
          d[g++] = c[m++];
      }
      return new _n(d, h, u);
    }
    if (this.index === null)
      return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
    const e = new xn(), n = this.index.array, i = this.attributes;
    for (const s in i) {
      const l = i[s], c = t(l, n);
      e.setAttribute(s, c);
    }
    const r = this.morphAttributes;
    for (const s in r) {
      const l = [], c = r[s];
      for (let h = 0, u = c.length; h < u; h++) {
        const d = c[h], m = t(d, n);
        l.push(m);
      }
      e.morphAttributes[s] = l;
    }
    e.morphTargetsRelative = this.morphTargetsRelative;
    const o = this.groups;
    for (let s = 0, l = o.length; s < l; s++) {
      const c = o[s];
      e.addGroup(c.start, c.count, c.materialIndex);
    }
    return e;
  }
  toJSON() {
    const t = {
      metadata: {
        version: 4.5,
        type: "BufferGeometry",
        generator: "BufferGeometry.toJSON"
      }
    };
    if (t.uuid = this.uuid, t.type = this.type, this.name !== "" && (t.name = this.name), Object.keys(this.userData).length > 0 && (t.userData = this.userData), this.parameters !== void 0) {
      const l = this.parameters;
      for (const c in l)
        l[c] !== void 0 && (t[c] = l[c]);
      return t;
    }
    t.data = { attributes: {} };
    const e = this.index;
    e !== null && (t.data.index = {
      type: e.array.constructor.name,
      array: Array.prototype.slice.call(e.array)
    });
    const n = this.attributes;
    for (const l in n) {
      const c = n[l];
      t.data.attributes[l] = c.toJSON(t.data);
    }
    const i = {};
    let r = !1;
    for (const l in this.morphAttributes) {
      const c = this.morphAttributes[l], h = [];
      for (let u = 0, d = c.length; u < d; u++) {
        const m = c[u];
        h.push(m.toJSON(t.data));
      }
      h.length > 0 && (i[l] = h, r = !0);
    }
    r && (t.data.morphAttributes = i, t.data.morphTargetsRelative = this.morphTargetsRelative);
    const o = this.groups;
    o.length > 0 && (t.data.groups = JSON.parse(JSON.stringify(o)));
    const s = this.boundingSphere;
    return s !== null && (t.data.boundingSphere = {
      center: s.center.toArray(),
      radius: s.radius
    }), t;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
    const e = {};
    this.name = t.name;
    const n = t.index;
    n !== null && this.setIndex(n.clone(e));
    const i = t.attributes;
    for (const c in i) {
      const h = i[c];
      this.setAttribute(c, h.clone(e));
    }
    const r = t.morphAttributes;
    for (const c in r) {
      const h = [], u = r[c];
      for (let d = 0, m = u.length; d < m; d++)
        h.push(u[d].clone(e));
      this.morphAttributes[c] = h;
    }
    this.morphTargetsRelative = t.morphTargetsRelative;
    const o = t.groups;
    for (let c = 0, h = o.length; c < h; c++) {
      const u = o[c];
      this.addGroup(u.start, u.count, u.materialIndex);
    }
    const s = t.boundingBox;
    s !== null && (this.boundingBox = s.clone());
    const l = t.boundingSphere;
    return l !== null && (this.boundingSphere = l.clone()), this.drawRange.start = t.drawRange.start, this.drawRange.count = t.drawRange.count, this.userData = t.userData, t.parameters !== void 0 && (this.parameters = Object.assign({}, t.parameters)), this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
const Hl = /* @__PURE__ */ new ee(), ji = /* @__PURE__ */ new sh(), Ra = /* @__PURE__ */ new os(), Ir = /* @__PURE__ */ new R(), Or = /* @__PURE__ */ new R(), zr = /* @__PURE__ */ new R(), Ia = /* @__PURE__ */ new R(), bs = /* @__PURE__ */ new R(), Ms = /* @__PURE__ */ new vt(), Ss = /* @__PURE__ */ new vt(), ws = /* @__PURE__ */ new vt(), Oa = /* @__PURE__ */ new R(), Ts = /* @__PURE__ */ new R();
class rn extends ze {
  constructor(t = new xn(), e = new ah()) {
    super(), this.isMesh = !0, this.type = "Mesh", this.geometry = t, this.material = e, this.updateMorphTargets();
  }
  copy(t, e) {
    return super.copy(t, e), t.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = t.morphTargetInfluences.slice()), t.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, t.morphTargetDictionary)), this.material = t.material, this.geometry = t.geometry, this;
  }
  updateMorphTargets() {
    const e = this.geometry.morphAttributes, n = Object.keys(e);
    if (n.length > 0) {
      const i = e[n[0]];
      if (i !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let r = 0, o = i.length; r < o; r++) {
          const s = i[r].name || String(r);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[s] = r;
        }
      }
    }
  }
  getVertexPosition(t, e) {
    const n = this.geometry, i = n.attributes.position, r = n.morphAttributes.position, o = n.morphTargetsRelative;
    e.fromBufferAttribute(i, t);
    const s = this.morphTargetInfluences;
    if (r && s) {
      bs.set(0, 0, 0);
      for (let l = 0, c = r.length; l < c; l++) {
        const h = s[l], u = r[l];
        h !== 0 && (Ia.fromBufferAttribute(u, t), o ? bs.addScaledVector(Ia, h) : bs.addScaledVector(Ia.sub(e), h));
      }
      e.add(bs);
    }
    return this.isSkinnedMesh && this.boneTransform(t, e), e;
  }
  raycast(t, e) {
    const n = this.geometry, i = this.material, r = this.matrixWorld;
    if (i === void 0 || (n.boundingSphere === null && n.computeBoundingSphere(), Ra.copy(n.boundingSphere), Ra.applyMatrix4(r), t.ray.intersectsSphere(Ra) === !1) || (Hl.copy(r).invert(), ji.copy(t.ray).applyMatrix4(Hl), n.boundingBox !== null && ji.intersectsBox(n.boundingBox) === !1))
      return;
    let o;
    const s = n.index, l = n.attributes.position, c = n.attributes.uv, h = n.attributes.uv2, u = n.groups, d = n.drawRange;
    if (s !== null)
      if (Array.isArray(i))
        for (let m = 0, g = u.length; m < g; m++) {
          const f = u[m], p = i[f.materialIndex], _ = Math.max(f.start, d.start), b = Math.min(s.count, Math.min(f.start + f.count, d.start + d.count));
          for (let x = _, y = b; x < y; x += 3) {
            const M = s.getX(x), A = s.getX(x + 1), P = s.getX(x + 2);
            o = Es(this, p, t, ji, c, h, M, A, P), o && (o.faceIndex = Math.floor(x / 3), o.face.materialIndex = f.materialIndex, e.push(o));
          }
        }
      else {
        const m = Math.max(0, d.start), g = Math.min(s.count, d.start + d.count);
        for (let f = m, p = g; f < p; f += 3) {
          const _ = s.getX(f), b = s.getX(f + 1), x = s.getX(f + 2);
          o = Es(this, i, t, ji, c, h, _, b, x), o && (o.faceIndex = Math.floor(f / 3), e.push(o));
        }
      }
    else if (l !== void 0)
      if (Array.isArray(i))
        for (let m = 0, g = u.length; m < g; m++) {
          const f = u[m], p = i[f.materialIndex], _ = Math.max(f.start, d.start), b = Math.min(l.count, Math.min(f.start + f.count, d.start + d.count));
          for (let x = _, y = b; x < y; x += 3) {
            const M = x, A = x + 1, P = x + 2;
            o = Es(this, p, t, ji, c, h, M, A, P), o && (o.faceIndex = Math.floor(x / 3), o.face.materialIndex = f.materialIndex, e.push(o));
          }
        }
      else {
        const m = Math.max(0, d.start), g = Math.min(l.count, d.start + d.count);
        for (let f = m, p = g; f < p; f += 3) {
          const _ = f, b = f + 1, x = f + 2;
          o = Es(this, i, t, ji, c, h, _, b, x), o && (o.faceIndex = Math.floor(f / 3), e.push(o));
        }
      }
  }
}
function qd(a, t, e, n, i, r, o, s) {
  let l;
  if (t.side === ln ? l = n.intersectTriangle(o, r, i, !0, s) : l = n.intersectTriangle(i, r, o, t.side === Pi, s), l === null)
    return null;
  Ts.copy(s), Ts.applyMatrix4(a.matrixWorld);
  const c = e.ray.origin.distanceTo(Ts);
  return c < e.near || c > e.far ? null : {
    distance: c,
    point: Ts.clone(),
    object: a
  };
}
function Es(a, t, e, n, i, r, o, s, l) {
  a.getVertexPosition(o, Ir), a.getVertexPosition(s, Or), a.getVertexPosition(l, zr);
  const c = qd(a, t, e, n, Ir, Or, zr, Oa);
  if (c) {
    i && (Ms.fromBufferAttribute(i, o), Ss.fromBufferAttribute(i, s), ws.fromBufferAttribute(i, l), c.uv = Mn.getUV(Oa, Ir, Or, zr, Ms, Ss, ws, new vt())), r && (Ms.fromBufferAttribute(r, o), Ss.fromBufferAttribute(r, s), ws.fromBufferAttribute(r, l), c.uv2 = Mn.getUV(Oa, Ir, Or, zr, Ms, Ss, ws, new vt()));
    const h = {
      a: o,
      b: s,
      c: l,
      normal: new R(),
      materialIndex: 0
    };
    Mn.getNormal(Ir, Or, zr, h.normal), c.face = h;
  }
  return c;
}
class ls extends xn {
  constructor(t = 1, e = 1, n = 1, i = 1, r = 1, o = 1) {
    super(), this.type = "BoxGeometry", this.parameters = {
      width: t,
      height: e,
      depth: n,
      widthSegments: i,
      heightSegments: r,
      depthSegments: o
    };
    const s = this;
    i = Math.floor(i), r = Math.floor(r), o = Math.floor(o);
    const l = [], c = [], h = [], u = [];
    let d = 0, m = 0;
    g("z", "y", "x", -1, -1, n, e, t, o, r, 0), g("z", "y", "x", 1, -1, n, e, -t, o, r, 1), g("x", "z", "y", 1, 1, t, n, e, i, o, 2), g("x", "z", "y", 1, -1, t, n, -e, i, o, 3), g("x", "y", "z", 1, -1, t, e, n, i, r, 4), g("x", "y", "z", -1, -1, t, e, -n, i, r, 5), this.setIndex(l), this.setAttribute("position", new $e(c, 3)), this.setAttribute("normal", new $e(h, 3)), this.setAttribute("uv", new $e(u, 2));
    function g(f, p, _, b, x, y, M, A, P, v, w) {
      const L = y / P, U = M / v, j = y / 2, O = M / 2, I = A / 2, k = P + 1, $ = v + 1;
      let Z = 0, G = 0;
      const Q = new R();
      for (let K = 0; K < $; K++) {
        const V = K * U - O;
        for (let B = 0; B < k; B++) {
          const at = B * L - j;
          Q[f] = at * b, Q[p] = V * x, Q[_] = I, c.push(Q.x, Q.y, Q.z), Q[f] = 0, Q[p] = 0, Q[_] = A > 0 ? 1 : -1, h.push(Q.x, Q.y, Q.z), u.push(B / P), u.push(1 - K / v), Z += 1;
        }
      }
      for (let K = 0; K < v; K++)
        for (let V = 0; V < P; V++) {
          const B = d + V + k * K, at = d + V + k * (K + 1), J = d + (V + 1) + k * (K + 1), st = d + (V + 1) + k * K;
          l.push(B, at, st), l.push(at, J, st), G += 6;
        }
      s.addGroup(m, G, w), m += G, d += Z;
    }
  }
  static fromJSON(t) {
    return new ls(t.width, t.height, t.depth, t.widthSegments, t.heightSegments, t.depthSegments);
  }
}
function vr(a) {
  const t = {};
  for (const e in a) {
    t[e] = {};
    for (const n in a[e]) {
      const i = a[e][n];
      i && (i.isColor || i.isMatrix3 || i.isMatrix4 || i.isVector2 || i.isVector3 || i.isVector4 || i.isTexture || i.isQuaternion) ? t[e][n] = i.clone() : Array.isArray(i) ? t[e][n] = i.slice() : t[e][n] = i;
    }
  }
  return t;
}
function Le(a) {
  const t = {};
  for (let e = 0; e < a.length; e++) {
    const n = vr(a[e]);
    for (const i in n)
      t[i] = n[i];
  }
  return t;
}
function Yd(a) {
  const t = [];
  for (let e = 0; e < a.length; e++)
    t.push(a[e].clone());
  return t;
}
function ch(a) {
  return a.getRenderTarget() === null && a.outputEncoding === Ht ? fn : Jr;
}
const Io = { clone: vr, merge: Le };
var $d = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, jd = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class Pn extends Er {
  constructor(t) {
    super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = $d, this.fragmentShader = jd, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.extensions = {
      derivatives: !1,
      // set to use derivatives
      fragDepth: !1,
      // set to use fragment depth values
      drawBuffers: !1,
      // set to use draw buffers
      shaderTextureLOD: !1
      // set to use shader texture LOD
    }, this.defaultAttributeValues = {
      color: [1, 1, 1],
      uv: [0, 0],
      uv2: [0, 0]
    }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, this.glslVersion = null, t !== void 0 && this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.fragmentShader = t.fragmentShader, this.vertexShader = t.vertexShader, this.uniforms = vr(t.uniforms), this.uniformsGroups = Yd(t.uniformsGroups), this.defines = Object.assign({}, t.defines), this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.fog = t.fog, this.lights = t.lights, this.clipping = t.clipping, this.extensions = Object.assign({}, t.extensions), this.glslVersion = t.glslVersion, this;
  }
  toJSON(t) {
    const e = super.toJSON(t);
    e.glslVersion = this.glslVersion, e.uniforms = {};
    for (const i in this.uniforms) {
      const o = this.uniforms[i].value;
      o && o.isTexture ? e.uniforms[i] = {
        type: "t",
        value: o.toJSON(t).uuid
      } : o && o.isColor ? e.uniforms[i] = {
        type: "c",
        value: o.getHex()
      } : o && o.isVector2 ? e.uniforms[i] = {
        type: "v2",
        value: o.toArray()
      } : o && o.isVector3 ? e.uniforms[i] = {
        type: "v3",
        value: o.toArray()
      } : o && o.isVector4 ? e.uniforms[i] = {
        type: "v4",
        value: o.toArray()
      } : o && o.isMatrix3 ? e.uniforms[i] = {
        type: "m3",
        value: o.toArray()
      } : o && o.isMatrix4 ? e.uniforms[i] = {
        type: "m4",
        value: o.toArray()
      } : e.uniforms[i] = {
        value: o
      };
    }
    Object.keys(this.defines).length > 0 && (e.defines = this.defines), e.vertexShader = this.vertexShader, e.fragmentShader = this.fragmentShader;
    const n = {};
    for (const i in this.extensions)
      this.extensions[i] === !0 && (n[i] = !0);
    return Object.keys(n).length > 0 && (e.extensions = n), e;
  }
}
class hh extends ze {
  constructor() {
    super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new ee(), this.projectionMatrix = new ee(), this.projectionMatrixInverse = new ee();
  }
  copy(t, e) {
    return super.copy(t, e), this.matrixWorldInverse.copy(t.matrixWorldInverse), this.projectionMatrix.copy(t.projectionMatrix), this.projectionMatrixInverse.copy(t.projectionMatrixInverse), this;
  }
  getWorldDirection(t) {
    this.updateWorldMatrix(!0, !1);
    const e = this.matrixWorld.elements;
    return t.set(-e[8], -e[9], -e[10]).normalize();
  }
  updateMatrixWorld(t) {
    super.updateMatrixWorld(t), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  updateWorldMatrix(t, e) {
    super.updateWorldMatrix(t, e), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class nn extends hh {
  constructor(t = 50, e = 1, n = 0.1, i = 2e3) {
    super(), this.isPerspectiveCamera = !0, this.type = "PerspectiveCamera", this.fov = t, this.zoom = 1, this.near = n, this.far = i, this.focus = 10, this.aspect = e, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
  }
  copy(t, e) {
    return super.copy(t, e), this.fov = t.fov, this.zoom = t.zoom, this.near = t.near, this.far = t.far, this.focus = t.focus, this.aspect = t.aspect, this.view = t.view === null ? null : Object.assign({}, t.view), this.filmGauge = t.filmGauge, this.filmOffset = t.filmOffset, this;
  }
  /**
   * Sets the FOV by focal length in respect to the current .filmGauge.
   *
   * The default film gauge is 35, so that the focal length can be specified for
   * a 35mm (full frame) camera.
   *
   * Values for focal length and film gauge must have the same unit.
   */
  setFocalLength(t) {
    const e = 0.5 * this.getFilmHeight() / t;
    this.fov = Hs * 2 * Math.atan(e), this.updateProjectionMatrix();
  }
  /**
   * Calculates the focal length from the current .fov and .filmGauge.
   */
  getFocalLength() {
    const t = Math.tan(Wr * 0.5 * this.fov);
    return 0.5 * this.getFilmHeight() / t;
  }
  getEffectiveFOV() {
    return Hs * 2 * Math.atan(
      Math.tan(Wr * 0.5 * this.fov) / this.zoom
    );
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  /**
   * Sets an offset in a larger frustum. This is useful for multi-window or
   * multi-monitor/multi-machine setups.
   *
   * For example, if you have 3x2 monitors and each monitor is 1920x1080 and
   * the monitors are in grid like this
   *
   *   +---+---+---+
   *   | A | B | C |
   *   +---+---+---+
   *   | D | E | F |
   *   +---+---+---+
   *
   * then for each monitor you would call it like this
   *
   *   const w = 1920;
   *   const h = 1080;
   *   const fullWidth = w * 3;
   *   const fullHeight = h * 2;
   *
   *   --A--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 0, w, h );
   *   --B--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 0, w, h );
   *   --C--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 0, w, h );
   *   --D--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 1, w, h );
   *   --E--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 1, w, h );
   *   --F--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 1, w, h );
   *
   *   Note there is no reason monitors have to be the same size or in a grid.
   */
  setViewOffset(t, e, n, i, r, o) {
    this.aspect = t / e, this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = t, this.view.fullHeight = e, this.view.offsetX = n, this.view.offsetY = i, this.view.width = r, this.view.height = o, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const t = this.near;
    let e = t * Math.tan(Wr * 0.5 * this.fov) / this.zoom, n = 2 * e, i = this.aspect * n, r = -0.5 * i;
    const o = this.view;
    if (this.view !== null && this.view.enabled) {
      const l = o.fullWidth, c = o.fullHeight;
      r += o.offsetX * i / l, e -= o.offsetY * n / c, i *= o.width / l, n *= o.height / c;
    }
    const s = this.filmOffset;
    s !== 0 && (r += t * s / this.getFilmWidth()), this.projectionMatrix.makePerspective(r, r + i, e, e - n, t, this.far), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return e.object.fov = this.fov, e.object.zoom = this.zoom, e.object.near = this.near, e.object.far = this.far, e.object.focus = this.focus, e.object.aspect = this.aspect, this.view !== null && (e.object.view = Object.assign({}, this.view)), e.object.filmGauge = this.filmGauge, e.object.filmOffset = this.filmOffset, e;
  }
}
const Zi = -90, Ki = 1;
class Zd extends ze {
  constructor(t, e, n) {
    super(), this.type = "CubeCamera", this.renderTarget = n;
    const i = new nn(Zi, Ki, t, e);
    i.layers = this.layers, i.up.set(0, 1, 0), i.lookAt(1, 0, 0), this.add(i);
    const r = new nn(Zi, Ki, t, e);
    r.layers = this.layers, r.up.set(0, 1, 0), r.lookAt(-1, 0, 0), this.add(r);
    const o = new nn(Zi, Ki, t, e);
    o.layers = this.layers, o.up.set(0, 0, -1), o.lookAt(0, 1, 0), this.add(o);
    const s = new nn(Zi, Ki, t, e);
    s.layers = this.layers, s.up.set(0, 0, 1), s.lookAt(0, -1, 0), this.add(s);
    const l = new nn(Zi, Ki, t, e);
    l.layers = this.layers, l.up.set(0, 1, 0), l.lookAt(0, 0, 1), this.add(l);
    const c = new nn(Zi, Ki, t, e);
    c.layers = this.layers, c.up.set(0, 1, 0), c.lookAt(0, 0, -1), this.add(c);
  }
  update(t, e) {
    this.parent === null && this.updateMatrixWorld();
    const n = this.renderTarget, [i, r, o, s, l, c] = this.children, h = t.getRenderTarget(), u = t.toneMapping, d = t.xr.enabled;
    t.toneMapping = gn, t.xr.enabled = !1;
    const m = n.texture.generateMipmaps;
    n.texture.generateMipmaps = !1, t.setRenderTarget(n, 0), t.render(e, i), t.setRenderTarget(n, 1), t.render(e, r), t.setRenderTarget(n, 2), t.render(e, o), t.setRenderTarget(n, 3), t.render(e, s), t.setRenderTarget(n, 4), t.render(e, l), n.texture.generateMipmaps = m, t.setRenderTarget(n, 5), t.render(e, c), t.setRenderTarget(h), t.toneMapping = u, t.xr.enabled = d, n.texture.needsPMREMUpdate = !0;
  }
}
class uh extends Oe {
  constructor(t, e, n, i, r, o, s, l, c, h) {
    t = t !== void 0 ? t : [], e = e !== void 0 ? e : mr, super(t, e, n, i, r, o, s, l, c, h), this.isCubeTexture = !0, this.flipY = !1;
  }
  get images() {
    return this.image;
  }
  set images(t) {
    this.image = t;
  }
}
class Kd extends Ri {
  constructor(t = 1, e = {}) {
    super(t, t, e), this.isWebGLCubeRenderTarget = !0;
    const n = { width: t, height: t, depth: 1 }, i = [n, n, n, n, n, n];
    this.texture = new uh(i, e.mapping, e.wrapS, e.wrapT, e.magFilter, e.minFilter, e.format, e.type, e.anisotropy, e.encoding), this.texture.isRenderTargetTexture = !0, this.texture.generateMipmaps = e.generateMipmaps !== void 0 ? e.generateMipmaps : !1, this.texture.minFilter = e.minFilter !== void 0 ? e.minFilter : Xe;
  }
  fromEquirectangularTexture(t, e) {
    this.texture.type = e.type, this.texture.encoding = e.encoding, this.texture.generateMipmaps = e.generateMipmaps, this.texture.minFilter = e.minFilter, this.texture.magFilter = e.magFilter;
    const n = {
      uniforms: {
        tEquirect: { value: null }
      },
      vertexShader: (
        /* glsl */
        `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`
      ),
      fragmentShader: (
        /* glsl */
        `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`
      )
    }, i = new ls(5, 5, 5), r = new Pn({
      name: "CubemapFromEquirect",
      uniforms: vr(n.uniforms),
      vertexShader: n.vertexShader,
      fragmentShader: n.fragmentShader,
      side: ln,
      blending: Jn
    });
    r.uniforms.tEquirect.value = e;
    const o = new rn(i, r), s = e.minFilter;
    return e.minFilter === Zr && (e.minFilter = Xe), new Zd(1, 10, this).update(t, o), e.minFilter = s, o.geometry.dispose(), o.material.dispose(), this;
  }
  clear(t, e, n, i) {
    const r = t.getRenderTarget();
    for (let o = 0; o < 6; o++)
      t.setRenderTarget(this, o), t.clear(e, n, i);
    t.setRenderTarget(r);
  }
}
const za = /* @__PURE__ */ new R(), Jd = /* @__PURE__ */ new R(), Qd = /* @__PURE__ */ new Ye();
class gi {
  constructor(t = new R(1, 0, 0), e = 0) {
    this.isPlane = !0, this.normal = t, this.constant = e;
  }
  set(t, e) {
    return this.normal.copy(t), this.constant = e, this;
  }
  setComponents(t, e, n, i) {
    return this.normal.set(t, e, n), this.constant = i, this;
  }
  setFromNormalAndCoplanarPoint(t, e) {
    return this.normal.copy(t), this.constant = -e.dot(this.normal), this;
  }
  setFromCoplanarPoints(t, e, n) {
    const i = za.subVectors(n, e).cross(Jd.subVectors(t, e)).normalize();
    return this.setFromNormalAndCoplanarPoint(i, t), this;
  }
  copy(t) {
    return this.normal.copy(t.normal), this.constant = t.constant, this;
  }
  normalize() {
    const t = 1 / this.normal.length();
    return this.normal.multiplyScalar(t), this.constant *= t, this;
  }
  negate() {
    return this.constant *= -1, this.normal.negate(), this;
  }
  distanceToPoint(t) {
    return this.normal.dot(t) + this.constant;
  }
  distanceToSphere(t) {
    return this.distanceToPoint(t.center) - t.radius;
  }
  projectPoint(t, e) {
    return e.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t);
  }
  intersectLine(t, e) {
    const n = t.delta(za), i = this.normal.dot(n);
    if (i === 0)
      return this.distanceToPoint(t.start) === 0 ? e.copy(t.start) : null;
    const r = -(t.start.dot(this.normal) + this.constant) / i;
    return r < 0 || r > 1 ? null : e.copy(n).multiplyScalar(r).add(t.start);
  }
  intersectsLine(t) {
    const e = this.distanceToPoint(t.start), n = this.distanceToPoint(t.end);
    return e < 0 && n > 0 || n < 0 && e > 0;
  }
  intersectsBox(t) {
    return t.intersectsPlane(this);
  }
  intersectsSphere(t) {
    return t.intersectsPlane(this);
  }
  coplanarPoint(t) {
    return t.copy(this.normal).multiplyScalar(-this.constant);
  }
  applyMatrix4(t, e) {
    const n = e || Qd.getNormalMatrix(t), i = this.coplanarPoint(za).applyMatrix4(t), r = this.normal.applyMatrix3(n).normalize();
    return this.constant = -i.dot(r), this;
  }
  translate(t) {
    return this.constant -= t.dot(this.normal), this;
  }
  equals(t) {
    return t.normal.equals(this.normal) && t.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Ji = /* @__PURE__ */ new os(), As = /* @__PURE__ */ new R();
class dh {
  constructor(t = new gi(), e = new gi(), n = new gi(), i = new gi(), r = new gi(), o = new gi()) {
    this.planes = [t, e, n, i, r, o];
  }
  set(t, e, n, i, r, o) {
    const s = this.planes;
    return s[0].copy(t), s[1].copy(e), s[2].copy(n), s[3].copy(i), s[4].copy(r), s[5].copy(o), this;
  }
  copy(t) {
    const e = this.planes;
    for (let n = 0; n < 6; n++)
      e[n].copy(t.planes[n]);
    return this;
  }
  setFromProjectionMatrix(t) {
    const e = this.planes, n = t.elements, i = n[0], r = n[1], o = n[2], s = n[3], l = n[4], c = n[5], h = n[6], u = n[7], d = n[8], m = n[9], g = n[10], f = n[11], p = n[12], _ = n[13], b = n[14], x = n[15];
    return e[0].setComponents(s - i, u - l, f - d, x - p).normalize(), e[1].setComponents(s + i, u + l, f + d, x + p).normalize(), e[2].setComponents(s + r, u + c, f + m, x + _).normalize(), e[3].setComponents(s - r, u - c, f - m, x - _).normalize(), e[4].setComponents(s - o, u - h, f - g, x - b).normalize(), e[5].setComponents(s + o, u + h, f + g, x + b).normalize(), this;
  }
  intersectsObject(t) {
    const e = t.geometry;
    return e.boundingSphere === null && e.computeBoundingSphere(), Ji.copy(e.boundingSphere).applyMatrix4(t.matrixWorld), this.intersectsSphere(Ji);
  }
  intersectsSprite(t) {
    return Ji.center.set(0, 0, 0), Ji.radius = 0.7071067811865476, Ji.applyMatrix4(t.matrixWorld), this.intersectsSphere(Ji);
  }
  intersectsSphere(t) {
    const e = this.planes, n = t.center, i = -t.radius;
    for (let r = 0; r < 6; r++)
      if (e[r].distanceToPoint(n) < i)
        return !1;
    return !0;
  }
  intersectsBox(t) {
    const e = this.planes;
    for (let n = 0; n < 6; n++) {
      const i = e[n];
      if (As.x = i.normal.x > 0 ? t.max.x : t.min.x, As.y = i.normal.y > 0 ? t.max.y : t.min.y, As.z = i.normal.z > 0 ? t.max.z : t.min.z, i.distanceToPoint(As) < 0)
        return !1;
    }
    return !0;
  }
  containsPoint(t) {
    const e = this.planes;
    for (let n = 0; n < 6; n++)
      if (e[n].distanceToPoint(t) < 0)
        return !1;
    return !0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
function fh() {
  let a = null, t = !1, e = null, n = null;
  function i(r, o) {
    e(r, o), n = a.requestAnimationFrame(i);
  }
  return {
    start: function() {
      t !== !0 && e !== null && (n = a.requestAnimationFrame(i), t = !0);
    },
    stop: function() {
      a.cancelAnimationFrame(n), t = !1;
    },
    setAnimationLoop: function(r) {
      e = r;
    },
    setContext: function(r) {
      a = r;
    }
  };
}
function tf(a, t) {
  const e = t.isWebGL2, n = /* @__PURE__ */ new WeakMap();
  function i(c, h) {
    const u = c.array, d = c.usage, m = a.createBuffer();
    a.bindBuffer(h, m), a.bufferData(h, u, d), c.onUploadCallback();
    let g;
    if (u instanceof Float32Array)
      g = 5126;
    else if (u instanceof Uint16Array)
      if (c.isFloat16BufferAttribute)
        if (e)
          g = 5131;
        else
          throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");
      else
        g = 5123;
    else if (u instanceof Int16Array)
      g = 5122;
    else if (u instanceof Uint32Array)
      g = 5125;
    else if (u instanceof Int32Array)
      g = 5124;
    else if (u instanceof Int8Array)
      g = 5120;
    else if (u instanceof Uint8Array)
      g = 5121;
    else if (u instanceof Uint8ClampedArray)
      g = 5121;
    else
      throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + u);
    return {
      buffer: m,
      type: g,
      bytesPerElement: u.BYTES_PER_ELEMENT,
      version: c.version
    };
  }
  function r(c, h, u) {
    const d = h.array, m = h.updateRange;
    a.bindBuffer(u, c), m.count === -1 ? a.bufferSubData(u, 0, d) : (e ? a.bufferSubData(
      u,
      m.offset * d.BYTES_PER_ELEMENT,
      d,
      m.offset,
      m.count
    ) : a.bufferSubData(
      u,
      m.offset * d.BYTES_PER_ELEMENT,
      d.subarray(m.offset, m.offset + m.count)
    ), m.count = -1), h.onUploadCallback();
  }
  function o(c) {
    return c.isInterleavedBufferAttribute && (c = c.data), n.get(c);
  }
  function s(c) {
    c.isInterleavedBufferAttribute && (c = c.data);
    const h = n.get(c);
    h && (a.deleteBuffer(h.buffer), n.delete(c));
  }
  function l(c, h) {
    if (c.isGLBufferAttribute) {
      const d = n.get(c);
      (!d || d.version < c.version) && n.set(c, {
        buffer: c.buffer,
        type: c.type,
        bytesPerElement: c.elementSize,
        version: c.version
      });
      return;
    }
    c.isInterleavedBufferAttribute && (c = c.data);
    const u = n.get(c);
    u === void 0 ? n.set(c, i(c, h)) : u.version < c.version && (r(u.buffer, c, h), u.version = c.version);
  }
  return {
    get: o,
    remove: s,
    update: l
  };
}
class ea extends xn {
  constructor(t = 1, e = 1, n = 1, i = 1) {
    super(), this.type = "PlaneGeometry", this.parameters = {
      width: t,
      height: e,
      widthSegments: n,
      heightSegments: i
    };
    const r = t / 2, o = e / 2, s = Math.floor(n), l = Math.floor(i), c = s + 1, h = l + 1, u = t / s, d = e / l, m = [], g = [], f = [], p = [];
    for (let _ = 0; _ < h; _++) {
      const b = _ * d - o;
      for (let x = 0; x < c; x++) {
        const y = x * u - r;
        g.push(y, -b, 0), f.push(0, 0, 1), p.push(x / s), p.push(1 - _ / l);
      }
    }
    for (let _ = 0; _ < l; _++)
      for (let b = 0; b < s; b++) {
        const x = b + c * _, y = b + c * (_ + 1), M = b + 1 + c * (_ + 1), A = b + 1 + c * _;
        m.push(x, y, A), m.push(y, M, A);
      }
    this.setIndex(m), this.setAttribute("position", new $e(g, 3)), this.setAttribute("normal", new $e(f, 3)), this.setAttribute("uv", new $e(p, 2));
  }
  static fromJSON(t) {
    return new ea(t.width, t.height, t.widthSegments, t.heightSegments);
  }
}
var ef = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`, nf = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, rf = `#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`, sf = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`, af = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`, of = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, lf = "vec3 transformed = vec3( position );", cf = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, hf = `vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`, uf = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`, df = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`, ff = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`, pf = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, mf = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, gf = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, _f = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`, vf = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`, xf = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`, yf = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`, bf = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`, Mf = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`, Sf = `vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`, wf = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, Tf = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`, Ef = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, Af = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, Cf = "gl_FragColor = linearToOutputTexel( gl_FragColor );", Pf = `vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`, Lf = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`, Df = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`, Rf = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`, If = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, Of = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`, zf = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`, Ff = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`, Nf = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, Uf = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, kf = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`, Bf = `#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`, Gf = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, Vf = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`, Hf = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`, Wf = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`, Xf = `#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`, qf = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, Yf = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`, $f = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, jf = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`, Zf = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`, Kf = `struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`, Jf = `
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`, Qf = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`, tp = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`, ep = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, np = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, ip = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`, rp = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`, sp = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`, ap = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, op = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`, lp = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, cp = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`, hp = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, up = `#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`, dp = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`, fp = `#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`, pp = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`, mp = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`, gp = `#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`, _p = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, vp = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, xp = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`, yp = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`, bp = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`, Mp = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`, Sp = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`, wp = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`, Tp = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, Ep = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`, Ap = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, Cp = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, Pp = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, Lp = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, Dp = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`, Rp = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, Ip = `#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`, Op = `#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`, zp = `#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`, Fp = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`, Np = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, Up = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`, kp = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, Bp = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`, Gp = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, Vp = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, Hp = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, Wp = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`, Xp = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`, qp = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`, Yp = `#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`, $p = `#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`, jp = `#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`, Zp = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`, Kp = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`, Jp = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`, Qp = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const tm = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, em = `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`, nm = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, im = `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`, rm = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, sm = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`, am = `#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`, om = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`, lm = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`, cm = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`, hm = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, um = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`, dm = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, fm = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, pm = `#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`, mm = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, gm = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, _m = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, vm = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`, xm = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, ym = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`, bm = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`, Mm = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Sm = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, wm = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`, Tm = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Em = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Am = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Cm = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`, Pm = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, Lm = `#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Dm = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`, Rm = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, Im = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`, wt = {
  alphamap_fragment: ef,
  alphamap_pars_fragment: nf,
  alphatest_fragment: rf,
  alphatest_pars_fragment: sf,
  aomap_fragment: af,
  aomap_pars_fragment: of,
  begin_vertex: lf,
  beginnormal_vertex: cf,
  bsdfs: hf,
  iridescence_fragment: uf,
  bumpmap_pars_fragment: df,
  clipping_planes_fragment: ff,
  clipping_planes_pars_fragment: pf,
  clipping_planes_pars_vertex: mf,
  clipping_planes_vertex: gf,
  color_fragment: _f,
  color_pars_fragment: vf,
  color_pars_vertex: xf,
  color_vertex: yf,
  common: bf,
  cube_uv_reflection_fragment: Mf,
  defaultnormal_vertex: Sf,
  displacementmap_pars_vertex: wf,
  displacementmap_vertex: Tf,
  emissivemap_fragment: Ef,
  emissivemap_pars_fragment: Af,
  encodings_fragment: Cf,
  encodings_pars_fragment: Pf,
  envmap_fragment: Lf,
  envmap_common_pars_fragment: Df,
  envmap_pars_fragment: Rf,
  envmap_pars_vertex: If,
  envmap_physical_pars_fragment: Xf,
  envmap_vertex: Of,
  fog_vertex: zf,
  fog_pars_vertex: Ff,
  fog_fragment: Nf,
  fog_pars_fragment: Uf,
  gradientmap_pars_fragment: kf,
  lightmap_fragment: Bf,
  lightmap_pars_fragment: Gf,
  lights_lambert_fragment: Vf,
  lights_lambert_pars_fragment: Hf,
  lights_pars_begin: Wf,
  lights_toon_fragment: qf,
  lights_toon_pars_fragment: Yf,
  lights_phong_fragment: $f,
  lights_phong_pars_fragment: jf,
  lights_physical_fragment: Zf,
  lights_physical_pars_fragment: Kf,
  lights_fragment_begin: Jf,
  lights_fragment_maps: Qf,
  lights_fragment_end: tp,
  logdepthbuf_fragment: ep,
  logdepthbuf_pars_fragment: np,
  logdepthbuf_pars_vertex: ip,
  logdepthbuf_vertex: rp,
  map_fragment: sp,
  map_pars_fragment: ap,
  map_particle_fragment: op,
  map_particle_pars_fragment: lp,
  metalnessmap_fragment: cp,
  metalnessmap_pars_fragment: hp,
  morphcolor_vertex: up,
  morphnormal_vertex: dp,
  morphtarget_pars_vertex: fp,
  morphtarget_vertex: pp,
  normal_fragment_begin: mp,
  normal_fragment_maps: gp,
  normal_pars_fragment: _p,
  normal_pars_vertex: vp,
  normal_vertex: xp,
  normalmap_pars_fragment: yp,
  clearcoat_normal_fragment_begin: bp,
  clearcoat_normal_fragment_maps: Mp,
  clearcoat_pars_fragment: Sp,
  iridescence_pars_fragment: wp,
  output_fragment: Tp,
  packing: Ep,
  premultiplied_alpha_fragment: Ap,
  project_vertex: Cp,
  dithering_fragment: Pp,
  dithering_pars_fragment: Lp,
  roughnessmap_fragment: Dp,
  roughnessmap_pars_fragment: Rp,
  shadowmap_pars_fragment: Ip,
  shadowmap_pars_vertex: Op,
  shadowmap_vertex: zp,
  shadowmask_pars_fragment: Fp,
  skinbase_vertex: Np,
  skinning_pars_vertex: Up,
  skinning_vertex: kp,
  skinnormal_vertex: Bp,
  specularmap_fragment: Gp,
  specularmap_pars_fragment: Vp,
  tonemapping_fragment: Hp,
  tonemapping_pars_fragment: Wp,
  transmission_fragment: Xp,
  transmission_pars_fragment: qp,
  uv_pars_fragment: Yp,
  uv_pars_vertex: $p,
  uv_vertex: jp,
  uv2_pars_fragment: Zp,
  uv2_pars_vertex: Kp,
  uv2_vertex: Jp,
  worldpos_vertex: Qp,
  background_vert: tm,
  background_frag: em,
  backgroundCube_vert: nm,
  backgroundCube_frag: im,
  cube_vert: rm,
  cube_frag: sm,
  depth_vert: am,
  depth_frag: om,
  distanceRGBA_vert: lm,
  distanceRGBA_frag: cm,
  equirect_vert: hm,
  equirect_frag: um,
  linedashed_vert: dm,
  linedashed_frag: fm,
  meshbasic_vert: pm,
  meshbasic_frag: mm,
  meshlambert_vert: gm,
  meshlambert_frag: _m,
  meshmatcap_vert: vm,
  meshmatcap_frag: xm,
  meshnormal_vert: ym,
  meshnormal_frag: bm,
  meshphong_vert: Mm,
  meshphong_frag: Sm,
  meshphysical_vert: wm,
  meshphysical_frag: Tm,
  meshtoon_vert: Em,
  meshtoon_frag: Am,
  points_vert: Cm,
  points_frag: Pm,
  shadow_vert: Lm,
  shadow_frag: Dm,
  sprite_vert: Rm,
  sprite_frag: Im
}, rt = {
  common: {
    diffuse: { value: /* @__PURE__ */ new Ot(16777215) },
    opacity: { value: 1 },
    map: { value: null },
    uvTransform: { value: /* @__PURE__ */ new Ye() },
    uv2Transform: { value: /* @__PURE__ */ new Ye() },
    alphaMap: { value: null },
    alphaTest: { value: 0 }
  },
  specularmap: {
    specularMap: { value: null }
  },
  envmap: {
    envMap: { value: null },
    flipEnvMap: { value: -1 },
    reflectivity: { value: 1 },
    // basic, lambert, phong
    ior: { value: 1.5 },
    // physical
    refractionRatio: { value: 0.98 }
    // basic, lambert, phong
  },
  aomap: {
    aoMap: { value: null },
    aoMapIntensity: { value: 1 }
  },
  lightmap: {
    lightMap: { value: null },
    lightMapIntensity: { value: 1 }
  },
  emissivemap: {
    emissiveMap: { value: null }
  },
  bumpmap: {
    bumpMap: { value: null },
    bumpScale: { value: 1 }
  },
  normalmap: {
    normalMap: { value: null },
    normalScale: { value: /* @__PURE__ */ new vt(1, 1) }
  },
  displacementmap: {
    displacementMap: { value: null },
    displacementScale: { value: 1 },
    displacementBias: { value: 0 }
  },
  roughnessmap: {
    roughnessMap: { value: null }
  },
  metalnessmap: {
    metalnessMap: { value: null }
  },
  gradientmap: {
    gradientMap: { value: null }
  },
  fog: {
    fogDensity: { value: 25e-5 },
    fogNear: { value: 1 },
    fogFar: { value: 2e3 },
    fogColor: { value: /* @__PURE__ */ new Ot(16777215) }
  },
  lights: {
    ambientLightColor: { value: [] },
    lightProbe: { value: [] },
    directionalLights: { value: [], properties: {
      direction: {},
      color: {}
    } },
    directionalLightShadows: { value: [], properties: {
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {}
    } },
    directionalShadowMap: { value: [] },
    directionalShadowMatrix: { value: [] },
    spotLights: { value: [], properties: {
      color: {},
      position: {},
      direction: {},
      distance: {},
      coneCos: {},
      penumbraCos: {},
      decay: {}
    } },
    spotLightShadows: { value: [], properties: {
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {}
    } },
    spotLightMap: { value: [] },
    spotShadowMap: { value: [] },
    spotLightMatrix: { value: [] },
    pointLights: { value: [], properties: {
      color: {},
      position: {},
      decay: {},
      distance: {}
    } },
    pointLightShadows: { value: [], properties: {
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {},
      shadowCameraNear: {},
      shadowCameraFar: {}
    } },
    pointShadowMap: { value: [] },
    pointShadowMatrix: { value: [] },
    hemisphereLights: { value: [], properties: {
      direction: {},
      skyColor: {},
      groundColor: {}
    } },
    // TODO (abelnation): RectAreaLight BRDF data needs to be moved from example to main src
    rectAreaLights: { value: [], properties: {
      color: {},
      position: {},
      width: {},
      height: {}
    } },
    ltc_1: { value: null },
    ltc_2: { value: null }
  },
  points: {
    diffuse: { value: /* @__PURE__ */ new Ot(16777215) },
    opacity: { value: 1 },
    size: { value: 1 },
    scale: { value: 1 },
    map: { value: null },
    alphaMap: { value: null },
    alphaTest: { value: 0 },
    uvTransform: { value: /* @__PURE__ */ new Ye() }
  },
  sprite: {
    diffuse: { value: /* @__PURE__ */ new Ot(16777215) },
    opacity: { value: 1 },
    center: { value: /* @__PURE__ */ new vt(0.5, 0.5) },
    rotation: { value: 0 },
    map: { value: null },
    alphaMap: { value: null },
    alphaTest: { value: 0 },
    uvTransform: { value: /* @__PURE__ */ new Ye() }
  }
}, Re = {
  basic: {
    uniforms: /* @__PURE__ */ Le([
      rt.common,
      rt.specularmap,
      rt.envmap,
      rt.aomap,
      rt.lightmap,
      rt.fog
    ]),
    vertexShader: wt.meshbasic_vert,
    fragmentShader: wt.meshbasic_frag
  },
  lambert: {
    uniforms: /* @__PURE__ */ Le([
      rt.common,
      rt.specularmap,
      rt.envmap,
      rt.aomap,
      rt.lightmap,
      rt.emissivemap,
      rt.bumpmap,
      rt.normalmap,
      rt.displacementmap,
      rt.fog,
      rt.lights,
      {
        emissive: { value: /* @__PURE__ */ new Ot(0) }
      }
    ]),
    vertexShader: wt.meshlambert_vert,
    fragmentShader: wt.meshlambert_frag
  },
  phong: {
    uniforms: /* @__PURE__ */ Le([
      rt.common,
      rt.specularmap,
      rt.envmap,
      rt.aomap,
      rt.lightmap,
      rt.emissivemap,
      rt.bumpmap,
      rt.normalmap,
      rt.displacementmap,
      rt.fog,
      rt.lights,
      {
        emissive: { value: /* @__PURE__ */ new Ot(0) },
        specular: { value: /* @__PURE__ */ new Ot(1118481) },
        shininess: { value: 30 }
      }
    ]),
    vertexShader: wt.meshphong_vert,
    fragmentShader: wt.meshphong_frag
  },
  standard: {
    uniforms: /* @__PURE__ */ Le([
      rt.common,
      rt.envmap,
      rt.aomap,
      rt.lightmap,
      rt.emissivemap,
      rt.bumpmap,
      rt.normalmap,
      rt.displacementmap,
      rt.roughnessmap,
      rt.metalnessmap,
      rt.fog,
      rt.lights,
      {
        emissive: { value: /* @__PURE__ */ new Ot(0) },
        roughness: { value: 1 },
        metalness: { value: 0 },
        envMapIntensity: { value: 1 }
        // temporary
      }
    ]),
    vertexShader: wt.meshphysical_vert,
    fragmentShader: wt.meshphysical_frag
  },
  toon: {
    uniforms: /* @__PURE__ */ Le([
      rt.common,
      rt.aomap,
      rt.lightmap,
      rt.emissivemap,
      rt.bumpmap,
      rt.normalmap,
      rt.displacementmap,
      rt.gradientmap,
      rt.fog,
      rt.lights,
      {
        emissive: { value: /* @__PURE__ */ new Ot(0) }
      }
    ]),
    vertexShader: wt.meshtoon_vert,
    fragmentShader: wt.meshtoon_frag
  },
  matcap: {
    uniforms: /* @__PURE__ */ Le([
      rt.common,
      rt.bumpmap,
      rt.normalmap,
      rt.displacementmap,
      rt.fog,
      {
        matcap: { value: null }
      }
    ]),
    vertexShader: wt.meshmatcap_vert,
    fragmentShader: wt.meshmatcap_frag
  },
  points: {
    uniforms: /* @__PURE__ */ Le([
      rt.points,
      rt.fog
    ]),
    vertexShader: wt.points_vert,
    fragmentShader: wt.points_frag
  },
  dashed: {
    uniforms: /* @__PURE__ */ Le([
      rt.common,
      rt.fog,
      {
        scale: { value: 1 },
        dashSize: { value: 1 },
        totalSize: { value: 2 }
      }
    ]),
    vertexShader: wt.linedashed_vert,
    fragmentShader: wt.linedashed_frag
  },
  depth: {
    uniforms: /* @__PURE__ */ Le([
      rt.common,
      rt.displacementmap
    ]),
    vertexShader: wt.depth_vert,
    fragmentShader: wt.depth_frag
  },
  normal: {
    uniforms: /* @__PURE__ */ Le([
      rt.common,
      rt.bumpmap,
      rt.normalmap,
      rt.displacementmap,
      {
        opacity: { value: 1 }
      }
    ]),
    vertexShader: wt.meshnormal_vert,
    fragmentShader: wt.meshnormal_frag
  },
  sprite: {
    uniforms: /* @__PURE__ */ Le([
      rt.sprite,
      rt.fog
    ]),
    vertexShader: wt.sprite_vert,
    fragmentShader: wt.sprite_frag
  },
  background: {
    uniforms: {
      uvTransform: { value: /* @__PURE__ */ new Ye() },
      t2D: { value: null },
      backgroundIntensity: { value: 1 }
    },
    vertexShader: wt.background_vert,
    fragmentShader: wt.background_frag
  },
  backgroundCube: {
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 },
      backgroundBlurriness: { value: 0 },
      backgroundIntensity: { value: 1 }
    },
    vertexShader: wt.backgroundCube_vert,
    fragmentShader: wt.backgroundCube_frag
  },
  cube: {
    uniforms: {
      tCube: { value: null },
      tFlip: { value: -1 },
      opacity: { value: 1 }
    },
    vertexShader: wt.cube_vert,
    fragmentShader: wt.cube_frag
  },
  equirect: {
    uniforms: {
      tEquirect: { value: null }
    },
    vertexShader: wt.equirect_vert,
    fragmentShader: wt.equirect_frag
  },
  distanceRGBA: {
    uniforms: /* @__PURE__ */ Le([
      rt.common,
      rt.displacementmap,
      {
        referencePosition: { value: /* @__PURE__ */ new R() },
        nearDistance: { value: 1 },
        farDistance: { value: 1e3 }
      }
    ]),
    vertexShader: wt.distanceRGBA_vert,
    fragmentShader: wt.distanceRGBA_frag
  },
  shadow: {
    uniforms: /* @__PURE__ */ Le([
      rt.lights,
      rt.fog,
      {
        color: { value: /* @__PURE__ */ new Ot(0) },
        opacity: { value: 1 }
      }
    ]),
    vertexShader: wt.shadow_vert,
    fragmentShader: wt.shadow_frag
  }
};
Re.physical = {
  uniforms: /* @__PURE__ */ Le([
    Re.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatNormalScale: { value: /* @__PURE__ */ new vt(1, 1) },
      clearcoatNormalMap: { value: null },
      iridescence: { value: 0 },
      iridescenceMap: { value: null },
      iridescenceIOR: { value: 1.3 },
      iridescenceThicknessMinimum: { value: 100 },
      iridescenceThicknessMaximum: { value: 400 },
      iridescenceThicknessMap: { value: null },
      sheen: { value: 0 },
      sheenColor: { value: /* @__PURE__ */ new Ot(0) },
      sheenColorMap: { value: null },
      sheenRoughness: { value: 1 },
      sheenRoughnessMap: { value: null },
      transmission: { value: 0 },
      transmissionMap: { value: null },
      transmissionSamplerSize: { value: /* @__PURE__ */ new vt() },
      transmissionSamplerMap: { value: null },
      thickness: { value: 0 },
      thicknessMap: { value: null },
      attenuationDistance: { value: 0 },
      attenuationColor: { value: /* @__PURE__ */ new Ot(0) },
      specularIntensity: { value: 1 },
      specularIntensityMap: { value: null },
      specularColor: { value: /* @__PURE__ */ new Ot(1, 1, 1) },
      specularColorMap: { value: null }
    }
  ]),
  vertexShader: wt.meshphysical_vert,
  fragmentShader: wt.meshphysical_frag
};
const Cs = { r: 0, b: 0, g: 0 };
function Om(a, t, e, n, i, r, o) {
  const s = new Ot(0);
  let l = r === !0 ? 0 : 1, c, h, u = null, d = 0, m = null;
  function g(p, _) {
    let b = !1, x = _.isScene === !0 ? _.background : null;
    x && x.isTexture && (x = (_.backgroundBlurriness > 0 ? e : t).get(x));
    const y = a.xr, M = y.getSession && y.getSession();
    M && M.environmentBlendMode === "additive" && (x = null), x === null ? f(s, l) : x && x.isColor && (f(x, 1), b = !0), (a.autoClear || b) && a.clear(a.autoClearColor, a.autoClearDepth, a.autoClearStencil), x && (x.isCubeTexture || x.mapping === ta) ? (h === void 0 && (h = new rn(
      new ls(1, 1, 1),
      new Pn({
        name: "BackgroundCubeMaterial",
        uniforms: vr(Re.backgroundCube.uniforms),
        vertexShader: Re.backgroundCube.vertexShader,
        fragmentShader: Re.backgroundCube.fragmentShader,
        side: ln,
        depthTest: !1,
        depthWrite: !1,
        fog: !1
      })
    ), h.geometry.deleteAttribute("normal"), h.geometry.deleteAttribute("uv"), h.onBeforeRender = function(A, P, v) {
      this.matrixWorld.copyPosition(v.matrixWorld);
    }, Object.defineProperty(h.material, "envMap", {
      get: function() {
        return this.uniforms.envMap.value;
      }
    }), i.update(h)), h.material.uniforms.envMap.value = x, h.material.uniforms.flipEnvMap.value = x.isCubeTexture && x.isRenderTargetTexture === !1 ? -1 : 1, h.material.uniforms.backgroundBlurriness.value = _.backgroundBlurriness, h.material.uniforms.backgroundIntensity.value = _.backgroundIntensity, h.material.toneMapped = x.encoding !== Ht, (u !== x || d !== x.version || m !== a.toneMapping) && (h.material.needsUpdate = !0, u = x, d = x.version, m = a.toneMapping), h.layers.enableAll(), p.unshift(h, h.geometry, h.material, 0, 0, null)) : x && x.isTexture && (c === void 0 && (c = new rn(
      new ea(2, 2),
      new Pn({
        name: "BackgroundMaterial",
        uniforms: vr(Re.background.uniforms),
        vertexShader: Re.background.vertexShader,
        fragmentShader: Re.background.fragmentShader,
        side: Pi,
        depthTest: !1,
        depthWrite: !1,
        fog: !1
      })
    ), c.geometry.deleteAttribute("normal"), Object.defineProperty(c.material, "map", {
      get: function() {
        return this.uniforms.t2D.value;
      }
    }), i.update(c)), c.material.uniforms.t2D.value = x, c.material.uniforms.backgroundIntensity.value = _.backgroundIntensity, c.material.toneMapped = x.encoding !== Ht, x.matrixAutoUpdate === !0 && x.updateMatrix(), c.material.uniforms.uvTransform.value.copy(x.matrix), (u !== x || d !== x.version || m !== a.toneMapping) && (c.material.needsUpdate = !0, u = x, d = x.version, m = a.toneMapping), c.layers.enableAll(), p.unshift(c, c.geometry, c.material, 0, 0, null));
  }
  function f(p, _) {
    p.getRGB(Cs, ch(a)), n.buffers.color.setClear(Cs.r, Cs.g, Cs.b, _, o);
  }
  return {
    getClearColor: function() {
      return s;
    },
    setClearColor: function(p, _ = 1) {
      s.set(p), l = _, f(s, l);
    },
    getClearAlpha: function() {
      return l;
    },
    setClearAlpha: function(p) {
      l = p, f(s, l);
    },
    render: g
  };
}
function zm(a, t, e, n) {
  const i = a.getParameter(34921), r = n.isWebGL2 ? null : t.get("OES_vertex_array_object"), o = n.isWebGL2 || r !== null, s = {}, l = p(null);
  let c = l, h = !1;
  function u(I, k, $, Z, G) {
    let Q = !1;
    if (o) {
      const K = f(Z, $, k);
      c !== K && (c = K, m(c.object)), Q = _(I, Z, $, G), Q && b(I, Z, $, G);
    } else {
      const K = k.wireframe === !0;
      (c.geometry !== Z.id || c.program !== $.id || c.wireframe !== K) && (c.geometry = Z.id, c.program = $.id, c.wireframe = K, Q = !0);
    }
    G !== null && e.update(G, 34963), (Q || h) && (h = !1, v(I, k, $, Z), G !== null && a.bindBuffer(34963, e.get(G).buffer));
  }
  function d() {
    return n.isWebGL2 ? a.createVertexArray() : r.createVertexArrayOES();
  }
  function m(I) {
    return n.isWebGL2 ? a.bindVertexArray(I) : r.bindVertexArrayOES(I);
  }
  function g(I) {
    return n.isWebGL2 ? a.deleteVertexArray(I) : r.deleteVertexArrayOES(I);
  }
  function f(I, k, $) {
    const Z = $.wireframe === !0;
    let G = s[I.id];
    G === void 0 && (G = {}, s[I.id] = G);
    let Q = G[k.id];
    Q === void 0 && (Q = {}, G[k.id] = Q);
    let K = Q[Z];
    return K === void 0 && (K = p(d()), Q[Z] = K), K;
  }
  function p(I) {
    const k = [], $ = [], Z = [];
    for (let G = 0; G < i; G++)
      k[G] = 0, $[G] = 0, Z[G] = 0;
    return {
      // for backward compatibility on non-VAO support browser
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: k,
      enabledAttributes: $,
      attributeDivisors: Z,
      object: I,
      attributes: {},
      index: null
    };
  }
  function _(I, k, $, Z) {
    const G = c.attributes, Q = k.attributes;
    let K = 0;
    const V = $.getAttributes();
    for (const B in V)
      if (V[B].location >= 0) {
        const J = G[B];
        let st = Q[B];
        if (st === void 0 && (B === "instanceMatrix" && I.instanceMatrix && (st = I.instanceMatrix), B === "instanceColor" && I.instanceColor && (st = I.instanceColor)), J === void 0 || J.attribute !== st || st && J.data !== st.data)
          return !0;
        K++;
      }
    return c.attributesNum !== K || c.index !== Z;
  }
  function b(I, k, $, Z) {
    const G = {}, Q = k.attributes;
    let K = 0;
    const V = $.getAttributes();
    for (const B in V)
      if (V[B].location >= 0) {
        let J = Q[B];
        J === void 0 && (B === "instanceMatrix" && I.instanceMatrix && (J = I.instanceMatrix), B === "instanceColor" && I.instanceColor && (J = I.instanceColor));
        const st = {};
        st.attribute = J, J && J.data && (st.data = J.data), G[B] = st, K++;
      }
    c.attributes = G, c.attributesNum = K, c.index = Z;
  }
  function x() {
    const I = c.newAttributes;
    for (let k = 0, $ = I.length; k < $; k++)
      I[k] = 0;
  }
  function y(I) {
    M(I, 0);
  }
  function M(I, k) {
    const $ = c.newAttributes, Z = c.enabledAttributes, G = c.attributeDivisors;
    $[I] = 1, Z[I] === 0 && (a.enableVertexAttribArray(I), Z[I] = 1), G[I] !== k && ((n.isWebGL2 ? a : t.get("ANGLE_instanced_arrays"))[n.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](I, k), G[I] = k);
  }
  function A() {
    const I = c.newAttributes, k = c.enabledAttributes;
    for (let $ = 0, Z = k.length; $ < Z; $++)
      k[$] !== I[$] && (a.disableVertexAttribArray($), k[$] = 0);
  }
  function P(I, k, $, Z, G, Q) {
    n.isWebGL2 === !0 && ($ === 5124 || $ === 5125) ? a.vertexAttribIPointer(I, k, $, G, Q) : a.vertexAttribPointer(I, k, $, Z, G, Q);
  }
  function v(I, k, $, Z) {
    if (n.isWebGL2 === !1 && (I.isInstancedMesh || Z.isInstancedBufferGeometry) && t.get("ANGLE_instanced_arrays") === null)
      return;
    x();
    const G = Z.attributes, Q = $.getAttributes(), K = k.defaultAttributeValues;
    for (const V in Q) {
      const B = Q[V];
      if (B.location >= 0) {
        let at = G[V];
        if (at === void 0 && (V === "instanceMatrix" && I.instanceMatrix && (at = I.instanceMatrix), V === "instanceColor" && I.instanceColor && (at = I.instanceColor)), at !== void 0) {
          const J = at.normalized, st = at.itemSize, q = e.get(at);
          if (q === void 0)
            continue;
          const At = q.buffer, ft = q.type, xt = q.bytesPerElement;
          if (at.isInterleavedBufferAttribute) {
            const dt = at.data, Ft = dt.stride, St = at.offset;
            if (dt.isInstancedInterleavedBuffer) {
              for (let yt = 0; yt < B.locationSize; yt++)
                M(B.location + yt, dt.meshPerAttribute);
              I.isInstancedMesh !== !0 && Z._maxInstanceCount === void 0 && (Z._maxInstanceCount = dt.meshPerAttribute * dt.count);
            } else
              for (let yt = 0; yt < B.locationSize; yt++)
                y(B.location + yt);
            a.bindBuffer(34962, At);
            for (let yt = 0; yt < B.locationSize; yt++)
              P(
                B.location + yt,
                st / B.locationSize,
                ft,
                J,
                Ft * xt,
                (St + st / B.locationSize * yt) * xt
              );
          } else {
            if (at.isInstancedBufferAttribute) {
              for (let dt = 0; dt < B.locationSize; dt++)
                M(B.location + dt, at.meshPerAttribute);
              I.isInstancedMesh !== !0 && Z._maxInstanceCount === void 0 && (Z._maxInstanceCount = at.meshPerAttribute * at.count);
            } else
              for (let dt = 0; dt < B.locationSize; dt++)
                y(B.location + dt);
            a.bindBuffer(34962, At);
            for (let dt = 0; dt < B.locationSize; dt++)
              P(
                B.location + dt,
                st / B.locationSize,
                ft,
                J,
                st * xt,
                st / B.locationSize * dt * xt
              );
          }
        } else if (K !== void 0) {
          const J = K[V];
          if (J !== void 0)
            switch (J.length) {
              case 2:
                a.vertexAttrib2fv(B.location, J);
                break;
              case 3:
                a.vertexAttrib3fv(B.location, J);
                break;
              case 4:
                a.vertexAttrib4fv(B.location, J);
                break;
              default:
                a.vertexAttrib1fv(B.location, J);
            }
        }
      }
    }
    A();
  }
  function w() {
    j();
    for (const I in s) {
      const k = s[I];
      for (const $ in k) {
        const Z = k[$];
        for (const G in Z)
          g(Z[G].object), delete Z[G];
        delete k[$];
      }
      delete s[I];
    }
  }
  function L(I) {
    if (s[I.id] === void 0)
      return;
    const k = s[I.id];
    for (const $ in k) {
      const Z = k[$];
      for (const G in Z)
        g(Z[G].object), delete Z[G];
      delete k[$];
    }
    delete s[I.id];
  }
  function U(I) {
    for (const k in s) {
      const $ = s[k];
      if ($[I.id] === void 0)
        continue;
      const Z = $[I.id];
      for (const G in Z)
        g(Z[G].object), delete Z[G];
      delete $[I.id];
    }
  }
  function j() {
    O(), h = !0, c !== l && (c = l, m(c.object));
  }
  function O() {
    l.geometry = null, l.program = null, l.wireframe = !1;
  }
  return {
    setup: u,
    reset: j,
    resetDefaultState: O,
    dispose: w,
    releaseStatesOfGeometry: L,
    releaseStatesOfProgram: U,
    initAttributes: x,
    enableAttribute: y,
    disableUnusedAttributes: A
  };
}
function Fm(a, t, e, n) {
  const i = n.isWebGL2;
  let r;
  function o(c) {
    r = c;
  }
  function s(c, h) {
    a.drawArrays(r, c, h), e.update(h, r, 1);
  }
  function l(c, h, u) {
    if (u === 0)
      return;
    let d, m;
    if (i)
      d = a, m = "drawArraysInstanced";
    else if (d = t.get("ANGLE_instanced_arrays"), m = "drawArraysInstancedANGLE", d === null) {
      console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
      return;
    }
    d[m](r, c, h, u), e.update(h, r, u);
  }
  this.setMode = o, this.render = s, this.renderInstances = l;
}
function Nm(a, t, e) {
  let n;
  function i() {
    if (n !== void 0)
      return n;
    if (t.has("EXT_texture_filter_anisotropic") === !0) {
      const P = t.get("EXT_texture_filter_anisotropic");
      n = a.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else
      n = 0;
    return n;
  }
  function r(P) {
    if (P === "highp") {
      if (a.getShaderPrecisionFormat(35633, 36338).precision > 0 && a.getShaderPrecisionFormat(35632, 36338).precision > 0)
        return "highp";
      P = "mediump";
    }
    return P === "mediump" && a.getShaderPrecisionFormat(35633, 36337).precision > 0 && a.getShaderPrecisionFormat(35632, 36337).precision > 0 ? "mediump" : "lowp";
  }
  const o = typeof WebGL2RenderingContext < "u" && a instanceof WebGL2RenderingContext || typeof WebGL2ComputeRenderingContext < "u" && a instanceof WebGL2ComputeRenderingContext;
  let s = e.precision !== void 0 ? e.precision : "highp";
  const l = r(s);
  l !== s && (console.warn("THREE.WebGLRenderer:", s, "not supported, using", l, "instead."), s = l);
  const c = o || t.has("WEBGL_draw_buffers"), h = e.logarithmicDepthBuffer === !0, u = a.getParameter(34930), d = a.getParameter(35660), m = a.getParameter(3379), g = a.getParameter(34076), f = a.getParameter(34921), p = a.getParameter(36347), _ = a.getParameter(36348), b = a.getParameter(36349), x = d > 0, y = o || t.has("OES_texture_float"), M = x && y, A = o ? a.getParameter(36183) : 0;
  return {
    isWebGL2: o,
    drawBuffers: c,
    getMaxAnisotropy: i,
    getMaxPrecision: r,
    precision: s,
    logarithmicDepthBuffer: h,
    maxTextures: u,
    maxVertexTextures: d,
    maxTextureSize: m,
    maxCubemapSize: g,
    maxAttributes: f,
    maxVertexUniforms: p,
    maxVaryings: _,
    maxFragmentUniforms: b,
    vertexTextures: x,
    floatFragmentTextures: y,
    floatVertexTextures: M,
    maxSamples: A
  };
}
function Um(a) {
  const t = this;
  let e = null, n = 0, i = !1, r = !1;
  const o = new gi(), s = new Ye(), l = { value: null, needsUpdate: !1 };
  this.uniform = l, this.numPlanes = 0, this.numIntersection = 0, this.init = function(u, d, m) {
    const g = u.length !== 0 || d || // enable state of previous frame - the clipping code has to
    // run another frame in order to reset the state:
    n !== 0 || i;
    return i = d, e = h(u, m, 0), n = u.length, g;
  }, this.beginShadows = function() {
    r = !0, h(null);
  }, this.endShadows = function() {
    r = !1, c();
  }, this.setState = function(u, d, m) {
    const g = u.clippingPlanes, f = u.clipIntersection, p = u.clipShadows, _ = a.get(u);
    if (!i || g === null || g.length === 0 || r && !p)
      r ? h(null) : c();
    else {
      const b = r ? 0 : n, x = b * 4;
      let y = _.clippingState || null;
      l.value = y, y = h(g, d, x, m);
      for (let M = 0; M !== x; ++M)
        y[M] = e[M];
      _.clippingState = y, this.numIntersection = f ? this.numPlanes : 0, this.numPlanes += b;
    }
  };
  function c() {
    l.value !== e && (l.value = e, l.needsUpdate = n > 0), t.numPlanes = n, t.numIntersection = 0;
  }
  function h(u, d, m, g) {
    const f = u !== null ? u.length : 0;
    let p = null;
    if (f !== 0) {
      if (p = l.value, g !== !0 || p === null) {
        const _ = m + f * 4, b = d.matrixWorldInverse;
        s.getNormalMatrix(b), (p === null || p.length < _) && (p = new Float32Array(_));
        for (let x = 0, y = m; x !== f; ++x, y += 4)
          o.copy(u[x]).applyMatrix4(b, s), o.normal.toArray(p, y), p[y + 3] = o.constant;
      }
      l.value = p, l.needsUpdate = !0;
    }
    return t.numPlanes = f, t.numIntersection = 0, p;
  }
}
function km(a) {
  let t = /* @__PURE__ */ new WeakMap();
  function e(o, s) {
    return s === no ? o.mapping = mr : s === io && (o.mapping = gr), o;
  }
  function n(o) {
    if (o && o.isTexture && o.isRenderTargetTexture === !1) {
      const s = o.mapping;
      if (s === no || s === io)
        if (t.has(o)) {
          const l = t.get(o).texture;
          return e(l, o.mapping);
        } else {
          const l = o.image;
          if (l && l.height > 0) {
            const c = new Kd(l.height / 2);
            return c.fromEquirectangularTexture(a, o), t.set(o, c), o.addEventListener("dispose", i), e(c.texture, o.mapping);
          } else
            return null;
        }
    }
    return o;
  }
  function i(o) {
    const s = o.target;
    s.removeEventListener("dispose", i);
    const l = t.get(s);
    l !== void 0 && (t.delete(s), l.dispose());
  }
  function r() {
    t = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: n,
    dispose: r
  };
}
class Bm extends hh {
  constructor(t = -1, e = 1, n = 1, i = -1, r = 0.1, o = 2e3) {
    super(), this.isOrthographicCamera = !0, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = t, this.right = e, this.top = n, this.bottom = i, this.near = r, this.far = o, this.updateProjectionMatrix();
  }
  copy(t, e) {
    return super.copy(t, e), this.left = t.left, this.right = t.right, this.top = t.top, this.bottom = t.bottom, this.near = t.near, this.far = t.far, this.zoom = t.zoom, this.view = t.view === null ? null : Object.assign({}, t.view), this;
  }
  setViewOffset(t, e, n, i, r, o) {
    this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = t, this.view.fullHeight = e, this.view.offsetX = n, this.view.offsetY = i, this.view.width = r, this.view.height = o, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const t = (this.right - this.left) / (2 * this.zoom), e = (this.top - this.bottom) / (2 * this.zoom), n = (this.right + this.left) / 2, i = (this.top + this.bottom) / 2;
    let r = n - t, o = n + t, s = i + e, l = i - e;
    if (this.view !== null && this.view.enabled) {
      const c = (this.right - this.left) / this.view.fullWidth / this.zoom, h = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      r += c * this.view.offsetX, o = r + c * this.view.width, s -= h * this.view.offsetY, l = s - h * this.view.height;
    }
    this.projectionMatrix.makeOrthographic(r, o, s, l, this.near, this.far), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return e.object.zoom = this.zoom, e.object.left = this.left, e.object.right = this.right, e.object.top = this.top, e.object.bottom = this.bottom, e.object.near = this.near, e.object.far = this.far, this.view !== null && (e.object.view = Object.assign({}, this.view)), e;
  }
}
const or = 4, Wl = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582], xi = 20, Fa = /* @__PURE__ */ new Bm(), Xl = /* @__PURE__ */ new Ot();
let Na = null;
const _i = (1 + Math.sqrt(5)) / 2, Qi = 1 / _i, ql = [
  /* @__PURE__ */ new R(1, 1, 1),
  /* @__PURE__ */ new R(-1, 1, 1),
  /* @__PURE__ */ new R(1, 1, -1),
  /* @__PURE__ */ new R(-1, 1, -1),
  /* @__PURE__ */ new R(0, _i, Qi),
  /* @__PURE__ */ new R(0, _i, -Qi),
  /* @__PURE__ */ new R(Qi, 0, _i),
  /* @__PURE__ */ new R(-Qi, 0, _i),
  /* @__PURE__ */ new R(_i, Qi, 0),
  /* @__PURE__ */ new R(-_i, Qi, 0)
];
class Yl {
  constructor(t) {
    this._renderer = t, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._lodPlanes = [], this._sizeLods = [], this._sigmas = [], this._blurMaterial = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._compileMaterial(this._blurMaterial);
  }
  /**
   * Generates a PMREM from a supplied Scene, which can be faster than using an
   * image if networking bandwidth is low. Optional sigma specifies a blur radius
   * in radians to be applied to the scene before PMREM generation. Optional near
   * and far planes ensure the scene is rendered in its entirety (the cubeCamera
   * is placed at the origin).
   */
  fromScene(t, e = 0, n = 0.1, i = 100) {
    Na = this._renderer.getRenderTarget(), this._setSize(256);
    const r = this._allocateTargets();
    return r.depthBuffer = !0, this._sceneToCubeUV(t, n, i, r), e > 0 && this._blur(r, 0, 0, e), this._applyPMREM(r), this._cleanup(r), r;
  }
  /**
   * Generates a PMREM from an equirectangular texture, which can be either LDR
   * or HDR. The ideal input image size is 1k (1024 x 512),
   * as this matches best with the 256 x 256 cubemap output.
   */
  fromEquirectangular(t, e = null) {
    return this._fromTexture(t, e);
  }
  /**
   * Generates a PMREM from an cubemap texture, which can be either LDR
   * or HDR. The ideal input cube size is 256 x 256,
   * as this matches best with the 256 x 256 cubemap output.
   */
  fromCubemap(t, e = null) {
    return this._fromTexture(t, e);
  }
  /**
   * Pre-compiles the cubemap shader. You can get faster start-up by invoking this method during
   * your texture's network fetch for increased concurrency.
   */
  compileCubemapShader() {
    this._cubemapMaterial === null && (this._cubemapMaterial = Zl(), this._compileMaterial(this._cubemapMaterial));
  }
  /**
   * Pre-compiles the equirectangular shader. You can get faster start-up by invoking this method during
   * your texture's network fetch for increased concurrency.
   */
  compileEquirectangularShader() {
    this._equirectMaterial === null && (this._equirectMaterial = jl(), this._compileMaterial(this._equirectMaterial));
  }
  /**
   * Disposes of the PMREMGenerator's internal memory. Note that PMREMGenerator is a static class,
   * so you should not need more than one PMREMGenerator object. If you do, calling dispose() on
   * one of them will cause any others to also become unusable.
   */
  dispose() {
    this._dispose(), this._cubemapMaterial !== null && this._cubemapMaterial.dispose(), this._equirectMaterial !== null && this._equirectMaterial.dispose();
  }
  // private interface
  _setSize(t) {
    this._lodMax = Math.floor(Math.log2(t)), this._cubeSize = Math.pow(2, this._lodMax);
  }
  _dispose() {
    this._blurMaterial !== null && this._blurMaterial.dispose(), this._pingPongRenderTarget !== null && this._pingPongRenderTarget.dispose();
    for (let t = 0; t < this._lodPlanes.length; t++)
      this._lodPlanes[t].dispose();
  }
  _cleanup(t) {
    this._renderer.setRenderTarget(Na), t.scissorTest = !1, Ps(t, 0, 0, t.width, t.height);
  }
  _fromTexture(t, e) {
    t.mapping === mr || t.mapping === gr ? this._setSize(t.image.length === 0 ? 16 : t.image[0].width || t.image[0].image.width) : this._setSize(t.image.width / 4), Na = this._renderer.getRenderTarget();
    const n = e || this._allocateTargets();
    return this._textureToCubeUV(t, n), this._applyPMREM(n), this._cleanup(n), n;
  }
  _allocateTargets() {
    const t = 3 * Math.max(this._cubeSize, 112), e = 4 * this._cubeSize, n = {
      magFilter: Xe,
      minFilter: Xe,
      generateMipmaps: !1,
      type: Kr,
      format: mn,
      encoding: Di,
      depthBuffer: !1
    }, i = $l(t, e, n);
    if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== t) {
      this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = $l(t, e, n);
      const { _lodMax: r } = this;
      ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = Gm(r)), this._blurMaterial = Vm(r, t, e);
    }
    return i;
  }
  _compileMaterial(t) {
    const e = new rn(this._lodPlanes[0], t);
    this._renderer.compile(e, Fa);
  }
  _sceneToCubeUV(t, e, n, i) {
    const s = new nn(90, 1, e, n), l = [1, -1, 1, 1, 1, 1], c = [1, 1, 1, -1, -1, -1], h = this._renderer, u = h.autoClear, d = h.toneMapping;
    h.getClearColor(Xl), h.toneMapping = gn, h.autoClear = !1;
    const m = new ah({
      name: "PMREM.Background",
      side: ln,
      depthWrite: !1,
      depthTest: !1
    }), g = new rn(new ls(), m);
    let f = !1;
    const p = t.background;
    p ? p.isColor && (m.color.copy(p), t.background = null, f = !0) : (m.color.copy(Xl), f = !0);
    for (let _ = 0; _ < 6; _++) {
      const b = _ % 3;
      b === 0 ? (s.up.set(0, l[_], 0), s.lookAt(c[_], 0, 0)) : b === 1 ? (s.up.set(0, 0, l[_]), s.lookAt(0, c[_], 0)) : (s.up.set(0, l[_], 0), s.lookAt(0, 0, c[_]));
      const x = this._cubeSize;
      Ps(i, b * x, _ > 2 ? x : 0, x, x), h.setRenderTarget(i), f && h.render(g, s), h.render(t, s);
    }
    g.geometry.dispose(), g.material.dispose(), h.toneMapping = d, h.autoClear = u, t.background = p;
  }
  _textureToCubeUV(t, e) {
    const n = this._renderer, i = t.mapping === mr || t.mapping === gr;
    i ? (this._cubemapMaterial === null && (this._cubemapMaterial = Zl()), this._cubemapMaterial.uniforms.flipEnvMap.value = t.isRenderTargetTexture === !1 ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = jl());
    const r = i ? this._cubemapMaterial : this._equirectMaterial, o = new rn(this._lodPlanes[0], r), s = r.uniforms;
    s.envMap.value = t;
    const l = this._cubeSize;
    Ps(e, 0, 0, 3 * l, 2 * l), n.setRenderTarget(e), n.render(o, Fa);
  }
  _applyPMREM(t) {
    const e = this._renderer, n = e.autoClear;
    e.autoClear = !1;
    for (let i = 1; i < this._lodPlanes.length; i++) {
      const r = Math.sqrt(this._sigmas[i] * this._sigmas[i] - this._sigmas[i - 1] * this._sigmas[i - 1]), o = ql[(i - 1) % ql.length];
      this._blur(t, i - 1, i, r, o);
    }
    e.autoClear = n;
  }
  /**
   * This is a two-pass Gaussian blur for a cubemap. Normally this is done
   * vertically and horizontally, but this breaks down on a cube. Here we apply
   * the blur latitudinally (around the poles), and then longitudinally (towards
   * the poles) to approximate the orthogonally-separable blur. It is least
   * accurate at the poles, but still does a decent job.
   */
  _blur(t, e, n, i, r) {
    const o = this._pingPongRenderTarget;
    this._halfBlur(
      t,
      o,
      e,
      n,
      i,
      "latitudinal",
      r
    ), this._halfBlur(
      o,
      t,
      n,
      n,
      i,
      "longitudinal",
      r
    );
  }
  _halfBlur(t, e, n, i, r, o, s) {
    const l = this._renderer, c = this._blurMaterial;
    o !== "latitudinal" && o !== "longitudinal" && console.error(
      "blur direction must be either latitudinal or longitudinal!"
    );
    const h = 3, u = new rn(this._lodPlanes[i], c), d = c.uniforms, m = this._sizeLods[n] - 1, g = isFinite(r) ? Math.PI / (2 * m) : 2 * Math.PI / (2 * xi - 1), f = r / g, p = isFinite(r) ? 1 + Math.floor(h * f) : xi;
    p > xi && console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${xi}`);
    const _ = [];
    let b = 0;
    for (let P = 0; P < xi; ++P) {
      const v = P / f, w = Math.exp(-v * v / 2);
      _.push(w), P === 0 ? b += w : P < p && (b += 2 * w);
    }
    for (let P = 0; P < _.length; P++)
      _[P] = _[P] / b;
    d.envMap.value = t.texture, d.samples.value = p, d.weights.value = _, d.latitudinal.value = o === "latitudinal", s && (d.poleAxis.value = s);
    const { _lodMax: x } = this;
    d.dTheta.value = g, d.mipInt.value = x - n;
    const y = this._sizeLods[i], M = 3 * y * (i > x - or ? i - x + or : 0), A = 4 * (this._cubeSize - y);
    Ps(e, M, A, 3 * y, 2 * y), l.setRenderTarget(e), l.render(u, Fa);
  }
}
function Gm(a) {
  const t = [], e = [], n = [];
  let i = a;
  const r = a - or + 1 + Wl.length;
  for (let o = 0; o < r; o++) {
    const s = Math.pow(2, i);
    e.push(s);
    let l = 1 / s;
    o > a - or ? l = Wl[o - a + or - 1] : o === 0 && (l = 0), n.push(l);
    const c = 1 / (s - 2), h = -c, u = 1 + c, d = [h, h, u, h, u, u, h, h, u, u, h, u], m = 6, g = 6, f = 3, p = 2, _ = 1, b = new Float32Array(f * g * m), x = new Float32Array(p * g * m), y = new Float32Array(_ * g * m);
    for (let A = 0; A < m; A++) {
      const P = A % 3 * 2 / 3 - 1, v = A > 2 ? 0 : -1, w = [
        P,
        v,
        0,
        P + 2 / 3,
        v,
        0,
        P + 2 / 3,
        v + 1,
        0,
        P,
        v,
        0,
        P + 2 / 3,
        v + 1,
        0,
        P,
        v + 1,
        0
      ];
      b.set(w, f * g * A), x.set(d, p * g * A);
      const L = [A, A, A, A, A, A];
      y.set(L, _ * g * A);
    }
    const M = new xn();
    M.setAttribute("position", new _n(b, f)), M.setAttribute("uv", new _n(x, p)), M.setAttribute("faceIndex", new _n(y, _)), t.push(M), i > or && i--;
  }
  return { lodPlanes: t, sizeLods: e, sigmas: n };
}
function $l(a, t, e) {
  const n = new Ri(a, t, e);
  return n.texture.mapping = ta, n.texture.name = "PMREM.cubeUv", n.scissorTest = !0, n;
}
function Ps(a, t, e, n, i) {
  a.viewport.set(t, e, n, i), a.scissor.set(t, e, n, i);
}
function Vm(a, t, e) {
  const n = new Float32Array(xi), i = new R(0, 1, 0);
  return new Pn({
    name: "SphericalGaussianBlur",
    defines: {
      n: xi,
      CUBEUV_TEXEL_WIDTH: 1 / t,
      CUBEUV_TEXEL_HEIGHT: 1 / e,
      CUBEUV_MAX_MIP: `${a}.0`
    },
    uniforms: {
      envMap: { value: null },
      samples: { value: 1 },
      weights: { value: n },
      latitudinal: { value: !1 },
      dTheta: { value: 0 },
      mipInt: { value: 0 },
      poleAxis: { value: i }
    },
    vertexShader: Oo(),
    fragmentShader: (
      /* glsl */
      `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`
    ),
    blending: Jn,
    depthTest: !1,
    depthWrite: !1
  });
}
function jl() {
  return new Pn({
    name: "EquirectangularToCubeUV",
    uniforms: {
      envMap: { value: null }
    },
    vertexShader: Oo(),
    fragmentShader: (
      /* glsl */
      `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`
    ),
    blending: Jn,
    depthTest: !1,
    depthWrite: !1
  });
}
function Zl() {
  return new Pn({
    name: "CubemapToCubeUV",
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 }
    },
    vertexShader: Oo(),
    fragmentShader: (
      /* glsl */
      `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`
    ),
    blending: Jn,
    depthTest: !1,
    depthWrite: !1
  });
}
function Oo() {
  return (
    /* glsl */
    `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`
  );
}
function Hm(a) {
  let t = /* @__PURE__ */ new WeakMap(), e = null;
  function n(s) {
    if (s && s.isTexture) {
      const l = s.mapping, c = l === no || l === io, h = l === mr || l === gr;
      if (c || h)
        if (s.isRenderTargetTexture && s.needsPMREMUpdate === !0) {
          s.needsPMREMUpdate = !1;
          let u = t.get(s);
          return e === null && (e = new Yl(a)), u = c ? e.fromEquirectangular(s, u) : e.fromCubemap(s, u), t.set(s, u), u.texture;
        } else {
          if (t.has(s))
            return t.get(s).texture;
          {
            const u = s.image;
            if (c && u && u.height > 0 || h && u && i(u)) {
              e === null && (e = new Yl(a));
              const d = c ? e.fromEquirectangular(s) : e.fromCubemap(s);
              return t.set(s, d), s.addEventListener("dispose", r), d.texture;
            } else
              return null;
          }
        }
    }
    return s;
  }
  function i(s) {
    let l = 0;
    const c = 6;
    for (let h = 0; h < c; h++)
      s[h] !== void 0 && l++;
    return l === c;
  }
  function r(s) {
    const l = s.target;
    l.removeEventListener("dispose", r);
    const c = t.get(l);
    c !== void 0 && (t.delete(l), c.dispose());
  }
  function o() {
    t = /* @__PURE__ */ new WeakMap(), e !== null && (e.dispose(), e = null);
  }
  return {
    get: n,
    dispose: o
  };
}
function Wm(a) {
  const t = {};
  function e(n) {
    if (t[n] !== void 0)
      return t[n];
    let i;
    switch (n) {
      case "WEBGL_depth_texture":
        i = a.getExtension("WEBGL_depth_texture") || a.getExtension("MOZ_WEBGL_depth_texture") || a.getExtension("WEBKIT_WEBGL_depth_texture");
        break;
      case "EXT_texture_filter_anisotropic":
        i = a.getExtension("EXT_texture_filter_anisotropic") || a.getExtension("MOZ_EXT_texture_filter_anisotropic") || a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
        break;
      case "WEBGL_compressed_texture_s3tc":
        i = a.getExtension("WEBGL_compressed_texture_s3tc") || a.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
        break;
      case "WEBGL_compressed_texture_pvrtc":
        i = a.getExtension("WEBGL_compressed_texture_pvrtc") || a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
        break;
      default:
        i = a.getExtension(n);
    }
    return t[n] = i, i;
  }
  return {
    has: function(n) {
      return e(n) !== null;
    },
    init: function(n) {
      n.isWebGL2 ? e("EXT_color_buffer_float") : (e("WEBGL_depth_texture"), e("OES_texture_float"), e("OES_texture_half_float"), e("OES_texture_half_float_linear"), e("OES_standard_derivatives"), e("OES_element_index_uint"), e("OES_vertex_array_object"), e("ANGLE_instanced_arrays")), e("OES_texture_float_linear"), e("EXT_color_buffer_half_float"), e("WEBGL_multisampled_render_to_texture");
    },
    get: function(n) {
      const i = e(n);
      return i === null && console.warn("THREE.WebGLRenderer: " + n + " extension not supported."), i;
    }
  };
}
function Xm(a, t, e, n) {
  const i = {}, r = /* @__PURE__ */ new WeakMap();
  function o(u) {
    const d = u.target;
    d.index !== null && t.remove(d.index);
    for (const g in d.attributes)
      t.remove(d.attributes[g]);
    d.removeEventListener("dispose", o), delete i[d.id];
    const m = r.get(d);
    m && (t.remove(m), r.delete(d)), n.releaseStatesOfGeometry(d), d.isInstancedBufferGeometry === !0 && delete d._maxInstanceCount, e.memory.geometries--;
  }
  function s(u, d) {
    return i[d.id] === !0 || (d.addEventListener("dispose", o), i[d.id] = !0, e.memory.geometries++), d;
  }
  function l(u) {
    const d = u.attributes;
    for (const g in d)
      t.update(d[g], 34962);
    const m = u.morphAttributes;
    for (const g in m) {
      const f = m[g];
      for (let p = 0, _ = f.length; p < _; p++)
        t.update(f[p], 34962);
    }
  }
  function c(u) {
    const d = [], m = u.index, g = u.attributes.position;
    let f = 0;
    if (m !== null) {
      const b = m.array;
      f = m.version;
      for (let x = 0, y = b.length; x < y; x += 3) {
        const M = b[x + 0], A = b[x + 1], P = b[x + 2];
        d.push(M, A, A, P, P, M);
      }
    } else {
      const b = g.array;
      f = g.version;
      for (let x = 0, y = b.length / 3 - 1; x < y; x += 3) {
        const M = x + 0, A = x + 1, P = x + 2;
        d.push(M, A, A, P, P, M);
      }
    }
    const p = new (th(d) ? lh : oh)(d, 1);
    p.version = f;
    const _ = r.get(u);
    _ && t.remove(_), r.set(u, p);
  }
  function h(u) {
    const d = r.get(u);
    if (d) {
      const m = u.index;
      m !== null && d.version < m.version && c(u);
    } else
      c(u);
    return r.get(u);
  }
  return {
    get: s,
    update: l,
    getWireframeAttribute: h
  };
}
function qm(a, t, e, n) {
  const i = n.isWebGL2;
  let r;
  function o(d) {
    r = d;
  }
  let s, l;
  function c(d) {
    s = d.type, l = d.bytesPerElement;
  }
  function h(d, m) {
    a.drawElements(r, m, s, d * l), e.update(m, r, 1);
  }
  function u(d, m, g) {
    if (g === 0)
      return;
    let f, p;
    if (i)
      f = a, p = "drawElementsInstanced";
    else if (f = t.get("ANGLE_instanced_arrays"), p = "drawElementsInstancedANGLE", f === null) {
      console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
      return;
    }
    f[p](r, m, s, d * l, g), e.update(m, r, g);
  }
  this.setMode = o, this.setIndex = c, this.render = h, this.renderInstances = u;
}
function Ym(a) {
  const t = {
    geometries: 0,
    textures: 0
  }, e = {
    frame: 0,
    calls: 0,
    triangles: 0,
    points: 0,
    lines: 0
  };
  function n(r, o, s) {
    switch (e.calls++, o) {
      case 4:
        e.triangles += s * (r / 3);
        break;
      case 1:
        e.lines += s * (r / 2);
        break;
      case 3:
        e.lines += s * (r - 1);
        break;
      case 2:
        e.lines += s * r;
        break;
      case 0:
        e.points += s * r;
        break;
      default:
        console.error("THREE.WebGLInfo: Unknown draw mode:", o);
        break;
    }
  }
  function i() {
    e.frame++, e.calls = 0, e.triangles = 0, e.points = 0, e.lines = 0;
  }
  return {
    memory: t,
    render: e,
    programs: null,
    autoReset: !0,
    reset: i,
    update: n
  };
}
function $m(a, t) {
  return a[0] - t[0];
}
function jm(a, t) {
  return Math.abs(t[1]) - Math.abs(a[1]);
}
function Zm(a, t, e) {
  const n = {}, i = new Float32Array(8), r = /* @__PURE__ */ new WeakMap(), o = new Zt(), s = [];
  for (let c = 0; c < 8; c++)
    s[c] = [c, 0];
  function l(c, h, u, d) {
    const m = c.morphTargetInfluences;
    if (t.isWebGL2 === !0) {
      const g = h.morphAttributes.position || h.morphAttributes.normal || h.morphAttributes.color, f = g !== void 0 ? g.length : 0;
      let p = r.get(h);
      if (p === void 0 || p.count !== f) {
        let k = function() {
          O.dispose(), r.delete(h), h.removeEventListener("dispose", k);
        };
        p !== void 0 && p.texture.dispose();
        const x = h.morphAttributes.position !== void 0, y = h.morphAttributes.normal !== void 0, M = h.morphAttributes.color !== void 0, A = h.morphAttributes.position || [], P = h.morphAttributes.normal || [], v = h.morphAttributes.color || [];
        let w = 0;
        x === !0 && (w = 1), y === !0 && (w = 2), M === !0 && (w = 3);
        let L = h.attributes.position.count * w, U = 1;
        L > t.maxTextureSize && (U = Math.ceil(L / t.maxTextureSize), L = t.maxTextureSize);
        const j = new Float32Array(L * U * 4 * f), O = new rh(j, L, U, f);
        O.type = bi, O.needsUpdate = !0;
        const I = w * 4;
        for (let $ = 0; $ < f; $++) {
          const Z = A[$], G = P[$], Q = v[$], K = L * U * 4 * $;
          for (let V = 0; V < Z.count; V++) {
            const B = V * I;
            x === !0 && (o.fromBufferAttribute(Z, V), j[K + B + 0] = o.x, j[K + B + 1] = o.y, j[K + B + 2] = o.z, j[K + B + 3] = 0), y === !0 && (o.fromBufferAttribute(G, V), j[K + B + 4] = o.x, j[K + B + 5] = o.y, j[K + B + 6] = o.z, j[K + B + 7] = 0), M === !0 && (o.fromBufferAttribute(Q, V), j[K + B + 8] = o.x, j[K + B + 9] = o.y, j[K + B + 10] = o.z, j[K + B + 11] = Q.itemSize === 4 ? o.w : 1);
          }
        }
        p = {
          count: f,
          texture: O,
          size: new vt(L, U)
        }, r.set(h, p), h.addEventListener("dispose", k);
      }
      let _ = 0;
      for (let x = 0; x < m.length; x++)
        _ += m[x];
      const b = h.morphTargetsRelative ? 1 : 1 - _;
      d.getUniforms().setValue(a, "morphTargetBaseInfluence", b), d.getUniforms().setValue(a, "morphTargetInfluences", m), d.getUniforms().setValue(a, "morphTargetsTexture", p.texture, e), d.getUniforms().setValue(a, "morphTargetsTextureSize", p.size);
    } else {
      const g = m === void 0 ? 0 : m.length;
      let f = n[h.id];
      if (f === void 0 || f.length !== g) {
        f = [];
        for (let y = 0; y < g; y++)
          f[y] = [y, 0];
        n[h.id] = f;
      }
      for (let y = 0; y < g; y++) {
        const M = f[y];
        M[0] = y, M[1] = m[y];
      }
      f.sort(jm);
      for (let y = 0; y < 8; y++)
        y < g && f[y][1] ? (s[y][0] = f[y][0], s[y][1] = f[y][1]) : (s[y][0] = Number.MAX_SAFE_INTEGER, s[y][1] = 0);
      s.sort($m);
      const p = h.morphAttributes.position, _ = h.morphAttributes.normal;
      let b = 0;
      for (let y = 0; y < 8; y++) {
        const M = s[y], A = M[0], P = M[1];
        A !== Number.MAX_SAFE_INTEGER && P ? (p && h.getAttribute("morphTarget" + y) !== p[A] && h.setAttribute("morphTarget" + y, p[A]), _ && h.getAttribute("morphNormal" + y) !== _[A] && h.setAttribute("morphNormal" + y, _[A]), i[y] = P, b += P) : (p && h.hasAttribute("morphTarget" + y) === !0 && h.deleteAttribute("morphTarget" + y), _ && h.hasAttribute("morphNormal" + y) === !0 && h.deleteAttribute("morphNormal" + y), i[y] = 0);
      }
      const x = h.morphTargetsRelative ? 1 : 1 - b;
      d.getUniforms().setValue(a, "morphTargetBaseInfluence", x), d.getUniforms().setValue(a, "morphTargetInfluences", i);
    }
  }
  return {
    update: l
  };
}
function Km(a, t, e, n) {
  let i = /* @__PURE__ */ new WeakMap();
  function r(l) {
    const c = n.render.frame, h = l.geometry, u = t.get(l, h);
    return i.get(u) !== c && (t.update(u), i.set(u, c)), l.isInstancedMesh && (l.hasEventListener("dispose", s) === !1 && l.addEventListener("dispose", s), e.update(l.instanceMatrix, 34962), l.instanceColor !== null && e.update(l.instanceColor, 34962)), u;
  }
  function o() {
    i = /* @__PURE__ */ new WeakMap();
  }
  function s(l) {
    const c = l.target;
    c.removeEventListener("dispose", s), e.remove(c.instanceMatrix), c.instanceColor !== null && e.remove(c.instanceColor);
  }
  return {
    update: r,
    dispose: o
  };
}
const ph = /* @__PURE__ */ new Oe(), mh = /* @__PURE__ */ new rh(), gh = /* @__PURE__ */ new Fd(), _h = /* @__PURE__ */ new uh(), Kl = [], Jl = [], Ql = new Float32Array(16), tc = new Float32Array(9), ec = new Float32Array(4);
function Ar(a, t, e) {
  const n = a[0];
  if (n <= 0 || n > 0)
    return a;
  const i = t * e;
  let r = Kl[i];
  if (r === void 0 && (r = new Float32Array(i), Kl[i] = r), t !== 0) {
    n.toArray(r, 0);
    for (let o = 1, s = 0; o !== t; ++o)
      s += e, a[o].toArray(r, s);
  }
  return r;
}
function ae(a, t) {
  if (a.length !== t.length)
    return !1;
  for (let e = 0, n = a.length; e < n; e++)
    if (a[e] !== t[e])
      return !1;
  return !0;
}
function oe(a, t) {
  for (let e = 0, n = t.length; e < n; e++)
    a[e] = t[e];
}
function na(a, t) {
  let e = Jl[t];
  e === void 0 && (e = new Int32Array(t), Jl[t] = e);
  for (let n = 0; n !== t; ++n)
    e[n] = a.allocateTextureUnit();
  return e;
}
function Jm(a, t) {
  const e = this.cache;
  e[0] !== t && (a.uniform1f(this.addr, t), e[0] = t);
}
function Qm(a, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y) && (a.uniform2f(this.addr, t.x, t.y), e[0] = t.x, e[1] = t.y);
  else {
    if (ae(e, t))
      return;
    a.uniform2fv(this.addr, t), oe(e, t);
  }
}
function tg(a, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z) && (a.uniform3f(this.addr, t.x, t.y, t.z), e[0] = t.x, e[1] = t.y, e[2] = t.z);
  else if (t.r !== void 0)
    (e[0] !== t.r || e[1] !== t.g || e[2] !== t.b) && (a.uniform3f(this.addr, t.r, t.g, t.b), e[0] = t.r, e[1] = t.g, e[2] = t.b);
  else {
    if (ae(e, t))
      return;
    a.uniform3fv(this.addr, t), oe(e, t);
  }
}
function eg(a, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z || e[3] !== t.w) && (a.uniform4f(this.addr, t.x, t.y, t.z, t.w), e[0] = t.x, e[1] = t.y, e[2] = t.z, e[3] = t.w);
  else {
    if (ae(e, t))
      return;
    a.uniform4fv(this.addr, t), oe(e, t);
  }
}
function ng(a, t) {
  const e = this.cache, n = t.elements;
  if (n === void 0) {
    if (ae(e, t))
      return;
    a.uniformMatrix2fv(this.addr, !1, t), oe(e, t);
  } else {
    if (ae(e, n))
      return;
    ec.set(n), a.uniformMatrix2fv(this.addr, !1, ec), oe(e, n);
  }
}
function ig(a, t) {
  const e = this.cache, n = t.elements;
  if (n === void 0) {
    if (ae(e, t))
      return;
    a.uniformMatrix3fv(this.addr, !1, t), oe(e, t);
  } else {
    if (ae(e, n))
      return;
    tc.set(n), a.uniformMatrix3fv(this.addr, !1, tc), oe(e, n);
  }
}
function rg(a, t) {
  const e = this.cache, n = t.elements;
  if (n === void 0) {
    if (ae(e, t))
      return;
    a.uniformMatrix4fv(this.addr, !1, t), oe(e, t);
  } else {
    if (ae(e, n))
      return;
    Ql.set(n), a.uniformMatrix4fv(this.addr, !1, Ql), oe(e, n);
  }
}
function sg(a, t) {
  const e = this.cache;
  e[0] !== t && (a.uniform1i(this.addr, t), e[0] = t);
}
function ag(a, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y) && (a.uniform2i(this.addr, t.x, t.y), e[0] = t.x, e[1] = t.y);
  else {
    if (ae(e, t))
      return;
    a.uniform2iv(this.addr, t), oe(e, t);
  }
}
function og(a, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z) && (a.uniform3i(this.addr, t.x, t.y, t.z), e[0] = t.x, e[1] = t.y, e[2] = t.z);
  else {
    if (ae(e, t))
      return;
    a.uniform3iv(this.addr, t), oe(e, t);
  }
}
function lg(a, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z || e[3] !== t.w) && (a.uniform4i(this.addr, t.x, t.y, t.z, t.w), e[0] = t.x, e[1] = t.y, e[2] = t.z, e[3] = t.w);
  else {
    if (ae(e, t))
      return;
    a.uniform4iv(this.addr, t), oe(e, t);
  }
}
function cg(a, t) {
  const e = this.cache;
  e[0] !== t && (a.uniform1ui(this.addr, t), e[0] = t);
}
function hg(a, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y) && (a.uniform2ui(this.addr, t.x, t.y), e[0] = t.x, e[1] = t.y);
  else {
    if (ae(e, t))
      return;
    a.uniform2uiv(this.addr, t), oe(e, t);
  }
}
function ug(a, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z) && (a.uniform3ui(this.addr, t.x, t.y, t.z), e[0] = t.x, e[1] = t.y, e[2] = t.z);
  else {
    if (ae(e, t))
      return;
    a.uniform3uiv(this.addr, t), oe(e, t);
  }
}
function dg(a, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z || e[3] !== t.w) && (a.uniform4ui(this.addr, t.x, t.y, t.z, t.w), e[0] = t.x, e[1] = t.y, e[2] = t.z, e[3] = t.w);
  else {
    if (ae(e, t))
      return;
    a.uniform4uiv(this.addr, t), oe(e, t);
  }
}
function fg(a, t, e) {
  const n = this.cache, i = e.allocateTextureUnit();
  n[0] !== i && (a.uniform1i(this.addr, i), n[0] = i), e.setTexture2D(t || ph, i);
}
function pg(a, t, e) {
  const n = this.cache, i = e.allocateTextureUnit();
  n[0] !== i && (a.uniform1i(this.addr, i), n[0] = i), e.setTexture3D(t || gh, i);
}
function mg(a, t, e) {
  const n = this.cache, i = e.allocateTextureUnit();
  n[0] !== i && (a.uniform1i(this.addr, i), n[0] = i), e.setTextureCube(t || _h, i);
}
function gg(a, t, e) {
  const n = this.cache, i = e.allocateTextureUnit();
  n[0] !== i && (a.uniform1i(this.addr, i), n[0] = i), e.setTexture2DArray(t || mh, i);
}
function _g(a) {
  switch (a) {
    case 5126:
      return Jm;
    case 35664:
      return Qm;
    case 35665:
      return tg;
    case 35666:
      return eg;
    case 35674:
      return ng;
    case 35675:
      return ig;
    case 35676:
      return rg;
    case 5124:
    case 35670:
      return sg;
    case 35667:
    case 35671:
      return ag;
    case 35668:
    case 35672:
      return og;
    case 35669:
    case 35673:
      return lg;
    case 5125:
      return cg;
    case 36294:
      return hg;
    case 36295:
      return ug;
    case 36296:
      return dg;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return fg;
    case 35679:
    case 36299:
    case 36307:
      return pg;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return mg;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return gg;
  }
}
function vg(a, t) {
  a.uniform1fv(this.addr, t);
}
function xg(a, t) {
  const e = Ar(t, this.size, 2);
  a.uniform2fv(this.addr, e);
}
function yg(a, t) {
  const e = Ar(t, this.size, 3);
  a.uniform3fv(this.addr, e);
}
function bg(a, t) {
  const e = Ar(t, this.size, 4);
  a.uniform4fv(this.addr, e);
}
function Mg(a, t) {
  const e = Ar(t, this.size, 4);
  a.uniformMatrix2fv(this.addr, !1, e);
}
function Sg(a, t) {
  const e = Ar(t, this.size, 9);
  a.uniformMatrix3fv(this.addr, !1, e);
}
function wg(a, t) {
  const e = Ar(t, this.size, 16);
  a.uniformMatrix4fv(this.addr, !1, e);
}
function Tg(a, t) {
  a.uniform1iv(this.addr, t);
}
function Eg(a, t) {
  a.uniform2iv(this.addr, t);
}
function Ag(a, t) {
  a.uniform3iv(this.addr, t);
}
function Cg(a, t) {
  a.uniform4iv(this.addr, t);
}
function Pg(a, t) {
  a.uniform1uiv(this.addr, t);
}
function Lg(a, t) {
  a.uniform2uiv(this.addr, t);
}
function Dg(a, t) {
  a.uniform3uiv(this.addr, t);
}
function Rg(a, t) {
  a.uniform4uiv(this.addr, t);
}
function Ig(a, t, e) {
  const n = this.cache, i = t.length, r = na(e, i);
  ae(n, r) || (a.uniform1iv(this.addr, r), oe(n, r));
  for (let o = 0; o !== i; ++o)
    e.setTexture2D(t[o] || ph, r[o]);
}
function Og(a, t, e) {
  const n = this.cache, i = t.length, r = na(e, i);
  ae(n, r) || (a.uniform1iv(this.addr, r), oe(n, r));
  for (let o = 0; o !== i; ++o)
    e.setTexture3D(t[o] || gh, r[o]);
}
function zg(a, t, e) {
  const n = this.cache, i = t.length, r = na(e, i);
  ae(n, r) || (a.uniform1iv(this.addr, r), oe(n, r));
  for (let o = 0; o !== i; ++o)
    e.setTextureCube(t[o] || _h, r[o]);
}
function Fg(a, t, e) {
  const n = this.cache, i = t.length, r = na(e, i);
  ae(n, r) || (a.uniform1iv(this.addr, r), oe(n, r));
  for (let o = 0; o !== i; ++o)
    e.setTexture2DArray(t[o] || mh, r[o]);
}
function Ng(a) {
  switch (a) {
    case 5126:
      return vg;
    case 35664:
      return xg;
    case 35665:
      return yg;
    case 35666:
      return bg;
    case 35674:
      return Mg;
    case 35675:
      return Sg;
    case 35676:
      return wg;
    case 5124:
    case 35670:
      return Tg;
    case 35667:
    case 35671:
      return Eg;
    case 35668:
    case 35672:
      return Ag;
    case 35669:
    case 35673:
      return Cg;
    case 5125:
      return Pg;
    case 36294:
      return Lg;
    case 36295:
      return Dg;
    case 36296:
      return Rg;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return Ig;
    case 35679:
    case 36299:
    case 36307:
      return Og;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return zg;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return Fg;
  }
}
class Ug {
  constructor(t, e, n) {
    this.id = t, this.addr = n, this.cache = [], this.setValue = _g(e.type);
  }
}
class kg {
  constructor(t, e, n) {
    this.id = t, this.addr = n, this.cache = [], this.size = e.size, this.setValue = Ng(e.type);
  }
}
class Bg {
  constructor(t) {
    this.id = t, this.seq = [], this.map = {};
  }
  setValue(t, e, n) {
    const i = this.seq;
    for (let r = 0, o = i.length; r !== o; ++r) {
      const s = i[r];
      s.setValue(t, e[s.id], n);
    }
  }
}
const Ua = /(\w+)(\])?(\[|\.)?/g;
function nc(a, t) {
  a.seq.push(t), a.map[t.id] = t;
}
function Gg(a, t, e) {
  const n = a.name, i = n.length;
  for (Ua.lastIndex = 0; ; ) {
    const r = Ua.exec(n), o = Ua.lastIndex;
    let s = r[1];
    const l = r[2] === "]", c = r[3];
    if (l && (s = s | 0), c === void 0 || c === "[" && o + 2 === i) {
      nc(e, c === void 0 ? new Ug(s, a, t) : new kg(s, a, t));
      break;
    } else {
      let u = e.map[s];
      u === void 0 && (u = new Bg(s), nc(e, u)), e = u;
    }
  }
}
class ks {
  constructor(t, e) {
    this.seq = [], this.map = {};
    const n = t.getProgramParameter(e, 35718);
    for (let i = 0; i < n; ++i) {
      const r = t.getActiveUniform(e, i), o = t.getUniformLocation(e, r.name);
      Gg(r, o, this);
    }
  }
  setValue(t, e, n, i) {
    const r = this.map[e];
    r !== void 0 && r.setValue(t, n, i);
  }
  setOptional(t, e, n) {
    const i = e[n];
    i !== void 0 && this.setValue(t, n, i);
  }
  static upload(t, e, n, i) {
    for (let r = 0, o = e.length; r !== o; ++r) {
      const s = e[r], l = n[s.id];
      l.needsUpdate !== !1 && s.setValue(t, l.value, i);
    }
  }
  static seqWithValue(t, e) {
    const n = [];
    for (let i = 0, r = t.length; i !== r; ++i) {
      const o = t[i];
      o.id in e && n.push(o);
    }
    return n;
  }
}
function ic(a, t, e) {
  const n = a.createShader(t);
  return a.shaderSource(n, e), a.compileShader(n), n;
}
let Vg = 0;
function Hg(a, t) {
  const e = a.split(`
`), n = [], i = Math.max(t - 6, 0), r = Math.min(t + 6, e.length);
  for (let o = i; o < r; o++) {
    const s = o + 1;
    n.push(`${s === t ? ">" : " "} ${s}: ${e[o]}`);
  }
  return n.join(`
`);
}
function Wg(a) {
  switch (a) {
    case Di:
      return ["Linear", "( value )"];
    case Ht:
      return ["sRGB", "( value )"];
    default:
      return console.warn("THREE.WebGLProgram: Unsupported encoding:", a), ["Linear", "( value )"];
  }
}
function rc(a, t, e) {
  const n = a.getShaderParameter(t, 35713), i = a.getShaderInfoLog(t).trim();
  if (n && i === "")
    return "";
  const r = /ERROR: 0:(\d+)/.exec(i);
  if (r) {
    const o = parseInt(r[1]);
    return e.toUpperCase() + `

` + i + `

` + Hg(a.getShaderSource(t), o);
  } else
    return i;
}
function Xg(a, t) {
  const e = Wg(t);
  return "vec4 " + a + "( vec4 value ) { return LinearTo" + e[0] + e[1] + "; }";
}
function qg(a, t) {
  let e;
  switch (t) {
    case Yc:
      e = "Linear";
      break;
    case $c:
      e = "Reinhard";
      break;
    case jc:
      e = "OptimizedCineon";
      break;
    case Zc:
      e = "ACESFilmic";
      break;
    case td:
      e = "Custom";
      break;
    default:
      console.warn("THREE.WebGLProgram: Unsupported toneMapping:", t), e = "Linear";
  }
  return "vec3 " + a + "( vec3 color ) { return " + e + "ToneMapping( color ); }";
}
function Yg(a) {
  return [
    a.extensionDerivatives || a.envMapCubeUVHeight || a.bumpMap || a.tangentSpaceNormalMap || a.clearcoatNormalMap || a.flatShading || a.shaderID === "physical" ? "#extension GL_OES_standard_derivatives : enable" : "",
    (a.extensionFragDepth || a.logarithmicDepthBuffer) && a.rendererExtensionFragDepth ? "#extension GL_EXT_frag_depth : enable" : "",
    a.extensionDrawBuffers && a.rendererExtensionDrawBuffers ? "#extension GL_EXT_draw_buffers : require" : "",
    (a.extensionShaderTextureLOD || a.envMap || a.transmission) && a.rendererExtensionShaderTextureLod ? "#extension GL_EXT_shader_texture_lod : enable" : ""
  ].filter(Gr).join(`
`);
}
function $g(a) {
  const t = [];
  for (const e in a) {
    const n = a[e];
    n !== !1 && t.push("#define " + e + " " + n);
  }
  return t.join(`
`);
}
function jg(a, t) {
  const e = {}, n = a.getProgramParameter(t, 35721);
  for (let i = 0; i < n; i++) {
    const r = a.getActiveAttrib(t, i), o = r.name;
    let s = 1;
    r.type === 35674 && (s = 2), r.type === 35675 && (s = 3), r.type === 35676 && (s = 4), e[o] = {
      type: r.type,
      location: a.getAttribLocation(t, o),
      locationSize: s
    };
  }
  return e;
}
function Gr(a) {
  return a !== "";
}
function sc(a, t) {
  const e = t.numSpotLightShadows + t.numSpotLightMaps - t.numSpotLightShadowsWithMaps;
  return a.replace(/NUM_DIR_LIGHTS/g, t.numDirLights).replace(/NUM_SPOT_LIGHTS/g, t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, e).replace(/NUM_RECT_AREA_LIGHTS/g, t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, t.numPointLights).replace(/NUM_HEMI_LIGHTS/g, t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, t.numPointLightShadows);
}
function ac(a, t) {
  return a.replace(/NUM_CLIPPING_PLANES/g, t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, t.numClippingPlanes - t.numClipIntersection);
}
const Zg = /^[ \t]*#include +<([\w\d./]+)>/gm;
function co(a) {
  return a.replace(Zg, Kg);
}
function Kg(a, t) {
  const e = wt[t];
  if (e === void 0)
    throw new Error("Can not resolve #include <" + t + ">");
  return co(e);
}
const Jg = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function oc(a) {
  return a.replace(Jg, Qg);
}
function Qg(a, t, e, n) {
  let i = "";
  for (let r = parseInt(t); r < parseInt(e); r++)
    i += n.replace(/\[\s*i\s*\]/g, "[ " + r + " ]").replace(/UNROLLED_LOOP_INDEX/g, r);
  return i;
}
function lc(a) {
  let t = "precision " + a.precision + ` float;
precision ` + a.precision + " int;";
  return a.precision === "highp" ? t += `
#define HIGH_PRECISION` : a.precision === "mediump" ? t += `
#define MEDIUM_PRECISION` : a.precision === "lowp" && (t += `
#define LOW_PRECISION`), t;
}
function t_(a) {
  let t = "SHADOWMAP_TYPE_BASIC";
  return a.shadowMapType === Hc ? t = "SHADOWMAP_TYPE_PCF" : a.shadowMapType === Ru ? t = "SHADOWMAP_TYPE_PCF_SOFT" : a.shadowMapType === Br && (t = "SHADOWMAP_TYPE_VSM"), t;
}
function e_(a) {
  let t = "ENVMAP_TYPE_CUBE";
  if (a.envMap)
    switch (a.envMapMode) {
      case mr:
      case gr:
        t = "ENVMAP_TYPE_CUBE";
        break;
      case ta:
        t = "ENVMAP_TYPE_CUBE_UV";
        break;
    }
  return t;
}
function n_(a) {
  let t = "ENVMAP_MODE_REFLECTION";
  if (a.envMap)
    switch (a.envMapMode) {
      case gr:
        t = "ENVMAP_MODE_REFRACTION";
        break;
    }
  return t;
}
function i_(a) {
  let t = "ENVMAP_BLENDING_NONE";
  if (a.envMap)
    switch (a.combine) {
      case qc:
        t = "ENVMAP_BLENDING_MULTIPLY";
        break;
      case Ju:
        t = "ENVMAP_BLENDING_MIX";
        break;
      case Qu:
        t = "ENVMAP_BLENDING_ADD";
        break;
    }
  return t;
}
function r_(a) {
  const t = a.envMapCubeUVHeight;
  if (t === null)
    return null;
  const e = Math.log2(t) - 2, n = 1 / t;
  return { texelWidth: 1 / (3 * Math.max(Math.pow(2, e), 7 * 16)), texelHeight: n, maxMip: e };
}
function s_(a, t, e, n) {
  const i = a.getContext(), r = e.defines;
  let o = e.vertexShader, s = e.fragmentShader;
  const l = t_(e), c = e_(e), h = n_(e), u = i_(e), d = r_(e), m = e.isWebGL2 ? "" : Yg(e), g = $g(r), f = i.createProgram();
  let p, _, b = e.glslVersion ? "#version " + e.glslVersion + `
` : "";
  e.isRawShaderMaterial ? (p = [
    g
  ].filter(Gr).join(`
`), p.length > 0 && (p += `
`), _ = [
    m,
    g
  ].filter(Gr).join(`
`), _.length > 0 && (_ += `
`)) : (p = [
    lc(e),
    "#define SHADER_NAME " + e.shaderName,
    g,
    e.instancing ? "#define USE_INSTANCING" : "",
    e.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
    e.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "",
    e.useFog && e.fog ? "#define USE_FOG" : "",
    e.useFog && e.fogExp2 ? "#define FOG_EXP2" : "",
    e.map ? "#define USE_MAP" : "",
    e.envMap ? "#define USE_ENVMAP" : "",
    e.envMap ? "#define " + h : "",
    e.lightMap ? "#define USE_LIGHTMAP" : "",
    e.aoMap ? "#define USE_AOMAP" : "",
    e.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
    e.bumpMap ? "#define USE_BUMPMAP" : "",
    e.normalMap ? "#define USE_NORMALMAP" : "",
    e.normalMap && e.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "",
    e.normalMap && e.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "",
    e.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
    e.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
    e.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
    e.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
    e.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
    e.displacementMap && e.supportsVertexTextures ? "#define USE_DISPLACEMENTMAP" : "",
    e.specularMap ? "#define USE_SPECULARMAP" : "",
    e.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "",
    e.specularColorMap ? "#define USE_SPECULARCOLORMAP" : "",
    e.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
    e.metalnessMap ? "#define USE_METALNESSMAP" : "",
    e.alphaMap ? "#define USE_ALPHAMAP" : "",
    e.transmission ? "#define USE_TRANSMISSION" : "",
    e.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
    e.thicknessMap ? "#define USE_THICKNESSMAP" : "",
    e.sheenColorMap ? "#define USE_SHEENCOLORMAP" : "",
    e.sheenRoughnessMap ? "#define USE_SHEENROUGHNESSMAP" : "",
    e.vertexTangents ? "#define USE_TANGENT" : "",
    e.vertexColors ? "#define USE_COLOR" : "",
    e.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
    e.vertexUvs ? "#define USE_UV" : "",
    e.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "",
    e.flatShading ? "#define FLAT_SHADED" : "",
    e.skinning ? "#define USE_SKINNING" : "",
    e.morphTargets ? "#define USE_MORPHTARGETS" : "",
    e.morphNormals && e.flatShading === !1 ? "#define USE_MORPHNORMALS" : "",
    e.morphColors && e.isWebGL2 ? "#define USE_MORPHCOLORS" : "",
    e.morphTargetsCount > 0 && e.isWebGL2 ? "#define MORPHTARGETS_TEXTURE" : "",
    e.morphTargetsCount > 0 && e.isWebGL2 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + e.morphTextureStride : "",
    e.morphTargetsCount > 0 && e.isWebGL2 ? "#define MORPHTARGETS_COUNT " + e.morphTargetsCount : "",
    e.doubleSided ? "#define DOUBLE_SIDED" : "",
    e.flipSided ? "#define FLIP_SIDED" : "",
    e.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
    e.shadowMapEnabled ? "#define " + l : "",
    e.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
    e.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
    e.logarithmicDepthBuffer && e.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "",
    "uniform mat4 modelMatrix;",
    "uniform mat4 modelViewMatrix;",
    "uniform mat4 projectionMatrix;",
    "uniform mat4 viewMatrix;",
    "uniform mat3 normalMatrix;",
    "uniform vec3 cameraPosition;",
    "uniform bool isOrthographic;",
    "#ifdef USE_INSTANCING",
    "	attribute mat4 instanceMatrix;",
    "#endif",
    "#ifdef USE_INSTANCING_COLOR",
    "	attribute vec3 instanceColor;",
    "#endif",
    "attribute vec3 position;",
    "attribute vec3 normal;",
    "attribute vec2 uv;",
    "#ifdef USE_TANGENT",
    "	attribute vec4 tangent;",
    "#endif",
    "#if defined( USE_COLOR_ALPHA )",
    "	attribute vec4 color;",
    "#elif defined( USE_COLOR )",
    "	attribute vec3 color;",
    "#endif",
    "#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )",
    "	attribute vec3 morphTarget0;",
    "	attribute vec3 morphTarget1;",
    "	attribute vec3 morphTarget2;",
    "	attribute vec3 morphTarget3;",
    "	#ifdef USE_MORPHNORMALS",
    "		attribute vec3 morphNormal0;",
    "		attribute vec3 morphNormal1;",
    "		attribute vec3 morphNormal2;",
    "		attribute vec3 morphNormal3;",
    "	#else",
    "		attribute vec3 morphTarget4;",
    "		attribute vec3 morphTarget5;",
    "		attribute vec3 morphTarget6;",
    "		attribute vec3 morphTarget7;",
    "	#endif",
    "#endif",
    "#ifdef USE_SKINNING",
    "	attribute vec4 skinIndex;",
    "	attribute vec4 skinWeight;",
    "#endif",
    `
`
  ].filter(Gr).join(`
`), _ = [
    m,
    lc(e),
    "#define SHADER_NAME " + e.shaderName,
    g,
    e.useFog && e.fog ? "#define USE_FOG" : "",
    e.useFog && e.fogExp2 ? "#define FOG_EXP2" : "",
    e.map ? "#define USE_MAP" : "",
    e.matcap ? "#define USE_MATCAP" : "",
    e.envMap ? "#define USE_ENVMAP" : "",
    e.envMap ? "#define " + c : "",
    e.envMap ? "#define " + h : "",
    e.envMap ? "#define " + u : "",
    d ? "#define CUBEUV_TEXEL_WIDTH " + d.texelWidth : "",
    d ? "#define CUBEUV_TEXEL_HEIGHT " + d.texelHeight : "",
    d ? "#define CUBEUV_MAX_MIP " + d.maxMip + ".0" : "",
    e.lightMap ? "#define USE_LIGHTMAP" : "",
    e.aoMap ? "#define USE_AOMAP" : "",
    e.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
    e.bumpMap ? "#define USE_BUMPMAP" : "",
    e.normalMap ? "#define USE_NORMALMAP" : "",
    e.normalMap && e.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "",
    e.normalMap && e.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "",
    e.clearcoat ? "#define USE_CLEARCOAT" : "",
    e.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
    e.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
    e.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
    e.iridescence ? "#define USE_IRIDESCENCE" : "",
    e.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
    e.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
    e.specularMap ? "#define USE_SPECULARMAP" : "",
    e.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "",
    e.specularColorMap ? "#define USE_SPECULARCOLORMAP" : "",
    e.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
    e.metalnessMap ? "#define USE_METALNESSMAP" : "",
    e.alphaMap ? "#define USE_ALPHAMAP" : "",
    e.alphaTest ? "#define USE_ALPHATEST" : "",
    e.sheen ? "#define USE_SHEEN" : "",
    e.sheenColorMap ? "#define USE_SHEENCOLORMAP" : "",
    e.sheenRoughnessMap ? "#define USE_SHEENROUGHNESSMAP" : "",
    e.transmission ? "#define USE_TRANSMISSION" : "",
    e.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
    e.thicknessMap ? "#define USE_THICKNESSMAP" : "",
    e.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
    e.vertexTangents ? "#define USE_TANGENT" : "",
    e.vertexColors || e.instancingColor ? "#define USE_COLOR" : "",
    e.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
    e.vertexUvs ? "#define USE_UV" : "",
    e.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "",
    e.gradientMap ? "#define USE_GRADIENTMAP" : "",
    e.flatShading ? "#define FLAT_SHADED" : "",
    e.doubleSided ? "#define DOUBLE_SIDED" : "",
    e.flipSided ? "#define FLIP_SIDED" : "",
    e.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
    e.shadowMapEnabled ? "#define " + l : "",
    e.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
    e.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "",
    e.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
    e.logarithmicDepthBuffer && e.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "",
    "uniform mat4 viewMatrix;",
    "uniform vec3 cameraPosition;",
    "uniform bool isOrthographic;",
    e.toneMapping !== gn ? "#define TONE_MAPPING" : "",
    e.toneMapping !== gn ? wt.tonemapping_pars_fragment : "",
    // this code is required here because it is used by the toneMapping() function defined below
    e.toneMapping !== gn ? qg("toneMapping", e.toneMapping) : "",
    e.dithering ? "#define DITHERING" : "",
    e.opaque ? "#define OPAQUE" : "",
    wt.encodings_pars_fragment,
    // this code is required here because it is used by the various encoding/decoding function defined below
    Xg("linearToOutputTexel", e.outputEncoding),
    e.useDepthPacking ? "#define DEPTH_PACKING " + e.depthPacking : "",
    `
`
  ].filter(Gr).join(`
`)), o = co(o), o = sc(o, e), o = ac(o, e), s = co(s), s = sc(s, e), s = ac(s, e), o = oc(o), s = oc(s), e.isWebGL2 && e.isRawShaderMaterial !== !0 && (b = `#version 300 es
`, p = [
    "precision mediump sampler2DArray;",
    "#define attribute in",
    "#define varying out",
    "#define texture2D texture"
  ].join(`
`) + `
` + p, _ = [
    "#define varying in",
    e.glslVersion === Rl ? "" : "layout(location = 0) out highp vec4 pc_fragColor;",
    e.glslVersion === Rl ? "" : "#define gl_FragColor pc_fragColor",
    "#define gl_FragDepthEXT gl_FragDepth",
    "#define texture2D texture",
    "#define textureCube texture",
    "#define texture2DProj textureProj",
    "#define texture2DLodEXT textureLod",
    "#define texture2DProjLodEXT textureProjLod",
    "#define textureCubeLodEXT textureLod",
    "#define texture2DGradEXT textureGrad",
    "#define texture2DProjGradEXT textureProjGrad",
    "#define textureCubeGradEXT textureGrad"
  ].join(`
`) + `
` + _);
  const x = b + p + o, y = b + _ + s, M = ic(i, 35633, x), A = ic(i, 35632, y);
  if (i.attachShader(f, M), i.attachShader(f, A), e.index0AttributeName !== void 0 ? i.bindAttribLocation(f, 0, e.index0AttributeName) : e.morphTargets === !0 && i.bindAttribLocation(f, 0, "position"), i.linkProgram(f), a.debug.checkShaderErrors) {
    const w = i.getProgramInfoLog(f).trim(), L = i.getShaderInfoLog(M).trim(), U = i.getShaderInfoLog(A).trim();
    let j = !0, O = !0;
    if (i.getProgramParameter(f, 35714) === !1) {
      j = !1;
      const I = rc(i, M, "vertex"), k = rc(i, A, "fragment");
      console.error(
        "THREE.WebGLProgram: Shader Error " + i.getError() + " - VALIDATE_STATUS " + i.getProgramParameter(f, 35715) + `

Program Info Log: ` + w + `
` + I + `
` + k
      );
    } else
      w !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", w) : (L === "" || U === "") && (O = !1);
    O && (this.diagnostics = {
      runnable: j,
      programLog: w,
      vertexShader: {
        log: L,
        prefix: p
      },
      fragmentShader: {
        log: U,
        prefix: _
      }
    });
  }
  i.deleteShader(M), i.deleteShader(A);
  let P;
  this.getUniforms = function() {
    return P === void 0 && (P = new ks(i, f)), P;
  };
  let v;
  return this.getAttributes = function() {
    return v === void 0 && (v = jg(i, f)), v;
  }, this.destroy = function() {
    n.releaseStatesOfProgram(this), i.deleteProgram(f), this.program = void 0;
  }, this.name = e.shaderName, this.id = Vg++, this.cacheKey = t, this.usedTimes = 1, this.program = f, this.vertexShader = M, this.fragmentShader = A, this;
}
let a_ = 0;
class o_ {
  constructor() {
    this.shaderCache = /* @__PURE__ */ new Map(), this.materialCache = /* @__PURE__ */ new Map();
  }
  update(t) {
    const e = t.vertexShader, n = t.fragmentShader, i = this._getShaderStage(e), r = this._getShaderStage(n), o = this._getShaderCacheForMaterial(t);
    return o.has(i) === !1 && (o.add(i), i.usedTimes++), o.has(r) === !1 && (o.add(r), r.usedTimes++), this;
  }
  remove(t) {
    const e = this.materialCache.get(t);
    for (const n of e)
      n.usedTimes--, n.usedTimes === 0 && this.shaderCache.delete(n.code);
    return this.materialCache.delete(t), this;
  }
  getVertexShaderID(t) {
    return this._getShaderStage(t.vertexShader).id;
  }
  getFragmentShaderID(t) {
    return this._getShaderStage(t.fragmentShader).id;
  }
  dispose() {
    this.shaderCache.clear(), this.materialCache.clear();
  }
  _getShaderCacheForMaterial(t) {
    const e = this.materialCache;
    let n = e.get(t);
    return n === void 0 && (n = /* @__PURE__ */ new Set(), e.set(t, n)), n;
  }
  _getShaderStage(t) {
    const e = this.shaderCache;
    let n = e.get(t);
    return n === void 0 && (n = new l_(t), e.set(t, n)), n;
  }
}
class l_ {
  constructor(t) {
    this.id = a_++, this.code = t, this.usedTimes = 0;
  }
}
function c_(a, t, e, n, i, r, o) {
  const s = new Ro(), l = new o_(), c = [], h = i.isWebGL2, u = i.logarithmicDepthBuffer, d = i.vertexTextures;
  let m = i.precision;
  const g = {
    MeshDepthMaterial: "depth",
    MeshDistanceMaterial: "distanceRGBA",
    MeshNormalMaterial: "normal",
    MeshBasicMaterial: "basic",
    MeshLambertMaterial: "lambert",
    MeshPhongMaterial: "phong",
    MeshToonMaterial: "toon",
    MeshStandardMaterial: "physical",
    MeshPhysicalMaterial: "physical",
    MeshMatcapMaterial: "matcap",
    LineBasicMaterial: "basic",
    LineDashedMaterial: "dashed",
    PointsMaterial: "points",
    ShadowMaterial: "shadow",
    SpriteMaterial: "sprite"
  };
  function f(v, w, L, U, j) {
    const O = U.fog, I = j.geometry, k = v.isMeshStandardMaterial ? U.environment : null, $ = (v.isMeshStandardMaterial ? e : t).get(v.envMap || k), Z = $ && $.mapping === ta ? $.image.height : null, G = g[v.type];
    v.precision !== null && (m = i.getMaxPrecision(v.precision), m !== v.precision && console.warn("THREE.WebGLProgram.getParameters:", v.precision, "not supported, using", m, "instead."));
    const Q = I.morphAttributes.position || I.morphAttributes.normal || I.morphAttributes.color, K = Q !== void 0 ? Q.length : 0;
    let V = 0;
    I.morphAttributes.position !== void 0 && (V = 1), I.morphAttributes.normal !== void 0 && (V = 2), I.morphAttributes.color !== void 0 && (V = 3);
    let B, at, J, st;
    if (G) {
      const Ft = Re[G];
      B = Ft.vertexShader, at = Ft.fragmentShader;
    } else
      B = v.vertexShader, at = v.fragmentShader, l.update(v), J = l.getVertexShaderID(v), st = l.getFragmentShaderID(v);
    const q = a.getRenderTarget(), At = v.alphaTest > 0, ft = v.clearcoat > 0, xt = v.iridescence > 0;
    return {
      isWebGL2: h,
      shaderID: G,
      shaderName: v.type,
      vertexShader: B,
      fragmentShader: at,
      defines: v.defines,
      customVertexShaderID: J,
      customFragmentShaderID: st,
      isRawShaderMaterial: v.isRawShaderMaterial === !0,
      glslVersion: v.glslVersion,
      precision: m,
      instancing: j.isInstancedMesh === !0,
      instancingColor: j.isInstancedMesh === !0 && j.instanceColor !== null,
      supportsVertexTextures: d,
      outputEncoding: q === null ? a.outputEncoding : q.isXRRenderTarget === !0 ? q.texture.encoding : Di,
      map: !!v.map,
      matcap: !!v.matcap,
      envMap: !!$,
      envMapMode: $ && $.mapping,
      envMapCubeUVHeight: Z,
      lightMap: !!v.lightMap,
      aoMap: !!v.aoMap,
      emissiveMap: !!v.emissiveMap,
      bumpMap: !!v.bumpMap,
      normalMap: !!v.normalMap,
      objectSpaceNormalMap: v.normalMapType === xd,
      tangentSpaceNormalMap: v.normalMapType === Qc,
      decodeVideoTexture: !!v.map && v.map.isVideoTexture === !0 && v.map.encoding === Ht,
      clearcoat: ft,
      clearcoatMap: ft && !!v.clearcoatMap,
      clearcoatRoughnessMap: ft && !!v.clearcoatRoughnessMap,
      clearcoatNormalMap: ft && !!v.clearcoatNormalMap,
      iridescence: xt,
      iridescenceMap: xt && !!v.iridescenceMap,
      iridescenceThicknessMap: xt && !!v.iridescenceThicknessMap,
      displacementMap: !!v.displacementMap,
      roughnessMap: !!v.roughnessMap,
      metalnessMap: !!v.metalnessMap,
      specularMap: !!v.specularMap,
      specularIntensityMap: !!v.specularIntensityMap,
      specularColorMap: !!v.specularColorMap,
      opaque: v.transparent === !1 && v.blending === hr,
      alphaMap: !!v.alphaMap,
      alphaTest: At,
      gradientMap: !!v.gradientMap,
      sheen: v.sheen > 0,
      sheenColorMap: !!v.sheenColorMap,
      sheenRoughnessMap: !!v.sheenRoughnessMap,
      transmission: v.transmission > 0,
      transmissionMap: !!v.transmissionMap,
      thicknessMap: !!v.thicknessMap,
      combine: v.combine,
      vertexTangents: !!v.normalMap && !!I.attributes.tangent,
      vertexColors: v.vertexColors,
      vertexAlphas: v.vertexColors === !0 && !!I.attributes.color && I.attributes.color.itemSize === 4,
      vertexUvs: !!v.map || !!v.bumpMap || !!v.normalMap || !!v.specularMap || !!v.alphaMap || !!v.emissiveMap || !!v.roughnessMap || !!v.metalnessMap || !!v.clearcoatMap || !!v.clearcoatRoughnessMap || !!v.clearcoatNormalMap || !!v.iridescenceMap || !!v.iridescenceThicknessMap || !!v.displacementMap || !!v.transmissionMap || !!v.thicknessMap || !!v.specularIntensityMap || !!v.specularColorMap || !!v.sheenColorMap || !!v.sheenRoughnessMap,
      uvsVertexOnly: !(v.map || v.bumpMap || v.normalMap || v.specularMap || v.alphaMap || v.emissiveMap || v.roughnessMap || v.metalnessMap || v.clearcoatNormalMap || v.iridescenceMap || v.iridescenceThicknessMap || v.transmission > 0 || v.transmissionMap || v.thicknessMap || v.specularIntensityMap || v.specularColorMap || v.sheen > 0 || v.sheenColorMap || v.sheenRoughnessMap) && !!v.displacementMap,
      fog: !!O,
      useFog: v.fog === !0,
      fogExp2: O && O.isFogExp2,
      flatShading: !!v.flatShading,
      sizeAttenuation: v.sizeAttenuation,
      logarithmicDepthBuffer: u,
      skinning: j.isSkinnedMesh === !0,
      morphTargets: I.morphAttributes.position !== void 0,
      morphNormals: I.morphAttributes.normal !== void 0,
      morphColors: I.morphAttributes.color !== void 0,
      morphTargetsCount: K,
      morphTextureStride: V,
      numDirLights: w.directional.length,
      numPointLights: w.point.length,
      numSpotLights: w.spot.length,
      numSpotLightMaps: w.spotLightMap.length,
      numRectAreaLights: w.rectArea.length,
      numHemiLights: w.hemi.length,
      numDirLightShadows: w.directionalShadowMap.length,
      numPointLightShadows: w.pointShadowMap.length,
      numSpotLightShadows: w.spotShadowMap.length,
      numSpotLightShadowsWithMaps: w.numSpotLightShadowsWithMaps,
      numClippingPlanes: o.numPlanes,
      numClipIntersection: o.numIntersection,
      dithering: v.dithering,
      shadowMapEnabled: a.shadowMap.enabled && L.length > 0,
      shadowMapType: a.shadowMap.type,
      toneMapping: v.toneMapped ? a.toneMapping : gn,
      physicallyCorrectLights: a.physicallyCorrectLights,
      premultipliedAlpha: v.premultipliedAlpha,
      doubleSided: v.side === Lo,
      flipSided: v.side === ln,
      useDepthPacking: !!v.depthPacking,
      depthPacking: v.depthPacking || 0,
      index0AttributeName: v.index0AttributeName,
      extensionDerivatives: v.extensions && v.extensions.derivatives,
      extensionFragDepth: v.extensions && v.extensions.fragDepth,
      extensionDrawBuffers: v.extensions && v.extensions.drawBuffers,
      extensionShaderTextureLOD: v.extensions && v.extensions.shaderTextureLOD,
      rendererExtensionFragDepth: h || n.has("EXT_frag_depth"),
      rendererExtensionDrawBuffers: h || n.has("WEBGL_draw_buffers"),
      rendererExtensionShaderTextureLod: h || n.has("EXT_shader_texture_lod"),
      customProgramCacheKey: v.customProgramCacheKey()
    };
  }
  function p(v) {
    const w = [];
    if (v.shaderID ? w.push(v.shaderID) : (w.push(v.customVertexShaderID), w.push(v.customFragmentShaderID)), v.defines !== void 0)
      for (const L in v.defines)
        w.push(L), w.push(v.defines[L]);
    return v.isRawShaderMaterial === !1 && (_(w, v), b(w, v), w.push(a.outputEncoding)), w.push(v.customProgramCacheKey), w.join();
  }
  function _(v, w) {
    v.push(w.precision), v.push(w.outputEncoding), v.push(w.envMapMode), v.push(w.envMapCubeUVHeight), v.push(w.combine), v.push(w.vertexUvs), v.push(w.fogExp2), v.push(w.sizeAttenuation), v.push(w.morphTargetsCount), v.push(w.morphAttributeCount), v.push(w.numDirLights), v.push(w.numPointLights), v.push(w.numSpotLights), v.push(w.numSpotLightMaps), v.push(w.numHemiLights), v.push(w.numRectAreaLights), v.push(w.numDirLightShadows), v.push(w.numPointLightShadows), v.push(w.numSpotLightShadows), v.push(w.numSpotLightShadowsWithMaps), v.push(w.shadowMapType), v.push(w.toneMapping), v.push(w.numClippingPlanes), v.push(w.numClipIntersection), v.push(w.depthPacking);
  }
  function b(v, w) {
    s.disableAll(), w.isWebGL2 && s.enable(0), w.supportsVertexTextures && s.enable(1), w.instancing && s.enable(2), w.instancingColor && s.enable(3), w.map && s.enable(4), w.matcap && s.enable(5), w.envMap && s.enable(6), w.lightMap && s.enable(7), w.aoMap && s.enable(8), w.emissiveMap && s.enable(9), w.bumpMap && s.enable(10), w.normalMap && s.enable(11), w.objectSpaceNormalMap && s.enable(12), w.tangentSpaceNormalMap && s.enable(13), w.clearcoat && s.enable(14), w.clearcoatMap && s.enable(15), w.clearcoatRoughnessMap && s.enable(16), w.clearcoatNormalMap && s.enable(17), w.iridescence && s.enable(18), w.iridescenceMap && s.enable(19), w.iridescenceThicknessMap && s.enable(20), w.displacementMap && s.enable(21), w.specularMap && s.enable(22), w.roughnessMap && s.enable(23), w.metalnessMap && s.enable(24), w.gradientMap && s.enable(25), w.alphaMap && s.enable(26), w.alphaTest && s.enable(27), w.vertexColors && s.enable(28), w.vertexAlphas && s.enable(29), w.vertexUvs && s.enable(30), w.vertexTangents && s.enable(31), w.uvsVertexOnly && s.enable(32), v.push(s.mask), s.disableAll(), w.fog && s.enable(0), w.useFog && s.enable(1), w.flatShading && s.enable(2), w.logarithmicDepthBuffer && s.enable(3), w.skinning && s.enable(4), w.morphTargets && s.enable(5), w.morphNormals && s.enable(6), w.morphColors && s.enable(7), w.premultipliedAlpha && s.enable(8), w.shadowMapEnabled && s.enable(9), w.physicallyCorrectLights && s.enable(10), w.doubleSided && s.enable(11), w.flipSided && s.enable(12), w.useDepthPacking && s.enable(13), w.dithering && s.enable(14), w.specularIntensityMap && s.enable(15), w.specularColorMap && s.enable(16), w.transmission && s.enable(17), w.transmissionMap && s.enable(18), w.thicknessMap && s.enable(19), w.sheen && s.enable(20), w.sheenColorMap && s.enable(21), w.sheenRoughnessMap && s.enable(22), w.decodeVideoTexture && s.enable(23), w.opaque && s.enable(24), v.push(s.mask);
  }
  function x(v) {
    const w = g[v.type];
    let L;
    if (w) {
      const U = Re[w];
      L = Io.clone(U.uniforms);
    } else
      L = v.uniforms;
    return L;
  }
  function y(v, w) {
    let L;
    for (let U = 0, j = c.length; U < j; U++) {
      const O = c[U];
      if (O.cacheKey === w) {
        L = O, ++L.usedTimes;
        break;
      }
    }
    return L === void 0 && (L = new s_(a, w, v, r), c.push(L)), L;
  }
  function M(v) {
    if (--v.usedTimes === 0) {
      const w = c.indexOf(v);
      c[w] = c[c.length - 1], c.pop(), v.destroy();
    }
  }
  function A(v) {
    l.remove(v);
  }
  function P() {
    l.dispose();
  }
  return {
    getParameters: f,
    getProgramCacheKey: p,
    getUniforms: x,
    acquireProgram: y,
    releaseProgram: M,
    releaseShaderCache: A,
    // Exposed for resource monitoring & error feedback via renderer.info:
    programs: c,
    dispose: P
  };
}
function h_() {
  let a = /* @__PURE__ */ new WeakMap();
  function t(r) {
    let o = a.get(r);
    return o === void 0 && (o = {}, a.set(r, o)), o;
  }
  function e(r) {
    a.delete(r);
  }
  function n(r, o, s) {
    a.get(r)[o] = s;
  }
  function i() {
    a = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: t,
    remove: e,
    update: n,
    dispose: i
  };
}
function u_(a, t) {
  return a.groupOrder !== t.groupOrder ? a.groupOrder - t.groupOrder : a.renderOrder !== t.renderOrder ? a.renderOrder - t.renderOrder : a.material.id !== t.material.id ? a.material.id - t.material.id : a.z !== t.z ? a.z - t.z : a.id - t.id;
}
function cc(a, t) {
  return a.groupOrder !== t.groupOrder ? a.groupOrder - t.groupOrder : a.renderOrder !== t.renderOrder ? a.renderOrder - t.renderOrder : a.z !== t.z ? t.z - a.z : a.id - t.id;
}
function hc() {
  const a = [];
  let t = 0;
  const e = [], n = [], i = [];
  function r() {
    t = 0, e.length = 0, n.length = 0, i.length = 0;
  }
  function o(u, d, m, g, f, p) {
    let _ = a[t];
    return _ === void 0 ? (_ = {
      id: u.id,
      object: u,
      geometry: d,
      material: m,
      groupOrder: g,
      renderOrder: u.renderOrder,
      z: f,
      group: p
    }, a[t] = _) : (_.id = u.id, _.object = u, _.geometry = d, _.material = m, _.groupOrder = g, _.renderOrder = u.renderOrder, _.z = f, _.group = p), t++, _;
  }
  function s(u, d, m, g, f, p) {
    const _ = o(u, d, m, g, f, p);
    m.transmission > 0 ? n.push(_) : m.transparent === !0 ? i.push(_) : e.push(_);
  }
  function l(u, d, m, g, f, p) {
    const _ = o(u, d, m, g, f, p);
    m.transmission > 0 ? n.unshift(_) : m.transparent === !0 ? i.unshift(_) : e.unshift(_);
  }
  function c(u, d) {
    e.length > 1 && e.sort(u || u_), n.length > 1 && n.sort(d || cc), i.length > 1 && i.sort(d || cc);
  }
  function h() {
    for (let u = t, d = a.length; u < d; u++) {
      const m = a[u];
      if (m.id === null)
        break;
      m.id = null, m.object = null, m.geometry = null, m.material = null, m.group = null;
    }
  }
  return {
    opaque: e,
    transmissive: n,
    transparent: i,
    init: r,
    push: s,
    unshift: l,
    finish: h,
    sort: c
  };
}
function d_() {
  let a = /* @__PURE__ */ new WeakMap();
  function t(n, i) {
    const r = a.get(n);
    let o;
    return r === void 0 ? (o = new hc(), a.set(n, [o])) : i >= r.length ? (o = new hc(), r.push(o)) : o = r[i], o;
  }
  function e() {
    a = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: t,
    dispose: e
  };
}
function f_() {
  const a = {};
  return {
    get: function(t) {
      if (a[t.id] !== void 0)
        return a[t.id];
      let e;
      switch (t.type) {
        case "DirectionalLight":
          e = {
            direction: new R(),
            color: new Ot()
          };
          break;
        case "SpotLight":
          e = {
            position: new R(),
            direction: new R(),
            color: new Ot(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0
          };
          break;
        case "PointLight":
          e = {
            position: new R(),
            color: new Ot(),
            distance: 0,
            decay: 0
          };
          break;
        case "HemisphereLight":
          e = {
            direction: new R(),
            skyColor: new Ot(),
            groundColor: new Ot()
          };
          break;
        case "RectAreaLight":
          e = {
            color: new Ot(),
            position: new R(),
            halfWidth: new R(),
            halfHeight: new R()
          };
          break;
      }
      return a[t.id] = e, e;
    }
  };
}
function p_() {
  const a = {};
  return {
    get: function(t) {
      if (a[t.id] !== void 0)
        return a[t.id];
      let e;
      switch (t.type) {
        case "DirectionalLight":
          e = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new vt()
          };
          break;
        case "SpotLight":
          e = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new vt()
          };
          break;
        case "PointLight":
          e = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new vt(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3
          };
          break;
      }
      return a[t.id] = e, e;
    }
  };
}
let m_ = 0;
function g_(a, t) {
  return (t.castShadow ? 2 : 0) - (a.castShadow ? 2 : 0) + (t.map ? 1 : 0) - (a.map ? 1 : 0);
}
function __(a, t) {
  const e = new f_(), n = p_(), i = {
    version: 0,
    hash: {
      directionalLength: -1,
      pointLength: -1,
      spotLength: -1,
      rectAreaLength: -1,
      hemiLength: -1,
      numDirectionalShadows: -1,
      numPointShadows: -1,
      numSpotShadows: -1,
      numSpotMaps: -1
    },
    ambient: [0, 0, 0],
    probe: [],
    directional: [],
    directionalShadow: [],
    directionalShadowMap: [],
    directionalShadowMatrix: [],
    spot: [],
    spotLightMap: [],
    spotShadow: [],
    spotShadowMap: [],
    spotLightMatrix: [],
    rectArea: [],
    rectAreaLTC1: null,
    rectAreaLTC2: null,
    point: [],
    pointShadow: [],
    pointShadowMap: [],
    pointShadowMatrix: [],
    hemi: [],
    numSpotLightShadowsWithMaps: 0
  };
  for (let h = 0; h < 9; h++)
    i.probe.push(new R());
  const r = new R(), o = new ee(), s = new ee();
  function l(h, u) {
    let d = 0, m = 0, g = 0;
    for (let U = 0; U < 9; U++)
      i.probe[U].set(0, 0, 0);
    let f = 0, p = 0, _ = 0, b = 0, x = 0, y = 0, M = 0, A = 0, P = 0, v = 0;
    h.sort(g_);
    const w = u !== !0 ? Math.PI : 1;
    for (let U = 0, j = h.length; U < j; U++) {
      const O = h[U], I = O.color, k = O.intensity, $ = O.distance, Z = O.shadow && O.shadow.map ? O.shadow.map.texture : null;
      if (O.isAmbientLight)
        d += I.r * k * w, m += I.g * k * w, g += I.b * k * w;
      else if (O.isLightProbe)
        for (let G = 0; G < 9; G++)
          i.probe[G].addScaledVector(O.sh.coefficients[G], k);
      else if (O.isDirectionalLight) {
        const G = e.get(O);
        if (G.color.copy(O.color).multiplyScalar(O.intensity * w), O.castShadow) {
          const Q = O.shadow, K = n.get(O);
          K.shadowBias = Q.bias, K.shadowNormalBias = Q.normalBias, K.shadowRadius = Q.radius, K.shadowMapSize = Q.mapSize, i.directionalShadow[f] = K, i.directionalShadowMap[f] = Z, i.directionalShadowMatrix[f] = O.shadow.matrix, y++;
        }
        i.directional[f] = G, f++;
      } else if (O.isSpotLight) {
        const G = e.get(O);
        G.position.setFromMatrixPosition(O.matrixWorld), G.color.copy(I).multiplyScalar(k * w), G.distance = $, G.coneCos = Math.cos(O.angle), G.penumbraCos = Math.cos(O.angle * (1 - O.penumbra)), G.decay = O.decay, i.spot[_] = G;
        const Q = O.shadow;
        if (O.map && (i.spotLightMap[P] = O.map, P++, Q.updateMatrices(O), O.castShadow && v++), i.spotLightMatrix[_] = Q.matrix, O.castShadow) {
          const K = n.get(O);
          K.shadowBias = Q.bias, K.shadowNormalBias = Q.normalBias, K.shadowRadius = Q.radius, K.shadowMapSize = Q.mapSize, i.spotShadow[_] = K, i.spotShadowMap[_] = Z, A++;
        }
        _++;
      } else if (O.isRectAreaLight) {
        const G = e.get(O);
        G.color.copy(I).multiplyScalar(k), G.halfWidth.set(O.width * 0.5, 0, 0), G.halfHeight.set(0, O.height * 0.5, 0), i.rectArea[b] = G, b++;
      } else if (O.isPointLight) {
        const G = e.get(O);
        if (G.color.copy(O.color).multiplyScalar(O.intensity * w), G.distance = O.distance, G.decay = O.decay, O.castShadow) {
          const Q = O.shadow, K = n.get(O);
          K.shadowBias = Q.bias, K.shadowNormalBias = Q.normalBias, K.shadowRadius = Q.radius, K.shadowMapSize = Q.mapSize, K.shadowCameraNear = Q.camera.near, K.shadowCameraFar = Q.camera.far, i.pointShadow[p] = K, i.pointShadowMap[p] = Z, i.pointShadowMatrix[p] = O.shadow.matrix, M++;
        }
        i.point[p] = G, p++;
      } else if (O.isHemisphereLight) {
        const G = e.get(O);
        G.skyColor.copy(O.color).multiplyScalar(k * w), G.groundColor.copy(O.groundColor).multiplyScalar(k * w), i.hemi[x] = G, x++;
      }
    }
    b > 0 && (t.isWebGL2 || a.has("OES_texture_float_linear") === !0 ? (i.rectAreaLTC1 = rt.LTC_FLOAT_1, i.rectAreaLTC2 = rt.LTC_FLOAT_2) : a.has("OES_texture_half_float_linear") === !0 ? (i.rectAreaLTC1 = rt.LTC_HALF_1, i.rectAreaLTC2 = rt.LTC_HALF_2) : console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")), i.ambient[0] = d, i.ambient[1] = m, i.ambient[2] = g;
    const L = i.hash;
    (L.directionalLength !== f || L.pointLength !== p || L.spotLength !== _ || L.rectAreaLength !== b || L.hemiLength !== x || L.numDirectionalShadows !== y || L.numPointShadows !== M || L.numSpotShadows !== A || L.numSpotMaps !== P) && (i.directional.length = f, i.spot.length = _, i.rectArea.length = b, i.point.length = p, i.hemi.length = x, i.directionalShadow.length = y, i.directionalShadowMap.length = y, i.pointShadow.length = M, i.pointShadowMap.length = M, i.spotShadow.length = A, i.spotShadowMap.length = A, i.directionalShadowMatrix.length = y, i.pointShadowMatrix.length = M, i.spotLightMatrix.length = A + P - v, i.spotLightMap.length = P, i.numSpotLightShadowsWithMaps = v, L.directionalLength = f, L.pointLength = p, L.spotLength = _, L.rectAreaLength = b, L.hemiLength = x, L.numDirectionalShadows = y, L.numPointShadows = M, L.numSpotShadows = A, L.numSpotMaps = P, i.version = m_++);
  }
  function c(h, u) {
    let d = 0, m = 0, g = 0, f = 0, p = 0;
    const _ = u.matrixWorldInverse;
    for (let b = 0, x = h.length; b < x; b++) {
      const y = h[b];
      if (y.isDirectionalLight) {
        const M = i.directional[d];
        M.direction.setFromMatrixPosition(y.matrixWorld), r.setFromMatrixPosition(y.target.matrixWorld), M.direction.sub(r), M.direction.transformDirection(_), d++;
      } else if (y.isSpotLight) {
        const M = i.spot[g];
        M.position.setFromMatrixPosition(y.matrixWorld), M.position.applyMatrix4(_), M.direction.setFromMatrixPosition(y.matrixWorld), r.setFromMatrixPosition(y.target.matrixWorld), M.direction.sub(r), M.direction.transformDirection(_), g++;
      } else if (y.isRectAreaLight) {
        const M = i.rectArea[f];
        M.position.setFromMatrixPosition(y.matrixWorld), M.position.applyMatrix4(_), s.identity(), o.copy(y.matrixWorld), o.premultiply(_), s.extractRotation(o), M.halfWidth.set(y.width * 0.5, 0, 0), M.halfHeight.set(0, y.height * 0.5, 0), M.halfWidth.applyMatrix4(s), M.halfHeight.applyMatrix4(s), f++;
      } else if (y.isPointLight) {
        const M = i.point[m];
        M.position.setFromMatrixPosition(y.matrixWorld), M.position.applyMatrix4(_), m++;
      } else if (y.isHemisphereLight) {
        const M = i.hemi[p];
        M.direction.setFromMatrixPosition(y.matrixWorld), M.direction.transformDirection(_), p++;
      }
    }
  }
  return {
    setup: l,
    setupView: c,
    state: i
  };
}
function uc(a, t) {
  const e = new __(a, t), n = [], i = [];
  function r() {
    n.length = 0, i.length = 0;
  }
  function o(u) {
    n.push(u);
  }
  function s(u) {
    i.push(u);
  }
  function l(u) {
    e.setup(n, u);
  }
  function c(u) {
    e.setupView(n, u);
  }
  return {
    init: r,
    state: {
      lightsArray: n,
      shadowsArray: i,
      lights: e
    },
    setupLights: l,
    setupLightsView: c,
    pushLight: o,
    pushShadow: s
  };
}
function v_(a, t) {
  let e = /* @__PURE__ */ new WeakMap();
  function n(r, o = 0) {
    const s = e.get(r);
    let l;
    return s === void 0 ? (l = new uc(a, t), e.set(r, [l])) : o >= s.length ? (l = new uc(a, t), s.push(l)) : l = s[o], l;
  }
  function i() {
    e = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: n,
    dispose: i
  };
}
class x_ extends Er {
  constructor(t) {
    super(), this.isMeshDepthMaterial = !0, this.type = "MeshDepthMaterial", this.depthPacking = _d, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.depthPacking = t.depthPacking, this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this;
  }
}
class y_ extends Er {
  constructor(t) {
    super(), this.isMeshDistanceMaterial = !0, this.type = "MeshDistanceMaterial", this.referencePosition = new R(), this.nearDistance = 1, this.farDistance = 1e3, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.referencePosition.copy(t.referencePosition), this.nearDistance = t.nearDistance, this.farDistance = t.farDistance, this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this;
  }
}
const b_ = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, M_ = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;
function S_(a, t, e) {
  let n = new dh();
  const i = new vt(), r = new vt(), o = new Zt(), s = new x_({ depthPacking: vd }), l = new y_(), c = {}, h = e.maxTextureSize, u = { 0: ln, 1: Pi, 2: Lo }, d = new Pn({
    defines: {
      VSM_SAMPLES: 8
    },
    uniforms: {
      shadow_pass: { value: null },
      resolution: { value: new vt() },
      radius: { value: 4 }
    },
    vertexShader: b_,
    fragmentShader: M_
  }), m = d.clone();
  m.defines.HORIZONTAL_PASS = 1;
  const g = new xn();
  g.setAttribute(
    "position",
    new _n(
      new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]),
      3
    )
  );
  const f = new rn(g, d), p = this;
  this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = Hc, this.render = function(y, M, A) {
    if (p.enabled === !1 || p.autoUpdate === !1 && p.needsUpdate === !1 || y.length === 0)
      return;
    const P = a.getRenderTarget(), v = a.getActiveCubeFace(), w = a.getActiveMipmapLevel(), L = a.state;
    L.setBlending(Jn), L.buffers.color.setClear(1, 1, 1, 1), L.buffers.depth.setTest(!0), L.setScissorTest(!1);
    for (let U = 0, j = y.length; U < j; U++) {
      const O = y[U], I = O.shadow;
      if (I === void 0) {
        console.warn("THREE.WebGLShadowMap:", O, "has no shadow.");
        continue;
      }
      if (I.autoUpdate === !1 && I.needsUpdate === !1)
        continue;
      i.copy(I.mapSize);
      const k = I.getFrameExtents();
      if (i.multiply(k), r.copy(I.mapSize), (i.x > h || i.y > h) && (i.x > h && (r.x = Math.floor(h / k.x), i.x = r.x * k.x, I.mapSize.x = r.x), i.y > h && (r.y = Math.floor(h / k.y), i.y = r.y * k.y, I.mapSize.y = r.y)), I.map === null) {
        const Z = this.type !== Br ? { minFilter: Me, magFilter: Me } : {};
        I.map = new Ri(i.x, i.y, Z), I.map.texture.name = O.name + ".shadowMap", I.camera.updateProjectionMatrix();
      }
      a.setRenderTarget(I.map), a.clear();
      const $ = I.getViewportCount();
      for (let Z = 0; Z < $; Z++) {
        const G = I.getViewport(Z);
        o.set(
          r.x * G.x,
          r.y * G.y,
          r.x * G.z,
          r.y * G.w
        ), L.viewport(o), I.updateMatrices(O, Z), n = I.getFrustum(), x(M, A, I.camera, O, this.type);
      }
      I.isPointLightShadow !== !0 && this.type === Br && _(I, A), I.needsUpdate = !1;
    }
    p.needsUpdate = !1, a.setRenderTarget(P, v, w);
  };
  function _(y, M) {
    const A = t.update(f);
    d.defines.VSM_SAMPLES !== y.blurSamples && (d.defines.VSM_SAMPLES = y.blurSamples, m.defines.VSM_SAMPLES = y.blurSamples, d.needsUpdate = !0, m.needsUpdate = !0), y.mapPass === null && (y.mapPass = new Ri(i.x, i.y)), d.uniforms.shadow_pass.value = y.map.texture, d.uniforms.resolution.value = y.mapSize, d.uniforms.radius.value = y.radius, a.setRenderTarget(y.mapPass), a.clear(), a.renderBufferDirect(M, null, A, d, f, null), m.uniforms.shadow_pass.value = y.mapPass.texture, m.uniforms.resolution.value = y.mapSize, m.uniforms.radius.value = y.radius, a.setRenderTarget(y.map), a.clear(), a.renderBufferDirect(M, null, A, m, f, null);
  }
  function b(y, M, A, P, v, w) {
    let L = null;
    const U = A.isPointLight === !0 ? y.customDistanceMaterial : y.customDepthMaterial;
    if (U !== void 0)
      L = U;
    else if (L = A.isPointLight === !0 ? l : s, a.localClippingEnabled && M.clipShadows === !0 && Array.isArray(M.clippingPlanes) && M.clippingPlanes.length !== 0 || M.displacementMap && M.displacementScale !== 0 || M.alphaMap && M.alphaTest > 0 || M.map && M.alphaTest > 0) {
      const j = L.uuid, O = M.uuid;
      let I = c[j];
      I === void 0 && (I = {}, c[j] = I);
      let k = I[O];
      k === void 0 && (k = L.clone(), I[O] = k), L = k;
    }
    return L.visible = M.visible, L.wireframe = M.wireframe, w === Br ? L.side = M.shadowSide !== null ? M.shadowSide : M.side : L.side = M.shadowSide !== null ? M.shadowSide : u[M.side], L.alphaMap = M.alphaMap, L.alphaTest = M.alphaTest, L.map = M.map, L.clipShadows = M.clipShadows, L.clippingPlanes = M.clippingPlanes, L.clipIntersection = M.clipIntersection, L.displacementMap = M.displacementMap, L.displacementScale = M.displacementScale, L.displacementBias = M.displacementBias, L.wireframeLinewidth = M.wireframeLinewidth, L.linewidth = M.linewidth, A.isPointLight === !0 && L.isMeshDistanceMaterial === !0 && (L.referencePosition.setFromMatrixPosition(A.matrixWorld), L.nearDistance = P, L.farDistance = v), L;
  }
  function x(y, M, A, P, v) {
    if (y.visible === !1)
      return;
    if (y.layers.test(M.layers) && (y.isMesh || y.isLine || y.isPoints) && (y.castShadow || y.receiveShadow && v === Br) && (!y.frustumCulled || n.intersectsObject(y))) {
      y.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse, y.matrixWorld);
      const U = t.update(y), j = y.material;
      if (Array.isArray(j)) {
        const O = U.groups;
        for (let I = 0, k = O.length; I < k; I++) {
          const $ = O[I], Z = j[$.materialIndex];
          if (Z && Z.visible) {
            const G = b(y, Z, P, A.near, A.far, v);
            a.renderBufferDirect(A, null, U, G, y, $);
          }
        }
      } else if (j.visible) {
        const O = b(y, j, P, A.near, A.far, v);
        a.renderBufferDirect(A, null, U, O, y, null);
      }
    }
    const L = y.children;
    for (let U = 0, j = L.length; U < j; U++)
      x(L[U], M, A, P, v);
  }
}
function w_(a, t, e) {
  const n = e.isWebGL2;
  function i() {
    let D = !1;
    const W = new Zt();
    let tt = null;
    const ht = new Zt(0, 0, 0, 0);
    return {
      setMask: function(gt) {
        tt !== gt && !D && (a.colorMask(gt, gt, gt, gt), tt = gt);
      },
      setLocked: function(gt) {
        D = gt;
      },
      setClear: function(gt, Nt, ce, ye, oi) {
        oi === !0 && (gt *= ye, Nt *= ye, ce *= ye), W.set(gt, Nt, ce, ye), ht.equals(W) === !1 && (a.clearColor(gt, Nt, ce, ye), ht.copy(W));
      },
      reset: function() {
        D = !1, tt = null, ht.set(-1, 0, 0, 0);
      }
    };
  }
  function r() {
    let D = !1, W = null, tt = null, ht = null;
    return {
      setTest: function(gt) {
        gt ? At(2929) : ft(2929);
      },
      setMask: function(gt) {
        W !== gt && !D && (a.depthMask(gt), W = gt);
      },
      setFunc: function(gt) {
        if (tt !== gt) {
          switch (gt) {
            case Xu:
              a.depthFunc(512);
              break;
            case qu:
              a.depthFunc(519);
              break;
            case Yu:
              a.depthFunc(513);
              break;
            case eo:
              a.depthFunc(515);
              break;
            case $u:
              a.depthFunc(514);
              break;
            case ju:
              a.depthFunc(518);
              break;
            case Zu:
              a.depthFunc(516);
              break;
            case Ku:
              a.depthFunc(517);
              break;
            default:
              a.depthFunc(515);
          }
          tt = gt;
        }
      },
      setLocked: function(gt) {
        D = gt;
      },
      setClear: function(gt) {
        ht !== gt && (a.clearDepth(gt), ht = gt);
      },
      reset: function() {
        D = !1, W = null, tt = null, ht = null;
      }
    };
  }
  function o() {
    let D = !1, W = null, tt = null, ht = null, gt = null, Nt = null, ce = null, ye = null, oi = null;
    return {
      setTest: function(Wt) {
        D || (Wt ? At(2960) : ft(2960));
      },
      setMask: function(Wt) {
        W !== Wt && !D && (a.stencilMask(Wt), W = Wt);
      },
      setFunc: function(Wt, Dn, Je) {
        (tt !== Wt || ht !== Dn || gt !== Je) && (a.stencilFunc(Wt, Dn, Je), tt = Wt, ht = Dn, gt = Je);
      },
      setOp: function(Wt, Dn, Je) {
        (Nt !== Wt || ce !== Dn || ye !== Je) && (a.stencilOp(Wt, Dn, Je), Nt = Wt, ce = Dn, ye = Je);
      },
      setLocked: function(Wt) {
        D = Wt;
      },
      setClear: function(Wt) {
        oi !== Wt && (a.clearStencil(Wt), oi = Wt);
      },
      reset: function() {
        D = !1, W = null, tt = null, ht = null, gt = null, Nt = null, ce = null, ye = null, oi = null;
      }
    };
  }
  const s = new i(), l = new r(), c = new o(), h = /* @__PURE__ */ new WeakMap(), u = /* @__PURE__ */ new WeakMap();
  let d = {}, m = {}, g = /* @__PURE__ */ new WeakMap(), f = [], p = null, _ = !1, b = null, x = null, y = null, M = null, A = null, P = null, v = null, w = !1, L = null, U = null, j = null, O = null, I = null;
  const k = a.getParameter(35661);
  let $ = !1, Z = 0;
  const G = a.getParameter(7938);
  G.indexOf("WebGL") !== -1 ? (Z = parseFloat(/^WebGL (\d)/.exec(G)[1]), $ = Z >= 1) : G.indexOf("OpenGL ES") !== -1 && (Z = parseFloat(/^OpenGL ES (\d)/.exec(G)[1]), $ = Z >= 2);
  let Q = null, K = {};
  const V = a.getParameter(3088), B = a.getParameter(2978), at = new Zt().fromArray(V), J = new Zt().fromArray(B);
  function st(D, W, tt) {
    const ht = new Uint8Array(4), gt = a.createTexture();
    a.bindTexture(D, gt), a.texParameteri(D, 10241, 9728), a.texParameteri(D, 10240, 9728);
    for (let Nt = 0; Nt < tt; Nt++)
      a.texImage2D(W + Nt, 0, 6408, 1, 1, 0, 6408, 5121, ht);
    return gt;
  }
  const q = {};
  q[3553] = st(3553, 3553, 1), q[34067] = st(34067, 34069, 6), s.setClear(0, 0, 0, 1), l.setClear(1), c.setClear(0), At(2929), l.setFunc(eo), ie(!1), Ee(rl), At(2884), le(Jn);
  function At(D) {
    d[D] !== !0 && (a.enable(D), d[D] = !0);
  }
  function ft(D) {
    d[D] !== !1 && (a.disable(D), d[D] = !1);
  }
  function xt(D, W) {
    return m[D] !== W ? (a.bindFramebuffer(D, W), m[D] = W, n && (D === 36009 && (m[36160] = W), D === 36160 && (m[36009] = W)), !0) : !1;
  }
  function dt(D, W) {
    let tt = f, ht = !1;
    if (D)
      if (tt = g.get(W), tt === void 0 && (tt = [], g.set(W, tt)), D.isWebGLMultipleRenderTargets) {
        const gt = D.texture;
        if (tt.length !== gt.length || tt[0] !== 36064) {
          for (let Nt = 0, ce = gt.length; Nt < ce; Nt++)
            tt[Nt] = 36064 + Nt;
          tt.length = gt.length, ht = !0;
        }
      } else
        tt[0] !== 36064 && (tt[0] = 36064, ht = !0);
    else
      tt[0] !== 1029 && (tt[0] = 1029, ht = !0);
    ht && (e.isWebGL2 ? a.drawBuffers(tt) : t.get("WEBGL_draw_buffers").drawBuffersWEBGL(tt));
  }
  function Ft(D) {
    return p !== D ? (a.useProgram(D), p = D, !0) : !1;
  }
  const St = {
    [sr]: 32774,
    [Ou]: 32778,
    [zu]: 32779
  };
  if (n)
    St[ll] = 32775, St[cl] = 32776;
  else {
    const D = t.get("EXT_blend_minmax");
    D !== null && (St[ll] = D.MIN_EXT, St[cl] = D.MAX_EXT);
  }
  const yt = {
    [Fu]: 0,
    [Nu]: 1,
    [Uu]: 768,
    [Wc]: 770,
    [Wu]: 776,
    [Vu]: 774,
    [Bu]: 772,
    [ku]: 769,
    [Xc]: 771,
    [Hu]: 775,
    [Gu]: 773
  };
  function le(D, W, tt, ht, gt, Nt, ce, ye) {
    if (D === Jn) {
      _ === !0 && (ft(3042), _ = !1);
      return;
    }
    if (_ === !1 && (At(3042), _ = !0), D !== Iu) {
      if (D !== b || ye !== w) {
        if ((x !== sr || A !== sr) && (a.blendEquation(32774), x = sr, A = sr), ye)
          switch (D) {
            case hr:
              a.blendFuncSeparate(1, 771, 1, 771);
              break;
            case sl:
              a.blendFunc(1, 1);
              break;
            case al:
              a.blendFuncSeparate(0, 769, 0, 1);
              break;
            case ol:
              a.blendFuncSeparate(0, 768, 0, 770);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", D);
              break;
          }
        else
          switch (D) {
            case hr:
              a.blendFuncSeparate(770, 771, 1, 771);
              break;
            case sl:
              a.blendFunc(770, 1);
              break;
            case al:
              a.blendFuncSeparate(0, 769, 0, 1);
              break;
            case ol:
              a.blendFunc(0, 768);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", D);
              break;
          }
        y = null, M = null, P = null, v = null, b = D, w = ye;
      }
      return;
    }
    gt = gt || W, Nt = Nt || tt, ce = ce || ht, (W !== x || gt !== A) && (a.blendEquationSeparate(St[W], St[gt]), x = W, A = gt), (tt !== y || ht !== M || Nt !== P || ce !== v) && (a.blendFuncSeparate(yt[tt], yt[ht], yt[Nt], yt[ce]), y = tt, M = ht, P = Nt, v = ce), b = D, w = !1;
  }
  function ne(D, W) {
    D.side === Lo ? ft(2884) : At(2884);
    let tt = D.side === ln;
    W && (tt = !tt), ie(tt), D.blending === hr && D.transparent === !1 ? le(Jn) : le(D.blending, D.blendEquation, D.blendSrc, D.blendDst, D.blendEquationAlpha, D.blendSrcAlpha, D.blendDstAlpha, D.premultipliedAlpha), l.setFunc(D.depthFunc), l.setTest(D.depthTest), l.setMask(D.depthWrite), s.setMask(D.colorWrite);
    const ht = D.stencilWrite;
    c.setTest(ht), ht && (c.setMask(D.stencilWriteMask), c.setFunc(D.stencilFunc, D.stencilRef, D.stencilFuncMask), c.setOp(D.stencilFail, D.stencilZFail, D.stencilZPass)), Ut(D.polygonOffset, D.polygonOffsetFactor, D.polygonOffsetUnits), D.alphaToCoverage === !0 ? At(32926) : ft(32926);
  }
  function ie(D) {
    L !== D && (D ? a.frontFace(2304) : a.frontFace(2305), L = D);
  }
  function Ee(D) {
    D !== Lu ? (At(2884), D !== U && (D === rl ? a.cullFace(1029) : D === Du ? a.cullFace(1028) : a.cullFace(1032))) : ft(2884), U = D;
  }
  function $t(D) {
    D !== j && ($ && a.lineWidth(D), j = D);
  }
  function Ut(D, W, tt) {
    D ? (At(32823), (O !== W || I !== tt) && (a.polygonOffset(W, tt), O = W, I = tt)) : ft(32823);
  }
  function Ke(D) {
    D ? At(3089) : ft(3089);
  }
  function De(D) {
    D === void 0 && (D = 33984 + k - 1), Q !== D && (a.activeTexture(D), Q = D);
  }
  function E(D, W, tt) {
    tt === void 0 && (Q === null ? tt = 33984 + k - 1 : tt = Q);
    let ht = K[tt];
    ht === void 0 && (ht = { type: void 0, texture: void 0 }, K[tt] = ht), (ht.type !== D || ht.texture !== W) && (Q !== tt && (a.activeTexture(tt), Q = tt), a.bindTexture(D, W || q[D]), ht.type = D, ht.texture = W);
  }
  function S() {
    const D = K[Q];
    D !== void 0 && D.type !== void 0 && (a.bindTexture(D.type, null), D.type = void 0, D.texture = void 0);
  }
  function H() {
    try {
      a.compressedTexImage2D.apply(a, arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function et() {
    try {
      a.compressedTexImage3D.apply(a, arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function it() {
    try {
      a.texSubImage2D.apply(a, arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function ot() {
    try {
      a.texSubImage3D.apply(a, arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function bt() {
    try {
      a.compressedTexSubImage2D.apply(a, arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function C() {
    try {
      a.compressedTexSubImage3D.apply(a, arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function z() {
    try {
      a.texStorage2D.apply(a, arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function ct() {
    try {
      a.texStorage3D.apply(a, arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function ut() {
    try {
      a.texImage2D.apply(a, arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function lt() {
    try {
      a.texImage3D.apply(a, arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function mt(D) {
    at.equals(D) === !1 && (a.scissor(D.x, D.y, D.z, D.w), at.copy(D));
  }
  function pt(D) {
    J.equals(D) === !1 && (a.viewport(D.x, D.y, D.z, D.w), J.copy(D));
  }
  function Ct(D, W) {
    let tt = u.get(W);
    tt === void 0 && (tt = /* @__PURE__ */ new WeakMap(), u.set(W, tt));
    let ht = tt.get(D);
    ht === void 0 && (ht = a.getUniformBlockIndex(W, D.name), tt.set(D, ht));
  }
  function Lt(D, W) {
    const ht = u.get(W).get(D);
    h.get(W) !== ht && (a.uniformBlockBinding(W, ht, D.__bindingPointIndex), h.set(W, ht));
  }
  function kt() {
    a.disable(3042), a.disable(2884), a.disable(2929), a.disable(32823), a.disable(3089), a.disable(2960), a.disable(32926), a.blendEquation(32774), a.blendFunc(1, 0), a.blendFuncSeparate(1, 0, 1, 0), a.colorMask(!0, !0, !0, !0), a.clearColor(0, 0, 0, 0), a.depthMask(!0), a.depthFunc(513), a.clearDepth(1), a.stencilMask(4294967295), a.stencilFunc(519, 0, 4294967295), a.stencilOp(7680, 7680, 7680), a.clearStencil(0), a.cullFace(1029), a.frontFace(2305), a.polygonOffset(0, 0), a.activeTexture(33984), a.bindFramebuffer(36160, null), n === !0 && (a.bindFramebuffer(36009, null), a.bindFramebuffer(36008, null)), a.useProgram(null), a.lineWidth(1), a.scissor(0, 0, a.canvas.width, a.canvas.height), a.viewport(0, 0, a.canvas.width, a.canvas.height), d = {}, Q = null, K = {}, m = {}, g = /* @__PURE__ */ new WeakMap(), f = [], p = null, _ = !1, b = null, x = null, y = null, M = null, A = null, P = null, v = null, w = !1, L = null, U = null, j = null, O = null, I = null, at.set(0, 0, a.canvas.width, a.canvas.height), J.set(0, 0, a.canvas.width, a.canvas.height), s.reset(), l.reset(), c.reset();
  }
  return {
    buffers: {
      color: s,
      depth: l,
      stencil: c
    },
    enable: At,
    disable: ft,
    bindFramebuffer: xt,
    drawBuffers: dt,
    useProgram: Ft,
    setBlending: le,
    setMaterial: ne,
    setFlipSided: ie,
    setCullFace: Ee,
    setLineWidth: $t,
    setPolygonOffset: Ut,
    setScissorTest: Ke,
    activeTexture: De,
    bindTexture: E,
    unbindTexture: S,
    compressedTexImage2D: H,
    compressedTexImage3D: et,
    texImage2D: ut,
    texImage3D: lt,
    updateUBOMapping: Ct,
    uniformBlockBinding: Lt,
    texStorage2D: z,
    texStorage3D: ct,
    texSubImage2D: it,
    texSubImage3D: ot,
    compressedTexSubImage2D: bt,
    compressedTexSubImage3D: C,
    scissor: mt,
    viewport: pt,
    reset: kt
  };
}
function T_(a, t, e, n, i, r, o) {
  const s = i.isWebGL2, l = i.maxTextures, c = i.maxCubemapSize, h = i.maxTextureSize, u = i.maxSamples, d = t.has("WEBGL_multisampled_render_to_texture") ? t.get("WEBGL_multisampled_render_to_texture") : null, m = typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent), g = /* @__PURE__ */ new WeakMap();
  let f;
  const p = /* @__PURE__ */ new WeakMap();
  let _ = !1;
  try {
    _ = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {
  }
  function b(E, S) {
    return _ ? (
      // eslint-disable-next-line compat/compat
      new OffscreenCanvas(E, S)
    ) : Qr("canvas");
  }
  function x(E, S, H, et) {
    let it = 1;
    if ((E.width > et || E.height > et) && (it = et / Math.max(E.width, E.height)), it < 1 || S === !0)
      if (typeof HTMLImageElement < "u" && E instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && E instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && E instanceof ImageBitmap) {
        const ot = S ? Ws : Math.floor, bt = ot(it * E.width), C = ot(it * E.height);
        f === void 0 && (f = b(bt, C));
        const z = H ? b(bt, C) : f;
        return z.width = bt, z.height = C, z.getContext("2d").drawImage(E, 0, 0, bt, C), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + E.width + "x" + E.height + ") to (" + bt + "x" + C + ")."), z;
      } else
        return "data" in E && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + E.width + "x" + E.height + ")."), E;
    return E;
  }
  function y(E) {
    return lo(E.width) && lo(E.height);
  }
  function M(E) {
    return s ? !1 : E.wrapS !== pn || E.wrapT !== pn || E.minFilter !== Me && E.minFilter !== Xe;
  }
  function A(E, S) {
    return E.generateMipmaps && S && E.minFilter !== Me && E.minFilter !== Xe;
  }
  function P(E) {
    a.generateMipmap(E);
  }
  function v(E, S, H, et, it = !1) {
    if (s === !1)
      return S;
    if (E !== null) {
      if (a[E] !== void 0)
        return a[E];
      console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + E + "'");
    }
    let ot = S;
    return S === 6403 && (H === 5126 && (ot = 33326), H === 5131 && (ot = 33325), H === 5121 && (ot = 33321)), S === 33319 && (H === 5126 && (ot = 33328), H === 5131 && (ot = 33327), H === 5121 && (ot = 33323)), S === 6408 && (H === 5126 && (ot = 34836), H === 5131 && (ot = 34842), H === 5121 && (ot = et === Ht && it === !1 ? 35907 : 32856), H === 32819 && (ot = 32854), H === 32820 && (ot = 32855)), (ot === 33325 || ot === 33326 || ot === 33327 || ot === 33328 || ot === 34842 || ot === 34836) && t.get("EXT_color_buffer_float"), ot;
  }
  function w(E, S, H) {
    return A(E, H) === !0 || E.isFramebufferTexture && E.minFilter !== Me && E.minFilter !== Xe ? Math.log2(Math.max(S.width, S.height)) + 1 : E.mipmaps !== void 0 && E.mipmaps.length > 0 ? E.mipmaps.length : E.isCompressedTexture && Array.isArray(E.image) ? S.mipmaps.length : 1;
  }
  function L(E) {
    return E === Me || E === hl || E === ha ? 9728 : 9729;
  }
  function U(E) {
    const S = E.target;
    S.removeEventListener("dispose", U), O(S), S.isVideoTexture && g.delete(S);
  }
  function j(E) {
    const S = E.target;
    S.removeEventListener("dispose", j), k(S);
  }
  function O(E) {
    const S = n.get(E);
    if (S.__webglInit === void 0)
      return;
    const H = E.source, et = p.get(H);
    if (et) {
      const it = et[S.__cacheKey];
      it.usedTimes--, it.usedTimes === 0 && I(E), Object.keys(et).length === 0 && p.delete(H);
    }
    n.remove(E);
  }
  function I(E) {
    const S = n.get(E);
    a.deleteTexture(S.__webglTexture);
    const H = E.source, et = p.get(H);
    delete et[S.__cacheKey], o.memory.textures--;
  }
  function k(E) {
    const S = E.texture, H = n.get(E), et = n.get(S);
    if (et.__webglTexture !== void 0 && (a.deleteTexture(et.__webglTexture), o.memory.textures--), E.depthTexture && E.depthTexture.dispose(), E.isWebGLCubeRenderTarget)
      for (let it = 0; it < 6; it++)
        a.deleteFramebuffer(H.__webglFramebuffer[it]), H.__webglDepthbuffer && a.deleteRenderbuffer(H.__webglDepthbuffer[it]);
    else {
      if (a.deleteFramebuffer(H.__webglFramebuffer), H.__webglDepthbuffer && a.deleteRenderbuffer(H.__webglDepthbuffer), H.__webglMultisampledFramebuffer && a.deleteFramebuffer(H.__webglMultisampledFramebuffer), H.__webglColorRenderbuffer)
        for (let it = 0; it < H.__webglColorRenderbuffer.length; it++)
          H.__webglColorRenderbuffer[it] && a.deleteRenderbuffer(H.__webglColorRenderbuffer[it]);
      H.__webglDepthRenderbuffer && a.deleteRenderbuffer(H.__webglDepthRenderbuffer);
    }
    if (E.isWebGLMultipleRenderTargets)
      for (let it = 0, ot = S.length; it < ot; it++) {
        const bt = n.get(S[it]);
        bt.__webglTexture && (a.deleteTexture(bt.__webglTexture), o.memory.textures--), n.remove(S[it]);
      }
    n.remove(S), n.remove(E);
  }
  let $ = 0;
  function Z() {
    $ = 0;
  }
  function G() {
    const E = $;
    return E >= l && console.warn("THREE.WebGLTextures: Trying to use " + E + " texture units while this GPU supports only " + l), $ += 1, E;
  }
  function Q(E) {
    const S = [];
    return S.push(E.wrapS), S.push(E.wrapT), S.push(E.wrapR || 0), S.push(E.magFilter), S.push(E.minFilter), S.push(E.anisotropy), S.push(E.internalFormat), S.push(E.format), S.push(E.type), S.push(E.generateMipmaps), S.push(E.premultiplyAlpha), S.push(E.flipY), S.push(E.unpackAlignment), S.push(E.encoding), S.join();
  }
  function K(E, S) {
    const H = n.get(E);
    if (E.isVideoTexture && Ke(E), E.isRenderTargetTexture === !1 && E.version > 0 && H.__version !== E.version) {
      const et = E.image;
      if (et === null)
        console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
      else if (et.complete === !1)
        console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
      else {
        ft(H, E, S);
        return;
      }
    }
    e.bindTexture(3553, H.__webglTexture, 33984 + S);
  }
  function V(E, S) {
    const H = n.get(E);
    if (E.version > 0 && H.__version !== E.version) {
      ft(H, E, S);
      return;
    }
    e.bindTexture(35866, H.__webglTexture, 33984 + S);
  }
  function B(E, S) {
    const H = n.get(E);
    if (E.version > 0 && H.__version !== E.version) {
      ft(H, E, S);
      return;
    }
    e.bindTexture(32879, H.__webglTexture, 33984 + S);
  }
  function at(E, S) {
    const H = n.get(E);
    if (E.version > 0 && H.__version !== E.version) {
      xt(H, E, S);
      return;
    }
    e.bindTexture(34067, H.__webglTexture, 33984 + S);
  }
  const J = {
    [ro]: 10497,
    [pn]: 33071,
    [so]: 33648
  }, st = {
    [Me]: 9728,
    [hl]: 9984,
    [ha]: 9986,
    [Xe]: 9729,
    [ed]: 9985,
    [Zr]: 9987
  };
  function q(E, S, H) {
    if (H ? (a.texParameteri(E, 10242, J[S.wrapS]), a.texParameteri(E, 10243, J[S.wrapT]), (E === 32879 || E === 35866) && a.texParameteri(E, 32882, J[S.wrapR]), a.texParameteri(E, 10240, st[S.magFilter]), a.texParameteri(E, 10241, st[S.minFilter])) : (a.texParameteri(E, 10242, 33071), a.texParameteri(E, 10243, 33071), (E === 32879 || E === 35866) && a.texParameteri(E, 32882, 33071), (S.wrapS !== pn || S.wrapT !== pn) && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."), a.texParameteri(E, 10240, L(S.magFilter)), a.texParameteri(E, 10241, L(S.minFilter)), S.minFilter !== Me && S.minFilter !== Xe && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")), t.has("EXT_texture_filter_anisotropic") === !0) {
      const et = t.get("EXT_texture_filter_anisotropic");
      if (S.magFilter === Me || S.minFilter !== ha && S.minFilter !== Zr || S.type === bi && t.has("OES_texture_float_linear") === !1 || s === !1 && S.type === Kr && t.has("OES_texture_half_float_linear") === !1)
        return;
      (S.anisotropy > 1 || n.get(S).__currentAnisotropy) && (a.texParameterf(E, et.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(S.anisotropy, i.getMaxAnisotropy())), n.get(S).__currentAnisotropy = S.anisotropy);
    }
  }
  function At(E, S) {
    let H = !1;
    E.__webglInit === void 0 && (E.__webglInit = !0, S.addEventListener("dispose", U));
    const et = S.source;
    let it = p.get(et);
    it === void 0 && (it = {}, p.set(et, it));
    const ot = Q(S);
    if (ot !== E.__cacheKey) {
      it[ot] === void 0 && (it[ot] = {
        texture: a.createTexture(),
        usedTimes: 0
      }, o.memory.textures++, H = !0), it[ot].usedTimes++;
      const bt = it[E.__cacheKey];
      bt !== void 0 && (it[E.__cacheKey].usedTimes--, bt.usedTimes === 0 && I(S)), E.__cacheKey = ot, E.__webglTexture = it[ot].texture;
    }
    return H;
  }
  function ft(E, S, H) {
    let et = 3553;
    (S.isDataArrayTexture || S.isCompressedArrayTexture) && (et = 35866), S.isData3DTexture && (et = 32879);
    const it = At(E, S), ot = S.source;
    e.bindTexture(et, E.__webglTexture, 33984 + H);
    const bt = n.get(ot);
    if (ot.version !== bt.__version || it === !0) {
      e.activeTexture(33984 + H), a.pixelStorei(37440, S.flipY), a.pixelStorei(37441, S.premultiplyAlpha), a.pixelStorei(3317, S.unpackAlignment), a.pixelStorei(37443, 0);
      const C = M(S) && y(S.image) === !1;
      let z = x(S.image, C, !1, h);
      z = De(S, z);
      const ct = y(z) || s, ut = r.convert(S.format, S.encoding);
      let lt = r.convert(S.type), mt = v(S.internalFormat, ut, lt, S.encoding, S.isVideoTexture);
      q(et, S, ct);
      let pt;
      const Ct = S.mipmaps, Lt = s && S.isVideoTexture !== !0, kt = bt.__version === void 0 || it === !0, D = w(S, z, ct);
      if (S.isDepthTexture)
        mt = 6402, s ? S.type === bi ? mt = 36012 : S.type === yi ? mt = 33190 : S.type === ur ? mt = 35056 : mt = 33189 : S.type === bi && console.error("WebGLRenderer: Floating point depth texture requires WebGL2."), S.format === Si && mt === 6402 && S.type !== Jc && S.type !== yi && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."), S.type = yi, lt = r.convert(S.type)), S.format === _r && mt === 6402 && (mt = 34041, S.type !== ur && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."), S.type = ur, lt = r.convert(S.type))), kt && (Lt ? e.texStorage2D(3553, 1, mt, z.width, z.height) : e.texImage2D(3553, 0, mt, z.width, z.height, 0, ut, lt, null));
      else if (S.isDataTexture)
        if (Ct.length > 0 && ct) {
          Lt && kt && e.texStorage2D(3553, D, mt, Ct[0].width, Ct[0].height);
          for (let W = 0, tt = Ct.length; W < tt; W++)
            pt = Ct[W], Lt ? e.texSubImage2D(3553, W, 0, 0, pt.width, pt.height, ut, lt, pt.data) : e.texImage2D(3553, W, mt, pt.width, pt.height, 0, ut, lt, pt.data);
          S.generateMipmaps = !1;
        } else
          Lt ? (kt && e.texStorage2D(3553, D, mt, z.width, z.height), e.texSubImage2D(3553, 0, 0, 0, z.width, z.height, ut, lt, z.data)) : e.texImage2D(3553, 0, mt, z.width, z.height, 0, ut, lt, z.data);
      else if (S.isCompressedTexture)
        if (S.isCompressedArrayTexture) {
          Lt && kt && e.texStorage3D(35866, D, mt, Ct[0].width, Ct[0].height, z.depth);
          for (let W = 0, tt = Ct.length; W < tt; W++)
            pt = Ct[W], S.format !== mn ? ut !== null ? Lt ? e.compressedTexSubImage3D(35866, W, 0, 0, 0, pt.width, pt.height, z.depth, ut, pt.data, 0, 0) : e.compressedTexImage3D(35866, W, mt, pt.width, pt.height, z.depth, 0, pt.data, 0, 0) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : Lt ? e.texSubImage3D(35866, W, 0, 0, 0, pt.width, pt.height, z.depth, ut, lt, pt.data) : e.texImage3D(35866, W, mt, pt.width, pt.height, z.depth, 0, ut, lt, pt.data);
        } else {
          Lt && kt && e.texStorage2D(3553, D, mt, Ct[0].width, Ct[0].height);
          for (let W = 0, tt = Ct.length; W < tt; W++)
            pt = Ct[W], S.format !== mn ? ut !== null ? Lt ? e.compressedTexSubImage2D(3553, W, 0, 0, pt.width, pt.height, ut, pt.data) : e.compressedTexImage2D(3553, W, mt, pt.width, pt.height, 0, pt.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : Lt ? e.texSubImage2D(3553, W, 0, 0, pt.width, pt.height, ut, lt, pt.data) : e.texImage2D(3553, W, mt, pt.width, pt.height, 0, ut, lt, pt.data);
        }
      else if (S.isDataArrayTexture)
        Lt ? (kt && e.texStorage3D(35866, D, mt, z.width, z.height, z.depth), e.texSubImage3D(35866, 0, 0, 0, 0, z.width, z.height, z.depth, ut, lt, z.data)) : e.texImage3D(35866, 0, mt, z.width, z.height, z.depth, 0, ut, lt, z.data);
      else if (S.isData3DTexture)
        Lt ? (kt && e.texStorage3D(32879, D, mt, z.width, z.height, z.depth), e.texSubImage3D(32879, 0, 0, 0, 0, z.width, z.height, z.depth, ut, lt, z.data)) : e.texImage3D(32879, 0, mt, z.width, z.height, z.depth, 0, ut, lt, z.data);
      else if (S.isFramebufferTexture) {
        if (kt)
          if (Lt)
            e.texStorage2D(3553, D, mt, z.width, z.height);
          else {
            let W = z.width, tt = z.height;
            for (let ht = 0; ht < D; ht++)
              e.texImage2D(3553, ht, mt, W, tt, 0, ut, lt, null), W >>= 1, tt >>= 1;
          }
      } else if (Ct.length > 0 && ct) {
        Lt && kt && e.texStorage2D(3553, D, mt, Ct[0].width, Ct[0].height);
        for (let W = 0, tt = Ct.length; W < tt; W++)
          pt = Ct[W], Lt ? e.texSubImage2D(3553, W, 0, 0, ut, lt, pt) : e.texImage2D(3553, W, mt, ut, lt, pt);
        S.generateMipmaps = !1;
      } else
        Lt ? (kt && e.texStorage2D(3553, D, mt, z.width, z.height), e.texSubImage2D(3553, 0, 0, 0, ut, lt, z)) : e.texImage2D(3553, 0, mt, ut, lt, z);
      A(S, ct) && P(et), bt.__version = ot.version, S.onUpdate && S.onUpdate(S);
    }
    E.__version = S.version;
  }
  function xt(E, S, H) {
    if (S.image.length !== 6)
      return;
    const et = At(E, S), it = S.source;
    e.bindTexture(34067, E.__webglTexture, 33984 + H);
    const ot = n.get(it);
    if (it.version !== ot.__version || et === !0) {
      e.activeTexture(33984 + H), a.pixelStorei(37440, S.flipY), a.pixelStorei(37441, S.premultiplyAlpha), a.pixelStorei(3317, S.unpackAlignment), a.pixelStorei(37443, 0);
      const bt = S.isCompressedTexture || S.image[0].isCompressedTexture, C = S.image[0] && S.image[0].isDataTexture, z = [];
      for (let W = 0; W < 6; W++)
        !bt && !C ? z[W] = x(S.image[W], !1, !0, c) : z[W] = C ? S.image[W].image : S.image[W], z[W] = De(S, z[W]);
      const ct = z[0], ut = y(ct) || s, lt = r.convert(S.format, S.encoding), mt = r.convert(S.type), pt = v(S.internalFormat, lt, mt, S.encoding), Ct = s && S.isVideoTexture !== !0, Lt = ot.__version === void 0 || et === !0;
      let kt = w(S, ct, ut);
      q(34067, S, ut);
      let D;
      if (bt) {
        Ct && Lt && e.texStorage2D(34067, kt, pt, ct.width, ct.height);
        for (let W = 0; W < 6; W++) {
          D = z[W].mipmaps;
          for (let tt = 0; tt < D.length; tt++) {
            const ht = D[tt];
            S.format !== mn ? lt !== null ? Ct ? e.compressedTexSubImage2D(34069 + W, tt, 0, 0, ht.width, ht.height, lt, ht.data) : e.compressedTexImage2D(34069 + W, tt, pt, ht.width, ht.height, 0, ht.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : Ct ? e.texSubImage2D(34069 + W, tt, 0, 0, ht.width, ht.height, lt, mt, ht.data) : e.texImage2D(34069 + W, tt, pt, ht.width, ht.height, 0, lt, mt, ht.data);
          }
        }
      } else {
        D = S.mipmaps, Ct && Lt && (D.length > 0 && kt++, e.texStorage2D(34067, kt, pt, z[0].width, z[0].height));
        for (let W = 0; W < 6; W++)
          if (C) {
            Ct ? e.texSubImage2D(34069 + W, 0, 0, 0, z[W].width, z[W].height, lt, mt, z[W].data) : e.texImage2D(34069 + W, 0, pt, z[W].width, z[W].height, 0, lt, mt, z[W].data);
            for (let tt = 0; tt < D.length; tt++) {
              const gt = D[tt].image[W].image;
              Ct ? e.texSubImage2D(34069 + W, tt + 1, 0, 0, gt.width, gt.height, lt, mt, gt.data) : e.texImage2D(34069 + W, tt + 1, pt, gt.width, gt.height, 0, lt, mt, gt.data);
            }
          } else {
            Ct ? e.texSubImage2D(34069 + W, 0, 0, 0, lt, mt, z[W]) : e.texImage2D(34069 + W, 0, pt, lt, mt, z[W]);
            for (let tt = 0; tt < D.length; tt++) {
              const ht = D[tt];
              Ct ? e.texSubImage2D(34069 + W, tt + 1, 0, 0, lt, mt, ht.image[W]) : e.texImage2D(34069 + W, tt + 1, pt, lt, mt, ht.image[W]);
            }
          }
      }
      A(S, ut) && P(34067), ot.__version = it.version, S.onUpdate && S.onUpdate(S);
    }
    E.__version = S.version;
  }
  function dt(E, S, H, et, it) {
    const ot = r.convert(H.format, H.encoding), bt = r.convert(H.type), C = v(H.internalFormat, ot, bt, H.encoding);
    n.get(S).__hasExternalTextures || (it === 32879 || it === 35866 ? e.texImage3D(it, 0, C, S.width, S.height, S.depth, 0, ot, bt, null) : e.texImage2D(it, 0, C, S.width, S.height, 0, ot, bt, null)), e.bindFramebuffer(36160, E), Ut(S) ? d.framebufferTexture2DMultisampleEXT(36160, et, it, n.get(H).__webglTexture, 0, $t(S)) : (it === 3553 || it >= 34069 && it <= 34074) && a.framebufferTexture2D(36160, et, it, n.get(H).__webglTexture, 0), e.bindFramebuffer(36160, null);
  }
  function Ft(E, S, H) {
    if (a.bindRenderbuffer(36161, E), S.depthBuffer && !S.stencilBuffer) {
      let et = 33189;
      if (H || Ut(S)) {
        const it = S.depthTexture;
        it && it.isDepthTexture && (it.type === bi ? et = 36012 : it.type === yi && (et = 33190));
        const ot = $t(S);
        Ut(S) ? d.renderbufferStorageMultisampleEXT(36161, ot, et, S.width, S.height) : a.renderbufferStorageMultisample(36161, ot, et, S.width, S.height);
      } else
        a.renderbufferStorage(36161, et, S.width, S.height);
      a.framebufferRenderbuffer(36160, 36096, 36161, E);
    } else if (S.depthBuffer && S.stencilBuffer) {
      const et = $t(S);
      H && Ut(S) === !1 ? a.renderbufferStorageMultisample(36161, et, 35056, S.width, S.height) : Ut(S) ? d.renderbufferStorageMultisampleEXT(36161, et, 35056, S.width, S.height) : a.renderbufferStorage(36161, 34041, S.width, S.height), a.framebufferRenderbuffer(36160, 33306, 36161, E);
    } else {
      const et = S.isWebGLMultipleRenderTargets === !0 ? S.texture : [S.texture];
      for (let it = 0; it < et.length; it++) {
        const ot = et[it], bt = r.convert(ot.format, ot.encoding), C = r.convert(ot.type), z = v(ot.internalFormat, bt, C, ot.encoding), ct = $t(S);
        H && Ut(S) === !1 ? a.renderbufferStorageMultisample(36161, ct, z, S.width, S.height) : Ut(S) ? d.renderbufferStorageMultisampleEXT(36161, ct, z, S.width, S.height) : a.renderbufferStorage(36161, z, S.width, S.height);
      }
    }
    a.bindRenderbuffer(36161, null);
  }
  function St(E, S) {
    if (S && S.isWebGLCubeRenderTarget)
      throw new Error("Depth Texture with cube render targets is not supported");
    if (e.bindFramebuffer(36160, E), !(S.depthTexture && S.depthTexture.isDepthTexture))
      throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
    (!n.get(S.depthTexture).__webglTexture || S.depthTexture.image.width !== S.width || S.depthTexture.image.height !== S.height) && (S.depthTexture.image.width = S.width, S.depthTexture.image.height = S.height, S.depthTexture.needsUpdate = !0), K(S.depthTexture, 0);
    const et = n.get(S.depthTexture).__webglTexture, it = $t(S);
    if (S.depthTexture.format === Si)
      Ut(S) ? d.framebufferTexture2DMultisampleEXT(36160, 36096, 3553, et, 0, it) : a.framebufferTexture2D(36160, 36096, 3553, et, 0);
    else if (S.depthTexture.format === _r)
      Ut(S) ? d.framebufferTexture2DMultisampleEXT(36160, 33306, 3553, et, 0, it) : a.framebufferTexture2D(36160, 33306, 3553, et, 0);
    else
      throw new Error("Unknown depthTexture format");
  }
  function yt(E) {
    const S = n.get(E), H = E.isWebGLCubeRenderTarget === !0;
    if (E.depthTexture && !S.__autoAllocateDepthBuffer) {
      if (H)
        throw new Error("target.depthTexture not supported in Cube render targets");
      St(S.__webglFramebuffer, E);
    } else if (H) {
      S.__webglDepthbuffer = [];
      for (let et = 0; et < 6; et++)
        e.bindFramebuffer(36160, S.__webglFramebuffer[et]), S.__webglDepthbuffer[et] = a.createRenderbuffer(), Ft(S.__webglDepthbuffer[et], E, !1);
    } else
      e.bindFramebuffer(36160, S.__webglFramebuffer), S.__webglDepthbuffer = a.createRenderbuffer(), Ft(S.__webglDepthbuffer, E, !1);
    e.bindFramebuffer(36160, null);
  }
  function le(E, S, H) {
    const et = n.get(E);
    S !== void 0 && dt(et.__webglFramebuffer, E, E.texture, 36064, 3553), H !== void 0 && yt(E);
  }
  function ne(E) {
    const S = E.texture, H = n.get(E), et = n.get(S);
    E.addEventListener("dispose", j), E.isWebGLMultipleRenderTargets !== !0 && (et.__webglTexture === void 0 && (et.__webglTexture = a.createTexture()), et.__version = S.version, o.memory.textures++);
    const it = E.isWebGLCubeRenderTarget === !0, ot = E.isWebGLMultipleRenderTargets === !0, bt = y(E) || s;
    if (it) {
      H.__webglFramebuffer = [];
      for (let C = 0; C < 6; C++)
        H.__webglFramebuffer[C] = a.createFramebuffer();
    } else {
      if (H.__webglFramebuffer = a.createFramebuffer(), ot)
        if (i.drawBuffers) {
          const C = E.texture;
          for (let z = 0, ct = C.length; z < ct; z++) {
            const ut = n.get(C[z]);
            ut.__webglTexture === void 0 && (ut.__webglTexture = a.createTexture(), o.memory.textures++);
          }
        } else
          console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");
      if (s && E.samples > 0 && Ut(E) === !1) {
        const C = ot ? S : [S];
        H.__webglMultisampledFramebuffer = a.createFramebuffer(), H.__webglColorRenderbuffer = [], e.bindFramebuffer(36160, H.__webglMultisampledFramebuffer);
        for (let z = 0; z < C.length; z++) {
          const ct = C[z];
          H.__webglColorRenderbuffer[z] = a.createRenderbuffer(), a.bindRenderbuffer(36161, H.__webglColorRenderbuffer[z]);
          const ut = r.convert(ct.format, ct.encoding), lt = r.convert(ct.type), mt = v(ct.internalFormat, ut, lt, ct.encoding, E.isXRRenderTarget === !0), pt = $t(E);
          a.renderbufferStorageMultisample(36161, pt, mt, E.width, E.height), a.framebufferRenderbuffer(36160, 36064 + z, 36161, H.__webglColorRenderbuffer[z]);
        }
        a.bindRenderbuffer(36161, null), E.depthBuffer && (H.__webglDepthRenderbuffer = a.createRenderbuffer(), Ft(H.__webglDepthRenderbuffer, E, !0)), e.bindFramebuffer(36160, null);
      }
    }
    if (it) {
      e.bindTexture(34067, et.__webglTexture), q(34067, S, bt);
      for (let C = 0; C < 6; C++)
        dt(H.__webglFramebuffer[C], E, S, 36064, 34069 + C);
      A(S, bt) && P(34067), e.unbindTexture();
    } else if (ot) {
      const C = E.texture;
      for (let z = 0, ct = C.length; z < ct; z++) {
        const ut = C[z], lt = n.get(ut);
        e.bindTexture(3553, lt.__webglTexture), q(3553, ut, bt), dt(H.__webglFramebuffer, E, ut, 36064 + z, 3553), A(ut, bt) && P(3553);
      }
      e.unbindTexture();
    } else {
      let C = 3553;
      (E.isWebGL3DRenderTarget || E.isWebGLArrayRenderTarget) && (s ? C = E.isWebGL3DRenderTarget ? 32879 : 35866 : console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")), e.bindTexture(C, et.__webglTexture), q(C, S, bt), dt(H.__webglFramebuffer, E, S, 36064, C), A(S, bt) && P(C), e.unbindTexture();
    }
    E.depthBuffer && yt(E);
  }
  function ie(E) {
    const S = y(E) || s, H = E.isWebGLMultipleRenderTargets === !0 ? E.texture : [E.texture];
    for (let et = 0, it = H.length; et < it; et++) {
      const ot = H[et];
      if (A(ot, S)) {
        const bt = E.isWebGLCubeRenderTarget ? 34067 : 3553, C = n.get(ot).__webglTexture;
        e.bindTexture(bt, C), P(bt), e.unbindTexture();
      }
    }
  }
  function Ee(E) {
    if (s && E.samples > 0 && Ut(E) === !1) {
      const S = E.isWebGLMultipleRenderTargets ? E.texture : [E.texture], H = E.width, et = E.height;
      let it = 16384;
      const ot = [], bt = E.stencilBuffer ? 33306 : 36096, C = n.get(E), z = E.isWebGLMultipleRenderTargets === !0;
      if (z)
        for (let ct = 0; ct < S.length; ct++)
          e.bindFramebuffer(36160, C.__webglMultisampledFramebuffer), a.framebufferRenderbuffer(36160, 36064 + ct, 36161, null), e.bindFramebuffer(36160, C.__webglFramebuffer), a.framebufferTexture2D(36009, 36064 + ct, 3553, null, 0);
      e.bindFramebuffer(36008, C.__webglMultisampledFramebuffer), e.bindFramebuffer(36009, C.__webglFramebuffer);
      for (let ct = 0; ct < S.length; ct++) {
        ot.push(36064 + ct), E.depthBuffer && ot.push(bt);
        const ut = C.__ignoreDepthValues !== void 0 ? C.__ignoreDepthValues : !1;
        if (ut === !1 && (E.depthBuffer && (it |= 256), E.stencilBuffer && (it |= 1024)), z && a.framebufferRenderbuffer(36008, 36064, 36161, C.__webglColorRenderbuffer[ct]), ut === !0 && (a.invalidateFramebuffer(36008, [bt]), a.invalidateFramebuffer(36009, [bt])), z) {
          const lt = n.get(S[ct]).__webglTexture;
          a.framebufferTexture2D(36009, 36064, 3553, lt, 0);
        }
        a.blitFramebuffer(0, 0, H, et, 0, 0, H, et, it, 9728), m && a.invalidateFramebuffer(36008, ot);
      }
      if (e.bindFramebuffer(36008, null), e.bindFramebuffer(36009, null), z)
        for (let ct = 0; ct < S.length; ct++) {
          e.bindFramebuffer(36160, C.__webglMultisampledFramebuffer), a.framebufferRenderbuffer(36160, 36064 + ct, 36161, C.__webglColorRenderbuffer[ct]);
          const ut = n.get(S[ct]).__webglTexture;
          e.bindFramebuffer(36160, C.__webglFramebuffer), a.framebufferTexture2D(36009, 36064 + ct, 3553, ut, 0);
        }
      e.bindFramebuffer(36009, C.__webglMultisampledFramebuffer);
    }
  }
  function $t(E) {
    return Math.min(u, E.samples);
  }
  function Ut(E) {
    const S = n.get(E);
    return s && E.samples > 0 && t.has("WEBGL_multisampled_render_to_texture") === !0 && S.__useRenderToTexture !== !1;
  }
  function Ke(E) {
    const S = o.render.frame;
    g.get(E) !== S && (g.set(E, S), E.update());
  }
  function De(E, S) {
    const H = E.encoding, et = E.format, it = E.type;
    return E.isCompressedTexture === !0 || E.isVideoTexture === !0 || E.format === oo || H !== Di && (H === Ht ? s === !1 ? t.has("EXT_sRGB") === !0 && et === mn ? (E.format = oo, E.minFilter = Xe, E.generateMipmaps = !1) : S = nh.sRGBToLinear(S) : (et !== mn || it !== Li) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture encoding:", H)), S;
  }
  this.allocateTextureUnit = G, this.resetTextureUnits = Z, this.setTexture2D = K, this.setTexture2DArray = V, this.setTexture3D = B, this.setTextureCube = at, this.rebindTextures = le, this.setupRenderTarget = ne, this.updateRenderTargetMipmap = ie, this.updateMultisampleRenderTarget = Ee, this.setupDepthRenderbuffer = yt, this.setupFrameBufferTexture = dt, this.useMultisampledRTT = Ut;
}
function E_(a, t, e) {
  const n = e.isWebGL2;
  function i(r, o = null) {
    let s;
    if (r === Li)
      return 5121;
    if (r === sd)
      return 32819;
    if (r === ad)
      return 32820;
    if (r === nd)
      return 5120;
    if (r === id)
      return 5122;
    if (r === Jc)
      return 5123;
    if (r === rd)
      return 5124;
    if (r === yi)
      return 5125;
    if (r === bi)
      return 5126;
    if (r === Kr)
      return n ? 5131 : (s = t.get("OES_texture_half_float"), s !== null ? s.HALF_FLOAT_OES : null);
    if (r === od)
      return 6406;
    if (r === mn)
      return 6408;
    if (r === cd)
      return 6409;
    if (r === hd)
      return 6410;
    if (r === Si)
      return 6402;
    if (r === _r)
      return 34041;
    if (r === ld)
      return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"), 6408;
    if (r === oo)
      return s = t.get("EXT_sRGB"), s !== null ? s.SRGB_ALPHA_EXT : null;
    if (r === ud)
      return 6403;
    if (r === dd)
      return 36244;
    if (r === fd)
      return 33319;
    if (r === pd)
      return 33320;
    if (r === md)
      return 36249;
    if (r === ua || r === da || r === fa || r === pa)
      if (o === Ht)
        if (s = t.get("WEBGL_compressed_texture_s3tc_srgb"), s !== null) {
          if (r === ua)
            return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (r === da)
            return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (r === fa)
            return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (r === pa)
            return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else
          return null;
      else if (s = t.get("WEBGL_compressed_texture_s3tc"), s !== null) {
        if (r === ua)
          return s.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (r === da)
          return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (r === fa)
          return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (r === pa)
          return s.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else
        return null;
    if (r === ul || r === dl || r === fl || r === pl)
      if (s = t.get("WEBGL_compressed_texture_pvrtc"), s !== null) {
        if (r === ul)
          return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (r === dl)
          return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (r === fl)
          return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (r === pl)
          return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else
        return null;
    if (r === gd)
      return s = t.get("WEBGL_compressed_texture_etc1"), s !== null ? s.COMPRESSED_RGB_ETC1_WEBGL : null;
    if (r === ml || r === gl)
      if (s = t.get("WEBGL_compressed_texture_etc"), s !== null) {
        if (r === ml)
          return o === Ht ? s.COMPRESSED_SRGB8_ETC2 : s.COMPRESSED_RGB8_ETC2;
        if (r === gl)
          return o === Ht ? s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : s.COMPRESSED_RGBA8_ETC2_EAC;
      } else
        return null;
    if (r === _l || r === vl || r === xl || r === yl || r === bl || r === Ml || r === Sl || r === wl || r === Tl || r === El || r === Al || r === Cl || r === Pl || r === Ll)
      if (s = t.get("WEBGL_compressed_texture_astc"), s !== null) {
        if (r === _l)
          return o === Ht ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : s.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (r === vl)
          return o === Ht ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : s.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (r === xl)
          return o === Ht ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : s.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (r === yl)
          return o === Ht ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : s.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (r === bl)
          return o === Ht ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : s.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (r === Ml)
          return o === Ht ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : s.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (r === Sl)
          return o === Ht ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : s.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (r === wl)
          return o === Ht ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : s.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (r === Tl)
          return o === Ht ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : s.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (r === El)
          return o === Ht ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : s.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (r === Al)
          return o === Ht ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : s.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (r === Cl)
          return o === Ht ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : s.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (r === Pl)
          return o === Ht ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : s.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (r === Ll)
          return o === Ht ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : s.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else
        return null;
    if (r === Dl)
      if (s = t.get("EXT_texture_compression_bptc"), s !== null) {
        if (r === Dl)
          return o === Ht ? s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : s.COMPRESSED_RGBA_BPTC_UNORM_EXT;
      } else
        return null;
    return r === ur ? n ? 34042 : (s = t.get("WEBGL_depth_texture"), s !== null ? s.UNSIGNED_INT_24_8_WEBGL : null) : a[r] !== void 0 ? a[r] : null;
  }
  return { convert: i };
}
class A_ extends nn {
  constructor(t = []) {
    super(), this.isArrayCamera = !0, this.cameras = t;
  }
}
class xe extends ze {
  constructor() {
    super(), this.isGroup = !0, this.type = "Group";
  }
}
const C_ = { type: "move" };
class ka {
  constructor() {
    this._targetRay = null, this._grip = null, this._hand = null;
  }
  getHandSpace() {
    return this._hand === null && (this._hand = new xe(), this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = { pinching: !1 }), this._hand;
  }
  getTargetRaySpace() {
    return this._targetRay === null && (this._targetRay = new xe(), this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new R(), this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new R()), this._targetRay;
  }
  getGripSpace() {
    return this._grip === null && (this._grip = new xe(), this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new R(), this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new R()), this._grip;
  }
  dispatchEvent(t) {
    return this._targetRay !== null && this._targetRay.dispatchEvent(t), this._grip !== null && this._grip.dispatchEvent(t), this._hand !== null && this._hand.dispatchEvent(t), this;
  }
  connect(t) {
    if (t && t.hand) {
      const e = this._hand;
      if (e)
        for (const n of t.hand.values())
          this._getHandJoint(e, n);
    }
    return this.dispatchEvent({ type: "connected", data: t }), this;
  }
  disconnect(t) {
    return this.dispatchEvent({ type: "disconnected", data: t }), this._targetRay !== null && (this._targetRay.visible = !1), this._grip !== null && (this._grip.visible = !1), this._hand !== null && (this._hand.visible = !1), this;
  }
  update(t, e, n) {
    let i = null, r = null, o = null;
    const s = this._targetRay, l = this._grip, c = this._hand;
    if (t && e.session.visibilityState !== "visible-blurred") {
      if (c && t.hand) {
        o = !0;
        for (const f of t.hand.values()) {
          const p = e.getJointPose(f, n), _ = this._getHandJoint(c, f);
          p !== null && (_.matrix.fromArray(p.transform.matrix), _.matrix.decompose(_.position, _.rotation, _.scale), _.jointRadius = p.radius), _.visible = p !== null;
        }
        const h = c.joints["index-finger-tip"], u = c.joints["thumb-tip"], d = h.position.distanceTo(u.position), m = 0.02, g = 5e-3;
        c.inputState.pinching && d > m + g ? (c.inputState.pinching = !1, this.dispatchEvent({
          type: "pinchend",
          handedness: t.handedness,
          target: this
        })) : !c.inputState.pinching && d <= m - g && (c.inputState.pinching = !0, this.dispatchEvent({
          type: "pinchstart",
          handedness: t.handedness,
          target: this
        }));
      } else
        l !== null && t.gripSpace && (r = e.getPose(t.gripSpace, n), r !== null && (l.matrix.fromArray(r.transform.matrix), l.matrix.decompose(l.position, l.rotation, l.scale), r.linearVelocity ? (l.hasLinearVelocity = !0, l.linearVelocity.copy(r.linearVelocity)) : l.hasLinearVelocity = !1, r.angularVelocity ? (l.hasAngularVelocity = !0, l.angularVelocity.copy(r.angularVelocity)) : l.hasAngularVelocity = !1));
      s !== null && (i = e.getPose(t.targetRaySpace, n), i === null && r !== null && (i = r), i !== null && (s.matrix.fromArray(i.transform.matrix), s.matrix.decompose(s.position, s.rotation, s.scale), i.linearVelocity ? (s.hasLinearVelocity = !0, s.linearVelocity.copy(i.linearVelocity)) : s.hasLinearVelocity = !1, i.angularVelocity ? (s.hasAngularVelocity = !0, s.angularVelocity.copy(i.angularVelocity)) : s.hasAngularVelocity = !1, this.dispatchEvent(C_)));
    }
    return s !== null && (s.visible = i !== null), l !== null && (l.visible = r !== null), c !== null && (c.visible = o !== null), this;
  }
  // private method
  _getHandJoint(t, e) {
    if (t.joints[e.jointName] === void 0) {
      const n = new xe();
      n.matrixAutoUpdate = !1, n.visible = !1, t.joints[e.jointName] = n, t.add(n);
    }
    return t.joints[e.jointName];
  }
}
class P_ extends Oe {
  constructor(t, e, n, i, r, o, s, l, c, h) {
    if (h = h !== void 0 ? h : Si, h !== Si && h !== _r)
      throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    n === void 0 && h === Si && (n = yi), n === void 0 && h === _r && (n = ur), super(null, i, r, o, s, l, h, n, c), this.isDepthTexture = !0, this.image = { width: t, height: e }, this.magFilter = s !== void 0 ? s : Me, this.minFilter = l !== void 0 ? l : Me, this.flipY = !1, this.generateMipmaps = !1;
  }
}
class L_ extends Fi {
  constructor(t, e) {
    super();
    const n = this;
    let i = null, r = 1, o = null, s = "local-floor", l = null, c = null, h = null, u = null, d = null, m = null;
    const g = e.getContextAttributes();
    let f = null, p = null;
    const _ = [], b = [], x = /* @__PURE__ */ new Set(), y = /* @__PURE__ */ new Map(), M = new nn();
    M.layers.enable(1), M.viewport = new Zt();
    const A = new nn();
    A.layers.enable(2), A.viewport = new Zt();
    const P = [M, A], v = new A_();
    v.layers.enable(1), v.layers.enable(2);
    let w = null, L = null;
    this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function(V) {
      let B = _[V];
      return B === void 0 && (B = new ka(), _[V] = B), B.getTargetRaySpace();
    }, this.getControllerGrip = function(V) {
      let B = _[V];
      return B === void 0 && (B = new ka(), _[V] = B), B.getGripSpace();
    }, this.getHand = function(V) {
      let B = _[V];
      return B === void 0 && (B = new ka(), _[V] = B), B.getHandSpace();
    };
    function U(V) {
      const B = b.indexOf(V.inputSource);
      if (B === -1)
        return;
      const at = _[B];
      at !== void 0 && at.dispatchEvent({ type: V.type, data: V.inputSource });
    }
    function j() {
      i.removeEventListener("select", U), i.removeEventListener("selectstart", U), i.removeEventListener("selectend", U), i.removeEventListener("squeeze", U), i.removeEventListener("squeezestart", U), i.removeEventListener("squeezeend", U), i.removeEventListener("end", j), i.removeEventListener("inputsourceschange", O);
      for (let V = 0; V < _.length; V++) {
        const B = b[V];
        B !== null && (b[V] = null, _[V].disconnect(B));
      }
      w = null, L = null, t.setRenderTarget(f), d = null, u = null, h = null, i = null, p = null, K.stop(), n.isPresenting = !1, n.dispatchEvent({ type: "sessionend" });
    }
    this.setFramebufferScaleFactor = function(V) {
      r = V, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
    }, this.setReferenceSpaceType = function(V) {
      s = V, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
    }, this.getReferenceSpace = function() {
      return l || o;
    }, this.setReferenceSpace = function(V) {
      l = V;
    }, this.getBaseLayer = function() {
      return u !== null ? u : d;
    }, this.getBinding = function() {
      return h;
    }, this.getFrame = function() {
      return m;
    }, this.getSession = function() {
      return i;
    }, this.setSession = async function(V) {
      if (i = V, i !== null) {
        if (f = t.getRenderTarget(), i.addEventListener("select", U), i.addEventListener("selectstart", U), i.addEventListener("selectend", U), i.addEventListener("squeeze", U), i.addEventListener("squeezestart", U), i.addEventListener("squeezeend", U), i.addEventListener("end", j), i.addEventListener("inputsourceschange", O), g.xrCompatible !== !0 && await e.makeXRCompatible(), i.renderState.layers === void 0 || t.capabilities.isWebGL2 === !1) {
          const B = {
            antialias: i.renderState.layers === void 0 ? g.antialias : !0,
            alpha: g.alpha,
            depth: g.depth,
            stencil: g.stencil,
            framebufferScaleFactor: r
          };
          d = new XRWebGLLayer(i, e, B), i.updateRenderState({ baseLayer: d }), p = new Ri(
            d.framebufferWidth,
            d.framebufferHeight,
            {
              format: mn,
              type: Li,
              encoding: t.outputEncoding,
              stencilBuffer: g.stencil
            }
          );
        } else {
          let B = null, at = null, J = null;
          g.depth && (J = g.stencil ? 35056 : 33190, B = g.stencil ? _r : Si, at = g.stencil ? ur : yi);
          const st = {
            colorFormat: 32856,
            depthFormat: J,
            scaleFactor: r
          };
          h = new XRWebGLBinding(i, e), u = h.createProjectionLayer(st), i.updateRenderState({ layers: [u] }), p = new Ri(
            u.textureWidth,
            u.textureHeight,
            {
              format: mn,
              type: Li,
              depthTexture: new P_(u.textureWidth, u.textureHeight, at, void 0, void 0, void 0, void 0, void 0, void 0, B),
              stencilBuffer: g.stencil,
              encoding: t.outputEncoding,
              samples: g.antialias ? 4 : 0
            }
          );
          const q = t.properties.get(p);
          q.__ignoreDepthValues = u.ignoreDepthValues;
        }
        p.isXRRenderTarget = !0, this.setFoveation(1), l = null, o = await i.requestReferenceSpace(s), K.setContext(i), K.start(), n.isPresenting = !0, n.dispatchEvent({ type: "sessionstart" });
      }
    };
    function O(V) {
      for (let B = 0; B < V.removed.length; B++) {
        const at = V.removed[B], J = b.indexOf(at);
        J >= 0 && (b[J] = null, _[J].disconnect(at));
      }
      for (let B = 0; B < V.added.length; B++) {
        const at = V.added[B];
        let J = b.indexOf(at);
        if (J === -1) {
          for (let q = 0; q < _.length; q++)
            if (q >= b.length) {
              b.push(at), J = q;
              break;
            } else if (b[q] === null) {
              b[q] = at, J = q;
              break;
            }
          if (J === -1)
            break;
        }
        const st = _[J];
        st && st.connect(at);
      }
    }
    const I = new R(), k = new R();
    function $(V, B, at) {
      I.setFromMatrixPosition(B.matrixWorld), k.setFromMatrixPosition(at.matrixWorld);
      const J = I.distanceTo(k), st = B.projectionMatrix.elements, q = at.projectionMatrix.elements, At = st[14] / (st[10] - 1), ft = st[14] / (st[10] + 1), xt = (st[9] + 1) / st[5], dt = (st[9] - 1) / st[5], Ft = (st[8] - 1) / st[0], St = (q[8] + 1) / q[0], yt = At * Ft, le = At * St, ne = J / (-Ft + St), ie = ne * -Ft;
      B.matrixWorld.decompose(V.position, V.quaternion, V.scale), V.translateX(ie), V.translateZ(ne), V.matrixWorld.compose(V.position, V.quaternion, V.scale), V.matrixWorldInverse.copy(V.matrixWorld).invert();
      const Ee = At + ne, $t = ft + ne, Ut = yt - ie, Ke = le + (J - ie), De = xt * ft / $t * Ee, E = dt * ft / $t * Ee;
      V.projectionMatrix.makePerspective(Ut, Ke, De, E, Ee, $t);
    }
    function Z(V, B) {
      B === null ? V.matrixWorld.copy(V.matrix) : V.matrixWorld.multiplyMatrices(B.matrixWorld, V.matrix), V.matrixWorldInverse.copy(V.matrixWorld).invert();
    }
    this.updateCamera = function(V) {
      if (i === null)
        return;
      v.near = A.near = M.near = V.near, v.far = A.far = M.far = V.far, (w !== v.near || L !== v.far) && (i.updateRenderState({
        depthNear: v.near,
        depthFar: v.far
      }), w = v.near, L = v.far);
      const B = V.parent, at = v.cameras;
      Z(v, B);
      for (let st = 0; st < at.length; st++)
        Z(at[st], B);
      v.matrixWorld.decompose(v.position, v.quaternion, v.scale), V.matrix.copy(v.matrix), V.matrix.decompose(V.position, V.quaternion, V.scale);
      const J = V.children;
      for (let st = 0, q = J.length; st < q; st++)
        J[st].updateMatrixWorld(!0);
      at.length === 2 ? $(v, M, A) : v.projectionMatrix.copy(M.projectionMatrix);
    }, this.getCamera = function() {
      return v;
    }, this.getFoveation = function() {
      if (u !== null)
        return u.fixedFoveation;
      if (d !== null)
        return d.fixedFoveation;
    }, this.setFoveation = function(V) {
      u !== null && (u.fixedFoveation = V), d !== null && d.fixedFoveation !== void 0 && (d.fixedFoveation = V);
    }, this.getPlanes = function() {
      return x;
    };
    let G = null;
    function Q(V, B) {
      if (c = B.getViewerPose(l || o), m = B, c !== null) {
        const at = c.views;
        d !== null && (t.setRenderTargetFramebuffer(p, d.framebuffer), t.setRenderTarget(p));
        let J = !1;
        at.length !== v.cameras.length && (v.cameras.length = 0, J = !0);
        for (let st = 0; st < at.length; st++) {
          const q = at[st];
          let At = null;
          if (d !== null)
            At = d.getViewport(q);
          else {
            const xt = h.getViewSubImage(u, q);
            At = xt.viewport, st === 0 && (t.setRenderTargetTextures(
              p,
              xt.colorTexture,
              u.ignoreDepthValues ? void 0 : xt.depthStencilTexture
            ), t.setRenderTarget(p));
          }
          let ft = P[st];
          ft === void 0 && (ft = new nn(), ft.layers.enable(st), ft.viewport = new Zt(), P[st] = ft), ft.matrix.fromArray(q.transform.matrix), ft.projectionMatrix.fromArray(q.projectionMatrix), ft.viewport.set(At.x, At.y, At.width, At.height), st === 0 && v.matrix.copy(ft.matrix), J === !0 && v.cameras.push(ft);
        }
      }
      for (let at = 0; at < _.length; at++) {
        const J = b[at], st = _[at];
        J !== null && st !== void 0 && st.update(J, B, l || o);
      }
      if (G && G(V, B), B.detectedPlanes) {
        n.dispatchEvent({ type: "planesdetected", data: B.detectedPlanes });
        let at = null;
        for (const J of x)
          B.detectedPlanes.has(J) || (at === null && (at = []), at.push(J));
        if (at !== null)
          for (const J of at)
            x.delete(J), y.delete(J), n.dispatchEvent({ type: "planeremoved", data: J });
        for (const J of B.detectedPlanes)
          if (!x.has(J))
            x.add(J), y.set(J, B.lastChangedTime), n.dispatchEvent({ type: "planeadded", data: J });
          else {
            const st = y.get(J);
            J.lastChangedTime > st && (y.set(J, J.lastChangedTime), n.dispatchEvent({ type: "planechanged", data: J }));
          }
      }
      m = null;
    }
    const K = new fh();
    K.setAnimationLoop(Q), this.setAnimationLoop = function(V) {
      G = V;
    }, this.dispose = function() {
    };
  }
}
function D_(a, t) {
  function e(f, p) {
    p.color.getRGB(f.fogColor.value, ch(a)), p.isFog ? (f.fogNear.value = p.near, f.fogFar.value = p.far) : p.isFogExp2 && (f.fogDensity.value = p.density);
  }
  function n(f, p, _, b, x) {
    p.isMeshBasicMaterial || p.isMeshLambertMaterial ? i(f, p) : p.isMeshToonMaterial ? (i(f, p), h(f, p)) : p.isMeshPhongMaterial ? (i(f, p), c(f, p)) : p.isMeshStandardMaterial ? (i(f, p), u(f, p), p.isMeshPhysicalMaterial && d(f, p, x)) : p.isMeshMatcapMaterial ? (i(f, p), m(f, p)) : p.isMeshDepthMaterial ? i(f, p) : p.isMeshDistanceMaterial ? (i(f, p), g(f, p)) : p.isMeshNormalMaterial ? i(f, p) : p.isLineBasicMaterial ? (r(f, p), p.isLineDashedMaterial && o(f, p)) : p.isPointsMaterial ? s(f, p, _, b) : p.isSpriteMaterial ? l(f, p) : p.isShadowMaterial ? (f.color.value.copy(p.color), f.opacity.value = p.opacity) : p.isShaderMaterial && (p.uniformsNeedUpdate = !1);
  }
  function i(f, p) {
    f.opacity.value = p.opacity, p.color && f.diffuse.value.copy(p.color), p.emissive && f.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity), p.map && (f.map.value = p.map), p.alphaMap && (f.alphaMap.value = p.alphaMap), p.bumpMap && (f.bumpMap.value = p.bumpMap, f.bumpScale.value = p.bumpScale, p.side === ln && (f.bumpScale.value *= -1)), p.displacementMap && (f.displacementMap.value = p.displacementMap, f.displacementScale.value = p.displacementScale, f.displacementBias.value = p.displacementBias), p.emissiveMap && (f.emissiveMap.value = p.emissiveMap), p.normalMap && (f.normalMap.value = p.normalMap, f.normalScale.value.copy(p.normalScale), p.side === ln && f.normalScale.value.negate()), p.specularMap && (f.specularMap.value = p.specularMap), p.alphaTest > 0 && (f.alphaTest.value = p.alphaTest);
    const _ = t.get(p).envMap;
    if (_ && (f.envMap.value = _, f.flipEnvMap.value = _.isCubeTexture && _.isRenderTargetTexture === !1 ? -1 : 1, f.reflectivity.value = p.reflectivity, f.ior.value = p.ior, f.refractionRatio.value = p.refractionRatio), p.lightMap) {
      f.lightMap.value = p.lightMap;
      const y = a.physicallyCorrectLights !== !0 ? Math.PI : 1;
      f.lightMapIntensity.value = p.lightMapIntensity * y;
    }
    p.aoMap && (f.aoMap.value = p.aoMap, f.aoMapIntensity.value = p.aoMapIntensity);
    let b;
    p.map ? b = p.map : p.specularMap ? b = p.specularMap : p.displacementMap ? b = p.displacementMap : p.normalMap ? b = p.normalMap : p.bumpMap ? b = p.bumpMap : p.roughnessMap ? b = p.roughnessMap : p.metalnessMap ? b = p.metalnessMap : p.alphaMap ? b = p.alphaMap : p.emissiveMap ? b = p.emissiveMap : p.clearcoatMap ? b = p.clearcoatMap : p.clearcoatNormalMap ? b = p.clearcoatNormalMap : p.clearcoatRoughnessMap ? b = p.clearcoatRoughnessMap : p.iridescenceMap ? b = p.iridescenceMap : p.iridescenceThicknessMap ? b = p.iridescenceThicknessMap : p.specularIntensityMap ? b = p.specularIntensityMap : p.specularColorMap ? b = p.specularColorMap : p.transmissionMap ? b = p.transmissionMap : p.thicknessMap ? b = p.thicknessMap : p.sheenColorMap ? b = p.sheenColorMap : p.sheenRoughnessMap && (b = p.sheenRoughnessMap), b !== void 0 && (b.isWebGLRenderTarget && (b = b.texture), b.matrixAutoUpdate === !0 && b.updateMatrix(), f.uvTransform.value.copy(b.matrix));
    let x;
    p.aoMap ? x = p.aoMap : p.lightMap && (x = p.lightMap), x !== void 0 && (x.isWebGLRenderTarget && (x = x.texture), x.matrixAutoUpdate === !0 && x.updateMatrix(), f.uv2Transform.value.copy(x.matrix));
  }
  function r(f, p) {
    f.diffuse.value.copy(p.color), f.opacity.value = p.opacity;
  }
  function o(f, p) {
    f.dashSize.value = p.dashSize, f.totalSize.value = p.dashSize + p.gapSize, f.scale.value = p.scale;
  }
  function s(f, p, _, b) {
    f.diffuse.value.copy(p.color), f.opacity.value = p.opacity, f.size.value = p.size * _, f.scale.value = b * 0.5, p.map && (f.map.value = p.map), p.alphaMap && (f.alphaMap.value = p.alphaMap), p.alphaTest > 0 && (f.alphaTest.value = p.alphaTest);
    let x;
    p.map ? x = p.map : p.alphaMap && (x = p.alphaMap), x !== void 0 && (x.matrixAutoUpdate === !0 && x.updateMatrix(), f.uvTransform.value.copy(x.matrix));
  }
  function l(f, p) {
    f.diffuse.value.copy(p.color), f.opacity.value = p.opacity, f.rotation.value = p.rotation, p.map && (f.map.value = p.map), p.alphaMap && (f.alphaMap.value = p.alphaMap), p.alphaTest > 0 && (f.alphaTest.value = p.alphaTest);
    let _;
    p.map ? _ = p.map : p.alphaMap && (_ = p.alphaMap), _ !== void 0 && (_.matrixAutoUpdate === !0 && _.updateMatrix(), f.uvTransform.value.copy(_.matrix));
  }
  function c(f, p) {
    f.specular.value.copy(p.specular), f.shininess.value = Math.max(p.shininess, 1e-4);
  }
  function h(f, p) {
    p.gradientMap && (f.gradientMap.value = p.gradientMap);
  }
  function u(f, p) {
    f.roughness.value = p.roughness, f.metalness.value = p.metalness, p.roughnessMap && (f.roughnessMap.value = p.roughnessMap), p.metalnessMap && (f.metalnessMap.value = p.metalnessMap), t.get(p).envMap && (f.envMapIntensity.value = p.envMapIntensity);
  }
  function d(f, p, _) {
    f.ior.value = p.ior, p.sheen > 0 && (f.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen), f.sheenRoughness.value = p.sheenRoughness, p.sheenColorMap && (f.sheenColorMap.value = p.sheenColorMap), p.sheenRoughnessMap && (f.sheenRoughnessMap.value = p.sheenRoughnessMap)), p.clearcoat > 0 && (f.clearcoat.value = p.clearcoat, f.clearcoatRoughness.value = p.clearcoatRoughness, p.clearcoatMap && (f.clearcoatMap.value = p.clearcoatMap), p.clearcoatRoughnessMap && (f.clearcoatRoughnessMap.value = p.clearcoatRoughnessMap), p.clearcoatNormalMap && (f.clearcoatNormalScale.value.copy(p.clearcoatNormalScale), f.clearcoatNormalMap.value = p.clearcoatNormalMap, p.side === ln && f.clearcoatNormalScale.value.negate())), p.iridescence > 0 && (f.iridescence.value = p.iridescence, f.iridescenceIOR.value = p.iridescenceIOR, f.iridescenceThicknessMinimum.value = p.iridescenceThicknessRange[0], f.iridescenceThicknessMaximum.value = p.iridescenceThicknessRange[1], p.iridescenceMap && (f.iridescenceMap.value = p.iridescenceMap), p.iridescenceThicknessMap && (f.iridescenceThicknessMap.value = p.iridescenceThicknessMap)), p.transmission > 0 && (f.transmission.value = p.transmission, f.transmissionSamplerMap.value = _.texture, f.transmissionSamplerSize.value.set(_.width, _.height), p.transmissionMap && (f.transmissionMap.value = p.transmissionMap), f.thickness.value = p.thickness, p.thicknessMap && (f.thicknessMap.value = p.thicknessMap), f.attenuationDistance.value = p.attenuationDistance, f.attenuationColor.value.copy(p.attenuationColor)), f.specularIntensity.value = p.specularIntensity, f.specularColor.value.copy(p.specularColor), p.specularIntensityMap && (f.specularIntensityMap.value = p.specularIntensityMap), p.specularColorMap && (f.specularColorMap.value = p.specularColorMap);
  }
  function m(f, p) {
    p.matcap && (f.matcap.value = p.matcap);
  }
  function g(f, p) {
    f.referencePosition.value.copy(p.referencePosition), f.nearDistance.value = p.nearDistance, f.farDistance.value = p.farDistance;
  }
  return {
    refreshFogUniforms: e,
    refreshMaterialUniforms: n
  };
}
function R_(a, t, e, n) {
  let i = {}, r = {}, o = [];
  const s = e.isWebGL2 ? a.getParameter(35375) : 0;
  function l(b, x) {
    const y = x.program;
    n.uniformBlockBinding(b, y);
  }
  function c(b, x) {
    let y = i[b.id];
    y === void 0 && (g(b), y = h(b), i[b.id] = y, b.addEventListener("dispose", p));
    const M = x.program;
    n.updateUBOMapping(b, M);
    const A = t.render.frame;
    r[b.id] !== A && (d(b), r[b.id] = A);
  }
  function h(b) {
    const x = u();
    b.__bindingPointIndex = x;
    const y = a.createBuffer(), M = b.__size, A = b.usage;
    return a.bindBuffer(35345, y), a.bufferData(35345, M, A), a.bindBuffer(35345, null), a.bindBufferBase(35345, x, y), y;
  }
  function u() {
    for (let b = 0; b < s; b++)
      if (o.indexOf(b) === -1)
        return o.push(b), b;
    return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
  }
  function d(b) {
    const x = i[b.id], y = b.uniforms, M = b.__cache;
    a.bindBuffer(35345, x);
    for (let A = 0, P = y.length; A < P; A++) {
      const v = y[A];
      if (m(v, A, M) === !0) {
        const w = v.__offset, L = Array.isArray(v.value) ? v.value : [v.value];
        let U = 0;
        for (let j = 0; j < L.length; j++) {
          const O = L[j], I = f(O);
          typeof O == "number" ? (v.__data[0] = O, a.bufferSubData(35345, w + U, v.__data)) : O.isMatrix3 ? (v.__data[0] = O.elements[0], v.__data[1] = O.elements[1], v.__data[2] = O.elements[2], v.__data[3] = O.elements[0], v.__data[4] = O.elements[3], v.__data[5] = O.elements[4], v.__data[6] = O.elements[5], v.__data[7] = O.elements[0], v.__data[8] = O.elements[6], v.__data[9] = O.elements[7], v.__data[10] = O.elements[8], v.__data[11] = O.elements[0]) : (O.toArray(v.__data, U), U += I.storage / Float32Array.BYTES_PER_ELEMENT);
        }
        a.bufferSubData(35345, w, v.__data);
      }
    }
    a.bindBuffer(35345, null);
  }
  function m(b, x, y) {
    const M = b.value;
    if (y[x] === void 0) {
      if (typeof M == "number")
        y[x] = M;
      else {
        const A = Array.isArray(M) ? M : [M], P = [];
        for (let v = 0; v < A.length; v++)
          P.push(A[v].clone());
        y[x] = P;
      }
      return !0;
    } else if (typeof M == "number") {
      if (y[x] !== M)
        return y[x] = M, !0;
    } else {
      const A = Array.isArray(y[x]) ? y[x] : [y[x]], P = Array.isArray(M) ? M : [M];
      for (let v = 0; v < A.length; v++) {
        const w = A[v];
        if (w.equals(P[v]) === !1)
          return w.copy(P[v]), !0;
      }
    }
    return !1;
  }
  function g(b) {
    const x = b.uniforms;
    let y = 0;
    const M = 16;
    let A = 0;
    for (let P = 0, v = x.length; P < v; P++) {
      const w = x[P], L = {
        boundary: 0,
        // bytes
        storage: 0
        // bytes
      }, U = Array.isArray(w.value) ? w.value : [w.value];
      for (let j = 0, O = U.length; j < O; j++) {
        const I = U[j], k = f(I);
        L.boundary += k.boundary, L.storage += k.storage;
      }
      if (w.__data = new Float32Array(L.storage / Float32Array.BYTES_PER_ELEMENT), w.__offset = y, P > 0) {
        A = y % M;
        const j = M - A;
        A !== 0 && j - L.boundary < 0 && (y += M - A, w.__offset = y);
      }
      y += L.storage;
    }
    return A = y % M, A > 0 && (y += M - A), b.__size = y, b.__cache = {}, this;
  }
  function f(b) {
    const x = {
      boundary: 0,
      // bytes
      storage: 0
      // bytes
    };
    return typeof b == "number" ? (x.boundary = 4, x.storage = 4) : b.isVector2 ? (x.boundary = 8, x.storage = 8) : b.isVector3 || b.isColor ? (x.boundary = 16, x.storage = 12) : b.isVector4 ? (x.boundary = 16, x.storage = 16) : b.isMatrix3 ? (x.boundary = 48, x.storage = 48) : b.isMatrix4 ? (x.boundary = 64, x.storage = 64) : b.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", b), x;
  }
  function p(b) {
    const x = b.target;
    x.removeEventListener("dispose", p);
    const y = o.indexOf(x.__bindingPointIndex);
    o.splice(y, 1), a.deleteBuffer(i[x.id]), delete i[x.id], delete r[x.id];
  }
  function _() {
    for (const b in i)
      a.deleteBuffer(i[b]);
    o = [], i = {}, r = {};
  }
  return {
    bind: l,
    update: c,
    dispose: _
  };
}
function I_() {
  const a = Qr("canvas");
  return a.style.display = "block", a;
}
function vh(a = {}) {
  this.isWebGLRenderer = !0;
  const t = a.canvas !== void 0 ? a.canvas : I_(), e = a.context !== void 0 ? a.context : null, n = a.depth !== void 0 ? a.depth : !0, i = a.stencil !== void 0 ? a.stencil : !0, r = a.antialias !== void 0 ? a.antialias : !1, o = a.premultipliedAlpha !== void 0 ? a.premultipliedAlpha : !0, s = a.preserveDrawingBuffer !== void 0 ? a.preserveDrawingBuffer : !1, l = a.powerPreference !== void 0 ? a.powerPreference : "default", c = a.failIfMajorPerformanceCaveat !== void 0 ? a.failIfMajorPerformanceCaveat : !1;
  let h;
  e !== null ? h = e.getContextAttributes().alpha : h = a.alpha !== void 0 ? a.alpha : !1;
  let u = null, d = null;
  const m = [], g = [];
  this.domElement = t, this.debug = {
    /**
     * Enables error checking and reporting when shader programs are being compiled
     * @type {boolean}
     */
    checkShaderErrors: !0
  }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.outputEncoding = Di, this.physicallyCorrectLights = !1, this.toneMapping = gn, this.toneMappingExposure = 1;
  const f = this;
  let p = !1, _ = 0, b = 0, x = null, y = -1, M = null;
  const A = new Zt(), P = new Zt();
  let v = null, w = t.width, L = t.height, U = 1, j = null, O = null;
  const I = new Zt(0, 0, w, L), k = new Zt(0, 0, w, L);
  let $ = !1;
  const Z = new dh();
  let G = !1, Q = !1, K = null;
  const V = new ee(), B = new vt(), at = new R(), J = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: !0 };
  function st() {
    return x === null ? U : 1;
  }
  let q = e;
  function At(T, N) {
    for (let X = 0; X < T.length; X++) {
      const F = T[X], Y = t.getContext(F, N);
      if (Y !== null)
        return Y;
    }
    return null;
  }
  try {
    const T = {
      alpha: !0,
      depth: n,
      stencil: i,
      antialias: r,
      premultipliedAlpha: o,
      preserveDrawingBuffer: s,
      powerPreference: l,
      failIfMajorPerformanceCaveat: c
    };
    if ("setAttribute" in t && t.setAttribute("data-engine", `three.js r${Po}`), t.addEventListener("webglcontextlost", mt, !1), t.addEventListener("webglcontextrestored", pt, !1), t.addEventListener("webglcontextcreationerror", Ct, !1), q === null) {
      const N = ["webgl2", "webgl", "experimental-webgl"];
      if (f.isWebGL1Renderer === !0 && N.shift(), q = At(N, T), q === null)
        throw At(N) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
    }
    q.getShaderPrecisionFormat === void 0 && (q.getShaderPrecisionFormat = function() {
      return { rangeMin: 1, rangeMax: 1, precision: 1 };
    });
  } catch (T) {
    throw console.error("THREE.WebGLRenderer: " + T.message), T;
  }
  let ft, xt, dt, Ft, St, yt, le, ne, ie, Ee, $t, Ut, Ke, De, E, S, H, et, it, ot, bt, C, z, ct;
  function ut() {
    ft = new Wm(q), xt = new Nm(q, ft, a), ft.init(xt), C = new E_(q, ft, xt), dt = new w_(q, ft, xt), Ft = new Ym(), St = new h_(), yt = new T_(q, ft, dt, St, xt, C, Ft), le = new km(f), ne = new Hm(f), ie = new tf(q, xt), z = new zm(q, ft, ie, xt), Ee = new Xm(q, ie, Ft, z), $t = new Km(q, Ee, ie, Ft), it = new Zm(q, xt, yt), S = new Um(St), Ut = new c_(f, le, ne, ft, xt, z, S), Ke = new D_(f, St), De = new d_(), E = new v_(ft, xt), et = new Om(f, le, ne, dt, $t, h, o), H = new S_(f, $t, xt), ct = new R_(q, Ft, xt, dt), ot = new Fm(q, ft, Ft, xt), bt = new qm(q, ft, Ft, xt), Ft.programs = Ut.programs, f.capabilities = xt, f.extensions = ft, f.properties = St, f.renderLists = De, f.shadowMap = H, f.state = dt, f.info = Ft;
  }
  ut();
  const lt = new L_(f, q);
  this.xr = lt, this.getContext = function() {
    return q;
  }, this.getContextAttributes = function() {
    return q.getContextAttributes();
  }, this.forceContextLoss = function() {
    const T = ft.get("WEBGL_lose_context");
    T && T.loseContext();
  }, this.forceContextRestore = function() {
    const T = ft.get("WEBGL_lose_context");
    T && T.restoreContext();
  }, this.getPixelRatio = function() {
    return U;
  }, this.setPixelRatio = function(T) {
    T !== void 0 && (U = T, this.setSize(w, L, !1));
  }, this.getSize = function(T) {
    return T.set(w, L);
  }, this.setSize = function(T, N, X) {
    if (lt.isPresenting) {
      console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
      return;
    }
    w = T, L = N, t.width = Math.floor(T * U), t.height = Math.floor(N * U), X !== !1 && (t.style.width = T + "px", t.style.height = N + "px"), this.setViewport(0, 0, T, N);
  }, this.getDrawingBufferSize = function(T) {
    return T.set(w * U, L * U).floor();
  }, this.setDrawingBufferSize = function(T, N, X) {
    w = T, L = N, U = X, t.width = Math.floor(T * X), t.height = Math.floor(N * X), this.setViewport(0, 0, T, N);
  }, this.getCurrentViewport = function(T) {
    return T.copy(A);
  }, this.getViewport = function(T) {
    return T.copy(I);
  }, this.setViewport = function(T, N, X, F) {
    T.isVector4 ? I.set(T.x, T.y, T.z, T.w) : I.set(T, N, X, F), dt.viewport(A.copy(I).multiplyScalar(U).floor());
  }, this.getScissor = function(T) {
    return T.copy(k);
  }, this.setScissor = function(T, N, X, F) {
    T.isVector4 ? k.set(T.x, T.y, T.z, T.w) : k.set(T, N, X, F), dt.scissor(P.copy(k).multiplyScalar(U).floor());
  }, this.getScissorTest = function() {
    return $;
  }, this.setScissorTest = function(T) {
    dt.setScissorTest($ = T);
  }, this.setOpaqueSort = function(T) {
    j = T;
  }, this.setTransparentSort = function(T) {
    O = T;
  }, this.getClearColor = function(T) {
    return T.copy(et.getClearColor());
  }, this.setClearColor = function() {
    et.setClearColor.apply(et, arguments);
  }, this.getClearAlpha = function() {
    return et.getClearAlpha();
  }, this.setClearAlpha = function() {
    et.setClearAlpha.apply(et, arguments);
  }, this.clear = function(T = !0, N = !0, X = !0) {
    let F = 0;
    T && (F |= 16384), N && (F |= 256), X && (F |= 1024), q.clear(F);
  }, this.clearColor = function() {
    this.clear(!0, !1, !1);
  }, this.clearDepth = function() {
    this.clear(!1, !0, !1);
  }, this.clearStencil = function() {
    this.clear(!1, !1, !0);
  }, this.dispose = function() {
    t.removeEventListener("webglcontextlost", mt, !1), t.removeEventListener("webglcontextrestored", pt, !1), t.removeEventListener("webglcontextcreationerror", Ct, !1), De.dispose(), E.dispose(), St.dispose(), le.dispose(), ne.dispose(), $t.dispose(), z.dispose(), ct.dispose(), Ut.dispose(), lt.dispose(), lt.removeEventListener("sessionstart", ht), lt.removeEventListener("sessionend", gt), K && (K.dispose(), K = null), Nt.stop();
  };
  function mt(T) {
    T.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), p = !0;
  }
  function pt() {
    console.log("THREE.WebGLRenderer: Context Restored."), p = !1;
    const T = Ft.autoReset, N = H.enabled, X = H.autoUpdate, F = H.needsUpdate, Y = H.type;
    ut(), Ft.autoReset = T, H.enabled = N, H.autoUpdate = X, H.needsUpdate = F, H.type = Y;
  }
  function Ct(T) {
    console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", T.statusMessage);
  }
  function Lt(T) {
    const N = T.target;
    N.removeEventListener("dispose", Lt), kt(N);
  }
  function kt(T) {
    D(T), St.remove(T);
  }
  function D(T) {
    const N = St.get(T).programs;
    N !== void 0 && (N.forEach(function(X) {
      Ut.releaseProgram(X);
    }), T.isShaderMaterial && Ut.releaseShaderCache(T));
  }
  this.renderBufferDirect = function(T, N, X, F, Y, _t) {
    N === null && (N = J);
    const Mt = Y.isMesh && Y.matrixWorld.determinant() < 0, Tt = wu(T, N, X, F, Y);
    dt.setMaterial(F, Mt);
    let Et = X.index, zt = 1;
    F.wireframe === !0 && (Et = Ee.getWireframeAttribute(X), zt = 2);
    const Dt = X.drawRange, Rt = X.attributes.position;
    let Kt = Dt.start * zt, Be = (Dt.start + Dt.count) * zt;
    _t !== null && (Kt = Math.max(Kt, _t.start * zt), Be = Math.min(Be, (_t.start + _t.count) * zt)), Et !== null ? (Kt = Math.max(Kt, 0), Be = Math.min(Be, Et.count)) : Rt != null && (Kt = Math.max(Kt, 0), Be = Math.min(Be, Rt.count));
    const Rn = Be - Kt;
    if (Rn < 0 || Rn === 1 / 0)
      return;
    z.setup(Y, F, Tt, X, Et);
    let li, Jt = ot;
    if (Et !== null && (li = ie.get(Et), Jt = bt, Jt.setIndex(li)), Y.isMesh)
      F.wireframe === !0 ? (dt.setLineWidth(F.wireframeLinewidth * st()), Jt.setMode(1)) : Jt.setMode(4);
    else if (Y.isLine) {
      let It = F.linewidth;
      It === void 0 && (It = 1), dt.setLineWidth(It * st()), Y.isLineSegments ? Jt.setMode(1) : Y.isLineLoop ? Jt.setMode(2) : Jt.setMode(3);
    } else
      Y.isPoints ? Jt.setMode(0) : Y.isSprite && Jt.setMode(4);
    if (Y.isInstancedMesh)
      Jt.renderInstances(Kt, Rn, Y.count);
    else if (X.isInstancedBufferGeometry) {
      const It = X._maxInstanceCount !== void 0 ? X._maxInstanceCount : 1 / 0, aa = Math.min(X.instanceCount, It);
      Jt.renderInstances(Kt, Rn, aa);
    } else
      Jt.render(Kt, Rn);
  }, this.compile = function(T, N) {
    function X(F, Y, _t) {
      F.transparent === !0 && F.side === us ? (F.side = ln, F.needsUpdate = !0, Je(F, Y, _t), F.side = Pi, F.needsUpdate = !0, Je(F, Y, _t), F.side = us) : Je(F, Y, _t);
    }
    d = E.get(T), d.init(), g.push(d), T.traverseVisible(function(F) {
      F.isLight && F.layers.test(N.layers) && (d.pushLight(F), F.castShadow && d.pushShadow(F));
    }), d.setupLights(f.physicallyCorrectLights), T.traverse(function(F) {
      const Y = F.material;
      if (Y)
        if (Array.isArray(Y))
          for (let _t = 0; _t < Y.length; _t++) {
            const Mt = Y[_t];
            X(Mt, T, F);
          }
        else
          X(Y, T, F);
    }), g.pop(), d = null;
  };
  let W = null;
  function tt(T) {
    W && W(T);
  }
  function ht() {
    Nt.stop();
  }
  function gt() {
    Nt.start();
  }
  const Nt = new fh();
  Nt.setAnimationLoop(tt), typeof self < "u" && Nt.setContext(self), this.setAnimationLoop = function(T) {
    W = T, lt.setAnimationLoop(T), T === null ? Nt.stop() : Nt.start();
  }, lt.addEventListener("sessionstart", ht), lt.addEventListener("sessionend", gt), this.render = function(T, N) {
    if (N !== void 0 && N.isCamera !== !0) {
      console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
      return;
    }
    if (p === !0)
      return;
    T.matrixWorldAutoUpdate === !0 && T.updateMatrixWorld(), N.parent === null && N.matrixWorldAutoUpdate === !0 && N.updateMatrixWorld(), lt.enabled === !0 && lt.isPresenting === !0 && (lt.cameraAutoUpdate === !0 && lt.updateCamera(N), N = lt.getCamera()), T.isScene === !0 && T.onBeforeRender(f, T, N, x), d = E.get(T, g.length), d.init(), g.push(d), V.multiplyMatrices(N.projectionMatrix, N.matrixWorldInverse), Z.setFromProjectionMatrix(V), Q = this.localClippingEnabled, G = S.init(this.clippingPlanes, Q, N), u = De.get(T, m.length), u.init(), m.push(u), ce(T, N, 0, f.sortObjects), u.finish(), f.sortObjects === !0 && u.sort(j, O), G === !0 && S.beginShadows();
    const X = d.state.shadowsArray;
    if (H.render(X, T, N), G === !0 && S.endShadows(), this.info.autoReset === !0 && this.info.reset(), et.render(u, T), d.setupLights(f.physicallyCorrectLights), N.isArrayCamera) {
      const F = N.cameras;
      for (let Y = 0, _t = F.length; Y < _t; Y++) {
        const Mt = F[Y];
        ye(u, T, Mt, Mt.viewport);
      }
    } else
      ye(u, T, N);
    x !== null && (yt.updateMultisampleRenderTarget(x), yt.updateRenderTargetMipmap(x)), T.isScene === !0 && T.onAfterRender(f, T, N), z.resetDefaultState(), y = -1, M = null, g.pop(), g.length > 0 ? d = g[g.length - 1] : d = null, m.pop(), m.length > 0 ? u = m[m.length - 1] : u = null;
  };
  function ce(T, N, X, F) {
    if (T.visible === !1)
      return;
    if (T.layers.test(N.layers)) {
      if (T.isGroup)
        X = T.renderOrder;
      else if (T.isLOD)
        T.autoUpdate === !0 && T.update(N);
      else if (T.isLight)
        d.pushLight(T), T.castShadow && d.pushShadow(T);
      else if (T.isSprite) {
        if (!T.frustumCulled || Z.intersectsSprite(T)) {
          F && at.setFromMatrixPosition(T.matrixWorld).applyMatrix4(V);
          const Mt = $t.update(T), Tt = T.material;
          Tt.visible && u.push(T, Mt, Tt, X, at.z, null);
        }
      } else if ((T.isMesh || T.isLine || T.isPoints) && (T.isSkinnedMesh && T.skeleton.frame !== Ft.render.frame && (T.skeleton.update(), T.skeleton.frame = Ft.render.frame), !T.frustumCulled || Z.intersectsObject(T))) {
        F && at.setFromMatrixPosition(T.matrixWorld).applyMatrix4(V);
        const Mt = $t.update(T), Tt = T.material;
        if (Array.isArray(Tt)) {
          const Et = Mt.groups;
          for (let zt = 0, Dt = Et.length; zt < Dt; zt++) {
            const Rt = Et[zt], Kt = Tt[Rt.materialIndex];
            Kt && Kt.visible && u.push(T, Mt, Kt, X, at.z, Rt);
          }
        } else
          Tt.visible && u.push(T, Mt, Tt, X, at.z, null);
      }
    }
    const _t = T.children;
    for (let Mt = 0, Tt = _t.length; Mt < Tt; Mt++)
      ce(_t[Mt], N, X, F);
  }
  function ye(T, N, X, F) {
    const Y = T.opaque, _t = T.transmissive, Mt = T.transparent;
    d.setupLightsView(X), _t.length > 0 && oi(Y, N, X), F && dt.viewport(A.copy(F)), Y.length > 0 && Wt(Y, N, X), _t.length > 0 && Wt(_t, N, X), Mt.length > 0 && Wt(Mt, N, X), dt.buffers.depth.setTest(!0), dt.buffers.depth.setMask(!0), dt.buffers.color.setMask(!0), dt.setPolygonOffset(!1);
  }
  function oi(T, N, X) {
    const F = xt.isWebGL2;
    K === null && (K = new Ri(1, 1, {
      generateMipmaps: !0,
      type: ft.has("EXT_color_buffer_half_float") ? Kr : Li,
      minFilter: Zr,
      samples: F && r === !0 ? 4 : 0
    })), f.getDrawingBufferSize(B), F ? K.setSize(B.x, B.y) : K.setSize(Ws(B.x), Ws(B.y));
    const Y = f.getRenderTarget();
    f.setRenderTarget(K), f.clear();
    const _t = f.toneMapping;
    f.toneMapping = gn, Wt(T, N, X), f.toneMapping = _t, yt.updateMultisampleRenderTarget(K), yt.updateRenderTargetMipmap(K), f.setRenderTarget(Y);
  }
  function Wt(T, N, X) {
    const F = N.isScene === !0 ? N.overrideMaterial : null;
    for (let Y = 0, _t = T.length; Y < _t; Y++) {
      const Mt = T[Y], Tt = Mt.object, Et = Mt.geometry, zt = F === null ? Mt.material : F, Dt = Mt.group;
      Tt.layers.test(X.layers) && Dn(Tt, N, X, Et, zt, Dt);
    }
  }
  function Dn(T, N, X, F, Y, _t) {
    T.onBeforeRender(f, N, X, F, Y, _t), T.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse, T.matrixWorld), T.normalMatrix.getNormalMatrix(T.modelViewMatrix), Y.onBeforeRender(f, N, X, F, T, _t), Y.transparent === !0 && Y.side === us ? (Y.side = ln, Y.needsUpdate = !0, f.renderBufferDirect(X, N, F, Y, T, _t), Y.side = Pi, Y.needsUpdate = !0, f.renderBufferDirect(X, N, F, Y, T, _t), Y.side = us) : f.renderBufferDirect(X, N, F, Y, T, _t), T.onAfterRender(f, N, X, F, Y, _t);
  }
  function Je(T, N, X) {
    N.isScene !== !0 && (N = J);
    const F = St.get(T), Y = d.state.lights, _t = d.state.shadowsArray, Mt = Y.state.version, Tt = Ut.getParameters(T, Y.state, _t, N, X), Et = Ut.getProgramCacheKey(Tt);
    let zt = F.programs;
    F.environment = T.isMeshStandardMaterial ? N.environment : null, F.fog = N.fog, F.envMap = (T.isMeshStandardMaterial ? ne : le).get(T.envMap || F.environment), zt === void 0 && (T.addEventListener("dispose", Lt), zt = /* @__PURE__ */ new Map(), F.programs = zt);
    let Dt = zt.get(Et);
    if (Dt !== void 0) {
      if (F.currentProgram === Dt && F.lightsStateVersion === Mt)
        return el(T, Tt), Dt;
    } else
      Tt.uniforms = Ut.getUniforms(T), T.onBuild(X, Tt, f), T.onBeforeCompile(Tt, f), Dt = Ut.acquireProgram(Tt, Et), zt.set(Et, Dt), F.uniforms = Tt.uniforms;
    const Rt = F.uniforms;
    (!T.isShaderMaterial && !T.isRawShaderMaterial || T.clipping === !0) && (Rt.clippingPlanes = S.uniform), el(T, Tt), F.needsLights = Eu(T), F.lightsStateVersion = Mt, F.needsLights && (Rt.ambientLightColor.value = Y.state.ambient, Rt.lightProbe.value = Y.state.probe, Rt.directionalLights.value = Y.state.directional, Rt.directionalLightShadows.value = Y.state.directionalShadow, Rt.spotLights.value = Y.state.spot, Rt.spotLightShadows.value = Y.state.spotShadow, Rt.rectAreaLights.value = Y.state.rectArea, Rt.ltc_1.value = Y.state.rectAreaLTC1, Rt.ltc_2.value = Y.state.rectAreaLTC2, Rt.pointLights.value = Y.state.point, Rt.pointLightShadows.value = Y.state.pointShadow, Rt.hemisphereLights.value = Y.state.hemi, Rt.directionalShadowMap.value = Y.state.directionalShadowMap, Rt.directionalShadowMatrix.value = Y.state.directionalShadowMatrix, Rt.spotShadowMap.value = Y.state.spotShadowMap, Rt.spotLightMatrix.value = Y.state.spotLightMatrix, Rt.spotLightMap.value = Y.state.spotLightMap, Rt.pointShadowMap.value = Y.state.pointShadowMap, Rt.pointShadowMatrix.value = Y.state.pointShadowMatrix);
    const Kt = Dt.getUniforms(), Be = ks.seqWithValue(Kt.seq, Rt);
    return F.currentProgram = Dt, F.uniformsList = Be, Dt;
  }
  function el(T, N) {
    const X = St.get(T);
    X.outputEncoding = N.outputEncoding, X.instancing = N.instancing, X.skinning = N.skinning, X.morphTargets = N.morphTargets, X.morphNormals = N.morphNormals, X.morphColors = N.morphColors, X.morphTargetsCount = N.morphTargetsCount, X.numClippingPlanes = N.numClippingPlanes, X.numIntersection = N.numClipIntersection, X.vertexAlphas = N.vertexAlphas, X.vertexTangents = N.vertexTangents, X.toneMapping = N.toneMapping;
  }
  function wu(T, N, X, F, Y) {
    N.isScene !== !0 && (N = J), yt.resetTextureUnits();
    const _t = N.fog, Mt = F.isMeshStandardMaterial ? N.environment : null, Tt = x === null ? f.outputEncoding : x.isXRRenderTarget === !0 ? x.texture.encoding : Di, Et = (F.isMeshStandardMaterial ? ne : le).get(F.envMap || Mt), zt = F.vertexColors === !0 && !!X.attributes.color && X.attributes.color.itemSize === 4, Dt = !!F.normalMap && !!X.attributes.tangent, Rt = !!X.morphAttributes.position, Kt = !!X.morphAttributes.normal, Be = !!X.morphAttributes.color, Rn = F.toneMapped ? f.toneMapping : gn, li = X.morphAttributes.position || X.morphAttributes.normal || X.morphAttributes.color, Jt = li !== void 0 ? li.length : 0, It = St.get(F), aa = d.state.lights;
    if (G === !0 && (Q === !0 || T !== M)) {
      const Ge = T === M && F.id === y;
      S.setState(F, T, Ge);
    }
    let he = !1;
    F.version === It.__version ? (It.needsLights && It.lightsStateVersion !== aa.state.version || It.outputEncoding !== Tt || Y.isInstancedMesh && It.instancing === !1 || !Y.isInstancedMesh && It.instancing === !0 || Y.isSkinnedMesh && It.skinning === !1 || !Y.isSkinnedMesh && It.skinning === !0 || It.envMap !== Et || F.fog === !0 && It.fog !== _t || It.numClippingPlanes !== void 0 && (It.numClippingPlanes !== S.numPlanes || It.numIntersection !== S.numIntersection) || It.vertexAlphas !== zt || It.vertexTangents !== Dt || It.morphTargets !== Rt || It.morphNormals !== Kt || It.morphColors !== Be || It.toneMapping !== Rn || xt.isWebGL2 === !0 && It.morphTargetsCount !== Jt) && (he = !0) : (he = !0, It.__version = F.version);
    let ci = It.currentProgram;
    he === !0 && (ci = Je(F, N, Y));
    let nl = !1, Cr = !1, oa = !1;
    const Ae = ci.getUniforms(), hi = It.uniforms;
    if (dt.useProgram(ci.program) && (nl = !0, Cr = !0, oa = !0), F.id !== y && (y = F.id, Cr = !0), nl || M !== T) {
      if (Ae.setValue(q, "projectionMatrix", T.projectionMatrix), xt.logarithmicDepthBuffer && Ae.setValue(
        q,
        "logDepthBufFC",
        2 / (Math.log(T.far + 1) / Math.LN2)
      ), M !== T && (M = T, Cr = !0, oa = !0), F.isShaderMaterial || F.isMeshPhongMaterial || F.isMeshToonMaterial || F.isMeshStandardMaterial || F.envMap) {
        const Ge = Ae.map.cameraPosition;
        Ge !== void 0 && Ge.setValue(
          q,
          at.setFromMatrixPosition(T.matrixWorld)
        );
      }
      (F.isMeshPhongMaterial || F.isMeshToonMaterial || F.isMeshLambertMaterial || F.isMeshBasicMaterial || F.isMeshStandardMaterial || F.isShaderMaterial) && Ae.setValue(q, "isOrthographic", T.isOrthographicCamera === !0), (F.isMeshPhongMaterial || F.isMeshToonMaterial || F.isMeshLambertMaterial || F.isMeshBasicMaterial || F.isMeshStandardMaterial || F.isShaderMaterial || F.isShadowMaterial || Y.isSkinnedMesh) && Ae.setValue(q, "viewMatrix", T.matrixWorldInverse);
    }
    if (Y.isSkinnedMesh) {
      Ae.setOptional(q, Y, "bindMatrix"), Ae.setOptional(q, Y, "bindMatrixInverse");
      const Ge = Y.skeleton;
      Ge && (xt.floatVertexTextures ? (Ge.boneTexture === null && Ge.computeBoneTexture(), Ae.setValue(q, "boneTexture", Ge.boneTexture, yt), Ae.setValue(q, "boneTextureSize", Ge.boneTextureSize)) : console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."));
    }
    const la = X.morphAttributes;
    if ((la.position !== void 0 || la.normal !== void 0 || la.color !== void 0 && xt.isWebGL2 === !0) && it.update(Y, X, F, ci), (Cr || It.receiveShadow !== Y.receiveShadow) && (It.receiveShadow = Y.receiveShadow, Ae.setValue(q, "receiveShadow", Y.receiveShadow)), F.isMeshGouraudMaterial && F.envMap !== null && (hi.envMap.value = Et, hi.flipEnvMap.value = Et.isCubeTexture && Et.isRenderTargetTexture === !1 ? -1 : 1), Cr && (Ae.setValue(q, "toneMappingExposure", f.toneMappingExposure), It.needsLights && Tu(hi, oa), _t && F.fog === !0 && Ke.refreshFogUniforms(hi, _t), Ke.refreshMaterialUniforms(hi, F, U, L, K), ks.upload(q, It.uniformsList, hi, yt)), F.isShaderMaterial && F.uniformsNeedUpdate === !0 && (ks.upload(q, It.uniformsList, hi, yt), F.uniformsNeedUpdate = !1), F.isSpriteMaterial && Ae.setValue(q, "center", Y.center), Ae.setValue(q, "modelViewMatrix", Y.modelViewMatrix), Ae.setValue(q, "normalMatrix", Y.normalMatrix), Ae.setValue(q, "modelMatrix", Y.matrixWorld), F.isShaderMaterial || F.isRawShaderMaterial) {
      const Ge = F.uniformsGroups;
      for (let ca = 0, Au = Ge.length; ca < Au; ca++)
        if (xt.isWebGL2) {
          const il = Ge[ca];
          ct.update(il, ci), ct.bind(il, ci);
        } else
          console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.");
    }
    return ci;
  }
  function Tu(T, N) {
    T.ambientLightColor.needsUpdate = N, T.lightProbe.needsUpdate = N, T.directionalLights.needsUpdate = N, T.directionalLightShadows.needsUpdate = N, T.pointLights.needsUpdate = N, T.pointLightShadows.needsUpdate = N, T.spotLights.needsUpdate = N, T.spotLightShadows.needsUpdate = N, T.rectAreaLights.needsUpdate = N, T.hemisphereLights.needsUpdate = N;
  }
  function Eu(T) {
    return T.isMeshLambertMaterial || T.isMeshToonMaterial || T.isMeshPhongMaterial || T.isMeshStandardMaterial || T.isShadowMaterial || T.isShaderMaterial && T.lights === !0;
  }
  this.getActiveCubeFace = function() {
    return _;
  }, this.getActiveMipmapLevel = function() {
    return b;
  }, this.getRenderTarget = function() {
    return x;
  }, this.setRenderTargetTextures = function(T, N, X) {
    St.get(T.texture).__webglTexture = N, St.get(T.depthTexture).__webglTexture = X;
    const F = St.get(T);
    F.__hasExternalTextures = !0, F.__hasExternalTextures && (F.__autoAllocateDepthBuffer = X === void 0, F.__autoAllocateDepthBuffer || ft.has("WEBGL_multisampled_render_to_texture") === !0 && (console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"), F.__useRenderToTexture = !1));
  }, this.setRenderTargetFramebuffer = function(T, N) {
    const X = St.get(T);
    X.__webglFramebuffer = N, X.__useDefaultFramebuffer = N === void 0;
  }, this.setRenderTarget = function(T, N = 0, X = 0) {
    x = T, _ = N, b = X;
    let F = !0, Y = null, _t = !1, Mt = !1;
    if (T) {
      const Et = St.get(T);
      Et.__useDefaultFramebuffer !== void 0 ? (dt.bindFramebuffer(36160, null), F = !1) : Et.__webglFramebuffer === void 0 ? yt.setupRenderTarget(T) : Et.__hasExternalTextures && yt.rebindTextures(T, St.get(T.texture).__webglTexture, St.get(T.depthTexture).__webglTexture);
      const zt = T.texture;
      (zt.isData3DTexture || zt.isDataArrayTexture || zt.isCompressedArrayTexture) && (Mt = !0);
      const Dt = St.get(T).__webglFramebuffer;
      T.isWebGLCubeRenderTarget ? (Y = Dt[N], _t = !0) : xt.isWebGL2 && T.samples > 0 && yt.useMultisampledRTT(T) === !1 ? Y = St.get(T).__webglMultisampledFramebuffer : Y = Dt, A.copy(T.viewport), P.copy(T.scissor), v = T.scissorTest;
    } else
      A.copy(I).multiplyScalar(U).floor(), P.copy(k).multiplyScalar(U).floor(), v = $;
    if (dt.bindFramebuffer(36160, Y) && xt.drawBuffers && F && dt.drawBuffers(T, Y), dt.viewport(A), dt.scissor(P), dt.setScissorTest(v), _t) {
      const Et = St.get(T.texture);
      q.framebufferTexture2D(36160, 36064, 34069 + N, Et.__webglTexture, X);
    } else if (Mt) {
      const Et = St.get(T.texture), zt = N || 0;
      q.framebufferTextureLayer(36160, 36064, Et.__webglTexture, X || 0, zt);
    }
    y = -1;
  }, this.readRenderTargetPixels = function(T, N, X, F, Y, _t, Mt) {
    if (!(T && T.isWebGLRenderTarget)) {
      console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
      return;
    }
    let Tt = St.get(T).__webglFramebuffer;
    if (T.isWebGLCubeRenderTarget && Mt !== void 0 && (Tt = Tt[Mt]), Tt) {
      dt.bindFramebuffer(36160, Tt);
      try {
        const Et = T.texture, zt = Et.format, Dt = Et.type;
        if (zt !== mn && C.convert(zt) !== q.getParameter(35739)) {
          console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
          return;
        }
        const Rt = Dt === Kr && (ft.has("EXT_color_buffer_half_float") || xt.isWebGL2 && ft.has("EXT_color_buffer_float"));
        if (Dt !== Li && C.convert(Dt) !== q.getParameter(35738) && // Edge and Chrome Mac < 52 (#9513)
        !(Dt === bi && (xt.isWebGL2 || ft.has("OES_texture_float") || ft.has("WEBGL_color_buffer_float"))) && // Chrome Mac >= 52 and Firefox
        !Rt) {
          console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
          return;
        }
        N >= 0 && N <= T.width - F && X >= 0 && X <= T.height - Y && q.readPixels(N, X, F, Y, C.convert(zt), C.convert(Dt), _t);
      } finally {
        const Et = x !== null ? St.get(x).__webglFramebuffer : null;
        dt.bindFramebuffer(36160, Et);
      }
    }
  }, this.copyFramebufferToTexture = function(T, N, X = 0) {
    const F = Math.pow(2, -X), Y = Math.floor(N.image.width * F), _t = Math.floor(N.image.height * F);
    yt.setTexture2D(N, 0), q.copyTexSubImage2D(3553, X, 0, 0, T.x, T.y, Y, _t), dt.unbindTexture();
  }, this.copyTextureToTexture = function(T, N, X, F = 0) {
    const Y = N.image.width, _t = N.image.height, Mt = C.convert(X.format), Tt = C.convert(X.type);
    yt.setTexture2D(X, 0), q.pixelStorei(37440, X.flipY), q.pixelStorei(37441, X.premultiplyAlpha), q.pixelStorei(3317, X.unpackAlignment), N.isDataTexture ? q.texSubImage2D(3553, F, T.x, T.y, Y, _t, Mt, Tt, N.image.data) : N.isCompressedTexture ? q.compressedTexSubImage2D(3553, F, T.x, T.y, N.mipmaps[0].width, N.mipmaps[0].height, Mt, N.mipmaps[0].data) : q.texSubImage2D(3553, F, T.x, T.y, Mt, Tt, N.image), F === 0 && X.generateMipmaps && q.generateMipmap(3553), dt.unbindTexture();
  }, this.copyTextureToTexture3D = function(T, N, X, F, Y = 0) {
    if (f.isWebGL1Renderer) {
      console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");
      return;
    }
    const _t = T.max.x - T.min.x + 1, Mt = T.max.y - T.min.y + 1, Tt = T.max.z - T.min.z + 1, Et = C.convert(F.format), zt = C.convert(F.type);
    let Dt;
    if (F.isData3DTexture)
      yt.setTexture3D(F, 0), Dt = 32879;
    else if (F.isDataArrayTexture)
      yt.setTexture2DArray(F, 0), Dt = 35866;
    else {
      console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");
      return;
    }
    q.pixelStorei(37440, F.flipY), q.pixelStorei(37441, F.premultiplyAlpha), q.pixelStorei(3317, F.unpackAlignment);
    const Rt = q.getParameter(3314), Kt = q.getParameter(32878), Be = q.getParameter(3316), Rn = q.getParameter(3315), li = q.getParameter(32877), Jt = X.isCompressedTexture ? X.mipmaps[0] : X.image;
    q.pixelStorei(3314, Jt.width), q.pixelStorei(32878, Jt.height), q.pixelStorei(3316, T.min.x), q.pixelStorei(3315, T.min.y), q.pixelStorei(32877, T.min.z), X.isDataTexture || X.isData3DTexture ? q.texSubImage3D(Dt, Y, N.x, N.y, N.z, _t, Mt, Tt, Et, zt, Jt.data) : X.isCompressedArrayTexture ? (console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."), q.compressedTexSubImage3D(Dt, Y, N.x, N.y, N.z, _t, Mt, Tt, Et, Jt.data)) : q.texSubImage3D(Dt, Y, N.x, N.y, N.z, _t, Mt, Tt, Et, zt, Jt), q.pixelStorei(3314, Rt), q.pixelStorei(32878, Kt), q.pixelStorei(3316, Be), q.pixelStorei(3315, Rn), q.pixelStorei(32877, li), Y === 0 && F.generateMipmaps && q.generateMipmap(Dt), dt.unbindTexture();
  }, this.initTexture = function(T) {
    T.isCubeTexture ? yt.setTextureCube(T, 0) : T.isData3DTexture ? yt.setTexture3D(T, 0) : T.isDataArrayTexture || T.isCompressedArrayTexture ? yt.setTexture2DArray(T, 0) : yt.setTexture2D(T, 0), dt.unbindTexture();
  }, this.resetState = function() {
    _ = 0, b = 0, x = null, dt.reset(), z.reset();
  }, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
}
class O_ extends vh {
}
O_.prototype.isWebGL1Renderer = !0;
class z_ extends ze {
  constructor() {
    super(), this.isScene = !0, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  copy(t, e) {
    return super.copy(t, e), t.background !== null && (this.background = t.background.clone()), t.environment !== null && (this.environment = t.environment.clone()), t.fog !== null && (this.fog = t.fog.clone()), this.backgroundBlurriness = t.backgroundBlurriness, this.backgroundIntensity = t.backgroundIntensity, t.overrideMaterial !== null && (this.overrideMaterial = t.overrideMaterial.clone()), this.matrixAutoUpdate = t.matrixAutoUpdate, this;
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return this.fog !== null && (e.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (e.backgroundBlurriness = this.backgroundBlurriness), this.backgroundIntensity !== 1 && (e.backgroundIntensity = this.backgroundIntensity), e;
  }
  // @deprecated
  get autoUpdate() {
    return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."), this.matrixWorldAutoUpdate;
  }
  set autoUpdate(t) {
    console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."), this.matrixWorldAutoUpdate = t;
  }
}
class xh {
  constructor(t, e) {
    this.isInterleavedBuffer = !0, this.array = t, this.stride = e, this.count = t !== void 0 ? t.length / e : 0, this.usage = ao, this.updateRange = { offset: 0, count: -1 }, this.version = 0, this.uuid = Gn();
  }
  onUploadCallback() {
  }
  set needsUpdate(t) {
    t === !0 && this.version++;
  }
  setUsage(t) {
    return this.usage = t, this;
  }
  copy(t) {
    return this.array = new t.array.constructor(t.array), this.count = t.count, this.stride = t.stride, this.usage = t.usage, this;
  }
  copyAt(t, e, n) {
    t *= this.stride, n *= e.stride;
    for (let i = 0, r = this.stride; i < r; i++)
      this.array[t + i] = e.array[n + i];
    return this;
  }
  set(t, e = 0) {
    return this.array.set(t, e), this;
  }
  clone(t) {
    t.arrayBuffers === void 0 && (t.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = Gn()), t.arrayBuffers[this.array.buffer._uuid] === void 0 && (t.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
    const e = new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]), n = new this.constructor(e, this.stride);
    return n.setUsage(this.usage), n;
  }
  onUpload(t) {
    return this.onUploadCallback = t, this;
  }
  toJSON(t) {
    return t.arrayBuffers === void 0 && (t.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = Gn()), t.arrayBuffers[this.array.buffer._uuid] === void 0 && (t.arrayBuffers[this.array.buffer._uuid] = Array.from(new Uint32Array(this.array.buffer))), {
      uuid: this.uuid,
      buffer: this.array.buffer._uuid,
      type: this.array.constructor.name,
      stride: this.stride
    };
  }
}
const Pe = /* @__PURE__ */ new R();
class Tn {
  constructor(t, e, n, i = !1) {
    this.isInterleavedBufferAttribute = !0, this.name = "", this.data = t, this.itemSize = e, this.offset = n, this.normalized = i;
  }
  get count() {
    return this.data.count;
  }
  get array() {
    return this.data.array;
  }
  set needsUpdate(t) {
    this.data.needsUpdate = t;
  }
  applyMatrix4(t) {
    for (let e = 0, n = this.data.count; e < n; e++)
      Pe.fromBufferAttribute(this, e), Pe.applyMatrix4(t), this.setXYZ(e, Pe.x, Pe.y, Pe.z);
    return this;
  }
  applyNormalMatrix(t) {
    for (let e = 0, n = this.count; e < n; e++)
      Pe.fromBufferAttribute(this, e), Pe.applyNormalMatrix(t), this.setXYZ(e, Pe.x, Pe.y, Pe.z);
    return this;
  }
  transformDirection(t) {
    for (let e = 0, n = this.count; e < n; e++)
      Pe.fromBufferAttribute(this, e), Pe.transformDirection(t), this.setXYZ(e, Pe.x, Pe.y, Pe.z);
    return this;
  }
  setX(t, e) {
    return this.normalized && (e = Gt(e, this.array)), this.data.array[t * this.data.stride + this.offset] = e, this;
  }
  setY(t, e) {
    return this.normalized && (e = Gt(e, this.array)), this.data.array[t * this.data.stride + this.offset + 1] = e, this;
  }
  setZ(t, e) {
    return this.normalized && (e = Gt(e, this.array)), this.data.array[t * this.data.stride + this.offset + 2] = e, this;
  }
  setW(t, e) {
    return this.normalized && (e = Gt(e, this.array)), this.data.array[t * this.data.stride + this.offset + 3] = e, this;
  }
  getX(t) {
    let e = this.data.array[t * this.data.stride + this.offset];
    return this.normalized && (e = Bn(e, this.array)), e;
  }
  getY(t) {
    let e = this.data.array[t * this.data.stride + this.offset + 1];
    return this.normalized && (e = Bn(e, this.array)), e;
  }
  getZ(t) {
    let e = this.data.array[t * this.data.stride + this.offset + 2];
    return this.normalized && (e = Bn(e, this.array)), e;
  }
  getW(t) {
    let e = this.data.array[t * this.data.stride + this.offset + 3];
    return this.normalized && (e = Bn(e, this.array)), e;
  }
  setXY(t, e, n) {
    return t = t * this.data.stride + this.offset, this.normalized && (e = Gt(e, this.array), n = Gt(n, this.array)), this.data.array[t + 0] = e, this.data.array[t + 1] = n, this;
  }
  setXYZ(t, e, n, i) {
    return t = t * this.data.stride + this.offset, this.normalized && (e = Gt(e, this.array), n = Gt(n, this.array), i = Gt(i, this.array)), this.data.array[t + 0] = e, this.data.array[t + 1] = n, this.data.array[t + 2] = i, this;
  }
  setXYZW(t, e, n, i, r) {
    return t = t * this.data.stride + this.offset, this.normalized && (e = Gt(e, this.array), n = Gt(n, this.array), i = Gt(i, this.array), r = Gt(r, this.array)), this.data.array[t + 0] = e, this.data.array[t + 1] = n, this.data.array[t + 2] = i, this.data.array[t + 3] = r, this;
  }
  clone(t) {
    if (t === void 0) {
      console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");
      const e = [];
      for (let n = 0; n < this.count; n++) {
        const i = n * this.data.stride + this.offset;
        for (let r = 0; r < this.itemSize; r++)
          e.push(this.data.array[i + r]);
      }
      return new _n(new this.array.constructor(e), this.itemSize, this.normalized);
    } else
      return t.interleavedBuffers === void 0 && (t.interleavedBuffers = {}), t.interleavedBuffers[this.data.uuid] === void 0 && (t.interleavedBuffers[this.data.uuid] = this.data.clone(t)), new Tn(t.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized);
  }
  toJSON(t) {
    if (t === void 0) {
      console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");
      const e = [];
      for (let n = 0; n < this.count; n++) {
        const i = n * this.data.stride + this.offset;
        for (let r = 0; r < this.itemSize; r++)
          e.push(this.data.array[i + r]);
      }
      return {
        itemSize: this.itemSize,
        type: this.array.constructor.name,
        array: e,
        normalized: this.normalized
      };
    } else
      return t.interleavedBuffers === void 0 && (t.interleavedBuffers = {}), t.interleavedBuffers[this.data.uuid] === void 0 && (t.interleavedBuffers[this.data.uuid] = this.data.toJSON(t)), {
        isInterleavedBufferAttribute: !0,
        itemSize: this.itemSize,
        data: this.data.uuid,
        offset: this.offset,
        normalized: this.normalized
      };
  }
}
class ei extends Er {
  constructor(t) {
    super(), this.isSpriteMaterial = !0, this.type = "SpriteMaterial", this.color = new Ot(16777215), this.map = null, this.alphaMap = null, this.rotation = 0, this.sizeAttenuation = !0, this.transparent = !0, this.fog = !0, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.color.copy(t.color), this.map = t.map, this.alphaMap = t.alphaMap, this.rotation = t.rotation, this.sizeAttenuation = t.sizeAttenuation, this.fog = t.fog, this;
  }
}
let tr;
const Fr = /* @__PURE__ */ new R(), er = /* @__PURE__ */ new R(), nr = /* @__PURE__ */ new R(), ir = /* @__PURE__ */ new vt(), Nr = /* @__PURE__ */ new vt(), yh = /* @__PURE__ */ new ee(), Ls = /* @__PURE__ */ new R(), Ur = /* @__PURE__ */ new R(), Ds = /* @__PURE__ */ new R(), dc = /* @__PURE__ */ new vt(), Ba = /* @__PURE__ */ new vt(), fc = /* @__PURE__ */ new vt();
class Oi extends ze {
  constructor(t) {
    if (super(), this.isSprite = !0, this.type = "Sprite", tr === void 0) {
      tr = new xn();
      const e = new Float32Array([
        -0.5,
        -0.5,
        0,
        0,
        0,
        0.5,
        -0.5,
        0,
        1,
        0,
        0.5,
        0.5,
        0,
        1,
        1,
        -0.5,
        0.5,
        0,
        0,
        1
      ]), n = new xh(e, 5);
      tr.setIndex([0, 1, 2, 0, 2, 3]), tr.setAttribute("position", new Tn(n, 3, 0, !1)), tr.setAttribute("uv", new Tn(n, 2, 3, !1));
    }
    this.geometry = tr, this.material = t !== void 0 ? t : new ei(), this.center = new vt(0.5, 0.5);
  }
  raycast(t, e) {
    t.camera === null && console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'), er.setFromMatrixScale(this.matrixWorld), yh.copy(t.camera.matrixWorld), this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse, this.matrixWorld), nr.setFromMatrixPosition(this.modelViewMatrix), t.camera.isPerspectiveCamera && this.material.sizeAttenuation === !1 && er.multiplyScalar(-nr.z);
    const n = this.material.rotation;
    let i, r;
    n !== 0 && (r = Math.cos(n), i = Math.sin(n));
    const o = this.center;
    Rs(Ls.set(-0.5, -0.5, 0), nr, o, er, i, r), Rs(Ur.set(0.5, -0.5, 0), nr, o, er, i, r), Rs(Ds.set(0.5, 0.5, 0), nr, o, er, i, r), dc.set(0, 0), Ba.set(1, 0), fc.set(1, 1);
    let s = t.ray.intersectTriangle(Ls, Ur, Ds, !1, Fr);
    if (s === null && (Rs(Ur.set(-0.5, 0.5, 0), nr, o, er, i, r), Ba.set(0, 1), s = t.ray.intersectTriangle(Ls, Ds, Ur, !1, Fr), s === null))
      return;
    const l = t.ray.origin.distanceTo(Fr);
    l < t.near || l > t.far || e.push({
      distance: l,
      point: Fr.clone(),
      uv: Mn.getUV(Fr, Ls, Ur, Ds, dc, Ba, fc, new vt()),
      face: null,
      object: this
    });
  }
  copy(t, e) {
    return super.copy(t, e), t.center !== void 0 && this.center.copy(t.center), this.material = t.material, this;
  }
}
function Rs(a, t, e, n, i, r) {
  ir.subVectors(a, e).addScalar(0.5).multiply(n), i !== void 0 ? (Nr.x = r * ir.x - i * ir.y, Nr.y = i * ir.x + r * ir.y) : Nr.copy(ir), a.copy(t), a.x += Nr.x, a.y += Nr.y, a.applyMatrix4(yh);
}
class F_ {
  constructor() {
    this.type = "Curve", this.arcLengthDivisions = 200;
  }
  // Virtual base class method to overwrite and implement in subclasses
  //	- t [0 .. 1]
  getPoint() {
    return console.warn("THREE.Curve: .getPoint() not implemented."), null;
  }
  // Get point at relative position in curve according to arc length
  // - u [0 .. 1]
  getPointAt(t, e) {
    const n = this.getUtoTmapping(t);
    return this.getPoint(n, e);
  }
  // Get sequence of points using getPoint( t )
  getPoints(t = 5) {
    const e = [];
    for (let n = 0; n <= t; n++)
      e.push(this.getPoint(n / t));
    return e;
  }
  // Get sequence of points using getPointAt( u )
  getSpacedPoints(t = 5) {
    const e = [];
    for (let n = 0; n <= t; n++)
      e.push(this.getPointAt(n / t));
    return e;
  }
  // Get total curve arc length
  getLength() {
    const t = this.getLengths();
    return t[t.length - 1];
  }
  // Get list of cumulative segment lengths
  getLengths(t = this.arcLengthDivisions) {
    if (this.cacheArcLengths && this.cacheArcLengths.length === t + 1 && !this.needsUpdate)
      return this.cacheArcLengths;
    this.needsUpdate = !1;
    const e = [];
    let n, i = this.getPoint(0), r = 0;
    e.push(0);
    for (let o = 1; o <= t; o++)
      n = this.getPoint(o / t), r += n.distanceTo(i), e.push(r), i = n;
    return this.cacheArcLengths = e, e;
  }
  updateArcLengths() {
    this.needsUpdate = !0, this.getLengths();
  }
  // Given u ( 0 .. 1 ), get a t to find p. This gives you points which are equidistant
  getUtoTmapping(t, e) {
    const n = this.getLengths();
    let i = 0;
    const r = n.length;
    let o;
    e ? o = e : o = t * n[r - 1];
    let s = 0, l = r - 1, c;
    for (; s <= l; )
      if (i = Math.floor(s + (l - s) / 2), c = n[i] - o, c < 0)
        s = i + 1;
      else if (c > 0)
        l = i - 1;
      else {
        l = i;
        break;
      }
    if (i = l, n[i] === o)
      return i / (r - 1);
    const h = n[i], d = n[i + 1] - h, m = (o - h) / d;
    return (i + m) / (r - 1);
  }
  // Returns a unit vector tangent at t
  // In case any sub curve does not implement its tangent derivation,
  // 2 points a small delta apart will be used to find its gradient
  // which seems to give a reasonable approximation
  getTangent(t, e) {
    let i = t - 1e-4, r = t + 1e-4;
    i < 0 && (i = 0), r > 1 && (r = 1);
    const o = this.getPoint(i), s = this.getPoint(r), l = e || (o.isVector2 ? new vt() : new R());
    return l.copy(s).sub(o).normalize(), l;
  }
  getTangentAt(t, e) {
    const n = this.getUtoTmapping(t);
    return this.getTangent(n, e);
  }
  computeFrenetFrames(t, e) {
    const n = new R(), i = [], r = [], o = [], s = new R(), l = new ee();
    for (let m = 0; m <= t; m++) {
      const g = m / t;
      i[m] = this.getTangentAt(g, new R());
    }
    r[0] = new R(), o[0] = new R();
    let c = Number.MAX_VALUE;
    const h = Math.abs(i[0].x), u = Math.abs(i[0].y), d = Math.abs(i[0].z);
    h <= c && (c = h, n.set(1, 0, 0)), u <= c && (c = u, n.set(0, 1, 0)), d <= c && n.set(0, 0, 1), s.crossVectors(i[0], n).normalize(), r[0].crossVectors(i[0], s), o[0].crossVectors(i[0], r[0]);
    for (let m = 1; m <= t; m++) {
      if (r[m] = r[m - 1].clone(), o[m] = o[m - 1].clone(), s.crossVectors(i[m - 1], i[m]), s.length() > Number.EPSILON) {
        s.normalize();
        const g = Math.acos(fe(i[m - 1].dot(i[m]), -1, 1));
        r[m].applyMatrix4(l.makeRotationAxis(s, g));
      }
      o[m].crossVectors(i[m], r[m]);
    }
    if (e === !0) {
      let m = Math.acos(fe(r[0].dot(r[t]), -1, 1));
      m /= t, i[0].dot(s.crossVectors(r[0], r[t])) > 0 && (m = -m);
      for (let g = 1; g <= t; g++)
        r[g].applyMatrix4(l.makeRotationAxis(i[g], m * g)), o[g].crossVectors(i[g], r[g]);
    }
    return {
      tangents: i,
      normals: r,
      binormals: o
    };
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    return this.arcLengthDivisions = t.arcLengthDivisions, this;
  }
  toJSON() {
    const t = {
      metadata: {
        version: 4.5,
        type: "Curve",
        generator: "Curve.toJSON"
      }
    };
    return t.arcLengthDivisions = this.arcLengthDivisions, t.type = this.type, t;
  }
  fromJSON(t) {
    return this.arcLengthDivisions = t.arcLengthDivisions, this;
  }
}
function N_(a, t) {
  const e = 1 - a;
  return e * e * t;
}
function U_(a, t) {
  return 2 * (1 - a) * a * t;
}
function k_(a, t) {
  return a * a * t;
}
function Ga(a, t, e, n) {
  return N_(a, t) + U_(a, e) + k_(a, n);
}
class B_ extends F_ {
  constructor(t = new R(), e = new R(), n = new R()) {
    super(), this.isQuadraticBezierCurve3 = !0, this.type = "QuadraticBezierCurve3", this.v0 = t, this.v1 = e, this.v2 = n;
  }
  getPoint(t, e = new R()) {
    const n = e, i = this.v0, r = this.v1, o = this.v2;
    return n.set(
      Ga(t, i.x, r.x, o.x),
      Ga(t, i.y, r.y, o.y),
      Ga(t, i.z, r.z, o.z)
    ), n;
  }
  copy(t) {
    return super.copy(t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this;
  }
  toJSON() {
    const t = super.toJSON();
    return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t;
  }
  fromJSON(t) {
    return super.fromJSON(t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this;
  }
}
class Xs extends xn {
  constructor(t = 1, e = 32, n = 16, i = 0, r = Math.PI * 2, o = 0, s = Math.PI) {
    super(), this.type = "SphereGeometry", this.parameters = {
      radius: t,
      widthSegments: e,
      heightSegments: n,
      phiStart: i,
      phiLength: r,
      thetaStart: o,
      thetaLength: s
    }, e = Math.max(3, Math.floor(e)), n = Math.max(2, Math.floor(n));
    const l = Math.min(o + s, Math.PI);
    let c = 0;
    const h = [], u = new R(), d = new R(), m = [], g = [], f = [], p = [];
    for (let _ = 0; _ <= n; _++) {
      const b = [], x = _ / n;
      let y = 0;
      _ == 0 && o == 0 ? y = 0.5 / e : _ == n && l == Math.PI && (y = -0.5 / e);
      for (let M = 0; M <= e; M++) {
        const A = M / e;
        u.x = -t * Math.cos(i + A * r) * Math.sin(o + x * s), u.y = t * Math.cos(o + x * s), u.z = t * Math.sin(i + A * r) * Math.sin(o + x * s), g.push(u.x, u.y, u.z), d.copy(u).normalize(), f.push(d.x, d.y, d.z), p.push(A + y, 1 - x), b.push(c++);
      }
      h.push(b);
    }
    for (let _ = 0; _ < n; _++)
      for (let b = 0; b < e; b++) {
        const x = h[_][b + 1], y = h[_][b], M = h[_ + 1][b], A = h[_ + 1][b + 1];
        (_ !== 0 || o > 0) && m.push(x, y, A), (_ !== n - 1 || l < Math.PI) && m.push(y, M, A);
      }
    this.setIndex(m), this.setAttribute("position", new $e(g, 3)), this.setAttribute("normal", new $e(f, 3)), this.setAttribute("uv", new $e(p, 2));
  }
  static fromJSON(t) {
    return new Xs(t.radius, t.widthSegments, t.heightSegments, t.phiStart, t.phiLength, t.thetaStart, t.thetaLength);
  }
}
class G_ extends xn {
  constructor(t = null) {
    if (super(), this.type = "WireframeGeometry", this.parameters = {
      geometry: t
    }, t !== null) {
      const e = [], n = /* @__PURE__ */ new Set(), i = new R(), r = new R();
      if (t.index !== null) {
        const o = t.attributes.position, s = t.index;
        let l = t.groups;
        l.length === 0 && (l = [{ start: 0, count: s.count, materialIndex: 0 }]);
        for (let c = 0, h = l.length; c < h; ++c) {
          const u = l[c], d = u.start, m = u.count;
          for (let g = d, f = d + m; g < f; g += 3)
            for (let p = 0; p < 3; p++) {
              const _ = s.getX(g + p), b = s.getX(g + (p + 1) % 3);
              i.fromBufferAttribute(o, _), r.fromBufferAttribute(o, b), pc(i, r, n) === !0 && (e.push(i.x, i.y, i.z), e.push(r.x, r.y, r.z));
            }
        }
      } else {
        const o = t.attributes.position;
        for (let s = 0, l = o.count / 3; s < l; s++)
          for (let c = 0; c < 3; c++) {
            const h = 3 * s + c, u = 3 * s + (c + 1) % 3;
            i.fromBufferAttribute(o, h), r.fromBufferAttribute(o, u), pc(i, r, n) === !0 && (e.push(i.x, i.y, i.z), e.push(r.x, r.y, r.z));
          }
      }
      this.setAttribute("position", new $e(e, 3));
    }
  }
}
function pc(a, t, e) {
  const n = `${a.x},${a.y},${a.z}-${t.x},${t.y},${t.z}`, i = `${t.x},${t.y},${t.z}-${a.x},${a.y},${a.z}`;
  return e.has(n) === !0 || e.has(i) === !0 ? !1 : (e.add(n), e.add(i), !0);
}
class V_ extends Er {
  constructor(t) {
    super(), this.isMeshMatcapMaterial = !0, this.defines = { MATCAP: "" }, this.type = "MeshMatcapMaterial", this.color = new Ot(16777215), this.matcap = null, this.map = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = Qc, this.normalScale = new vt(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.alphaMap = null, this.flatShading = !1, this.fog = !0, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.defines = { MATCAP: "" }, this.color.copy(t.color), this.matcap = t.matcap, this.map = t.map, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.alphaMap = t.alphaMap, this.flatShading = t.flatShading, this.fog = t.fog, this;
  }
}
const mc = {
  enabled: !1,
  files: {},
  add: function(a, t) {
    this.enabled !== !1 && (this.files[a] = t);
  },
  get: function(a) {
    if (this.enabled !== !1)
      return this.files[a];
  },
  remove: function(a) {
    delete this.files[a];
  },
  clear: function() {
    this.files = {};
  }
};
class bh {
  constructor(t, e, n) {
    const i = this;
    let r = !1, o = 0, s = 0, l;
    const c = [];
    this.onStart = void 0, this.onLoad = t, this.onProgress = e, this.onError = n, this.itemStart = function(h) {
      s++, r === !1 && i.onStart !== void 0 && i.onStart(h, o, s), r = !0;
    }, this.itemEnd = function(h) {
      o++, i.onProgress !== void 0 && i.onProgress(h, o, s), o === s && (r = !1, i.onLoad !== void 0 && i.onLoad());
    }, this.itemError = function(h) {
      i.onError !== void 0 && i.onError(h);
    }, this.resolveURL = function(h) {
      return l ? l(h) : h;
    }, this.setURLModifier = function(h) {
      return l = h, this;
    }, this.addHandler = function(h, u) {
      return c.push(h, u), this;
    }, this.removeHandler = function(h) {
      const u = c.indexOf(h);
      return u !== -1 && c.splice(u, 2), this;
    }, this.getHandler = function(h) {
      for (let u = 0, d = c.length; u < d; u += 2) {
        const m = c[u], g = c[u + 1];
        if (m.global && (m.lastIndex = 0), m.test(h))
          return g;
      }
      return null;
    };
  }
}
const H_ = /* @__PURE__ */ new bh();
class Mh {
  constructor(t) {
    this.manager = t !== void 0 ? t : H_, this.crossOrigin = "anonymous", this.withCredentials = !1, this.path = "", this.resourcePath = "", this.requestHeader = {};
  }
  load() {
  }
  loadAsync(t, e) {
    const n = this;
    return new Promise(function(i, r) {
      n.load(t, i, e, r);
    });
  }
  parse() {
  }
  setCrossOrigin(t) {
    return this.crossOrigin = t, this;
  }
  setWithCredentials(t) {
    return this.withCredentials = t, this;
  }
  setPath(t) {
    return this.path = t, this;
  }
  setResourcePath(t) {
    return this.resourcePath = t, this;
  }
  setRequestHeader(t) {
    return this.requestHeader = t, this;
  }
}
class W_ extends Mh {
  constructor(t) {
    super(t);
  }
  load(t, e, n, i) {
    this.path !== void 0 && (t = this.path + t), t = this.manager.resolveURL(t);
    const r = this, o = mc.get(t);
    if (o !== void 0)
      return r.manager.itemStart(t), setTimeout(function() {
        e && e(o), r.manager.itemEnd(t);
      }, 0), o;
    const s = Qr("img");
    function l() {
      h(), mc.add(t, this), e && e(this), r.manager.itemEnd(t);
    }
    function c(u) {
      h(), i && i(u), r.manager.itemError(t), r.manager.itemEnd(t);
    }
    function h() {
      s.removeEventListener("load", l, !1), s.removeEventListener("error", c, !1);
    }
    return s.addEventListener("load", l, !1), s.addEventListener("error", c, !1), t.slice(0, 5) !== "data:" && this.crossOrigin !== void 0 && (s.crossOrigin = this.crossOrigin), r.manager.itemStart(t), s.src = t, s;
  }
}
class X_ extends Mh {
  constructor(t) {
    super(t);
  }
  load(t, e, n, i) {
    const r = new Oe(), o = new W_(this.manager);
    return o.setCrossOrigin(this.crossOrigin), o.setPath(this.path), o.load(t, function(s) {
      r.image = s, r.needsUpdate = !0, e !== void 0 && e(r);
    }, n, i), r;
  }
}
class q_ extends xn {
  constructor() {
    super(), this.isInstancedBufferGeometry = !0, this.type = "InstancedBufferGeometry", this.instanceCount = 1 / 0;
  }
  copy(t) {
    return super.copy(t), this.instanceCount = t.instanceCount, this;
  }
  toJSON() {
    const t = super.toJSON();
    return t.instanceCount = this.instanceCount, t.isInstancedBufferGeometry = !0, t;
  }
}
class ho extends xh {
  constructor(t, e, n = 1) {
    super(t, e), this.isInstancedInterleavedBuffer = !0, this.meshPerAttribute = n;
  }
  copy(t) {
    return super.copy(t), this.meshPerAttribute = t.meshPerAttribute, this;
  }
  clone(t) {
    const e = super.clone(t);
    return e.meshPerAttribute = this.meshPerAttribute, e;
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return e.isInstancedInterleavedBuffer = !0, e.meshPerAttribute = this.meshPerAttribute, e;
  }
}
class Y_ {
  constructor(t, e, n = 0, i = 1 / 0) {
    this.ray = new sh(t, e), this.near = n, this.far = i, this.camera = null, this.layers = new Ro(), this.params = {
      Mesh: {},
      Line: { threshold: 1 },
      LOD: {},
      Points: { threshold: 1 },
      Sprite: {}
    };
  }
  set(t, e) {
    this.ray.set(t, e);
  }
  setFromCamera(t, e) {
    e.isPerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(e.matrixWorld), this.ray.direction.set(t.x, t.y, 0.5).unproject(e).sub(this.ray.origin).normalize(), this.camera = e) : e.isOrthographicCamera ? (this.ray.origin.set(t.x, t.y, (e.near + e.far) / (e.near - e.far)).unproject(e), this.ray.direction.set(0, 0, -1).transformDirection(e.matrixWorld), this.camera = e) : console.error("THREE.Raycaster: Unsupported camera type: " + e.type);
  }
  intersectObject(t, e = !0, n = []) {
    return uo(t, this, n, e), n.sort(gc), n;
  }
  intersectObjects(t, e = !0, n = []) {
    for (let i = 0, r = t.length; i < r; i++)
      uo(t[i], this, n, e);
    return n.sort(gc), n;
  }
}
function gc(a, t) {
  return a.distance - t.distance;
}
function uo(a, t, e, n) {
  if (a.layers.test(t.layers) && a.raycast(t, e), n === !0) {
    const i = a.children;
    for (let r = 0, o = i.length; r < o; r++)
      uo(i[r], t, e, !0);
  }
}
class _c {
  constructor(t = 1, e = 0, n = 0) {
    return this.radius = t, this.phi = e, this.theta = n, this;
  }
  set(t, e, n) {
    return this.radius = t, this.phi = e, this.theta = n, this;
  }
  copy(t) {
    return this.radius = t.radius, this.phi = t.phi, this.theta = t.theta, this;
  }
  // restrict phi to be between EPS and PI-EPS
  makeSafe() {
    return this.phi = Math.max(1e-6, Math.min(Math.PI - 1e-6, this.phi)), this;
  }
  setFromVector3(t) {
    return this.setFromCartesianCoords(t.x, t.y, t.z);
  }
  setFromCartesianCoords(t, e, n) {
    return this.radius = Math.sqrt(t * t + e * e + n * n), this.radius === 0 ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(t, n), this.phi = Math.acos(fe(e / this.radius, -1, 1))), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const vc = /* @__PURE__ */ new R(), Is = /* @__PURE__ */ new R();
class $_ {
  constructor(t = new R(), e = new R()) {
    this.start = t, this.end = e;
  }
  set(t, e) {
    return this.start.copy(t), this.end.copy(e), this;
  }
  copy(t) {
    return this.start.copy(t.start), this.end.copy(t.end), this;
  }
  getCenter(t) {
    return t.addVectors(this.start, this.end).multiplyScalar(0.5);
  }
  delta(t) {
    return t.subVectors(this.end, this.start);
  }
  distanceSq() {
    return this.start.distanceToSquared(this.end);
  }
  distance() {
    return this.start.distanceTo(this.end);
  }
  at(t, e) {
    return this.delta(e).multiplyScalar(t).add(this.start);
  }
  closestPointToPointParameter(t, e) {
    vc.subVectors(t, this.start), Is.subVectors(this.end, this.start);
    const n = Is.dot(Is);
    let r = Is.dot(vc) / n;
    return e && (r = fe(r, 0, 1)), r;
  }
  closestPointToPoint(t, e, n) {
    const i = this.closestPointToPointParameter(t, e);
    return this.delta(n).multiplyScalar(i).add(this.start);
  }
  applyMatrix4(t) {
    return this.start.applyMatrix4(t), this.end.applyMatrix4(t), this;
  }
  equals(t) {
    return t.start.equals(this.start) && t.end.equals(this.end);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: {
  revision: Po
} }));
typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = Po);
var qr = function() {
  var a = 0, t = document.createElement("div");
  t.style.cssText = "position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000", t.addEventListener("click", function(h) {
    h.preventDefault(), n(++a % t.children.length);
  }, !1);
  function e(h) {
    return t.appendChild(h.dom), h;
  }
  function n(h) {
    for (var u = 0; u < t.children.length; u++)
      t.children[u].style.display = u === h ? "block" : "none";
    a = h;
  }
  var i = (performance || Date).now(), r = i, o = 0, s = e(new qr.Panel("FPS", "#0ff", "#002")), l = e(new qr.Panel("MS", "#0f0", "#020"));
  if (self.performance && self.performance.memory)
    var c = e(new qr.Panel("MB", "#f08", "#201"));
  return n(0), {
    REVISION: 16,
    dom: t,
    addPanel: e,
    showPanel: n,
    begin: function() {
      i = (performance || Date).now();
    },
    end: function() {
      o++;
      var h = (performance || Date).now();
      if (l.update(h - i, 200), h >= r + 1e3 && (s.update(o * 1e3 / (h - r), 100), r = h, o = 0, c)) {
        var u = performance.memory;
        c.update(u.usedJSHeapSize / 1048576, u.jsHeapSizeLimit / 1048576);
      }
      return h;
    },
    update: function() {
      i = this.end();
    },
    // Backwards Compatibility
    domElement: t,
    setMode: n
  };
};
qr.Panel = function(a, t, e) {
  var n = 1 / 0, i = 0, r = Math.round, o = r(window.devicePixelRatio || 1), s = 80 * o, l = 48 * o, c = 3 * o, h = 2 * o, u = 3 * o, d = 15 * o, m = 74 * o, g = 30 * o, f = document.createElement("canvas");
  f.width = s, f.height = l, f.style.cssText = "width:80px;height:48px";
  var p = f.getContext("2d");
  return p.font = "bold " + 9 * o + "px Helvetica,Arial,sans-serif", p.textBaseline = "top", p.fillStyle = e, p.fillRect(0, 0, s, l), p.fillStyle = t, p.fillText(a, c, h), p.fillRect(u, d, m, g), p.fillStyle = e, p.globalAlpha = 0.9, p.fillRect(u, d, m, g), {
    dom: f,
    update: function(_, b) {
      n = Math.min(n, _), i = Math.max(i, _), p.fillStyle = e, p.globalAlpha = 1, p.fillRect(0, 0, s, d), p.fillStyle = t, p.fillText(r(_) + " " + a + " (" + r(n) + "-" + r(i) + ")", c, h), p.drawImage(f, u + o, d, m - o, g, u, d, m - o, g), p.fillRect(u + m - o, d, o, g), p.fillStyle = e, p.globalAlpha = 0.9, p.fillRect(u + m - o, d, o, r((1 - _ / b) * g));
    }
  };
};
const j_ = qr;
class Z_ {
  constructor(t = !1) {
    this.allowTouch = t, this.x = this.slowX = this.xMax = 0, this.y = this.slowY = this.yMax = 0, this.pctX = this.slowPctX = 0, this.pctY = this.slowPctY = 0, this.isInited = this.isMobile = !1, this.start = Date.now(), this.current = this.start, this.delta = 16;
  }
  init() {
    window.addEventListener("mousemove", this.handleMouseMove.bind(this)), window.addEventListener("touchstart", this.handleTouchStart.bind(this)), this.allowTouch && (window.addEventListener("touchmove", this.handleTouchmove.bind(this)), window.addEventListener("touchend", this.handleTouchmove.bind(this))), window.addEventListener("resize", this.resizeHandler.bind(this)), this.resizeHandler(), this.loop();
  }
  resizeHandler() {
    this.xMax = window.innerWidth, this.yMax = window.innerHeight, this.x = Math.min(this.xMax, this.x), this.y = Math.min(this.yMax, this.y), this.isInited || (this.x = this.slowX = this.xMax * 0.5, this.y = this.slowY = this.yMax * 0.5, this.pctX = this.slowPctX = 0.5, this.pctY = this.slowPctY = 0.5);
  }
  handleTouchStart(t) {
    this.isMobile = !0, this.allowTouch && (this.isInited = !0, this.handleTouchmove(t));
  }
  handleTouchmove(t) {
    var e = t.touches[0];
    e && (this.x = e.clientX, this.y = e.clientY);
  }
  handleMouseMove(t) {
    (!this.isMobile || this.isMobile && this.allowTouch) && (this.x = t.clientX, this.y = t.clientY, this.isInited = !0);
  }
  loop() {
    const t = Date.now();
    this.delta = t - this.current, this.current = t, this.isInited && (this.slowX += (this.x - this.slowX) * 0.01 * this.delta, this.slowY += (this.y - this.slowY) * 0.01 * this.delta, this.pctX = this.x / this.xMax, this.pctY = this.y / this.yMax, this.slowPctX = this.slowX / this.xMax, this.slowPctY = this.slowY / this.yMax), window.requestAnimationFrame(this.loop.bind(this));
  }
}
const ar = new Z_(!0);
/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.17.0
 * @author George Michael Brower
 * @license MIT
 */
class An {
  constructor(t, e, n, i, r = "div") {
    this.parent = t, this.object = e, this.property = n, this._disabled = !1, this._hidden = !1, this.initialValue = this.getValue(), this.domElement = document.createElement("div"), this.domElement.classList.add("controller"), this.domElement.classList.add(i), this.$name = document.createElement("div"), this.$name.classList.add("name"), An.nextNameID = An.nextNameID || 0, this.$name.id = `lil-gui-name-${++An.nextNameID}`, this.$widget = document.createElement(r), this.$widget.classList.add("widget"), this.$disable = this.$widget, this.domElement.appendChild(this.$name), this.domElement.appendChild(this.$widget), this.parent.children.push(this), this.parent.controllers.push(this), this.parent.$children.appendChild(this.domElement), this._listenCallback = this._listenCallback.bind(this), this.name(n);
  }
  /**
   * Sets the name of the controller and its label in the GUI.
   * @param {string} name
   * @returns {this}
   */
  name(t) {
    return this._name = t, this.$name.innerHTML = t, this;
  }
  /**
   * Pass a function to be called whenever the value is modified by this controller.
   * The function receives the new value as its first parameter. The value of `this` will be the
   * controller.
   * @param {Function} callback
   * @returns {this}
   * @example
   * const controller = gui.add( object, 'property' );
   *
   * controller.onChange( function( v ) {
   * 	console.log( 'The value is now ' + v );
   * 	console.assert( this === controller );
   * } );
   */
  onChange(t) {
    return this._onChange = t, this;
  }
  /**
   * Calls the onChange methods of this controller and its parent GUI.
   * @protected
   */
  _callOnChange() {
    this.parent._callOnChange(this), this._onChange !== void 0 && this._onChange.call(this, this.getValue()), this._changed = !0;
  }
  /**
   * Pass a function to be called after this controller has been modified and loses focus.
   * @param {Function} callback
   * @returns {this}
   * @example
   * const controller = gui.add( object, 'property' );
   *
   * controller.onFinishChange( function( v ) {
   * 	console.log( 'Changes complete: ' + v );
   * 	console.assert( this === controller );
   * } );
   */
  onFinishChange(t) {
    return this._onFinishChange = t, this;
  }
  /**
   * Should be called by Controller when its widgets lose focus.
   * @protected
   */
  _callOnFinishChange() {
    this._changed && (this.parent._callOnFinishChange(this), this._onFinishChange !== void 0 && this._onFinishChange.call(this, this.getValue())), this._changed = !1;
  }
  /**
   * Sets the controller back to its initial value.
   * @returns {this}
   */
  reset() {
    return this.setValue(this.initialValue), this._callOnFinishChange(), this;
  }
  /**
   * Enables this controller.
   * @param {boolean} enabled
   * @returns {this}
   * @example
   * controller.enable();
   * controller.enable( false ); // disable
   * controller.enable( controller._disabled ); // toggle
   */
  enable(t = !0) {
    return this.disable(!t);
  }
  /**
   * Disables this controller.
   * @param {boolean} disabled
   * @returns {this}
   * @example
   * controller.disable();
   * controller.disable( false ); // enable
   * controller.disable( !controller._disabled ); // toggle
   */
  disable(t = !0) {
    return t === this._disabled ? this : (this._disabled = t, this.domElement.classList.toggle("disabled", t), this.$disable.toggleAttribute("disabled", t), this);
  }
  /**
   * Shows the Controller after it's been hidden.
   * @param {boolean} show
   * @returns {this}
   * @example
   * controller.show();
   * controller.show( false ); // hide
   * controller.show( controller._hidden ); // toggle
   */
  show(t = !0) {
    return this._hidden = !t, this.domElement.style.display = this._hidden ? "none" : "", this;
  }
  /**
   * Hides the Controller.
   * @returns {this}
   */
  hide() {
    return this.show(!1);
  }
  /**
   * Destroys this controller and replaces it with a new option controller. Provided as a more
   * descriptive syntax for `gui.add`, but primarily for compatibility with dat.gui.
   *
   * Use caution, as this method will destroy old references to this controller. It will also
   * change controller order if called out of sequence, moving the option controller to the end of
   * the GUI.
   * @example
   * // safe usage
   *
   * gui.add( object1, 'property' ).options( [ 'a', 'b', 'c' ] );
   * gui.add( object2, 'property' );
   *
   * // danger
   *
   * const c = gui.add( object1, 'property' );
   * gui.add( object2, 'property' );
   *
   * c.options( [ 'a', 'b', 'c' ] );
   * // controller is now at the end of the GUI even though it was added first
   *
   * assert( c.parent.children.indexOf( c ) === -1 )
   * // c references a controller that no longer exists
   *
   * @param {object|Array} options
   * @returns {Controller}
   */
  options(t) {
    const e = this.parent.add(this.object, this.property, t);
    return e.name(this._name), this.destroy(), e;
  }
  /**
   * Sets the minimum value. Only works on number controllers.
   * @param {number} min
   * @returns {this}
   */
  min(t) {
    return this;
  }
  /**
   * Sets the maximum value. Only works on number controllers.
   * @param {number} max
   * @returns {this}
   */
  max(t) {
    return this;
  }
  /**
   * Values set by this controller will be rounded to multiples of `step`. Only works on number
   * controllers.
   * @param {number} step
   * @returns {this}
   */
  step(t) {
    return this;
  }
  /**
   * Rounds the displayed value to a fixed number of decimals, without affecting the actual value
   * like `step()`. Only works on number controllers.
   * @example
   * gui.add( object, 'property' ).listen().decimals( 4 );
   * @param {number} decimals
   * @returns {this}
   */
  decimals(t) {
    return this;
  }
  /**
   * Calls `updateDisplay()` every animation frame. Pass `false` to stop listening.
   * @param {boolean} listen
   * @returns {this}
   */
  listen(t = !0) {
    return this._listening = t, this._listenCallbackID !== void 0 && (cancelAnimationFrame(this._listenCallbackID), this._listenCallbackID = void 0), this._listening && this._listenCallback(), this;
  }
  _listenCallback() {
    this._listenCallbackID = requestAnimationFrame(this._listenCallback);
    const t = this.save();
    t !== this._listenPrevValue && this.updateDisplay(), this._listenPrevValue = t;
  }
  /**
   * Returns `object[ property ]`.
   * @returns {any}
   */
  getValue() {
    return this.object[this.property];
  }
  /**
   * Sets the value of `object[ property ]`, invokes any `onChange` handlers and updates the display.
   * @param {any} value
   * @returns {this}
   */
  setValue(t) {
    return this.object[this.property] = t, this._callOnChange(), this.updateDisplay(), this;
  }
  /**
   * Updates the display to keep it in sync with the current value. Useful for updating your
   * controllers when their values have been modified outside of the GUI.
   * @returns {this}
   */
  updateDisplay() {
    return this;
  }
  load(t) {
    return this.setValue(t), this._callOnFinishChange(), this;
  }
  save() {
    return this.getValue();
  }
  /**
   * Destroys this controller and removes it from the parent GUI.
   */
  destroy() {
    this.listen(!1), this.parent.children.splice(this.parent.children.indexOf(this), 1), this.parent.controllers.splice(this.parent.controllers.indexOf(this), 1), this.parent.$children.removeChild(this.domElement);
  }
}
class K_ extends An {
  constructor(t, e, n) {
    super(t, e, n, "boolean", "label"), this.$input = document.createElement("input"), this.$input.setAttribute("type", "checkbox"), this.$input.setAttribute("aria-labelledby", this.$name.id), this.$widget.appendChild(this.$input), this.$input.addEventListener("change", () => {
      this.setValue(this.$input.checked), this._callOnFinishChange();
    }), this.$disable = this.$input, this.updateDisplay();
  }
  updateDisplay() {
    return this.$input.checked = this.getValue(), this;
  }
}
function fo(a) {
  let t, e;
  return (t = a.match(/(#|0x)?([a-f0-9]{6})/i)) ? e = t[2] : (t = a.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/)) ? e = parseInt(t[1]).toString(16).padStart(2, 0) + parseInt(t[2]).toString(16).padStart(2, 0) + parseInt(t[3]).toString(16).padStart(2, 0) : (t = a.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i)) && (e = t[1] + t[1] + t[2] + t[2] + t[3] + t[3]), e ? "#" + e : !1;
}
const J_ = {
  isPrimitive: !0,
  match: (a) => typeof a == "string",
  fromHexString: fo,
  toHexString: fo
}, ts = {
  isPrimitive: !0,
  match: (a) => typeof a == "number",
  fromHexString: (a) => parseInt(a.substring(1), 16),
  toHexString: (a) => "#" + a.toString(16).padStart(6, 0)
}, Q_ = {
  isPrimitive: !1,
  match: Array.isArray,
  fromHexString(a, t, e = 1) {
    const n = ts.fromHexString(a);
    t[0] = (n >> 16 & 255) / 255 * e, t[1] = (n >> 8 & 255) / 255 * e, t[2] = (n & 255) / 255 * e;
  },
  toHexString([a, t, e], n = 1) {
    n = 255 / n;
    const i = a * n << 16 ^ t * n << 8 ^ e * n << 0;
    return ts.toHexString(i);
  }
}, t0 = {
  isPrimitive: !1,
  match: (a) => Object(a) === a,
  fromHexString(a, t, e = 1) {
    const n = ts.fromHexString(a);
    t.r = (n >> 16 & 255) / 255 * e, t.g = (n >> 8 & 255) / 255 * e, t.b = (n & 255) / 255 * e;
  },
  toHexString({ r: a, g: t, b: e }, n = 1) {
    n = 255 / n;
    const i = a * n << 16 ^ t * n << 8 ^ e * n << 0;
    return ts.toHexString(i);
  }
}, e0 = [J_, ts, Q_, t0];
function n0(a) {
  return e0.find((t) => t.match(a));
}
class i0 extends An {
  constructor(t, e, n, i) {
    super(t, e, n, "color"), this.$input = document.createElement("input"), this.$input.setAttribute("type", "color"), this.$input.setAttribute("tabindex", -1), this.$input.setAttribute("aria-labelledby", this.$name.id), this.$text = document.createElement("input"), this.$text.setAttribute("type", "text"), this.$text.setAttribute("spellcheck", "false"), this.$text.setAttribute("aria-labelledby", this.$name.id), this.$display = document.createElement("div"), this.$display.classList.add("display"), this.$display.appendChild(this.$input), this.$widget.appendChild(this.$display), this.$widget.appendChild(this.$text), this._format = n0(this.initialValue), this._rgbScale = i, this._initialValueHexString = this.save(), this._textFocused = !1, this.$input.addEventListener("input", () => {
      this._setValueFromHexString(this.$input.value);
    }), this.$input.addEventListener("blur", () => {
      this._callOnFinishChange();
    }), this.$text.addEventListener("input", () => {
      const r = fo(this.$text.value);
      r && this._setValueFromHexString(r);
    }), this.$text.addEventListener("focus", () => {
      this._textFocused = !0, this.$text.select();
    }), this.$text.addEventListener("blur", () => {
      this._textFocused = !1, this.updateDisplay(), this._callOnFinishChange();
    }), this.$disable = this.$text, this.updateDisplay();
  }
  reset() {
    return this._setValueFromHexString(this._initialValueHexString), this;
  }
  _setValueFromHexString(t) {
    if (this._format.isPrimitive) {
      const e = this._format.fromHexString(t);
      this.setValue(e);
    } else
      this._format.fromHexString(t, this.getValue(), this._rgbScale), this._callOnChange(), this.updateDisplay();
  }
  save() {
    return this._format.toHexString(this.getValue(), this._rgbScale);
  }
  load(t) {
    return this._setValueFromHexString(t), this._callOnFinishChange(), this;
  }
  updateDisplay() {
    return this.$input.value = this._format.toHexString(this.getValue(), this._rgbScale), this._textFocused || (this.$text.value = this.$input.value.substring(1)), this.$display.style.backgroundColor = this.$input.value, this;
  }
}
class Va extends An {
  constructor(t, e, n) {
    super(t, e, n, "function"), this.$button = document.createElement("button"), this.$button.appendChild(this.$name), this.$widget.appendChild(this.$button), this.$button.addEventListener("click", (i) => {
      i.preventDefault(), this.getValue().call(this.object);
    }), this.$button.addEventListener("touchstart", () => {
    }, { passive: !0 }), this.$disable = this.$button;
  }
}
class r0 extends An {
  constructor(t, e, n, i, r, o) {
    super(t, e, n, "number"), this._initInput(), this.min(i), this.max(r);
    const s = o !== void 0;
    this.step(s ? o : this._getImplicitStep(), s), this.updateDisplay();
  }
  decimals(t) {
    return this._decimals = t, this.updateDisplay(), this;
  }
  min(t) {
    return this._min = t, this._onUpdateMinMax(), this;
  }
  max(t) {
    return this._max = t, this._onUpdateMinMax(), this;
  }
  step(t, e = !0) {
    return this._step = t, this._stepExplicit = e, this;
  }
  updateDisplay() {
    const t = this.getValue();
    if (this._hasSlider) {
      let e = (t - this._min) / (this._max - this._min);
      e = Math.max(0, Math.min(e, 1)), this.$fill.style.width = e * 100 + "%";
    }
    return this._inputFocused || (this.$input.value = this._decimals === void 0 ? t : t.toFixed(this._decimals)), this;
  }
  _initInput() {
    this.$input = document.createElement("input"), this.$input.setAttribute("type", "number"), this.$input.setAttribute("step", "any"), this.$input.setAttribute("aria-labelledby", this.$name.id), this.$widget.appendChild(this.$input), this.$disable = this.$input;
    const t = () => {
      let _ = parseFloat(this.$input.value);
      isNaN(_) || (this._stepExplicit && (_ = this._snap(_)), this.setValue(this._clamp(_)));
    }, e = (_) => {
      const b = parseFloat(this.$input.value);
      isNaN(b) || (this._snapClampSetValue(b + _), this.$input.value = this.getValue());
    }, n = (_) => {
      _.code === "Enter" && this.$input.blur(), _.code === "ArrowUp" && (_.preventDefault(), e(this._step * this._arrowKeyMultiplier(_))), _.code === "ArrowDown" && (_.preventDefault(), e(this._step * this._arrowKeyMultiplier(_) * -1));
    }, i = (_) => {
      this._inputFocused && (_.preventDefault(), e(this._step * this._normalizeMouseWheel(_)));
    };
    let r = !1, o, s, l, c, h;
    const u = 5, d = (_) => {
      o = _.clientX, s = l = _.clientY, r = !0, c = this.getValue(), h = 0, window.addEventListener("mousemove", m), window.addEventListener("mouseup", g);
    }, m = (_) => {
      if (r) {
        const b = _.clientX - o, x = _.clientY - s;
        Math.abs(x) > u ? (_.preventDefault(), this.$input.blur(), r = !1, this._setDraggingStyle(!0, "vertical")) : Math.abs(b) > u && g();
      }
      if (!r) {
        const b = _.clientY - l;
        h -= b * this._step * this._arrowKeyMultiplier(_), c + h > this._max ? h = this._max - c : c + h < this._min && (h = this._min - c), this._snapClampSetValue(c + h);
      }
      l = _.clientY;
    }, g = () => {
      this._setDraggingStyle(!1, "vertical"), this._callOnFinishChange(), window.removeEventListener("mousemove", m), window.removeEventListener("mouseup", g);
    }, f = () => {
      this._inputFocused = !0;
    }, p = () => {
      this._inputFocused = !1, this.updateDisplay(), this._callOnFinishChange();
    };
    this.$input.addEventListener("input", t), this.$input.addEventListener("keydown", n), this.$input.addEventListener("wheel", i, { passive: !1 }), this.$input.addEventListener("mousedown", d), this.$input.addEventListener("focus", f), this.$input.addEventListener("blur", p);
  }
  _initSlider() {
    this._hasSlider = !0, this.$slider = document.createElement("div"), this.$slider.classList.add("slider"), this.$fill = document.createElement("div"), this.$fill.classList.add("fill"), this.$slider.appendChild(this.$fill), this.$widget.insertBefore(this.$slider, this.$input), this.domElement.classList.add("hasSlider");
    const t = (_, b, x, y, M) => (_ - b) / (x - b) * (M - y) + y, e = (_) => {
      const b = this.$slider.getBoundingClientRect();
      let x = t(_, b.left, b.right, this._min, this._max);
      this._snapClampSetValue(x);
    }, n = (_) => {
      this._setDraggingStyle(!0), e(_.clientX), window.addEventListener("mousemove", i), window.addEventListener("mouseup", r);
    }, i = (_) => {
      e(_.clientX);
    }, r = () => {
      this._callOnFinishChange(), this._setDraggingStyle(!1), window.removeEventListener("mousemove", i), window.removeEventListener("mouseup", r);
    };
    let o = !1, s, l;
    const c = (_) => {
      _.preventDefault(), this._setDraggingStyle(!0), e(_.touches[0].clientX), o = !1;
    }, h = (_) => {
      _.touches.length > 1 || (this._hasScrollBar ? (s = _.touches[0].clientX, l = _.touches[0].clientY, o = !0) : c(_), window.addEventListener("touchmove", u, { passive: !1 }), window.addEventListener("touchend", d));
    }, u = (_) => {
      if (o) {
        const b = _.touches[0].clientX - s, x = _.touches[0].clientY - l;
        Math.abs(b) > Math.abs(x) ? c(_) : (window.removeEventListener("touchmove", u), window.removeEventListener("touchend", d));
      } else
        _.preventDefault(), e(_.touches[0].clientX);
    }, d = () => {
      this._callOnFinishChange(), this._setDraggingStyle(!1), window.removeEventListener("touchmove", u), window.removeEventListener("touchend", d);
    }, m = this._callOnFinishChange.bind(this), g = 400;
    let f;
    const p = (_) => {
      if (Math.abs(_.deltaX) < Math.abs(_.deltaY) && this._hasScrollBar)
        return;
      _.preventDefault();
      const x = this._normalizeMouseWheel(_) * this._step;
      this._snapClampSetValue(this.getValue() + x), this.$input.value = this.getValue(), clearTimeout(f), f = setTimeout(m, g);
    };
    this.$slider.addEventListener("mousedown", n), this.$slider.addEventListener("touchstart", h, { passive: !1 }), this.$slider.addEventListener("wheel", p, { passive: !1 });
  }
  _setDraggingStyle(t, e = "horizontal") {
    this.$slider && this.$slider.classList.toggle("active", t), document.body.classList.toggle("lil-gui-dragging", t), document.body.classList.toggle(`lil-gui-${e}`, t);
  }
  _getImplicitStep() {
    return this._hasMin && this._hasMax ? (this._max - this._min) / 1e3 : 0.1;
  }
  _onUpdateMinMax() {
    !this._hasSlider && this._hasMin && this._hasMax && (this._stepExplicit || this.step(this._getImplicitStep(), !1), this._initSlider(), this.updateDisplay());
  }
  _normalizeMouseWheel(t) {
    let { deltaX: e, deltaY: n } = t;
    return Math.floor(t.deltaY) !== t.deltaY && t.wheelDelta && (e = 0, n = -t.wheelDelta / 120, n *= this._stepExplicit ? 1 : 10), e + -n;
  }
  _arrowKeyMultiplier(t) {
    let e = this._stepExplicit ? 1 : 10;
    return t.shiftKey ? e *= 10 : t.altKey && (e /= 10), e;
  }
  _snap(t) {
    const e = Math.round(t / this._step) * this._step;
    return parseFloat(e.toPrecision(15));
  }
  _clamp(t) {
    return t < this._min && (t = this._min), t > this._max && (t = this._max), t;
  }
  _snapClampSetValue(t) {
    this.setValue(this._clamp(this._snap(t)));
  }
  get _hasScrollBar() {
    const t = this.parent.root.$children;
    return t.scrollHeight > t.clientHeight;
  }
  get _hasMin() {
    return this._min !== void 0;
  }
  get _hasMax() {
    return this._max !== void 0;
  }
}
class s0 extends An {
  constructor(t, e, n, i) {
    super(t, e, n, "option"), this.$select = document.createElement("select"), this.$select.setAttribute("aria-labelledby", this.$name.id), this.$display = document.createElement("div"), this.$display.classList.add("display"), this._values = Array.isArray(i) ? i : Object.values(i), this._names = Array.isArray(i) ? i : Object.keys(i), this._names.forEach((r) => {
      const o = document.createElement("option");
      o.innerHTML = r, this.$select.appendChild(o);
    }), this.$select.addEventListener("change", () => {
      this.setValue(this._values[this.$select.selectedIndex]), this._callOnFinishChange();
    }), this.$select.addEventListener("focus", () => {
      this.$display.classList.add("focus");
    }), this.$select.addEventListener("blur", () => {
      this.$display.classList.remove("focus");
    }), this.$widget.appendChild(this.$select), this.$widget.appendChild(this.$display), this.$disable = this.$select, this.updateDisplay();
  }
  updateDisplay() {
    const t = this.getValue(), e = this._values.indexOf(t);
    return this.$select.selectedIndex = e, this.$display.innerHTML = e === -1 ? t : this._names[e], this;
  }
}
class a0 extends An {
  constructor(t, e, n) {
    super(t, e, n, "string"), this.$input = document.createElement("input"), this.$input.setAttribute("type", "text"), this.$input.setAttribute("aria-labelledby", this.$name.id), this.$input.addEventListener("input", () => {
      this.setValue(this.$input.value);
    }), this.$input.addEventListener("keydown", (i) => {
      i.code === "Enter" && this.$input.blur();
    }), this.$input.addEventListener("blur", () => {
      this._callOnFinishChange();
    }), this.$widget.appendChild(this.$input), this.$disable = this.$input, this.updateDisplay();
  }
  updateDisplay() {
    return this.$input.value = this.getValue(), this;
  }
}
const o0 = `.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  background-color: var(--background-color);
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean .widget {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background-color: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background-color: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background-color: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  height: var(--title-height);
  line-height: calc(var(--title-height) - 4px);
  font-weight: 600;
  padding: 0 var(--padding);
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  outline: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "▸";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui input {
  -webkit-tap-highlight-color: transparent;
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input::-webkit-outer-spin-button,
.lil-gui input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.lil-gui input[type=number] {
  -moz-appearance: textfield;
}
.lil-gui input[type=checkbox] {
  appearance: none;
  -webkit-appearance: none;
  height: var(--checkbox-size);
  width: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  -webkit-tap-highlight-color: transparent;
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  border: 1px solid var(--widget-color);
  text-align: center;
  line-height: calc(var(--widget-height) - 4px);
}
@media (hover: hover) {
  .lil-gui button:hover {
    background: var(--hover-color);
    border-color: var(--hover-color);
  }
  .lil-gui button:focus {
    border-color: var(--focus-color);
  }
}
.lil-gui button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;
function l0(a) {
  const t = document.createElement("style");
  t.innerHTML = a;
  const e = document.querySelector("head link[rel=stylesheet], head style");
  e ? document.head.insertBefore(t, e) : document.head.appendChild(t);
}
let xc = !1;
class zo {
  /**
   * Creates a panel that holds controllers.
   * @example
   * new GUI();
   * new GUI( { container: document.getElementById( 'custom' ) } );
   *
   * @param {object} [options]
   * @param {boolean} [options.autoPlace=true]
   * Adds the GUI to `document.body` and fixes it to the top right of the page.
   *
   * @param {HTMLElement} [options.container]
   * Adds the GUI to this DOM element. Overrides `autoPlace`.
   *
   * @param {number} [options.width=245]
   * Width of the GUI in pixels, usually set when name labels become too long. Note that you can make
   * name labels wider in CSS with `.lil‑gui { ‑‑name‑width: 55% }`
   *
   * @param {string} [options.title=Controls]
   * Name to display in the title bar.
   *
   * @param {boolean} [options.injectStyles=true]
   * Injects the default stylesheet into the page if this is the first GUI.
   * Pass `false` to use your own stylesheet.
   *
   * @param {number} [options.touchStyles=true]
   * Makes controllers larger on touch devices. Pass `false` to disable touch styles.
   *
   * @param {GUI} [options.parent]
   * Adds this GUI as a child in another GUI. Usually this is done for you by `addFolder()`.
   *
   */
  constructor({
    parent: t,
    autoPlace: e = t === void 0,
    container: n,
    width: i,
    title: r = "Controls",
    injectStyles: o = !0,
    touchStyles: s = !0
  } = {}) {
    if (this.parent = t, this.root = t ? t.root : this, this.children = [], this.controllers = [], this.folders = [], this._closed = !1, this._hidden = !1, this.domElement = document.createElement("div"), this.domElement.classList.add("lil-gui"), this.$title = document.createElement("div"), this.$title.classList.add("title"), this.$title.setAttribute("role", "button"), this.$title.setAttribute("aria-expanded", !0), this.$title.setAttribute("tabindex", 0), this.$title.addEventListener("click", () => this.openAnimated(this._closed)), this.$title.addEventListener("keydown", (l) => {
      (l.code === "Enter" || l.code === "Space") && (l.preventDefault(), this.$title.click());
    }), this.$title.addEventListener("touchstart", () => {
    }, { passive: !0 }), this.$children = document.createElement("div"), this.$children.classList.add("children"), this.domElement.appendChild(this.$title), this.domElement.appendChild(this.$children), this.title(r), s && this.domElement.classList.add("allow-touch-styles"), this.parent) {
      this.parent.children.push(this), this.parent.folders.push(this), this.parent.$children.appendChild(this.domElement);
      return;
    }
    this.domElement.classList.add("root"), !xc && o && (l0(o0), xc = !0), n ? n.appendChild(this.domElement) : e && (this.domElement.classList.add("autoPlace"), document.body.appendChild(this.domElement)), i && this.domElement.style.setProperty("--width", i + "px"), this.domElement.addEventListener("keydown", (l) => l.stopPropagation()), this.domElement.addEventListener("keyup", (l) => l.stopPropagation());
  }
  /**
   * Adds a controller to the GUI, inferring controller type using the `typeof` operator.
   * @example
   * gui.add( object, 'property' );
   * gui.add( object, 'number', 0, 100, 1 );
   * gui.add( object, 'options', [ 1, 2, 3 ] );
   *
   * @param {object} object The object the controller will modify.
   * @param {string} property Name of the property to control.
   * @param {number|object|Array} [$1] Minimum value for number controllers, or the set of
   * selectable values for a dropdown.
   * @param {number} [max] Maximum value for number controllers.
   * @param {number} [step] Step value for number controllers.
   * @returns {Controller}
   */
  add(t, e, n, i, r) {
    if (Object(n) === n)
      return new s0(this, t, e, n);
    const o = t[e];
    switch (typeof o) {
      case "number":
        return new r0(this, t, e, n, i, r);
      case "boolean":
        return new K_(this, t, e);
      case "string":
        return new a0(this, t, e);
      case "function":
        return new Va(this, t, e);
    }
    console.error(`gui.add failed
	property:`, e, `
	object:`, t, `
	value:`, o);
  }
  /**
   * Adds a color controller to the GUI.
   * @example
   * params = {
   * 	cssColor: '#ff00ff',
   * 	rgbColor: { r: 0, g: 0.2, b: 0.4 },
   * 	customRange: [ 0, 127, 255 ],
   * };
   *
   * gui.addColor( params, 'cssColor' );
   * gui.addColor( params, 'rgbColor' );
   * gui.addColor( params, 'customRange', 255 );
   *
   * @param {object} object The object the controller will modify.
   * @param {string} property Name of the property to control.
   * @param {number} rgbScale Maximum value for a color channel when using an RGB color. You may
   * need to set this to 255 if your colors are too bright.
   * @returns {Controller}
   */
  addColor(t, e, n = 1) {
    return new i0(this, t, e, n);
  }
  /**
   * Adds a folder to the GUI, which is just another GUI. This method returns
   * the nested GUI so you can add controllers to it.
   * @example
   * const folder = gui.addFolder( 'Position' );
   * folder.add( position, 'x' );
   * folder.add( position, 'y' );
   * folder.add( position, 'z' );
   *
   * @param {string} title Name to display in the folder's title bar.
   * @returns {GUI}
   */
  addFolder(t) {
    return new zo({ parent: this, title: t });
  }
  /**
   * Recalls values that were saved with `gui.save()`.
   * @param {object} obj
   * @param {boolean} recursive Pass false to exclude folders descending from this GUI.
   * @returns {this}
   */
  load(t, e = !0) {
    return t.controllers && this.controllers.forEach((n) => {
      n instanceof Va || n._name in t.controllers && n.load(t.controllers[n._name]);
    }), e && t.folders && this.folders.forEach((n) => {
      n._title in t.folders && n.load(t.folders[n._title]);
    }), this;
  }
  /**
   * Returns an object mapping controller names to values. The object can be passed to `gui.load()` to
   * recall these values.
   * @example
   * {
   * 	controllers: {
   * 		prop1: 1,
   * 		prop2: 'value',
   * 		...
   * 	},
   * 	folders: {
   * 		folderName1: { controllers, folders },
   * 		folderName2: { controllers, folders }
   * 		...
   * 	}
   * }
   *
   * @param {boolean} recursive Pass false to exclude folders descending from this GUI.
   * @returns {object}
   */
  save(t = !0) {
    const e = {
      controllers: {},
      folders: {}
    };
    return this.controllers.forEach((n) => {
      if (!(n instanceof Va)) {
        if (n._name in e.controllers)
          throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);
        e.controllers[n._name] = n.save();
      }
    }), t && this.folders.forEach((n) => {
      if (n._title in e.folders)
        throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);
      e.folders[n._title] = n.save();
    }), e;
  }
  /**
   * Opens a GUI or folder. GUI and folders are open by default.
   * @param {boolean} open Pass false to close
   * @returns {this}
   * @example
   * gui.open(); // open
   * gui.open( false ); // close
   * gui.open( gui._closed ); // toggle
   */
  open(t = !0) {
    return this._closed = !t, this.$title.setAttribute("aria-expanded", !this._closed), this.domElement.classList.toggle("closed", this._closed), this;
  }
  /**
   * Closes the GUI.
   * @returns {this}
   */
  close() {
    return this.open(!1);
  }
  /**
   * Shows the GUI after it's been hidden.
   * @param {boolean} show
   * @returns {this}
   * @example
   * gui.show();
   * gui.show( false ); // hide
   * gui.show( gui._hidden ); // toggle
   */
  show(t = !0) {
    return this._hidden = !t, this.domElement.style.display = this._hidden ? "none" : "", this;
  }
  /**
   * Hides the GUI.
   * @returns {this}
   */
  hide() {
    return this.show(!1);
  }
  openAnimated(t = !0) {
    return this._closed = !t, this.$title.setAttribute("aria-expanded", !this._closed), requestAnimationFrame(() => {
      const e = this.$children.clientHeight;
      this.$children.style.height = e + "px", this.domElement.classList.add("transition");
      const n = (r) => {
        r.target === this.$children && (this.$children.style.height = "", this.domElement.classList.remove("transition"), this.$children.removeEventListener("transitionend", n));
      };
      this.$children.addEventListener("transitionend", n);
      const i = t ? this.$children.scrollHeight : 0;
      this.domElement.classList.toggle("closed", !t), requestAnimationFrame(() => {
        this.$children.style.height = i + "px";
      });
    }), this;
  }
  /**
   * Change the title of this GUI.
   * @param {string} title
   * @returns {this}
   */
  title(t) {
    return this._title = t, this.$title.innerHTML = t, this;
  }
  /**
   * Resets all controllers to their initial values.
   * @param {boolean} recursive Pass false to exclude folders descending from this GUI.
   * @returns {this}
   */
  reset(t = !0) {
    return (t ? this.controllersRecursive() : this.controllers).forEach((n) => n.reset()), this;
  }
  /**
   * Pass a function to be called whenever a controller in this GUI changes.
   * @param {function({object:object, property:string, value:any, controller:Controller})} callback
   * @returns {this}
   * @example
   * gui.onChange( event => {
   * 	event.object     // object that was modified
   * 	event.property   // string, name of property
   * 	event.value      // new value of controller
   * 	event.controller // controller that was modified
   * } );
   */
  onChange(t) {
    return this._onChange = t, this;
  }
  _callOnChange(t) {
    this.parent && this.parent._callOnChange(t), this._onChange !== void 0 && this._onChange.call(this, {
      object: t.object,
      property: t.property,
      value: t.getValue(),
      controller: t
    });
  }
  /**
   * Pass a function to be called whenever a controller in this GUI has finished changing.
   * @param {function({object:object, property:string, value:any, controller:Controller})} callback
   * @returns {this}
   * @example
   * gui.onFinishChange( event => {
   * 	event.object     // object that was modified
   * 	event.property   // string, name of property
   * 	event.value      // new value of controller
   * 	event.controller // controller that was modified
   * } );
   */
  onFinishChange(t) {
    return this._onFinishChange = t, this;
  }
  _callOnFinishChange(t) {
    this.parent && this.parent._callOnFinishChange(t), this._onFinishChange !== void 0 && this._onFinishChange.call(this, {
      object: t.object,
      property: t.property,
      value: t.getValue(),
      controller: t
    });
  }
  /**
   * Destroys all DOM elements and event listeners associated with this GUI
   */
  destroy() {
    this.parent && (this.parent.children.splice(this.parent.children.indexOf(this), 1), this.parent.folders.splice(this.parent.folders.indexOf(this), 1)), this.domElement.parentElement && this.domElement.parentElement.removeChild(this.domElement), Array.from(this.children).forEach((t) => t.destroy());
  }
  /**
   * Returns an array of controllers contained by this GUI and its descendents.
   * @returns {Controller[]}
   */
  controllersRecursive() {
    let t = Array.from(this.controllers);
    return this.folders.forEach((e) => {
      t = t.concat(e.controllersRecursive());
    }), t;
  }
  /**
   * Returns an array of folders contained by this GUI and its descendents.
   * @returns {GUI[]}
   */
  foldersRecursive() {
    let t = Array.from(this.folders);
    return this.folders.forEach((e) => {
      t = t.concat(e.foldersRecursive());
    }), t;
  }
}
class c0 {
  constructor() {
    this.debug = !1, this.showHelpers = !0, this.showBounds = !0;
  }
  init() {
    if (this.debug) {
      const t = new zo({ width: 350 });
      return t.close(), t;
    }
  }
}
class h0 {
  constructor() {
    this.resize();
  }
  resize() {
    this.desktopPct = (window.innerWidth - 490) / 50, this.desktopPct = Math.max(0, Math.min(1, this.desktopPct)), this.mobilePct = 1 - this.desktopPct, this.width = window.innerWidth, this.height = window.innerHeight, this.pixelRatio = Math.min(window.devicePixelRatio, 2);
  }
}
class u0 {
  constructor(t) {
    this.ratio = 4 / 3;
  }
  init() {
    const t = new z_();
    return nt.settings.debug, t;
  }
}
function Un(a) {
  if (a === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return a;
}
function Sh(a, t) {
  a.prototype = Object.create(t.prototype), a.prototype.constructor = a, a.__proto__ = t;
}
/*!
 * GSAP 3.11.5
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var je = {
  autoSleep: 120,
  force3D: "auto",
  nullTargetWarn: 1,
  units: {
    lineHeight: ""
  }
}, xr = {
  duration: 0.5,
  overwrite: !1,
  delay: 0
}, Fo, we, te, sn = 1e8, Vt = 1 / sn, po = Math.PI * 2, d0 = po / 4, f0 = 0, wh = Math.sqrt, p0 = Math.cos, m0 = Math.sin, pe = function(t) {
  return typeof t == "string";
}, Yt = function(t) {
  return typeof t == "function";
}, Hn = function(t) {
  return typeof t == "number";
}, No = function(t) {
  return typeof t > "u";
}, Ln = function(t) {
  return typeof t == "object";
}, Fe = function(t) {
  return t !== !1;
}, Uo = function() {
  return typeof window < "u";
}, Os = function(t) {
  return Yt(t) || pe(t);
}, Th = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {
}, Te = Array.isArray, mo = /(?:-?\.?\d|\.)+/gi, Eh = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, lr = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, Ha = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, Ah = /[+-]=-?[.\d]+/, Ch = /[^,'"\[\]\s]+/gi, g0 = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, Xt, en, go, ko, Ze = {}, qs = {}, Ph, Lh = function(t) {
  return (qs = zi(t, Ze)) && ke;
}, Bo = function(t, e) {
  return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()");
}, Ys = function(t, e) {
  return !e && console.warn(t);
}, Dh = function(t, e) {
  return t && (Ze[t] = e) && qs && (qs[t] = e) || Ze;
}, es = function() {
  return 0;
}, _0 = {
  suppressEvents: !0,
  isStart: !0,
  kill: !1
}, Bs = {
  suppressEvents: !0,
  kill: !1
}, v0 = {
  suppressEvents: !0
}, Go = {}, Qn = [], _o = {}, Rh, We = {}, Wa = {}, yc = 30, Gs = [], Vo = "", Ho = function(t) {
  var e = t[0], n, i;
  if (Ln(e) || Yt(e) || (t = [t]), !(n = (e._gsap || {}).harness)) {
    for (i = Gs.length; i-- && !Gs[i].targetTest(e); )
      ;
    n = Gs[i];
  }
  for (i = t.length; i--; )
    t[i] && (t[i]._gsap || (t[i]._gsap = new nu(t[i], n))) || t.splice(i, 1);
  return t;
}, Ti = function(t) {
  return t._gsap || Ho(an(t))[0]._gsap;
}, Ih = function(t, e, n) {
  return (n = t[e]) && Yt(n) ? t[e]() : No(n) && t.getAttribute && t.getAttribute(e) || n;
}, Ne = function(t, e) {
  return (t = t.split(",")).forEach(e) || t;
}, jt = function(t) {
  return Math.round(t * 1e5) / 1e5 || 0;
}, ve = function(t) {
  return Math.round(t * 1e7) / 1e7 || 0;
}, dr = function(t, e) {
  var n = e.charAt(0), i = parseFloat(e.substr(2));
  return t = parseFloat(t), n === "+" ? t + i : n === "-" ? t - i : n === "*" ? t * i : t / i;
}, x0 = function(t, e) {
  for (var n = e.length, i = 0; t.indexOf(e[i]) < 0 && ++i < n; )
    ;
  return i < n;
}, $s = function() {
  var t = Qn.length, e = Qn.slice(0), n, i;
  for (_o = {}, Qn.length = 0, n = 0; n < t; n++)
    i = e[n], i && i._lazy && (i.render(i._lazy[0], i._lazy[1], !0)._lazy = 0);
}, Oh = function(t, e, n, i) {
  Qn.length && !we && $s(), t.render(e, n, i || we && e < 0 && (t._initted || t._startAt)), Qn.length && !we && $s();
}, zh = function(t) {
  var e = parseFloat(t);
  return (e || e === 0) && (t + "").match(Ch).length < 2 ? e : pe(t) ? t.trim() : t;
}, Fh = function(t) {
  return t;
}, cn = function(t, e) {
  for (var n in e)
    n in t || (t[n] = e[n]);
  return t;
}, y0 = function(t) {
  return function(e, n) {
    for (var i in n)
      i in e || i === "duration" && t || i === "ease" || (e[i] = n[i]);
  };
}, zi = function(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}, bc = function a(t, e) {
  for (var n in e)
    n !== "__proto__" && n !== "constructor" && n !== "prototype" && (t[n] = Ln(e[n]) ? a(t[n] || (t[n] = {}), e[n]) : e[n]);
  return t;
}, js = function(t, e) {
  var n = {}, i;
  for (i in t)
    i in e || (n[i] = t[i]);
  return n;
}, Yr = function(t) {
  var e = t.parent || Xt, n = t.keyframes ? y0(Te(t.keyframes)) : cn;
  if (Fe(t.inherit))
    for (; e; )
      n(t, e.vars.defaults), e = e.parent || e._dp;
  return t;
}, b0 = function(t, e) {
  for (var n = t.length, i = n === e.length; i && n-- && t[n] === e[n]; )
    ;
  return n < 0;
}, Nh = function(t, e, n, i, r) {
  n === void 0 && (n = "_first"), i === void 0 && (i = "_last");
  var o = t[i], s;
  if (r)
    for (s = e[r]; o && o[r] > s; )
      o = o._prev;
  return o ? (e._next = o._next, o._next = e) : (e._next = t[n], t[n] = e), e._next ? e._next._prev = e : t[i] = e, e._prev = o, e.parent = e._dp = t, e;
}, ia = function(t, e, n, i) {
  n === void 0 && (n = "_first"), i === void 0 && (i = "_last");
  var r = e._prev, o = e._next;
  r ? r._next = o : t[n] === e && (t[n] = o), o ? o._prev = r : t[i] === e && (t[i] = r), e._next = e._prev = e.parent = null;
}, ni = function(t, e) {
  t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove(t), t._act = 0;
}, Ei = function(t, e) {
  if (t && (!e || e._end > t._dur || e._start < 0))
    for (var n = t; n; )
      n._dirty = 1, n = n.parent;
  return t;
}, M0 = function(t) {
  for (var e = t.parent; e && e.parent; )
    e._dirty = 1, e.totalDuration(), e = e.parent;
  return t;
}, vo = function(t, e, n, i) {
  return t._startAt && (we ? t._startAt.revert(Bs) : t.vars.immediateRender && !t.vars.autoRevert || t._startAt.render(e, !0, i));
}, S0 = function a(t) {
  return !t || t._ts && a(t.parent);
}, Mc = function(t) {
  return t._repeat ? yr(t._tTime, t = t.duration() + t._rDelay) * t : 0;
}, yr = function(t, e) {
  var n = Math.floor(t /= e);
  return t && n === t ? n - 1 : n;
}, Zs = function(t, e) {
  return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur);
}, ra = function(t) {
  return t._end = ve(t._start + (t._tDur / Math.abs(t._ts || t._rts || Vt) || 0));
}, sa = function(t, e) {
  var n = t._dp;
  return n && n.smoothChildTiming && t._ts && (t._start = ve(n._time - (t._ts > 0 ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)), ra(t), n._dirty || Ei(n, t)), t;
}, Uh = function(t, e) {
  var n;
  if ((e._time || e._initted && !e._dur) && (n = Zs(t.rawTime(), e), (!e._dur || cs(0, e.totalDuration(), n) - e._tTime > Vt) && e.render(n, !0)), Ei(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
    if (t._dur < t.duration())
      for (n = t; n._dp; )
        n.rawTime() >= 0 && n.totalTime(n._tTime), n = n._dp;
    t._zTime = -Vt;
  }
}, Sn = function(t, e, n, i) {
  return e.parent && ni(e), e._start = ve((Hn(n) ? n : n || t !== Xt ? tn(t, n, e) : t._time) + e._delay), e._end = ve(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)), Nh(t, e, "_first", "_last", t._sort ? "_start" : 0), xo(e) || (t._recent = e), i || Uh(t, e), t._ts < 0 && sa(t, t._tTime), t;
}, kh = function(t, e) {
  return (Ze.ScrollTrigger || Bo("scrollTrigger", e)) && Ze.ScrollTrigger.create(e, t);
}, Bh = function(t, e, n, i, r) {
  if (Xo(t, e, r), !t._initted)
    return 1;
  if (!n && t._pt && !we && (t._dur && t.vars.lazy !== !1 || !t._dur && t.vars.lazy) && Rh !== qe.frame)
    return Qn.push(t), t._lazy = [r, i], 1;
}, w0 = function a(t) {
  var e = t.parent;
  return e && e._ts && e._initted && !e._lock && (e.rawTime() < 0 || a(e));
}, xo = function(t) {
  var e = t.data;
  return e === "isFromStart" || e === "isStart";
}, T0 = function(t, e, n, i) {
  var r = t.ratio, o = e < 0 || !e && (!t._start && w0(t) && !(!t._initted && xo(t)) || (t._ts < 0 || t._dp._ts < 0) && !xo(t)) ? 0 : 1, s = t._rDelay, l = 0, c, h, u;
  if (s && t._repeat && (l = cs(0, t._tDur, e), h = yr(l, s), t._yoyo && h & 1 && (o = 1 - o), h !== yr(t._tTime, s) && (r = 1 - o, t.vars.repeatRefresh && t._initted && t.invalidate())), o !== r || we || i || t._zTime === Vt || !e && t._zTime) {
    if (!t._initted && Bh(t, e, i, n, l))
      return;
    for (u = t._zTime, t._zTime = e || (n ? Vt : 0), n || (n = e && !u), t.ratio = o, t._from && (o = 1 - o), t._time = 0, t._tTime = l, c = t._pt; c; )
      c.r(o, c.d), c = c._next;
    e < 0 && vo(t, e, n, !0), t._onUpdate && !n && on(t, "onUpdate"), l && t._repeat && !n && t.parent && on(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === o && (o && ni(t, 1), !n && !we && (on(t, o ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()));
  } else
    t._zTime || (t._zTime = e);
}, E0 = function(t, e, n) {
  var i;
  if (n > e)
    for (i = t._first; i && i._start <= n; ) {
      if (i.data === "isPause" && i._start > e)
        return i;
      i = i._next;
    }
  else
    for (i = t._last; i && i._start >= n; ) {
      if (i.data === "isPause" && i._start < e)
        return i;
      i = i._prev;
    }
}, br = function(t, e, n, i) {
  var r = t._repeat, o = ve(e) || 0, s = t._tTime / t._tDur;
  return s && !i && (t._time *= o / t._dur), t._dur = o, t._tDur = r ? r < 0 ? 1e10 : ve(o * (r + 1) + t._rDelay * r) : o, s > 0 && !i && sa(t, t._tTime = t._tDur * s), t.parent && ra(t), n || Ei(t.parent, t), t;
}, Sc = function(t) {
  return t instanceof Ie ? Ei(t) : br(t, t._dur);
}, A0 = {
  _start: 0,
  endTime: es,
  totalDuration: es
}, tn = function a(t, e, n) {
  var i = t.labels, r = t._recent || A0, o = t.duration() >= sn ? r.endTime(!1) : t._dur, s, l, c;
  return pe(e) && (isNaN(e) || e in i) ? (l = e.charAt(0), c = e.substr(-1) === "%", s = e.indexOf("="), l === "<" || l === ">" ? (s >= 0 && (e = e.replace(/=/, "")), (l === "<" ? r._start : r.endTime(r._repeat >= 0)) + (parseFloat(e.substr(1)) || 0) * (c ? (s < 0 ? r : n).totalDuration() / 100 : 1)) : s < 0 ? (e in i || (i[e] = o), i[e]) : (l = parseFloat(e.charAt(s - 1) + e.substr(s + 1)), c && n && (l = l / 100 * (Te(n) ? n[0] : n).totalDuration()), s > 1 ? a(t, e.substr(0, s - 1), n) + l : o + l)) : e == null ? o : +e;
}, $r = function(t, e, n) {
  var i = Hn(e[1]), r = (i ? 2 : 1) + (t < 2 ? 0 : 1), o = e[r], s, l;
  if (i && (o.duration = e[1]), o.parent = n, t) {
    for (s = o, l = n; l && !("immediateRender" in s); )
      s = l.vars.defaults || {}, l = Fe(l.vars.inherit) && l.parent;
    o.immediateRender = Fe(s.immediateRender), t < 2 ? o.runBackwards = 1 : o.startAt = e[r - 1];
  }
  return new se(e[0], o, e[r + 1]);
}, ai = function(t, e) {
  return t || t === 0 ? e(t) : e;
}, cs = function(t, e, n) {
  return n < t ? t : n > e ? e : n;
}, Se = function(t, e) {
  return !pe(t) || !(e = g0.exec(t)) ? "" : e[1];
}, C0 = function(t, e, n) {
  return ai(n, function(i) {
    return cs(t, e, i);
  });
}, yo = [].slice, Gh = function(t, e) {
  return t && Ln(t) && "length" in t && (!e && !t.length || t.length - 1 in t && Ln(t[0])) && !t.nodeType && t !== en;
}, P0 = function(t, e, n) {
  return n === void 0 && (n = []), t.forEach(function(i) {
    var r;
    return pe(i) && !e || Gh(i, 1) ? (r = n).push.apply(r, an(i)) : n.push(i);
  }) || n;
}, an = function(t, e, n) {
  return te && !e && te.selector ? te.selector(t) : pe(t) && !n && (go || !Mr()) ? yo.call((e || ko).querySelectorAll(t), 0) : Te(t) ? P0(t, n) : Gh(t) ? yo.call(t, 0) : t ? [t] : [];
}, bo = function(t) {
  return t = an(t)[0] || Ys("Invalid scope") || {}, function(e) {
    var n = t.current || t.nativeElement || t;
    return an(e, n.querySelectorAll ? n : n === t ? Ys("Invalid scope") || ko.createElement("div") : t);
  };
}, Vh = function(t) {
  return t.sort(function() {
    return 0.5 - Math.random();
  });
}, Hh = function(t) {
  if (Yt(t))
    return t;
  var e = Ln(t) ? t : {
    each: t
  }, n = Ai(e.ease), i = e.from || 0, r = parseFloat(e.base) || 0, o = {}, s = i > 0 && i < 1, l = isNaN(i) || s, c = e.axis, h = i, u = i;
  return pe(i) ? h = u = {
    center: 0.5,
    edges: 0.5,
    end: 1
  }[i] || 0 : !s && l && (h = i[0], u = i[1]), function(d, m, g) {
    var f = (g || e).length, p = o[f], _, b, x, y, M, A, P, v, w;
    if (!p) {
      if (w = e.grid === "auto" ? 0 : (e.grid || [1, sn])[1], !w) {
        for (P = -sn; P < (P = g[w++].getBoundingClientRect().left) && w < f; )
          ;
        w--;
      }
      for (p = o[f] = [], _ = l ? Math.min(w, f) * h - 0.5 : i % w, b = w === sn ? 0 : l ? f * u / w - 0.5 : i / w | 0, P = 0, v = sn, A = 0; A < f; A++)
        x = A % w - _, y = b - (A / w | 0), p[A] = M = c ? Math.abs(c === "y" ? y : x) : wh(x * x + y * y), M > P && (P = M), M < v && (v = M);
      i === "random" && Vh(p), p.max = P - v, p.min = v, p.v = f = (parseFloat(e.amount) || parseFloat(e.each) * (w > f ? f - 1 : c ? c === "y" ? f / w : w : Math.max(w, f / w)) || 0) * (i === "edges" ? -1 : 1), p.b = f < 0 ? r - f : r, p.u = Se(e.amount || e.each) || 0, n = n && f < 0 ? Qh(n) : n;
    }
    return f = (p[d] - p.min) / p.max || 0, ve(p.b + (n ? n(f) : f) * p.v) + p.u;
  };
}, Mo = function(t) {
  var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
  return function(n) {
    var i = ve(Math.round(parseFloat(n) / t) * t * e);
    return (i - i % 1) / e + (Hn(n) ? 0 : Se(n));
  };
}, Wh = function(t, e) {
  var n = Te(t), i, r;
  return !n && Ln(t) && (i = n = t.radius || sn, t.values ? (t = an(t.values), (r = !Hn(t[0])) && (i *= i)) : t = Mo(t.increment)), ai(e, n ? Yt(t) ? function(o) {
    return r = t(o), Math.abs(r - o) <= i ? r : o;
  } : function(o) {
    for (var s = parseFloat(r ? o.x : o), l = parseFloat(r ? o.y : 0), c = sn, h = 0, u = t.length, d, m; u--; )
      r ? (d = t[u].x - s, m = t[u].y - l, d = d * d + m * m) : d = Math.abs(t[u] - s), d < c && (c = d, h = u);
    return h = !i || c <= i ? t[h] : o, r || h === o || Hn(o) ? h : h + Se(o);
  } : Mo(t));
}, Xh = function(t, e, n, i) {
  return ai(Te(t) ? !e : n === !0 ? !!(n = 0) : !i, function() {
    return Te(t) ? t[~~(Math.random() * t.length)] : (n = n || 1e-5) && (i = n < 1 ? Math.pow(10, (n + "").length - 2) : 1) && Math.floor(Math.round((t - n / 2 + Math.random() * (e - t + n * 0.99)) / n) * n * i) / i;
  });
}, L0 = function() {
  for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
    e[n] = arguments[n];
  return function(i) {
    return e.reduce(function(r, o) {
      return o(r);
    }, i);
  };
}, D0 = function(t, e) {
  return function(n) {
    return t(parseFloat(n)) + (e || Se(n));
  };
}, R0 = function(t, e, n) {
  return Yh(t, e, 0, 1, n);
}, qh = function(t, e, n) {
  return ai(n, function(i) {
    return t[~~e(i)];
  });
}, I0 = function a(t, e, n) {
  var i = e - t;
  return Te(t) ? qh(t, a(0, t.length), e) : ai(n, function(r) {
    return (i + (r - t) % i) % i + t;
  });
}, O0 = function a(t, e, n) {
  var i = e - t, r = i * 2;
  return Te(t) ? qh(t, a(0, t.length - 1), e) : ai(n, function(o) {
    return o = (r + (o - t) % r) % r || 0, t + (o > i ? r - o : o);
  });
}, ns = function(t) {
  for (var e = 0, n = "", i, r, o, s; ~(i = t.indexOf("random(", e)); )
    o = t.indexOf(")", i), s = t.charAt(i + 7) === "[", r = t.substr(i + 7, o - i - 7).match(s ? Ch : mo), n += t.substr(e, i - e) + Xh(s ? r : +r[0], s ? 0 : +r[1], +r[2] || 1e-5), e = o + 1;
  return n + t.substr(e, t.length - e);
}, Yh = function(t, e, n, i, r) {
  var o = e - t, s = i - n;
  return ai(r, function(l) {
    return n + ((l - t) / o * s || 0);
  });
}, z0 = function a(t, e, n, i) {
  var r = isNaN(t + e) ? 0 : function(m) {
    return (1 - m) * t + m * e;
  };
  if (!r) {
    var o = pe(t), s = {}, l, c, h, u, d;
    if (n === !0 && (i = 1) && (n = null), o)
      t = {
        p: t
      }, e = {
        p: e
      };
    else if (Te(t) && !Te(e)) {
      for (h = [], u = t.length, d = u - 2, c = 1; c < u; c++)
        h.push(a(t[c - 1], t[c]));
      u--, r = function(g) {
        g *= u;
        var f = Math.min(d, ~~g);
        return h[f](g - f);
      }, n = e;
    } else
      i || (t = zi(Te(t) ? [] : {}, t));
    if (!h) {
      for (l in e)
        Wo.call(s, t, l, "get", e[l]);
      r = function(g) {
        return $o(g, s) || (o ? t.p : t);
      };
    }
  }
  return ai(n, r);
}, wc = function(t, e, n) {
  var i = t.labels, r = sn, o, s, l;
  for (o in i)
    s = i[o] - e, s < 0 == !!n && s && r > (s = Math.abs(s)) && (l = o, r = s);
  return l;
}, on = function(t, e, n) {
  var i = t.vars, r = i[e], o = te, s = t._ctx, l, c, h;
  if (r)
    return l = i[e + "Params"], c = i.callbackScope || t, n && Qn.length && $s(), s && (te = s), h = l ? r.apply(c, l) : r.call(c), te = o, h;
}, Vr = function(t) {
  return ni(t), t.scrollTrigger && t.scrollTrigger.kill(!!we), t.progress() < 1 && on(t, "onInterrupt"), t;
}, cr, $h = [], jh = function(t) {
  if (!Uo()) {
    $h.push(t);
    return;
  }
  t = !t.name && t.default || t;
  var e = t.name, n = Yt(t), i = e && !n && t.init ? function() {
    this._props = [];
  } : t, r = {
    init: es,
    render: $o,
    add: Wo,
    kill: K0,
    modifier: Z0,
    rawVars: 0
  }, o = {
    targetTest: 0,
    get: 0,
    getSetter: Yo,
    aliases: {},
    register: 0
  };
  if (Mr(), t !== i) {
    if (We[e])
      return;
    cn(i, cn(js(t, r), o)), zi(i.prototype, zi(r, js(t, o))), We[i.prop = e] = i, t.targetTest && (Gs.push(i), Go[e] = 1), e = (e === "css" ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin";
  }
  Dh(e, i), t.register && t.register(ke, i, Ue);
}, Bt = 255, Hr = {
  aqua: [0, Bt, Bt],
  lime: [0, Bt, 0],
  silver: [192, 192, 192],
  black: [0, 0, 0],
  maroon: [128, 0, 0],
  teal: [0, 128, 128],
  blue: [0, 0, Bt],
  navy: [0, 0, 128],
  white: [Bt, Bt, Bt],
  olive: [128, 128, 0],
  yellow: [Bt, Bt, 0],
  orange: [Bt, 165, 0],
  gray: [128, 128, 128],
  purple: [128, 0, 128],
  green: [0, 128, 0],
  red: [Bt, 0, 0],
  pink: [Bt, 192, 203],
  cyan: [0, Bt, Bt],
  transparent: [Bt, Bt, Bt, 0]
}, Xa = function(t, e, n) {
  return t += t < 0 ? 1 : t > 1 ? -1 : 0, (t * 6 < 1 ? e + (n - e) * t * 6 : t < 0.5 ? n : t * 3 < 2 ? e + (n - e) * (2 / 3 - t) * 6 : e) * Bt + 0.5 | 0;
}, Zh = function(t, e, n) {
  var i = t ? Hn(t) ? [t >> 16, t >> 8 & Bt, t & Bt] : 0 : Hr.black, r, o, s, l, c, h, u, d, m, g;
  if (!i) {
    if (t.substr(-1) === "," && (t = t.substr(0, t.length - 1)), Hr[t])
      i = Hr[t];
    else if (t.charAt(0) === "#") {
      if (t.length < 6 && (r = t.charAt(1), o = t.charAt(2), s = t.charAt(3), t = "#" + r + r + o + o + s + s + (t.length === 5 ? t.charAt(4) + t.charAt(4) : "")), t.length === 9)
        return i = parseInt(t.substr(1, 6), 16), [i >> 16, i >> 8 & Bt, i & Bt, parseInt(t.substr(7), 16) / 255];
      t = parseInt(t.substr(1), 16), i = [t >> 16, t >> 8 & Bt, t & Bt];
    } else if (t.substr(0, 3) === "hsl") {
      if (i = g = t.match(mo), !e)
        l = +i[0] % 360 / 360, c = +i[1] / 100, h = +i[2] / 100, o = h <= 0.5 ? h * (c + 1) : h + c - h * c, r = h * 2 - o, i.length > 3 && (i[3] *= 1), i[0] = Xa(l + 1 / 3, r, o), i[1] = Xa(l, r, o), i[2] = Xa(l - 1 / 3, r, o);
      else if (~t.indexOf("="))
        return i = t.match(Eh), n && i.length < 4 && (i[3] = 1), i;
    } else
      i = t.match(mo) || Hr.transparent;
    i = i.map(Number);
  }
  return e && !g && (r = i[0] / Bt, o = i[1] / Bt, s = i[2] / Bt, u = Math.max(r, o, s), d = Math.min(r, o, s), h = (u + d) / 2, u === d ? l = c = 0 : (m = u - d, c = h > 0.5 ? m / (2 - u - d) : m / (u + d), l = u === r ? (o - s) / m + (o < s ? 6 : 0) : u === o ? (s - r) / m + 2 : (r - o) / m + 4, l *= 60), i[0] = ~~(l + 0.5), i[1] = ~~(c * 100 + 0.5), i[2] = ~~(h * 100 + 0.5)), n && i.length < 4 && (i[3] = 1), i;
}, Kh = function(t) {
  var e = [], n = [], i = -1;
  return t.split(ti).forEach(function(r) {
    var o = r.match(lr) || [];
    e.push.apply(e, o), n.push(i += o.length + 1);
  }), e.c = n, e;
}, Tc = function(t, e, n) {
  var i = "", r = (t + i).match(ti), o = e ? "hsla(" : "rgba(", s = 0, l, c, h, u;
  if (!r)
    return t;
  if (r = r.map(function(d) {
    return (d = Zh(d, e, 1)) && o + (e ? d[0] + "," + d[1] + "%," + d[2] + "%," + d[3] : d.join(",")) + ")";
  }), n && (h = Kh(t), l = n.c, l.join(i) !== h.c.join(i)))
    for (c = t.replace(ti, "1").split(lr), u = c.length - 1; s < u; s++)
      i += c[s] + (~l.indexOf(s) ? r.shift() || o + "0,0,0,0)" : (h.length ? h : r.length ? r : n).shift());
  if (!c)
    for (c = t.split(ti), u = c.length - 1; s < u; s++)
      i += c[s] + r[s];
  return i + c[u];
}, ti = function() {
  var a = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", t;
  for (t in Hr)
    a += "|" + t + "\\b";
  return new RegExp(a + ")", "gi");
}(), F0 = /hsl[a]?\(/, Jh = function(t) {
  var e = t.join(" "), n;
  if (ti.lastIndex = 0, ti.test(e))
    return n = F0.test(e), t[1] = Tc(t[1], n), t[0] = Tc(t[0], n, Kh(t[1])), !0;
}, is, qe = function() {
  var a = Date.now, t = 500, e = 33, n = a(), i = n, r = 1e3 / 240, o = r, s = [], l, c, h, u, d, m, g = function f(p) {
    var _ = a() - i, b = p === !0, x, y, M, A;
    if (_ > t && (n += _ - e), i += _, M = i - n, x = M - o, (x > 0 || b) && (A = ++u.frame, d = M - u.time * 1e3, u.time = M = M / 1e3, o += x + (x >= r ? 4 : r - x), y = 1), b || (l = c(f)), y)
      for (m = 0; m < s.length; m++)
        s[m](M, d, A, p);
  };
  return u = {
    time: 0,
    frame: 0,
    tick: function() {
      g(!0);
    },
    deltaRatio: function(p) {
      return d / (1e3 / (p || 60));
    },
    wake: function() {
      Ph && (!go && Uo() && (en = go = window, ko = en.document || {}, Ze.gsap = ke, (en.gsapVersions || (en.gsapVersions = [])).push(ke.version), Lh(qs || en.GreenSockGlobals || !en.gsap && en || {}), h = en.requestAnimationFrame, $h.forEach(jh)), l && u.sleep(), c = h || function(p) {
        return setTimeout(p, o - u.time * 1e3 + 1 | 0);
      }, is = 1, g(2));
    },
    sleep: function() {
      (h ? en.cancelAnimationFrame : clearTimeout)(l), is = 0, c = es;
    },
    lagSmoothing: function(p, _) {
      t = p || 1 / 0, e = Math.min(_ || 33, t);
    },
    fps: function(p) {
      r = 1e3 / (p || 240), o = u.time * 1e3 + r;
    },
    add: function(p, _, b) {
      var x = _ ? function(y, M, A, P) {
        p(y, M, A, P), u.remove(x);
      } : p;
      return u.remove(p), s[b ? "unshift" : "push"](x), Mr(), x;
    },
    remove: function(p, _) {
      ~(_ = s.indexOf(p)) && s.splice(_, 1) && m >= _ && m--;
    },
    _listeners: s
  }, u;
}(), Mr = function() {
  return !is && qe.wake();
}, Pt = {}, N0 = /^[\d.\-M][\d.\-,\s]/, U0 = /["']/g, k0 = function(t) {
  for (var e = {}, n = t.substr(1, t.length - 3).split(":"), i = n[0], r = 1, o = n.length, s, l, c; r < o; r++)
    l = n[r], s = r !== o - 1 ? l.lastIndexOf(",") : l.length, c = l.substr(0, s), e[i] = isNaN(c) ? c.replace(U0, "").trim() : +c, i = l.substr(s + 1).trim();
  return e;
}, B0 = function(t) {
  var e = t.indexOf("(") + 1, n = t.indexOf(")"), i = t.indexOf("(", e);
  return t.substring(e, ~i && i < n ? t.indexOf(")", n + 1) : n);
}, G0 = function(t) {
  var e = (t + "").split("("), n = Pt[e[0]];
  return n && e.length > 1 && n.config ? n.config.apply(null, ~t.indexOf("{") ? [k0(e[1])] : B0(t).split(",").map(zh)) : Pt._CE && N0.test(t) ? Pt._CE("", t) : n;
}, Qh = function(t) {
  return function(e) {
    return 1 - t(1 - e);
  };
}, tu = function a(t, e) {
  for (var n = t._first, i; n; )
    n instanceof Ie ? a(n, e) : n.vars.yoyoEase && (!n._yoyo || !n._repeat) && n._yoyo !== e && (n.timeline ? a(n.timeline, e) : (i = n._ease, n._ease = n._yEase, n._yEase = i, n._yoyo = e)), n = n._next;
}, Ai = function(t, e) {
  return t && (Yt(t) ? t : Pt[t] || G0(t)) || e;
}, Ni = function(t, e, n, i) {
  n === void 0 && (n = function(l) {
    return 1 - e(1 - l);
  }), i === void 0 && (i = function(l) {
    return l < 0.5 ? e(l * 2) / 2 : 1 - e((1 - l) * 2) / 2;
  });
  var r = {
    easeIn: e,
    easeOut: n,
    easeInOut: i
  }, o;
  return Ne(t, function(s) {
    Pt[s] = Ze[s] = r, Pt[o = s.toLowerCase()] = n;
    for (var l in r)
      Pt[o + (l === "easeIn" ? ".in" : l === "easeOut" ? ".out" : ".inOut")] = Pt[s + "." + l] = r[l];
  }), r;
}, eu = function(t) {
  return function(e) {
    return e < 0.5 ? (1 - t(1 - e * 2)) / 2 : 0.5 + t((e - 0.5) * 2) / 2;
  };
}, qa = function a(t, e, n) {
  var i = e >= 1 ? e : 1, r = (n || (t ? 0.3 : 0.45)) / (e < 1 ? e : 1), o = r / po * (Math.asin(1 / i) || 0), s = function(h) {
    return h === 1 ? 1 : i * Math.pow(2, -10 * h) * m0((h - o) * r) + 1;
  }, l = t === "out" ? s : t === "in" ? function(c) {
    return 1 - s(1 - c);
  } : eu(s);
  return r = po / r, l.config = function(c, h) {
    return a(t, c, h);
  }, l;
}, Ya = function a(t, e) {
  e === void 0 && (e = 1.70158);
  var n = function(o) {
    return o ? --o * o * ((e + 1) * o + e) + 1 : 0;
  }, i = t === "out" ? n : t === "in" ? function(r) {
    return 1 - n(1 - r);
  } : eu(n);
  return i.config = function(r) {
    return a(t, r);
  }, i;
};
Ne("Linear,Quad,Cubic,Quart,Quint,Strong", function(a, t) {
  var e = t < 5 ? t + 1 : t;
  Ni(a + ",Power" + (e - 1), t ? function(n) {
    return Math.pow(n, e);
  } : function(n) {
    return n;
  }, function(n) {
    return 1 - Math.pow(1 - n, e);
  }, function(n) {
    return n < 0.5 ? Math.pow(n * 2, e) / 2 : 1 - Math.pow((1 - n) * 2, e) / 2;
  });
});
Pt.Linear.easeNone = Pt.none = Pt.Linear.easeIn;
Ni("Elastic", qa("in"), qa("out"), qa());
(function(a, t) {
  var e = 1 / t, n = 2 * e, i = 2.5 * e, r = function(s) {
    return s < e ? a * s * s : s < n ? a * Math.pow(s - 1.5 / t, 2) + 0.75 : s < i ? a * (s -= 2.25 / t) * s + 0.9375 : a * Math.pow(s - 2.625 / t, 2) + 0.984375;
  };
  Ni("Bounce", function(o) {
    return 1 - r(1 - o);
  }, r);
})(7.5625, 2.75);
Ni("Expo", function(a) {
  return a ? Math.pow(2, 10 * (a - 1)) : 0;
});
Ni("Circ", function(a) {
  return -(wh(1 - a * a) - 1);
});
Ni("Sine", function(a) {
  return a === 1 ? 1 : -p0(a * d0) + 1;
});
Ni("Back", Ya("in"), Ya("out"), Ya());
Pt.SteppedEase = Pt.steps = Ze.SteppedEase = {
  config: function(t, e) {
    t === void 0 && (t = 1);
    var n = 1 / t, i = t + (e ? 0 : 1), r = e ? 1 : 0, o = 1 - Vt;
    return function(s) {
      return ((i * cs(0, o, s) | 0) + r) * n;
    };
  }
};
xr.ease = Pt["quad.out"];
Ne("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(a) {
  return Vo += a + "," + a + "Params,";
});
var nu = function(t, e) {
  this.id = f0++, t._gsap = this, this.target = t, this.harness = e, this.get = e ? e.get : Ih, this.set = e ? e.getSetter : Yo;
}, Sr = /* @__PURE__ */ function() {
  function a(e) {
    this.vars = e, this._delay = +e.delay || 0, (this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) && (this._rDelay = e.repeatDelay || 0, this._yoyo = !!e.yoyo || !!e.yoyoEase), this._ts = 1, br(this, +e.duration, 1, 1), this.data = e.data, te && (this._ctx = te, te.data.push(this)), is || qe.wake();
  }
  var t = a.prototype;
  return t.delay = function(n) {
    return n || n === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + n - this._delay), this._delay = n, this) : this._delay;
  }, t.duration = function(n) {
    return arguments.length ? this.totalDuration(this._repeat > 0 ? n + (n + this._rDelay) * this._repeat : n) : this.totalDuration() && this._dur;
  }, t.totalDuration = function(n) {
    return arguments.length ? (this._dirty = 0, br(this, this._repeat < 0 ? n : (n - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
  }, t.totalTime = function(n, i) {
    if (Mr(), !arguments.length)
      return this._tTime;
    var r = this._dp;
    if (r && r.smoothChildTiming && this._ts) {
      for (sa(this, n), !r._dp || r.parent || Uh(r, this); r && r.parent; )
        r.parent._time !== r._start + (r._ts >= 0 ? r._tTime / r._ts : (r.totalDuration() - r._tTime) / -r._ts) && r.totalTime(r._tTime, !0), r = r.parent;
      !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && n < this._tDur || this._ts < 0 && n > 0 || !this._tDur && !n) && Sn(this._dp, this, this._start - this._delay);
    }
    return (this._tTime !== n || !this._dur && !i || this._initted && Math.abs(this._zTime) === Vt || !n && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = n), Oh(this, n, i)), this;
  }, t.time = function(n, i) {
    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), n + Mc(this)) % (this._dur + this._rDelay) || (n ? this._dur : 0), i) : this._time;
  }, t.totalProgress = function(n, i) {
    return arguments.length ? this.totalTime(this.totalDuration() * n, i) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio;
  }, t.progress = function(n, i) {
    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - n : n) + Mc(this), i) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio;
  }, t.iteration = function(n, i) {
    var r = this.duration() + this._rDelay;
    return arguments.length ? this.totalTime(this._time + (n - 1) * r, i) : this._repeat ? yr(this._tTime, r) + 1 : 1;
  }, t.timeScale = function(n) {
    if (!arguments.length)
      return this._rts === -Vt ? 0 : this._rts;
    if (this._rts === n)
      return this;
    var i = this.parent && this._ts ? Zs(this.parent._time, this) : this._tTime;
    return this._rts = +n || 0, this._ts = this._ps || n === -Vt ? 0 : this._rts, this.totalTime(cs(-Math.abs(this._delay), this._tDur, i), !0), ra(this), M0(this);
  }, t.paused = function(n) {
    return arguments.length ? (this._ps !== n && (this._ps = n, n ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (Mr(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== Vt && (this._tTime -= Vt)))), this) : this._ps;
  }, t.startTime = function(n) {
    if (arguments.length) {
      this._start = n;
      var i = this.parent || this._dp;
      return i && (i._sort || !this.parent) && Sn(i, this, n - this._delay), this;
    }
    return this._start;
  }, t.endTime = function(n) {
    return this._start + (Fe(n) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
  }, t.rawTime = function(n) {
    var i = this.parent || this._dp;
    return i ? n && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Zs(i.rawTime(n), this) : this._tTime : this._tTime;
  }, t.revert = function(n) {
    n === void 0 && (n = v0);
    var i = we;
    return we = n, (this._initted || this._startAt) && (this.timeline && this.timeline.revert(n), this.totalTime(-0.01, n.suppressEvents)), this.data !== "nested" && n.kill !== !1 && this.kill(), we = i, this;
  }, t.globalTime = function(n) {
    for (var i = this, r = arguments.length ? n : i.rawTime(); i; )
      r = i._start + r / (i._ts || 1), i = i._dp;
    return !this.parent && this._sat ? this._sat.vars.immediateRender ? -1 : this._sat.globalTime(n) : r;
  }, t.repeat = function(n) {
    return arguments.length ? (this._repeat = n === 1 / 0 ? -2 : n, Sc(this)) : this._repeat === -2 ? 1 / 0 : this._repeat;
  }, t.repeatDelay = function(n) {
    if (arguments.length) {
      var i = this._time;
      return this._rDelay = n, Sc(this), i ? this.time(i) : this;
    }
    return this._rDelay;
  }, t.yoyo = function(n) {
    return arguments.length ? (this._yoyo = n, this) : this._yoyo;
  }, t.seek = function(n, i) {
    return this.totalTime(tn(this, n), Fe(i));
  }, t.restart = function(n, i) {
    return this.play().totalTime(n ? -this._delay : 0, Fe(i));
  }, t.play = function(n, i) {
    return n != null && this.seek(n, i), this.reversed(!1).paused(!1);
  }, t.reverse = function(n, i) {
    return n != null && this.seek(n || this.totalDuration(), i), this.reversed(!0).paused(!1);
  }, t.pause = function(n, i) {
    return n != null && this.seek(n, i), this.paused(!0);
  }, t.resume = function() {
    return this.paused(!1);
  }, t.reversed = function(n) {
    return arguments.length ? (!!n !== this.reversed() && this.timeScale(-this._rts || (n ? -Vt : 0)), this) : this._rts < 0;
  }, t.invalidate = function() {
    return this._initted = this._act = 0, this._zTime = -Vt, this;
  }, t.isActive = function() {
    var n = this.parent || this._dp, i = this._start, r;
    return !!(!n || this._ts && this._initted && n.isActive() && (r = n.rawTime(!0)) >= i && r < this.endTime(!0) - Vt);
  }, t.eventCallback = function(n, i, r) {
    var o = this.vars;
    return arguments.length > 1 ? (i ? (o[n] = i, r && (o[n + "Params"] = r), n === "onUpdate" && (this._onUpdate = i)) : delete o[n], this) : o[n];
  }, t.then = function(n) {
    var i = this;
    return new Promise(function(r) {
      var o = Yt(n) ? n : Fh, s = function() {
        var c = i.then;
        i.then = null, Yt(o) && (o = o(i)) && (o.then || o === i) && (i.then = c), r(o), i.then = c;
      };
      i._initted && i.totalProgress() === 1 && i._ts >= 0 || !i._tTime && i._ts < 0 ? s() : i._prom = s;
    });
  }, t.kill = function() {
    Vr(this);
  }, a;
}();
cn(Sr.prototype, {
  _time: 0,
  _start: 0,
  _end: 0,
  _tTime: 0,
  _tDur: 0,
  _dirty: 0,
  _repeat: 0,
  _yoyo: !1,
  parent: null,
  _initted: !1,
  _rDelay: 0,
  _ts: 1,
  _dp: 0,
  ratio: 0,
  _zTime: -Vt,
  _prom: 0,
  _ps: !1,
  _rts: 1
});
var Ie = /* @__PURE__ */ function(a) {
  Sh(t, a);
  function t(n, i) {
    var r;
    return n === void 0 && (n = {}), r = a.call(this, n) || this, r.labels = {}, r.smoothChildTiming = !!n.smoothChildTiming, r.autoRemoveChildren = !!n.autoRemoveChildren, r._sort = Fe(n.sortChildren), Xt && Sn(n.parent || Xt, Un(r), i), n.reversed && r.reverse(), n.paused && r.paused(!0), n.scrollTrigger && kh(Un(r), n.scrollTrigger), r;
  }
  var e = t.prototype;
  return e.to = function(i, r, o) {
    return $r(0, arguments, this), this;
  }, e.from = function(i, r, o) {
    return $r(1, arguments, this), this;
  }, e.fromTo = function(i, r, o, s) {
    return $r(2, arguments, this), this;
  }, e.set = function(i, r, o) {
    return r.duration = 0, r.parent = this, Yr(r).repeatDelay || (r.repeat = 0), r.immediateRender = !!r.immediateRender, new se(i, r, tn(this, o), 1), this;
  }, e.call = function(i, r, o) {
    return Sn(this, se.delayedCall(0, i, r), o);
  }, e.staggerTo = function(i, r, o, s, l, c, h) {
    return o.duration = r, o.stagger = o.stagger || s, o.onComplete = c, o.onCompleteParams = h, o.parent = this, new se(i, o, tn(this, l)), this;
  }, e.staggerFrom = function(i, r, o, s, l, c, h) {
    return o.runBackwards = 1, Yr(o).immediateRender = Fe(o.immediateRender), this.staggerTo(i, r, o, s, l, c, h);
  }, e.staggerFromTo = function(i, r, o, s, l, c, h, u) {
    return s.startAt = o, Yr(s).immediateRender = Fe(s.immediateRender), this.staggerTo(i, r, s, l, c, h, u);
  }, e.render = function(i, r, o) {
    var s = this._time, l = this._dirty ? this.totalDuration() : this._tDur, c = this._dur, h = i <= 0 ? 0 : ve(i), u = this._zTime < 0 != i < 0 && (this._initted || !c), d, m, g, f, p, _, b, x, y, M, A, P;
    if (this !== Xt && h > l && i >= 0 && (h = l), h !== this._tTime || o || u) {
      if (s !== this._time && c && (h += this._time - s, i += this._time - s), d = h, y = this._start, x = this._ts, _ = !x, u && (c || (s = this._zTime), (i || !r) && (this._zTime = i)), this._repeat) {
        if (A = this._yoyo, p = c + this._rDelay, this._repeat < -1 && i < 0)
          return this.totalTime(p * 100 + i, r, o);
        if (d = ve(h % p), h === l ? (f = this._repeat, d = c) : (f = ~~(h / p), f && f === h / p && (d = c, f--), d > c && (d = c)), M = yr(this._tTime, p), !s && this._tTime && M !== f && this._tTime - M * p - this._dur <= 0 && (M = f), A && f & 1 && (d = c - d, P = 1), f !== M && !this._lock) {
          var v = A && M & 1, w = v === (A && f & 1);
          if (f < M && (v = !v), s = v ? 0 : c, this._lock = 1, this.render(s || (P ? 0 : ve(f * p)), r, !c)._lock = 0, this._tTime = h, !r && this.parent && on(this, "onRepeat"), this.vars.repeatRefresh && !P && (this.invalidate()._lock = 1), s && s !== this._time || _ !== !this._ts || this.vars.onRepeat && !this.parent && !this._act)
            return this;
          if (c = this._dur, l = this._tDur, w && (this._lock = 2, s = v ? c : -1e-4, this.render(s, !0), this.vars.repeatRefresh && !P && this.invalidate()), this._lock = 0, !this._ts && !_)
            return this;
          tu(this, P);
        }
      }
      if (this._hasPause && !this._forcing && this._lock < 2 && (b = E0(this, ve(s), ve(d)), b && (h -= d - (d = b._start))), this._tTime = h, this._time = d, this._act = !x, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = i, s = 0), !s && d && !r && !f && (on(this, "onStart"), this._tTime !== h))
        return this;
      if (d >= s && i >= 0)
        for (m = this._first; m; ) {
          if (g = m._next, (m._act || d >= m._start) && m._ts && b !== m) {
            if (m.parent !== this)
              return this.render(i, r, o);
            if (m.render(m._ts > 0 ? (d - m._start) * m._ts : (m._dirty ? m.totalDuration() : m._tDur) + (d - m._start) * m._ts, r, o), d !== this._time || !this._ts && !_) {
              b = 0, g && (h += this._zTime = -Vt);
              break;
            }
          }
          m = g;
        }
      else {
        m = this._last;
        for (var L = i < 0 ? i : d; m; ) {
          if (g = m._prev, (m._act || L <= m._end) && m._ts && b !== m) {
            if (m.parent !== this)
              return this.render(i, r, o);
            if (m.render(m._ts > 0 ? (L - m._start) * m._ts : (m._dirty ? m.totalDuration() : m._tDur) + (L - m._start) * m._ts, r, o || we && (m._initted || m._startAt)), d !== this._time || !this._ts && !_) {
              b = 0, g && (h += this._zTime = L ? -Vt : Vt);
              break;
            }
          }
          m = g;
        }
      }
      if (b && !r && (this.pause(), b.render(d >= s ? 0 : -Vt)._zTime = d >= s ? 1 : -1, this._ts))
        return this._start = y, ra(this), this.render(i, r, o);
      this._onUpdate && !r && on(this, "onUpdate", !0), (h === l && this._tTime >= this.totalDuration() || !h && s) && (y === this._start || Math.abs(x) !== Math.abs(this._ts)) && (this._lock || ((i || !c) && (h === l && this._ts > 0 || !h && this._ts < 0) && ni(this, 1), !r && !(i < 0 && !s) && (h || s || !l) && (on(this, h === l && i >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(h < l && this.timeScale() > 0) && this._prom())));
    }
    return this;
  }, e.add = function(i, r) {
    var o = this;
    if (Hn(r) || (r = tn(this, r, i)), !(i instanceof Sr)) {
      if (Te(i))
        return i.forEach(function(s) {
          return o.add(s, r);
        }), this;
      if (pe(i))
        return this.addLabel(i, r);
      if (Yt(i))
        i = se.delayedCall(0, i);
      else
        return this;
    }
    return this !== i ? Sn(this, i, r) : this;
  }, e.getChildren = function(i, r, o, s) {
    i === void 0 && (i = !0), r === void 0 && (r = !0), o === void 0 && (o = !0), s === void 0 && (s = -sn);
    for (var l = [], c = this._first; c; )
      c._start >= s && (c instanceof se ? r && l.push(c) : (o && l.push(c), i && l.push.apply(l, c.getChildren(!0, r, o)))), c = c._next;
    return l;
  }, e.getById = function(i) {
    for (var r = this.getChildren(1, 1, 1), o = r.length; o--; )
      if (r[o].vars.id === i)
        return r[o];
  }, e.remove = function(i) {
    return pe(i) ? this.removeLabel(i) : Yt(i) ? this.killTweensOf(i) : (ia(this, i), i === this._recent && (this._recent = this._last), Ei(this));
  }, e.totalTime = function(i, r) {
    return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = ve(qe.time - (this._ts > 0 ? i / this._ts : (this.totalDuration() - i) / -this._ts))), a.prototype.totalTime.call(this, i, r), this._forcing = 0, this) : this._tTime;
  }, e.addLabel = function(i, r) {
    return this.labels[i] = tn(this, r), this;
  }, e.removeLabel = function(i) {
    return delete this.labels[i], this;
  }, e.addPause = function(i, r, o) {
    var s = se.delayedCall(0, r || es, o);
    return s.data = "isPause", this._hasPause = 1, Sn(this, s, tn(this, i));
  }, e.removePause = function(i) {
    var r = this._first;
    for (i = tn(this, i); r; )
      r._start === i && r.data === "isPause" && ni(r), r = r._next;
  }, e.killTweensOf = function(i, r, o) {
    for (var s = this.getTweensOf(i, o), l = s.length; l--; )
      jn !== s[l] && s[l].kill(i, r);
    return this;
  }, e.getTweensOf = function(i, r) {
    for (var o = [], s = an(i), l = this._first, c = Hn(r), h; l; )
      l instanceof se ? x0(l._targets, s) && (c ? (!jn || l._initted && l._ts) && l.globalTime(0) <= r && l.globalTime(l.totalDuration()) > r : !r || l.isActive()) && o.push(l) : (h = l.getTweensOf(s, r)).length && o.push.apply(o, h), l = l._next;
    return o;
  }, e.tweenTo = function(i, r) {
    r = r || {};
    var o = this, s = tn(o, i), l = r, c = l.startAt, h = l.onStart, u = l.onStartParams, d = l.immediateRender, m, g = se.to(o, cn({
      ease: r.ease || "none",
      lazy: !1,
      immediateRender: !1,
      time: s,
      overwrite: "auto",
      duration: r.duration || Math.abs((s - (c && "time" in c ? c.time : o._time)) / o.timeScale()) || Vt,
      onStart: function() {
        if (o.pause(), !m) {
          var p = r.duration || Math.abs((s - (c && "time" in c ? c.time : o._time)) / o.timeScale());
          g._dur !== p && br(g, p, 0, 1).render(g._time, !0, !0), m = 1;
        }
        h && h.apply(g, u || []);
      }
    }, r));
    return d ? g.render(0) : g;
  }, e.tweenFromTo = function(i, r, o) {
    return this.tweenTo(r, cn({
      startAt: {
        time: tn(this, i)
      }
    }, o));
  }, e.recent = function() {
    return this._recent;
  }, e.nextLabel = function(i) {
    return i === void 0 && (i = this._time), wc(this, tn(this, i));
  }, e.previousLabel = function(i) {
    return i === void 0 && (i = this._time), wc(this, tn(this, i), 1);
  }, e.currentLabel = function(i) {
    return arguments.length ? this.seek(i, !0) : this.previousLabel(this._time + Vt);
  }, e.shiftChildren = function(i, r, o) {
    o === void 0 && (o = 0);
    for (var s = this._first, l = this.labels, c; s; )
      s._start >= o && (s._start += i, s._end += i), s = s._next;
    if (r)
      for (c in l)
        l[c] >= o && (l[c] += i);
    return Ei(this);
  }, e.invalidate = function(i) {
    var r = this._first;
    for (this._lock = 0; r; )
      r.invalidate(i), r = r._next;
    return a.prototype.invalidate.call(this, i);
  }, e.clear = function(i) {
    i === void 0 && (i = !0);
    for (var r = this._first, o; r; )
      o = r._next, this.remove(r), r = o;
    return this._dp && (this._time = this._tTime = this._pTime = 0), i && (this.labels = {}), Ei(this);
  }, e.totalDuration = function(i) {
    var r = 0, o = this, s = o._last, l = sn, c, h, u;
    if (arguments.length)
      return o.timeScale((o._repeat < 0 ? o.duration() : o.totalDuration()) / (o.reversed() ? -i : i));
    if (o._dirty) {
      for (u = o.parent; s; )
        c = s._prev, s._dirty && s.totalDuration(), h = s._start, h > l && o._sort && s._ts && !o._lock ? (o._lock = 1, Sn(o, s, h - s._delay, 1)._lock = 0) : l = h, h < 0 && s._ts && (r -= h, (!u && !o._dp || u && u.smoothChildTiming) && (o._start += h / o._ts, o._time -= h, o._tTime -= h), o.shiftChildren(-h, !1, -1 / 0), l = 0), s._end > r && s._ts && (r = s._end), s = c;
      br(o, o === Xt && o._time > r ? o._time : r, 1, 1), o._dirty = 0;
    }
    return o._tDur;
  }, t.updateRoot = function(i) {
    if (Xt._ts && (Oh(Xt, Zs(i, Xt)), Rh = qe.frame), qe.frame >= yc) {
      yc += je.autoSleep || 120;
      var r = Xt._first;
      if ((!r || !r._ts) && je.autoSleep && qe._listeners.length < 2) {
        for (; r && !r._ts; )
          r = r._next;
        r || qe.sleep();
      }
    }
  }, t;
}(Sr);
cn(Ie.prototype, {
  _lock: 0,
  _hasPause: 0,
  _forcing: 0
});
var V0 = function(t, e, n, i, r, o, s) {
  var l = new Ue(this._pt, t, e, 0, 1, lu, null, r), c = 0, h = 0, u, d, m, g, f, p, _, b;
  for (l.b = n, l.e = i, n += "", i += "", (_ = ~i.indexOf("random(")) && (i = ns(i)), o && (b = [n, i], o(b, t, e), n = b[0], i = b[1]), d = n.match(Ha) || []; u = Ha.exec(i); )
    g = u[0], f = i.substring(c, u.index), m ? m = (m + 1) % 5 : f.substr(-5) === "rgba(" && (m = 1), g !== d[h++] && (p = parseFloat(d[h - 1]) || 0, l._pt = {
      _next: l._pt,
      p: f || h === 1 ? f : ",",
      //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
      s: p,
      c: g.charAt(1) === "=" ? dr(p, g) - p : parseFloat(g) - p,
      m: m && m < 4 ? Math.round : 0
    }, c = Ha.lastIndex);
  return l.c = c < i.length ? i.substring(c, i.length) : "", l.fp = s, (Ah.test(i) || _) && (l.e = 0), this._pt = l, l;
}, Wo = function(t, e, n, i, r, o, s, l, c, h) {
  Yt(i) && (i = i(r || 0, t, o));
  var u = t[e], d = n !== "get" ? n : Yt(u) ? c ? t[e.indexOf("set") || !Yt(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](c) : t[e]() : u, m = Yt(u) ? c ? Y0 : au : qo, g;
  if (pe(i) && (~i.indexOf("random(") && (i = ns(i)), i.charAt(1) === "=" && (g = dr(d, i) + (Se(d) || 0), (g || g === 0) && (i = g))), !h || d !== i || So)
    return !isNaN(d * i) && i !== "" ? (g = new Ue(this._pt, t, e, +d || 0, i - (d || 0), typeof u == "boolean" ? j0 : ou, 0, m), c && (g.fp = c), s && g.modifier(s, this, t), this._pt = g) : (!u && !(e in t) && Bo(e, i), V0.call(this, t, e, d, i, m, l || je.stringFilter, c));
}, H0 = function(t, e, n, i, r) {
  if (Yt(t) && (t = jr(t, r, e, n, i)), !Ln(t) || t.style && t.nodeType || Te(t) || Th(t))
    return pe(t) ? jr(t, r, e, n, i) : t;
  var o = {}, s;
  for (s in t)
    o[s] = jr(t[s], r, e, n, i);
  return o;
}, iu = function(t, e, n, i, r, o) {
  var s, l, c, h;
  if (We[t] && (s = new We[t]()).init(r, s.rawVars ? e[t] : H0(e[t], i, r, o, n), n, i, o) !== !1 && (n._pt = l = new Ue(n._pt, r, t, 0, 1, s.render, s, 0, s.priority), n !== cr))
    for (c = n._ptLookup[n._targets.indexOf(r)], h = s._props.length; h--; )
      c[s._props[h]] = l;
  return s;
}, jn, So, Xo = function a(t, e, n) {
  var i = t.vars, r = i.ease, o = i.startAt, s = i.immediateRender, l = i.lazy, c = i.onUpdate, h = i.onUpdateParams, u = i.callbackScope, d = i.runBackwards, m = i.yoyoEase, g = i.keyframes, f = i.autoRevert, p = t._dur, _ = t._startAt, b = t._targets, x = t.parent, y = x && x.data === "nested" ? x.vars.targets : b, M = t._overwrite === "auto" && !Fo, A = t.timeline, P, v, w, L, U, j, O, I, k, $, Z, G, Q;
  if (A && (!g || !r) && (r = "none"), t._ease = Ai(r, xr.ease), t._yEase = m ? Qh(Ai(m === !0 ? r : m, xr.ease)) : 0, m && t._yoyo && !t._repeat && (m = t._yEase, t._yEase = t._ease, t._ease = m), t._from = !A && !!i.runBackwards, !A || g && !i.stagger) {
    if (I = b[0] ? Ti(b[0]).harness : 0, G = I && i[I.prop], P = js(i, Go), _ && (_._zTime < 0 && _.progress(1), e < 0 && d && s && !f ? _.render(-1, !0) : _.revert(d && p ? Bs : _0), _._lazy = 0), o) {
      if (ni(t._startAt = se.set(b, cn({
        data: "isStart",
        overwrite: !1,
        parent: x,
        immediateRender: !0,
        lazy: !_ && Fe(l),
        startAt: null,
        delay: 0,
        onUpdate: c,
        onUpdateParams: h,
        callbackScope: u,
        stagger: 0
      }, o))), t._startAt._dp = 0, t._startAt._sat = t, e < 0 && (we || !s && !f) && t._startAt.revert(Bs), s && p && e <= 0 && n <= 0) {
        e && (t._zTime = e);
        return;
      }
    } else if (d && p && !_) {
      if (e && (s = !1), w = cn({
        overwrite: !1,
        data: "isFromStart",
        //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
        lazy: s && !_ && Fe(l),
        immediateRender: s,
        //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
        stagger: 0,
        parent: x
        //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y:gsap.utils.wrap([-100,100])})
      }, P), G && (w[I.prop] = G), ni(t._startAt = se.set(b, w)), t._startAt._dp = 0, t._startAt._sat = t, e < 0 && (we ? t._startAt.revert(Bs) : t._startAt.render(-1, !0)), t._zTime = e, !s)
        a(t._startAt, Vt, Vt);
      else if (!e)
        return;
    }
    for (t._pt = t._ptCache = 0, l = p && Fe(l) || l && !p, v = 0; v < b.length; v++) {
      if (U = b[v], O = U._gsap || Ho(b)[v]._gsap, t._ptLookup[v] = $ = {}, _o[O.id] && Qn.length && $s(), Z = y === b ? v : y.indexOf(U), I && (k = new I()).init(U, G || P, t, Z, y) !== !1 && (t._pt = L = new Ue(t._pt, U, k.name, 0, 1, k.render, k, 0, k.priority), k._props.forEach(function(K) {
        $[K] = L;
      }), k.priority && (j = 1)), !I || G)
        for (w in P)
          We[w] && (k = iu(w, P, t, Z, U, y)) ? k.priority && (j = 1) : $[w] = L = Wo.call(t, U, w, "get", P[w], Z, y, 0, i.stringFilter);
      t._op && t._op[v] && t.kill(U, t._op[v]), M && t._pt && (jn = t, Xt.killTweensOf(U, $, t.globalTime(e)), Q = !t.parent, jn = 0), t._pt && l && (_o[O.id] = 1);
    }
    j && cu(t), t._onInit && t._onInit(t);
  }
  t._onUpdate = c, t._initted = (!t._op || t._pt) && !Q, g && e <= 0 && A.render(sn, !0, !0);
}, W0 = function(t, e, n, i, r, o, s) {
  var l = (t._pt && t._ptCache || (t._ptCache = {}))[e], c, h, u, d;
  if (!l)
    for (l = t._ptCache[e] = [], u = t._ptLookup, d = t._targets.length; d--; ) {
      if (c = u[d][e], c && c.d && c.d._pt)
        for (c = c.d._pt; c && c.p !== e && c.fp !== e; )
          c = c._next;
      if (!c)
        return So = 1, t.vars[e] = "+=0", Xo(t, s), So = 0, 1;
      l.push(c);
    }
  for (d = l.length; d--; )
    h = l[d], c = h._pt || h, c.s = (i || i === 0) && !r ? i : c.s + (i || 0) + o * c.c, c.c = n - c.s, h.e && (h.e = jt(n) + Se(h.e)), h.b && (h.b = c.s + Se(h.b));
}, X0 = function(t, e) {
  var n = t[0] ? Ti(t[0]).harness : 0, i = n && n.aliases, r, o, s, l;
  if (!i)
    return e;
  r = zi({}, e);
  for (o in i)
    if (o in r)
      for (l = i[o].split(","), s = l.length; s--; )
        r[l[s]] = r[o];
  return r;
}, q0 = function(t, e, n, i) {
  var r = e.ease || i || "power1.inOut", o, s;
  if (Te(e))
    s = n[t] || (n[t] = []), e.forEach(function(l, c) {
      return s.push({
        t: c / (e.length - 1) * 100,
        v: l,
        e: r
      });
    });
  else
    for (o in e)
      s = n[o] || (n[o] = []), o === "ease" || s.push({
        t: parseFloat(t),
        v: e[o],
        e: r
      });
}, jr = function(t, e, n, i, r) {
  return Yt(t) ? t.call(e, n, i, r) : pe(t) && ~t.indexOf("random(") ? ns(t) : t;
}, ru = Vo + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", su = {};
Ne(ru + ",id,stagger,delay,duration,paused,scrollTrigger", function(a) {
  return su[a] = 1;
});
var se = /* @__PURE__ */ function(a) {
  Sh(t, a);
  function t(n, i, r, o) {
    var s;
    typeof i == "number" && (r.duration = i, i = r, r = null), s = a.call(this, o ? i : Yr(i)) || this;
    var l = s.vars, c = l.duration, h = l.delay, u = l.immediateRender, d = l.stagger, m = l.overwrite, g = l.keyframes, f = l.defaults, p = l.scrollTrigger, _ = l.yoyoEase, b = i.parent || Xt, x = (Te(n) || Th(n) ? Hn(n[0]) : "length" in i) ? [n] : an(n), y, M, A, P, v, w, L, U;
    if (s._targets = x.length ? Ho(x) : Ys("GSAP target " + n + " not found. https://greensock.com", !je.nullTargetWarn) || [], s._ptLookup = [], s._overwrite = m, g || d || Os(c) || Os(h)) {
      if (i = s.vars, y = s.timeline = new Ie({
        data: "nested",
        defaults: f || {},
        targets: b && b.data === "nested" ? b.vars.targets : x
      }), y.kill(), y.parent = y._dp = Un(s), y._start = 0, d || Os(c) || Os(h)) {
        if (P = x.length, L = d && Hh(d), Ln(d))
          for (v in d)
            ~ru.indexOf(v) && (U || (U = {}), U[v] = d[v]);
        for (M = 0; M < P; M++)
          A = js(i, su), A.stagger = 0, _ && (A.yoyoEase = _), U && zi(A, U), w = x[M], A.duration = +jr(c, Un(s), M, w, x), A.delay = (+jr(h, Un(s), M, w, x) || 0) - s._delay, !d && P === 1 && A.delay && (s._delay = h = A.delay, s._start += h, A.delay = 0), y.to(w, A, L ? L(M, w, x) : 0), y._ease = Pt.none;
        y.duration() ? c = h = 0 : s.timeline = 0;
      } else if (g) {
        Yr(cn(y.vars.defaults, {
          ease: "none"
        })), y._ease = Ai(g.ease || i.ease || "none");
        var j = 0, O, I, k;
        if (Te(g))
          g.forEach(function($) {
            return y.to(x, $, ">");
          }), y.duration();
        else {
          A = {};
          for (v in g)
            v === "ease" || v === "easeEach" || q0(v, g[v], A, g.easeEach);
          for (v in A)
            for (O = A[v].sort(function($, Z) {
              return $.t - Z.t;
            }), j = 0, M = 0; M < O.length; M++)
              I = O[M], k = {
                ease: I.e,
                duration: (I.t - (M ? O[M - 1].t : 0)) / 100 * c
              }, k[v] = I.v, y.to(x, k, j), j += k.duration;
          y.duration() < c && y.to({}, {
            duration: c - y.duration()
          });
        }
      }
      c || s.duration(c = y.duration());
    } else
      s.timeline = 0;
    return m === !0 && !Fo && (jn = Un(s), Xt.killTweensOf(x), jn = 0), Sn(b, Un(s), r), i.reversed && s.reverse(), i.paused && s.paused(!0), (u || !c && !g && s._start === ve(b._time) && Fe(u) && S0(Un(s)) && b.data !== "nested") && (s._tTime = -Vt, s.render(Math.max(0, -h) || 0)), p && kh(Un(s), p), s;
  }
  var e = t.prototype;
  return e.render = function(i, r, o) {
    var s = this._time, l = this._tDur, c = this._dur, h = i < 0, u = i > l - Vt && !h ? l : i < Vt ? 0 : i, d, m, g, f, p, _, b, x, y;
    if (!c)
      T0(this, i, r, o);
    else if (u !== this._tTime || !i || o || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== h) {
      if (d = u, x = this.timeline, this._repeat) {
        if (f = c + this._rDelay, this._repeat < -1 && h)
          return this.totalTime(f * 100 + i, r, o);
        if (d = ve(u % f), u === l ? (g = this._repeat, d = c) : (g = ~~(u / f), g && g === u / f && (d = c, g--), d > c && (d = c)), _ = this._yoyo && g & 1, _ && (y = this._yEase, d = c - d), p = yr(this._tTime, f), d === s && !o && this._initted)
          return this._tTime = u, this;
        g !== p && (x && this._yEase && tu(x, _), this.vars.repeatRefresh && !_ && !this._lock && (this._lock = o = 1, this.render(ve(f * g), !0).invalidate()._lock = 0));
      }
      if (!this._initted) {
        if (Bh(this, h ? i : d, o, r, u))
          return this._tTime = 0, this;
        if (s !== this._time)
          return this;
        if (c !== this._dur)
          return this.render(i, r, o);
      }
      if (this._tTime = u, this._time = d, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = b = (y || this._ease)(d / c), this._from && (this.ratio = b = 1 - b), d && !s && !r && !g && (on(this, "onStart"), this._tTime !== u))
        return this;
      for (m = this._pt; m; )
        m.r(b, m.d), m = m._next;
      x && x.render(i < 0 ? i : !d && _ ? -Vt : x._dur * x._ease(d / this._dur), r, o) || this._startAt && (this._zTime = i), this._onUpdate && !r && (h && vo(this, i, r, o), on(this, "onUpdate")), this._repeat && g !== p && this.vars.onRepeat && !r && this.parent && on(this, "onRepeat"), (u === this._tDur || !u) && this._tTime === u && (h && !this._onUpdate && vo(this, i, !0, !0), (i || !c) && (u === this._tDur && this._ts > 0 || !u && this._ts < 0) && ni(this, 1), !r && !(h && !s) && (u || s || _) && (on(this, u === l ? "onComplete" : "onReverseComplete", !0), this._prom && !(u < l && this.timeScale() > 0) && this._prom()));
    }
    return this;
  }, e.targets = function() {
    return this._targets;
  }, e.invalidate = function(i) {
    return (!i || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(i), a.prototype.invalidate.call(this, i);
  }, e.resetTo = function(i, r, o, s) {
    is || qe.wake(), this._ts || this.play();
    var l = Math.min(this._dur, (this._dp._time - this._start) * this._ts), c;
    return this._initted || Xo(this, l), c = this._ease(l / this._dur), W0(this, i, r, o, s, c, l) ? this.resetTo(i, r, o, s) : (sa(this, 0), this.parent || Nh(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0));
  }, e.kill = function(i, r) {
    if (r === void 0 && (r = "all"), !i && (!r || r === "all"))
      return this._lazy = this._pt = 0, this.parent ? Vr(this) : this;
    if (this.timeline) {
      var o = this.timeline.totalDuration();
      return this.timeline.killTweensOf(i, r, jn && jn.vars.overwrite !== !0)._first || Vr(this), this.parent && o !== this.timeline.totalDuration() && br(this, this._dur * this.timeline._tDur / o, 0, 1), this;
    }
    var s = this._targets, l = i ? an(i) : s, c = this._ptLookup, h = this._pt, u, d, m, g, f, p, _;
    if ((!r || r === "all") && b0(s, l))
      return r === "all" && (this._pt = 0), Vr(this);
    for (u = this._op = this._op || [], r !== "all" && (pe(r) && (f = {}, Ne(r, function(b) {
      return f[b] = 1;
    }), r = f), r = X0(s, r)), _ = s.length; _--; )
      if (~l.indexOf(s[_])) {
        d = c[_], r === "all" ? (u[_] = r, g = d, m = {}) : (m = u[_] = u[_] || {}, g = r);
        for (f in g)
          p = d && d[f], p && ((!("kill" in p.d) || p.d.kill(f) === !0) && ia(this, p, "_pt"), delete d[f]), m !== "all" && (m[f] = 1);
      }
    return this._initted && !this._pt && h && Vr(this), this;
  }, t.to = function(i, r) {
    return new t(i, r, arguments[2]);
  }, t.from = function(i, r) {
    return $r(1, arguments);
  }, t.delayedCall = function(i, r, o, s) {
    return new t(r, 0, {
      immediateRender: !1,
      lazy: !1,
      overwrite: !1,
      delay: i,
      onComplete: r,
      onReverseComplete: r,
      onCompleteParams: o,
      onReverseCompleteParams: o,
      callbackScope: s
    });
  }, t.fromTo = function(i, r, o) {
    return $r(2, arguments);
  }, t.set = function(i, r) {
    return r.duration = 0, r.repeatDelay || (r.repeat = 0), new t(i, r);
  }, t.killTweensOf = function(i, r, o) {
    return Xt.killTweensOf(i, r, o);
  }, t;
}(Sr);
cn(se.prototype, {
  _targets: [],
  _lazy: 0,
  _startAt: 0,
  _op: 0,
  _onInit: 0
});
Ne("staggerTo,staggerFrom,staggerFromTo", function(a) {
  se[a] = function() {
    var t = new Ie(), e = yo.call(arguments, 0);
    return e.splice(a === "staggerFromTo" ? 5 : 4, 0, 0), t[a].apply(t, e);
  };
});
var qo = function(t, e, n) {
  return t[e] = n;
}, au = function(t, e, n) {
  return t[e](n);
}, Y0 = function(t, e, n, i) {
  return t[e](i.fp, n);
}, $0 = function(t, e, n) {
  return t.setAttribute(e, n);
}, Yo = function(t, e) {
  return Yt(t[e]) ? au : No(t[e]) && t.setAttribute ? $0 : qo;
}, ou = function(t, e) {
  return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e6) / 1e6, e);
}, j0 = function(t, e) {
  return e.set(e.t, e.p, !!(e.s + e.c * t), e);
}, lu = function(t, e) {
  var n = e._pt, i = "";
  if (!t && e.b)
    i = e.b;
  else if (t === 1 && e.e)
    i = e.e;
  else {
    for (; n; )
      i = n.p + (n.m ? n.m(n.s + n.c * t) : Math.round((n.s + n.c * t) * 1e4) / 1e4) + i, n = n._next;
    i += e.c;
  }
  e.set(e.t, e.p, i, e);
}, $o = function(t, e) {
  for (var n = e._pt; n; )
    n.r(t, n.d), n = n._next;
}, Z0 = function(t, e, n, i) {
  for (var r = this._pt, o; r; )
    o = r._next, r.p === i && r.modifier(t, e, n), r = o;
}, K0 = function(t) {
  for (var e = this._pt, n, i; e; )
    i = e._next, e.p === t && !e.op || e.op === t ? ia(this, e, "_pt") : e.dep || (n = 1), e = i;
  return !n;
}, J0 = function(t, e, n, i) {
  i.mSet(t, e, i.m.call(i.tween, n, i.mt), i);
}, cu = function(t) {
  for (var e = t._pt, n, i, r, o; e; ) {
    for (n = e._next, i = r; i && i.pr > e.pr; )
      i = i._next;
    (e._prev = i ? i._prev : o) ? e._prev._next = e : r = e, (e._next = i) ? i._prev = e : o = e, e = n;
  }
  t._pt = r;
}, Ue = /* @__PURE__ */ function() {
  function a(e, n, i, r, o, s, l, c, h) {
    this.t = n, this.s = r, this.c = o, this.p = i, this.r = s || ou, this.d = l || this, this.set = c || qo, this.pr = h || 0, this._next = e, e && (e._prev = this);
  }
  var t = a.prototype;
  return t.modifier = function(n, i, r) {
    this.mSet = this.mSet || this.set, this.set = J0, this.m = n, this.mt = r, this.tween = i;
  }, a;
}();
Ne(Vo + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(a) {
  return Go[a] = 1;
});
Ze.TweenMax = Ze.TweenLite = se;
Ze.TimelineLite = Ze.TimelineMax = Ie;
Xt = new Ie({
  sortChildren: !1,
  defaults: xr,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0
});
je.stringFilter = Jh;
var wr = [], Vs = {}, Q0 = [], Ec = 0, $a = function(t) {
  return (Vs[t] || Q0).map(function(e) {
    return e();
  });
}, wo = function() {
  var t = Date.now(), e = [];
  t - Ec > 2 && ($a("matchMediaInit"), wr.forEach(function(n) {
    var i = n.queries, r = n.conditions, o, s, l, c;
    for (s in i)
      o = en.matchMedia(i[s]).matches, o && (l = 1), o !== r[s] && (r[s] = o, c = 1);
    c && (n.revert(), l && e.push(n));
  }), $a("matchMediaRevert"), e.forEach(function(n) {
    return n.onMatch(n);
  }), Ec = t, $a("matchMedia"));
}, hu = /* @__PURE__ */ function() {
  function a(e, n) {
    this.selector = n && bo(n), this.data = [], this._r = [], this.isReverted = !1, e && this.add(e);
  }
  var t = a.prototype;
  return t.add = function(n, i, r) {
    Yt(n) && (r = i, i = n, n = Yt);
    var o = this, s = function() {
      var c = te, h = o.selector, u;
      return c && c !== o && c.data.push(o), r && (o.selector = bo(r)), te = o, u = i.apply(o, arguments), Yt(u) && o._r.push(u), te = c, o.selector = h, o.isReverted = !1, u;
    };
    return o.last = s, n === Yt ? s(o) : n ? o[n] = s : s;
  }, t.ignore = function(n) {
    var i = te;
    te = null, n(this), te = i;
  }, t.getTweens = function() {
    var n = [];
    return this.data.forEach(function(i) {
      return i instanceof a ? n.push.apply(n, i.getTweens()) : i instanceof se && !(i.parent && i.parent.data === "nested") && n.push(i);
    }), n;
  }, t.clear = function() {
    this._r.length = this.data.length = 0;
  }, t.kill = function(n, i) {
    var r = this;
    if (n) {
      var o = this.getTweens();
      this.data.forEach(function(l) {
        l.data === "isFlip" && (l.revert(), l.getChildren(!0, !0, !1).forEach(function(c) {
          return o.splice(o.indexOf(c), 1);
        }));
      }), o.map(function(l) {
        return {
          g: l.globalTime(0),
          t: l
        };
      }).sort(function(l, c) {
        return c.g - l.g || -1;
      }).forEach(function(l) {
        return l.t.revert(n);
      }), this.data.forEach(function(l) {
        return !(l instanceof Sr) && l.revert && l.revert(n);
      }), this._r.forEach(function(l) {
        return l(n, r);
      }), this.isReverted = !0;
    } else
      this.data.forEach(function(l) {
        return l.kill && l.kill();
      });
    if (this.clear(), i) {
      var s = wr.indexOf(this);
      ~s && wr.splice(s, 1);
    }
  }, t.revert = function(n) {
    this.kill(n || {});
  }, a;
}(), tv = /* @__PURE__ */ function() {
  function a(e) {
    this.contexts = [], this.scope = e;
  }
  var t = a.prototype;
  return t.add = function(n, i, r) {
    Ln(n) || (n = {
      matches: n
    });
    var o = new hu(0, r || this.scope), s = o.conditions = {}, l, c, h;
    this.contexts.push(o), i = o.add("onMatch", i), o.queries = n;
    for (c in n)
      c === "all" ? h = 1 : (l = en.matchMedia(n[c]), l && (wr.indexOf(o) < 0 && wr.push(o), (s[c] = l.matches) && (h = 1), l.addListener ? l.addListener(wo) : l.addEventListener("change", wo)));
    return h && i(o), this;
  }, t.revert = function(n) {
    this.kill(n || {});
  }, t.kill = function(n) {
    this.contexts.forEach(function(i) {
      return i.kill(n, !0);
    });
  }, a;
}(), Ks = {
  registerPlugin: function() {
    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
      e[n] = arguments[n];
    e.forEach(function(i) {
      return jh(i);
    });
  },
  timeline: function(t) {
    return new Ie(t);
  },
  getTweensOf: function(t, e) {
    return Xt.getTweensOf(t, e);
  },
  getProperty: function(t, e, n, i) {
    pe(t) && (t = an(t)[0]);
    var r = Ti(t || {}).get, o = n ? Fh : zh;
    return n === "native" && (n = ""), t && (e ? o((We[e] && We[e].get || r)(t, e, n, i)) : function(s, l, c) {
      return o((We[s] && We[s].get || r)(t, s, l, c));
    });
  },
  quickSetter: function(t, e, n) {
    if (t = an(t), t.length > 1) {
      var i = t.map(function(h) {
        return ke.quickSetter(h, e, n);
      }), r = i.length;
      return function(h) {
        for (var u = r; u--; )
          i[u](h);
      };
    }
    t = t[0] || {};
    var o = We[e], s = Ti(t), l = s.harness && (s.harness.aliases || {})[e] || e, c = o ? function(h) {
      var u = new o();
      cr._pt = 0, u.init(t, n ? h + n : h, cr, 0, [t]), u.render(1, u), cr._pt && $o(1, cr);
    } : s.set(t, l);
    return o ? c : function(h) {
      return c(t, l, n ? h + n : h, s, 1);
    };
  },
  quickTo: function(t, e, n) {
    var i, r = ke.to(t, zi((i = {}, i[e] = "+=0.1", i.paused = !0, i), n || {})), o = function(l, c, h) {
      return r.resetTo(e, l, c, h);
    };
    return o.tween = r, o;
  },
  isTweening: function(t) {
    return Xt.getTweensOf(t, !0).length > 0;
  },
  defaults: function(t) {
    return t && t.ease && (t.ease = Ai(t.ease, xr.ease)), bc(xr, t || {});
  },
  config: function(t) {
    return bc(je, t || {});
  },
  registerEffect: function(t) {
    var e = t.name, n = t.effect, i = t.plugins, r = t.defaults, o = t.extendTimeline;
    (i || "").split(",").forEach(function(s) {
      return s && !We[s] && !Ze[s] && Ys(e + " effect requires " + s + " plugin.");
    }), Wa[e] = function(s, l, c) {
      return n(an(s), cn(l || {}, r), c);
    }, o && (Ie.prototype[e] = function(s, l, c) {
      return this.add(Wa[e](s, Ln(l) ? l : (c = l) && {}, this), c);
    });
  },
  registerEase: function(t, e) {
    Pt[t] = Ai(e);
  },
  parseEase: function(t, e) {
    return arguments.length ? Ai(t, e) : Pt;
  },
  getById: function(t) {
    return Xt.getById(t);
  },
  exportRoot: function(t, e) {
    t === void 0 && (t = {});
    var n = new Ie(t), i, r;
    for (n.smoothChildTiming = Fe(t.smoothChildTiming), Xt.remove(n), n._dp = 0, n._time = n._tTime = Xt._time, i = Xt._first; i; )
      r = i._next, (e || !(!i._dur && i instanceof se && i.vars.onComplete === i._targets[0])) && Sn(n, i, i._start - i._delay), i = r;
    return Sn(Xt, n, 0), n;
  },
  context: function(t, e) {
    return t ? new hu(t, e) : te;
  },
  matchMedia: function(t) {
    return new tv(t);
  },
  matchMediaRefresh: function() {
    return wr.forEach(function(t) {
      var e = t.conditions, n, i;
      for (i in e)
        e[i] && (e[i] = !1, n = 1);
      n && t.revert();
    }) || wo();
  },
  addEventListener: function(t, e) {
    var n = Vs[t] || (Vs[t] = []);
    ~n.indexOf(e) || n.push(e);
  },
  removeEventListener: function(t, e) {
    var n = Vs[t], i = n && n.indexOf(e);
    i >= 0 && n.splice(i, 1);
  },
  utils: {
    wrap: I0,
    wrapYoyo: O0,
    distribute: Hh,
    random: Xh,
    snap: Wh,
    normalize: R0,
    getUnit: Se,
    clamp: C0,
    splitColor: Zh,
    toArray: an,
    selector: bo,
    mapRange: Yh,
    pipe: L0,
    unitize: D0,
    interpolate: z0,
    shuffle: Vh
  },
  install: Lh,
  effects: Wa,
  ticker: qe,
  updateRoot: Ie.updateRoot,
  plugins: We,
  globalTimeline: Xt,
  core: {
    PropTween: Ue,
    globals: Dh,
    Tween: se,
    Timeline: Ie,
    Animation: Sr,
    getCache: Ti,
    _removeLinkedListItem: ia,
    reverting: function() {
      return we;
    },
    context: function(t) {
      return t && te && (te.data.push(t), t._ctx = te), te;
    },
    suppressOverwrites: function(t) {
      return Fo = t;
    }
  }
};
Ne("to,from,fromTo,delayedCall,set,killTweensOf", function(a) {
  return Ks[a] = se[a];
});
qe.add(Ie.updateRoot);
cr = Ks.to({}, {
  duration: 0
});
var ev = function(t, e) {
  for (var n = t._pt; n && n.p !== e && n.op !== e && n.fp !== e; )
    n = n._next;
  return n;
}, nv = function(t, e) {
  var n = t._targets, i, r, o;
  for (i in e)
    for (r = n.length; r--; )
      o = t._ptLookup[r][i], o && (o = o.d) && (o._pt && (o = ev(o, i)), o && o.modifier && o.modifier(e[i], t, n[r], i));
}, ja = function(t, e) {
  return {
    name: t,
    rawVars: 1,
    //don't pre-process function-based values or "random()" strings.
    init: function(i, r, o) {
      o._onInit = function(s) {
        var l, c;
        if (pe(r) && (l = {}, Ne(r, function(h) {
          return l[h] = 1;
        }), r = l), e) {
          l = {};
          for (c in r)
            l[c] = e(r[c]);
          r = l;
        }
        nv(s, r);
      };
    }
  };
}, ke = Ks.registerPlugin({
  name: "attr",
  init: function(t, e, n, i, r) {
    var o, s, l;
    this.tween = n;
    for (o in e)
      l = t.getAttribute(o) || "", s = this.add(t, "setAttribute", (l || 0) + "", e[o], i, r, 0, 0, o), s.op = o, s.b = l, this._props.push(o);
  },
  render: function(t, e) {
    for (var n = e._pt; n; )
      we ? n.set(n.t, n.p, n.b, n) : n.r(t, n.d), n = n._next;
  }
}, {
  name: "endArray",
  init: function(t, e) {
    for (var n = e.length; n--; )
      this.add(t, n, t[n] || 0, e[n], 0, 0, 0, 0, 0, 1);
  }
}, ja("roundProps", Mo), ja("modifiers"), ja("snap", Wh)) || Ks;
se.version = Ie.version = ke.version = "3.11.5";
Ph = 1;
Uo() && Mr();
Pt.Power0;
Pt.Power1;
Pt.Power2;
Pt.Power3;
Pt.Power4;
Pt.Linear;
Pt.Quad;
Pt.Cubic;
Pt.Quart;
Pt.Quint;
Pt.Strong;
Pt.Elastic;
Pt.Back;
Pt.SteppedEase;
Pt.Bounce;
Pt.Sine;
Pt.Expo;
Pt.Circ;
/*!
 * CSSPlugin 3.11.5
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var Ac, Zn, fr, jo, Mi, Cc, Zo, iv = function() {
  return typeof window < "u";
}, Wn = {}, vi = 180 / Math.PI, pr = Math.PI / 180, rr = Math.atan2, Pc = 1e8, Ko = /([A-Z])/g, rv = /(left|right|width|margin|padding|x)/i, sv = /[\s,\(]\S/, En = {
  autoAlpha: "opacity,visibility",
  scale: "scaleX,scaleY",
  alpha: "opacity"
}, To = function(t, e) {
  return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e);
}, av = function(t, e) {
  return e.set(e.t, e.p, t === 1 ? e.e : Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e);
}, ov = function(t, e) {
  return e.set(e.t, e.p, t ? Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u : e.b, e);
}, lv = function(t, e) {
  var n = e.s + e.c * t;
  e.set(e.t, e.p, ~~(n + (n < 0 ? -0.5 : 0.5)) + e.u, e);
}, uu = function(t, e) {
  return e.set(e.t, e.p, t ? e.e : e.b, e);
}, du = function(t, e) {
  return e.set(e.t, e.p, t !== 1 ? e.b : e.e, e);
}, cv = function(t, e, n) {
  return t.style[e] = n;
}, hv = function(t, e, n) {
  return t.style.setProperty(e, n);
}, uv = function(t, e, n) {
  return t._gsap[e] = n;
}, dv = function(t, e, n) {
  return t._gsap.scaleX = t._gsap.scaleY = n;
}, fv = function(t, e, n, i, r) {
  var o = t._gsap;
  o.scaleX = o.scaleY = n, o.renderTransform(r, o);
}, pv = function(t, e, n, i, r) {
  var o = t._gsap;
  o[e] = n, o.renderTransform(r, o);
}, qt = "transform", vn = qt + "Origin", mv = function a(t, e) {
  var n = this, i = this.target, r = i.style;
  if (t in Wn) {
    if (this.tfm = this.tfm || {}, t !== "transform")
      t = En[t] || t, ~t.indexOf(",") ? t.split(",").forEach(function(o) {
        return n.tfm[o] = kn(i, o);
      }) : this.tfm[t] = i._gsap.x ? i._gsap[t] : kn(i, t);
    else
      return En.transform.split(",").forEach(function(o) {
        return a.call(n, o, e);
      });
    if (this.props.indexOf(qt) >= 0)
      return;
    i._gsap.svg && (this.svgo = i.getAttribute("data-svg-origin"), this.props.push(vn, e, "")), t = qt;
  }
  (r || e) && this.props.push(t, e, r[t]);
}, fu = function(t) {
  t.translate && (t.removeProperty("translate"), t.removeProperty("scale"), t.removeProperty("rotate"));
}, gv = function() {
  var t = this.props, e = this.target, n = e.style, i = e._gsap, r, o;
  for (r = 0; r < t.length; r += 3)
    t[r + 1] ? e[t[r]] = t[r + 2] : t[r + 2] ? n[t[r]] = t[r + 2] : n.removeProperty(t[r].substr(0, 2) === "--" ? t[r] : t[r].replace(Ko, "-$1").toLowerCase());
  if (this.tfm) {
    for (o in this.tfm)
      i[o] = this.tfm[o];
    i.svg && (i.renderTransform(), e.setAttribute("data-svg-origin", this.svgo || "")), r = Zo(), (!r || !r.isStart) && !n[qt] && (fu(n), i.uncache = 1);
  }
}, pu = function(t, e) {
  var n = {
    target: t,
    props: [],
    revert: gv,
    save: mv
  };
  return t._gsap || ke.core.getCache(t), e && e.split(",").forEach(function(i) {
    return n.save(i);
  }), n;
}, mu, Eo = function(t, e) {
  var n = Zn.createElementNS ? Zn.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : Zn.createElement(t);
  return n.style ? n : Zn.createElement(t);
}, Cn = function a(t, e, n) {
  var i = getComputedStyle(t);
  return i[e] || i.getPropertyValue(e.replace(Ko, "-$1").toLowerCase()) || i.getPropertyValue(e) || !n && a(t, Tr(e) || e, 1) || "";
}, Lc = "O,Moz,ms,Ms,Webkit".split(","), Tr = function(t, e, n) {
  var i = e || Mi, r = i.style, o = 5;
  if (t in r && !n)
    return t;
  for (t = t.charAt(0).toUpperCase() + t.substr(1); o-- && !(Lc[o] + t in r); )
    ;
  return o < 0 ? null : (o === 3 ? "ms" : o >= 0 ? Lc[o] : "") + t;
}, Ao = function() {
  iv() && window.document && (Ac = window, Zn = Ac.document, fr = Zn.documentElement, Mi = Eo("div") || {
    style: {}
  }, Eo("div"), qt = Tr(qt), vn = qt + "Origin", Mi.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", mu = !!Tr("perspective"), Zo = ke.core.reverting, jo = 1);
}, Za = function a(t) {
  var e = Eo("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), n = this.parentNode, i = this.nextSibling, r = this.style.cssText, o;
  if (fr.appendChild(e), e.appendChild(this), this.style.display = "block", t)
    try {
      o = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = a;
    } catch {
    }
  else
    this._gsapBBox && (o = this._gsapBBox());
  return n && (i ? n.insertBefore(this, i) : n.appendChild(this)), fr.removeChild(e), this.style.cssText = r, o;
}, Dc = function(t, e) {
  for (var n = e.length; n--; )
    if (t.hasAttribute(e[n]))
      return t.getAttribute(e[n]);
}, gu = function(t) {
  var e;
  try {
    e = t.getBBox();
  } catch {
    e = Za.call(t, !0);
  }
  return e && (e.width || e.height) || t.getBBox === Za || (e = Za.call(t, !0)), e && !e.width && !e.x && !e.y ? {
    x: +Dc(t, ["x", "cx", "x1"]) || 0,
    y: +Dc(t, ["y", "cy", "y1"]) || 0,
    width: 0,
    height: 0
  } : e;
}, _u = function(t) {
  return !!(t.getCTM && (!t.parentNode || t.ownerSVGElement) && gu(t));
}, rs = function(t, e) {
  if (e) {
    var n = t.style;
    e in Wn && e !== vn && (e = qt), n.removeProperty ? ((e.substr(0, 2) === "ms" || e.substr(0, 6) === "webkit") && (e = "-" + e), n.removeProperty(e.replace(Ko, "-$1").toLowerCase())) : n.removeAttribute(e);
  }
}, Kn = function(t, e, n, i, r, o) {
  var s = new Ue(t._pt, e, n, 0, 1, o ? du : uu);
  return t._pt = s, s.b = i, s.e = r, t._props.push(n), s;
}, Rc = {
  deg: 1,
  rad: 1,
  turn: 1
}, _v = {
  grid: 1,
  flex: 1
}, ii = function a(t, e, n, i) {
  var r = parseFloat(n) || 0, o = (n + "").trim().substr((r + "").length) || "px", s = Mi.style, l = rv.test(e), c = t.tagName.toLowerCase() === "svg", h = (c ? "client" : "offset") + (l ? "Width" : "Height"), u = 100, d = i === "px", m = i === "%", g, f, p, _;
  return i === o || !r || Rc[i] || Rc[o] ? r : (o !== "px" && !d && (r = a(t, e, n, "px")), _ = t.getCTM && _u(t), (m || o === "%") && (Wn[e] || ~e.indexOf("adius")) ? (g = _ ? t.getBBox()[l ? "width" : "height"] : t[h], jt(m ? r / g * u : r / 100 * g)) : (s[l ? "width" : "height"] = u + (d ? o : i), f = ~e.indexOf("adius") || i === "em" && t.appendChild && !c ? t : t.parentNode, _ && (f = (t.ownerSVGElement || {}).parentNode), (!f || f === Zn || !f.appendChild) && (f = Zn.body), p = f._gsap, p && m && p.width && l && p.time === qe.time && !p.uncache ? jt(r / p.width * u) : ((m || o === "%") && !_v[Cn(f, "display")] && (s.position = Cn(t, "position")), f === t && (s.position = "static"), f.appendChild(Mi), g = Mi[h], f.removeChild(Mi), s.position = "absolute", l && m && (p = Ti(f), p.time = qe.time, p.width = f[h]), jt(d ? g * r / u : g && r ? u / g * r : 0))));
}, kn = function(t, e, n, i) {
  var r;
  return jo || Ao(), e in En && e !== "transform" && (e = En[e], ~e.indexOf(",") && (e = e.split(",")[0])), Wn[e] && e !== "transform" ? (r = as(t, i), r = e !== "transformOrigin" ? r[e] : r.svg ? r.origin : Qs(Cn(t, vn)) + " " + r.zOrigin + "px") : (r = t.style[e], (!r || r === "auto" || i || ~(r + "").indexOf("calc(")) && (r = Js[e] && Js[e](t, e, n) || Cn(t, e) || Ih(t, e) || (e === "opacity" ? 1 : 0))), n && !~(r + "").trim().indexOf(" ") ? ii(t, e, r, n) + n : r;
}, vv = function(t, e, n, i) {
  if (!n || n === "none") {
    var r = Tr(e, t, 1), o = r && Cn(t, r, 1);
    o && o !== n ? (e = r, n = o) : e === "borderColor" && (n = Cn(t, "borderTopColor"));
  }
  var s = new Ue(this._pt, t.style, e, 0, 1, lu), l = 0, c = 0, h, u, d, m, g, f, p, _, b, x, y, M;
  if (s.b = n, s.e = i, n += "", i += "", i === "auto" && (t.style[e] = i, i = Cn(t, e) || i, t.style[e] = n), h = [n, i], Jh(h), n = h[0], i = h[1], d = n.match(lr) || [], M = i.match(lr) || [], M.length) {
    for (; u = lr.exec(i); )
      p = u[0], b = i.substring(l, u.index), g ? g = (g + 1) % 5 : (b.substr(-5) === "rgba(" || b.substr(-5) === "hsla(") && (g = 1), p !== (f = d[c++] || "") && (m = parseFloat(f) || 0, y = f.substr((m + "").length), p.charAt(1) === "=" && (p = dr(m, p) + y), _ = parseFloat(p), x = p.substr((_ + "").length), l = lr.lastIndex - x.length, x || (x = x || je.units[e] || y, l === i.length && (i += x, s.e += x)), y !== x && (m = ii(t, e, f, x) || 0), s._pt = {
        _next: s._pt,
        p: b || c === 1 ? b : ",",
        //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
        s: m,
        c: _ - m,
        m: g && g < 4 || e === "zIndex" ? Math.round : 0
      });
    s.c = l < i.length ? i.substring(l, i.length) : "";
  } else
    s.r = e === "display" && i === "none" ? du : uu;
  return Ah.test(i) && (s.e = 0), this._pt = s, s;
}, Ic = {
  top: "0%",
  bottom: "100%",
  left: "0%",
  right: "100%",
  center: "50%"
}, xv = function(t) {
  var e = t.split(" "), n = e[0], i = e[1] || "50%";
  return (n === "top" || n === "bottom" || i === "left" || i === "right") && (t = n, n = i, i = t), e[0] = Ic[n] || n, e[1] = Ic[i] || i, e.join(" ");
}, yv = function(t, e) {
  if (e.tween && e.tween._time === e.tween._dur) {
    var n = e.t, i = n.style, r = e.u, o = n._gsap, s, l, c;
    if (r === "all" || r === !0)
      i.cssText = "", l = 1;
    else
      for (r = r.split(","), c = r.length; --c > -1; )
        s = r[c], Wn[s] && (l = 1, s = s === "transformOrigin" ? vn : qt), rs(n, s);
    l && (rs(n, qt), o && (o.svg && n.removeAttribute("transform"), as(n, 1), o.uncache = 1, fu(i)));
  }
}, Js = {
  clearProps: function(t, e, n, i, r) {
    if (r.data !== "isFromStart") {
      var o = t._pt = new Ue(t._pt, e, n, 0, 0, yv);
      return o.u = i, o.pr = -10, o.tween = r, t._props.push(n), 1;
    }
  }
  /* className feature (about 0.4kb gzipped).
  , className(plugin, target, property, endValue, tween) {
  	let _renderClassName = (ratio, data) => {
  			data.css.render(ratio, data.css);
  			if (!ratio || ratio === 1) {
  				let inline = data.rmv,
  					target = data.t,
  					p;
  				target.setAttribute("class", ratio ? data.e : data.b);
  				for (p in inline) {
  					_removeProperty(target, p);
  				}
  			}
  		},
  		_getAllStyles = (target) => {
  			let styles = {},
  				computed = getComputedStyle(target),
  				p;
  			for (p in computed) {
  				if (isNaN(p) && p !== "cssText" && p !== "length") {
  					styles[p] = computed[p];
  				}
  			}
  			_setDefaults(styles, _parseTransform(target, 1));
  			return styles;
  		},
  		startClassList = target.getAttribute("class"),
  		style = target.style,
  		cssText = style.cssText,
  		cache = target._gsap,
  		classPT = cache.classPT,
  		inlineToRemoveAtEnd = {},
  		data = {t:target, plugin:plugin, rmv:inlineToRemoveAtEnd, b:startClassList, e:(endValue.charAt(1) !== "=") ? endValue : startClassList.replace(new RegExp("(?:\\s|^)" + endValue.substr(2) + "(?![\\w-])"), "") + ((endValue.charAt(0) === "+") ? " " + endValue.substr(2) : "")},
  		changingVars = {},
  		startVars = _getAllStyles(target),
  		transformRelated = /(transform|perspective)/i,
  		endVars, p;
  	if (classPT) {
  		classPT.r(1, classPT.d);
  		_removeLinkedListItem(classPT.d.plugin, classPT, "_pt");
  	}
  	target.setAttribute("class", data.e);
  	endVars = _getAllStyles(target, true);
  	target.setAttribute("class", startClassList);
  	for (p in endVars) {
  		if (endVars[p] !== startVars[p] && !transformRelated.test(p)) {
  			changingVars[p] = endVars[p];
  			if (!style[p] && style[p] !== "0") {
  				inlineToRemoveAtEnd[p] = 1;
  			}
  		}
  	}
  	cache.classPT = plugin._pt = new PropTween(plugin._pt, target, "className", 0, 0, _renderClassName, data, 0, -11);
  	if (style.cssText !== cssText) { //only apply if things change. Otherwise, in cases like a background-image that's pulled dynamically, it could cause a refresh. See https://greensock.com/forums/topic/20368-possible-gsap-bug-switching-classnames-in-chrome/.
  		style.cssText = cssText; //we recorded cssText before we swapped classes and ran _getAllStyles() because in cases when a className tween is overwritten, we remove all the related tweening properties from that class change (otherwise class-specific stuff can't override properties we've directly set on the target's style object due to specificity).
  	}
  	_parseTransform(target, true); //to clear the caching of transforms
  	data.css = new gsap.plugins.css();
  	data.css.init(target, changingVars, tween);
  	plugin._props.push(...data.css._props);
  	return 1;
  }
  */
}, ss = [1, 0, 0, 1, 0, 0], vu = {}, xu = function(t) {
  return t === "matrix(1, 0, 0, 1, 0, 0)" || t === "none" || !t;
}, Oc = function(t) {
  var e = Cn(t, qt);
  return xu(e) ? ss : e.substr(7).match(Eh).map(jt);
}, Jo = function(t, e) {
  var n = t._gsap || Ti(t), i = t.style, r = Oc(t), o, s, l, c;
  return n.svg && t.getAttribute("transform") ? (l = t.transform.baseVal.consolidate().matrix, r = [l.a, l.b, l.c, l.d, l.e, l.f], r.join(",") === "1,0,0,1,0,0" ? ss : r) : (r === ss && !t.offsetParent && t !== fr && !n.svg && (l = i.display, i.display = "block", o = t.parentNode, (!o || !t.offsetParent) && (c = 1, s = t.nextElementSibling, fr.appendChild(t)), r = Oc(t), l ? i.display = l : rs(t, "display"), c && (s ? o.insertBefore(t, s) : o ? o.appendChild(t) : fr.removeChild(t))), e && r.length > 6 ? [r[0], r[1], r[4], r[5], r[12], r[13]] : r);
}, Co = function(t, e, n, i, r, o) {
  var s = t._gsap, l = r || Jo(t, !0), c = s.xOrigin || 0, h = s.yOrigin || 0, u = s.xOffset || 0, d = s.yOffset || 0, m = l[0], g = l[1], f = l[2], p = l[3], _ = l[4], b = l[5], x = e.split(" "), y = parseFloat(x[0]) || 0, M = parseFloat(x[1]) || 0, A, P, v, w;
  n ? l !== ss && (P = m * p - g * f) && (v = y * (p / P) + M * (-f / P) + (f * b - p * _) / P, w = y * (-g / P) + M * (m / P) - (m * b - g * _) / P, y = v, M = w) : (A = gu(t), y = A.x + (~x[0].indexOf("%") ? y / 100 * A.width : y), M = A.y + (~(x[1] || x[0]).indexOf("%") ? M / 100 * A.height : M)), i || i !== !1 && s.smooth ? (_ = y - c, b = M - h, s.xOffset = u + (_ * m + b * f) - _, s.yOffset = d + (_ * g + b * p) - b) : s.xOffset = s.yOffset = 0, s.xOrigin = y, s.yOrigin = M, s.smooth = !!i, s.origin = e, s.originIsAbsolute = !!n, t.style[vn] = "0px 0px", o && (Kn(o, s, "xOrigin", c, y), Kn(o, s, "yOrigin", h, M), Kn(o, s, "xOffset", u, s.xOffset), Kn(o, s, "yOffset", d, s.yOffset)), t.setAttribute("data-svg-origin", y + " " + M);
}, as = function(t, e) {
  var n = t._gsap || new nu(t);
  if ("x" in n && !e && !n.uncache)
    return n;
  var i = t.style, r = n.scaleX < 0, o = "px", s = "deg", l = getComputedStyle(t), c = Cn(t, vn) || "0", h, u, d, m, g, f, p, _, b, x, y, M, A, P, v, w, L, U, j, O, I, k, $, Z, G, Q, K, V, B, at, J, st;
  return h = u = d = f = p = _ = b = x = y = 0, m = g = 1, n.svg = !!(t.getCTM && _u(t)), l.translate && ((l.translate !== "none" || l.scale !== "none" || l.rotate !== "none") && (i[qt] = (l.translate !== "none" ? "translate3d(" + (l.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (l.rotate !== "none" ? "rotate(" + l.rotate + ") " : "") + (l.scale !== "none" ? "scale(" + l.scale.split(" ").join(",") + ") " : "") + (l[qt] !== "none" ? l[qt] : "")), i.scale = i.rotate = i.translate = "none"), P = Jo(t, n.svg), n.svg && (n.uncache ? (G = t.getBBox(), c = n.xOrigin - G.x + "px " + (n.yOrigin - G.y) + "px", Z = "") : Z = !e && t.getAttribute("data-svg-origin"), Co(t, Z || c, !!Z || n.originIsAbsolute, n.smooth !== !1, P)), M = n.xOrigin || 0, A = n.yOrigin || 0, P !== ss && (U = P[0], j = P[1], O = P[2], I = P[3], h = k = P[4], u = $ = P[5], P.length === 6 ? (m = Math.sqrt(U * U + j * j), g = Math.sqrt(I * I + O * O), f = U || j ? rr(j, U) * vi : 0, b = O || I ? rr(O, I) * vi + f : 0, b && (g *= Math.abs(Math.cos(b * pr))), n.svg && (h -= M - (M * U + A * O), u -= A - (M * j + A * I))) : (st = P[6], at = P[7], K = P[8], V = P[9], B = P[10], J = P[11], h = P[12], u = P[13], d = P[14], v = rr(st, B), p = v * vi, v && (w = Math.cos(-v), L = Math.sin(-v), Z = k * w + K * L, G = $ * w + V * L, Q = st * w + B * L, K = k * -L + K * w, V = $ * -L + V * w, B = st * -L + B * w, J = at * -L + J * w, k = Z, $ = G, st = Q), v = rr(-O, B), _ = v * vi, v && (w = Math.cos(-v), L = Math.sin(-v), Z = U * w - K * L, G = j * w - V * L, Q = O * w - B * L, J = I * L + J * w, U = Z, j = G, O = Q), v = rr(j, U), f = v * vi, v && (w = Math.cos(v), L = Math.sin(v), Z = U * w + j * L, G = k * w + $ * L, j = j * w - U * L, $ = $ * w - k * L, U = Z, k = G), p && Math.abs(p) + Math.abs(f) > 359.9 && (p = f = 0, _ = 180 - _), m = jt(Math.sqrt(U * U + j * j + O * O)), g = jt(Math.sqrt($ * $ + st * st)), v = rr(k, $), b = Math.abs(v) > 2e-4 ? v * vi : 0, y = J ? 1 / (J < 0 ? -J : J) : 0), n.svg && (Z = t.getAttribute("transform"), n.forceCSS = t.setAttribute("transform", "") || !xu(Cn(t, qt)), Z && t.setAttribute("transform", Z))), Math.abs(b) > 90 && Math.abs(b) < 270 && (r ? (m *= -1, b += f <= 0 ? 180 : -180, f += f <= 0 ? 180 : -180) : (g *= -1, b += b <= 0 ? 180 : -180)), e = e || n.uncache, n.x = h - ((n.xPercent = h && (!e && n.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-h) ? -50 : 0))) ? t.offsetWidth * n.xPercent / 100 : 0) + o, n.y = u - ((n.yPercent = u && (!e && n.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-u) ? -50 : 0))) ? t.offsetHeight * n.yPercent / 100 : 0) + o, n.z = d + o, n.scaleX = jt(m), n.scaleY = jt(g), n.rotation = jt(f) + s, n.rotationX = jt(p) + s, n.rotationY = jt(_) + s, n.skewX = b + s, n.skewY = x + s, n.transformPerspective = y + o, (n.zOrigin = parseFloat(c.split(" ")[2]) || 0) && (i[vn] = Qs(c)), n.xOffset = n.yOffset = 0, n.force3D = je.force3D, n.renderTransform = n.svg ? Mv : mu ? yu : bv, n.uncache = 0, n;
}, Qs = function(t) {
  return (t = t.split(" "))[0] + " " + t[1];
}, Ka = function(t, e, n) {
  var i = Se(e);
  return jt(parseFloat(e) + parseFloat(ii(t, "x", n + "px", i))) + i;
}, bv = function(t, e) {
  e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, yu(t, e);
}, pi = "0deg", kr = "0px", mi = ") ", yu = function(t, e) {
  var n = e || this, i = n.xPercent, r = n.yPercent, o = n.x, s = n.y, l = n.z, c = n.rotation, h = n.rotationY, u = n.rotationX, d = n.skewX, m = n.skewY, g = n.scaleX, f = n.scaleY, p = n.transformPerspective, _ = n.force3D, b = n.target, x = n.zOrigin, y = "", M = _ === "auto" && t && t !== 1 || _ === !0;
  if (x && (u !== pi || h !== pi)) {
    var A = parseFloat(h) * pr, P = Math.sin(A), v = Math.cos(A), w;
    A = parseFloat(u) * pr, w = Math.cos(A), o = Ka(b, o, P * w * -x), s = Ka(b, s, -Math.sin(A) * -x), l = Ka(b, l, v * w * -x + x);
  }
  p !== kr && (y += "perspective(" + p + mi), (i || r) && (y += "translate(" + i + "%, " + r + "%) "), (M || o !== kr || s !== kr || l !== kr) && (y += l !== kr || M ? "translate3d(" + o + ", " + s + ", " + l + ") " : "translate(" + o + ", " + s + mi), c !== pi && (y += "rotate(" + c + mi), h !== pi && (y += "rotateY(" + h + mi), u !== pi && (y += "rotateX(" + u + mi), (d !== pi || m !== pi) && (y += "skew(" + d + ", " + m + mi), (g !== 1 || f !== 1) && (y += "scale(" + g + ", " + f + mi), b.style[qt] = y || "translate(0, 0)";
}, Mv = function(t, e) {
  var n = e || this, i = n.xPercent, r = n.yPercent, o = n.x, s = n.y, l = n.rotation, c = n.skewX, h = n.skewY, u = n.scaleX, d = n.scaleY, m = n.target, g = n.xOrigin, f = n.yOrigin, p = n.xOffset, _ = n.yOffset, b = n.forceCSS, x = parseFloat(o), y = parseFloat(s), M, A, P, v, w;
  l = parseFloat(l), c = parseFloat(c), h = parseFloat(h), h && (h = parseFloat(h), c += h, l += h), l || c ? (l *= pr, c *= pr, M = Math.cos(l) * u, A = Math.sin(l) * u, P = Math.sin(l - c) * -d, v = Math.cos(l - c) * d, c && (h *= pr, w = Math.tan(c - h), w = Math.sqrt(1 + w * w), P *= w, v *= w, h && (w = Math.tan(h), w = Math.sqrt(1 + w * w), M *= w, A *= w)), M = jt(M), A = jt(A), P = jt(P), v = jt(v)) : (M = u, v = d, A = P = 0), (x && !~(o + "").indexOf("px") || y && !~(s + "").indexOf("px")) && (x = ii(m, "x", o, "px"), y = ii(m, "y", s, "px")), (g || f || p || _) && (x = jt(x + g - (g * M + f * P) + p), y = jt(y + f - (g * A + f * v) + _)), (i || r) && (w = m.getBBox(), x = jt(x + i / 100 * w.width), y = jt(y + r / 100 * w.height)), w = "matrix(" + M + "," + A + "," + P + "," + v + "," + x + "," + y + ")", m.setAttribute("transform", w), b && (m.style[qt] = w);
}, Sv = function(t, e, n, i, r) {
  var o = 360, s = pe(r), l = parseFloat(r) * (s && ~r.indexOf("rad") ? vi : 1), c = l - i, h = i + c + "deg", u, d;
  return s && (u = r.split("_")[1], u === "short" && (c %= o, c !== c % (o / 2) && (c += c < 0 ? o : -o)), u === "cw" && c < 0 ? c = (c + o * Pc) % o - ~~(c / o) * o : u === "ccw" && c > 0 && (c = (c - o * Pc) % o - ~~(c / o) * o)), t._pt = d = new Ue(t._pt, e, n, i, c, av), d.e = h, d.u = "deg", t._props.push(n), d;
}, zc = function(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}, wv = function(t, e, n) {
  var i = zc({}, n._gsap), r = "perspective,force3D,transformOrigin,svgOrigin", o = n.style, s, l, c, h, u, d, m, g;
  i.svg ? (c = n.getAttribute("transform"), n.setAttribute("transform", ""), o[qt] = e, s = as(n, 1), rs(n, qt), n.setAttribute("transform", c)) : (c = getComputedStyle(n)[qt], o[qt] = e, s = as(n, 1), o[qt] = c);
  for (l in Wn)
    c = i[l], h = s[l], c !== h && r.indexOf(l) < 0 && (m = Se(c), g = Se(h), u = m !== g ? ii(n, l, c, g) : parseFloat(c), d = parseFloat(h), t._pt = new Ue(t._pt, s, l, u, d - u, To), t._pt.u = g || 0, t._props.push(l));
  zc(s, i);
};
Ne("padding,margin,Width,Radius", function(a, t) {
  var e = "Top", n = "Right", i = "Bottom", r = "Left", o = (t < 3 ? [e, n, i, r] : [e + r, e + n, i + n, i + r]).map(function(s) {
    return t < 2 ? a + s : "border" + s + a;
  });
  Js[t > 1 ? "border" + a : a] = function(s, l, c, h, u) {
    var d, m;
    if (arguments.length < 4)
      return d = o.map(function(g) {
        return kn(s, g, c);
      }), m = d.join(" "), m.split(d[0]).length === 5 ? d[0] : m;
    d = (h + "").split(" "), m = {}, o.forEach(function(g, f) {
      return m[g] = d[f] = d[f] || d[(f - 1) / 2 | 0];
    }), s.init(l, m, u);
  };
});
var bu = {
  name: "css",
  register: Ao,
  targetTest: function(t) {
    return t.style && t.nodeType;
  },
  init: function(t, e, n, i, r) {
    var o = this._props, s = t.style, l = n.vars.startAt, c, h, u, d, m, g, f, p, _, b, x, y, M, A, P, v;
    jo || Ao(), this.styles = this.styles || pu(t), v = this.styles.props, this.tween = n;
    for (f in e)
      if (f !== "autoRound" && (h = e[f], !(We[f] && iu(f, e, n, i, t, r)))) {
        if (m = typeof h, g = Js[f], m === "function" && (h = h.call(n, i, t, r), m = typeof h), m === "string" && ~h.indexOf("random(") && (h = ns(h)), g)
          g(this, t, f, h, n) && (P = 1);
        else if (f.substr(0, 2) === "--")
          c = (getComputedStyle(t).getPropertyValue(f) + "").trim(), h += "", ti.lastIndex = 0, ti.test(c) || (p = Se(c), _ = Se(h)), _ ? p !== _ && (c = ii(t, f, c, _) + _) : p && (h += p), this.add(s, "setProperty", c, h, i, r, 0, 0, f), o.push(f), v.push(f, 0, s[f]);
        else if (m !== "undefined") {
          if (l && f in l ? (c = typeof l[f] == "function" ? l[f].call(n, i, t, r) : l[f], pe(c) && ~c.indexOf("random(") && (c = ns(c)), Se(c + "") || (c += je.units[f] || Se(kn(t, f)) || ""), (c + "").charAt(1) === "=" && (c = kn(t, f))) : c = kn(t, f), d = parseFloat(c), b = m === "string" && h.charAt(1) === "=" && h.substr(0, 2), b && (h = h.substr(2)), u = parseFloat(h), f in En && (f === "autoAlpha" && (d === 1 && kn(t, "visibility") === "hidden" && u && (d = 0), v.push("visibility", 0, s.visibility), Kn(this, s, "visibility", d ? "inherit" : "hidden", u ? "inherit" : "hidden", !u)), f !== "scale" && f !== "transform" && (f = En[f], ~f.indexOf(",") && (f = f.split(",")[0]))), x = f in Wn, x) {
            if (this.styles.save(f), y || (M = t._gsap, M.renderTransform && !e.parseTransform || as(t, e.parseTransform), A = e.smoothOrigin !== !1 && M.smooth, y = this._pt = new Ue(this._pt, s, qt, 0, 1, M.renderTransform, M, 0, -1), y.dep = 1), f === "scale")
              this._pt = new Ue(this._pt, M, "scaleY", M.scaleY, (b ? dr(M.scaleY, b + u) : u) - M.scaleY || 0, To), this._pt.u = 0, o.push("scaleY", f), f += "X";
            else if (f === "transformOrigin") {
              v.push(vn, 0, s[vn]), h = xv(h), M.svg ? Co(t, h, 0, A, 0, this) : (_ = parseFloat(h.split(" ")[2]) || 0, _ !== M.zOrigin && Kn(this, M, "zOrigin", M.zOrigin, _), Kn(this, s, f, Qs(c), Qs(h)));
              continue;
            } else if (f === "svgOrigin") {
              Co(t, h, 1, A, 0, this);
              continue;
            } else if (f in vu) {
              Sv(this, M, f, d, b ? dr(d, b + h) : h);
              continue;
            } else if (f === "smoothOrigin") {
              Kn(this, M, "smooth", M.smooth, h);
              continue;
            } else if (f === "force3D") {
              M[f] = h;
              continue;
            } else if (f === "transform") {
              wv(this, h, t);
              continue;
            }
          } else
            f in s || (f = Tr(f) || f);
          if (x || (u || u === 0) && (d || d === 0) && !sv.test(h) && f in s)
            p = (c + "").substr((d + "").length), u || (u = 0), _ = Se(h) || (f in je.units ? je.units[f] : p), p !== _ && (d = ii(t, f, c, _)), this._pt = new Ue(this._pt, x ? M : s, f, d, (b ? dr(d, b + u) : u) - d, !x && (_ === "px" || f === "zIndex") && e.autoRound !== !1 ? lv : To), this._pt.u = _ || 0, p !== _ && _ !== "%" && (this._pt.b = c, this._pt.r = ov);
          else if (f in s)
            vv.call(this, t, f, c, b ? b + h : h);
          else if (f in t)
            this.add(t, f, c || t[f], b ? b + h : h, i, r);
          else if (f !== "parseTransform") {
            Bo(f, h);
            continue;
          }
          x || (f in s ? v.push(f, 0, s[f]) : v.push(f, 1, c || t[f])), o.push(f);
        }
      }
    P && cu(this);
  },
  render: function(t, e) {
    if (e.tween._time || !Zo())
      for (var n = e._pt; n; )
        n.r(t, n.d), n = n._next;
    else
      e.styles.revert();
  },
  get: kn,
  aliases: En,
  getSetter: function(t, e, n) {
    var i = En[e];
    return i && i.indexOf(",") < 0 && (e = i), e in Wn && e !== vn && (t._gsap.x || kn(t, "x")) ? n && Cc === n ? e === "scale" ? dv : uv : (Cc = n || {}) && (e === "scale" ? fv : pv) : t.style && !No(t.style[e]) ? cv : ~e.indexOf("-") ? hv : Yo(t, e);
  },
  core: {
    _removeProperty: rs,
    _getMatrix: Jo
  }
};
ke.utils.checkPrefix = Tr;
ke.core.getStyleSaver = pu;
(function(a, t, e, n) {
  var i = Ne(a + "," + t + "," + e, function(r) {
    Wn[r] = 1;
  });
  Ne(t, function(r) {
    je.units[r] = "deg", vu[r] = 1;
  }), En[i[13]] = a + "," + t, Ne(n, function(r) {
    var o = r.split(":");
    En[o[1]] = i[o[0]];
  });
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
Ne("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(a) {
  je.units[a] = "px";
});
ke.registerPlugin(bu);
var de = ke.registerPlugin(bu) || ke;
de.core.Tween;
const Fc = { type: "change" }, Ja = { type: "start" }, Nc = { type: "end" };
class Tv extends Fi {
  constructor(t, e) {
    super(), this.object = t, this.domElement = e, this.domElement.style.touchAction = "none", this.enabled = !0, this.target = new R(), this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = !1, this.dampingFactor = 0.05, this.enableZoom = !0, this.zoomSpeed = 1, this.enableRotate = !0, this.rotateSpeed = 1, this.enablePan = !0, this.panSpeed = 1, this.screenSpacePanning = !0, this.keyPanSpeed = 7, this.autoRotate = !1, this.autoRotateSpeed = 2, this.keys = { LEFT: "ArrowLeft", UP: "ArrowUp", RIGHT: "ArrowRight", BOTTOM: "ArrowDown" }, this.mouseButtons = { LEFT: Ui.ROTATE, MIDDLE: Ui.DOLLY, RIGHT: Ui.PAN }, this.touches = { ONE: ki.ROTATE, TWO: ki.DOLLY_PAN }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this._domElementKeyEvents = null, this.getPolarAngle = function() {
      return s.phi;
    }, this.getAzimuthalAngle = function() {
      return s.theta;
    }, this.getDistance = function() {
      return this.object.position.distanceTo(this.target);
    }, this.listenToKeyEvents = function(C) {
      C.addEventListener("keydown", De), this._domElementKeyEvents = C;
    }, this.saveState = function() {
      n.target0.copy(n.target), n.position0.copy(n.object.position), n.zoom0 = n.object.zoom;
    }, this.reset = function() {
      n.target.copy(n.target0), n.object.position.copy(n.position0), n.object.zoom = n.zoom0, n.object.updateProjectionMatrix(), n.dispatchEvent(Fc), n.update(), r = i.NONE;
    }, this.update = function() {
      const C = new R(), z = new Ii().setFromUnitVectors(t.up, new R(0, 1, 0)), ct = z.clone().invert(), ut = new R(), lt = new Ii(), mt = 2 * Math.PI;
      return function() {
        const Ct = n.object.position;
        C.copy(Ct).sub(n.target), C.applyQuaternion(z), s.setFromVector3(C), n.autoRotate && r === i.NONE && w(P()), n.enableDamping ? (s.theta += l.theta * n.dampingFactor, s.phi += l.phi * n.dampingFactor) : (s.theta += l.theta, s.phi += l.phi);
        let Lt = n.minAzimuthAngle, kt = n.maxAzimuthAngle;
        return isFinite(Lt) && isFinite(kt) && (Lt < -Math.PI ? Lt += mt : Lt > Math.PI && (Lt -= mt), kt < -Math.PI ? kt += mt : kt > Math.PI && (kt -= mt), Lt <= kt ? s.theta = Math.max(Lt, Math.min(kt, s.theta)) : s.theta = s.theta > (Lt + kt) / 2 ? Math.max(Lt, s.theta) : Math.min(kt, s.theta)), s.phi = Math.max(n.minPolarAngle, Math.min(n.maxPolarAngle, s.phi)), s.makeSafe(), s.radius *= c, s.radius = Math.max(n.minDistance, Math.min(n.maxDistance, s.radius)), n.enableDamping === !0 ? n.target.addScaledVector(h, n.dampingFactor) : n.target.add(h), C.setFromSpherical(s), C.applyQuaternion(ct), Ct.copy(n.target).add(C), n.object.lookAt(n.target), n.enableDamping === !0 ? (l.theta *= 1 - n.dampingFactor, l.phi *= 1 - n.dampingFactor, h.multiplyScalar(1 - n.dampingFactor)) : (l.set(0, 0, 0), h.set(0, 0, 0)), c = 1, u || ut.distanceToSquared(n.object.position) > o || 8 * (1 - lt.dot(n.object.quaternion)) > o ? (n.dispatchEvent(Fc), ut.copy(n.object.position), lt.copy(n.object.quaternion), u = !1, !0) : !1;
      };
    }(), this.dispose = function() {
      n.domElement.removeEventListener("contextmenu", H), n.domElement.removeEventListener("pointerdown", le), n.domElement.removeEventListener("pointercancel", Ee), n.domElement.removeEventListener("wheel", Ke), n.domElement.removeEventListener("pointermove", ne), n.domElement.removeEventListener("pointerup", ie), n._domElementKeyEvents !== null && n._domElementKeyEvents.removeEventListener("keydown", De);
    };
    const n = this, i = {
      NONE: -1,
      ROTATE: 0,
      DOLLY: 1,
      PAN: 2,
      TOUCH_ROTATE: 3,
      TOUCH_PAN: 4,
      TOUCH_DOLLY_PAN: 5,
      TOUCH_DOLLY_ROTATE: 6
    };
    let r = i.NONE;
    const o = 1e-6, s = new _c(), l = new _c();
    let c = 1;
    const h = new R();
    let u = !1;
    const d = new vt(), m = new vt(), g = new vt(), f = new vt(), p = new vt(), _ = new vt(), b = new vt(), x = new vt(), y = new vt(), M = [], A = {};
    function P() {
      return 2 * Math.PI / 60 / 60 * n.autoRotateSpeed;
    }
    function v() {
      return Math.pow(0.95, n.zoomSpeed);
    }
    function w(C) {
      l.theta -= C;
    }
    function L(C) {
      l.phi -= C;
    }
    const U = function() {
      const C = new R();
      return function(ct, ut) {
        C.setFromMatrixColumn(ut, 0), C.multiplyScalar(-ct), h.add(C);
      };
    }(), j = function() {
      const C = new R();
      return function(ct, ut) {
        n.screenSpacePanning === !0 ? C.setFromMatrixColumn(ut, 1) : (C.setFromMatrixColumn(ut, 0), C.crossVectors(n.object.up, C)), C.multiplyScalar(ct), h.add(C);
      };
    }(), O = function() {
      const C = new R();
      return function(ct, ut) {
        const lt = n.domElement;
        if (n.object.isPerspectiveCamera) {
          const mt = n.object.position;
          C.copy(mt).sub(n.target);
          let pt = C.length();
          pt *= Math.tan(n.object.fov / 2 * Math.PI / 180), U(2 * ct * pt / lt.clientHeight, n.object.matrix), j(2 * ut * pt / lt.clientHeight, n.object.matrix);
        } else
          n.object.isOrthographicCamera ? (U(ct * (n.object.right - n.object.left) / n.object.zoom / lt.clientWidth, n.object.matrix), j(ut * (n.object.top - n.object.bottom) / n.object.zoom / lt.clientHeight, n.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), n.enablePan = !1);
      };
    }();
    function I(C) {
      n.object.isPerspectiveCamera ? c /= C : n.object.isOrthographicCamera ? (n.object.zoom = Math.max(n.minZoom, Math.min(n.maxZoom, n.object.zoom * C)), n.object.updateProjectionMatrix(), u = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), n.enableZoom = !1);
    }
    function k(C) {
      n.object.isPerspectiveCamera ? c *= C : n.object.isOrthographicCamera ? (n.object.zoom = Math.max(n.minZoom, Math.min(n.maxZoom, n.object.zoom / C)), n.object.updateProjectionMatrix(), u = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), n.enableZoom = !1);
    }
    function $(C) {
      d.set(C.clientX, C.clientY);
    }
    function Z(C) {
      b.set(C.clientX, C.clientY);
    }
    function G(C) {
      f.set(C.clientX, C.clientY);
    }
    function Q(C) {
      m.set(C.clientX, C.clientY), g.subVectors(m, d).multiplyScalar(n.rotateSpeed);
      const z = n.domElement;
      w(2 * Math.PI * g.x / z.clientHeight), L(2 * Math.PI * g.y / z.clientHeight), d.copy(m), n.update();
    }
    function K(C) {
      x.set(C.clientX, C.clientY), y.subVectors(x, b), y.y > 0 ? I(v()) : y.y < 0 && k(v()), b.copy(x), n.update();
    }
    function V(C) {
      p.set(C.clientX, C.clientY), _.subVectors(p, f).multiplyScalar(n.panSpeed), O(_.x, _.y), f.copy(p), n.update();
    }
    function B(C) {
      C.deltaY < 0 ? k(v()) : C.deltaY > 0 && I(v()), n.update();
    }
    function at(C) {
      let z = !1;
      switch (C.code) {
        case n.keys.UP:
          C.ctrlKey || C.metaKey || C.shiftKey ? L(2 * Math.PI * n.rotateSpeed / n.domElement.clientHeight) : O(0, n.keyPanSpeed), z = !0;
          break;
        case n.keys.BOTTOM:
          C.ctrlKey || C.metaKey || C.shiftKey ? L(-2 * Math.PI * n.rotateSpeed / n.domElement.clientHeight) : O(0, -n.keyPanSpeed), z = !0;
          break;
        case n.keys.LEFT:
          C.ctrlKey || C.metaKey || C.shiftKey ? w(2 * Math.PI * n.rotateSpeed / n.domElement.clientHeight) : O(n.keyPanSpeed, 0), z = !0;
          break;
        case n.keys.RIGHT:
          C.ctrlKey || C.metaKey || C.shiftKey ? w(-2 * Math.PI * n.rotateSpeed / n.domElement.clientHeight) : O(-n.keyPanSpeed, 0), z = !0;
          break;
      }
      z && (C.preventDefault(), n.update());
    }
    function J() {
      if (M.length === 1)
        d.set(M[0].pageX, M[0].pageY);
      else {
        const C = 0.5 * (M[0].pageX + M[1].pageX), z = 0.5 * (M[0].pageY + M[1].pageY);
        d.set(C, z);
      }
    }
    function st() {
      if (M.length === 1)
        f.set(M[0].pageX, M[0].pageY);
      else {
        const C = 0.5 * (M[0].pageX + M[1].pageX), z = 0.5 * (M[0].pageY + M[1].pageY);
        f.set(C, z);
      }
    }
    function q() {
      const C = M[0].pageX - M[1].pageX, z = M[0].pageY - M[1].pageY, ct = Math.sqrt(C * C + z * z);
      b.set(0, ct);
    }
    function At() {
      n.enableZoom && q(), n.enablePan && st();
    }
    function ft() {
      n.enableZoom && q(), n.enableRotate && J();
    }
    function xt(C) {
      if (M.length == 1)
        m.set(C.pageX, C.pageY);
      else {
        const ct = bt(C), ut = 0.5 * (C.pageX + ct.x), lt = 0.5 * (C.pageY + ct.y);
        m.set(ut, lt);
      }
      g.subVectors(m, d).multiplyScalar(n.rotateSpeed);
      const z = n.domElement;
      w(2 * Math.PI * g.x / z.clientHeight), L(2 * Math.PI * g.y / z.clientHeight), d.copy(m);
    }
    function dt(C) {
      if (M.length === 1)
        p.set(C.pageX, C.pageY);
      else {
        const z = bt(C), ct = 0.5 * (C.pageX + z.x), ut = 0.5 * (C.pageY + z.y);
        p.set(ct, ut);
      }
      _.subVectors(p, f).multiplyScalar(n.panSpeed), O(_.x, _.y), f.copy(p);
    }
    function Ft(C) {
      const z = bt(C), ct = C.pageX - z.x, ut = C.pageY - z.y, lt = Math.sqrt(ct * ct + ut * ut);
      x.set(0, lt), y.set(0, Math.pow(x.y / b.y, n.zoomSpeed)), I(y.y), b.copy(x);
    }
    function St(C) {
      n.enableZoom && Ft(C), n.enablePan && dt(C);
    }
    function yt(C) {
      n.enableZoom && Ft(C), n.enableRotate && xt(C);
    }
    function le(C) {
      n.enabled !== !1 && (M.length === 0 && (n.domElement.setPointerCapture(C.pointerId), n.domElement.addEventListener("pointermove", ne), n.domElement.addEventListener("pointerup", ie)), et(C), C.pointerType === "touch" ? E(C) : $t(C));
    }
    function ne(C) {
      n.enabled !== !1 && (C.pointerType === "touch" ? S(C) : Ut(C));
    }
    function ie(C) {
      it(C), M.length === 0 && (n.domElement.releasePointerCapture(C.pointerId), n.domElement.removeEventListener("pointermove", ne), n.domElement.removeEventListener("pointerup", ie)), n.dispatchEvent(Nc), r = i.NONE;
    }
    function Ee(C) {
      it(C);
    }
    function $t(C) {
      let z;
      switch (C.button) {
        case 0:
          z = n.mouseButtons.LEFT;
          break;
        case 1:
          z = n.mouseButtons.MIDDLE;
          break;
        case 2:
          z = n.mouseButtons.RIGHT;
          break;
        default:
          z = -1;
      }
      switch (z) {
        case Ui.DOLLY:
          if (n.enableZoom === !1)
            return;
          Z(C), r = i.DOLLY;
          break;
        case Ui.ROTATE:
          if (C.ctrlKey || C.metaKey || C.shiftKey) {
            if (n.enablePan === !1)
              return;
            G(C), r = i.PAN;
          } else {
            if (n.enableRotate === !1)
              return;
            $(C), r = i.ROTATE;
          }
          break;
        case Ui.PAN:
          if (C.ctrlKey || C.metaKey || C.shiftKey) {
            if (n.enableRotate === !1)
              return;
            $(C), r = i.ROTATE;
          } else {
            if (n.enablePan === !1)
              return;
            G(C), r = i.PAN;
          }
          break;
        default:
          r = i.NONE;
      }
      r !== i.NONE && n.dispatchEvent(Ja);
    }
    function Ut(C) {
      switch (r) {
        case i.ROTATE:
          if (n.enableRotate === !1)
            return;
          Q(C);
          break;
        case i.DOLLY:
          if (n.enableZoom === !1)
            return;
          K(C);
          break;
        case i.PAN:
          if (n.enablePan === !1)
            return;
          V(C);
          break;
      }
    }
    function Ke(C) {
      n.enabled === !1 || n.enableZoom === !1 || r !== i.NONE || (C.preventDefault(), n.dispatchEvent(Ja), B(C), n.dispatchEvent(Nc));
    }
    function De(C) {
      n.enabled === !1 || n.enablePan === !1 || at(C);
    }
    function E(C) {
      switch (ot(C), M.length) {
        case 1:
          switch (n.touches.ONE) {
            case ki.ROTATE:
              if (n.enableRotate === !1)
                return;
              J(), r = i.TOUCH_ROTATE;
              break;
            case ki.PAN:
              if (n.enablePan === !1)
                return;
              st(), r = i.TOUCH_PAN;
              break;
            default:
              r = i.NONE;
          }
          break;
        case 2:
          switch (n.touches.TWO) {
            case ki.DOLLY_PAN:
              if (n.enableZoom === !1 && n.enablePan === !1)
                return;
              At(), r = i.TOUCH_DOLLY_PAN;
              break;
            case ki.DOLLY_ROTATE:
              if (n.enableZoom === !1 && n.enableRotate === !1)
                return;
              ft(), r = i.TOUCH_DOLLY_ROTATE;
              break;
            default:
              r = i.NONE;
          }
          break;
        default:
          r = i.NONE;
      }
      r !== i.NONE && n.dispatchEvent(Ja);
    }
    function S(C) {
      switch (ot(C), r) {
        case i.TOUCH_ROTATE:
          if (n.enableRotate === !1)
            return;
          xt(C), n.update();
          break;
        case i.TOUCH_PAN:
          if (n.enablePan === !1)
            return;
          dt(C), n.update();
          break;
        case i.TOUCH_DOLLY_PAN:
          if (n.enableZoom === !1 && n.enablePan === !1)
            return;
          St(C), n.update();
          break;
        case i.TOUCH_DOLLY_ROTATE:
          if (n.enableZoom === !1 && n.enableRotate === !1)
            return;
          yt(C), n.update();
          break;
        default:
          r = i.NONE;
      }
    }
    function H(C) {
      n.enabled !== !1 && C.preventDefault();
    }
    function et(C) {
      M.push(C);
    }
    function it(C) {
      delete A[C.pointerId];
      for (let z = 0; z < M.length; z++)
        if (M[z].pointerId == C.pointerId) {
          M.splice(z, 1);
          return;
        }
    }
    function ot(C) {
      let z = A[C.pointerId];
      z === void 0 && (z = new vt(), A[C.pointerId] = z), z.set(C.pageX, C.pageY);
    }
    function bt(C) {
      const z = C.pointerId === M[0].pointerId ? M[1] : M[0];
      return A[z.pointerId];
    }
    n.domElement.addEventListener("contextmenu", H), n.domElement.addEventListener("pointerdown", le), n.domElement.addEventListener("pointercancel", Ee), n.domElement.addEventListener("wheel", Ke, { passive: !1 }), this.update();
  }
}
class Ev {
  constructor() {
    this.fov = 30, this.lerp = 1, this.scrollPct = 0, this.scrollPctEnd = 0, this.useOrbit = !0;
  }
  init() {
    const t = new xe();
    nt.scene.add(t), this.group = t;
    const e = new nn(this.fov, nt.sizes.width / nt.sizes.height, 0.1, 100);
    return this.camera = e, this.useOrbit ? (e.position.set(0, 0, 6), nt.scene.add(e), this.controls = new Tv(e, nt.canvas), this.controls.enableDamping = !0) : (e.position.set(0, 0, 6), t.add(e)), e;
  }
  startAnimation() {
  }
  scroll(t) {
  }
  resize() {
    nt.camera.aspect = nt.sizes.width / nt.sizes.height, nt.camera.updateProjectionMatrix();
  }
  update() {
  }
}
class Av {
  constructor() {
  }
  init() {
    const t = new vh({
      canvas: nt.canvas,
      antialias: !0,
      powerPreference: "high-performance",
      alpha: !0
    });
    if (t.physicallyCorrectLights = !0, t.toneMapping = gn, t.toneMappingExposure = 1.1, t.shadowMap.enabled = !1, t.setClearColor(0, 0), nt.settings.debug) {
      const e = nt.gui.addFolder("Renderer");
      e.add(t, "toneMapping", {
        No: gn,
        Linear: Yc,
        Reinhard: $c,
        Cineon: jc,
        ACESFilmic: Zc
      }), e.add(t, "toneMappingExposure").min(0).max(2).step(1e-3), e.close();
    }
    return t;
  }
  setDarkMode(t) {
    t ? nt.renderer.setClearColor(0, 1) : nt.renderer.setClearColor(16777215, 1);
  }
  resize() {
    nt.renderer.setSize(nt.sizes.width, nt.sizes.height), nt.renderer.setPixelRatio(nt.sizes.pixelRatio);
  }
  update() {
    nt.renderer.render(nt.scene, nt.camera);
  }
}
class Cv {
  constructor(t) {
    this.callback = t, this.start = Date.now(), this.current = this.start, this.elapsed = 0, this.delta = 16, window.requestAnimationFrame(this.tick.bind(this));
  }
  tick() {
    const t = Date.now();
    this.delta = t - this.current, this.current = t, this.elapsed = this.current - this.start, this.callback && this.callback(), window.requestAnimationFrame(this.tick.bind(this));
  }
}
const Pv = `uniform float uTime;

varying vec2 vUv;

void main()
{
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);

    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;

    gl_Position = projectionMatrix * viewPosition;

    vUv = uv;
}`, Lv = `uniform vec3 uColor;
uniform sampler2D uTexture;

uniform float uAlpha;
uniform float uShowCountries;
uniform float uShowCountrieLines;
uniform float uShowFactor;
uniform float segU;
uniform float segV;
uniform float uSpeedX;
uniform float uSpeedY;
uniform float uTime;
uniform float wireWidthFactor;
uniform float dpr;
uniform vec3 wireColor;

varying vec2 vUv;

void main() {
    vec4 textureColor = texture2D(uTexture, vUv);

    vec2 uv = vUv;
    uv.x += uTime * uSpeedX;
    uv.y += uTime * uSpeedY;
    vec2 coord = uv * vec2(segU, segV);
    vec2 grid = abs(fract(coord - 0.5) - 0.5) / fwidth(coord);
    float line = min(grid.x, grid.y) / (wireWidthFactor * dpr);
    line = 1.0 - min(line, 1.0);

    float factor = round((1. - uShowFactor) + uShowFactor * (vUv.y * 5.0 - 4.5));
    line *= clamp(factor, 0., 1.);

    float alpha = min(1., line * max(textureColor.r, 1. - uShowCountries) + .3 * textureColor.g * uShowCountrieLines);

    gl_FragColor = mix(vec4(wireColor, 0.0), vec4(wireColor, 1.0), alpha * uAlpha);

    // float test = (1. - uShowFactor) + uShowFactor * (vUv.y * 5.0 - 4.5);
    // test = pow(test, .2);

    // gl_FragColor = vec4(test, 0., 0., 1.);
}`;
let Qo = class extends xe {
  constructor() {
    super(), this.wrapper = new xe(), this.add(this.wrapper), this.wrapper.scale.set(0, 0, 0);
  }
  show() {
    de.killTweensOf(this.wrapper.scale), de.to(this.wrapper.scale, {
      delay: Math.random() * 1,
      x: 1,
      y: 1,
      z: 1,
      duration: 1.2,
      ease: "power3.out"
    });
  }
  hide() {
    de.killTweensOf(this.wrapper.scale), de.to(this.wrapper.scale, {
      delay: Math.random() * 0.3,
      x: 0,
      y: 0,
      z: 0,
      duration: 0.45,
      ease: "power3.out"
    });
  }
};
class Dv extends Qo {
  constructor({ cycle: t, texture: e, long: n, lat: i }) {
    super(), this.active = !1, this.currentCycle = 0, this.cycle = t;
    const r = nt.textureManager.getTexture(e);
    this.wrapper.position.z = 1.75 + r.ratio;
    const o = new ei({ map: r.texture }), s = new Oi(o), l = 0.3 - (r.ratio - 1) * 0.03;
    s.scale.set(l * r.ratio, l, l), this.wrapper.add(s);
    const c = new si(Vn.degToRad(-i), Vn.degToRad(n), 0, "ZYX");
    this.rotation.copy(c);
  }
  setActive(t) {
    this.active = t, this.setVisibility();
  }
  setCycle(t) {
    this.currentCycle = t, this.setVisibility();
  }
  setVisibility() {
    this.cycle === this.currentCycle && this.active ? this.show() : this.hide();
  }
}
class Rv extends Qo {
  constructor(t) {
    super();
    const { id: e, long: n, lat: i } = t;
    this.data = t;
    const r = nt.textureManager.bluetoothMap;
    this.wrapper.position.z = 1.75;
    const o = new ei({ map: r }), s = new Oi(o), l = 0.25;
    s.scale.set(l, l, l), this.wrapper.add(s);
    const c = new si(Vn.degToRad(-i), Vn.degToRad(n), 0, "ZYX");
    this.rotation.copy(c);
    const h = s;
    h.userData.enabled = !0, h.userData.click = this.clickHandler.bind(this), h.userData.rollOver = this.overHandler.bind(this), h.userData.rollOut = this.outHandler.bind(this), nt.main.caster.addItem(h);
  }
  clickHandler() {
    nt.scrollController.coveragePct > 0.5 && nt.onBluetoothClick && nt.onBluetoothClick(this.data);
  }
  overHandler() {
    nt.scrollController.coveragePct > 0.5 && nt.main.earth.globe.overHandler();
  }
  outHandler() {
    nt.scrollController.coveragePct > 0.5 && nt.main.earth.globe.outHandler();
  }
}
class Iv extends Qo {
  constructor(t) {
    super();
    const { city: e, long: n, lat: i } = t;
    this.data = t;
    const r = nt.textureManager.cityMap;
    this.wrapper.scale.set(0, 0, 0), this.wrapper.position.z = 1.55;
    const o = new ei({ map: r }), s = new Oi(o);
    let l = 0.03 + Math.random() * 0.03;
    s.scale.set(l, l, l), this.wrapper.add(s);
    const c = new ei({ map: r, transparent: !0, opacity: 0.2 }), h = new Oi(c);
    l = 0.06 + Math.random() * 0.03, h.scale.set(l, l, l), this.wrapper.add(h);
    const u = new si(Vn.degToRad(-i), Vn.degToRad(n), 0, "ZYX");
    this.rotation.copy(u);
    const d = s;
    d.userData.enabled = !0, d.userData.click = this.clickHandler.bind(this), d.userData.rollOver = this.overHandler.bind(this), d.userData.rollOut = this.outHandler.bind(this), nt.main.caster.addItem(d);
  }
  clickHandler() {
    nt.onCityClick && nt.onCityClick(this.data);
  }
  overHandler() {
    nt.main.earth.globe.overHandler(), nt.onCityOver && nt.onCityOver(this.data);
  }
  outHandler() {
    nt.main.earth.globe.outHandler(), nt.onCityOut && nt.onCityOut(this.data);
  }
}
let Ov = class extends xe {
  constructor() {
    super(), this.enabled = !1, this.picturesCycle = 0, this.picturePatches = [], this.showPicturePatches = !0;
    let t = 0;
    nt.config.json.picturePatches.map((e) => {
      e.map((n) => {
        n.cycle = t;
        const i = new Dv(n);
        this.add(i), this.picturePatches.push(i);
      }), t++;
    }), this.bluetoothPatches = [], nt.config.json.bluetoothPatches.map((e) => {
      const n = new Rv(e);
      this.add(n), this.bluetoothPatches.push(n);
    }), this.cityPatches = [], this.showCityPatches = !1, nt.config.json.cityPatches.map((e) => {
      const n = new Iv(e);
      this.add(n), this.cityPatches.push(n);
    });
  }
  playIntro() {
    clearTimeout(this.introTimeoudId), this.introTimeoudId = setTimeout(() => {
      this.enabled = !0;
    }, 2200);
  }
  cyclePictures(t) {
    if (this.picturesCycle = t, this.picturePatches)
      for (const e of this.picturePatches)
        e.setCycle(this.picturesCycle);
  }
  update() {
    const { coveragePct: t, coverageZoomPct: e } = nt.scrollController;
    this.setBluetoothPatches(t, e), this.setPicturePatches(t, e), this.setCityPatches(t, e);
  }
  setBluetoothPatches(t, e) {
    const n = this.enabled && e < 0.5;
    if (n !== this.showBluetoothPatches) {
      this.showBluetoothPatches = n;
      for (const i of this.bluetoothPatches)
        n ? i.show() : i.hide();
    }
  }
  setPicturePatches(t, e) {
    const n = this.enabled && t < 0.5;
    if (n !== this.showPicturePatches) {
      this.showPicturePatches = n;
      for (const i of this.picturePatches)
        n ? i.setActive(!0) : i.setActive(!1);
    }
  }
  setCityPatches(t, e) {
    const n = this.enabled && t >= 0.5 && e < 0.5;
    if (n !== this.showCityPatches) {
      this.showCityPatches = n;
      for (const i of this.cityPatches)
        n ? i.show() : i.hide();
    }
  }
};
const Uc = new ri(), zs = new R();
class Mu extends q_ {
  constructor() {
    super(), this.isLineSegmentsGeometry = !0, this.type = "LineSegmentsGeometry";
    const t = [-1, 2, 0, 1, 2, 0, -1, 1, 0, 1, 1, 0, -1, 0, 0, 1, 0, 0, -1, -1, 0, 1, -1, 0], e = [-1, 2, 1, 2, -1, 1, 1, 1, -1, -1, 1, -1, -1, -2, 1, -2], n = [0, 2, 1, 2, 3, 1, 2, 4, 3, 4, 5, 3, 4, 6, 5, 6, 7, 5];
    this.setIndex(n), this.setAttribute("position", new $e(t, 3)), this.setAttribute("uv", new $e(e, 2));
  }
  applyMatrix4(t) {
    const e = this.attributes.instanceStart, n = this.attributes.instanceEnd;
    return e !== void 0 && (e.applyMatrix4(t), n.applyMatrix4(t), e.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
  }
  setPositions(t) {
    let e;
    t instanceof Float32Array ? e = t : Array.isArray(t) && (e = new Float32Array(t));
    const n = new ho(e, 6, 1);
    return this.setAttribute("instanceStart", new Tn(n, 3, 0)), this.setAttribute("instanceEnd", new Tn(n, 3, 3)), this.computeBoundingBox(), this.computeBoundingSphere(), this;
  }
  setColors(t) {
    let e;
    t instanceof Float32Array ? e = t : Array.isArray(t) && (e = new Float32Array(t));
    const n = new ho(e, 6, 1);
    return this.setAttribute("instanceColorStart", new Tn(n, 3, 0)), this.setAttribute("instanceColorEnd", new Tn(n, 3, 3)), this;
  }
  fromWireframeGeometry(t) {
    return this.setPositions(t.attributes.position.array), this;
  }
  fromEdgesGeometry(t) {
    return this.setPositions(t.attributes.position.array), this;
  }
  fromMesh(t) {
    return this.fromWireframeGeometry(new G_(t.geometry)), this;
  }
  fromLineSegments(t) {
    const e = t.geometry;
    return this.setPositions(e.attributes.position.array), this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new ri());
    const t = this.attributes.instanceStart, e = this.attributes.instanceEnd;
    t !== void 0 && e !== void 0 && (this.boundingBox.setFromBufferAttribute(t), Uc.setFromBufferAttribute(e), this.boundingBox.union(Uc));
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new os()), this.boundingBox === null && this.computeBoundingBox();
    const t = this.attributes.instanceStart, e = this.attributes.instanceEnd;
    if (t !== void 0 && e !== void 0) {
      const n = this.boundingSphere.center;
      this.boundingBox.getCenter(n);
      let i = 0;
      for (let r = 0, o = t.count; r < o; r++)
        zs.fromBufferAttribute(t, r), i = Math.max(i, n.distanceToSquared(zs)), zs.fromBufferAttribute(e, r), i = Math.max(i, n.distanceToSquared(zs));
      this.boundingSphere.radius = Math.sqrt(i), isNaN(this.boundingSphere.radius) && console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.", this);
    }
  }
  toJSON() {
  }
  applyMatrix(t) {
    return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."), this.applyMatrix4(t);
  }
}
class Su extends Mu {
  constructor() {
    super(), this.isLineGeometry = !0, this.type = "LineGeometry";
  }
  setPositions(t) {
    const e = t.length - 3, n = new Float32Array(2 * e);
    for (let i = 0; i < e; i += 3)
      n[2 * i] = t[i], n[2 * i + 1] = t[i + 1], n[2 * i + 2] = t[i + 2], n[2 * i + 3] = t[i + 3], n[2 * i + 4] = t[i + 4], n[2 * i + 5] = t[i + 5];
    return super.setPositions(n), this;
  }
  setColors(t) {
    const e = t.length - 3, n = new Float32Array(2 * e);
    for (let i = 0; i < e; i += 3)
      n[2 * i] = t[i], n[2 * i + 1] = t[i + 1], n[2 * i + 2] = t[i + 2], n[2 * i + 3] = t[i + 3], n[2 * i + 4] = t[i + 4], n[2 * i + 5] = t[i + 5];
    return super.setColors(n), this;
  }
  fromLine(t) {
    const e = t.geometry;
    return this.setPositions(e.attributes.position.array), this;
  }
}
rt.line = {
  worldUnits: { value: 1 },
  linewidth: { value: 1 },
  resolution: { value: new vt(1, 1) },
  dashOffset: { value: 0 },
  dashScale: { value: 1 },
  dashSize: { value: 1 },
  gapSize: { value: 1 }
  // todo FIX - maybe change to totalSize
};
Re.line = {
  uniforms: Io.merge([
    rt.common,
    rt.fog,
    rt.line
  ]),
  vertexShader: (
    /* glsl */
    `
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				// get the offset direction as perpendicular to the view vector
				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 offset;
				if ( position.y < 0.5 ) {

					offset = normalize( cross( start.xyz, worldDir ) );

				} else {

					offset = normalize( cross( end.xyz, worldDir ) );

				}

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				float forwardOffset = dot( worldDir, vec3( 0.0, 0.0, 1.0 ) );

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// extend the line bounds to encompass  endcaps
					start.xyz += - worldDir * linewidth * 0.5;
					end.xyz += worldDir * linewidth * 0.5;

					// shift the position of the quad so it hugs the forward edge of the line
					offset.xy -= dir * forwardOffset;
					offset.z += 0.5;

				#endif

				// endcaps
				if ( position.y > 1.0 || position.y < 0.0 ) {

					offset.xy += dir * 2.0 * forwardOffset;

				}

				// adjust for linewidth
				offset *= linewidth * 0.5;

				// set the world position
				worldPos = ( position.y < 0.5 ) ? start : end;
				worldPos.xyz += offset;

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`
  ),
  fragmentShader: (
    /* glsl */
    `
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			float alpha = opacity;

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <encodings_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`
  )
};
class tl extends Pn {
  constructor(t) {
    super({
      type: "LineMaterial",
      uniforms: Io.clone(Re.line.uniforms),
      vertexShader: Re.line.vertexShader,
      fragmentShader: Re.line.fragmentShader,
      clipping: !0
      // required for clipping support
    }), this.isLineMaterial = !0, Object.defineProperties(this, {
      color: {
        enumerable: !0,
        get: function() {
          return this.uniforms.diffuse.value;
        },
        set: function(e) {
          this.uniforms.diffuse.value = e;
        }
      },
      worldUnits: {
        enumerable: !0,
        get: function() {
          return "WORLD_UNITS" in this.defines;
        },
        set: function(e) {
          e === !0 ? this.defines.WORLD_UNITS = "" : delete this.defines.WORLD_UNITS;
        }
      },
      linewidth: {
        enumerable: !0,
        get: function() {
          return this.uniforms.linewidth.value;
        },
        set: function(e) {
          this.uniforms.linewidth.value = e;
        }
      },
      dashed: {
        enumerable: !0,
        get: function() {
          return "USE_DASH" in this.defines;
        },
        set(e) {
          !!e != "USE_DASH" in this.defines && (this.needsUpdate = !0), e === !0 ? this.defines.USE_DASH = "" : delete this.defines.USE_DASH;
        }
      },
      dashScale: {
        enumerable: !0,
        get: function() {
          return this.uniforms.dashScale.value;
        },
        set: function(e) {
          this.uniforms.dashScale.value = e;
        }
      },
      dashSize: {
        enumerable: !0,
        get: function() {
          return this.uniforms.dashSize.value;
        },
        set: function(e) {
          this.uniforms.dashSize.value = e;
        }
      },
      dashOffset: {
        enumerable: !0,
        get: function() {
          return this.uniforms.dashOffset.value;
        },
        set: function(e) {
          this.uniforms.dashOffset.value = e;
        }
      },
      gapSize: {
        enumerable: !0,
        get: function() {
          return this.uniforms.gapSize.value;
        },
        set: function(e) {
          this.uniforms.gapSize.value = e;
        }
      },
      opacity: {
        enumerable: !0,
        get: function() {
          return this.uniforms.opacity.value;
        },
        set: function(e) {
          this.uniforms.opacity.value = e;
        }
      },
      resolution: {
        enumerable: !0,
        get: function() {
          return this.uniforms.resolution.value;
        },
        set: function(e) {
          this.uniforms.resolution.value.copy(e);
        }
      },
      alphaToCoverage: {
        enumerable: !0,
        get: function() {
          return "USE_ALPHA_TO_COVERAGE" in this.defines;
        },
        set: function(e) {
          !!e != "USE_ALPHA_TO_COVERAGE" in this.defines && (this.needsUpdate = !0), e === !0 ? (this.defines.USE_ALPHA_TO_COVERAGE = "", this.extensions.derivatives = !0) : (delete this.defines.USE_ALPHA_TO_COVERAGE, this.extensions.derivatives = !1);
        }
      }
    }), this.setValues(t);
  }
}
const kc = new R(), Bc = new R(), me = new Zt(), ge = new Zt(), yn = new Zt(), Qa = new R(), to = new ee(), _e = new $_(), Gc = new R(), Fs = new ri(), Ns = new os(), bn = new Zt();
let wn, Ci;
function Vc(a, t, e) {
  return bn.set(0, 0, -t, 1).applyMatrix4(a.projectionMatrix), bn.multiplyScalar(1 / bn.w), bn.x = Ci / e.width, bn.y = Ci / e.height, bn.applyMatrix4(a.projectionMatrixInverse), bn.multiplyScalar(1 / bn.w), Math.abs(Math.max(bn.x, bn.y));
}
function zv(a, t) {
  const e = a.matrixWorld, n = a.geometry, i = n.attributes.instanceStart, r = n.attributes.instanceEnd, o = Math.min(n.instanceCount, i.count);
  for (let s = 0, l = o; s < l; s++) {
    _e.start.fromBufferAttribute(i, s), _e.end.fromBufferAttribute(r, s), _e.applyMatrix4(e);
    const c = new R(), h = new R();
    wn.distanceSqToSegment(_e.start, _e.end, h, c), h.distanceTo(c) < Ci * 0.5 && t.push({
      point: h,
      pointOnLine: c,
      distance: wn.origin.distanceTo(h),
      object: a,
      face: null,
      faceIndex: s,
      uv: null,
      uv2: null
    });
  }
}
function Fv(a, t, e) {
  const n = t.projectionMatrix, r = a.material.resolution, o = a.matrixWorld, s = a.geometry, l = s.attributes.instanceStart, c = s.attributes.instanceEnd, h = Math.min(s.instanceCount, l.count), u = -t.near;
  wn.at(1, yn), yn.w = 1, yn.applyMatrix4(t.matrixWorldInverse), yn.applyMatrix4(n), yn.multiplyScalar(1 / yn.w), yn.x *= r.x / 2, yn.y *= r.y / 2, yn.z = 0, Qa.copy(yn), to.multiplyMatrices(t.matrixWorldInverse, o);
  for (let d = 0, m = h; d < m; d++) {
    if (me.fromBufferAttribute(l, d), ge.fromBufferAttribute(c, d), me.w = 1, ge.w = 1, me.applyMatrix4(to), ge.applyMatrix4(to), me.z > u && ge.z > u)
      continue;
    if (me.z > u) {
      const x = me.z - ge.z, y = (me.z - u) / x;
      me.lerp(ge, y);
    } else if (ge.z > u) {
      const x = ge.z - me.z, y = (ge.z - u) / x;
      ge.lerp(me, y);
    }
    me.applyMatrix4(n), ge.applyMatrix4(n), me.multiplyScalar(1 / me.w), ge.multiplyScalar(1 / ge.w), me.x *= r.x / 2, me.y *= r.y / 2, ge.x *= r.x / 2, ge.y *= r.y / 2, _e.start.copy(me), _e.start.z = 0, _e.end.copy(ge), _e.end.z = 0;
    const f = _e.closestPointToPointParameter(Qa, !0);
    _e.at(f, Gc);
    const p = Vn.lerp(me.z, ge.z, f), _ = p >= -1 && p <= 1, b = Qa.distanceTo(Gc) < Ci * 0.5;
    if (_ && b) {
      _e.start.fromBufferAttribute(l, d), _e.end.fromBufferAttribute(c, d), _e.start.applyMatrix4(o), _e.end.applyMatrix4(o);
      const x = new R(), y = new R();
      wn.distanceSqToSegment(_e.start, _e.end, y, x), e.push({
        point: y,
        pointOnLine: x,
        distance: wn.origin.distanceTo(y),
        object: a,
        face: null,
        faceIndex: d,
        uv: null,
        uv2: null
      });
    }
  }
}
class Nv extends rn {
  constructor(t = new Mu(), e = new tl({ color: Math.random() * 16777215 })) {
    super(t, e), this.isLineSegments2 = !0, this.type = "LineSegments2";
  }
  // for backwards-compatibility, but could be a method of LineSegmentsGeometry...
  computeLineDistances() {
    const t = this.geometry, e = t.attributes.instanceStart, n = t.attributes.instanceEnd, i = new Float32Array(2 * e.count);
    for (let o = 0, s = 0, l = e.count; o < l; o++, s += 2)
      kc.fromBufferAttribute(e, o), Bc.fromBufferAttribute(n, o), i[s] = s === 0 ? 0 : i[s - 1], i[s + 1] = i[s] + kc.distanceTo(Bc);
    const r = new ho(i, 2, 1);
    return t.setAttribute("instanceDistanceStart", new Tn(r, 1, 0)), t.setAttribute("instanceDistanceEnd", new Tn(r, 1, 1)), this;
  }
  raycast(t, e) {
    const n = this.material.worldUnits, i = t.camera;
    i === null && !n && console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');
    const r = t.params.Line2 !== void 0 && t.params.Line2.threshold || 0;
    wn = t.ray;
    const o = this.matrixWorld, s = this.geometry, l = this.material;
    Ci = l.linewidth + r, s.boundingSphere === null && s.computeBoundingSphere(), Ns.copy(s.boundingSphere).applyMatrix4(o);
    let c;
    if (n)
      c = Ci * 0.5;
    else {
      const u = Math.max(i.near, Ns.distanceToPoint(wn.origin));
      c = Vc(i, u, l.resolution);
    }
    if (Ns.radius += c, wn.intersectsSphere(Ns) === !1)
      return;
    s.boundingBox === null && s.computeBoundingBox(), Fs.copy(s.boundingBox).applyMatrix4(o);
    let h;
    if (n)
      h = Ci * 0.5;
    else {
      const u = Math.max(i.near, Fs.distanceToPoint(wn.origin));
      h = Vc(i, u, l.resolution);
    }
    Fs.expandByScalar(h), wn.intersectsBox(Fs) !== !1 && (n ? zv(this, e) : Fv(this, i, e));
  }
}
class Uv extends Nv {
  constructor(t = new Su(), e = new tl({ color: Math.random() * 16777215 })) {
    super(t, e), this.isLine2 = !0, this.type = "Line2";
  }
}
const kv = new Ot("#008aff"), Bv = new Ot("#61ff00");
class Gv extends xe {
  constructor(t, e) {
    super();
    const n = this.getPosition(t.lat, t.long, 1.55), i = this.getPosition((t.lat + e.lat) * 0.5, (t.long + e.long) * 0.5, 2.6), r = this.getPosition(e.lat, e.long, 1.55), o = new B_(n, i, r), s = [];
    this.colors = [], this.colorPct = -1 + Math.random() * 3, this.divisions = 40;
    const l = new R(), c = new Ot();
    for (let d = 0, m = this.divisions; d < m; d++) {
      const g = d / (m - 1);
      o.getPoint(g, l), s.push(l.x, l.y, l.z), c.setHSL(Math.random() * 360, 1, 0.5, fn), this.colors.push(c.r, c.g, c.b);
    }
    const h = new Su();
    h.setPositions(s), h.setColors(this.colors), this.material = new tl({
      transparent: !0,
      vertexColors: !0,
      color: 16777215,
      dashed: !0,
      gapSize: 1,
      // dashScale: 3,
      dashSize: 1,
      // dashOffset: .5,
      // dashOffset: 0.1,
      linewidth: 0
      // in world units with size attenuation, pixels otherwise
      // linewidth: 0.0035, // in world units with size attenuation, pixels otherwise
      // color: 0x00ff00,
      // opacity: 0,
    });
    let u = new Uv(h, this.material);
    u.computeLineDistances(), u.scale.set(1, 1, 1), this.add(u), this.line = u, nt.main.container.add(this), this.showPct = 0, this.send();
  }
  getPosition(t, e, n) {
    return t = Vn.degToRad(90 - t), e = Vn.degToRad(e), new R().setFromSphericalCoords(n, t, e);
  }
  showSprite(t) {
    const e = new ei({ color: "red" }), n = new Oi(e);
    n.position.copy(t), this.add(n), n.scale.set(0.2, 0.2, 0.2);
  }
  show() {
    de.killTweensOf(this.material), de.to(this.material, {
      delay: Math.random() * 1,
      // opacity: 1,
      linewidth: 4e-3,
      duration: 0.4,
      ease: "power3.out"
    });
  }
  hide() {
    de.killTweensOf(this.material), de.to(this.material, {
      delay: Math.random() * 0.3,
      // opacity: 0,
      linewidth: 0,
      duration: 0.4,
      ease: "power3.out"
    });
  }
  send() {
    de.killTweensOf(this), de.to(this, {
      delay: 3 + Math.random() * 6,
      showPct: 1,
      duration: 3,
      ease: "sine.inOut",
      onComplete: this.unsend.bind(this)
    });
  }
  unsend() {
    de.killTweensOf(this), de.to(this, {
      delay: 2 + Math.random() * 2,
      showPct: 0,
      duration: 0.5,
      ease: "power3.out",
      onComplete: this.send.bind(this)
    });
  }
  update() {
    let t = new Ot(), e, n;
    this.colorPct += nt.time.delta * 11e-4, this.colorPct > 2 && (this.colorPct -= 3);
    for (let i = 0; i < this.divisions; i++) {
      n = i / (this.divisions - 1), e = i * 3;
      let r = (this.colorPct - n) * 1;
      r < 0 && (r *= -10), r = Math.min(1, r), t.lerpColors(kv, Bv, r), this.colors[e + 0] = t.r, this.colors[e + 1] = t.g, this.colors[e + 2] = t.b;
    }
    this.line.geometry.setColors(this.colors), this.line.material.gapSize = 3 - this.showPct * 3, this.line.material.dashSize = this.showPct * 3;
  }
}
class Vv extends xe {
  constructor() {
    super(), this.enabled = !1, this.lines = [], this.show = !0, nt.config.json.lines.map(({ start: t, end: e }) => {
      const n = new Gv(t, e);
      this.add(n), this.lines.push(n);
    });
  }
  playIntro() {
    clearTimeout(this.introTimeoudId), this.introTimeoudId = setTimeout(() => {
      this.enabled = !0;
    }, 2200);
  }
  update() {
    const { coveragePct: t, coverageZoomPct: e } = nt.scrollController, n = this.enabled && t > 0.5 && e < 0.5;
    if (n !== this.show) {
      this.show = n;
      for (const i of this.lines)
        n ? i.show() : i.hide();
    }
    for (const i of this.lines)
      i.update();
  }
}
class Hv extends xe {
  constructor() {
    super(), this.isGlobeOver = !1, this.inner = new rn(
      new Xs(1.5, 60, 60),
      new V_({
        transparent: !0,
        // depthTest: false,
        matcap: nt.textureManager.earthGradient,
        polygonOffset: !0,
        polygonOffsetFactor: 18
      })
    ), this.outer = new rn(
      new Xs(1.5, 60, 60),
      new Pn({
        vertexShader: Pv,
        fragmentShader: Lv,
        transparent: !0,
        // depthTest: false,
        uniforms: {
          uFrequency: { value: new vt(10, 5) },
          uTime: { value: 0 },
          uShowFactor: { value: 1 },
          uShowCountries: { value: 0 },
          uShowCountrieLines: { value: 0 },
          segU: { value: 0 },
          segV: { value: 54 },
          uSpeedX: { value: 1 },
          uSpeedY: { value: 1 },
          uAlpha: { value: 0.2 },
          wireWidthFactor: { value: 2.5 },
          dpr: { value: nt.sizes.pixelRatio },
          wireColor: { value: new Ot("#014FFE") },
          uTexture: { value: nt.textureManager.earthMap }
        }
      })
    ), this.add(this.outer), this.add(this.inner);
    const t = this.inner;
    t.userData.enabled = !0, t.userData.rollOver = this.globeOverHandler.bind(this), t.userData.rollOut = this.globeOutHandler.bind(this), nt.main.caster.addItem(t), this.outer.rotation.y = -Math.PI * 0.5, this.patches = new Ov(), this.add(this.patches), this.lines = new Vv(), this.add(this.lines), this.rotation.y = -0.5, this.initInteractivity();
  }
  initInteractivity() {
    this.speedX = 0, window.addEventListener("mousedown", this.downHandler.bind(this)), window.addEventListener("mouseup", this.upHandler.bind(this)), window.addEventListener("touchstart", this.downHandler.bind(this)), window.addEventListener("touchend", this.upHandler.bind(this));
  }
  downHandler(t) {
    this.isGlobeOver && (this.mousePos = {
      x: ar.x,
      y: ar.y
    }, this.isDown = !0);
  }
  upHandler(t) {
    this.isDown = !1;
  }
  // mousemoveHandler(e) {
  //   console.log(e);
  //   world.time
  // }
  globeOverHandler() {
    this.isGlobeOver = !0;
  }
  globeOutHandler() {
    this.upHandler(), this.isGlobeOver = !1;
  }
  playIntro() {
    this.patches.playIntro(), this.lines.playIntro(), de.to(this.outer.material.uniforms.uShowFactor, { value: 0, duration: 3.5, ease: "power1.out" }), de.to(this.outer.material.uniforms.uShowCountries, { value: 1, delay: 1.8, duration: 2.3, ease: "power4.out" }), de.to(this.outer.material.uniforms.uShowCountrieLines, { value: 1, delay: 2.4, duration: 1.5, ease: "sine.out" });
  }
  overHandler() {
    this.isOver = !0;
  }
  outHandler() {
    this.isOver = !1;
  }
  update() {
    const t = Date.now();
    this.delta = t - this.current, this.current = t, this.delta || (this.delta = 0);
    let e = 0.02, n = 5e-3;
    if (this.isDown) {
      const o = (ar.x - this.mousePos.x) / this.delta;
      e = Math.max(-1, Math.min(1, o * 5)), this.mousePos = {
        x: ar.x,
        y: ar.y
      };
    }
    this.isOver && (e = 0, n = 8e-3), this.speedX += (e - this.speedX) * n * this.delta, this.rotation.y += this.speedX * 0.01 * this.delta;
    let r = 1 - (nt.scrollController.coverageZoomPct - 0.5) * 2;
    r = Math.max(0, Math.min(1, r)), this.inner.material.opacity = Math.pow(r, 0.1), this.outer.material.uniforms.uAlpha.value = Math.pow(r, 1), this.outer.material.uniforms.uTime.value = nt.time.elapsed * 25e-6, this.patches.update(), this.lines.update();
  }
}
class Wv extends xe {
  constructor() {
    super(), nt.main.container.add(this), this.rotation.set(0, 0.4, 0.8), this.position.set(1, -1, 0), this.scale.set(1, 1, 1), this.size = {
      desktop: 1,
      mobile: 0.7
    }, this.pos = {
      desktop: {
        x: 1,
        y: -1,
        z: 0
      },
      mobile: {
        x: 0.7,
        y: -1,
        z: 0
      }
    }, this.wrapper = new xe(), this.add(this.wrapper), this.globe = new Hv(), this.wrapper.add(this.globe), this.initSlideTimeline(), this.initZoomTimeline();
  }
  initSlideTimeline() {
    const t = new de.timeline({ paused: !0 }), e = "power3.inOut", n = 10;
    t.to(this.pos.desktop, { duration: n, x: 0.5, y: 0.1, ease: e }, 0), t.to(this.pos.mobile, { duration: n, x: 0, y: -1, ease: e }, 0), t.to(this.rotation, { duration: n, y: -0.6, z: -0.6, ease: e }, 0), t.to(this.size, { duration: n, desktop: 0.75, mobile: 0.7, ease: e }, 0), this.slideTimeline = t;
  }
  initZoomTimeline() {
    const t = new de.timeline({ paused: !0 }), e = "power4.in", n = 10;
    t.to(this.pos.desktop, { duration: 7, x: 0, y: 0, ease: "sine.inOut" }, 0), t.to(this.pos.mobile, { duration: 7, x: 0, y: 0, ease: "sine.inOut" }, 0), t.to(this.rotation, { duration: n, y: 0, z: 0, ease: "sine.in" }, 0), t.to(this.size, { duration: n, desktop: 2, mobile: 2, ease: e }, 0), this.zoomTimeline = t;
  }
  playIntro() {
    this.globe.playIntro();
  }
  update() {
    this.globe.update();
    const t = nt.sizes.mobilePct, e = nt.sizes.desktopPct, n = this.size.mobile * t + this.size.desktop * e;
    this.scale.set(n, n, n);
    const i = this.pos.mobile.x * t + this.pos.desktop.x * e, r = this.pos.mobile.y * t + this.pos.desktop.y * e, o = this.pos.mobile.z * t + this.pos.desktop.z * e;
    this.position.set(i, r, o);
    const s = nt.scrollController.coveragePct;
    s > 0 && s <= 1 && this.slideTimeline.progress(s);
    const l = nt.scrollController.coverageZoomPct;
    l > 0 && l <= 1 && this.zoomTimeline.progress(l), this.visible = l <= 1.2;
  }
}
class Xv {
  constructor() {
    this.isEnabled = !0, this.items = [], this.scale = 1, this.pointer = new vt(), this.raycaster = new Y_(), window.addEventListener("mousemove", this.mousemoveHandler.bind(this)), window.addEventListener("click", this.clickHandler.bind(this)), window.addEventListener("touchstart", this.touchmoveHandler.bind(this));
  }
  setScale(t) {
    this.scale = t;
  }
  setItems(t) {
    this.items = t;
  }
  addItem(t) {
    this.items.push(t);
  }
  setCallback(t) {
    this.callback = t;
  }
  enable() {
    this.isEnabled = !0, this.pointer.x = this.pointer.y = -100;
  }
  disable() {
    this.isEnabled = !1;
  }
  clickHandler() {
    this.isEnabled && this.activeItem && (this.activeItem.userData.click && this.activeItem.userData.click(this.activeItem), this.callback && this.callback(this.activeItem));
  }
  mousemoveHandler(t) {
    this.isEnabled && (this.pointer.x = t.clientX / window.innerWidth * 2 - 1, this.pointer.y = -(t.clientY / window.innerHeight * 2 - 1));
  }
  touchmoveHandler(t) {
    if (this.isEnabled) {
      var e = t.touches[0];
      e && (this.pointer.x = e.clientX / window.innerWidth * 2 - 1, this.pointer.y = -(e.clientY / window.innerHeight * 2 - 1));
    }
  }
  update() {
    const t = { x: this.pointer.x / this.scale, y: this.pointer.y / this.scale };
    if (this.isEnabled && t.x && t.y && this.items) {
      this.raycaster.setFromCamera(t, nt.camera);
      const e = this.raycaster.intersectObjects(this.items);
      if (e.length > 0) {
        const n = e[0].object;
        n.userData.enabled && (n != this.activeItem && (this.rollOut(), this.rollOver(n)), this.activeItem = n);
      } else
        this.activeItem && (this.rollOut(), this.activeItem = null);
    }
  }
  rollOver(t) {
    t.userData.rollOver && t.userData.rollOver();
  }
  rollOut() {
    this.activeItem && this.activeItem.userData.rollOut && this.activeItem.userData.rollOut();
  }
}
const qv = `uniform float uTime;

varying vec2 vUv;

void main() {
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);

    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;

    gl_Position = projectionMatrix * viewPosition;

    vUv = uv;
}`, Yv = `uniform sampler2D uTexture;
uniform float uZoom;
uniform float uTime;
uniform float uRatio;
uniform float uAlpha;
uniform vec3 uLineColor;
uniform vec3 uShineLineColor;
uniform vec3 uShineBlurColor;
uniform vec3 uBgColor;

uniform float uRadius;

varying vec2 vUv;

vec4 permute(vec4 t) {
    return t * (t * 34.0 + 133.0);
}

// Gradient set is a normalized expanded rhombic dodecahedron
vec3 grad(float hash) {

    // Random vertex of a cube, +/- 1 each
    vec3 cube = mod(floor(hash / vec3(1.0, 2.0, 4.0)), 2.0) * 2.0 - 1.0;

    // Random edge of the three edges connected to that vertex
    // Also a cuboctahedral vertex
    // And corresponds to the face of its dual, the rhombic dodecahedron
    vec3 cuboct = cube;
    cuboct[int(hash / 16.0)] = 0.0;

    // In a funky way, pick one of the four points on the rhombic face
    float type = mod(floor(hash / 8.0), 2.0);
    vec3 rhomb = (1.0 - type) * cube + type * (cuboct + cross(cube, cuboct));

    // Expand it so that the new edges are the same length
    // as the existing ones
    vec3 grad = cuboct * 1.22474487139 + rhomb;

    // To make all gradients the same length, we only need to shorten the
    // second type of vector. We also put in the whole noise scale constant.
    // The compiler should reduce it into the existing floats. I think.
    grad *= (1.0 - 0.042942436724648037 * type) * 3.5946317686139184;

    return grad;
}

// BCC lattice split up into 2 cube lattices
vec4 os2NoiseWithDerivativesPart(vec3 X) {
    vec3 b = floor(X);
    vec4 i4 = vec4(X - b, 2.5);

    // Pick between each pair of oppposite corners in the cube.
    vec3 v1 = b + floor(dot(i4, vec4(.25)));
    vec3 v2 = b + vec3(1, 0, 0) + vec3(-1, 1, 1) * floor(dot(i4, vec4(-.25, .25, .25, .35)));
    vec3 v3 = b + vec3(0, 1, 0) + vec3(1, -1, 1) * floor(dot(i4, vec4(.25, -.25, .25, .35)));
    vec3 v4 = b + vec3(0, 0, 1) + vec3(1, 1, -1) * floor(dot(i4, vec4(.25, .25, -.25, .35)));

    // Gradient hashes for the four vertices in this half-lattice.
    vec4 hashes = permute(mod(vec4(v1.x, v2.x, v3.x, v4.x), 289.0));
    hashes = permute(mod(hashes + vec4(v1.y, v2.y, v3.y, v4.y), 289.0));
    hashes = mod(permute(mod(hashes + vec4(v1.z, v2.z, v3.z, v4.z), 289.0)), 48.0);

    // Gradient extrapolations & kernel function
    vec3 d1 = X - v1;
    vec3 d2 = X - v2;
    vec3 d3 = X - v3;
    vec3 d4 = X - v4;
    vec4 a = max(0.75 - vec4(dot(d1, d1), dot(d2, d2), dot(d3, d3), dot(d4, d4)), 0.0);
    vec4 aa = a * a;
    vec4 aaaa = aa * aa;
    vec3 g1 = grad(hashes.x);
    vec3 g2 = grad(hashes.y);
    vec3 g3 = grad(hashes.z);
    vec3 g4 = grad(hashes.w);
    vec4 extrapolations = vec4(dot(d1, g1), dot(d2, g2), dot(d3, g3), dot(d4, g4));

    // Derivatives of the noise
    vec3 derivative = -8.0 * mat4x3(d1, d2, d3, d4) * (aa * a * extrapolations) + mat4x3(g1, g2, g3, g4) * aaaa;

    // Return it all as a vec4
    return vec4(derivative, dot(aaaa, extrapolations));
}

// Rotates domain, but preserve shape. Hides grid better in cardinal slices.
// Good for texturing 3D objects with lots of flat parts along cardinal planes.
vec4 os2NoiseWithDerivatives_Fallback(vec3 X) {
    X = dot(X, vec3(2.0 / 3.0)) - X;

    vec4 result = os2NoiseWithDerivativesPart(X) + os2NoiseWithDerivativesPart(X + 144.5);

    return vec4(dot(result.xyz, vec3(2.0 / 3.0)) - result.xyz, result.w);
}

// Gives X and Y a triangular alignment, and lets Z move up the main diagonal.
// Might be good for terrain, or a time varying X/Y plane. Z repeats.
vec4 os2NoiseWithDerivatives_ImproveXY(vec3 X) {

    // Not a skew transform.
    mat3 orthonormalMap = mat3(0.788675134594813, -0.211324865405187, -0.577350269189626, -0.211324865405187, 0.788675134594813, -0.577350269189626, 0.577350269189626, 0.577350269189626, 0.577350269189626);

    X = orthonormalMap * X;
    vec4 result = os2NoiseWithDerivativesPart(X) + os2NoiseWithDerivativesPart(X + 144.5);

    return vec4(result.xyz * orthonormalMap, result.w);
}

vec4 circle(vec2 uv, vec2 pos, float rad, vec3 color) {
    float d = length(pos - uv) - rad;
    float t = clamp(d, 0.0, 1.0);
    return vec4(color, 1.0 - t);
}

void main() {

    vec2 uv = vUv;

    uv.x *= uRatio;
    uv.x -= (uRatio - 1.0) * .5;

    uv *= .5 + uZoom * 3. - .2 + uAlpha * .2;
    uv += 0.25 - uZoom * 1.5 + .1 - uAlpha * .1;

    uv = mod(uv, 1.);
    vec4 textureColor = texture2D(uTexture, uv);

    // line
    vec3 color = mix(uBgColor, uLineColor, textureColor.r);

    // shine
    vec2 p = vUv;
    // p = p * 1. - .5; // START
    // p = p * 2.0 - 1.; //END
    p = p * (1. + 1. * uZoom) - (.5 + .5 * uZoom);
    p.x *= uRatio;

    float r2 = length(p) * 1.4;
    float timer = uTime / 1.2;
    float a = pow(r2, 2.0);
    float b = sin(r2 * 0.8 - 1.6);
    float c = sin(r2 - 0.010);
    float s = sin(a - timer * 3.0 + b) * c;

    float shine = abs(1.0 / (s * 10.8)) - 0.01;
    shine = min(shine, 1.);

    color = mix(color, uShineBlurColor, textureColor.g * shine); // blur
    color = mix(color, uShineLineColor, textureColor.r * shine); // line

    // vignette
    uv = vUv;
    uv *= 1.0 - vUv.yx;
    float vig = uv.x * uv.y * 10.0; // multiply with sth for intensity
    vig = pow(vig, 0.7); // change pow for modifying the extend of the  vignette

    color = mix(uBgColor, color, vig);

    // set color
    // gl_FragColor = vec4(color, uAlpha);

    //MASK
    uv = vUv;
    uv = uv * 2.0 - 1.0;
    uv.x *= uRatio;

    float l = length(uv);
    float thi = atan(uv.y, uv.x);

    float r = uRadius;
    l = smoothstep(l * .95, l * 1., r);
    vec3 col = vec3(0.0, 0.5, 0.8);

    gl_FragColor = vec4(color, uAlpha * l); //TEMP UITGEZET
    // gl_FragColor = vec4(1.0, 0.0, 0.0, uAlpha * l); //TEMP

    //MASK
    // vec2 p = vUv;
    // p = p * 2.0 - 1.0;
    // p.x *= uRatio;

    // float r = length(p) * 1.4;
    // float timer = uTime / 1.2;
    // float a = pow(r, 2.0);
    // float b = sin(r * 0.8 - 1.6);
    // float c = sin(r - 0.010);
    // float s = sin(a - timer * 3.0 + b) * c;

    // float alpha = abs(1.0 / (s * 10.8)) - 0.01;
    // // gl_FragColor = vec4(alpha, 0.0, 0.0, 1.);
    // // gl_FragColor = vec4(uv.x, uv.y, 0.0, 1.0);

    // // gl_FragColor = vec4(color, uAlpha * alpha);
}`, $v = [
  { x: -8.025, y: -4.825 },
  { x: 6.875, y: -2.75 },
  { x: 4.575, y: 1.375 },
  { x: 1.15, y: 4.8 },
  { x: -6.875, y: 4.125 }
];
class jv extends xe {
  constructor(t, e) {
    super();
    const n = $v[t % 5];
    this.position.x = n.x * 0.135, this.position.y = n.y * 0.135;
    const i = new ei({ map: nt.textureManager.patchGlowMap }), r = new Oi(i);
    let o = 0.36;
    r.scale.set(o, o, o), this.add(r);
    const s = new ei({ map: e }), l = new Oi(s);
    o = 0.17, l.scale.set(o, o, o), this.add(l);
  }
}
class Zv extends xe {
  constructor() {
    super(), this.endPatches = [];
    let t = 0;
    nt.config.json.endPatches.map((e) => {
      const n = nt.textureManager.getTexture(e.texture), i = new jv(t, n.texture);
      this.add(i), t++;
    });
  }
  update(t) {
    this.position.z = (1 - t) * 5.5;
  }
}
class Kv extends xe {
  constructor() {
    super(), nt.main.container.add(this);
    const t = new rn(
      new ea(3.25, 3.25),
      new Pn({
        vertexShader: qv,
        fragmentShader: Yv,
        transparent: !0,
        depthTest: !1,
        uniforms: {
          uTime: { value: 0 },
          uZoom: { value: 0 },
          uRatio: { value: 1 },
          uAlpha: { value: 0 },
          uRadius: { value: 0 },
          uLineColor: { value: new Ot("#016cfe") },
          uShineLineColor: { value: new Ot("#82caff") },
          uShineBlurColor: { value: new Ot("#1064ff") },
          uBgColor: { value: new Ot("#030017") },
          dpr: { value: nt.sizes.pixelRatio },
          uTexture: { value: nt.textureManager.hexagonMap }
        }
      })
    );
    if (nt.settings.debug) {
      const e = nt.gui.addFolder("zoom");
      e.add(t.material.uniforms.uZoom, "value").min(0).max(1).step(1e-3), e.close();
    }
    this.plane = t, this.add(t), this.patches = new Zv(), this.add(this.patches), this.resize();
  }
  resize() {
    const t = window.innerWidth / window.innerHeight;
    this.plane.material.uniforms.uRatio.value = t, this.plane.scale.x = t;
  }
  update() {
    this.plane.material.uniforms.uTime.value = nt.time.elapsed * 3e-4;
    let e = (nt.scrollController.coverageZoomPct - 0.75) * 4;
    e = Math.max(0, e), this.plane.material.uniforms.uAlpha.value = Math.min(1, e), this.plane.material.uniforms.uRadius.value = 0.95 + Math.pow(e, 1.45) * 0.95;
    let n = nt.scrollController.communityEndPct;
    n = Math.max(0, Math.min(1, n)), this.plane.material.uniforms.uZoom.value = n, this.patches.update(n);
  }
}
class Jv {
  constructor(t) {
  }
  init() {
    this.inited = !0, this.caster = new Xv(), this.container = new xe(), nt.scene.add(this.container), this.earth = new Wv(), this.hexa = new Kv();
  }
  playIntro() {
    this.earth.playIntro();
  }
  resize() {
    this.inited && this.hexa.resize();
  }
  update() {
    this.inited && (this.caster.update(), this.earth.update(), this.hexa.update());
  }
}
class Qv {
  constructor(t) {
    this.colorMaps = [], this.earthGradient = nt.textureLoader.load(`${t}textures/earth-gradient.webp`), this.earthMap = nt.textureLoader.load(`${t}textures/earth-map.webp`), this.earthMap.minFilter = Xe, this.bluetoothMap = nt.textureLoader.load(`${t}textures/patch_bluetooth-min.png`), this.cityMap = nt.textureLoader.load(`${t}textures/patch_city-min.png`), this.patchGlowMap = nt.textureLoader.load(`${t}textures/patch_glow-min.png`), this.hexagonMap = nt.textureLoader.load(`${t}textures/hexagon.webp`), this.hexagonMap.minFilter = Me, nt.config.json.textures.map(({ id: e, ratio: n, file: i }) => {
      this.colorMaps.push({
        id: e,
        ratio: n,
        texture: nt.textureLoader.load(`${i}`)
      });
    });
  }
  getTexture(t) {
    return this.colorMaps.find((e) => e.id === t);
  }
}
class tx {
  constructor() {
  }
  load(t, e) {
    fetch(`${t}config/config.json`).then((n) => n.json()).then((n) => {
      this.json = n, e && e();
    });
  }
}
class ex {
  constructor() {
    hs(this, "getPosition", (t, e) => {
      console.log(t + ":"), console.log(e);
      const n = e.getBoundingClientRect();
      console.log(n);
    });
    hs(this, "update", () => {
      this.coveragePct = this.followElemenet(this.marker1, this.marker2), this.coverageZoomPct = this.followElemenet(this.marker2, this.marker3), this.communityEndPct = this.followElemenet(this.marker4, this.marker5);
    });
    hs(this, "followElemenet", (t, e) => {
      if (!t || !e)
        return 0;
      const n = window.innerHeight;
      let i = t.getBoundingClientRect();
      const r = i.top + i.height / 2;
      i = e.getBoundingClientRect();
      const s = i.top + i.height / 2 - r;
      return -(r - n) / s;
    });
    this.marker1 = document.querySelector('[data-gl="hero"]'), this.marker2 = document.querySelector('[data-gl="coverage"]'), this.marker3 = document.querySelector('[data-gl="coverage_zoom"]'), this.marker4 = document.querySelector('[data-gl="community_start"]'), this.marker5 = document.querySelector('[data-gl="community_end"]');
  }
  // followElemenet = (element, prevElement) => {
  //   // Get the relevant measurements and positions
  //   if (!element) {
  //     return 0;
  //   }
  //   const viewportHeight = window.innerHeight;
  //   let prevEnd = 0;
  //   if (prevElement) {
  //     const prevBounds = prevElement.getBoundingClientRect();
  //     const prevTop = prevElement.offsetTop;
  //     const prevHeight = prevBounds.height;
  //     prevEnd = prevTop + prevHeight;
  //   }
  //   const bounds = element.getBoundingClientRect();
  //   const elementOffsetTop = element.offsetTop;
  //   const elementTop = bounds.top;
  //   if (prevEnd === 0) {
  //     // console.log(bounds);
  //     // console.log(element.offsetTop);
  //   }
  //   return 1 - (elementTop - viewportHeight) / (elementOffsetTop - prevEnd);
  // };
}
class nx {
  constructor() {
    ar.init(), this.state = "presentation", this.isDarkColorMode = !1, this.scrollPct = 0, this.scrollPctEnd = 0;
  }
  init(t, e, n, i, r) {
    this.canvas = t, this.onIntroFinished = r, this.basePath = e, this.initLoaders(e, n, i), this.config = new tx(), this.config.load(e, this.onConfigLoaded.bind(this));
  }
  // setScale(pct) {
  //   this.main.caster.setScale(pct);
  // }
  addBluetoothCallbacks(t) {
    this.onBluetoothClick = t;
  }
  addCityCallbacks(t, e, n) {
    this.onCityClick = t, this.onCityOver = e, this.onCityOut = n;
  }
  onConfigLoaded() {
    this.scrollController = new ex(), this.settings = new c0(), this.gui = this.settings.init(), this.sizes = new h0(), this.sceneManager = new u0(this.basePath), this.scene = this.sceneManager.init(), this.cameraManager = new Ev(), this.camera = this.cameraManager.init(), this.rendererManager = new Av(), this.renderer = this.rendererManager.init(), this.textureManager = new Qv(this.basePath), this.time = new Cv(this.update.bind(this)), this.main = new Jv(this.basePath), this.settings.debug && (this.stats = j_(), document.body.appendChild(this.stats.dom)), window.addEventListener("resize", this.resize.bind(this)), this.resize();
  }
  initLoaders(t, e, n) {
    this.loadingManager = new bh(), this.textureLoader = new X_(this.loadingManager), this.loadingManager.onLoad = () => {
      this.main.init(), e && e();
    }, this.loadingManager.onProgress = (i, r, o) => {
      const s = r / o;
      n && n(s);
    };
  }
  playIntro() {
    this.main.playIntro(), clearTimeout(this.timeoutId), this.timeoutId = setTimeout(this.enable.bind(this), 3e3);
  }
  cyclePictures(t) {
    this.main.earth.globe.patches.cyclePictures(t);
  }
  enable() {
    this.onIntroFinished && this.onIntroFinished();
  }
  resize() {
    this.sizes.resize(), this.cameraManager.resize(), this.main.resize(), this.rendererManager.resize();
  }
  update() {
    this.cameraManager.update(), this.main.update(), this.scrollController.update(), this.stats && this.stats.update(), this.rendererManager.update();
  }
}
const nt = new nx();
export {
  nt as world
};

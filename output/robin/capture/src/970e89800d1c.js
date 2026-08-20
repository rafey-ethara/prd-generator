/** <Typesetter>.getTransferables **/

troikaDefine(
function getTransferables(C){const A=[];for(let I in C)C[I]&&C[I].buffer&&A.push(C[I].buffer);return A}
)
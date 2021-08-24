/*
let x = 5;
let y = 9;

let resultado = !(x===y)

console.log(resultado)
*/

let x = 10;
let y = "a";
//console.log (y==="b" || x>=10)

let a = 3;
let b = 8;
console.log (!(a == "3" || a === b) && !(b !== 8 && a <= b))
// (!(true || false) && !(false && true))
// (!true && !false)
// false

let srt = ""
let msg = "haha!"
let eBonito = "false"
console.log(!((srt || msg) && eBonito))
// (!(false || true)) && true)
// (false && true)
// false
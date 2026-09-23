console.log("my first jv code");

let x = 10;

let y = "10";

// x iyo y waa isku mid (jawaabta= true)
console.log(x == y);

// x iyo y iskumid ma ahan (jawaabta= false)
console.log(x != y);

// x iyo y waa isku mid values ama qiimo ahaan
// (jawaabta= false > sabto ah x waa number qiimo ahaan y ne waa qoraal caadi ah oo wax qiimo malahan)
console.log(x === y);

// x iyo y isku mid ma ahan value ahan ama qiimo ahaan (jawaabta= true > sabtoo ah x waa numbar y ne waa qoraal caadi ah malahan wax qiimo )
console.log(x !== y);

// x wexee kaweentahay y (jawaabta= false) sabto ah 10 iyo 10 makala weena markii qoraal ahan lo firiyo
console.log(x > y);

// x wee kayartahay y ( jawaabta= false ) sabatoo ah 10 iyo 10 wa isku mid markii qoral ahan loo firiyo
console.log(x < y);

// x we kawentahy ama wa isku mid y (jawaabta= true) ma isla eka lakin waa isku mid
console.log(x >= y);

// x wekayrtahy ama wa iskumid jawaabta= true
console.log(x <= y);

// Logical Operators

let isAdulty = true;
let hasPermission = false;

// && micneheedu waa in labada dhinac ee yihiin true (jawaabt= false) sabto ah haspermission wa false
console.log(isAdulty && hasPermission);

// || macnehedu waa in mid ka mid ah noqdaa true muhim ma ahan inee wada noqdaan true (jawabta= true)
console.log(isAdulty || hasPermission);

// ! micnehedu waa soo saar caksiga marki hore true be eheed hada kadhig flas
console.log(!isAdulty);

let firstName = "ghost";
let lastName = "rbg";

// soo saar firstname waxa kujira
console.log(firstName);

// soo saar waxa kujira lasname
console.log(lastName);

// soo saar waxa kujira firstname iyo lastname ( markan + ku waa isku xer lkn markii number ay noqoto waa iskudar sidas darted imika waa isku xer " " halkaasne waa space udhexeesi)
console.log(firstName + " " + lastName);

// greeting ku keedi hello
let greeting = "hello";

// greeting u badal world
// greeting = "world";

// greeting o markii hore eheet hello kudar world
greeting += "world";

console.log(greeting);

// Function

function greet() {
  console.log("Hi");
}
// jawaabta so bexeesa waa (Hi)
greet();

function greet(name) {
  console.log("Hi " + name);
}
// waxaa isoobaxayya Hi rbg
greet("rbg");

// markan waxan abuurenaa function caculateTotal ah
function calculateTota(price, quantity) {
  console.log("Totalprice: $" + price * quantity);
}
// jawaabta nosobexeso wexee noqonesa (Totalprice: $20)
calculateTota(10, 2);

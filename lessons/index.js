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

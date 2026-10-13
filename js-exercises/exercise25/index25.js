function blocking() {
  alert("looking user data");
  return "comleted";
}
console.log("blockin completed");
console.log(blocking());
console.log("you're done blockin exercise");

function nonblocking(callback) {
  setTimeout(() => {
    callback("its done for none blocking exercise");
  }, 3000);
}
console.log("start non blacking");
(nonblocking((massage) => {
  console.log(massage);
}),
  console.log("your exercise its done"));

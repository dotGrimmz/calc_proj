// Differences between var let and const variable declarations
// console.log("hello world");
// var GrimmzVariable = "this is a globally scoped declared variable";
let letGrimmzVariable = "this is the globally scopped let grimmms var";
if (true) {
  var GrimmzVariable = "this is no longer the same value";
}

console.log(GrimmzVariable);

if (true) {
  const letGrimmzVariable = "This is true as well";
  console.log(letGrimmzVariable);
}
console.log(letGrimmzVariable);
// Only availible inside the scope of the if block statement

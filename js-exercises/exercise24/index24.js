const number = [1, 2, 3];
const allnumbers = [...number, 4, 5, 6];
console.log(allnumbers);

function kudhufasho(...numbers) {
  return numbers.reduce((number1, number2) => number1 * number2, 1);
}
console.log(kudhufasho(20, 20));

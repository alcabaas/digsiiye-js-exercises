let car = {
  model: "2026",
  make: "itly",
  year: 2026,
  start: function () {
    console.log("this car has started " + this.year);
  },
};
console.log(car["model"]);
console.log(car["year"]);
console.log(car["make"]);
car.start();

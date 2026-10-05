const students = [
  { name: "ali", age: 20, city: "mugadisho" },
  { name: "amir", age: 23, city: "jigjiga" },
  { name: "yequb", age: 20, city: "hargeysa" },
];

for (const student of students) {
  for (const key in student) {
    console.log(key, student[key]);
  }

  console.log("----------");
}

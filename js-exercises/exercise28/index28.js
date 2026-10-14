async function fechtJsondta() {
  try {
    console.log("start fachting JSON data ");
    const jsnDta = await fetch("https://jsonplaceholder.typicode.com/users");
    const opjectdata = await jsnDta.json();
    console.log("succsess here is th data", opjectdata);
    console.log("idOne", opjectdata[0].name);
    console.log("Email:", opjectdata[0].email);
  } catch (err) {
    console.log("please try egian", err);
  }
}
fechtJsondta();

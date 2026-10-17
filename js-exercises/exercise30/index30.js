function getusers() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((Response) => Response.json())
    .then((data) => console.log("xogta userska dhameestiran", data))
    .catch((error) => console.log("waxaa dhacay cilad", error));
}
getusers();

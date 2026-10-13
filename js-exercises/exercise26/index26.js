function fetchData() {
  return new Promise((guul, cilad) => {
    setTimeout(() => {
      const success = true;
      if (success) {
        guul("waa lugu guuleystay xogata ");
      } else {
        cilad("wa lugu guul dareestay");
      }
    }, 2000);
  });
}
fetchData()
  .then((message) => {
    console.log("sax", message);
  })
  .catch((Error) => {
    console.log("qalad".Error);
  });

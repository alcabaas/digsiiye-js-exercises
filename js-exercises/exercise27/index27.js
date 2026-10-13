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
async function displayasync() {
  try {
    const xogta = await fetchData();
    console.log(xogta);
  } catch (err) {
    console.log(err);
  }
}
displayasync();

function addItem() {
  const list = document.querySelector("#item");
  const item = document.createElement("li");
  item.textContent = "item3";
  list.appendChild(item);
}
function removeItem() {
  const list = document.querySelector("#item");
  if (list.lastChild) {
    list.removeChild(list.lastElementChild);
  } else {
    alert = "your done!";
  }
}

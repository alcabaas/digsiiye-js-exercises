function changeImage() {
  const img = document.querySelector("img");

  const url = prompt("Enter your image URL");
  const borderColor = prompt("Border color?");
  const width = prompt("Width of the image?");
  const height = prompt("Height of the image?");
  const borderRadius = prompt("Border radius?");

  img.setAttribute("src", url);

  img.style.border = "2px solid " + borderColor;
  img.style.width = width + "px";
  img.style.height = height + "px";
  img.style.borderRadius = borderRadius + "px";
}

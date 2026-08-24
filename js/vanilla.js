const button = document.getElementById("btn");
const span = document.querySelector("span");
let counter = 0;

function handleClick() {
  console.log("i have been clicked");
  counter += 1;
  span.innerText = `Total clicks: ${counter}`;
}
button.addEventListener("click", handleClick);

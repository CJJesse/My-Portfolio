const button = document.querySelector(".button");
const container = document.querySelector(".container");
function btn() {
  if (container.classList.contains("light")) {
    container.classList.remove("light");
    container.classList.add("dark");
  } else {
     container.classList.remove("dark");
    container.classList.add("light");
  }
}
button.addEventListener("click", btn);

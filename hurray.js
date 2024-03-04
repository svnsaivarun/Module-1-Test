const modalhurray = document.querySelector(".game-rules-hurray");
const closemodalhurray = document.querySelector(".close-button-hurray");
const openmodalhurray = document.querySelector(".modal-button-hurray");

// hurray button
openmodalhurray.addEventListener("click", () => {
  modalhurray.style.display = "flex";
});

closemodalhurray.addEventListener("click", () => {
  modalhurray.style.display = "none";
});

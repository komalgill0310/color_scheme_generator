import { getInputValue, generateColorDisplayHTML } from "/js/utils.js";

const seedColor = document.querySelector(".seed-color");
const colorScheme = document.querySelector(".color-scheme");
const getColorSchemeBtn = document.querySelector(".get-color-scheme-btn");

let seedColorValue = seedColor.value;
let colorSchemeValue = colorScheme.value;

seedColor.addEventListener("input", (e) => {
  seedColorValue = getInputValue(e);
});

colorScheme.addEventListener("input", (e) => {
  colorSchemeValue = getInputValue(e);
});

getColorSchemeBtn.addEventListener("click", fetchAndDisplayColors);

function fetchAndDisplayColors() {
  fetch(
    `https://www.thecolorapi.com/scheme?hex=${seedColorValue.slice(
      1
    )}&mode=${colorSchemeValue}`
  )
    .then((response) => response.json())
    .then((data) => {
      document.querySelector(".main-section").innerHTML =
        generateColorDisplayHTML(data);
    });
}

fetchAndDisplayColors();

import { getInputValue, getDisplayColorsHtml } from "/js/utils.js";

const seedColor = document.getElementById("seed-color");
const colorScheme = document.getElementById("color-scheme");
let seedColorValue = seedColor.value;
let colorSchemeValue = colorScheme.value;

seedColor.addEventListener("input", (e) => {
  seedColorValue = getInputValue(e);
});
colorScheme.addEventListener("input", (e) => {
  colorSchemeValue = getInputValue(e);
});

const getColorScheme = document.getElementById("get-color-scheme");

getColorScheme.addEventListener("click", () => {
  console.log(seedColorValue, colorSchemeValue);
  fetch(
    `https://www.thecolorapi.com/scheme?hex=${seedColorValue.slice(
      1
    )}&mode=${colorSchemeValue}`
  )
    .then((response) => response.json())
    .then((data) => {
      document.querySelector(".main-section").innerHTML =
        getDisplayColorsHtml(data);
    });
});

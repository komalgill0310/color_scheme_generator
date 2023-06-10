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

// How to copy text to clipboard?

// handleHexClick();

// function handleHexClick() {
//   const colorHex = document.querySelector(".color-hex");
//   colorHex.addEventListener("click", () => {
//     console.log("color hex was clicked!");
//   });
// }

// When I call the handleHexClick(), I get the below error:
// Uncaught TypeError: Cannot read properties of null (reading 'addEventListener')
// at handleHexClick

// My understanding is that the event will only happen when I click on the hex value, and the element does exist on the DOM.

// Questions:
// 1. Please explain why the error is occuring.
// 2. How can I avoid Vertical scrolling, so the user does not have to scroll in order to view the color detail?

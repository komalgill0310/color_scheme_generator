import {
  getInputValue,
  generateColorDisplayHTML,
  copyToClipboard,
} from "/js/utils.js";

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
      handleColorHexClick();
    });
}

fetchAndDisplayColors();

// Is there a better way to perform the handleColorHexClick?

function handleColorHexClick() {
  const colorsHex = document.querySelectorAll(".color-hex");
  colorsHex.forEach((hexColor) => {
    hexColor.addEventListener("click", (e) => {
      const defaultText = e.target.textContent;
      copyToClipboard(e.target.textContent);
      setTextToCopied(e.target);
      setTextToOriginal(e.target, defaultText);
    });
  });
}

function setTextToCopied(htmlElement) {
  htmlElement.textContent = "Copied!";
}

function setTextToOriginal(htmlElement, originalValue) {
  setTimeout(() => {
    htmlElement.textContent = originalValue;
  }, 1000);
}

// Questions:
// 1. Should I have define the function setTextToCopied, setTextToOriginal in the utils.js?
// 2. How can I avoid Vertical scrolling, so the user does not have to scroll in order to view the color detail?

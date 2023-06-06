const seedColor = document.getElementById("seed-color");
const colorScheme = document.getElementById("color-scheme");
let seedColorValue = seedColor.value.slice(1);
let colorSchemeValue = colorScheme.value;

seedColor.addEventListener("input", (e) => {
  e.preventDefault();
  seedColorValue = e.target.value.slice(1);
  return seedColorValue;
});

colorScheme.addEventListener("input", (e) => {
  e.preventDefault();
  colorSchemeValue = e.target.value;
  return colorSchemeValue;
});

const getColorScheme = document.getElementById("get-color-scheme");

getColorScheme.addEventListener("click", () => {
  console.log(seedColorValue, colorSchemeValue);
  fetch(
    `https://www.thecolorapi.com/scheme?hex=${seedColorValue}&mode=${colorSchemeValue}`
  )
    .then((response) => response.json())
    .then((data) => console.log(data));
});

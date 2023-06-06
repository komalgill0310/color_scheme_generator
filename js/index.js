const seedColor = document.getElementById("seed-color");
seedColor.addEventListener("input", (e) => {
  e.preventDefault();
  console.log(seedColor.value);
});

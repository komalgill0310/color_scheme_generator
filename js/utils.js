function getInputValue(e) {
  return e.target.value;
}

function generateColorDisplayHTML(data) {
  return data.colors
    .map((color) => {
      const { hex, name } = color;
      return `
      <div class="color">
        <div class="color-background" style="background-color: ${hex.value}"></div>
        <div class="color-details">
          <p class="color-hex">${hex.value}</p>
          <p class="color-name">${name.value}</p>
        </div>
      </div>
    `;
    })
    .join("");
}

export { getInputValue, generateColorDisplayHTML };

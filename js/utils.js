function getInputValue(e) {
  return e.target.value;
}

function getDisplayColorsHtml(data) {
  let html = "";
  for (let color of data.colors) {
    const { hex, name } = color;
    html += `
      <div class="color">
        <div class="background-color" style="background-color: ${hex.value}"></div>
        <div class="color-info">
          <p class="color-hex-value">${hex.value}</p>
          <p class="color-name-value">${name.value}</p>
        </div>
      </div>`;
  }
  return html;
}

export { getInputValue, getDisplayColorsHtml };

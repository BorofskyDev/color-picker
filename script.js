const colorScheme = document.getElementById('color-picker');

let colorsArray = [];
let colorImg = '';

function renderColors() {
  let colors = '';
  let codes = ''
  for (let color of colorsArray) {
    colors += `<div class="colors" style="background-color:${color.hex.value}"></div>`;
    codes += `<p  class="color-codes">${color.hex.value}</p>`;
  }
  document.getElementById('colors-container').innerHTML = colors;
  document.getElementById('code-container').innerHTML = codes;
}

colorScheme.addEventListener('submit', (e) => {
  e.preventDefault();
  let color = document.getElementById('color').value.replace('#', '');
  let scheme = document.getElementById('schemes').value;
  let quantity = document.getElementById('quantity').value;
  color.replace('#', '');
  fetch(
    `https://www.thecolorapi.com/scheme?hex=${color}&mode=${scheme}&count=${quantity}`
  )
    .then((res) => res.json())
    .then((data) => {
      colorsArray = data.colors;
      colorImg = data.image.named;

      renderColors();
    });
});

// style = 'background-color:${color.hex.value}';

const colorScheme = document.getElementById('color-picker');

let colorsArray = [];
let colorImg = '';

function renderColors() {
  let colors = '';
 
  for (let color of colorsArray) {
    colors += `
        <div class="card">
            <div class="colors" style="background-color:${color.hex.value}">.</div>
            <div  class="color-codes">${color.hex.value}</div>
        </div>`;
    
    
  }
  document.getElementById('colors-container').innerHTML = colors;

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

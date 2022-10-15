const colorScheme = document.getElementById('color-picker');


let colorsArray = []
let colorImg = ''

function renderColors(){
    let html = ""
    for (let color of colorsArray) {
        html += `
            <img src='${colorImg}' />
           <p>${color.hex.value}</p>
        `
        
    }
    document.getElementById('color-container').innerHTML = html

}

colorScheme.addEventListener('submit', (e) => {
  e.preventDefault();
  let color = document.getElementById('color').value.replace('#', '');
  let scheme = document.getElementById('schemes').value
  let quantity = document.getElementById('quantity').value
  color.replace('#',"")
  fetch(`https://www.thecolorapi.com/scheme?hex=${color}&mode=${scheme}&count=${quantity}`)
    .then((res) => res.json())
    .then((data) => {
        colorsArray = data.colors
        colorImg = data.image.named
        renderColors()
       console.log(data)
      
    }); 
    
});


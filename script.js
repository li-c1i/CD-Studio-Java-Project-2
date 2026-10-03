

const numbers = document.getElementById("numbers");
const fonts = [
  "Courier","Georgia","Impact","Helvetica",
  "Times New Roman","Futura","Instrument Serif","Arial",
  "Prata"
];

const colors = ['magenta', 'orange', 'yellow', 'red', 'lightblue', 'pink'];

for (let i = 0; i < 100; i++) {
  const number = document.createElement("div");
  number.classList.add("number");

  number.textContent = Math.floor(Math.random() * 10);

  const font = fonts[Math.floor(Math.random() * fonts.length)];
  const size = Math.floor(Math.random() * 60) + 20;
  const color = colors[Math.floor(Math.random() * colors.length)];
  const rotate = Math.floor(Math.random() * 61) - 30;
  

  number.style.fontFamily = font;
  number.style.fontSize = size + "px";
  number.style.color = color;
  number.style.transform = `rotate(${rotate}deg)`;


  if ((i + 1) % 10 === 0) {
    number.style.fontWeight = "bold";
    number.style.textDecoration = "underline";
  }
  numbers.appendChild(number);
  
}


const backgrounds = ['gray', 'blue', 'black', 'green', 'purple', 'brown', 'teal', 'navy', 'maroon',];

const background = backgrounds[Math.floor(Math.random() * backgrounds.length)];

document.body.style.backgroundColor = background;

document.addEventListener("click", function() {
  location.reload();
});


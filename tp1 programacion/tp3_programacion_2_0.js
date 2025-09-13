let imagen;
let cant = 10; // cantidad de filas/columnas
let tam;// ex variable int

function pintarCuadrados(par, invertir, posX, posY, tam) {
  if (par ^ invertir) {
    fill(0);
  } else {
    fill(255);
  }
  rect(posX, posY, tam, tam);
}

// function declarar funciones
 
function pintarCirculo(par, invertir, posX, posY, tam) {
  if (par ^ invertir) {
    fill(255);
  } else {
    fill(0);
  }
  ellipseMode(CENTER);
  ellipse(posX + tam / 2, posY + tam / 2, tam * 0.5, tam * 0.5);
}

function calcularPosX(tamañoImagen, x, tam) {
  return tamañoImagen + x * tam;
}

function calcularPosY(y, tam) {
  return y * tam;
}

function preload() {
  imagen = loadImage("programaciontp3.png"); // asegurate que esté en la misma carpeta
}

function setup() {
  createCanvas(800, 400);
  tam = (width - 400) / cant;
}

function draw() {
  background(255);
  image(imagen, 0, 0);

  for (let x = 0; x < cant; x++) {
    for (let y = 0; y < cant; y++) {
      let posX = calcularPosX(400, x, tam);
      let posY = calcularPosY(y, tam);
      let par = (x + y) % 2 == 0;

      let invertirFactor = map(mouseX, 0, 800, 0, 1);
      let invertir = invertirFactor > 0.5;

      pintarCuadrados(par, invertir, posX, posY, tam);
      pintarCirculo(par, invertir, posX, posY, tam);
    }
  }
}

let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro/2;
let xRaquete = 5;
let yRaquete = 150;
let comprimentoRaquete = 10;
let alturaRaquete = 90;

let veloBolinhaX = 5;
let veloBolinhaY = 5;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  MostrarBolinha()
  VelocidadeBolinha()
  MovimentoBolinhaBorda()
  MostrarRaquete()
  MovimentoRaquete()
  VerificaColisaoRaquete()
}




function MostrarBolinha(){
  circle(xBolinha,yBolinha,diametro)
}

function VelocidadeBolinha(){
  xBolinha += veloBolinhaX
  yBolinha += veloBolinhaY
}

function MovimentoBolinhaBorda(){
  if (xBolinha + raio > width || xBolinha - raio < 0){
    veloBolinhaX *= -1;
  }
  
  if (yBolinha + raio > height || yBolinha - raio < 0){
    veloBolinhaY *= -1;
  }
}

function MostrarRaquete(){
  rect(xRaquete,yRaquete,comprimentoRaquete,alturaRaquete);
}

function MovimentoRaquete(){
  if (keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  }
  if (keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  }
}

function VerificaColisaoRaquete(){
  if (xBolinha - raio < xRaquete + comprimentoRaquete && yBolinha - raio < yRaquete + alturaRaquete && yBolinha + raio > yRaquete){
    veloBolinhaX += 1;
  }
}
var screen1;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  screen1 = new Screen();
}

function draw() {
  background(255,255,255);  
  screen1.display();
  drawSprites();
}


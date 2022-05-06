var back_ground, backgroundImage;
var mofo, mofoImage;
var inimigoMofo, inimigoMorfoImage;
var pão, pão_imagem;
var gaveta, gavetaImagem;
var chão;

function preload() {
  backgroundImage = loadImage("cozinha.png");
  inimigoMorfoImage = loadImage("inimigomofo.png");
  mofoImage = loadImage("mofo.png");
  pão_imagem = loadImage("pão.png");
  gavetaImagem = loadImage("gaveta.png")
}

function setup() {
  createCanvas(1600, 900);

  back_ground = createSprite(1000, -80);
  back_ground.addImage("background", backgroundImage);
  back_ground.scale = 3.0;

  pão = createSprite(1000, 830);
  pão.addImage("pão", pão_imagem);
  pão.scale = 1.5;

  mofo = createSprite(1000, 890);
  mofo.addImage("mofo", mofoImage);
  mofo.visible = false
  mofo.scale = 3.0;

  chão = createSprite(1000, 1080);
  chão.visible = false
  chão.scale = 4;
}

function draw() {
  background(255);
 
    if (keyDown("SPACE")) {
      pão.y -= 25;
    
      
    }

  else if (keyDown("D") && pão.x <= 1180) {
    pão.x += 5;
  }
  else if (keyDown("A") && pão.x >= 830) {
    pão.x -= 5;
  }

  pão.y += 10;


  pão.collide(chão);

  drawSprites();
}
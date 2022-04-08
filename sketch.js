var arrow, arrowImage, backGround, hunter, hunterImage, hunter2Image, leg, legImage, powerUps, handBow, handBowImage;
var cubeFont, MINIFont;
var bowShoot, bowFireShoot, bowPoisonShoot;
let game, hunter1, hunter2;
let hunters = [];

function preload()
{

    cubeFont=loadFont("./Font/04B_03.ttf");
    MINIFont=loadFont("./Font/MINI.ttf");

    backGround = loadImage("./images/background.png");
    arrowImage = loadImage("./images/arrow.png");
    hunterImage = loadImage("./images/body.png");
    legImage = loadImage("./images/leg.png");
    handBowImage = loadImage("./images/leg.png");
    hunter2Image = loadImage("./images/hunter2.png");



}

function setup() 
{
    
  createCanvas(1600,800);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  createSprite(400, 200, 50, 50);
}

function draw() 
{
  background(backGround);

  drawSprites();
}

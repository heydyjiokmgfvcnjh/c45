var bg, bgImg;
var player,shooterImg,shooter_shooting;

function preload(){
shooterImg = loadImage("assets/shooter_2.png")
shooter_shooting = loadImage("assets/shooter_3.png")
bgImg = loadImage("assets/bg.jpeg")

}

function setup (){
createCanvas(windowWidth,windowHeight)
bg = createSprite(displayWidth /2-20, displayHeight /2-40)
bg.addImage(bgImg)
bg.scale = 1.1

player = createSprite(displayWidth - 1150, displayHeight -300,50,50)
player.addImage(shooterImg)
player.scale = 0.3
}

function draw () {
background(0);
drawSprites();
}








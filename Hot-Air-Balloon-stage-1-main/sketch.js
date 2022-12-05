var bg,bgimg
var balloon, balloonImg
function preload() {
bgimg = loadImage("/assets/bg.png")
balloonImg = loadAnimation("/assets/balloon1.png","/assets/balloon2.png","/assets/balloon3.png")

}




function setup() {
createCanvas(windowWidth,windowHeight)
bg = createSprite(165,485,1,1)
bg.addImage(bgimg)

balloon = createSprite(50,700,20,20)
balloon.addAnimation("baloon",balloonImg)
balloon.scale = 0.5

bottomGround = createSprite(200,390,800,20)
bottomGround.visible=false;

}



function draw() {
background("white")

if(keyDown("SPACE")) {
  balloon.velocityY = -6

}
balloon.velocityY += 1






drawSprites()


}
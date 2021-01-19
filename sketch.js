var database;
var baloonJsonTemp;
var badaBoiBaloon;
var baloonScaleTemp
var bg;
var baloonAni;

function setup() {
  database=firebase.database();
  bg=loadImage("Images/bg.png");
  createCanvas(800,400);
  baloonAni=loadImage("Images/ballonImg2.png")
  badaBoiBaloon=createSprite(250,250,50,50);
  baloonAni=loadImage("Images/ballonImg2.png")
  baloonJsonTemp=database.ref("Baloon/Pos");
  baloonJsonTemp.on("value",readPos)
  
}

function draw() {
  background(bg);
  
  if(keyDown(LEFT_ARROW)){
    writePos(-1,0);
}
else if(keyDown(RIGHT_ARROW)){
    writePos(1,0);
}
else if(keyDown(UP_ARROW)){
    writePos(0,-1);
    badaBoiBaloon.addAnimation("ballonImg2",baloonAni);
    badaBoiBaloon.scale=badaBoiBaloon.scale-0.01
}
else if(keyDown(DOWN_ARROW)){
    writePos(0,+1);
    badaBoiBaloon.addAnimation("ballonImg2",baloonAni);
    badaBoiBaloon.scale=badaBoiBaloon.scale+0.01
}  
  drawSprites();
}



function readPos(posData){
position=posData.val();
badaBoiBaloon.x=position.x;
badaBoiBaloon.y=position.y;
}

function writePos(x,y){
  database.ref("Baloon/Pos").set({
    'x':badaBoiBaloon.x+x,
    'y':badaBoiBaloon.y+y
  })
}

function keyPressed(){
  if(keyCode===32){
    writePos(256,256);
  }
  
}

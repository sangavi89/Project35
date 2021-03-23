var balloon
var balloonimg,backgroundimg
var database,position
function preload(){
  balloonimg=loadAnimation("pro-C35 images/Hot Air Ballon-03.png","pro-C35 images/Hot Air Ballon-02.png","pro-C35 images/Hot Air Ballon-04.png")
  backgroundimg=loadImage("pro-C35 images/Hot Air Ballon-01.png")
}


function setup() {
  database=firebase.database()
  createCanvas(displayWidth,displayHeight);
 balloon= createSprite(400, 200, 50, 50);
  //balloon.addAnimation(balloonimg)
  var balloonposition=database.ref('balloon/position')
  balloonposition.on("value",readposition)
}

function draw() {
  background(backgroundimg);  
  if(keyDown(LEFT_ARROW)){
    changePosition(-1,0);
}
else if(keyDown(RIGHT_ARROW)){
    changePosition(1,0);
}
else if(keyDown(UP_ARROW)){
    changePosition(0,-1);
    balloon.scale=0.5
}
else if(keyDown(DOWN_ARROW)){
    changePosition(0,+1);
}

  drawSprites();


}
function changePosition(x,y){
  database.ref('balloon/position').set({
 'x':position.x+x,
 'y':position.y+y,

})
}
function readposition(data){
    position=data.val()
    balloon.x=position.x
    balloon.y=position.y
}


var sprite;

function setup() {
  createCanvas(400,400);
   sprite = createSprite(100,100,40,40);
}

function draw() 
{
  background(30);

 if(keyDown("up")){
   sprite.y = sprite.y -3;
 }
 if(keyDown("down")){
  sprite.y = sprite.y +3;
}
if(keyDown("right")){
  sprite.x = sprite.x +3;
}
if(keyDown("left")){
  sprite.x = sprite.x -3;
}
 drawSprites();

}

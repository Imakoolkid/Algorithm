var fixedSprite, movingSprite
function setup() {
  createCanvas(1200,800);
  fixedSprite = createSprite(200,200,50,80);
  fixedSprite.shapeColor = "green";
  movingSprite = createSprite(400,200,80,30);
  movingSprite.shapeColor = "green"


}


function draw() {
  background(0,0,0);
  
  movingSprite.y = mouseY;
  movingSprite.x = mouseX;

  if(fixedSprite.x-movingSprite.x < fixedSprite.width/2 + movingSprite.width/2 && 
    movingSprite.x-fixedSprite.x < movingSprite.width/2 + movingSprite.width/2 &&
    fixedSprite.y-movingSprite.y < fixedSprite.height/2 + movingSprite.height/2 &&
    movingSprite.y-fixedSprite.y < movingSprite.height/2 + fixedSprite.height/2)
    {
      movingSprite.shapeColor = "red";
      fixedSprite.shapeColor = "red";
    }

  else
  {
    movingSprite.shapeColor = "green";
    fixedSprite.shapeColor = "green";
  }  
  drawSprites();
}
var monkey , monkey_running,monkey_collided
var ground,invisibleGround
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score = 0

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  
  createCanvas(400, 400);

  
  monkey = createSprite(100,380,20,20);
  monkey.addAnimation("run",monkey_running);
  
  monkey.scale = 0.1;

  ground = createSprite(200,380,800,20);
  ground.velocityX = -1;
  ground.x = ground.width/2;
  
  
 
 
  
}


function draw() {
  background("white");
  textSize(20)
  text("Survival Time: "+ score, 200,50);
  
 
   monkey.velocityY = monkey.velocityY + 0.8
  
  
  if(keyDown("space")&& monkey.y > 100) {
        monkey.velocityY = -8;
  
  }
  
   monkey.collide(ground);
  
  if(ground.x<0){
     ground.x = ground.width/2;
  }
  
   score = score + Math.round(getFrameRate()/60);
  
  fruits();
  obstacles();
drawSprites();
}

function fruits(){
 if (frameCount % 80 === 0){
   var banana = createSprite(200,120,20,20);
   banana.addImage(bananaImage);
   banana.y = Math.round(random(120,200));
   banana.scale = 0.1;
   banana.velocityX = -5;
   banana.lifetime = 30;
 }
}

function obstacles(){
 if (frameCount % 300 === 0){
   var obstacle = createSprite(200,360,20,20);
   obstacle.addImage(obstaceImage);
   obstacle.scale = 0.1;
   obstacle.velocityX = -5;
   obstacle.lifetime = 100;
 }
}
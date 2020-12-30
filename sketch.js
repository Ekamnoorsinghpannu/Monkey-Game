//EKAMNOOR SINGH PANNU

var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  createCanvas(400,400)

  monkey = createSprite(120,310,20,20);
  monkey.addAnimation("runing",monkey_running);
  monkey.scale=0.1
  monkey.debug=true
  
  ground = createSprite(200,350,400,15);
 
  FoodGroup = new Group();
  obstacleGroup = new Group();
  
}


function draw() {

 background("white");
  
monkey.collide(ground);
  
  if (ground.x > 0) {
    ground.x = width / 2
  }
     
  if (keyDown("space")) {
    monkey.velocityY = -12;
  }
  
  monkey.velocityY += 0.8;
  
  if (monkey.isTouching(obstacleGroup)) {
    FoodGroup.setLifetimeEach(-1);
    obstacleGroup.setLifetimeEach(-1);
    FoodGroup.setVelocityXEach(0);
    obstacleGroup.setVelocityXEach(0);
    ground.velocityX=0;
    monkey.velocityY=0;
    survivalTime=0;
  }
  
  food();
  obstacle();
  
  drawSprites();
  
   stroke("black");
  textSize(20);
  fill("black")
  survivalTime = Math.ceil(frameCount / frameRate())
  text("SurvivalTime:" + survivalTime, 100, 50)
              
  stroke("black");
  textSize(20);
  fill("white")
  text("score:" + score, 500, 50)
  
}

function food() {
  if (frameCount % 80 == 0) {
    //creating banana sprite and adding image to it
    banana = createSprite(400, Math.round(random(120, 200)));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -4;
    banana.lifetime = 100;
    FoodGroup.add(banana);
    banana.depth = monkey.depth;
    monkey.depth += 1;
  }
}

function obstacle() {
  if (frameCount % 140 === 0) {
    //creating obstracle sprite and adding image to it
    rock = createSprite(400, 330);
    rock.addImage(obstacleImage);
    rock.scale = 0.1;
    rock.velocityX = -4;
    rock.lifetime = 100;
    obstacleGroup.add(rock);
  }
}



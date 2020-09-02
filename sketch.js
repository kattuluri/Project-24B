var drop1, drop2, drop3, paperBall, drop1Body, drop2Body, drop3Body
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(1200, 700);
    engine = Engine.create();
	world = engine.world;
	
	drop1 = new drop(615,665,80,10);
	drop2 = new drop(565,640,10,70);
	drop3 = new drop(660,640,10,70);
    paperBall = new paper(400,680);
    
    groundSprite=createSprite(600,680,800,20);
	groundSprite.shapeColor="tan"; 
	
	ground = Bodies.rectangle(width/2, 690, width, 10 , {isStatic:true} );
	World.add(world, ground);
	
	Engine.run(engine);
  
}


function draw() {
   rectMode(CENTER);
   background(0);
   paperBall.display();
   drop1.display();
   drop2.display();
   drop3.display();
   drawSprites();
}
function keyPressed(){
	if (keyCode === UP_ARROW){
	   Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:70,y:-400})
	}
}



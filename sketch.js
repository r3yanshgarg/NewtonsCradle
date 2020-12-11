
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{}

function setup() {
	createCanvas(800, 700);

	bobObject1 = new Bob(250, 400, 75)
	bobObject2 = new Bob(325, 400, 75)
	bobObject3 = new Bob(400, 400, 75)
	bobObject4 = new Bob(475, 400, 75)
	bobObject5 = new Bob(550, 440, 75)

	rope1 = new rope(bobObject1.body, roofObject.body, -bobDiameter*2,0)
	rope2 = new rope(bobObject2.body, roofObject.body, -bobDiameter*2,0)
	rope3 = new rope(bobObject3.body, roofObject.body, -bobDiamater*2,0)
	rope4 = new rope(bobObject4.body, roofObject.body, -bobDiamater*2,0)
	rope5 = new rope(bobObject5.body, roofObject.body, -bobDiameter*2,0)

	roofObject = new Roof(400, 150, 375, 40)

	ground1 = new Ground



	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  bobObject1.display();
  bobObject2.display()
  bobObject3.display()
  bobObject4.display()
  bobObject5.display()

  rope1.dislpay()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()

  roofObject.display()

  ground1.display()

  drawSprites();
}



function keyPressed() {
	if (keyCode === 38){
	  bobObject1.velocityY = bobObject1.velocityY + 60,
	  bobObject1.velocityX = bobObject1.velocityX + 60
	}
}




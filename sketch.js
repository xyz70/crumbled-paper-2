
var dora, doraImage;
var bg, bgImage;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground1,box1,box2,box3,paper1

function preload()
{
	boximage = loadImage('box.png');
	doraImage = loadImage("dora.png")
	bgImage = loadImage("bg.jpg");
}

function setup() {
	createCanvas(1400, 700)
	
	
	
	rectMode(CENTER);
	

	engine = Engine.create();
	world = engine.world;
	


	
	box1 = new Box(1100,495,150,15);
	box2 = new Box(1185,420,15,170);
	box3 = new Box(1015,420,15,170);
	
	ground1 = new Ground(700,550,1400,30);
	
	paper1 = new Paper(200,300);
	
	 Engine.run(engine);
	 
  
}


function draw() {
	background("lightblue");
	textSize(30);
	fill("black")
	text("Press up arrow key to throw the paper into the dustbin", 300, 200);
	
	
	

	Engine.update(engine);
	
	
	
	ground1.display();
	box3.display();
	box1.display();
	box2.display();
	image(boximage,1000,330,200,200);
	paper1.display();
	
 
}

	function keyPressed()	{
		if(keyCode===UP_ARROW)	{
			Matter.Body.applyForce(paper1.body,paper1.body.position,{x:110,y:-110});

		}
	}




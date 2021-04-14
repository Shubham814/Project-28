
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var paper1;
var ground1;

var bin1,bin2,bin3;

let binImg;

function preload(){
	binImg = loadImage("bin.png");
}

function setup() {
	createCanvas(windowWidth, windowHeight);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   paper1  = new paper(200,height-200,40);
   ground1 = new ground(width/2,height-100,width,10);

   bin1 = new bin(1100,height-120,200,20);
   bin2 = new bin(1010,height-210,20,200);
   bin3 = new bin(1190,height-210,20,200);

   sling1 = new launcher(paper1.body,{x:300 , y:400});
   

   
   

	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background(100);
  Engine.update(engine);
  
    //display all bodies
    ground1.display();
 	bin1.display();
 	bin2.display();
 	bin3.display(); 
    paper1.display();
	sling1.display();
 	
    //making image
	image(binImg,1000,height-312,220,210);



  drawSprites();
}

function mouseDragged(){
    Matter.Body.setPosition(paper1.body,{x:mouseX , y: mouseY});
}


function mouseReleased(){
    sling1.fly();
}



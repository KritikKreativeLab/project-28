
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var platform, tree;
var mango1, mango2, mango3;
var boy, slingshot, stone;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	platform = new Ground(50, 700, 2000, 50);
	tree = new Tree(750,450,300,500);
	boy = new Boy(150,640,100,150);

	mango1 = new Mango(620,390,5);
	mango2 = new Mango(750,350,5);
	mango3 = new Mango(750,300,5);
	mango4 = new Mango(850,400,5);
	mango5 = new Mango(800,350,5);
	mango6 = new Mango(700,300,5);
	mango7 = new Mango(850,350,5);

	stone = new Stone(120,600,5);

    slingshot = new SlingShot(stone.body,{x:120, y:600});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);

  background(175);
  
  boy.display();
  tree.display();
  platform.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  stone.display();
  slingshot.display();
  
}

function mouseDragged(){
	Matter.Body.setPoistion(stone.body,{x:mouseX, y:mouseY});
  }

function mouseReleased(){
	slingshot.fly();
	Matter.Body.applyForce(stone.body, stone.body.position, {x:10, y:-6});
	if(mango1.isTouching(stone)){
        Matter.Body.setStatic(mango1, false);
	}
  }


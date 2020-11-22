const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;



var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16,b17,b19,b20;
var block1,block2,ball1,backgroundIMG,rope;


function preload(){
  backgroundIMG = loadImage("bg2.jpg")
}


function setup() {
  createCanvas(1450,600);
  
engine = Engine.create();
world = engine.world;


  block1 = new BLOCK(905,200,500,40)
  block2 = new BLOCK(685,455,420,40);
  b1 = new CHOCO(740,190,130,100);
  b2 = new CHOCO(835,190,130,100);
  b3 = new CHOCO(930,190,130,100);
  b4 = new CHOCO(1025,190,130,100);
  b5 = new CHOCO(990,151,130,100);
  b6 = new CHOCO(810,151,130,100);
  b7 = new CHOCO(900,151,130,100);
  b8 = new CHOCO(845,110,130,100);
  b9 = new CHOCO(945,110,130,100);
  b10 = new LAPTOP(890,70,130,100);
b11 = new LAPTOP(570,420,130,90);
b12 = new LAPTOP(640,420,130,90);
b13 = new LAPTOP(710,420,130,90);
 b14 = new LAPTOP(780,420,130,90); 
 b15 = new MOBILE(610,340,130,90);
 b16 = new MOBILE(680,340,130,90);
 b17 = new MOBILE(750,340,130,90);
 b19 = new CHOCO(670,270,130,100);
 b20 = new BASECLASS(710,570,7777,50);

 ball1 = new BALL(200,400,40);
rope = new Rope(ball1.body,{x:200,y:320});
 
  Engine.run(engine);
}

function draw() {
 background(backgroundIMG)
  
 
  
 block1.display();
 block2.display();
b1.display();
b2.display();
b3.display();
b4.display();
b5.display();
b6.display();
b7.display();
b8.display();
b9.display();
b10.display();
b11.display();
b12.display();
b13.display();
b14.display();
b15.display();
b16.display();
b17.display();
b19.display();
ball1.display();
rope.display();
b20.display();

detectCollision(ball1,b1);
detectCollision(ball1,b2);
detectCollision(ball1,b3);
detectCollision(ball1,b4);
detectCollision(ball1,b5);
detectCollision(ball1,b6);
detectCollision(ball1,b7);
detectCollision(ball1,b8);
detectCollision(ball1,b9);
detectCollision(ball1,b10);
detectCollision(ball1,b11);
detectCollision(ball1,b12);
detectCollision(ball1,b13);
detectCollision(ball1,b14);
detectCollision(ball1,b15);
detectCollision(ball1,b16);
detectCollision(ball1,b17);
detectCollision(ball1,b19);

 drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(ball1.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  rope.fly();
}
function keyPressed(){
  if(keyDown === 32){

  }
}
function detectCollision(lball,lb){
console.log(lball.body.circleRdius)
bBodyPosition = lb.body.position;
ballBodyPosition = lball.body.position;

var distance = dist(ballBodyPosition.x,ballBodyPosition.y,bBodyPosition.x,bBodyPosition.y);
console.log(distance);
s = lball.body.circleRdius+lb.body.circleRadius;
if(distance <=s){
  Matter.Body.setStatic(lb.body,false);
}
}
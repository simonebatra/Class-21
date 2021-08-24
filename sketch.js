const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var ballOptions;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var right_bt, up_bt;

  right_bt=createImg('right.png');
  right_bt.position(220, 30);
  right_bt.size(50, 50);
  right_bt.mouseClicked(horizontal_force);

  up_bt=createImg('up.png');
  up_bt.position(280, 30);
  up_bt.size(50, 50);
  up_bt.mouseClicked(vertical_force);
  
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
 
  ballOptions={
    restitution:0.95
  }

  ball=Bodies.circle(200, 100, 20, ballOptions);
  World.add(world, ball);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ellipse(ball.position.x, ball.position.y, 20);

  ground.show();
  top_wall.show();
  left.show();
  right.show();
  Engine.update(engine);
}

function horizontal_force(){
  Matter.Body.applyForce(ball, {x:0, y:0}, {x:0.05, y:0});
}

function vertical_force(){
  Matter.Body.applyForce(ball, {x:0, y:0}, {x:0, y:-0.05});
}
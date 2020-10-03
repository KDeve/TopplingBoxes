const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, box;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;


    box=new Box(200,200,30,30);
    box2=new Box(210,250,30,30);
    ground=new Ground(200,350,400,20)
    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
   
    box.display();
    box2.display();
    ground.display();
}
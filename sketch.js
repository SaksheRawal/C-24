const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(750,700,50,50);
    box2 = new Box(900,700,50,50);
    ground = new Ground(600,790,1200,20);
    pig1 = new Pig(825,700);
    log1 = new Log(100,200,200,PI/2);
    bird1 = new Bird(100,100);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    bird1.display();
}
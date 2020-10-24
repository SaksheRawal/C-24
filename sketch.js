const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,750,50,50);
    box2 = new Box(850,750,50,50);
    ground = new Ground(600,790,1200,20)
    pig1 = new Pig(775,750);
    log1 = new Log(775,700,250,PI/2);
    box3 = new Box(700,650,50,50);
    box4 = new Box(850,650,50,50);
    pig2 = new Pig (725,650);
    log2 = new Log(775,600,250,PI/2);
    box5 = new Box(775,550,50,50);
    log3 = new Log(737,550,100,PI/4);
    log4 = new Log(812,550,80,3*PI/4);
    bird = new Bird(0,0);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
    bird.display();
    
}


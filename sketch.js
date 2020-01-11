const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var pig1,pig2;
var log1,log2,log3,log4;
var bird1;

function setup(){
    var canvas = createCanvas(1200,400);
    
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(190,350,50,50);
    box2 = new Box(310,350,50,50);
    pig1 = new Pig(250,350);
    log1 = new Log(250,300,170,PI/2);

    box3 = new Box(190,250,50,50);
    box4 = new Box(310,250,50,50);
    pig2 = new Pig(250,250);
    log2 = new Log(250,150,170,PI/2);

    box5 = new Box(230,50,50,50);
    log3 = new Log(210,50,105,PI/7);
    log4 = new Log(275,50,105,-PI/7);

    bird1 = new Bird(50,50);

    ground = new Ground(600,height,1200,20);
}

function draw(){
    background(0);
    Engine.update(engine);
    
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    
    box1.display();
    box2.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig2.display();
    log2.display();

    box5.display();
    log3.display();
    log4.display();

    bird1.display();

    ground.display();
}
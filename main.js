const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var pirulito;

function setup(){
    var canvas = createCanvas(700,400);
    engine = Engine.create();
    world = engine.world;


    //floor & walls
    ground = new Ground(350,413,700, 25);
    wall1 = new Ground(65, 200, 25, 400);
    wall2 = new Ground(635, 200, 25, 400);

    //wrecking ball :]  :]
    ball = new Ball(145,85, 45);

    //rope
    rope = new Rope(ball.body, {x:350, y:100});

    //player1
    chara = new Player1(350,350, 32, 42);
}

function preload(){
    pirulito = loadImage("pirulito.png");
}

function draw(){
    background(pirulito);
    Engine.update(engine);

    //displays
    ground.display();
    wall1.display();
    wall2.display();
    ball.display();
    rope.display();
    chara.display();
}


function keyPressed(){

    if(keyCode == 65){
        Matter.Body.applyForce(chara.body, chara.body.position, {x:-0.015, y:0});
    }
    if(keyCode == 68){
        Matter.Body.applyForce(chara.body, chara.body.position, {x:0.015, y:0});
    }

    //player2
    if(keyCode == 32){
        Matter.Body.applyForce(ball.body, ball.body.position, {x: -15, y:-15})
    }
}

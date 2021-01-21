/*
CLASS 23:
CREATING BLUEPRINTS
        -- BLUEPRINTS ARE PROGRAMATICALLY CALLED AS CLASS
        --IN CLASS, WE WILL HAVE A PROPERTY AND FUNCTION HOW OUR OBJECT SHOULD BE
        --USING CLASS, WE CAN DESIGN MANY OBJECTS WE WANT.
        --WHILE WE ARE CREATING THE OBJECT, WE CAN CHANGE SOME OF THE PROPERTY OF THE OBJECTS.
        --BUT WE CANNOT CHANGE THE FUNCTION OF THE OBJECTS.
        --SPRITES ALSO CALLED AS OBJECTS
        --GOING TO CREATE OBJECTS USING PHYSICS ENGINE(BODIES:RECTANGLE, CIRCLE, POLYGON)
        --SINCE IT WILL HAVE ALL THE PHYSICS PROPERTIES
TODAY GOAL:
        --CREATE A BOX CLASS(BOX BLUEPRINT)
        --ADD THAT BOX TO THE PHYSICS WORLD
        --WE ARE GOING TO TUNE THE PHYSICS PROPERTIES

*/
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
//var ground, ball;
var box1;
var land;
function setup(){
    var canvas = createCanvas(800,800);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,100,50,50);
    box2 = new Box(100,50,50,100);
    land = new Ground(200,350,400,10);
    //console.log(ground);
}

function draw(){
    background("yellow");
    Engine.update(engine);
    
    box1.display();
    box2.display();
    land.display();
}
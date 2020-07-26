/*Project 20 -The Global Car Safety Organisation wants to test cars for safety and reliability in the event of a
crash */

var car,wall;
var speed,weight;


function setup() {
  createCanvas(1600,400);
  car=createSprite(50, 200, 50, 50);
  speed=random(55,90);
  weight=random(400,1500);
  car.shapeColor= color(255,255,255);
  wall=createSprite(1500, 200, 60, height/2);
  wall.shapeColor= color(0,0,200);
}
 
function draw() {
  
  background(0);  
  drawSprites(); //To show the car and wall before collision

  car.velocityX=speed; //To move the car so that it can collide

  //Formula to check collision
  if(wall.x-car.x <(car.width+wall.width)/2){
    
    car.velocityX=0; //To stop the car after colliding with wall
    car.x=1450; //To display the car at a fixed position after touching the wall

    var deformation=(0.5 * weight * speed* speed)/22500;

    // Based on deformation calculation, give the colors to car

    if(deformation>180){
      car.shapeColor=color(255,0,0);  // Red
    }

    if(deformation<180 && deformation >100){
      car.shapeColor=color(230,230,0); //Yellow
    }

    if(deformation<100){
        car.shapeColor=color(0,255,0); //Green
    }

    drawSprites();
  }
}
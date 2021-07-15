const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var b1, b2, b3, b4;
var h1, h2, h3, h4, h5, h6, h7, h8;
var stick;
var P1ball1, P1ball2, P1ball3, P1ball4, P1ball5, P1ball6, P1ball7;
var P2ball1, P2ball2, P2ball3, P2ball4, P2ball5, P2ball6, P2ball7;
var CommonLastBall;
var tempBall;
var mainball;
var bg, bgImg;
var mx, my;
var no = 1;
var balls = [];
var goal = 0;
var holeSound, stickSound, borderSound, balltoballSound;
var gameState = 0;


var P1score = 0;
var P2score = 0;
var border = [];
var redball = [];
var yellowball = [];

function preload (){

  holeSound = loadSound("Hole.wav");
  stickSound = loadSound("Strike.wav");
  borderSound = loadSound("Side.wav");
  balltoballSound = loadSound("BallsCollide.wav");

 


}


function setup() {
  createCanvas(900,1600);

  
 /* 
  
  bg = createSprite(450, 800, 450, 550);
  bg.addImage("qw", bgImg);
  bg.scale = 0.83;

  */


  //createSprite(400, 200, 50, 50);



  engine = Engine.create();
  world = engine.world;




   bg = new backGround(450, 800, 900, 1600);
 

  b1 = new Border(47, 430, 30, 660);
  b2 = new Border(450, 33, 700, 30);
  b3 = new Border(855, 430, 30, 660);
  b4 = new Border(450, 1565, 700, 30);
  b5 = new Border(47, 1170, 30, 660);
  b6 = new Border(855, 1170, 30, 660);
  border = [b1,b2,b3,b4,b5,b6];

  

  h1 = new Hole(85, 65, 70);
  h2 = new Hole(85, 1535, 70);
  h3 = new Hole(825, 65, 70);
  h4 = new Hole(825, 1535, 70);
  h5 = new Hole(60, 800, 70);
  h6 = new Hole(840, 800, 70);


  P1ball1 = new Player1Ball(450, 540, 1, 1);
  P1ball2 = new Player1Ball(472, 500, 1, 1);
  P1ball3 = new Player1Ball(405, 460, 1, 1);
  P1ball4 = new Player1Ball(427, 420, 1, 1);
  P1ball5 = new Player1Ball(517, 420, 1, 1);
  P1ball6 = new Player1Ball(495, 380, 1, 1);
  P1ball7 = new Player1Ball(450, 380, 1, 1);
redball = [P1ball1,P1ball2,P1ball3,P1ball4,P1ball5,P1ball6];
console.log(redball);
  P2ball1 = new Player2Ball(472, 420, 60);
  P2ball2 = new Player2Ball(427, 500, 60);
  P2ball3 = new Player2Ball(382, 420, 60);
  P2ball4 = new Player2Ball(360, 380, 60);
  P2ball5 = new Player2Ball(405, 380, 60);
  P2ball6 = new Player2Ball(495, 460, 60);
  P2ball7 = new Player2Ball(540, 380, 60);
  yellowball = [P2ball1,P2ball2,P2ball3,P2ball4,P2ball5,P2ball6,P2ball7];

  CommonLastBall = new LastBall(420, 430, 60);

  mainball = new mainBall(420, 1150, 60);
  
  stick = new Stick(500, 500, 250, 10);




  
}

function draw() {
  //background(255,255,255);
 bg.display();
b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();

  h1.display();
  h2.display();
  h3.display();
  h4.display();
  h5.display();
  h6.display();
  

  P1ball1.display();
  P1ball2.display();
  P1ball3.display();
  P1ball4.display();
  P1ball5.display();
  P1ball6.display();
  P1ball7.display();


  P2ball1.display();
  P2ball2.display();
  P2ball3.display();
  P2ball4.display();
  P2ball5.display();
  P2ball6.display();
  P2ball7.display();

  CommonLastBall.display();
  
  mainball.display();

  stick.display();

 // tempBall.display();
 

P1ball1.body.bounceOff(P1ball2.body);
P1ball1.body.bounceOff(P1ball3.body);
P1ball1.body.bounceOff(P1ball4.body);
P1ball1.body.bounceOff(P1ball5.body);
P1ball1.body.bounceOff(P1ball6.body);
P1ball1.body.bounceOff(P1ball7.body);

P1ball2.body.bounceOff(P1ball1.body);
P1ball2.body.bounceOff(P1ball3.body);
P1ball2.body.bounceOff(P1ball4.body);
P1ball2.body.bounceOff(P1ball5.body);
P1ball2.body.bounceOff(P1ball6.body);
P1ball2.body.bounceOff(P1ball7.body);

P1ball3.body.bounceOff(P1ball1.body);
P1ball3.body.bounceOff(P1ball2.body);
P1ball3.body.bounceOff(P1ball4.body);
P1ball3.body.bounceOff(P1ball5.body);
P1ball3.body.bounceOff(P1ball6.body);
P1ball3.body.bounceOff(P1ball7.body);

P1ball4.body.bounceOff(P1ball1.body);
P1ball4.body.bounceOff(P1ball2.body);
P1ball4.body.bounceOff(P1ball3.body);
P1ball4.body.bounceOff(P1ball5.body);
P1ball4.body.bounceOff(P1ball6.body);
P1ball4.body.bounceOff(P1ball7.body);

P1ball5.body.bounceOff(P1ball1.body);
P1ball5.body.bounceOff(P1ball2.body);
P1ball5.body.bounceOff(P1ball3.body);
P1ball5.body.bounceOff(P1ball4.body);
P1ball5.body.bounceOff(P1ball6.body);
P1ball5.body.bounceOff(P1ball7.body);

P1ball6.body.bounceOff(P1ball1.body);
P1ball6.body.bounceOff(P1ball2.body);
P1ball6.body.bounceOff(P1ball3.body);
P1ball6.body.bounceOff(P1ball4.body);
P1ball6.body.bounceOff(P1ball5.body);
P1ball6.body.bounceOff(P1ball7.body);

P1ball7.body.bounceOff(P1ball1.body);
P1ball7.body.bounceOff(P1ball2.body);
P1ball7.body.bounceOff(P1ball3.body);
P1ball7.body.bounceOff(P1ball4.body);
P1ball7.body.bounceOff(P1ball5.body);
P1ball7.body.bounceOff(P1ball6.body);



P2ball1.body.bounceOff(P1ball2.body);
P2ball1.body.bounceOff(P1ball3.body);
P2ball1.body.bounceOff(P1ball4.body);
P2ball1.body.bounceOff(P1ball5.body);
P2ball1.body.bounceOff(P1ball6.body);
P2ball1.body.bounceOff(P1ball7.body);

P2ball2.body.bounceOff(P1ball1.body);
P2ball2.body.bounceOff(P1ball3.body);
P2ball2.body.bounceOff(P1ball4.body);
P2ball2.body.bounceOff(P1ball5.body);
P2ball2.body.bounceOff(P1ball6.body);
P2ball2.body.bounceOff(P1ball7.body);

P2ball3.body.bounceOff(P1ball1.body);
P2ball3.body.bounceOff(P1ball2.body);
P2ball3.body.bounceOff(P1ball4.body);
P2ball3.body.bounceOff(P1ball5.body);
P2ball3.body.bounceOff(P1ball6.body);
P2ball3.body.bounceOff(P1ball7.body);

P2ball4.body.bounceOff(P1ball1.body);
P2ball4.body.bounceOff(P1ball2.body);
P2ball4.body.bounceOff(P1ball3.body);
P2ball4.body.bounceOff(P1ball5.body);
P2ball4.body.bounceOff(P1ball6.body);
P2ball4.body.bounceOff(P1ball7.body);

P2ball5.body.bounceOff(P1ball1.body);
P2ball5.body.bounceOff(P1ball2.body);
P2ball5.body.bounceOff(P1ball3.body);
P2ball5.body.bounceOff(P1ball4.body);
P2ball5.body.bounceOff(P1ball6.body);
P2ball5.body.bounceOff(P1ball7.body);

P2ball6.body.bounceOff(P1ball1.body);
P2ball6.body.bounceOff(P1ball2.body);
P2ball6.body.bounceOff(P1ball3.body);
P2ball6.body.bounceOff(P1ball4.body);
P2ball6.body.bounceOff(P1ball5.body);
P2ball6.body.bounceOff(P1ball7.body);

P2ball7.body.bounceOff(P1ball1.body);
P2ball7.body.bounceOff(P1ball2.body);
P2ball7.body.bounceOff(P1ball3.body);
P2ball7.body.bounceOff(P1ball4.body);
P2ball7.body.bounceOff(P1ball5.body);
P2ball7.body.bounceOff(P1ball6.body);

 P1ball2.body.bounceOff(mainball.body);
 P1ball3.body.bounceOff(mainball.body);
 P1ball1.body.bounceOff(mainball.body);
 P1ball4.body.bounceOff(mainball.body);
 P1ball5.body.bounceOff(mainball.body);
 P1ball6.body.bounceOff(mainball.body);
 P1ball7.body.bounceOff(mainball.body);
 P2ball1.body.bounceOff(mainball.body);
 P2ball2.body.bounceOff(mainball.body);
 P2ball3.body.bounceOff(mainball .body);
 P2ball4.body.bounceOff(mainball.body);
 P2ball5.body.bounceOff(mainball.body);
 P2ball6.body.bounceOff(mainball.body);
 P2ball7.body.bounceOff(mainball.body);
 mainball.body.bounceOff(mainball.body);
// mainball.body.bounceOff(P1ball3.body);
// mainball.body.bounceOff(P1ball1.body);
// mainball.body.bounceOff(P1ball4.body);
// mainball.body.bounceOff(P1ball5.body);
// mainball.body.bounceOff(P1ball6.body);
// mainball .body.bounceOff(P1ball7.body);
// mainball.body.bounceOff(P2ball1.body);
// mainball.body.bounceOff(P2ball2.body);
// mainball.body.bounceOff( P2ball3.body);
// mainball.body.bounceOff(P2ball4.body);
// mainball.body.bounceOff(P2ball5.body);
// mainball.body.bounceOff(P2ball6.body);
// mainball.body.bounceOff(P2ball7.body);
//  P1ball1.body.bounceOff(lastball.body);
//  P1ball2.body.bounceOff(lastball.body);
//  P1ball3.body.bounceOff(lastball.body);
// P1ball4.body.bounceOff(lastball.body);
//  P1ball5.body.bounceOff(lastball.body);
//  P1ball6.body.bounceOff(lastball.body);
// P1ball7.body.bounceOff(lastball.body);
//  P2ball1.body.bounceOff(lastball.body);
//  P2ball2.body.bounceOff(lastball.body);
//  P2ball3.body.bounceOff(lastball.body);
//  P2ball4.body.bounceOff(lastball.body);
//  P2ball5.body.bounceOff(lastball.body);
// P2ball6.body.bounceOff(lastball.body);
//  P1ball7.body.bounceOff(lastball.body);
// for (var i =0;i<=border.length;i++)
// {
//   for (var j =0;j<=redball.length;j++)
//   {console.log(border[i].body);
//     console.log(redball[j].body);
//   border[i].body.bounceOff(redball[j].body);
// }
// }
detectCollision(h1, P1ball1);
detectCollision(h1, P1ball2);
detectCollision(h1, P1ball3);
detectCollision(h1, P1ball4);
detectCollision(h1, P1ball5);
detectCollision(h1, P1ball6);
detectCollision(h1, P1ball7);
detectCollision(h1, P2ball1);
detectCollision(h1, P2ball2);
detectCollision(h1, P2ball3);
detectCollision(h1, P2ball4);
detectCollision(h1, P2ball5);
detectCollision(h1, P2ball6);
detectCollision(h1, P2ball7);

detectCollision(h2, P1ball1);
detectCollision(h2, P1ball2);
detectCollision(h2, P1ball3);
detectCollision(h2, P1ball4);
detectCollision(h2, P1ball5);
detectCollision(h2, P1ball6);
detectCollision(h2, P1ball7);
detectCollision(h2, P2ball1);
detectCollision(h2, P2ball2);
detectCollision(h2, P2ball3);
detectCollision(h2, P2ball4);
detectCollision(h2, P2ball5);
detectCollision(h2, P2ball6);
detectCollision(h2, P2ball7);

detectCollision(h3, P1ball1);
detectCollision(h3, P1ball2);
detectCollision(h3, P1ball3);
detectCollision(h3, P1ball4);
detectCollision(h3, P1ball5);
detectCollision(h3, P1ball6);
detectCollision(h3, P1ball7);
detectCollision(h3, P2ball1);
detectCollision(h3, P2ball2);
detectCollision(h3, P2ball3);
detectCollision(h3, P2ball4);
detectCollision(h3, P2ball5);
detectCollision(h3, P2ball6);
detectCollision(h3, P2ball7);

detectCollision(h4, P1ball1);
detectCollision(h4, P1ball2);
detectCollision(h4, P1ball3);
detectCollision(h4, P1ball4);
detectCollision(h4, P1ball5);
detectCollision(h4, P1ball6);
detectCollision(h4, P1ball7);
detectCollision(h4, P2ball1);
detectCollision(h4, P2ball2);
detectCollision(h4, P2ball3);
detectCollision(h4, P2ball4);
detectCollision(h4, P2ball5);
detectCollision(h4, P2ball6);
detectCollision(h4, P2ball7);

detectCollision(h5, P1ball1);
detectCollision(h5, P1ball2);
detectCollision(h5, P1ball3);
detectCollision(h5, P1ball4);
detectCollision(h5, P1ball5);
detectCollision(h5, P1ball6);
detectCollision(h5, P1ball7);
detectCollision(h5, P2ball1);
detectCollision(h5, P2ball2);
detectCollision(h5, P2ball3);
detectCollision(h5, P2ball4);
detectCollision(h5, P2ball5);
detectCollision(h5, P2ball6);
detectCollision(h5, P2ball7);

detectCollision(h6, P1ball1);
detectCollision(h6, P1ball2);
detectCollision(h6, P1ball3);
detectCollision(h6, P1ball4);
detectCollision(h6, P1ball5);
detectCollision(h6, P1ball6);
detectCollision(h6, P1ball7);
detectCollision(h6, P2ball1);
detectCollision(h6, P2ball2);
detectCollision(h6, P2ball3);
detectCollision(h6, P2ball4);
detectCollision(h6, P2ball5);
detectCollision(h6, P2ball6);
detectCollision(h6, P2ball7);


if(keyDown("space"))
{if(stick.body.isTouching(mainball.body)){
  mainball.body.velocityX = 0;
  mainball.body.velocityY = -4;

}
}



  // for(i = 0; i<balls.length; i++){
  //   balls[i].display()
  // }


  drawSprites();
  textSize(18);
  text("Player 1 Score : "+P1score, 200, 80);
  fill("black");

  textSize(18);
  text("Player 2 Score : "+P2score, 500, 80);
  fill("black");

}


function detectCollision(hole, ball){
  //console.log(hole.body.position.x);

  if(hole.body.isTouching(ball.body)){
    ball.body.destroy();

  }
  
}

// function keyPressed(){
//   if (keyCode === 65 || keyCode === 97){
//     // Matter.Body.setStatic(mainball.body, false);
//     // Matter.Body.applyForce(mainball.body, mainball.body.position, {
//     //   x:0, y:-55
//     // })
// mainball.body.velocityX = 0;
// mainball.body.velocityY = -4;
//   }
  
// }

// function detectCollision1(hole1, ball1){
//   if(hole1.body.x - ball1.body.x < hole1.radius/2 + ball1.radius/2 &&  
//    ball1.body.x  - hole1.body.x < hole1.radius/2 + ball1.radius/2 &&
//    hole1.body.y - ball1.bodyn.y < hole1.radius/2 + ball1.radius/2 &&  
//    ball1.body.y  - hole1.body.y < hole1.radius/2 + ball1.radius/2)
//   {
//     ball1.body.destroy();

//     //   console.log(hole1.body.position.x);
//     //   text("yes", 500, 500);
//     // Matter.Body.setStatic(ball1.body, false);
//     // Matter.Body.applyForce(ball1.body, ball1.body.position, {
//     //   x:0, y:-55
//     // })
//       }
// }
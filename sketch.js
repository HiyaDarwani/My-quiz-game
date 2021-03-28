var canvas;
var gameState = 0;
var contestantCount, contestant;
var Quiz, question;
var database;

function setup(){
  canvas = createCanvas(850,400);
  database=firebase.database();

  Quiz = new quiz;
  Quiz.getState();
  Quiz.start();
}


function draw(){
  background("Yellow");

  
}

var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;

var track, car1_img, car2_img, car3_img, car4_img;

var gold, silver, bronze;

var finished;
var finishedPlayer;

function preload(){
  track = loadImage("track.jpg");
  car1_img = loadImage("car1.png");
  car2_img = loadImage("car2.png");
  car3_img = loadImage("car3.png");
  car4_img = loadImage("car4.png");
  ground = loadImage("ground.png");
  gold = loadImage("gold.png");
  silver = loadImage("silver.png");
  bronze = loadImage("bronze.png");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  finishedPlayer = 0;
}


function draw(){
  if(playerCount === 4 ){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(finishedPlayer==4){
    game.update(2);
  }
  if(gameState === 2 && finishedPlayer==4){
    game.end();
    game.displayRank() 
  }
}
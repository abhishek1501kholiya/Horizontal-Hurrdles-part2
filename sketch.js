var database;
var Canvas ;

var jumper1 , jumper2 , jumper3 , jumper4 ;
var jumpers;
var Hurdle1;
var allPlayers;

var playerCount = 0;
var game;
var form;
var playername;
var gameState = 0;
var gameref;
var playeref;
var player;
function setup (){
Canvas = createCanvas(800,400);
database = firebase.database();
//jumper1 = new Jumper(200,360,20,80);
playerCount = 0;

game = new Game();
//form = new Form();
game.aboutToupdate();
game.start();



}
function draw(){
background(255);

if(playerCount===4){
  console.log("working");
  game.update(1);
}
if(gameState === 1){
  game.play();

}
if(gameState=== 2){

}


}





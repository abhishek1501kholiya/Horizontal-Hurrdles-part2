class Game{
    constructor(){

    }
 aboutToupdate(){

  gameref = database.ref('gameState');
 gameref.on("value",(data)=>{
  gameState = data.val();
  })
 }
 update(state){
   database.ref('/').update({
   gameState:state
   });
 }
 async start(){
 if(gameState===0){
  player = new Player();
  var PlayerCountRef = await database.ref('playerCount').once("value");
  if(PlayerCountRef.exists()){
    playerCount = PlayerCountRef.val();
    player.playertoUpdate();

  }
  form = new Form();
  form.display();


}
jumper1 = createSprite(200,360,20,80);
jumper2 = createSprite(200,260,20,80);
jumper3 = createSprite(200,160,20,80);
jumper4 = createSprite(200,80,20,80);
jumpers = [jumper1, jumper2, jumper3,jumper4];


 }
 play(){
   form.hide();
  // jumper1.display();
   //jumper2.display();
   //jumper3.display();
   //jumper4.display();
   Player.getPlayerinfo();
   if(allPlayers !== undefined){
     background(255);
     var index = 0;

     var x = 200;
     var y = 360;

     for(var plr in allPlayers){
      console.log(allPlayers[plr]); 
      
      index = index + 1;

       x = x;
       y = y - 80;
       jumpers[index-1].x = x;
       jumpers[index-1].y = y;

       if(index === player.index){
         stroke(10);
         fill("red");
         ellipse(x,y,60,60);
         jumpers[index -1].shapeColor = "red";
         camera.position.x = displayWidth/2;
         camera.position.y  = jumpers[index-1].y;
       }

     }
   }
   if(keyIsDown(UP_ARROW) && player.index !== null){
     player.distance += 10;
     player.update();
     
   }
  if(player.distance>4200){
    gameState = 2;
  }
   drawSprites();

   
}
end(){
  console.log("game ended");
}
}
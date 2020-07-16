class Form {
  constructor (){
    this.input = createInput("Name");
    this.button = createButton('play');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.reset = createButton('Reset');
  }
  hide(){
    this.input.hide();
    this.button.hide();
    this.greeting.hide();
    this.title.hide();
  }
  display(){
    this.title.html("Horizontal Runner");
    this.title.position(200 , 50);
    
    this.input.position(200, 200);
    this.button.position(200, 300);
    this.reset.position(300,400);
  
  this.button.mousePressed(()=>{
   this.input.hide();
   this.button.hide();
   playername = this.input.value();
   playerCount += 1;
   player.index = playerCount;
  // player.playerupdate();
   player.playerUpdate(playerCount);
   this.greeting.html("Hello" + playername);
   this.greeting.position(200,200);
  });

  this.reset.mousePressed(()=>{
    player.playerUpdate(0);
    game.update(0);
  })
  }
}

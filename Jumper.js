class Jumper{
    constructor(x,y,w,h){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }
    move(speed){
        this.x = this.x + speed;
    }
    display(){
    rect(this.x ,this.y , this.w , this.h);
    }
    
    

}
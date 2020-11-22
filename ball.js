class BALL{
    constructor(x,y,r){
        var options ={
            isStatic:false,
            restitution:3,
            density:0.3,
            friction:0.04,
        }
        this.x = x;
        this.y = y;
        this.r  =r;
        this.image = loadImage("polygon.png")
        this.body = Bodies.circle(x, y,r,options);
        World.add(world,this.body);
    }
    display(){
        var pos1 = this.body.position;
        push()
        translate(pos1.x,pos1.y);
        imageMode(CENTER);
       
        image(this.image,0,0,this.r*2,this.r*2);
        pop();
    }
}
class LAPTOP{
    constructor(x,y,width,height){
        var options = {
           
            isStatic:false,
            restitution:0.01,
            friction:1000,
            
        }
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.image = loadImage("ts2.png")
        this.body = Bodies.rectangle(x,y,width,height,options);
         World.add(world,this.body);
    }
    display(){
        var laptop = this.body.position;
        push();
        translate(laptop.x,laptop.y);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();
    }
};
class CHOCO{
    constructor(x,y,width,height){
        var options = {
            
            isStatic:false,
            restitution:0.01,
            friction:1002,
        }
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.image = loadImage("ts1.png")
        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
    }
    display(){
        var choco = this.body.position;
        push();
        translate(choco.x,choco.y);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();
    }
};


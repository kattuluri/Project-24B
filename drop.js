class drop{
    constructor(x,y,width,height){
        var options = {
            isStatic:true,
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }
    display(){
       var p = this.body.position
       var a = this.body.angle 
       rectMode(CENTER)
       strokeWeight(4)
       stroke("brown")
       fill(255);
       rect(p.x,p.y,this.width,this.height)
    }
}
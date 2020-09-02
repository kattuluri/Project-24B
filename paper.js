class paper{
    constructor(x,y){
        var options = {
          isStatic:false,
          restitution : 0.3,
          friction : 0.2,
          density : 1.2
        }
        this.body = Bodies.circle(x,y,40,options);
        this.radius = 40;
        World.add(world,this.body);
    }
    display(){
    var p = this.body.position
    push()
    translate(p.x,p.y)
    ellipseMode(CENTER)
    strokeWeight(4)
    stroke("green")
    fill(255);
    ellipse(0,0,this.radius)
    pop()
   }
}

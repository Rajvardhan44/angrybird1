class Bird{
    constructor(x,y){
        var option = {
            restitution:0.8,
            friction:0.2,
            density:1 
        }
        this.body = Bodies.rectangle(x,y,50,50,option);
        this.width = 50
        this.heigth = 50
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position
        pos.x = mouseX;
        pos.y = mouseY;
        var angle = this.body.angle
        push();
        translate(pos.x,pos.y)
        rotate(angle)
        rectMode(CENTER)
        fill("red")
        rect(0,0,this.width,this.heigth)
        pop()
    }
}
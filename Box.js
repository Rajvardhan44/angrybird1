class Box{
    constructor(x,y,width,heigth){
        var option = {
            restitution:0.8,
            friction:1.0,
            density:1 
        }
        this.body = Bodies.rectangle(x,y,width,heigth,option);
        this.width = width
        this.heigth = heigth
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position
        var angle = this.body.angle
        push();
        translate(pos.x,pos.y)
        rotate(angle)
        rectMode(CENTER)
        strokeWeight(5)
        stroke("green") 
        fill(255)
        rect(0,0,this.width,this.heigth)
        pop()
    }
}
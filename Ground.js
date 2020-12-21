class Ground{
    constructor(x,y,width,heigth){
        var option = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,width,heigth,option);
        this.width = width
        this.heigth = heigth
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position
        rectMode(CENTER)
        fill("brown");
        rect(pos.x,pos.y,this.width,this.heigth)
    }
}
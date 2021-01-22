class Umbrella
{
    constructor(x,y)
    {
        this.image=loadImage("images/Walking Frame/walking_1.png");
        this.body=Bodies.circle(x,y,50,{isStatic:true})
        World.add(world,this.body)
    }
    display()
    {
      imageMode(CENTER);
      image(this.image,this.body.position.x,this.body.position.y+70,370,370)
    }
}
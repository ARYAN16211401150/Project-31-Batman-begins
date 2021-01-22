class Drops
{
  constructor(x,y){
    var options = {
        friction: 0.001,
        restitution:0.1           
    }
    this.body = Bodies.circle(x,y,5,options)
    this.r = 5;
    World.add(world, this.body);
}
    update1()
    {
      if(this.body.position.y > height)
      {
        Matter.Body.setPosition(this.body, {x:random(0,600), y:random(0,700)})
      }
    }
    display()
    {
      ellipseMode(CENTER);
      fill("blue")
      ellipse(this.body.position.x,this.body.position.y,this.r,this.r)
    }
}
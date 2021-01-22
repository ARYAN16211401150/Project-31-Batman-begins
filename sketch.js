const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

var engine, world;
var drops=[]
var maxDrops=100;
var boy,t;
var thunder1;
var thunder2;
var thunder3;
var thunder4;
var thunder;

function preload()
{
    thunder1=loadImage("images/thunderbolt/1.png");
    thunder2=loadImage("images/thunderbolt/2.png");
    thunder3=loadImage("images/thunderbolt/3.png");
    thunder4=loadImage("images/thunderbolt/4.png");
}

function setup()
{
    var canvas = createCanvas(600,700);
    engine = Engine.create();
    world = engine.world;

    if(frameCount % 150 === 0)
    {

      for(var i=0; i<maxDrops; i++){
          drops.push(new Drops(random(0,600), random(0,700)));
    }
  }
  boy=new Umbrella(300,460);

}
  
function draw()
{
   background("black")
   Engine.update(engine);

   for(var i=0; i<maxDrops; i++)
   {
      drops[i].display()
      drops[i].update1()
   }
   if(frameCount % 100 === 0)
    {
      thunder=createSprite(random(10,400),random(10,30), 20, 20)
      t=frameCount;
      r=Math.round(random(1,4))
      switch(r)
      {
        case 1:thunder.addImage(thunder1)
        break;
        case 2:thunder.addImage(thunder2)
        break;
        case 3:thunder.addImage(thunder3)
        break;
        case 4:thunder.addImage(thunder4)
        break;
      }
      thunder.scale=random(0.3,1);
    }
   
   if(t+10 === frameCount && thunder)
   {
       thunder.destroy();
   }

   boy.display();

    drawSprites();
}   


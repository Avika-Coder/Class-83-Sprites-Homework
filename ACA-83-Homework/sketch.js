const Engine = Matter.Engine,
  Render = Matter.Render,
  Runner = Matter.Runner,
  Composite = Matter.Composite,
  Composites = Matter.Composites,
  Common = Matter.Common,
  MouseConstraint = Matter.MouseConstraint,
  Mouse = Matter.Mouse,
  Bodies = Matter.Bodies;

var engine = Engine.create(),
  world = engine.world;

var render = Render.create({
  element: document.body,
  engine: engine,
  options: {
    width: 1550,
    height: 800,
    wireframes: false,
    background: "#B5EAEA",
  },
});

Render.run(render);
var runner = Runner.create();
Runner.run(runner, engine);

var orangeStack=Composites.stack(30,0,3,4,0,0,function(x,y){
  return Bodies.polygon(x,y,4,30,{
    friction:0.00001,
    restitution:0.5,
    density:0.001,
    render:{
      sprite:{
        texture:'images/orange.png',
        xScale:0.12,
        yScale:0.12,
      }
    }
  })
})

var strawberryStack=Composites.stack(530,0,3,4,0,0,function(x,y){
  return Bodies.polygon(x,y,4,30,{
    friction:0.00001,
    restitution:0.5,
    density:0.001,
    render:{
      sprite:{
        texture:'images/strawberry.png',
        xScale:0.12,
        yScale:0.12,
      }
    }
  })
})

var pineappleStack=Composites.stack(1032,0,3,4,0,0,function(x,y){
  return Bodies.polygon(x,y,4,30,{
    friction:0.00001,
    restitution:0.5,
    density:0.001,
    render:{
      sprite:{
        texture:'images/pineapple.png',
        xScale:0.16,
        yScale:0.16,
      }
    }
  })
})

var firstBase = Bodies.rectangle (170,500,300,15,{
  isStatic:true,
  render:{fillStyle :'black'}
})
var firstLeft = Bodies.rectangle(25,358,300,20,{
  isStatic:true,
  angle:Math.PI/2,
  render:{fillStyle:'black'}
})
var firstRight = Bodies.rectangle(325,358,300,20,{
  isStatic:true,
  angle:Math.PI/2,
  render:{fillStyle:'black'}
})

var secondBase = Bodies.rectangle (670,500,300,15,{
  isStatic:true,
  render:{fillStyle :'black'}
})
var secondLeft = Bodies.rectangle(525,358,300,20,{
  isStatic:true,
  angle:Math.PI/2,
  render:{fillStyle:'black'}
})
var secondRight = Bodies.rectangle(825,358,300,20,{
  isStatic:true,
  angle:Math.PI/2,
  render:{fillStyle:'black'}
})

var thirdBase = Bodies.rectangle (1170,500,300,15,{
  isStatic:true,
  render:{fillStyle :'black'}
})
var thirdLeft = Bodies.rectangle(1025,358,300,20,{
  isStatic:true,
  angle:Math.PI/2,
  render:{fillStyle:'black'}
})
var thirdRight = Bodies.rectangle(1325,358,300,20,{
  isStatic:true,
  angle:Math.PI/2,
  render:{fillStyle:'black'}
})

var mouse = Mouse.create(render.canvas),
  mouseConstraint = MouseConstraint.create(engine, {
    mouse: mouse,
    constraint: {
      stiffness: 0.2,
      render: {
        visible: false,
      },
    },
  });

Composite.add(world,[orangeStack,strawberryStack,pineappleStack,firstBase,firstLeft,firstRight,secondRight,secondLeft,secondBase,thirdRight,thirdLeft,thirdBase,mouse,mouseConstraint]);
render.mouse = mouse;

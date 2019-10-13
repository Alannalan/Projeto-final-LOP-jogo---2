//jogador
var x= 180
var y= 350
//objetos
var xq=170
var yq= 40
//disparo
var xd=x
var yd=y
var estadoDisparo = false

//JOGO
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
 
  //jogador
    if(keyIsDown(RIGHT_ARROW)){
      x=x+6
    }
  
    if(keyIsDown(LEFT_ARROW)){
      x= x -6
    }
   
    if(keyIsDown(UP_ARROW)){
     y = y - 6
    }
    
    if(keyIsDown(DOWN_ARROW)){
    y = y + 6
    }
  
  ellipse(x,y,40,40)
  
//objeto
  rect(xq,yq,50,50) 
  xq= xq -3
  if(xq<0){
    xq=400
  }
//disparo
  ellipse(xd,yd,6,6)
  if(keyIsDown(SHIFT) && estadoDisparo ==false){
    yd=y
    xd=x 
   estadoDisparo = true
  }

  if(estadoDisparo){
    ellipse(xd,yd,6,6)
    yd= yd - 10
  }
  if(yd<0){
    estadoDisparo = false}

}

let mx  = [0,0,0,0,0,0,0,0,0,0];
let my  = [0,0,0,0,0,0,0,0,0,0];
let mmx  = [0,0,0,0,0,0,0,0,0,0];
let mmy  = [0,0,0,0,0,0,0,0,0,0];
let count = 0;
let size = 40;
let multiply = 5;

function setup() {
  createCanvas(400, 400);
  background(200)
}

function draw() {
  background(200);
  noStroke();

   for (let i = 0; i < 10; i++) {
    ellipse(mx[i],my[i],size+mmx[i]*multiply,size+mmy[i]*multiply);
  }
  
  
}

function mouseMoved(){
  
  if(count>9){
    count=0;
  }
  
  mx[count] = mouseX;
  my[count] = mouseY;
  mmx[count] = movedX;
  mmy[count] = movedY;
  
  count ++

  
}


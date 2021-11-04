let a1, a2;
let cv1, cv2;
let dy = 0;
let canvasRef;
let mx  = [0,0,0,0,0,0,0,0,0,0];
let my  = [0,0,0,0,0,0,0,0,0,0];
let mmx  = [0,0,0,0,0,0,0,0,0,0];
let mmy  = [0,0,0,0,0,0,0,0,0,0];
let count = 0;
let size = 40;
let multiply = 5;


let s2 = function(p) {

  p.setup = () => {
    cv2 = p.createCanvas(400, 400);
    cv2.position(300, 0);
    
  }

  p.draw = () => {
    p.background(200);
    p.noStroke();

   for (let i = 0; i < 10; i++) {
    p.ellipse(mx[i],my[i],size+mmx[i]*multiply,size+mmy[i]*multiply);
  }
   
  }
  
  p.mouseMoved = () => {
  
  if(count>9){
    count=0;
  }
  
  mx[count] = p.mouseX;
  my[count] = p.mouseY;
  mmx[count] = p.movedX;
  mmy[count] = p.movedY;
  
  count ++

  
}
}


let s1 = function(p) {
  let img;
  p.setup = () => {
    cv1 = p.createCanvas(400, 400);
    img = p.createImage(400, 400);
    p.background(200);
    cv1.position(0, 0);
    canvasRef = p.select('#defaultCanvas0')
  }

  p.draw = () => {
    p.image(canvasRef, 0, 0)
    
  }
}



a2 = new p5(s2);
a1 = new p5(s1);

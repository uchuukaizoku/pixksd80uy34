let a1, a2;
let cv1, cv2;
let dy = 0;
let canvasRef;

let s2 = function(p) {
  let img;

  p.preload = () => {
    img = p.loadImage('https://pbs.twimg.com/profile_images/635910989498724356/uY4bc8q2.jpg');
  }

  p.setup = () => {
    cv2 = p.createCanvas(300, 300);
    cv2.position(300, 0);
  }

  p.draw = () => {
    p.background(30);
    p.imageMode(p.CENTER);
    p.image(img, p.mouseX, p.mouseY);
  }
}


let s1 = function(p) {
  let img;
  p.setup = () => {
    cv1 = p.createCanvas(300, 300);
    img = p.createImage(300, 300);
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

let rings = [];

class Ring {
  constructor(zAngle, xAngle, col) {
    this.zAngle = zAngle;
    this.xAngle = xAngle;
    this.col = col;
    this.speed = random(0.2, 1); 
  }

  update() {
    this.xAngle += this.speed;   
  }

  display() {
    push();
    stroke(this.col);
    rotateZ(this.zAngle);
    rotateX(this.xAngle);
    translate(0, 100, 0);
    circle(0, 0, 50);
    pop();
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);
  strokeWeight(2);
  noFill();

  let palette = ["#EB27F5", "#FFF200", "#00FFF7", "lime", "#FF1900", "#0033FF"];

  for (let zAngle = 0; zAngle < 180; zAngle += 30) {
    for (let xAngle = 0; xAngle < 360; xAngle += 30) {
      rings.push(new Ring(zAngle, xAngle, random(palette)));
    }
  }
}

function draw() {
  background(0);
  orbitControl();

  for (let ring of rings) {
    ring.update();   
    ring.display();  
  }
}
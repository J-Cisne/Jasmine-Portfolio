let particles = [];
let centerX, centerY;
let radius = 45, rotAngle = -90;
let accelX = 0.0, accelY = 0.0;
let deltaX = 0.0, deltaY = 0.0;
let springing = 0.0009, damping = 0.98;
let counterx = 0, countery = 0;
let nextxArr = [200, 80, 160, 340];
let nextyArr = [640, -164, 140, 150];
let nodes = 5;
let nodeStartX = [], nodeStartY = [], nodeX = [], nodeY = [], angle = [], frequency = [];
let organicConstant = 1.0;


// Chatgpt was used to help me combine the two algorithms together.
// I also used it to help me get the dots to grow big and small simultaneously.


class Particle {
 constructor() {
   this.x = random(0, width);
   this.y = random(0, height);
   this.baseR = random(5, 30);
   this.r = this.baseR;
   this.xSpeed = random(-2, 2);
   this.ySpeed = random(-1, 1.5);
   this.hue = random(360);
   this.sizeOscillationSpeed = random(0.01, 0.02);
   this.sizeOscillationOffset = random(0, TWO_PI);
 }


 createParticle() {
   noFill();
   stroke(255);
   strokeWeight(2);
   colorMode(HSB, 360, 100, 100, 1);
   fill(this.hue % 360, 80, 100, 0.7);
   circle(this.x, this.y, this.r);
 }


 moveParticle() {
   if (this.x < 0 || this.x > width) this.xSpeed *= -1;
   if (this.y < 0 || this.y > height) this.ySpeed *= -1;
   this.x += this.xSpeed;
   this.y += this.ySpeed;
   this.hue += 1;
   this.r = this.baseR + sin(this.sizeOscillationSpeed * frameCount + this.sizeOscillationOffset) * 25;
 }


 joinParticles(particles) {
   colorMode(HSB, 360, 100, 100, 1);
   particles.forEach(element => {
     let dis = dist(this.x, this.y, element.x, element.y);
     if (dis < 100) {
       stroke((this.hue + element.hue) / 2 % 360, 80, 100, map(dis, 0, 100, 0.3, 0));
       line(this.x, this.y, element.x, element.y);
     }
   });
 }
}


function setup() {
 createCanvas(1920, 1080);
 colorMode(HSB, 360, 100, 100, 1);
 frameRate(30);


 for (let i = 0; i < width / 10; i++) {
   particles.push(new Particle());
 }


 counterx = nextxArr[0];
 countery = nextyArr[0];
 centerX = width / 2;
 centerY = height / 2;


 for (let i = 0; i < nodes; i++) {
   nodeStartX[i] = 0;
   nodeStartY[i] = 0;
   nodeX[i] = 0;
   nodeY[i] = 0;
   angle[i] = 0;
   frequency[i] = random(5, 12);
 }
}


function draw() {
 background(0, 0, 5);


 for (let i = 0; i < particles.length; i++) {
   particles[i].createParticle();
   particles[i].moveParticle();
   particles[i].joinParticles(particles.slice(i));
 }


 updateShapeTarget();
 drawShape();
 moveShape();
}


function updateShapeTarget() {
 if (frameCount < 160) {
   counterx = nextxArr[1];
   countery = nextyArr[1];
 } else if (frameCount < 450) {
   counterx = nextxArr[2];
   countery = nextyArr[2];
 } else {
   counterx = nextxArr[3];
   countery = nextyArr[3];
 }
}


function drawShape() {
 for (let i = 0; i < nodes; i++) {
   nodeStartX[i] = centerX + cos(radians(rotAngle)) * radius;
   nodeStartY[i] = centerY + sin(radians(rotAngle)) * radius;
   rotAngle += 360.0 / nodes;
 }


 curveTightness(organicConstant);
 fill(frameCount % 360, 255 - (frameCount % 360), 100);
 beginShape();
 for (let i = 0; i < nodes; i++) {
   curveVertex(nodeX[i], nodeY[i]);
 }
 for (let i = 0; i < nodes - 1; i++) {
   curveVertex(nodeX[i], nodeY[i]);
 }
 endShape(CLOSE);
}


function moveShape() {
 deltaX = counterx - centerX;
 deltaY = countery - centerY;
 deltaX *= springing;
 deltaY *= springing;
 accelX += deltaX;
 accelY += deltaY;
 centerX += accelX;
 centerY += accelY;
 accelX *= damping;
 accelY *= damping;
 organicConstant = 1 - ((abs(accelX) + abs(accelY)) * 0.1);


 for (let i = 0; i < nodes; i++) {
   nodeX[i] = nodeStartX[i] + sin(radians(angle[i])) * (accelX * 2);
   nodeY[i] = nodeStartY[i] + sin(radians(angle[i])) * (accelY * 2);
   angle[i] += frequency[i];
 }
}



let rat1X = 200;
let rat1Y = 250;
let rat1SpeedX = 2;
let rat1SpeedY = 1.5;
let rat2Angle = 0;


function setup() {
 createCanvas(500, 500);
}


function draw() {
 background(211, 211, 211);


 rat1X += rat1SpeedX;
 rat1Y += rat1SpeedY;


 // Bouncing Rat1
 if (rat1X > width - 50 || rat1X < 50) {
   rat1SpeedX *= -1;
 }
 if (rat1Y > height - 50 || rat1Y < 50) {
   rat1SpeedY *= -1;
 }


 // Rat 1 Moving
 rat1(rat1X, rat1Y, 0, 1, color(129, 133, 137), color(129, 133, 137), color(129, 133, 137), color(255, 182, 193));


 // Rat 2 Bouncing
 rat2(70, 130, rat2Angle, 0.8, color(218, 160, 109), color(218, 160, 109), color(218, 160, 109), color(255, 182, 193));


 rat2Angle += 0.05;
}


function rat1(lx, ly, rot, sc, earColor, bodyColor, faceColor, tailColor) {
 push();
 translate(lx, ly);
 rotate(rot);
 scale(sc);


 // Ears
 ear(25, -30, 0, 0.2, earColor);
 ear(105, -30, 0, 0.2, earColor);


 // Face
 face(65, 0, 0, 1, faceColor);


 // Body
 body(65, 80, 0, 1, bodyColor);


 // Tail
 tail(65, 130, 0, 1, tailColor);


 // Cheese in hands
 cheese(65, 50, 0, 1);


 pop();
}


function rat2(lx, ly, rot, sc, earColor, bodyColor, faceColor, tailColor) {
 push();
 translate(lx, ly);
 rotate(rot);
 scale(sc);


 // Ears
 ear(25, -30, 0, 0.2, earColor);
 ear(105, -30, 0, 0.2, earColor);


 // Face
 face(65, 0, 0, 1, faceColor);


 // Body
 body(65, 80, 0, 1, bodyColor);


 // Tail
 tail(65, 130, 0, 1, tailColor);


 pop();
}


function ear(lx, ly, rot, sc, earColor) {
 push();
 translate(lx, ly);
 rotate(rot);
 scale(sc);
 noStroke();
 fill(earColor);
 ellipse(0, 0, 400, 400);


 // Inner Ear
 fill(255, 182, 193);
 ellipse(0, 0, 280, 280);


 pop();
}


function face(lx, ly, rot, sc, faceColor) {
 push();
 translate(lx, ly);
 rotate(rot);
 scale(sc);
 noStroke();
 fill(faceColor);
 ellipse(0, 0, 80, 80);


 // Eyes
 fill(0);
 ellipse(-15, -5, 20, 10);
 ellipse(15, -5, 20, 10);


 // Nose
 fill(faceColor);
 triangle(0, 5, -2, 35, 70, 15);


 pop();
}


function body(lx, ly, rot, sc, bodyColor) {
 push();
 translate(lx, ly);
 rotate(rot);
 scale(sc);
 noStroke();
 fill(bodyColor);
 ellipse(0, 0, 130, 100);


 // Inner Stomach
 fill(255, 255, 255);
 ellipse(0, 10, 100, 80);


 // Arms
 fill(bodyColor);
 ellipse(30, -6, 50, 25);
 ellipse(-30, -6, 50, 25);


 // Legs
 fill(bodyColor);
 ellipse(40, 45, 60, 25);
 ellipse(-40, 45, 60, 25);


 pop();
}


function tail(lx, ly, rot, sc, tailColor) {
 push();
 translate(lx, ly);
 rotate(rot);
 scale(sc);
 noFill();
 stroke(tailColor);
 strokeWeight(5);
 beginShape();
 for (let i = 0; i < 100; i++) {
   let angle = i * 0.2;
   let x = i;
   let y = 10 * sin(angle);
   vertex(x, y);
 }
 endShape();
 pop();
}


function cheese(lx, ly, rot, sc) {
 push();
 translate(lx, ly);
 rotate(rot);
 scale(sc);
 fill(252, 245, 95);
 stroke(203, 28, 132);
 rect(-20, 0, 40, 30, 5, 5);
 fill(218, 165, 32);


 // Holes
 ellipse(-10, 10, 8, 8);
 ellipse(5, 20, 10, 10);
 ellipse(15, 5, 6, 6);


 pop();
}

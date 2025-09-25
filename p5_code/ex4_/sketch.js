let rats = [];
let isFrozen = false;
let isGravity = false;

function setup() {
  createCanvas(500, 500);
  
  // Create rats
  for (let i = 0; i < 20; i++) {
    rats.push(createRat());
  }
}

function draw() {
  background(211, 211, 211);
  
  // Display Rat
  for (let i = 0; i < rats.length; i++) {
    let rat = rats[i];
    
    if (!isFrozen) {
      rat.x += rat.speedX;
      rat.y += rat.speedY;

      // Bouncing Rats
      if (rat.x > width - 50 || rat.x < 50) {
        rat.speedX *= -1;
      }
      if (rat.y > height - 50 || rat.y < 50) {
        rat.speedY *= -1;
      }
    }

    if (isGravity) {
      rat.speedY += 0.5;
    }

    // Display Rat
    rat1(rat.x, rat.y, rat.angle, rat.scale, rat.earColor, rat.bodyColor, rat.faceColor, rat.tailColor);

    rat.angle += 0.05;
  }
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

function createRat() {
  return {
    x: random(50, width - 50),
    y: random(50, height - 50),
    speedX: random(1, 3),
    speedY: random(1, 3),
    angle: random(0, TWO_PI),
    scale: random(0.2, 1),
    earColor: color(random(255), random(255), random(255)),
    bodyColor: color(random(255), random(255), random(255)),
    faceColor: color(random(255), random(255), random(255)),
    tailColor: color(random(255), random(255), random(255))
  };
}

function keyPressed() {
  if (key === 'f' || key === 'F') {
    isFrozen = !isFrozen;
  }
  if (key === 'g' || key === 'G') {
    isGravity = !isGravity;
  }
  if (key === 'r' || key === 'R') {
    rats = [];
    for (let i = 0; i < 20; i++) {
      rats.push(createRat());
    }
  }
}
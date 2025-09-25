class Rat {
  constructor() {
    this.x = random(50, width - 50);
    this.y = random(50, height - 50);
    this.speedX = random(1, 3);
    this.speedY = random(1, 3);
    this.angle = random(0, TWO_PI);
    this.scale = random(0.2, 1);
    this.earColor = color(random(255), random(255), random(255));
    this.bodyColor = color(random(255), random(255), random(255));
    this.faceColor = color(random(255), random(255), random(255));
    this.tailColor = color(random(255), random(255), random(255));
  }

  update() {
    if (!isFrozen) {
      this.x += this.speedX;
      this.y += this.speedY;

      // Bouncing Rats
      if (this.x > width - 50 || this.x < 50) {
        this.speedX *= -1;
      }
      if (this.y > height - 50 || this.y < 50) {
        this.speedY *= -1;
      }
    }

    if (isGravity) {
      this.speedY += 0.5;
    }

    this.angle += 0.05;
  }

  display() {
    push();
    translate(this.x, this.y);
    rotate(this.angle);
    scale(this.scale);

    // Ears
    this.ear(25, -30, 0, 0.2, this.earColor);
    this.ear(105, -30, 0, 0.2, this.earColor);

    // Face
    this.face(65, 0, 0, 1, this.faceColor);

    // Body
    this.body(65, 80, 0, 1, this.bodyColor);

    // Tail
    this.tail(65, 130, 0, 1, this.tailColor);

    // Cheese in hands
    this.cheese(65, 50, 0, 1);

    pop();
  }

  ear(lx, ly, rot, sc, earColor) {
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

  face(lx, ly, rot, sc, faceColor) {
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

  body(lx, ly, rot, sc, bodyColor) {
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

  tail(lx, ly, rot, sc, tailColor) {
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

  cheese(lx, ly, rot, sc) {
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
      rats.push(new Rat());
    }
  }
}

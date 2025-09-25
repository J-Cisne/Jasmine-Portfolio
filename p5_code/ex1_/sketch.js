let counter = 0;
let showBlueCircle = false;
let faceX = 85;
let faceY = 28;
let dragging = false;
let offsetX = 0;
let offsetY = 0;
let showBlush = false;

function setup() {
  createCanvas(600, 430);
  background(0);
}

function draw() {
  background(0);
  counter += 1;
  console.log // Console log for counter
  
  for (let i = 0; i < width; i += 40) {  // Canvas width
    for (let j = 0; j < height; j += 40) { // Canvas height
      fill(i % 255, j % 255, counter % 255); // Changing color effect
      rect(i, j, 90, 60, 40);
    }
  }
  
  if (frameCount % 60 === 0) {  // Every second, change visibility
    showBlueCircle = random(1) < 0.5; // % chance per second
  }

  if (showBlueCircle) {
    fill(0, 0, 255);
    ellipse(random(width), 90, 130, 130);
  }

  push();
  translate(faceX, faceY);
  stroke(0);
  strokeWeight(5);

  // Egg white
  fill(245, 245, 245);
  ellipse(250, 270, 475, 180);
  noStroke();
  fill(211, 211, 211);
  ellipse(380, 300, 140, 30);
  ellipse(200, 320, 200, 25);
  stroke(0);
  strokeWeight(5);

  // Curved shape yolk
  fill(255, 201, 74);
  translate(-20, -60);
  beginShape();
  vertex(100, 200);
  bezierVertex(130, 170, 180, 161, 300, 200);
  bezierVertex(305, 205, 374, 165, 445, 215);
  bezierVertex(447, 216, 495, 254, 450, 323);
  bezierVertex(454, 322, 393, 370, 200, 341);
  bezierVertex(216, 340, 10, 335, 100, 200);
  endShape();

  // Eyes
  fill(24, 28, 20);
  ellipse(123, 241, 15, 5);
  ellipse(199, 241, 15, 5);

  // Mouth
  fill(245, 245, 245);
  ellipse(165, 265, 50, 10);

  // Blush
  if (showBlush) {
    push();
    strokeWeight(0);
    fill(255, 105, 180, 120);
    rect(95, 248, 40, 10);
    rect(185, 248, 40, 10);
    pop();
  }

  if (mouseX > 400 && mouseY > 400) {
    fill(200, 0, 100);
    rect(width / 1.5, height / 1.5, 80, 80, 10);
  }

  if (mouseX > 200 && mouseX < 300 && mouseY > 200 && mouseY < 300) {
    fill(255, 0, 0, 90);
    triangle(200, 240, 240, 180, 270, 240);
  }
}

function mousePressed() {
  if (mouseX > faceX && mouseX < faceX + 250 && mouseY > faceY && mouseY < faceY + 180) {
    dragging = true;
    offsetX = mouseX - faceX;
    offsetY = mouseY - faceY;
  }
  // Toggle blush on click
  showBlush = !showBlush;
}

function mouseReleased() {
  dragging = false;
}

function mouseDragged() {
  if (dragging) {
    faceX = mouseX - offsetX;
    faceY = mouseY - offsetY;
  }
}
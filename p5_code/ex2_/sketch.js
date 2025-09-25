let gSize = 50;
let cookies;
let milk;
let bgcounter = 0;
let counter = 0;
let value = 0;
let bc;
let purpOn = false;


function preload() {
  // Load images in the preload function for better performance
  cookies = loadImage("images/cookies.jpg");
  milk = loadImage("images/milk.png");
}

function setup() {
  createCanvas(800, 800);
  background(252, 235, 223);  // Set the initial background color
  noStroke();
  frameRate(10);  // Adjust frame rate

  // Initialize color for the rectangle background
  bc = color('#008800');
}

function draw() {
  // First part: Background animation with rectangles
  noStroke();
  fill(51, 215, 255, 120);
  rect(0, counter, width - random(50), 10);
  fill(255, 51, 215, 120);
  rect(counter, 0, 10, height - random(50));

  console.log("bgcounter = " + bgcounter + " counter = " + counter);

  if (counter > height) {
    background(bgcounter);
    bgcounter += 100;
    counter = 0;
  } else {
    counter += 20;
  }

  // Second part: Mouse interaction (displaying images and patterns)
  if (!mouseIsPressed) {
    noTint();
    image(cookies, 0, 0, width / 2, height / 2);
    image(milk, width / 2, height / 2, width / 2, height / 2);
  } else {
    let checkCounter = 0;

    for (let i = 0; i < height; i += gSize) {
      checkCounter++;

      for (let j = 0; j < width; j += gSize) {
        if ((checkCounter % 2) == 0) {
          image(cookies, j, i, gSize, gSize);
        } else if ((checkCounter % 5) == 1) {
          image(milk, j, i, gSize, gSize);
        } else {
          fill(255, 255, 0);
          rect(j, i, gSize - 6, gSize - 6);
        }

        checkCounter++;
      }
    }
  }

  // Color-changing rectangle when the mouse is moved
  fill(value);
  rect(375, 375, 50, 50);

  // Additional logic for ellipse drawing based on 'w' and 'd' key presses
  if (purpOn) {
    fill(255, 0, 255);
    let r = random(100, width - 10);
    ellipse(width / 2, height / 2, r, r);
  }
}

function mouseMoved() {
  console.log(value);
  value = value + 5;
  if (value > 255) {
    value = 0;
  }
}

function keyPressed() {
  if (key == 'a' || key == 'A') {
    // Toggle logic for background color
    if (value == 0) {
      value = 255;
    } else {
      value = 0;
    }
  }

  if (key == 'w' || key == 'W') {
    purpOn = true;
    console.log("value is " + value + " purpOn is On");
  }

  if (key == 'd' || key == 'D' || key == " ") {
    purpOn = false;
    console.log("value is " + value + " purpOn is Off");
  }
}
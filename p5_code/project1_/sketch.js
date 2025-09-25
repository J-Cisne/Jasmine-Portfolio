let currentkey = '1';
let bgc ;
let gkcount;

function setup() {
    createCanvas(1200, 1200);
    background(255);
    smooth();
    bgc = color(255);
    gkcount = 20;
}


function draw() {
    // triggering the clear_print function
    if( keyIsPressed) {
      clear_print();
    }
    // triggering the newkeychoice
    if(mouseIsPressed) {
     drawChoice();
    }
}


 // wrapper function ( no parameters or arguments )
function drawChoice() {

  /*
   the key mapping if statements that you can change to do anything you want.
   just make sure each key option has the a stroke or fill and then what type of 
   graphic function. The 'key' global property contains whatever key was last pressed
  */


  let currentkey = key;

switch(currentkey) {
case '1':
  console.log("1");  // Light pink line
 // let k = color(0);
  drawline(color(285,16,18,50), mouseX, mouseY, pmouseX, pmouseY);
  break;
case '2':
  console.log("2");  // red line
  drawline(color(456,54,56), mouseX, mouseY, pmouseX, pmouseY);
  break;
case '3':
  console.log("3");  // Yellow line
  drawline(color(250,450,90), mouseX, mouseY, pmouseX, pmouseY);
  break;
case '4':
  console.log("4");  // Moldy snake line
  drawFatLine(color(random(94,185),53,random(10,222)), mouseX, mouseY, pmouseX, pmouseY);
  break;
case '5':
  console.log("5");  // erase with bg color
  eraser(bgc,mouseX, mouseY,25);
   break;
case '6':
    console.log("6");  // erase with bg color
    steveRanBrush(gkcount, mouseX, mouseY, pmouseX, pmouseY);

    if (gkcount > 200 ) {
        // resetting the size
        gkcount = 1;
    } else {
       // making bigger
        gkcount+= .5;
    }
 break;
 case '7':
    console.log("7");  // make your first brush here!!
  jcMagicBrush(color(random(34,346),57,random(86,457)),mouseX, mouseY,pmouseX,pmouseY);

 break;
 case '8':
    console.log("8");  // sausage brush
  jcMagicBrush(color(random(35,124),60,random(23,225),253),mouseX, mouseY,pmouseX,pmouseY);

 break;

 case '9':
  console.log("9");  // spatter
jcMagicSpatter(color(135,206,250,40),mouseX,mouseY);
break;


default:             // Default executes if the case labels
  console.log("None");   // don't match the switch parameter
  break;
}

}

/// start of brush functions

// rect();


function drawline( k,  lx, ly,  px, py) {
  
  strokeWeight(3);
  stroke(k);
    // x1, y1, x2, y2
  line(lx, ly, px, py);
  console.log(lx);
  console.log(px);
}



function drawFatLine( k,  lx, ly,  px, py) {
  strokeWeight(10);
  stroke(k);
  line(lx, ly, px, py);
}

function steveRanBrush(kcount, lx, ly,  px, py) {

  //strokeWeight(random(1,35));
  strokeWeight(kcount);
  stroke(0,kcount*3,0);
  //image(b,lx,ly, 30,30);
  line(lx, ly, px, py);
}


function jcMagicBrush( k,  lx, ly,  px, py){
  // stroke(100,20,random(10,100));
  stroke(k);
  strokeWeight(random(5,80));
  line(lx, ly, px, py);
}

function jcMagicSpatter( k,  lx, ly) {

  let r = random(20);
  // r == 3

  fill(k);
  stroke(k);

  for (let i = 0; i < r; i++) {
    let lr = random(5,40);
    let srx = random(-39,39);
    let sry = random(-39,39);
    ellipse(lx+srx, ly+sry, lr, lr)
  }



  }


function eraser( k, lx, ly, sz) {
  fill(k);
  stroke(k);
  ellipse(lx, ly, sz,sz);
}

function clear_print() {

  // these 2 options let you choose between clearing the background
  // and saveing the current image as a file.
  if (key == 'x' || key == 'X') {
    background(255);
  } else if (key == 'p' || key == 'P') {
    saveFrames('image-0', 'png', 1, 1);
    key = '';  // resets the key so it does not make more than one image.
  }

}
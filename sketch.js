var sushiRollamt = 8

var soundRight

var soundWrong

var soundBell



function preload() {
  soundFormats("wav");
  soundBell = loadSound("Bell1.wav");
  //  soundBell = loadSound("Bell2.wav");
  soundWrong = loadSound("Ouch1.wav");
  //  soundWrong = loadSound("Ouch2.wav");
  //  soundWrong = loadSound("Ouch3.wav");
  soundRight = loadSound("Munch.wav");
}

function setup() {
  createCanvas(600, 400);
}

function glassShine(x, y) {
  noStroke();
  fill(250, 253, 255);
  quad(x, y+190, x+60, y+190, x+190, y, x+130, y);
  quad(x-40, y+190, x-20, y+190, x+110, y, x+90, y);
}

function chopsticks(x, y) {
  stroke(200, 32, 32);
  strokeWeight(8);
  strokeCap(SQUARE);
  line(x, y, x + 140, y + 180);
  line(x + 50, y - 10, x, y + 210);
}

function sushiRoll(x, y) {
  noStroke();
  fill(40);
  ellipse(x, y, 52, 25);
  rect(x - 26, y - 50, 52, 50);
  fill(70)
  ellipse(x, y + 6, 25, 10);
  rect(x - 13, y - 50, 26, 55);
  stroke(40);
  strokeWeight(2);
  fill(255);
  ellipse(x, y - 50, 50, 25);
  noStroke();
  fill(255, 120, 0);
  ellipse(x, y - 50, 30, 12);
  stroke(255);
  line(x - 20, y - 45, x, y - 60);
  line(x - 10, y - 41, x + 10, y - 56);
  line(x, y - 40, x + 20, y - 55);
}

function draw() {
  background(216, 189, 150);
  noStroke();
  fill(0);
  rect(0, 190, 600, 20);
  fill(240, 248, 255);
  rect(0, 0, 600, 190);
  fill(255);
  quad(100, 175, 500, 175, 550, 275, 50, 275);
  fill(230);
  rect(150, 275, 300, 10);
  fill(245);
  quad(125, 200, 475, 200, 500, 250, 100, 250);
  glassShine(-20, 0);
  glassShine(180, 0);
  glassShine(450, 0);

  if (sushiRollamt >= 1) {
    sushiRoll(210, 205);
  }

  if (sushiRollamt >= 2) {
    sushiRoll(265, 205);
  }

  if (sushiRollamt >= 3) {
    sushiRoll(320, 205);
  }

  if (sushiRollamt >= 4) {
    sushiRoll(375, 205);
  }

  if (sushiRollamt >= 5) {
    sushiRoll(230, 230);
  }

  if (sushiRollamt >= 6) {
    sushiRoll(285, 230);
  }

  if (sushiRollamt >= 7) {
    sushiRoll(340, 230);
  }

  if (sushiRollamt >= 8) {
    sushiRoll(395, 230);
  }

  chopsticks(mouseX - 35, mouseY - 40)

}

function mousePressed() {
  print(sushiRollamt);
  print(dist(mouseX, mouseY, 395, 230));


  if (sushiRollamt == 8 && dist(mouseX, mouseY, 395, 230) < 25) {
    sushiRollamt = sushiRollamt - 1;
    soundRight.play();
  } else {
    if (sushiRollamt == 8 && dist(mouseX, mouseY, 395, 230) > 25) {
    soundWrong.play();
    }


  if (sushiRollamt == 7 && dist(mouseX, mouseY, 340, 230) < 25) {
    sushiRollamt = sushiRollamt - 1;
    soundRight.play();
  } else {
    if (sushiRollamt == 7 && dist(mouseX, mouseY, 340, 230) > 25) {
    soundWrong.play();
    }


  if (sushiRollamt == 6 && dist(mouseX, mouseY, 285, 230) < 25) {
    sushiRollamt = sushiRollamt - 1;
    soundRight.play();
  } else {
    if (sushiRollamt == 6 && dist(mouseX, mouseY, 285, 230) > 25) {
    soundWrong.play();
    }



  if (sushiRollamt == 5 && dist(mouseX, mouseY, 230, 230) < 25) {
    sushiRollamt = sushiRollamt - 1;
    soundRight.play();
  } else {
    if (sushiRollamt == 5 && dist(mouseX, mouseY, 230, 230) > 25) {
    soundWrong.play();
    }


  if (sushiRollamt == 4 && dist(mouseX, mouseY, 375, 205) < 25) {
    sushiRollamt = sushiRollamt - 1;
    soundRight.play();
  } else {
  if (sushiRollamt == 4 && dist(mouseX, mouseY, 375, 205) > 25) {
    soundWrong.play();
    }


  if (sushiRollamt == 3 && dist(mouseX, mouseY, 320, 205) < 25) {
    sushiRollamt = sushiRollamt - 1;
    soundRight.play();
  } else {
  if (sushiRollamt == 3 && dist(mouseX, mouseY, 320, 205) > 25) {
    soundWrong.play();
  }


  if (sushiRollamt == 2 && dist(mouseX, mouseY, 265, 205) < 25) {
    sushiRollamt = sushiRollamt - 1;
    soundRight.play();
  } else {
  if (sushiRollamt == 2 && dist(mouseX, mouseY, 265, 205) > 25) {
    soundWrong.play();
  }

    
  if (sushiRollamt == 1 && dist(mouseX, mouseY, 210, 205) < 25) {
    sushiRollamt = sushiRollamt - 1;
    soundRight.play();
  } else {
  if (sushiRollamt == 1 && dist(mouseX, mouseY, 210, 205) > 25) {
    soundWrong.play();
  }

    
  if (sushiRollamt == 0 && dist(mouseX, mouseY, 300, 200) < 200) {
    sushiRollamt = sushiRollamt + 8;
    soundBell.play();
                  }
                }
              }
            }
          }
        }
      }
    }
  }

}

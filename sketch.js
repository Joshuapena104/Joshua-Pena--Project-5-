var x = 60; // beginning #

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(200);
  // this makes a rainbow ellipse -> fill(random(0, 255), random(0, 255), random(0, 255));

  //mouseX = system variable gives the value of the X position of our mouse
  //mouseY = system variable gives the value of the Y position of our mouse
    fill(45);
    stroke(255,0,0);
    rect(mouseX, mouseY, 5, 5);
    fill(35);
    stroke(28, 0, 166);
    rect(250, 250, x, x);
    fill(115);
    rect(250, 50, x, x);
    stroke(252, 202, 0);
    fill(255);
    rect(250, 150, x, x)

  //ellipse(200, 250, diameter, diameter);
  //ellipse(150, 250, diameter, diameter);

  if (mouseIsPressed) {
    x = 100;
  } else {
    x = 60; // beginning #
  }
  // you can use the console.log to send messages/values to the browser
  // console.log(random(0, 255));
}

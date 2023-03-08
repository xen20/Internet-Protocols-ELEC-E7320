var ratio = window.devicePixelRatio || 1;
//var w = screen.width * ratio;
//var h = screen.height * ratio;

var w = 1024;
var h = 768;

var colPic;
var slider;
var eraseSwitch;
var isChecked;
let inputElement;
let userImage;

function setup() {
  createCanvas(w, h);
  inputElement = createFileInput(handleFile);
  slider = createSlider(0, 20, 1);
  colPic = createColorPicker("orange");
  eraseSwitch = createCheckbox("Erase", false);
  eraseSwitch.changed(myCheckedEvent);
}

function draw() {
  if (mouseButton === LEFT) {
    if (mouseIsPressed) {
      drawLine();
    }
  }
  // if (mouseButton === RIGHT) {
  //   if (mouseIsPressed) {
  //     drawRectangle();
  //   }
  // }

  if (userImage != null) {
    image(userImage, 0, 0, 640, 480);
  }
}

function changeBG() {
  let val = random(255);
  background(val);
}

function drawLine() {
  strokeWeight(slider.value());
  if (isChecked) {
    console.log("here");
    stroke(255);
  } else {
    stroke(colPic.color());
  }

  line(mouseX, mouseY, pmouseX, pmouseY);
}

function drawRectangle() {
  fill(255, 255, 0);
  rect(mouseX, mouseY, 55, 55);
}

// function drawText(text) {
//   let inp = createInput("");
//   inp.position(0, 0);
//   inp.size(100);
//   inp.input(myInputEvent);
// }

function uploadImage() {
  // upload
  // resize
}

function saveBoardAsImage() {
  // should be async. save it.
}

function myCheckedEvent() {
  if (eraseSwitch.checked()) {
    isChecked = true;
  } else {
    isChecked = false;
  }
}

function handleFile(file) {
  if (file.type === "image") {
    userImage = createImg(file.data, "");
    userImage.hide();
  } else {
    userImage = null;
  }
}

// let shape1;
// let shape2;

// function setup() {
//   createCanvas(w, h);
//   shape1 = new Draggable(100, 100, 200, 200);
// }

// function draw() {
//   background(255);
//   shape1.over();
//   shape1.update();
//   shape1.show();
// }

// function mousePressed() {
//   shape1.pressed();
// }

// function mouseReleased() {
//   shape1.released();
// }

// function doubleClicked() {
//   shape1.updateText();
// }

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

let stop = document.getElementById('stop')

let randomNum = getRandomInt(3)

let x;
let y;

let xspeed;
let yspeed;

let dvd;

let r, g, b;

let img;

function preload() {
  dvd = loadImage("dvdwhite.png");
}


function pickColor() {
  r = random(100, 256);
  g = random(100, 256);
  b = random(100, 256);
}

function setup() {
  var canvas = createCanvas(window.innerWidth, window.innerHeight);
  canvas.parent(document.body);
  canvas.id = "canvas1"
  background(0);
  x = random(width);
  y = random(height);
  xspeed = 2;
  yspeed = 2;
  pickColor();
  noStroke();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {

background(0);
tint(r, g, b);
image(dvd, x, y);


x = x + xspeed;
y = y + yspeed;

if (x + dvd.width >= width) {
  xspeed = -xspeed;
  x = width - dvd.width;
  pickColor();
} else if (x <= 0) {
  xspeed = -xspeed;
  x = 0;
  pickColor();
}

if (y + dvd.height >= height) {
  yspeed = -yspeed;
  y = height - dvd.height;
  pickColor();
} else if (y <= 0) {
  yspeed = -yspeed;
  y = 0;
  pickColor();
}
}

stop.addEventListener("click", function(){
    let p5canvas = document.getElementById('defaultCanvas0')
    document.body.style.backgroundColor = 'black'

    if (p5canvas.style.opacity !== '0') {
        p5canvas.style.opacity = '0'
    } else {
        p5canvas.style.opacity = '1'

    }

    // document.querySelectorAll('canvas').forEach(canvas => canvas.style.opacity = "0")
})
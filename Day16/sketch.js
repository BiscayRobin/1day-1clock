class Time {
    constructor(date) {
        this.hour = date.getHours();
        this.minute = date.getMinutes();
        this.second = date.getSeconds();
    }
}

let width;
let height;

function windowResized() {
    width = windowWidth;
    height = windowHeight;
    resizeCanvas(windowWidth, windowHeight);
}


function setup() {
    width = windowWidth;
    height = windowHeight;
    createCanvas(width, height);
    frameRate(30);
}

let strum = 1;

let offsets = [0, 0, 0];

function draw() {
    let ts = new Time(new Date());
    let offsetsAdd = [ts.hour / 24, ts.minute / 60, ts.second / 60];
    background(220);
    stroke(4);
    noFill();
    for (let i = 0; i < 3; i++) {
        strokeWeight(4);
        beginShape();
        vertex(0, height);
        for (var x = 0; x < width / 3; x++) {
            var angle = offsets[i] + x * offsetsAdd[i] / 10;
            var y = map(sin(angle), -strum, strum, height / 2 - 100, height / 2 + 100);
            vertex(x, y);
        }
        vertex(width / 3, height);
        endShape();
        translate(width / 3, 0);
        strokeWeight(10);
        offsets[i] += offsetsAdd[i];
        line(0, 0, 0, height);
    }
}
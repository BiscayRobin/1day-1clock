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

let colors = ['#577399', '#577399', '#577399'];

function draw() {
    let ts = new Time(new Date());
    let offsetsAdd = [ts.hour / 24, ts.minute / 60, ts.second / 60];
    background('#F7F7FF');
    strokeWeight(6);
    noFill();
    push();
    for (let i = 0; i < 3; i++) {
        stroke(colors[i]);
        beginShape();
        vertex(0, height);
        for (var x = 0; x < width / 3; x++) {
            var angle = offsets[i] + x * offsetsAdd[i] / 10;
            var y = map(sin(angle), -strum, strum, height / 2 - height / 4, height / 2 + height / 4);
            vertex(x, y);
        }
        vertex(width / 3, height);
        endShape();
        translate(width / 3, 0);
        offsets[i] += offsetsAdd[i];
    }
    pop();
    strokeWeight(10);
    stroke('#fe5f55');
    line(width / 3, 0, width / 3, height);
    line(2 * width / 3, 0, 2 * width / 3, height);
}
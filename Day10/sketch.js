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
    frameRate(20);
}

function draw() {
    background('#252422');
    translate(width / 2, height / 2);
    let ts = new Time(new Date());
    let unit = min([width, height]) / 8;
    let hourRadius = 0.9 * unit;
    let minRadius = 1.9 * unit;
    let secRadius = 3.0 * unit;
    textSize(unit / 1.5);
    ellipseMode(CENTER);

    fill('#eb5e28');
    push();
    let start = ts.hour;
    for (let i = start; i < start + 4; i++) {
        text((i % 24).toString(), hourRadius, 0);
        fill(`rgba(204, 197, 185, ${1 - 0.3 * (i-start)})`);
        rotate(0.6, 0);
    }
    pop();

    push();
    start = ts.minute;
    for (let i = start; i < start + 9; i++) {
        text((i % 60).toString(), minRadius, 0);
        fill(`rgba(204, 197, 185, ${1 - 0.12 * (i-start)})`);
        rotate(0.3, 0);
    }
    pop();

    push();
    start = ts.second;
    for (let i = start; i < start + 15; i++) {
        text((i % 60).toString(), secRadius, 0);
        fill(`rgba(204, 197, 185, ${1 - 0.06 * (i-start)})`);
        rotate(0.2, 0);
    }
    pop();
}
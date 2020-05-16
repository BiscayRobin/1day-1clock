class Time {
    constructor(date) {
        this.hour = date.getHours();
        this.minute = date.getMinutes();
        this.second = date.getSeconds();
    }
}
/*
Format:
[A,B,C,D,E,F,G] ->
 A
B C
 D
E F
 G
*/
let segments = {
    '0': [true, true, true, false, true, true, true],
    '1': [false, false, true, false, false, true, false],
    '2': [true, false, true, true, true, false, true],
    '3': [true, false, true, true, false, true, true],
    '4': [false, true, true, true, false, true, false],
    '5': [true, true, false, true, false, true, true],
    '6': [false, true, false, true, true, true, true],
    '7': [true, false, true, false, false, true, false],
    '8': [true, true, true, true, true, true, true],
    '9': [true, true, true, true, false, true, true],
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
    frameRate(4);
    noStroke();
}

function drawSegments(number, x, y, scalex, scaley) {
    push();
    translate(x, y);
    let segs = segments[number];
    let padding = min([scalex, scaley]) / 10;
    stroke('#00A1AB');
    if (segs[0]) {
        stroke('#FF5200');
    }
    line(padding, 0, scalex - padding, 0);

    stroke('#00A1AB');
    if (segs[1]) {
        stroke('#FF5200');
    }
    line(0, padding, 0, scaley - padding);

    stroke('#00A1AB');
    if (segs[2]) {
        stroke('#FF5200');
    }
    line(scalex, padding, scalex, scaley - padding);

    stroke('#00A1AB');
    if (segs[3]) {
        stroke('#FF5200');
    }
    line(padding, scaley, scalex - padding, scaley);

    stroke('#00A1AB');
    if (segs[4]) {
        stroke('#FF5200');
    }
    line(0, scaley + padding, 0, 2 * scaley - padding);

    stroke('#00A1AB');
    if (segs[5]) {
        stroke('#FF5200');
    }
    line(scalex, scaley + padding, scalex, 2 * scaley - padding);

    stroke('#00A1AB');
    if (segs[6]) {
        stroke('#FF5200');
    }
    line(padding, 2 * scaley, scalex - padding, 2 * scaley);

    pop();
}

function draw() {
    background('#00263B');
    let strokeWeightSegs = min([width, height]) / 48;
    strokeWeight(strokeWeightSegs);
    let strokeWeightPoints = 2 * strokeWeightSegs;

    let ts = new Time(new Date());
    let yspace = height / 8 / 8;
    let xspace = width / 8 / 8;
    let ystart = height / 4;
    let xstart = width / 10;

    translate(4 * xspace, 0);
    drawSegments(Math.floor(ts.hour / 10), xspace, ystart, xstart, ystart);
    translate(2 * (xspace) + xstart, 0);
    drawSegments(ts.hour % 10, xspace, ystart, xstart, ystart);
    translate(2 * (xspace) + xstart, 0);

    strokeWeight(strokeWeightPoints);
    stroke('#6F0000');
    point(xspace, ystart + 10 * yspace);
    point(xspace, ystart + 20 * yspace);
    strokeWeight(strokeWeightSegs);
    translate(2 * xspace, 0);

    drawSegments(Math.floor(ts.minute / 10), xspace, ystart, xstart, ystart);
    translate(2 * (xspace) + xstart, 0);
    drawSegments(ts.minute % 10, xspace, ystart, xstart, ystart);
    translate(2 * (xspace) + xstart, 0);

    strokeWeight(strokeWeightPoints);
    stroke('#6F0000');
    point(xspace, ystart + 10 * yspace);
    point(xspace, ystart + 20 * yspace);
    strokeWeight(strokeWeightSegs);
    translate(2 * xspace, 0);

    drawSegments(Math.floor(ts.second / 10), xspace, ystart, xstart, ystart);
    translate(2 * (xspace) + xstart, 0);
    drawSegments(ts.second % 10, xspace, ystart, xstart, ystart);
    translate(2 * (xspace) + xstart, 0);

}
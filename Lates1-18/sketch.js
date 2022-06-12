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
    frameRate(4);
    noStroke();
}

function draw() {

    background("#70D6FF")
    strokeWeight(min([width, height]) / 50)

    let ts = new Time(new Date());

    let hourRotation = map(ts.hour, 0, 24, 0, 2* Math.PI);
    let minuteRotation = map(ts.minute + map(ts.hour, 0, 24, 0, 60), 0, 60, 0, 2* Math.PI);
    let secondRotation = map((ts.second + ts.minute + map(ts.hour, 0, 24, 0, 60)), 0, 60, 0, 2* Math.PI);

    let spiralSize = 1080;
    let spiralAngle = min([width, height]) / 30;
    let spiralRoughness = 0.1;
    stroke("#FF70A6")
    drawSpiral(spiralRoughness, spiralAngle, 0, (8 * spiralSize / 15), hourRotation);
    stroke("#FF9770")
    drawSpiral(spiralRoughness, spiralAngle, (8 * spiralSize / 15), (12 * spiralSize / 15), minuteRotation);
    stroke("#FFD670")
    drawSpiral(spiralRoughness, spiralAngle, (12 * spiralSize / 15), spiralSize, secondRotation);
}

function drawSpiral(angle, dispersion, start, end, rotation) {
    let firstX = width / 2;
    let firstY = height / 2;
    for(let i = start; i < end; i++) {
        nextAngle = (angle / 10) * i;
        x = width / 2 + (dispersion * nextAngle) * Math.sin(nextAngle + rotation);    
        y = height / 2 + (dispersion * nextAngle) * Math.cos(nextAngle + rotation);
        if(i != start) {
            line(firstX, firstY, x, y);
        }
        firstX = x;
        firstY = y;
    }
}
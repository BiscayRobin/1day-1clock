class Time {
    constructor(date) {
        this.hour = date.getHours();
        this.minute = date.getMinutes();
        this.second = date.getSeconds();
    }

    toAngleArray() {
        return [
            (this.hour / 24) * (2 * Math.PI),
            (this.minute / 60) * (2 * Math.PI),
            (this.second / 60) * (2 * Math.PI),
        ];
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
}

function draw() {
    background('#FFE66D');
    noFill();
    translate(width / 2, height / 2);

    let strokeWeightSegs = min([width, height]) / 16;
    let circleRadius = 10 * (min([width, height]) / 16);
    let ts = new Time(new Date());
    let angles = ts.toAngleArray();

    strokeWeight(strokeWeightSegs);

    stroke('#00A8E8');
    arc(0, 0, circleRadius, circleRadius, -HALF_PI, angles[0] - HALF_PI);

    stroke('#007EA7');
    arc(0, 0, circleRadius - 2 * strokeWeightSegs, circleRadius - 2 * strokeWeightSegs, -HALF_PI, angles[1] - HALF_PI);

    stroke('#003459');
    arc(0, 0, circleRadius - 4 * strokeWeightSegs, circleRadius - 4 * strokeWeightSegs, -HALF_PI, angles[2] - HALF_PI);

    noStroke();
    fill('#00171F');
    circle(0, 0, circleRadius - 5 * strokeWeightSegs);
}
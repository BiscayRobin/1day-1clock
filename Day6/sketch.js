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
    let strokeWeightSegs = min([width, height]) / 16;
    let circleRadius = 5 * (min([width, height]) / 16);
    let ts = new Time(new Date());
    let angles = ts.toAngleArray();
    let pointStep = 0.001;

    strokeWeight(strokeWeightSegs);
    translate(width / 2, height / 2);

    stroke('#00A8E8');
    for (let i = 0; i < angles[0]; i += pointStep) {
        let x = sin(i) * circleRadius;
        let y = -cos(i) * circleRadius;
        point(x, y);
    }

    stroke('#007EA7');
    for (let i = 0; i < angles[1]; i += pointStep) {
        let x = sin(i) * (circleRadius - strokeWeightSegs);
        let y = -cos(i) * (circleRadius - strokeWeightSegs);
        point(x, y);
    }

    stroke('#003459');
    for (let i = 0; i < angles[2]; i += pointStep) {
        let x = sin(i) * (circleRadius - 2 * strokeWeightSegs);
        let y = -cos(i) * (circleRadius - 2 * strokeWeightSegs);
        point(x, y);
    }

    push();
    noStroke();
    fill('#00171F');
    circle(0, 0, 2 * (circleRadius - 2.5 * strokeWeightSegs));
    pop();

}
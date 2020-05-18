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
    noStroke();
}

function draw() {
    background('#E63946');
    let strokeWeightSegs = min([width, height]) / 48;
    let circleRadius = 5 * (min([width, height]) / 12);
    let hourLen = (min([width, height]) / 4);
    let minuteLen = 2 * (min([width, height]) / 6);
    let secondLen = 3 * min([width, height]) / 8;
    let ts = new Time(new Date());
    let angles = ts.toAngleArray();

    strokeWeight(strokeWeightSegs);
    translate(width / 2, height / 2);

    push();
    stroke('#457B9D');
    rotate(angles[2]);
    line(0, 0, 0, -secondLen);
    pop();

    push();
    stroke('#A8DADC');
    rotate(angles[1]);
    line(0, 0, 0, -minuteLen);
    pop();

    push();
    stroke('#F1FAEE');
    rotate(angles[0]);
    line(0, 0, 0, -hourLen);
    pop();

    push();
    noFill();
    stroke('#1D3557');
    circle(0, 0, 2 * circleRadius);
    pop();

    stroke('#F1FAEE');
    strokeWeight(strokeWeightSegs / 4);
    for (let i = 0; i < 2 * Math.PI; i += 2 * Math.PI / 60) {
        push();
        rotate(i);
        point(0, -circleRadius);
        pop();
    }
}
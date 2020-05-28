class Time {
    constructor(date) {
        this.hour = date.getHours();
        this.minute = date.getMinutes();
        this.second = date.getSeconds();
    }

    toAngle() {
        return [
            (this.hour / 24) * (2 * Math.PI) - (Math.PI / 2),
            (this.minute / 60) * (2 * Math.PI) - (Math.PI / 2),
            (this.second / 60) * (2 * Math.PI) - (Math.PI / 2),
        ]
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
    background('#253237');
    let ts = new Time(new Date());
    let angles = ts.toAngle();
    let secLength = min([width, height]) / 3;
    let minLength = min([width, height]) / 9;
    let hourLength = min([width, height]) / 27;
    translate(width / 2, height / 2);

    stroke('#9db4c0');
    strokeWeight(30);
    line(0, 0, cos(angles[2]) * secLength, sin(angles[2]) * secLength);
    translate(cos(angles[2]) * secLength, sin(angles[2]) * secLength);

    stroke('#c2dfe3');
    strokeWeight(25);
    line(0, 0, cos(angles[1]) * minLength, sin(angles[1]) * minLength);
    translate(cos(angles[1]) * minLength, sin(angles[1]) * minLength);

    stroke('#e0fbfc');
    strokeWeight(20);
    line(0, 0, cos(angles[0]) * hourLength, sin(angles[0]) * hourLength);
    translate(cos(angles[0]) * hourLength, sin(angles[0]) * hourLength);

}
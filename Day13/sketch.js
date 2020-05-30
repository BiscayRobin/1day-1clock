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
    let secLength = min([width, height]) / 3;
    let minLength = min([width, height]) / 4;
    let hourLength = min([width, height]) / 6;
    translate(width / 2, height / 2);

    fill('#9db4c0');
    textFont('Courier New');
    noStroke();
    textAlign(CENTER);
    textSize(30);
    for (let i = ts.second, j = 0; j < 60; j += 2) {
        text(((i + j) % 60).toString(), cos(j / 60 * 2 * PI - PI / 2) * (secLength + 20), sin(j / 60 * 2 * PI - PI / 2) * (secLength + 30));
    }

    fill('#c2dfe3');
    for (let i = ts.minute + 20, j = 0; j < 60; j += 2) {
        text(((i + j) % 60).toString(), cos(j / 60 * 2 * PI - PI / 2) * (minLength + 40), sin(j / 60 * 2 * PI - PI / 2) * (minLength + 40));
    }

    fill('#e0fbfc');
    for (let i = ts.hour + 8, j = 0; j < 12; j += 1) {
        text(((i + j) % 12).toString(), cos(j / 12 * 2 * PI - PI / 2) * (hourLength + 40), sin(j / 12 * 2 * PI - PI / 2) * (hourLength + 40));
    }

    stroke('#9db4c0');
    strokeWeight(25);
    line(0, 0, cos(4.71238898038) * secLength, sin(4.71238898038) * secLength);

    stroke('#c2dfe3');
    strokeWeight(25);
    line(0, 0, cos(2.61799387799) *
        minLength, sin(2.61799387799) * minLength);

    stroke('#e0fbfc');
    strokeWeight(25);
    line(0, 0, cos(0.52359877559) *
        hourLength, sin(0.52359877559) *
        hourLength);

}
class Time {
    constructor(date) {
        this.hour = date.getHours() % 12;
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
    noFill();
}

function draw() {
    background('#223843');
    let ts = new Time(new Date());
    let baseRadius = 50;
    translate(width / 2, height / 2);
    if (ts.second % 2 == 0) {
        rotate(Math.PI / 64, 0);
    } else {
        rotate(-Math.PI / 64, 0);
    }

    if (ts.hour == 0) {
        stroke('#F77F00');
        strokeWeight(4);
        for (let j = 0; j < ts.minute; j++) {
            let radius = j * (min([height, width])) / 2 / 60 + baseRadius;
            point(radius * cos(j / 60 * Math.PI * 2), radius * sin(j / 60 * Math.PI * 2));
        }
        stroke('#D62828');
        strokeWeight(10);
        radius = (min([height, width])) / 2 + baseRadius;
        circle(0, 0, radius * 2);
    }
    if (ts.hour == 1) {
        stroke('#F77F00');
        strokeWeight(2);
        for (let j = 0; j < ts.minute; j++) {
            let radius = j * (min([height, width])) / 2 / 60 + baseRadius;
            circle(0, 0, radius * 2);
        }
        stroke('#D62828');
        strokeWeight(10);
        radius = (min([height, width])) / 2 + baseRadius;
        circle(0, 0, radius * 2);
    } else {
        stroke('#F77F00');
        strokeWeight(2);
        for (let j = 0; j < ts.minute; j++) {
            let radius = j * (min([height, width])) / 2 / 60 + baseRadius;
            for (let i = 1; i <= ts.hour; i++) {
                line(radius * cos(2 * Math.PI * (i - 1) / ts.hour), radius * sin(2 * Math.PI * (i - 1) / ts.hour), radius * cos(2 * Math.PI * i / ts.hour), radius * sin(2 * Math.PI * i / ts.hour));
            }
        }

        stroke('#D62828');
        strokeWeight(10);
        radius = (min([height, width])) / 2 + baseRadius;
        for (let i = 1; i <= ts.hour; i++) {
            line(radius * cos(2 * Math.PI * (i - 1) / ts.hour), radius * sin(2 * Math.PI * (i - 1) / ts.hour), radius * cos(2 * Math.PI * i / ts.hour), radius * sin(2 * Math.PI * i / ts.hour));
        }
    }
}

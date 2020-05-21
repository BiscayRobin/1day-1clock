class Time {
    constructor(date) {
        this.hour = date.getHours();
        this.minute = date.getMinutes();
        this.second = date.getSeconds();
    }

    toBerlinClock() {
        let array = [];
        array.push(Math.floor(this.hour / 5))
        array.push(this.hour % 5);
        array.push(Math.floor(this.minute / 5));
        array.push(this.minute % 5);
        array.push(this.second % 2);
        return array;
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
    background(0);
    let ts = new Time(new Date());
    let data = ts.toBerlinClock();
    console.log(data);
    fill(255);
    if (data[4]) {
        circle(width / 2, height / 8, height / 8);
    }
    push();
    for (let i = 0; i < 4; i++) {
        translate(width / 30, 0);
        if (i < data[0])
            rect(width / 12, 2 * (height / 8), width / 6, height / 8);
        translate(width / 6, 0);
    }
    pop();
    translate(0, (height / 8));
    push();
    for (let i = 0; i < 4; i++) {
        translate(width / 30, 0);
        if (i < data[1])
            rect(width / 12, 2 * (height / 8), width / 6, height / 8);
        translate(width / 6, 0);
    }
    pop();
    translate(0, height / 8);
    push();
    for (let i = 0; i < 11; i++) {
        translate(width / 64, 0);
        if (i < data[2])
            rect(width / 12, 2 * (height / 8), width / 32, height / 8);
        translate(width / 32, 0);
    }
    pop();
    translate(0, height / 8);
    push();
    for (let i = 0; i < 4; i++) {
        translate(width / 30, 0);
        if (i < data[3])
            rect(width / 12, 2 * (height / 8), width / 6, height / 8);
        translate(width / 6, 0);
    }
    pop();
}
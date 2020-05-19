function randomInt(max, min = 0) {
    return Math.floor(Math.random() * (max - min) + min);
}

class Domino {
    constructor(point) {
        if (point > 6) {
            this.top = randomInt(6, point - 6);
        } else {
            this.top = randomInt(point);
        }
        this.bottom = point - this.top;
    }
}

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

let ts = new Time(new Date());
let ts_swap = new Time(new Date());
let dominos = [
    new Domino(Math.floor(ts.hour / 10)),
    new Domino(ts.hour % 10),
    new Domino(Math.floor(ts.minute / 10)),
    new Domino(ts.minute % 10),
    new Domino(Math.floor(ts.second / 10)),
    new Domino(ts.second % 10),
];

function drawPoints(number, strkWght) {
    push();
    stroke(0);
    strokeWeight(strkWght);
    if (number % 2 != 0) {
        point(width / 16, 2 * (height / 12));
    }
    if (number >= 2) {
        point(width / 32, 1 * (height / 12));
        point(3 * (width / 32), 3 * (height / 12));
    }
    if (number >= 4) {
        point(3 * (width / 32), 1 * (height / 12));
        point(width / 32, 3 * (height / 12));
    }
    if (number >= 6) {
        point(3 * (width / 32), 2 * (height / 12));
        point(width / 32, 2 * (height / 12));
    }
    pop();
}

function draw() {
    background(0);
    fill(255);
    let xspacing = 2 * (width / 8) / 7;
    let strokeWeightPoints = min([width, height]) / 16;
    let ts = new Time(new Date());

    if (ts_swap.second % 10 != ts.second % 10) {
        ts_swap.second = ts.second % 10 + 10 * Math.floor(ts_swap.second / 10);
        dominos[5] = new Domino(ts.second % 10);
        if (ts_swap.second / 10 != ts.second / 10) {
            ts_swap.second = ts.second;
            dominos[4] = new Domino(Math.floor(ts.second / 10));

            if (ts_swap.minute % 10 != ts.minute % 10) {
                ts_swap.minute = ts.minute % 10 + 10 * Math.floor(ts_swap.minute / 10);
                dominos[3] = new Domino(ts.minute % 10);
                if (ts_swap.minute / 10 != ts.minute / 10) {
                    ts_swap.minute = ts.minute;
                    dominos[2] = new Domino(Math.floor(ts.minute / 10));

                    if (ts_swap.hour % 10 != ts.hour % 10) {
                        ts_swap.hour = ts.hour % 10 + 10 * Math.floor(ts_swap.hour / 10);
                        dominos[1] = new Domino(ts.hour % 10);
                        if (ts_swap.hour / 10 != ts.hour / 10) {
                            ts_swap.hour = ts.hour;
                            dominos[0] = new Domino(Math.floor(ts.hour / 10));
                        }
                    }
                }
            }
        }
    }
    translate(0, height / 6);
    for (let elem of dominos) {
        translate(xspacing, 0);
        rect(0, 0, width / 8, 4 * (height / 6), 20);

        drawPoints(elem.top, strokeWeightPoints);

        push();
        translate(0, height / 3);
        stroke(0);
        strokeWeight(strokeWeightPoints / 5);
        line(0, 0, width / 8, 0);

        drawPoints(elem.bottom, strokeWeightPoints);

        pop();
        translate(width / 8, 0);
    }
}
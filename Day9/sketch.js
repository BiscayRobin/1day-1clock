class Time {
    constructor(date) {
        this.hour = date.getHours();
        this.minute = date.getMinutes();
        this.second = date.getSeconds();
    }

    toTimeGauge() {
        if (lastSec != this.second) {
            lastSec = this.second;
            interSec = 0;
        } else {
            interSec++;
        }
        return [
            (this.hour * 60 * 60 + this.minute * 60 + this.second) / (23 * 60 * 60 + 59 * 60 + 59),
            (this.minute * 60 + this.second) / (59 * 60 + 59),
            (this.second * 20 + interSec) / (59 * 20 + 19),
        ];
    }
}

let width;
let height;
let interSec = 0;
let lastSec = 0;

function windowResized() {
    width = windowWidth;
    height = windowHeight;
    resizeCanvas(windowWidth, windowHeight);
}

function setup() {
    width = windowWidth;
    height = windowHeight;
    createCanvas(width, height);
    frameRate(20);
    //noStroke();
}

function draw() {
    let inHeight = 2 * (height / 4);
    let inWidth = width / 4;
    let spacing = inWidth / 4;
    let strokeWeightSegs = min([height, width]) / 32;
    let ts = new Time(new Date());
    let times = ts.toTimeGauge();
    background(0);
    fill(255);

    translate(0, height / 4);
    translate(spacing, 0);
    noStroke();
    fill('#8F6A47');
    rect(-1, -1, inWidth + 2, inHeight + 2);
    fill('#196BA8');
    rect(0, height / 2 - inHeight * times[0], inWidth, inHeight * times[0]);

    fill('#8F6A47');
    arc(0, height / 4, 80, inHeight + strokeWeightSegs, HALF_PI, -HALF_PI);
    arc(inWidth, height / 4, 80, inHeight + strokeWeightSegs, -HALF_PI, HALF_PI);
    strokeWeight(strokeWeightSegs);
    stroke('#7C8A93');
    line(0, 0, inWidth, 0);
    line(0, height / 2, inWidth, height / 2);

    translate(inWidth, 0);

    translate(spacing, 0);
    noStroke();
    fill('#8F6A47');
    rect(-1, -1, inWidth + 2, inHeight + 2);
    fill('#C66202');
    rect(0, height / 2 - inHeight * times[1], inWidth, inHeight * times[1]);

    fill('#8F6A47');
    arc(0, height / 4, 80, inHeight + strokeWeightSegs, HALF_PI, -HALF_PI);
    arc(inWidth, height / 4, 80, inHeight + strokeWeightSegs, -HALF_PI, HALF_PI);
    strokeWeight(strokeWeightSegs);
    stroke('#7C8A93');
    line(0, 0, inWidth, 0);
    line(0, height / 2, inWidth, height / 2);
    translate(inWidth, 0);

    translate(spacing, 0);
    noStroke();
    fill('#8F6A47');
    rect(-1, -1, inWidth + 2, inHeight + 2);
    fill('#BA0E2A');
    rect(0, height / 2 - inHeight * times[2], inWidth, inHeight * times[2]);

    fill('#8F6A47');
    arc(0, height / 4, 80, inHeight + strokeWeightSegs, HALF_PI, -HALF_PI);
    arc(inWidth, height / 4, 80, inHeight + strokeWeightSegs, -HALF_PI, HALF_PI);
    strokeWeight(strokeWeightSegs);
    stroke('#7C8A93');
    line(0, 0, inWidth, 0);
    line(0, height / 2, inWidth, height / 2);
    translate(inWidth, 0);
}
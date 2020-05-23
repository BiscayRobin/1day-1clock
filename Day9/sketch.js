class Time {
    constructor(date) {
        this.hour = date.getHours();
        this.minute = date.getMinutes();
        this.second = date.getSeconds();
    }

    toTimeGauge() {
        //interSec++;
        //interSec = interSec % 10;   
        return [
            (this.hour * 60 * 60 + this.minute * 60 + this.second) / (23 * 60 * 60 + 59 * 60 + 59),
            (this.minute * 60 + this.second) / (59 * 60 + 59),
            //(this.second * 10 + interSec) / 59 * 10 + 9,
            this.second / 59,
        ];
    }
}

let width;
let height;
let interSec = 0;

function windowResized() {
    width = windowWidth;
    height = windowHeight;
    resizeCanvas(windowWidth, windowHeight);
}

function setup() {
    width = windowWidth;
    height = windowHeight;
    createCanvas(width, height);
    frameRate(10);
    //noStroke();
}

function draw() {
    let inHeight = 2 * (height / 4);
    let inWidth = width / 4;
    let spacing = inWidth / 4;
    let measureUnit = min([height, width]) / 16;
    let ts = new Time(new Date());
    let times = ts.toTimeGauge();
    background(0);
    fill(255);
    stroke('#505000');

    translate(0, height / 4);

    translate(spacing, 0);
    rect(0, 0, inWidth, inHeight * times[0]);
    translate(inWidth, 0);

    translate(spacing, 0);
    rect(0, 0, inWidth, inHeight * times[1]);
    translate(inWidth, 0);

    translate(spacing, 0);
    rect(0, 0, inWidth, inHeight * times[2]);
    translate(inWidth, 0);
}
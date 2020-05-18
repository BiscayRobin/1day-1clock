Number.prototype.pad = function (n) {
    return new Array(n).join('0').slice((n || 2) * -1) + this;
}

class Time {
    constructor(date) {
        this.hour = date.getHours();
        this.minute = date.getMinutes();
        this.second = date.getSeconds();
    }
    toColorCode() {
        let string = '#';
        for (let key in this) {
            let value = this[key];
            let paddedString = value.pad(3 - value.toString().length);
            string = string + paddedString;
        }
        return string;
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
    let ts = new Time(new Date());
    let color = ts.toColorCode();
    textSize(min([width, height]) / 10);
    textAlign(CENTER, CENTER);
    background(color);
    fill(255);
    text(color, width / 2, height / 2);
}
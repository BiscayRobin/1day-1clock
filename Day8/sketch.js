class Time {
    constructor(date) {
        this.hour = date.getHours();
        this.minute = date.getMinutes();
        this.second = date.getSeconds();
    }

    toDayAngle() {
        return 2 * Math.PI * (this.hour * 60 * 60 + this.minute * 60 + this.second) / (23 * 60 * 60 + 59 * 60 + 59);
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
    background(255);
    noFill();
    ellipseMode(CENTER);

    noStroke();

    push();
    fill('#10A3F2');
    arc(width / 2, height / 2, 12 * (min([height, width]) / 16), 12 * (min([height, width]) / 16), ts.toDayAngle(), Math.PI + ts.toDayAngle());

    fill('#303030');
    arc(width / 2, height / 2, 12 * (min([height, width]) / 16), 12 * (min([height, width]) / 16), Math.PI + ts.toDayAngle(), ts.toDayAngle());
    pop();

    fill(color(0, 35, 106, 210));
    arc(width / 2, height / 2, 12 * (min([height, width]) / 16), 12 * (min([height, width]) / 16), 0, Math.PI);

    noFill();
    strokeWeight((min([height, width]) / 16) / 4);
    stroke('#AAA9AD');
    line(width / 2 - (6.5 * (min([height, width]) / 16)), height / 2, width / 2 + (6.5 * (min([height, width]) / 16)), height / 2);

    strokeWeight((min([height, width]) / 16) / 2);
    stroke('#DD8F42');
    circle(width / 2, height / 2, 14 * (min([height, width]) / 16));

    strokeWeight((min([height, width]) / 16) / 2);
    stroke('#BD6F22');
    circle(width / 2, height / 2, 12 * (min([height, width]) / 16));

    strokeWeight((min([height, width]) / 16) / 1.5);
    stroke('#CD7F32');
    circle(width / 2, height / 2, 13 * (min([height, width]) / 16));

}
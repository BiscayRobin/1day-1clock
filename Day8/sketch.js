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
    let moonSkyColor = '#303030';
    let sunSkyColor = '#10A3F2';
    let moonColor = '#D0D5D2';
    let sunColor = '#E69505';
    let measureUnit = min([height, width]) / 16;
    let ts = new Time(new Date());
    background(255);
    noFill();
    ellipseMode(CENTER);
    translate(width / 2, height / 2);
    noStroke();

    // sun and moon background
    fill(sunSkyColor);
    arc(0, 0, 12 * measureUnit, 12 * measureUnit, ts.toDayAngle(), Math.PI + ts.toDayAngle());
    fill(moonSkyColor);
    arc(0, 0, 12 * measureUnit, 12 * measureUnit, Math.PI + ts.toDayAngle(), ts.toDayAngle());

    //sun and moon model
    push();
    fill(sunColor);
    rotate(Math.PI / 2 + ts.toDayAngle());
    circle(3 * measureUnit, 0, 3 * measureUnit);
    rotate(Math.PI);
    fill(moonColor);
    circle(3 * measureUnit, 0, 3 * measureUnit, 4 * measureUnit, 0, Math.PI);
    fill(moonSkyColor);
    circle(3 * measureUnit, measureUnit, 3 * measureUnit, 4 * measureUnit, 0, Math.PI);
    pop();

    //hiding side
    fill(color(0, 35, 106, 225));
    arc(0, 0, 12 * measureUnit, 12 * measureUnit, 0, Math.PI);

    //middle line
    strokeWeight((measureUnit) / 4);
    stroke('#AAA9AD');
    line(-6.5 * measureUnit, 0, 6.5 * measureUnit, 0);

    //outer circle
    noFill();
    strokeWeight(measureUnit / 2);
    stroke('#DD8F42');
    circle(0, 0, 14 * (measureUnit));

    //middle circle
    strokeWeight((measureUnit) / 2);
    stroke('#BD6F22');
    circle(0, 0, 12 * (measureUnit));

    //inner circle
    strokeWeight((measureUnit) / 1.5);
    stroke('#CD7F32');
    circle(0, 0, 13 * (measureUnit));

}
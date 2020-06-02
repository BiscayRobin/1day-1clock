class Time {
    constructor(date) {
        this.hour = date.getHours();
        this.minute = date.getMinutes();
        this.second = date.getSeconds();
    }
    toDayProportion() {
        return (this.hour * 60 * 60 + this.minute * 60 + this.second) / (23 * 60 * 60 + 59 * 60 + 59);
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

let sandColor = '#A3E7FC';
let backgroundColor = '#3C030D';
let hourglassColor = '#26C485';

function draw() {
    background(backgroundColor);

    let ts = new Time(new Date());
    let day = ts.toDayProportion();
    console.log(day);

    translate(width / 2, height / 2);

    noStroke();
    fill(sandColor);
    beginShape();
    curveVertex(0, 0);
    curveVertex(0, 0);
    curveVertex(-width / 8, -height / 3 + day * (height / 3));
    curveVertex(width / 8, -height / 3 + day * (height / 3));
    curveVertex(0, 0);
    curveVertex(0, 0);
    endShape();

    beginShape();
    curveVertex(0, height / 3 - day * (height / 3));
    curveVertex(0, height / 3 - day * (height / 3));
    curveVertex(-width / 8, height / 3);
    curveVertex(width / 8, height / 3);
    curveVertex(0, height / 3 - day * (height / 3));
    curveVertex(0, height / 3 - day * (height / 3));
    endShape();

    //right hiding
    fill(backgroundColor);
    beginShape();
    vertex(0, 0);
    vertex(0, 0);
    vertex(width / 4.5, height / 2);
    vertex(width / 4.5, -height / 2);
    vertex(0, 0);
    vertex(0, 0);
    endShape();

    //left hiding
    beginShape();
    vertex(0, 0);
    vertex(0, 0);
    vertex(-width / 4.5, height / 2);
    vertex(-width / 4.5, -height / 2);
    vertex(0, 0);
    vertex(0, 0);
    endShape();

    //upper shell   
    noFill();
    strokeWeight(10);
    stroke(hourglassColor);
    beginShape();
    curveVertex(0, 0);
    curveVertex(0, 0);
    curveVertex(-width / 8, -height / 3);
    curveVertex(width / 8, -height / 3);
    curveVertex(0, 0);
    curveVertex(0, 0);
    endShape();

    //lower shell
    beginShape();
    curveVertex(0, 0);
    curveVertex(0, 0);
    curveVertex(-width / 8, height / 3);
    curveVertex(width / 8, height / 3);
    curveVertex(0, 0);
    curveVertex(0, 0);
    endShape();

}
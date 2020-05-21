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
    noStroke();
}

function draw() {
    background("#2EC4B6");

    let rowHeight = height / 6;
    let betweenRows = rowHeight / 6;
    let fourLength = width / 5;
    let fourSpacing = fourLength / 5;
    let startPadding = fourSpacing;
    let ElevenLength = (width - 2 * startPadding) / 12;
    let ElevenSpacing = ElevenLength / 10;
    let ts = new Time(new Date());
    let data = ts.toBerlinClock();
    let offColor = '#011627';
    let onColor = '#FF9F1C';
    let fifteenColor = '#E71D36';

    translate(0, betweenRows);

    push();
    //seconds
    if (data[4])
        fill(onColor);
    else
        fill(offColor);
    ellipseMode(CENTER);
    circle(width / 2, rowHeight / 2, rowHeight);
    pop();

    translate(startPadding, 0);
    translate(0, betweenRows + rowHeight);

    push();
    //5 hours
    for (let i = 0; i < 4; i++) {
        if (i < data[0])
            fill(onColor);
        else
            fill(offColor);
        rect(0, 0, fourLength, rowHeight);
        translate(fourLength + fourSpacing, 0);
    }
    pop();

    translate(0, betweenRows + rowHeight);
    push();
    //hours
    for (let i = 0; i < 4; i++) {
        if (i < data[1])
            fill(onColor);
        else
            fill(offColor);
        rect(0, 0, fourLength, rowHeight);
        translate(fourLength + fourSpacing, 0);
    }
    pop();

    translate(0, betweenRows + rowHeight);
    push();
    for (let i = 0; i < 11; i++) {
        if (i < data[2] && (i + 1) % 3 === 0)
            fill(fifteenColor)
        else if (i < data[2])
            fill(onColor);
        else
            fill(offColor);
        rect(0, 0, ElevenLength, rowHeight);
        translate(ElevenLength + ElevenSpacing, 0);
    }
    pop();

    translate(0, betweenRows + rowHeight);
    push();
    for (let i = 0; i < 4; i++) {
        if (i < data[3])
            fill(onColor);
        else
            fill(offColor);
        rect(0, 0, fourLength, rowHeight);
        translate(fourLength + fourSpacing, 0);
    }
    pop();
}
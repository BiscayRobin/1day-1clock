Number.prototype.pad = function (n) {
    return new Array(n).join('0').slice((n || 2) * -1) + this;
}

class Time {
    constructor(date) {
        this.hour = date.getHours();
        this.minute = date.getMinutes();
        this.second = date.getSeconds();
    }

    toConcatenatedString = () => [
        this.hour.pad(3 - this.hour.toString().length),
        this.minute.pad(3 - this.minute.toString().length),
        this.second.pad(3 - this.second.toString().length),
    ].join('')
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
    background('#363537');
    let ts = new Time(new Date());
    let searching = ts.toConcatenatedString();

    let charwidth = width / 20;
    textAlign(CENTER);
    textSize(charwidth);
    textFont('Courier New');

    let length = 6;
    let index = pi.indexOf(searching);
    if (index == -1) {
        length = 4;
        index = pi.indexOf(searching.substr(0, length));
    }


    fill(255);
    text("At index " + index + " in PI:", width / 2, charwidth * 2);
    let test = (width - (13 * (charwidth / 2) + length * (charwidth / 2))) / 2;
    console.log(width, (18 * (charwidth / 2) + length * (charwidth / 2)), test);
    translate(test, 0);
    textAlign(LEFT);

    fill('#006E90');
    text(pi.substr(index - 5, 5), 0, height / 2);
    fill('#4ECDC4');
    textStyle(BOLD);
    text(pi.substr(index, length), 6 * (charwidth / 2), height / 2);
    fill('#006E90');
    textStyle(NORMAL);
    text(pi.substr(index + length, 5), 7 * (charwidth / 2) + length * (charwidth / 2) + (length == 4 ? 0 : 5), height / 2);
    console.log();
}
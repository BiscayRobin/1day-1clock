Number.prototype.pad = function (n) {
    return new Array(n).join('0').slice((n || 2) * -1) + this;
}

class Time {
    constructor(date) {
        this.hour = date.getHours();
        this.minute = date.getMinutes();
        this.second = date.getSeconds();
    }

    toDigitsArray() {
        let result = [];
        for (let key in this) {
            let value = this[key];
            let array = value.pad(3 - value.toString().length)
                .split('')
                .map(Number)
                .map(d => d.toString(2)
                    .split('')
                );
            result.push(array);
        }
        while (result[0][0].length < 2) {
            result[0][0].unshift('0');
        }
        while (result[0][1].length < 4) {
            result[0][1].unshift('0');
        }
        while (result[1][0].length < 3) {
            result[1][0].unshift('0');
        }
        while (result[1][1].length < 4) {
            result[1][1].unshift('0');
        }
        while (result[2][0].length < 3) {
            result[2][0].unshift('0');
        }
        while (result[2][1].length < 4) {
            result[2][1].unshift('0');
        }
        return result;
    }
}

let width = 500;
let height = 500;

function setup() {
    createCanvas(width, height);
    frameRate(4);
    noStroke();
}

function draw() {

    let ts = new Time(new Date());
    let dArr = ts.toDigitsArray();

    background('#EFE7BC');
    for (let i = 0; i < dArr.length * 2; i++) {
        let first = Math.floor(i / 2);
        let second = i % 2;
        for (let j = 0; j < dArr[first][second].length; j++) {
            let c;
            let len = dArr[first][second].length;
            if (dArr[first][second][len - j - 1] === '1') {
                c = color('#74BDCB');
            } else {
                c = color('#FFA384');
            }
            fill(c);
            circle(
                (i + 1) * (width / 7), height - (j + 1) * (height / 5), 40);
        }
    }
    stroke('#E7F2F8');
    strokeWeight(5);
    line(2.5 * (width / 7), height / 5 - 0.5 * (height / 7), 2.5 * (width / 7), 4.5 * (height / 5));
    line(4.5 * (width / 7), height / 5 - 0.5 * (height / 5), 4.5 * (width / 7), 4.5 * (height / 5));
}
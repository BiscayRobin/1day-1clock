class Time {
    constructor(date) {
        this.isAM = date.getHours() < 12;
        this.hour = date.getHours() % 12;
        this.minute = Math.floor(date.getMinutes() / 5) * 5;
    }

    toPositionList = () => {
        let time = [{ // il
            line: 0,
            begin: 0,
            end: 2
        }, { // est
            line: 0,
            begin: 3,
            end: 6,
        }, ];
        if (this.hour == 1) { // 1
            time.push(hourToPosition[1]);
            time.push({
                line: 5,
                begin: 5,
                end: 10
            });
        } else if (this.hour == 0 && this.isAM == false) { // midi
            time.push({
                line: 4,
                begin: 0,
                end: 4,
            });
        } else if (this.hour == 0) { // minuit
            time.push({
                line: 4,
                begin: 5,
                end: 11,
            });
        } else { // 2 - 11
            time.push(hourToPosition[this.hour]);
            time.push({
                line: 5,
                begin: 5,
                end: 11,
            })
        }
        if (this.minute >= 35) { // moins
            time.push({
                line: 6,
                begin: 0,
                end: 5,
            })
            if (this.minute == 45) { // le
                time.push({
                    line: 6,
                    begin: 6,
                    end: 8,
                })
            }
            this.minute = 60 - this.minute;
        } else if (this.minute == 15 || this.minute == 30) { // et
            time.push({
                line: 7,
                begin: 0,
                end: 2,
            })
        }
        if (this.minute != 0)
            time.push(minuteToPosition[this.minute]);
        return time;
    }
}

let minuteToPosition = {
    5: {
        line: 8,
        begin: 6,
        end: 10,
    },
    10: {
        line: 6,
        begin: 8,
        end: 11,
    },
    15: {
        line: 7,
        begin: 3,
        end: 8,
    },
    20: {
        line: 8,
        begin: 0,
        end: 5,
    },
    25: {
        line: 8,
        begin: 0,
        end: 10,
    },
    30: {
        line: 9,
        begin: 3,
        end: 8,
    },
};
let hourToPosition = {
    1: {
        line: 2,
        begin: 4,
        end: 7,
    },
    2: {
        line: 0,
        begin: 7,
        end: 11,
    },
    3: {
        line: 1,
        begin: 6,
        end: 11,
    },
    4: {
        line: 1,
        begin: 0,
        end: 6,
    },
    5: {
        line: 3,
        begin: 7,
        end: 11,
    },
    6: {
        line: 3,
        begin: 4,
        end: 7,
    },
    7: {
        line: 2,
        begin: 7,
        end: 11,
    },
    8: {
        line: 3,
        begin: 0,
        end: 4,
    },
    9: {
        line: 2,
        begin: 0,
        end: 4,
    },
    10: {
        line: 5,
        begin: 2,
        end: 5,
    }
};
let width;
let height;
let map = [
    'ILNESTODEUX',
    'QUATRETROIS',
    'NEUFUNESEPT',
    'HUITSIXCINQ',
    'MIDIXMINUIT',
    'ONZERHEURES',
    'MOINSOLEDIX',
    'ETRQUARTPMD',
    'VINGT-CINQU',
    'ETSDEMIEPAM',
];

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
    noLoop();
}

function draw() {
    background('#1E1E24');
    let rowHeight = height / 11;
    let rowSpace = rowHeight / 11;
    let charWidth = rowHeight / 2;
    let ts = new Time(new Date());
    fill(60, 110, 113, 50);
    textFont('Courier New');
    translate(rowSpace, rowHeight - 10);
    textSize(rowHeight);
    let lastPosition = {
        line: 0,
        idx: 0,
    }
    for (let elem of ts.toPositionList()) {
        for (let l = lastPosition.line; l < elem.line; l++) {
            text(map[l].substring(lastPosition.idx), width / 4 + lastPosition.idx * charWidth + lastPosition.idx * rowSpace, l * rowHeight + l * rowSpace);
            lastPosition.idx = 0;
        }
        text(map[elem.line].substring(lastPosition.idx, elem.begin), width / 4 + lastPosition.idx * charWidth + lastPosition.idx * rowSpace, elem.line * rowHeight + elem.line * rowSpace);
        push();
        fill('#5DB7DE');
        text(map[elem.line].substring(elem.begin, elem.end), width / 4 + elem.begin * charWidth + elem.begin * rowSpace, elem.line * rowHeight + elem.line * rowSpace);
        pop();
        lastPosition = {
            line: elem.line,
            idx: elem.end,
        };
    }
    for (let l = lastPosition.line; l < map.length; l++) {
        text(map[l].substring(lastPosition.idx), width / 4 + lastPosition.idx * charWidth + lastPosition.idx * rowSpace, l * rowHeight + l * rowSpace);
        lastPosition.idx = 0;
    }
}
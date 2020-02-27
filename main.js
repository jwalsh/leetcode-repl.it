const judgeCircle = (input) => {
    const state = input
        .split('')
        .reduce((p, c) => {
        const m = c;
        if (m == 'R') {
            p.x++;
        } else if (m == 'L') {
            p.x--;
        } else if (m == 'U') {
            p.y++;            
        } else if (m == 'D') {
            p.y--;
        }
        return p;
    }, {
        x: 0,
        y: 0,
    });
    return state.x == 0 && state.y == 0;
};

console.log(judgeCircle('UD'));

const isCircular = (input) => {
    const path = input.split('');

    // Actions mapper
    let d = [
        [0, 1, 'N'],
        [1, 0, 'E'],
        [0, -1, 'S'],
        [-1, 0, 'W']
    ];

    const state = path.reduce((p, c) => {
        const move = c;
        if (move == 'R') {
            p.dir = (p.dir + 1) % 4;
        } else if (move == 'L') {
            p.dir = (4 + p.dir - 1) % 4;
        } else {
            // console.log(`Forward ${d[p.dir][2]}`);
            p.x += d[p.dir][0];
            p.y += d[p.dir][1];
        }
        return p;
    }, {
        x: 0,
        y: 0,
        dir: 0
    });
    return state.x == 0 && state.y == 0;
};

const isRobotBounded = (input) => {
    return isCircular(input + input + input + input);
};
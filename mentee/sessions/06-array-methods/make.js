// Session 06 — what you build in class, and the exercise.

console.log("make.js running");



// > 1. Your **count** → `filter(...).length`
// > 2. Your **filter** loop → `filter`
// > 3. Your **find** loop → `find`, **with a check for not-found**
// > 4. Your **transform** loop → `map`
// > 5. **Keep your sum as a `for...of` loop.** Write a comment saying why you didn't convert it
// > 6. One **chain**: `filter` then `map`, in one statement

const count = players.filter((player) => player.isStarting).length
console.log(count);



const filterHomeRuns = players.filter((player) => player.homeRuns <= 40)
console.log(filterHomeRuns);


function findPlayer(players, name) {
    const findP = players.find((
        (player) => player.name === name
    ));
    if (!findP) {
        return "Not found"
    }

    return findP;
}

console.log(findPlayer(players, "Carson Benge"));


const addTen = players.map((player) => player.homeRuns + 10)
console.log(addTen);



function homeRunTotal(players) {
    let total = 0;
    for (const player of players) {
        total += player.homeRuns
    }
    return total;
}
console.log(homeRunTotal(players));



const changeStarting = players.filter((player) => player.isStarting).map((player) => player.isStarting = false)
console.log(changeStarting);



const players = [
    {
        name: "Francisco Lindor",
        homeRuns: 31,
        isStarting: true,
        positions: ["Shortstop"],
    },
    {
        name: "Juan Soto",
        homeRuns: 43,
        isStarting: false,
        positions: ["Left field", "Right field"],
    },
    {
        name: "Carson Benge",
        homeRuns: 21,
        isStarting: true,
        positions: ["Right field", "Left field", "Center field"],
    },
];

function itemDescription(players) {
    const description = [];

    for (const player of players) {
        const { name, homeRuns } = player;

        description.push(`Player name: ${name} - Home Runs: ${homeRuns}`);
    }
    return description;
}

console.log(itemDescription(players));

function matchCount(player) {
    let count = 0;
    for (let i = 0; i < player.length; i++) {
        if (player[i].isStarting) {
            count += 1;
        }
    }
    return count;
}

console.log(matchCount(players));







console.log(findPlayer(players));

function listOfPlayers(player) {
    for (let i = 0; i < player.length; i++) {
        return `#${i + 1}: ${player[i].name} - Home Runs: ${player[i].homeRuns}`;
    }
}

// Session 05 — what you build in class, and the exercise.

console.log("make.js running");


// **Use your S4 Make data** — the playlist, menu, squad or reading list. Today it gets loops. (Their M1 expenses get loops as homework; don't let them do M1 in class.)

// ### The task

// > In `make.js`, with your S4 data:
// >
// > 1. A `for...of` loop that describes **every** item. Use **destructuring** inside it
// > 2. A **count** function — how many items match something (favourites, vegetarian dishes, players over 30…)
// > 3. A **sum** function — total of a number property
// > 4. A **find** function — takes a name, returns the matching item or `null`. **Test it with a name that doesn't exist**
// > 5. A classic `for` loop that prints a **numbered** list

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

function itemDescription(item) {
    for (const name of item) {
        const { description } = name

        return `Item: ${description}`
    }
}


function matchCount(player) {
    let count = 0
    for (let i = 0; i < player.length; i++) {
        if (player[i].isStarting) {
            count += 1
        }
    }
    return count;
}

function homeRunTotal(players) {
    let total = 0
    for (let i = 0; i < players.length; i++) {
        total += players[i].homeRuns
    }
    return total
}

function findPlayer(player) {
    for (const p of player) {
        if (p.name === "Juan Soto") {
            return p
        }
        return null
    }
}


function listOfPlayers(player) {
    for (let i = 0; i < player.length; i++) {
        return `#${i + 1}: ${player[i].name} - Home Runs: ${player[i].homeRuns}`
    }
}
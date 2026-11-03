// SESSION 4 EXERCISE

// 1. Parsons

const weather = {
    city: "Lisbon",
    days: [
        { date: "Mon", condition: "Sunny" },
        { date: "Tue", condition: "Cloudy" },
    ],
};

// Goal output: Cloudy — one step per line.
// Answer: abc

const days = weather.days;
const tuesday = days[1];
console.log(tuesday.condition);


// Y   const tuesday = days[2];
// X   console.log(days.condition);


// 2. Modify
function changeIsStarting(player) {
    for (let i = 0; i < player.length; i++) {
        if (player[i].isStarting) {
            player[i].isStarting = false;
        } else {
            player[i].isStarting = true;
        }
    }
    return player;
}

console.log(changeIsStarting(players));
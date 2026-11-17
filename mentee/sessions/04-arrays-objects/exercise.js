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


// I predict that players[1] isStarting property will be set to true when the function runs
// This should work because I am directly changing the boolean from false to true for this specific index

// 2. Modify

function changeJuanStarting(player) {
    player[1].isStarting = true;
}

changeJuanStarting(players)
console.log(players[1]);
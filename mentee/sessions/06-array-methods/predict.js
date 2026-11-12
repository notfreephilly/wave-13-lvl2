// Session 06 — your before-class prediction snippet.

console.log("predict.js running");


const tasks = [
    { title: "Buy milk", isDone: false, priority: 1 },
    { title: "Call bank", isDone: true, priority: 1 },
    { title: "Pay rent", isDone: false, priority: 2 },
    { title: "Walk dog", isDone: false, priority: 1 }
];

const result = tasks.filter((task) => task.priority === 1).filter((task) => !task.isDone).map((task) => task.title);



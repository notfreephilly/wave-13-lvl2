// Session 05 — the line-ordering puzzle.

console.log("parsons.js running");

// Goal output 35

// A   const prices = [5, 10, 20];
// B   let total = 0;
// C   for (const price of prices) {
// D   total = total + price;
// E   }
// F   console.log(total);


// X   total = price;
// Y   const total = 0;


// Goal: `findTask(tasks, "Call bank")` returns the Call bank object. `findTask(tasks, "Walk dog")` returns `null`.

// ```
// A   function findTask(tasks, title) {
// B   for (const task of tasks) {
// C   if (task.title === title) {
// D   return task;
// E   }
// H   }
// G   return null;
// F   }


// X   } else { return null; }



// Number the list — `1. Buy milk`, `2. Call bank`, `3. Pay rent`:

// ```js

// }
// ```


// const tasks = ["Buy milk", "Call bank", "Pay rent"];
// for (let i = 0; i < tasks.length; i++) {
//     console.log(`${i + 1}. ${tasks[i]}`);
// }

// 0
// <
// i + 1


// const task = { title: "Buy milk", isDone: false, priority: 1 };

// const { ____, ____ } = task;
// console.log(`${title} is priority ${priority}`);



// > A **gradebook**. There's a list of students, each with a name and a score. The app shows the **class average**, **how many passed** (60 or more), and **the top student**.
// >
// > 1. Shape, in English, and one example student
// > 2. The functions — name, needs, gives back
// > 3. **New:** which loop pattern does each function use?

//1. Array of objects with properties of name and score
const gradeBook = [
    {
        name: "Joe",
        score: 72
    }
]

// 2. classAverage, needs to add up all student scores and divide by number of students, returns the average score
// numberPassed, adds up total number of students with a passing score
// topStudent, returns the student with the highest score

// 3. 
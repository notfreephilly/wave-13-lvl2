// Session 05 — your before-class prediction snippet.

console.log("predict.js running");

// 1. Whats t.title at the end


const t = { title: "A" };
const u = t;
u.title = "B"


// 2.  Write the path to the price:

const shop = {
    items: [
        { name: "Pen", price: 2 }
    ]
};




// 3. [10, 20, 30][3] gives? And .length?


// 4. What does f() return?
function f() {
    return 1;
    return 2;
}


// t.title = "A"
// path = shop.items[0].price
// error - undefined
// length = 3
// 1


// Prediction 
// function countUrgent(tasks) {
//     for (const task of tasks) {
//         let count = 0;
//         if (task.priority === 1) {
//             count = count + 1;
//         }
//         return count;
//     }
// }

const tasks = [
    { title: "A", isDone: true },
    { title: "B", isDone: false },
    { title: "C", isDone: false }
];

console.log(countUrgent(tasks));

```
In the form, answer all three:

 > 1. It logs 1
 > 2. The loop body runs 3 time(s)
 > 3. The author wanted to update the count by adding one when the condition is met, and the fix is move count and the return statement outside the for loop
```


let count = 0
let last = ""

for (const task of tasks) {
    if (!task.isDone) {
        count = count + 1;
        last = task.title
    }
}

// Iteration 1: count = 0, last = ""
// Iteration 2: count = 1, last = "B"
// Iteration 3: count = 2, last = "C"
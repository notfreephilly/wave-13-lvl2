// Session 01 — what you build in class, and the exercise.

console.log("make.js running");


// 1. Stores its **name**, **price**, **how many are in stock**, and **whether it's on sale**
const item = "Coffee beans"; // const because the name of the product isn't going to change
let itemPrice = 10.99; // let because the overall price may change in the future
let itemStock = 20; // let because item stock count will vary
let onSale = false; // let because item may go on sale in the future

itemStock -= 2;
console.log(`${item}: only ${itemStock} left`);
console.log(typeof item);
console.log(typeof itemPrice);
console.log(typeof itemStock);
console.log(typeof onSale);

// 3. Sells 2 of them — update the stock
//  4. Logs a sentence using a template literal, like `Notebook: only 9 left`
// 5. Logs the `typeof` of all four variables
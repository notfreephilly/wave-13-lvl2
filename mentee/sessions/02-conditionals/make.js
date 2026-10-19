// Session 02 — what you build in class, and the exercise.

console.log("make.js running");

// const inputValue = "";

// if (inputValue) {
//     console.log("Thank you!");
// } else {
//     console.log("Please type something");
// }


// const itemsLeft = 0

// if (itemsLeft === 0) {
//     console.log("Sold out");
// }



// A cinema charges: children under 12 pay **$5**. People 65 or older pay **$6**. On Tuesdays, everyone pays **$4**. Everyone else pays **$10**.

//  Write the checks **in the order you'd make them**, in plain English. Mark which one is the "otherwise."

// 1. check if the day is tuesday and set the price to $4
// 2. if the day is not tuesday, check if age is < 12 and set the price to $5
// 3. check if the age is >= 65 and set the price to $6
// 4. otherwise, set the price to $10 (ages 12-64 inclusive)



//  Build a **shipping calculator** in `make.js`. Start with three variables: an order total, a country (`"local"` or `"international"`), and whether the customer is a member.

// > Rules:
// >
// > - Members always ship free
// > - Local orders over $50 ship free
// > - Other local orders cost $5
// > - International orders cost $15
// >
// > Your code must:
// >
// > 1. Use `if` / `else if` / `else`, with a **comment explaining why your checks are in that order**
// > 2. Use `&&` at least once
// > 3. Use a ternary to build a label: `"Free shipping"` or `"Shipping: $5"`
// > 4. Log the label
// >
// > Then test it: change the three starting variables to try **at least four different cases**. Write each case and its output as a comment.

let orderTotal = 40
let country = "local"
let shipping = 5
const isMember = false

if (isMember) {
    shipping = 0
} else if ((country === "local") && (orderTotal > 50)) {
    shipping = 0
} else if (country === "local") {
    shipping = 5
} else {
    shipping = 15
}

const label = shipping === 0 ? "Free shipping" : `Shipping: $${shipping}`
console.log(label);


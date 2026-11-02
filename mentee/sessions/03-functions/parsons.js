// Session 03 — the line-ordering puzzle.

console.log("parsons.js running");

// true
// false

// A   function isEven(n) {
// B   return n % 2 === 0;
// C   }

// D   console.log(isEven(4));
// E   console.log(isEven(7));


// Y   console.log(n % 2 === 0);
// X   return n % 2;



// Goal Output: 80

// A   function applyDiscount(price, amount) {
// B   return price - amount;
// C   }

// D   console.log(applyDiscount(100, 20));
// X   console.log(price - amount);
// Y   console.log(applyDiscount(20, 100));


// A function that returns `"Free"` for members or orders over $50, and `"$5"` otherwise. Goal: `getShipping(false, 30)` gives `"$5"`, `getShipping(true, 30)` and `getShipping(false, 80)` give `"Free"`.

// D   function getShipping(isMember, total) {
// A   if (isMember) return "Free";
// E   if (total > 50) return "Free";
// C   return "$5";
// B   }



const triple = (n) => n * 3;
console.log(triple(4));

const greet = (name) => `Hello, ${name}`;
console.log(greet('Ana'));


const isAdult = (age) => age >= 18;
console.log(isAdult(15));

// > A **tip calculator**. The user has a bill amount, a tip percentage, and a number of people splitting the bill. The app shows the tip, the total, and what each person pays.

// tip calculator(bill amount, tip percentage, party number)
// calculate the tip amount(bill amount * tip percentage)
// divide the bill amount by the party number
// apply tip to each bill in the party
// return tip, total, and each amount per person with tip included
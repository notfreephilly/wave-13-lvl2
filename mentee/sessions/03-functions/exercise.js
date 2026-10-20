// true
// false

// A   function isEven(n) {
// B   return n % 2 === 0;
// C   }

// D   console.log(isEven(4));
// E   console.log(isEven(7));


// Y   console.log(n % 2 === 0);
// X   return n % 2;




let percent = 10

function isGoodTip(percent) {
    if (percent >= 15) {
        return true
    }
    return false
}

const tipLabel = isGoodTip(percent) ? "Generous" : "Standard"
console.log(isGoodTip(percent));
// console.log(tipLabel);

// The return keyword doesn't print the value to the console, so you won't visually see either boolean value, or the words in the ternary statement.
// If you want to see what is being returned, you would have to console.log tipLabel or the actual function itself to see the boolean values
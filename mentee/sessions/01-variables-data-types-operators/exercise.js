// 1.
// Goal output: `Cart: 2 items, total 30`
// bdac

const itemPrice = 15;
const itemCount = 2;
const cartTotal = itemCount * itemPrice;
console.log(`Cart: ${itemCount} items, total ${cartTotal}`);
// X   const cartTotal = itemCount + itemPrice;
// Y   console.log(`Cart: ${itemCount} items, total ${itemCount * itemPrice}`);

// 2.
const item = "Coffee beans"; // const because the name of the product isn't going to change
let price = "4"; // let because the overall price may change in the future
let itemStock = 20; // let because item stock count will vary
let onSale = false; // let because item may go on sale in the future
itemStock -= 2;

console.log(`${item}: only ${itemStock} left`);
console.log(typeof item);
console.log(typeof price);
console.log(typeof itemStock);
console.log(typeof onSale);

console.log(price * 2); // This line assumes you want a number and will return a number
console.log(price + 2); // This line will assume 2 is a string and concatenate the two values together

// Expense Tracker — your app for the whole course.
//
// Part 1 (session 6): data + functions, console only.
// Part 2 (session 9): a screen, and add / mark paid / delete.
// Part 3 (session 11): survives a refresh, and fetches live data.
//
// Start here, after session 4:
//
// Design check — answer these in a comment before writing any code.
//   1. What shape is an expense? Write one example.
// array that holds a list of objects
//   2. What do you want to find out about your expenses?
// What each priority means
// The total amount for all expenses at the end of the month
// The difference in total for recurring or non-recurring expenses

//
// Example of the shape, from the brief:
//   { label: "Internet", amount: 45, category: "home", isPaid: false }

// ---------- data ----------

const expenseList = [
    {
        label: "Rent",
        amount: 1700,
        category: "home",
        isPaid: false,
        isRecurring: true,
        priority: 1
    },
    {
        label: "Phone",
        amount: 35,
        category: "phone/internet",
        isPaid: false,
        isRecurring: true,
        priority: 2
    },
    {
        label: "Internet",
        amount: 80,
        category: "phone/internet",
        isPaid: false,
        isRecurring: true,
        priority: 2
    },
    {
        label: "Utilities",
        amount: 40,
        category: "home",
        isPaid: false,
        isRecurring: true,
        priority: 1
    },
    {
        label: "Groceries",
        amount: 300,
        category: "food",
        isPaid: true,
        isRecurring: false,
        priority: 3
    },
    {
        label: "Gym",
        amount: 20,
        category: "health",
        isPaid: true,
        isRecurring: true,
        priority: 2
    },
    {
        label: "Fun",
        amount: 200,
        category: "misc",
        isPaid: false,
        isRecurring: false,
        priority: 3
    },
]

// ---------- functions ----------
// Determine priority
function expensePriority(item) {
    if (item.isPaid) {
        return "Paid"
    }

    if (item.priority === 1) {
        return "Important: Pay first"
    } else if (item.priority === 2) {
        return "Pay next"
    } else {
        return "Pay after all other expenses are covered"
    }
}

function expenseDescription(item) {
    if (item.isPaid) {
        return `${item.label} - Amount paid: $${item.amount} - Category: ${item.category}`
    }
    return `${item.label} - Not paid yet - Amount owed: $${item.amount} - Category: ${item.category}`

}


// total for all expenses
function getTotal() {
    let total = 0
    for (let i = 0; i < expenseList.length; i++) {
        total += expenseList[i].amount;
    }
    return `Your recurring expense total is: $${total}`
}

//
// ---------- output ----------

// expense priority
console.log(expensePriority(expenseList[0]));
console.log(expensePriority(expenseList[4]));
console.log(expensePriority(expenseList[6]));
console.log(expensePriority(expenseList[2]));

// expense description check
console.log(expenseDescription(expenseList[0]));
console.log(expenseDescription(expenseList[4]));
console.log(expenseDescription(expenseList[6]));
console.log(expenseDescription(expenseList[2]));
console.log(expenseDescription(expenseList[5]));

// Get total for all expenses
console.log(getTotal());
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
// For example an expense should describe the label (name), an amount (cost value), a category, if its paid, if the expense charge is recurring, the type of recurring charge (weekly, bi-weekly, monthly), and what priority (importance) the expense is

// Example expense:     {label: "Rent", amount: 1700, category: "home", isPaid: true, isRecurring: true, recurringType: ["weekly", "bi-weekly", "monthly" priority: 1 }
// Expense property types: string, number, boolean


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
        recurringType: ["weekly", "bi-weekly", "monthly"],
        priority: 1
    },
    {
        label: "Phone",
        amount: 35,
        category: "phone/internet",
        isPaid: false,
        isRecurring: true,
        recurringType: ["weekly", "bi-weekly", "monthly"],
        priority: 2
    },
    {
        label: "Internet",
        amount: 150,
        category: "phone/internet",
        isPaid: false,
        isRecurring: true,
        recurringType: ["weekly", "bi-weekly", "monthly"],
        priority: 2
    },
    {
        label: "Utilities",
        amount: 40,
        category: "home",
        isPaid: false,
        isRecurring: true,
        recurringType: ["weekly", "bi-weekly", "monthly"],
        priority: 1
    },
    {
        label: "Groceries",
        amount: 300,
        category: "food",
        isPaid: true,
        isRecurring: false,
        recurringType: ["weekly", "bi-weekly", "monthly"],
        priority: 3
    },
    {
        label: "Gym",
        amount: 20,
        category: "health",
        isPaid: true,
        isRecurring: true,
        recurringType: ["weekly", "bi-weekly", "monthly"],
        priority: 2
    },
    {
        label: "Fun",
        amount: 200,
        category: "misc",
        isPaid: true,
        isRecurring: false,
        recurringType: ["weekly", "bi-weekly", "monthly"],
        priority: 3
    },
]

// ---------- functions ----------
// Determine priority

// The reason why my check are in this order is because, we want to check if the expense has already been paid.
// There is no point in prioritizing an expense that has already been paid for
// if we check item.isPaid last, then all the bill will either be "Pay first" or "Unpaid" which can lead to confusion or always needing to pay some expense.
function getPriority(item) {
    for (let i = 0; i < item.length; i++) {
        const { label, isPaid, amount } = item[i]; // Destructuring

        if (isPaid) {
            console.log(`${label} - Paid`);
        } else {
            // The checks here are saying the unpaid expenses with higher amounts need to be prioritized first. All other expenses just let us know that they are still unpaid. If we switched the if/else conditions then all expenses that are unpaid would return and the amount > 100 would not be checked which could lead to more confusion because there is no telling on what expense to pay first.
            if (amount > 100) {
                console.log(`${label} - Pay first`);
            } else {
                console.log(`${label} - Unpaid`);
            }
        }

    }

}

function describeExpense(expense) {
    let description = "";

    for (let i = 0; i < expense.length; i++) {
        // destructuring
        const { label, amount, category, isPaid, priority } = expense[i];

        if (isPaid) {
            description = `${label} - $${amount} (${category}, paid, priority: ${priority})`
            console.log(description);
        } else {
            description = `${label} - $${amount} (${category}, unpaid, priority: ${priority})`
            console.log(description);
        }
    }
}


// total for all expenses
function getTotal(expense) {
    let total = 0
    for (let i = 0; i < expense.length; i++) {
        total += expense[i].amount;
    }
    return total
}

function getUnpaidTotal(expense) {
    let amountToPay = 0;
    for (let i = 0; i < expense.length; i++) {
        if (!expense[i].isPaid) {
            amountToPay += expense[i].amount;
        }
    }
    return amountToPay;
}

//
// ---------- output ----------

// expense priority
console.log("EXPENSE PRIORITY:");
getPriority(expenseList);

console.log("------------------------------------------------");
// expense description check
console.log("EXPENSE DESCRIPTION:");
describeExpense(expenseList)

console.log("------------------------------------------------");
// Get total for all expenses
console.log("TOTAL AMOUNT FOR ALL EXPENSES:");
console.log(getTotal(expenseList));

console.log("------------------------------------------------");
// Unpaid total
console.log("TOTAL AMOUNT FOR UNPAID EXPENSES:");
console.log(getUnpaidTotal(expenseList));
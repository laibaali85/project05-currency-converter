#!/usr/bin/env/ node
import inquirer from "inquirer";
const currency = {
    USD: 1,
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280,
    DNR: 46,
};
let userAns = await inquirer.prompt([
    {
        name: "from",
        message: "ENTER FROM CURRENCY",
        type: "list",
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR', 'DNR']
    },
    {
        name: "to",
        message: "ENTER TO CURRENCY",
        type: "list",
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR', 'DNR']
    },
    {
        name: "Amount",
        message: "ENTER YOUR AMOUNT",
        type: "number",
    }
]);
let fromAmount = currency[userAns.from];
let toAmount = currency[userAns.to];
let userAmount = userAns.Amount;
let baseAmount = userAmount / fromAmount; // usd base currency
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);

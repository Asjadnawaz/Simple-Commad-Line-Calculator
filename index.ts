#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";


console.log(`
============== Asjad Nawaz Calculator ===============`)

let calculator= await inquirer.prompt([{
    message: "Enter Your First Value:",
    type: "number",
    name: "FirstValue"
},
{
    message: "Enter Your Second Value:",
    type: "number",
    name: "SecondValue"
},

{
    message: "Choose one operator to start operation",
    type: "list",
    name: "operators",
    choices: ["+", "-", "*", "/"]
}
]);


if (calculator.operators == "+") {
    console.log((calculator.FirstValue) +" "+ chalk.yellowBright("+") +" "+ (calculator.SecondValue) +" "+ "= " +chalk.bold.green(calculator.FirstValue + calculator.SecondValue));
}
if (calculator.operators == "-") {
    console.log((calculator.FirstValue) +" "+ chalk.yellowBright("-") +" "+ (calculator.SecondValue) +" "+ "= " +chalk.bold.green(calculator.FirstValue - calculator.SecondValue));
}
if (calculator.operators == "*") {
    console.log((calculator.FirstValue) +" "+ chalk.yellowBright("*") +" "+ (calculator.SecondValue) +" "+ "= " +chalk.bold.green(calculator.FirstValue * calculator.SecondValue));
}
if (calculator.operators == "/") {
    console.log((calculator.FirstValue) +" "+ chalk.yellowBright("/") +" "+ (calculator.SecondValue) +" "+ "= " +chalk.bold.green(calculator.FirstValue / calculator.SecondValue));
}
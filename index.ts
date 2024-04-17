#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

do{
let answer = await inquirer.prompt([
  {
    message: "Enter your First Value",
    type: "number",
    name: "FirstNumber",
  },
  {
    message: "Enter your Second Number",
    type: "number",
    name: "SecondNumber",
  },
  {
    message: "Please Select one of the Operators to start Operations",
    type: "list",
    name: "Operators",
    choices: [
      "Addition",
      "Subtraction",
      "Multiplication",
      "Division",
      "Modulo",
    ],
  },
]);

// Conditional Statements

if (answer.Operators === "Addition") {
  console.log(
    "Your answer is" +
      " " +
      chalk.greenBright.bold(answer.FirstNumber + answer.SecondNumber)
  );
}

if (answer.Operators === "Subtraction") {
  console.log(
    "Your answer is" +
      " " +
      chalk.greenBright.bold(answer.FirstNumber - answer.SecondNumber)
  );
}

if (answer.Operators === "Multiplication") {
  console.log(
    "Your answer is" +
      " " +
      chalk.greenBright.bold(answer.FirstNumber * answer.SecondNumber)
  );
}

if (answer.Operators === "Divison") {
  console.log(
    "Your answer is" +
      " " +
      chalk.greenBright.bold(answer.FirstNumber / answer.SecondNumber)
  );
}

if (answer.Operators === "Modulo") {
  console.log(
    "Your answer is" +
      " " +
      chalk.greenBright.bold(answer.FirstNumber % answer.SecondNumber)
  );
}


}while(true);



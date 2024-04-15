#!/usr/bin/env node
import inquirer from  "inquirer";
//Computer will generate a andom number 
//user input for guessing number
//compare user input with computer generated number and show result
const randomnumber = Math.floor(Math.random()*6 + 1);

const answer = await inquirer .prompt([
    {
        name : "usernumber",
        type :"number",
        message : "please guess a number between 1-6",
    },
]);
if (answer.usernumber === randomnumber){
 console.log("congratulation! you guessed right number.");
}else {
  console.log("you guess wrong number")
}


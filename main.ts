#! /usr/bin/env node
import inquirer from "inquirer";

async function table_generator(): Promise<void> {
  const desired_number = await inquirer.prompt([
    {
      message: "Enter your disre number to generate its table :",
      type: "number",
      name: "num",
    },
  ]);
  for(let i=0;i<=12;i++){
    console.log(`\t\t${desired_number.num} * ${i} = ${desired_number.num*i}`);
    
  }
}

table_generator()
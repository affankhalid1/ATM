#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
// Declaring variable 
const balance = Math.floor(Math.random() * 100000 + 10000);
// Declaring username and passwords
let UsernameInput = await inquirer.prompt([
    {
        message: (chalk.greenBright.bold("\t\t\t\tEnter Your Username : ")),
        type: "input",
        name: "username"
    }
]);
let PinInput = await inquirer.prompt([
    {
        message: (chalk.greenBright.bold("\t\t\t\tEnter Your Pin : ")),
        type: "number",
        name: "pin",
    },
]);
let userinput = UsernameInput.username;
let pininput = PinInput.pin;
if (userinput === "Affan" && pininput === 672920) {
    console.log(chalk.blueBright.bold("\t\t\t\tUsername and PIN \n\t\t\t\tMatched Successfully!"));
    let accountinfo = await inquirer.prompt([
        {
            message: (chalk.yellowBright.bold("\t\t\t\tSelect Your acoount type")),
            type: "list",
            choices: ["Savings Account", "Current Account"],
            name: "account_type",
        }
    ]);
    let operation = await inquirer.prompt([
        {
            message: (chalk.yellowBright.bold("\t\t\t\tSelect Your Operation")),
            type: "list",
            choices: ["Deposit", "WithDraw", "Check Balance"],
            name: "Operation",
        }
    ]);
    if (operation.Operation === "Deposit") {
        let deposit = await inquirer.prompt([
            {
                message: (chalk.cyanBright.bold("\t\tEnter the amount you want to deposit in your account : ")),
                type: "number",
                name: "deeposit",
            }
        ]);
        let userbalance = deposit.deeposit + balance;
        console.log(chalk.magentaBright.bold(`\n\t\tRS ${deposit.deeposit} is successfully added in your account `));
        console.log(chalk.magentaBright.bold(`\n\t\t\tYour current balance is ${userbalance}`));
    }
    else if (operation.Operation === "WithDraw") {
        let withdraw = await inquirer.prompt([
            {
                message: (chalk.cyanBright.bold("\t\t\t\tEnter the amount you want to WithDraw : ")),
                type: "number",
                name: "withdraw",
            }
        ]);
        if (withdraw.withdraw < balance) {
            let userbalance = balance - withdraw.withdraw;
            console.log(chalk.magentaBright.bold(`\n\t\tRS ${withdraw.withdraw} is successfully withdraw from yuor account `));
            console.log(chalk.magentaBright.bold(`\n\t\t\tYour remaining balance is RS ${userbalance}`));
        }
        else {
            console.log(chalk.redBright.bold(`\n\t\t\t\tYour balance is Unsufficient`));
        }
    }
    else {
        console.log(chalk.blueBright.bold(`\n\t\t\t\tYour Current balance is : RS ${balance}`));
    }
}
else if (userinput === "Khalid" && pininput === 387732) {
    console.log(chalk.blueBright.bold("\t\t\t\tUsername and PIN \n\t\t\t\tMatched Successfully!"));
    let accountinfo = await inquirer.prompt([
        {
            message: (chalk.yellowBright.bold("\t\t\t\tSelect Your acoount type")),
            type: "list",
            choices: ["Savings Account", "Current Account"],
            name: "account_type",
        }
    ]);
    let operation = await inquirer.prompt([
        {
            message: (chalk.yellowBright.bold("\t\t\t\tSelect Your Operation")),
            type: "list",
            choices: ["Deposit", "WithDraw", "Check Balance"],
            name: "Operation",
        }
    ]);
    if (operation.Operation === "Deposit") {
        let deposit = await inquirer.prompt([
            {
                message: (chalk.cyanBright.bold("\t\tEnter the amount you want to deposit in your account : ")),
                type: "number",
                name: "deeposit",
            }
        ]);
        let userbalance = deposit.deeposit + balance;
        console.log(chalk.magentaBright.bold(`\n\t\tRS ${deposit.deeposit} is successfully added in your account `));
        console.log(chalk.magentaBright.bold(`\n\t\t\tYour current balance is ${userbalance}`));
    }
    else if (operation.Operation === "WithDraw") {
        let withdraw = await inquirer.prompt([
            {
                message: (chalk.cyanBright.bold("\t\t\t\tEnter the amount you want to WithDraw : ")),
                type: "number",
                name: "witdraw",
            }
        ]);
        if (withdraw.withdraw <= balance) {
            let userbalance = balance - withdraw.withdraw;
            console.log(chalk.magentaBright.bold(`\n\t\tRS ${withdraw.withdraw} is successfully withdraw from yuor account `));
            console.log(chalk.magentaBright.bold(`\n\t\t\tYour remaining balance is RS ${userbalance}`));
        }
        else {
            console.log(chalk.redBright.bold(`\n\t\t\t\tYour balance is Unsufficient`));
        }
    }
    else {
        console.log(chalk.blueBright.bold(`\n\t\t\t\tYour Current balance is : RS ${balance}`));
    }
}
else if (userinput === "Aliyan" && pininput === 738390) {
    console.log(chalk.blueBright.bold("\t\t\t\tUsername and PIN \n\t\t\t\tMatched Successfully!"));
    let accountinfo = await inquirer.prompt([
        {
            message: (chalk.yellowBright.bold("\t\t\t\tSelect Your acoount type")),
            type: "list",
            choices: ["Savings Account", "Current Account"],
            name: "account_type",
        }
    ]);
    let operation = await inquirer.prompt([
        {
            message: (chalk.yellowBright.bold("\t\t\t\tSelect Your Operation")),
            type: "list",
            choices: ["Deposit", "WithDraw", "Check Balance"],
            name: "Operation",
        }
    ]);
    if (operation.Operation === "Deposit") {
        let deposit = await inquirer.prompt([
            {
                message: (chalk.cyanBright.bold("\t\tEnter the amount you want to deposit in your account : ")),
                type: "number",
                name: "deeposit",
            }
        ]);
        let userbalance = deposit.deeposit + balance;
        console.log(chalk.magentaBright.bold(`\n\t\tRS ${deposit.deeposit} is successfully added in your account `));
        console.log(chalk.magentaBright.bold(`\n\t\t\tYour current balance is ${userbalance}`));
    }
    else if (operation.Operation === "WithDraw") {
        let withdraw = await inquirer.prompt([
            {
                message: (chalk.cyanBright.bold("\t\t\t\tEnter the amount you want to WithDraw : ")),
                type: "number",
                name: "witdraw",
            }
        ]);
        if (withdraw.withdraw <= balance) {
            let userbalance = balance - withdraw.withdraw;
            console.log(chalk.magentaBright.bold(`\n\t\tRS ${withdraw.withdraw} is successfully withdraw from yuor account `));
            console.log(chalk.magentaBright.bold(`\n\t\t\tYour remaining balance is RS ${userbalance}`));
        }
        else {
            console.log(chalk.redBright.bold(`\n\t\t\t\tYour balance is Unsufficient`));
        }
    }
    else {
        console.log(chalk.blueBright.bold(`\n\t\t\t\tYour Current balance is : RS ${balance}`));
    }
}
else if (userinput === "Khadija" && pininput === 290106) {
    console.log(chalk.blueBright.bold("\t\t\t\tUsername and PIN \n\t\t\t\tMatched Successfully!"));
    let accountinfo = await inquirer.prompt([
        {
            message: (chalk.yellowBright.bold("\t\t\t\tSelect Your acoount type")),
            type: "list",
            choices: ["Savings Account", "Current Account"],
            name: "account_type",
        }
    ]);
    let operation = await inquirer.prompt([
        {
            message: (chalk.yellowBright.bold("\t\t\t\tSelect Your Operation")),
            type: "list",
            choices: ["Deposit", "WithDraw", "Check Balance"],
            name: "Operation",
        }
    ]);
    if (operation.Operation === "Deposit") {
        let deposit = await inquirer.prompt([
            {
                message: (chalk.cyanBright.bold("\t\tEnter the amount you want to deposit in your account : ")),
                type: "number",
                name: "deeposit",
            }
        ]);
        let userbalance = deposit.deeposit + balance;
        console.log(chalk.magentaBright.bold(`\n\t\tRS ${deposit.deeposit} is successfully added in your account `));
        console.log(chalk.magentaBright.bold(`\n\t\t\tYour current balance is ${userbalance}`));
    }
    else if (operation.Operation === "WithDraw") {
        let withdraw = await inquirer.prompt([
            {
                message: (chalk.cyanBright.bold("\t\t\t\tEnter the amount you want to WithDraw : ")),
                type: "number",
                name: "witdraw",
            }
        ]);
        if (withdraw.withdraw <= balance) {
            let userbalance = balance - withdraw.withdraw;
            console.log(chalk.magentaBright.bold(`\n\t\tRS ${withdraw.withdraw} is successfully withdraw from yuor account `));
            console.log(chalk.magentaBright.bold(`\n\t\t\tYour remaining balance is RS ${userbalance}`));
        }
        else {
            console.log(chalk.redBright.bold(`\n\t\t\t\tYour balance is Unsufficient`));
        }
    }
    else {
        console.log(chalk.blueBright.bold(`\n\t\t\t\tYour Current balance is : RS ${balance}`));
    }
}
else if (userinput === "Shagufta" && pininput === 218297) {
    console.log(chalk.blueBright.bold("\t\t\t\tUsername and PIN \n\t\t\t\tMatched Successfully!"));
    let accountinfo = await inquirer.prompt([
        {
            message: (chalk.yellowBright.bold("\t\t\t\tSelect Your acoount type")),
            type: "list",
            choices: ["Savings Account", "Current Account"],
            name: "account_type",
        }
    ]);
    let operation = await inquirer.prompt([
        {
            message: (chalk.yellowBright.bold("\t\t\t\tSelect Your Operation")),
            type: "list",
            choices: ["Deposit", "WithDraw", "Check Balance"],
            name: "Operation",
        }
    ]);
    if (operation.Operation === "Deposit") {
        let deposit = await inquirer.prompt([
            {
                message: (chalk.cyanBright.bold("\t\tEnter the amount you want to deposit in your account : ")),
                type: "number",
                name: "deeposit",
            }
        ]);
        let userbalance = deposit.deeposit + balance;
        console.log(chalk.magentaBright.bold(`\n\t\tRS ${deposit.deeposit} is successfully added in your account `));
        console.log(chalk.magentaBright.bold(`\n\t\t\tYour current balance is ${userbalance}`));
    }
    else if (operation.Operation === "WithDraw") {
        let withdraw = await inquirer.prompt([
            {
                message: (chalk.cyanBright.bold("\t\t\t\tEnter the amount you want to WithDraw : ")),
                type: "number",
                name: "witdraw",
            }
        ]);
        if (withdraw.withdraw <= balance) {
            let userbalance = balance - withdraw.withdraw;
            console.log(chalk.magentaBright.bold(`\n\t\tRS ${withdraw.withdraw} is successfully withdraw from yuor account `));
            console.log(chalk.magentaBright.bold(`\n\t\t\tYour remaining balance is RS ${userbalance}`));
        }
        else {
            console.log(chalk.redBright.bold(`\n\t\t\t\tYour balance is Unsufficient`));
        }
    }
    else {
        console.log(chalk.blueBright.bold(`\n\t\t\t\tYour Current balance is : RS ${balance}`));
    }
}
else if (userinput === "Yashal" && pininput === 573793) {
    console.log(chalk.blueBright.bold("\t\t\t\tUsername and PIN \n\t\t\t\tMatched Successfully!"));
    let accountinfo = await inquirer.prompt([
        {
            message: (chalk.yellowBright.bold("\t\t\t\tSelect Your acoount type")),
            type: "list",
            choices: ["Savings Account", "Current Account"],
            name: "account_type",
        }
    ]);
    let operation = await inquirer.prompt([
        {
            message: (chalk.yellowBright.bold("\t\t\t\tSelect Your Operation")),
            type: "list",
            choices: ["Deposit", "WithDraw", "Check Balance"],
            name: "Operation",
        }
    ]);
    if (operation.Operation === "Deposit") {
        let deposit = await inquirer.prompt([
            {
                message: (chalk.cyanBright.bold("\t\tEnter the amount you want to deposit in your account : ")),
                type: "number",
                name: "deeposit",
            }
        ]);
        let userbalance = deposit.deeposit + balance;
        console.log(chalk.magentaBright.bold(`\n\t\tRS ${deposit.deeposit} is successfully added in your account `));
        console.log(chalk.magentaBright.bold(`\n\t\t\tYour current balance is ${userbalance}`));
    }
    else if (operation.Operation === "WithDraw") {
        let withdraw = await inquirer.prompt([
            {
                message: (chalk.cyanBright.bold("\t\t\t\tEnter the amount you want to WithDraw : ")),
                type: "number",
                name: "witdraw",
            }
        ]);
        if (withdraw.withdraw <= balance) {
            let userbalance = balance - withdraw.withdraw;
            console.log(chalk.magentaBright.bold(`\n\t\tRS ${withdraw.withdraw} is successfully withdraw from yuor account `));
            console.log(chalk.magentaBright.bold(`\n\t\t\tYour remaining balance is RS ${userbalance}`));
        }
        else {
            console.log(chalk.redBright.bold(`\n\t\t\t\tYour balance is Unsufficient`));
        }
    }
    else {
        console.log(chalk.blueBright.bold(`\n\t\t\t\tYour Current balance is : RS ${balance}`));
    }
}
else if (userinput === "Aeman" && pininput === 152199) {
    console.log(chalk.blueBright.bold("\t\t\t\tUsername and PIN \n\t\t\t\tMatched Successfully!"));
    let accountinfo = await inquirer.prompt([
        {
            message: (chalk.yellowBright.bold("\t\t\t\tSelect Your acoount type")),
            type: "list",
            choices: ["Savings Account", "Current Account"],
            name: "account_type",
        }
    ]);
    let operation = await inquirer.prompt([
        {
            message: (chalk.yellowBright.bold("\t\t\t\tSelect Your Operation")),
            type: "list",
            choices: ["Deposit", "WithDraw", "Check Balance"],
            name: "Operation",
        }
    ]);
    if (operation.Operation === "Deposit") {
        let deposit = await inquirer.prompt([
            {
                message: (chalk.cyanBright.bold("\t\tEnter the amount you want to deposit in your account : ")),
                type: "number",
                name: "deeposit",
            }
        ]);
        let userbalance = deposit.deeposit + balance;
        console.log(chalk.magentaBright.bold(`\n\t\tRS ${deposit.deeposit} is successfully added in your account `));
        console.log(chalk.magentaBright.bold(`\n\t\t\tYour current balance is ${userbalance}`));
    }
    else if (operation.Operation === "WithDraw") {
        let withdraw = await inquirer.prompt([
            {
                message: (chalk.cyanBright.bold("\t\t\t\tEnter the amount you want to WithDraw : ")),
                type: "number",
                name: "witdraw",
            }
        ]);
        if (withdraw.withdraw <= balance) {
            let userbalance = balance - withdraw.withdraw;
            console.log(chalk.magentaBright.bold(`\n\t\tRS ${withdraw.withdraw} is successfully withdraw from yuor account `));
            console.log(chalk.magentaBright.bold(`\n\t\t\tYour remaining balance is RS ${userbalance}`));
        }
        else {
            console.log(chalk.redBright.bold(`\n\t\t\nYour balance is Unsufficient`));
        }
    }
    else {
        console.log(chalk.blueBright.bold(`\n\t\t\t\tYour Current balance is : RS ${balance}`));
    }
}
else if (userinput === "Sufiyan" && pininput === 728012) {
    console.log(chalk.blueBright.bold("\t\t\t\tUsername and PIN \n\t\t\t\tMatched Successfully!"));
    let accountinfo = await inquirer.prompt([
        {
            message: (chalk.yellowBright.bold("\t\t\t\tSelect Your acoount type")),
            type: "list",
            choices: ["Savings Account", "Current Account"],
            name: "account_type",
        }
    ]);
    let operation = await inquirer.prompt([
        {
            message: (chalk.yellowBright.bold("\t\t\t\tSelect Your Operation")),
            type: "list",
            choices: ["Deposit", "WithDraw", "Check Balance"],
            name: "Operation",
        }
    ]);
    if (operation.Operation === "Deposit") {
        let deposit = await inquirer.prompt([
            {
                message: (chalk.cyanBright.bold("\t\tEnter the amount you want to deposit in your account : ")),
                type: "number",
                name: "deeposit",
            }
        ]);
        let userbalance = deposit.deeposit + balance;
        console.log(chalk.magentaBright.bold(`\n\t\tRS ${deposit.deeposit} is successfully added in your account `));
        console.log(chalk.magentaBright.bold(`\n\t\t\tYour current balance is ${userbalance}`));
    }
    else if (operation.Operation === "WithDraw") {
        let withdraw = await inquirer.prompt([
            {
                message: (chalk.cyanBright.bold("\t\t\t\tEnter the amount you want to WithDraw : ")),
                type: "number",
                name: "witdraw",
            }
        ]);
        if (withdraw.withdraw <= balance) {
            let userbalance = balance - withdraw.withdraw;
            console.log(chalk.magentaBright.bold(`\n\t\tRS ${withdraw.withdraw} is successfully withdraw from yuor account `));
            console.log(chalk.magentaBright.bold(`\n\t\t\tYour remaining balance is RS ${userbalance}`));
        }
        else {
            console.log(chalk.redBright.bold(`\n\t\t\nYour balance is Unsufficient`));
        }
    }
    else {
        console.log(chalk.blueBright.bold(`\n\t\t\t\tYour Current balance is : RS ${balance}`));
    }
}
else if (userinput === "Aliza" && pininput === 258185) {
    console.log(chalk.blueBright.bold("\t\t\t\tUsername and PIN \n\t\t\t\tMatched Successfully!"));
    let accountinfo = await inquirer.prompt([
        {
            message: (chalk.yellowBright.bold("\t\t\t\tSelect Your acoount type")),
            type: "list",
            choices: ["Savings Account", "Current Account"],
            name: "account_type",
        }
    ]);
    let operation = await inquirer.prompt([
        {
            message: (chalk.yellowBright.bold("\t\t\t\tSelect Your Operation")),
            type: "list",
            choices: ["Deposit", "WithDraw", "Check Balance"],
            name: "Operation",
        }
    ]);
    if (operation.Operation === "Deposit") {
        let deposit = await inquirer.prompt([
            {
                message: (chalk.cyanBright.bold("\t\tEnter the amount you want to deposit in your account : ")),
                type: "number",
                name: "deeposit",
            }
        ]);
        let userbalance = deposit.deeposit + balance;
        console.log(chalk.magentaBright.bold(`\n\t\tRS ${deposit.deeposit} is successfully added in your account `));
        console.log(chalk.magentaBright.bold(`\n\t\t\tYour current balance is ${userbalance}`));
    }
    else if (operation.Operation === "WithDraw") {
        let withdraw = await inquirer.prompt([
            {
                message: (chalk.cyanBright.bold("\t\t\t\tEnter the amount you want to WithDraw : ")),
                type: "number",
                name: "witdraw",
            }
        ]);
        if (withdraw.withdraw <= balance) {
            let userbalance = balance - withdraw.withdraw;
            console.log(chalk.magentaBright.bold(`\n\t\tRS ${withdraw.withdraw} is successfully withdraw from yuor account `));
            console.log(chalk.magentaBright.bold(`\n\t\t\tYour remaining balance is RS ${userbalance}`));
        }
        else {
            console.log(chalk.redBright.bold(`\n\t\t\nYour balance is Unsufficient`));
        }
    }
    else {
        console.log(chalk.blueBright.bold(`\n\t\t\t\tYour Current balance is : RS ${balance}`));
    }
}
else if (userinput === "Laiba" && pininput === "272816") {
    console.log(chalk.blueBright.bold("\t\t\t\tUsername and PIN \n\t\t\t\tMatched Successfully!"));
    let accountinfo = await inquirer.prompt([
        {
            message: (chalk.yellowBright.bold("\t\t\t\tSelect Your acoount type")),
            type: "list",
            choices: ["Savings Account", "Current Account"],
            name: "account_type",
        }
    ]);
    let operation = await inquirer.prompt([
        {
            message: (chalk.yellowBright.bold("\t\t\t\tSelect Your Operation")),
            type: "list",
            choices: ["Deposit", "WithDraw", "Check Balance"],
            name: "Operation",
        }
    ]);
    if (operation.Operation === "Deposit") {
        let deposit = await inquirer.prompt([
            {
                message: (chalk.cyanBright.bold("\t\tEnter the amount you want to deposit in your account : ")),
                type: "number",
                name: "deeposit",
            }
        ]);
        let userbalance = deposit.deeposit + balance;
        console.log(chalk.magentaBright.bold(`\n\t\tRS ${deposit.deeposit} is successfully added in your account `));
        console.log(chalk.magentaBright.bold(`\n\t\t\tYour current balance is ${userbalance}`));
    }
    else if (operation.Operation === "WithDraw") {
        let withdraw = await inquirer.prompt([
            {
                message: (chalk.cyanBright.bold("\t\t\t\tEnter the amount you want to WithDraw : ")),
                type: "number",
                name: "witdraw",
            }
        ]);
        if (withdraw.withdraw <= balance) {
            let userbalance = balance - withdraw.withdraw;
            console.log(chalk.magentaBright.bold(`\n\t\tRS ${withdraw.withdraw} is successfully withdraw from yuor account `));
            console.log(chalk.magentaBright.bold(`\n\t\t\tYour remaining balance is RS ${userbalance}`));
        }
        else {
            console.log(chalk.redBright.bold(`\n\t\t\nYour balance is Unsufficient`));
        }
    }
    else {
        console.log(chalk.blueBright.bold(`\n\t\t\t\tYour Current balance is : RS ${balance}`));
    }
}
else {
    console.log(chalk.redBright.bold(`\n\t\t\t\tPlease Enter Valid Username or PIN`));
}

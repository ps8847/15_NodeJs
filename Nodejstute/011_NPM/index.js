// file extention should be .js and in the package.json file type "type": "module" above the debug option   
// or 
// otherwise type "npm i chalk@2.4.1" wh=ith this we can write it on simple .js file and can write first line of code as "const chalk = require("chalk");

// to start it type "npm init"

//install any module by searching it on official website and getingthe installation insdturction

// how to use ?      its mentioned at the website

// useage example

import chalk from 'chalk';

console.log(chalk.blue('Hello world!'));
// console.log(chalk.underline('Hello world!'));
// console.log(chalk.italic('Hello world!'));
// console.log(chalk.blue.underline.inverse('Hello world!'));
// console.log(chalk.inverse('Hello world!'));
// // console.log(chalk.blue('Hello world!'));
// console.log(chalk.red.underline.inverse('False'));



//now we will download and install another package "validator"

// import validator from 'validator';

// const res = validator.isEmail("prince@yahoo.com");
// console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));
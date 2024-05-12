#! /usr/bin/env node

import  inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.greenBright("Welcome to Quiz Game"));
async function startQuiz(){
    const{Name} =await inquirer.prompt([
        {
           name: "name",
           type: "input",
           message: chalk.green ("Dear user Please Enter Your Name:")
        }
    ]
    );
console.log(chalk.yellow (`Hello,${"name"}}! let's Start Quiz.`));

// Define your quz question and answer
const questions = [
{
    question :" What is the Capital city of pakistan?",
    choices: ["Lahore","Islamabad","Sindh"],
    answer : "Islamabad"
},
{
    question :"What is the National Game of pakistna?",
    choices: ["Football", "Table tenis","Hockey"],
    answer :"Hockey"
    
},
    {
question :" What is the national vegetable of pakistan?",
choices : ["Lady Finger","Carrot","cabbage"],
answer : "Lady Finger"
    },
    {
    question :"Who is the national poet of pakistan?",
    choices :["Quaid-e-Azam", "Allama Iqbal","sir syed Ahmed khan"] ,
    answer :"Allama Iqbal"
},
{

    question :"WHat is the nation language of pakistan?",
    choices :["Urdu", "Sindhi","punjabi"] ,
    answer :"Urdu"
},{
    question :"What is the National Flower of pakistan?",
    choices :["Jasmine","Tulip","ROse"] ,
    answer :"Jasmine"
},
{
    question :"Who is the  First Founder of pakistan?",
    choices :["Quaid-e-Azam","Allama iqbal","Sir Syed Ahmed ali khan"] ,
    answer :"Quaid-e-Azam"
},{
    question : "What is the National Drink of pakistan",
    choices: ["Mango juice","Sugarcane juice","Orange juice"],
    answer: "Sugarcane juice"
}
];
let score = 0;

// Iterate through each question and prompt the user 
for (const {question , choices , answer } of questions){
    const {userAnswer} = await inquirer.prompt([
        {
      name: "userAnswer",
      type: "list",
      message:chalk.cyanBright(question),
      choices:choices.map (choice => ({
        name :choice,
        value: choice
      }))
    }

        ]);
        if (userAnswer === answer){
            console.log (chalk.green("Correct!"));
            score++;
}else {
    console.log (chalk.red("Incorrect!"));
    console.log(chalk.yellow(`The correct answer is : ${chalk.green(answer)}`));
}
}
console.log(chalk.yellow(`Quiz Completed ! Your score :${score}/${questions.length} and Thanks For Playing.`));
}
startQuiz();

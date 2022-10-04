const inquirer = require("inquirer");
const { Manager, Intern , Engineer } = require ("./lib");
const fs = require("fs");
const {writeFile} = fs.promises;
const genHtml = require("./src/html.js");




const questions = [
{
    type:"list" ,
    name: "role",
    message: "What role are you trying to create?",
    choices: [ "Manager" , "Intern" , "Engineer"],
},

{
    type : "input",
    name: "name",
    message: "What is the name of the employee?"
},
{
    type : "input",
    name: "email",
    message : " What is the employees email?",
},
{
    type : "input" , 
    name : "id",
    meassage : "What is the mployees ID?"

},
{
    type : "input",
    name : "officeNumber",
    message : "What is the employees office number?",
    when : function(answers){
        return answers.role === "Manager"
    }
},
    {
        type : "input" ,
        name: "school",
        message : "What is the name of the employees school?",
        when : function(answers){
            return answers.role === "intern"
        }
    },
    {
        type: "input"
        name : "github"
        message : "What is the employees Github?"
        when : function(answers) {
            return answers.role === "Engineer"
        }
    }
]
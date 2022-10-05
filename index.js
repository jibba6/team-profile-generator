const inquirer = require("inquirer");
const { Manager, Intern, Engineer } = require("./lib");
const fs = require("fs");
const { writeFile } = fs.promises;
const genHtml = require("./src/html.js");
const roles = []



const questions = [
    {
        type: "list",
        name: "role",
        message: "What role are you trying to create?",
        choices: ["Manager", "Intern", "Engineer"],
    },

    {
        type: "input",
        name: "name",
        message: "What is the name of the employee?"
    },
    {
        type: "input",
        name: "email",
        message: " What is the employees email?",
    },
    {
        type: "input",
        name: "id",
        meassage: "What is the mployees ID?"

    },
    {
        type: "input",
        name: "officeNumber",
        message: "What is the employees office number?",
        when: function (answers) {
            return answers.role === "Manager"
        }
    },
    {
        type: "input",
        name: "school",
        message: "What is the name of the employees school?",
        when: function (answers) {
            return answers.role === "Intern"
        }
    },
    {
        type: "input",
        name: "github",
        message: "What is the employees Github?",
        when: function (answers) {
            return answers.role === "Engineer"
        }
    },
    {
        type: "list",
        name: "additional",
        message: "Would you like to create another employee?",
        choices: ["yes", "no"]
    }
]


const questionPrompt = async () => {
    let tempEmployee
    const answers = await inquirer.prompt(questions)
    switch (answers.role) {
        case "Manager":
            tempEmployee = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)

            break
        case "Engineer":
            tempEmployee = new Engineer(answers.name, answers.id, answers.email, answers.github)
            break
        case "Intern":
            tempEmployee = new Intern(answers.name, answers.id, answers.email, answers.school)
    }
    roles.push(tempEmployee)
    answers.additional === "yes" ? questionPrompt() : createHtml()
}

const createHtml = async () => {
    const data = genHtml (roles) 
    await writeFile ("dist/index.html" , data)
}
questionPrompt ()
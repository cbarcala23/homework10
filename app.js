const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

//array for answers
const array = [];

//Questions
const questions = [

    {
        type: "list",
        message: "What type of user are you going to input for this team? Please select from below.",
        name: "title",
        choices: [
            "Manager",
            "Engineer",
            "Intern"
        ]
    },
    {
        type: "input",
        message: "Enter the team member's name:",
        name: "name",
    },
    {
        type: "input",
        message: "Enter their id:",
        name: "id"
    },
    {
        type: "input",
        message: "Enter their email address:",
        name: "email"
    },
    {
        type: "input",
        message: "Enter the Engineer's Github username:",
        name: "github",
        when: function (answers) {
            return answers.title === "Engineer";
        }
    },
    {
        type: "input",
        message: "Enter the Intern's school:",
        name: "school",
        when: function (answers) {
            return answers.title === "Intern";
        }
    },
    {
        type: "input",
        message: "Enter the Manager's office number:",
        name: "officeNumber",
        when: function (answers) {
            return answers.title === "Manager";
        }
    },
    {
        type: "list",
        message: "Would you like to add another team member?",
        name: "repeat",
        choices: [
            "Yes",
            "No"
        ]
    },

];

// Function to prompt questions
function init() {
    inquirer
        .prompt(questions)
        .then(function (input) {
            array.push(input);
            // console.log(input);
            console.log(array);
            if (input.repeat === 'Yes') {
                init();
            } else {
                return;
            }
        })
};


// Start Questions
init();
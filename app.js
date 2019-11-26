const inquirer = require("inquirer");
const fs = require("fs");
const generateHTML = require("./generateHTML");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);
// Classes
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");


//Questions depending on Role
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
            // if user selects Manager then use the Manager html
            if (input.title === "Manager") {
                var object = new Manager(input.name, input.id, input.email, input.officeNumber);
                var html = managerCard(object);
                fs.appendFile('./index.html', html, function (err) {
                    if (err) throw err;
                });
                // if user selects Engineer then use the Engineer html
            } else if (input.title === "Engineer") {
                var object = new Engineer(input.name, input.id, input.email, input.github);
                var html = engineerCard(object);
                fs.appendFile('./index.html', html, function (err) {
                    if (err) throw err;
                });
                // if user selects Intern then use the Intern html
            } else if (input.title === "Intern") {
                var object = new Intern(input.name, input.id, input.email, input.school);
                var html = internCard(object);
                fs.appendFile('./index.html', html, function (err) {
                    if (err) throw err;
                });
            }
            if (input.repeat === 'Yes') {
                init();
            }
            return;
        })
};

// html for manager card
function managerCard(managerObj) {
    var name = managerObj.getName();
    var id = managerObj.getID();
    var email = managerObj.getEmail();
    var officeNumber = managerObj.getOfficeNumber();
    var role = managerObj.getRole();

    var html = `<div class="card">
    <h4 class="card-header" id="name">`+ name + `</h4>
    <h4 class="card-header" id="name">`+ `<i class="fas fa-gavel"></i>` + role + `</h4>
    <div class="card-body">
        <p class="card-text">ID : `+ id + `</p>
        <p class="card-text">Email : <a href="mailto:`+email+`">`+email+`</a></p>
        <p class="card-text">Office # : `+ officeNumber + `</p>
    </div>
    </div>`;
    return html;
}

// html for engineer card
function engineerCard(engineerObj) {
    var name = engineerObj.getName();
    var id = engineerObj.getID();
    var email = engineerObj.getEmail();
    var github = engineerObj.getGithub();
    var role = engineerObj.getRole();

    var html = `<div class="card">
    <h4 class="card-header" id="name">`+ name + `</h4>
    <h4 class="card-header" id="name">`+ `<i class="fas fa-wrench"></i>` + role + `</h4>
    <div class="card-body">
        <p class="card-text">ID : `+ id + `</p>
        <p class="card-text">Email : <a href="mailto:`+email+`">`+email+`</a></p>
        <p class="card-text">Github : <a href="https://github.com/`+github+`">`+github+`</a></p>
    </div>
    </div>`;
    return html;
}

// html for intern card
function internCard(internObj) {
    var name = internObj.getName();
    var id = internObj.getID();
    var email = internObj.getEmail();
    var school = internObj.getSchool();
    var role = internObj.getRole();

    var html = `<div class="card">
    <h4 class="card-header" id="name">`+ name + `</h4>
    <h4 class="card-header" id="name">`+ `<i class="fas fa-user-graduate"></i>` + role + `</h4>
    <div class="card-body">
        <p class="card-text">ID : `+ id + `</p>
        <p class="card-text">Email : <a href="mailto:`+email+`">`+ email +`</a></p>
        <p class="card-text">School : `+ school + `</p>
    </div>
    </div>`;
    return html;
}

// Writes the initial HTML to the index.html file
function writeToFile() {
    const html = generateHTML();
    writeFileAsync("index.html", html);
};

// Write the initial HTML document which we will append to
writeToFile();
// Start Questions
init();
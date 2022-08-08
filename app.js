const inquirer = require('inquirer');
const enquirer = require('inquirer');
const Engineer = require('./src/Employees/Engineer');
const Intern = require('./src/Employees/Intern');
const Manager = require('./src/Employees/Manager');
const fs = require('fs');
const path = require('path');
const generateHtml = require('./src/generate-html/html');

// an app that ask questions to generate a team profile 
//When a user selects manager - create a new manager class and put it inthe array.
// set array as a global variable

const employees = [];
const outputHtmlFile = path.join(__dirname, 'output', 'team.html')

async function main() {

    const managerRole = 'manager';
    const engineerRole = 'engineer';
    const internRole = 'intern';
    
    //ID, name, email
    
    //manager
    //office number
    
    //engineer
    //github
    
    //intern
    //school
    const answers = await inquirer.prompt([
        
        {
            type: 'list',
            message:'What is the role of the employee',
            name: 'role',
            choices: [
                managerRole,
                engineerRole,
                internRole,
            ]
        },
        {
            type: 'input',
            message:'What is the ID of the employee',
            name: 'id',
        },
        {
            type: 'input',
            message:'What is the email of the employee',
            name: 'email',
        },
        {
            type: 'input',
            message:'What is the name of the employee',
            name: 'name',
        },
        {
            type: 'input',
            message:'What is the office number',
            name: 'office_number',
            when: (answers) => answers.role === managerRole
        },
        {
            type: 'input',
            message:'What is the git hub profile',
            name: 'github',
            when: (answers) => answers.role === engineerRole
        },
        {
            type: 'input',
            message:'What school do you attend?',
            name: 'school',
            when: (answers) => answers.role === internRole
        },
        {
            type: 'confirm',
            message:'Do you want to add another employee',
            name: 'add_another',
        },
        
        
    ]);
    
    //once we have got the employee details - store it 
    //create the employee object based ont the role type
    //add to the employee array
    //check for the role type - if it is equral push it to the employee array
    if (answers.role === managerRole) {
        employees.push(new Manager(answers.id, answers.email, answers.email, answers.office_number));
    }
    
    if (answers.role === engineerRole) {
        employees.push(new Engineer(answers.id, answers.email, answers.email, answers.github));
    }
    
    if (answers.role === internRole) {
        employees.push(new Intern(answers.id, answers.email, answers.email, answers.school));
    }

    if (!answers.add_another){
        //need to create this function insdide of html.js
        const html = generateHtml(employees);

        fs.writeFileSync(outputHtmlFile, html, 'utf-8')
        // call fs module, wriite to a file

        //generate html
        //once the user says enough - we will generate the html based on all the employees collected
    } else{
        // will keep asking to add a new employee until we say enough
    await main();
}

console.log(employees, "Your team profile has been successfully created! Please check out team.html in the output folder");

}



main();



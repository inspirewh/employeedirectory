//main function

// read the file
const fs = require('fs');
const path = require('path');

const cardTemplatePath = path.join(__dirname, 'templates', 'card.html')
const mainTemplatePath = path.join(__dirname, 'templates', 'main.html')

//create card function

function createCard(employee) {
    //read the card.html template 
    const cardTemplate = fs.readFileSync(cardTemplatePath, 'utf-8')
    //replace the placeholders with the actual data
    let replaced = cardTemplate.replace('{{name}}', employee.getName())
        .replace('{{id}}', employee.getID())
        .replace('{{role}}', employee.getRole())
        .replace('{{email}}', employee.getEmail())
// Need to check for the role...if the role = manager attr key = office number // engineer= github // intern = school
    if (employee.getRole() === 'Manager'){
        replaced = replaced.replace('{{attr-key}}', 'Office Number')
            .replace('{{attr_val}}', employee.getOfficeNumber())
    }

    if (employee.getRole() === 'Engineer'){
        replaced = replaced.replace('{{attr-key}}', 'Github')
            .replace('{{attr_val}}', employee.getGithub())
    }
    if (employee.getRole() === 'Intern'){
        replaced = replaced.replace('{{attr-key}}', 'School')
            .replace('{{attr_val}}', employee.getSchool())
    }

    return replaced;
}

//takes in employees as an array
function generateHtml(employees){

    const mainTemplate = fs.readFileSync(mainTemplatePath, 'utf-8');
    // loop through each employee -- convert each of the employee arrayts into the card
    // generate a card for each employee
    //map function creates an array by calling a specific function in each element in the parent array

    const cards = employees.map(createCard).join(' ')

    

    //once done 
    //We have an array of html cards which we want to join the cards together (an array of cards into a massive string (articles stacking on top of each other))

    //replace the {{body}} with this massive card string
    return mainTemplate.replace('{{body}}', cards);

}

module.exports = generateHtml;
const Employee = require("./Employees");

class Engineer extends Employee{

    constructor(id,email, name, github){
        super(id, email, name);
        this.gitHub = github
    }

    getGithub(){
        return this.github;
    }

    getRole(){
        return 'Engineer';
    }

}

module.exports = Engineer;
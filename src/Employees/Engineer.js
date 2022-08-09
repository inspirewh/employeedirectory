const Employee = require("./Employees");

class Engineer extends Employee{

    constructor(id,email, name, github){
        super(id, email, name);
        this.gitHub = github
    }

    getGithub(){
        return this.gitHub;
    }

    getRole(){
        return 'Engineer';
    }

}

module.exports = Engineer;
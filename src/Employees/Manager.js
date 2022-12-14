const Employee = require("./Employees");

class Manager extends Employee{

    constructor(id,email, name, officeNumber){
        super(id, email, name);
        this.officeNumber = officeNumber
    }

    getOfficeNumber(){
        return this.officeNumber;
    }

    getRole(){
        return 'Manager';
    }

}

module.exports = Manager;
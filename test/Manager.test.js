const Manager = require("../src/Employees/Manager")

describe("Manager Test", () => {
    //what do you want to test?

    test("getName() will return the name property", () => {

        //prepare the environment/ create a new object including id, email, name
        const name = 'name';
        const nameTest = new Manager(1, 'mary@mary.com', name);
        const result =nameTest.getName();

        expect(result).toStrictEqual(name);

    });


})
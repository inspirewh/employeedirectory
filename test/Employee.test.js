const Employee = require("../src/Employees/Employees")

describe("Employee Test", () => {
    //what do you want to test?

    test("getName() will return the name property", () => {

        //prepare the environment/ create a new object including id, email, name
        const name = 'mary';
        const dummy = new Employee(1, 'mary@mary.com', name);
        const result =dummy.getName();

        expect(result).toStrictEqual(name);

    });


})
const Employee = require('../lib/Employee');
const employee = new Employee ("Michael", "1122", "michael@hello.com", "Employee");

// test and its function to run the test
test ('testing the correct values for employee', () => {
    expect(employee.name).toBe('Michael');
    expect(employee.id).toBe('1122');
    expect(employee.email).toBe('michael@hello.com');
});

// test for the name
test ('testing the name from getName', () => {
    expect(employee.getName()).toBe('Michael');
});

// test for the id
test ('testing the id from getId', () => {
    expect(employee.getId()).toBe('1122');
});

//  test for the email
test ('testing the email from getEmail', () => {
    expect(employee.getEmail()).toBe('michael@hello.com');
});

//  test for the role
test ('testing the role from getRole', () => {
    expect(employee.getRole()).toBe('Employee');
});
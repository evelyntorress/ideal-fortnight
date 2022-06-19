const Manager = require('../lib/Manager');
const manager = new Manager ("Josh", "2233", "josh@hello.com", "4941", "Manager");

// test and its function to run the test
test ('testing the correct values for manager', () => {
    expect(manager.name).toBe('Josh');
    expect(manager.id).toBe('2233');
    expect(manager.email).toBe('josh@hello.com');
    expect(manager.officeNumber).toBe('4941');
});

// test for the name
test ('testing the name from getName', () => {
    expect(manager.getName()).toBe('Josh');
});

// test for the id
test ('testing the id from getId', () => {
    expect(manager.getId()).toBe('2233');
});

//  test for the email
test ('testing the email from getEmail', () => {
    expect(manager.getEmail()).toBe('josh@hello.com');
});

//  test for the office number
test ('testing the office number from getofficeNumber', () => {
    expect(manager.getofficeNumber()).toBe('4941');
});

//  test for the role
test ('testing the role from getRole', () => {
    expect(manager.getRole()).toBe('Manager');
});

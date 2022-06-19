const Engineer = require('../lib/Engineer');
const engineer = new Engineer ("Evelyn", "3344", "evelyn@hello.com", "evelyntorress", "Engineer");

// test and its function to run the test
test ('testing the correct values for engineer', () => {
    expect(engineer.name).toBe('Evelyn');
    expect(engineer.id).toBe('3344');
    expect(engineer.email).toBe('evelyn@hello.com');
    expect(engineer.github).toBe('evelyntorress');
});

// test for the name
test ('testing the name from getName', () => {
    expect(engineer.getName()).toBe('Evelyn');
});

// test for the id
test ('testing the id from getId', () => {
    expect(engineer.getId()).toBe('3344');
});

//  test for the email
test ('testing the email from getEmail', () => {
    expect(engineer.getEmail()).toBe('evelyn@hello.com');
});

// test for the github username
test ('testing the github username from getGithub', () => {
    expect(engineer.getGithub()).toBe('evelyntorress');
});

//  test for the role
test ('testing the role from getRole', () => {
    expect(engineer.getRole()).toBe('Engineer');
});
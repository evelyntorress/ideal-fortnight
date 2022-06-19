const Intern = require('../lib/Intern');
const intern = new Intern ("Mehak", "4455", "mehak@hello.com", "Langara", "Intern");

// test and its function to run the test
test ('testing the correct values for intern', () => {
    expect(intern.name).toBe('Mehak');
    expect(intern.id).toBe('4455');
    expect(intern.email).toBe('mehak@hello.com');
    expect(intern.school).toBe('Langara');
});

// test for the name
test ('testing the name from getName', () => {
    expect(intern.getName()).toBe('Mehak');
});

// test for the id
test ('testing the id from getId', () => {
    expect(intern.getId()).toBe('4455');
});

//  test for the email
test ('testing the email from getEmail', () => {
    expect(intern.getEmail()).toBe('mehak@hello.com');
});

// test for the school
test ('testing the school from getSchool', () => {
    expect(intern.getSchool()).toBe('Langara');
});

//  test for the role
test ('testing the role from getRole', () => {
    expect(intern.getRole()).toBe('Intern');
});
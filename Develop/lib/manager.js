const Employee = require('./employee.js');

class Manager {
    constructor(name, id, email, officeNumber) {        
     super (name, id, email);
     this.officeNumber = officeNumber;
    }

 getName() {
  return this.name;
 }

 getId(){
  return this.id;
 }

 getEmail(){
  return this.email;
 }

 getofficeNumber(){
  return this.officenumber;
    }

 getRole(){
  return "Manager";
 }
}

module.exports = Manager;
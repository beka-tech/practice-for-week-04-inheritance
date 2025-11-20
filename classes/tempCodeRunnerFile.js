const Person = require("./person");

// Your code here
// export default
class Student extends Person {
  constructor(firstName, lastName, age, GPA, major) {
    super(firstName, lastName, age);
    this.major = major;
    this.GPA = GPA;
  }
  static compareGPA(student1, student2) {
    if (student1.GPA > student2.GPA) {
      return `${student1.firstName.toLowercase()} ${student1.lastName.toLowercase()} has the higher GPA.`;
    } else if (student1.GPA < student2.GPA) {
      return `${student2.firstName.toLowercase()} ${student2.lastName.toLowercase()} has the higher GPA.`;
    } else {
      return `Both students have the same GPA."`;
    }
  }
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Student;
} catch {
  module.exports = null;
}

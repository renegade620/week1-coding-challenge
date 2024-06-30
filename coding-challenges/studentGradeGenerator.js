// this allows the program accept user input
const prompt = require('prompt-sync')({ sigint: true });

/* function that prompts the user to input student marks. The input should be between 0 and 100. 
The output should correspond the correct grade, as shown below: 
A > 79, B - 60 to 79, C - 59 to 49, D - 40 to 49, E - less 40.*/

function studentGradeGenerator(marks) {
    marks = prompt("Enter student marks: ");
    let grade;
  
    switch (true) {
      case marks > 79:
        grade = 'A';
        break;
      case marks >= 60 && marks <= 79:
        grade = 'B';
        break;
      case marks >= 49 && marks <= 59:
        grade = 'C';
        break;
      case marks >= 40 && marks <= 49:
        grade = 'D';
        break;
        case marks < 40:
        grade = 'D';
        break;
      default:
        grade = 'Enter valid marks';
    }
  
    return `${marks} : ${grade}`;
  }
  
console.log(studentGradeGenerator());




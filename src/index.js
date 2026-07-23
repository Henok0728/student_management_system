const prompt = require('prompt-sync')();
const students =  [];

function addStudent(name,age,major,cgpa,sgpa,year) {
    const student = {
        name: name,
        age: age,
        major: major,
        cgpa: cgpa,
        sgpa: sgpa,
        year: year
    };
    students.push(student);
    }
function getStudentsByName() {
    return students.forEach(student => {
        console.log(student.name);
    });
}
function getStudentsByAge() {
    return students.forEach(student => {
        console.log(student.age);
    });
}
function getStudentsByMajor() {
    return students.forEach(student => {
        console.log(student.major);
    });
}
function removeStudent(name){
    const index = students.findIndex(student => student.name === name);
    if (index !== -1) {
        students.splice(index, 1);
        console.log(`Student ${name} removed.`);
    } else {
        console.log(`Student ${name} not found.`);
    }
}

const is_started = true;
console.log("//////////////////////////////////////////");
console.log("      Student Management System           ");
console.log("//////////////////////////////////////////");
console.log("Welcome to the Student Management System!");
while (is_started) {
    console.log("Please select an option");
    console.log("1. Add Student");
    console.log("2. Get Students by Name");
    console.log("3. Get Students by Age");
    console.log("4. Get Students by Major");
    console.log("5. Remove Student");
    console.log("6. Exit");
    const option = prompt("Enter your option: ");
    switch (option){
        case "1":
            const name = prompt("Enter student name: ");
            const age = prompt("Enter student age: ");
            const major = prompt("Enter student major: ");
            const cgpa = prompt("Enter student CGPA: ");
            const sgpa = prompt("Enter student SGPA: ");
            const year = prompt("Enter student year: ");
            addStudent(name,age,major,cgpa,sgpa,year);
            break;
        case "2":
            getStudentsByName();
            break; 
        case "3":
            getStudentsByAge();
            break;
        case "4":
            getStudentsByMajor();
            break;
        case "5":
            const student_removed = prompt("Enter student name to remove: ");
            removeStudent(student_removed);
            break;
        case "6":
            console.log("Are u sure you want to exit? (yes/no)");
            const exit_confirmation = prompt("Enter your option: ");
            if (exit_confirmation.toLowerCase() === "yes") {
              console.log("Exiting the Student Management System.");
              is_started = false;
              exit(0);
            } else {
              console.log("Continuing the Student Management System.");
              continue;
            }
        
        default:
            console.log("Invalid option. Please try again."); 
    }


}
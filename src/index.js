const prompt = require('prompt-sync')();
const students =  [];

function addStudent(name,academicYear,birthDate,major,gpa,year) {
    const student = {
        id: students.length > 0 ? Math.max(...students.map(s => s.id)) + 1 : 1,
        name: name,
        academicYear: academicYear,
        birthDate: birthDate,
        major: major,
        gpa: gpa,
        year: year
    };
    students.push(student);
    }
function getStudentsByName() {
    let count = 0;
    const name = prompt("Enter student name: ");
    const filteredStudents = students.filter(student => student.name.toLowerCase() === name.toLowerCase());
    if (filteredStudents.length > 0) {
        filteredStudents.forEach(student => {
            count++;
            console.log(`ID: ${student.id}`);
            console.log(`Name: ${student.name}`);
            console.log(`Academic Year: ${student.academicYear}`);
            console.log(`Birth Date: ${student.birthDate}`);
            console.log(`Major: ${student.major}`);
            console.log(`GPA: ${student.gpa}`);
            console.log(`Year: ${student.year}`);
            console.log('-------------------');
        });
    console.log(`Total students found: ${count}`);
    } else {
        console.log("No students found with that name.");
    }
}
function getStudentsById() {
    const id = parseInt(prompt("Enter student ID: "));
    const student = students.find(s => s.id === id);
    if (student) {
        console.log(`ID: ${student.id}`);
        console.log(`Name: ${student.name}`);
        console.log(`Academic Year: ${student.academicYear}`);
        console.log(`Birth Date: ${student.birthDate}`);
        console.log(`Major: ${student.major}`);
        console.log(`GPA: ${student.gpa}`);
        console.log(`Year: ${student.year}`);
    } else {
        console.log("No student found with that ID.");
    }
}
function removeStudent(name) {
    const index = students.findIndex(student => student.name.toLowerCase() === name.toLowerCase());
    if (index !== -1) {
        students.splice(index, 1);
        console.log(`Student with name ${name} has been removed.`);
    } else { 
        console.log(`No student found with name ${name}.`);
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
    console.log("3. Get Students by ID");
    console.log("4. Remove Student");
    console.log("5. Exit");
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
            getStudentsById();
            break;
        case "4":
            getStudentsByMajor();
            break;
        case "5":
            const student_removed = prompt("Enter student name to remove: ");
            removeStudent(student_removed);
            break;
        case "5":
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
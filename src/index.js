const prompt = require('prompt-sync')({ sigint: true });
const { printLogo, colors } = require('./logo');

const students = [
    {
        id: 1,
        name: "Henok Tadesse",
        academicYear: "2025/2026",
        birthDate: "2003-05-14",
        major: "Computer Science",
        gpa: "3.85",
        year: "3rd Year"
    }
];

function displayMenu() {
    console.log(`${colors.brightCyan}${colors.bold}┌──────────────────────────────────────────┐${colors.reset}`);
    console.log(`${colors.brightCyan}${colors.bold}│                MAIN MENU                 │${colors.reset}`);
    console.log(`${colors.brightCyan}${colors.bold}├──────────────────────────────────────────┤${colors.reset}`);
    console.log(`│  ${colors.brightYellow}1.${colors.reset}  Add Student                         │`);
    console.log(`│  ${colors.brightYellow}2.${colors.reset}  Search Students by Name             │`);
    console.log(`│  ${colors.brightYellow}3.${colors.reset}  Search Student by ID                │`);
    console.log(`│  ${colors.brightYellow}4.${colors.reset}  List All Students                   │`);
    console.log(`│  ${colors.brightYellow}5.${colors.reset}  Remove Student                      │`);
    console.log(`│  ${colors.brightYellow}6.${colors.reset}  Exit                                │`);
    console.log(`${colors.brightCyan}${colors.bold}└──────────────────────────────────────────┘${colors.reset}\n`);
}

function addStudent(name, academicYear, birthDate, major, gpa, year) {
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
    console.log(`\n${colors.brightGreen} Student "${name}" added successfully with ID: ${student.id}!${colors.reset}\n`);
}

function getStudentsByName() {
    let count = 0;
    const name = prompt(`${colors.brightCyan}Enter student name to search: ${colors.reset}`);
    if (!name) return;
    const filteredStudents = students.filter(student => student.name.toLowerCase().includes(name.toLowerCase()));
    if (filteredStudents.length > 0) {
        console.log(`\n${colors.brightGreen}=== Search Results (${filteredStudents.length} found) ===${colors.reset}`);
        filteredStudents.forEach(student => {
            count++;
            console.log(`${colors.dim}----------------------------------------${colors.reset}`);
            console.log(`ID:            ${colors.brightYellow}${student.id}${colors.reset}`);
            console.log(`Name:          ${colors.white}${student.name}${colors.reset}`);
            console.log(`Academic Year: ${student.academicYear}`);
            console.log(`Birth Date:    ${student.birthDate}`);
            console.log(`Major:         ${student.major}`);
            console.log(`GPA:           ${student.gpa}`);
            console.log(`Year:          ${student.year}`);
        });
        console.log(`${colors.dim}----------------------------------------${colors.reset}\n`);
    } else {
        console.log(`\n${colors.brightRed} No students found with name "${name}".${colors.reset}\n`);
    }
}

function getStudentsById() {
    const idInput = prompt(`${colors.brightCyan}Enter student ID: ${colors.reset}`);
    const id = parseInt(idInput);
    if (isNaN(id)) {
        console.log(`\n${colors.brightRed} Invalid ID. Please enter a valid number.${colors.reset}\n`);
        return;
    }
    const student = students.find(s => s.id === id);
    if (student) {
        console.log(`\n${colors.brightGreen}=== Student Found ===${colors.reset}`);
        console.log(`${colors.dim}----------------------------------------${colors.reset}`);
        console.log(`ID:            ${colors.brightYellow}${student.id}${colors.reset}`);
        console.log(`Name:          ${colors.white}${student.name}${colors.reset}`);
        console.log(`Academic Year: ${student.academicYear}`);
        console.log(`Birth Date:    ${student.birthDate}`);
        console.log(`Major:         ${student.major}`);
        console.log(`GPA:           ${student.gpa}`);
        console.log(`Year:          ${student.year}`);
        console.log(`${colors.dim}----------------------------------------${colors.reset}\n`);
    } else {
        console.log(`\n${colors.brightRed} No student found with ID ${id}.${colors.reset}\n`);
    }
}

function listAllStudents() {
    if (students.length === 0) {
        console.log(`\n${colors.brightYellow}ℹ No students currently registered.${colors.reset}\n`);
        return;
    }
    console.log(`\n${colors.brightGreen}=== All Registered Students (${students.length}) ===${colors.reset}`);
    students.forEach(student => {
        console.log(`${colors.dim}----------------------------------------${colors.reset}`);
        console.log(`ID:            ${colors.brightYellow}${student.id}${colors.reset}`);
        console.log(`Name:          ${colors.white}${student.name}${colors.reset}`);
        console.log(`Academic Year: ${student.academicYear}`);
        console.log(`Birth Date:    ${student.birthDate}`);
        console.log(`Major:         ${student.major}`);
        console.log(`GPA:           ${student.gpa}`);
        console.log(`Year:          ${student.year}`);
    });
    console.log(`${colors.dim}----------------------------------------${colors.reset}\n`);
}

function removeStudent(nameOrId) {
    if (!nameOrId) return;
    const index = students.findIndex(student => 
        student.name.toLowerCase() === nameOrId.toLowerCase() || 
        student.id.toString() === nameOrId
    );
    if (index !== -1) {
        const removed = students.splice(index, 1)[0];
        console.log(`\n${colors.brightGreen}Student "${removed.name}" (ID: ${removed.id}) has been removed.${colors.reset}\n`);
    } else {
        console.log(`\n${colors.brightRed}No student found matching "${nameOrId}".${colors.reset}\n`);
    }
}

// Print CLI Logo Banner when dev / start is run
printLogo();

let is_started = true;

while (is_started) {
    displayMenu();
    const option = prompt(`${colors.brightCyan} Enter your option (1-6): ${colors.reset}`);
    
    switch (option) {
        case "1":
            console.log(`\n${colors.brightCyan}--- Enter Student Details ---${colors.reset}`);
            const name = prompt("Enter student full name: ");
            const academicYear = prompt("Enter academic year (e.g. 2025/2026): ");
            const birthDate = prompt("Enter birth date (YYYY-MM-DD): ");
            const major = prompt("Enter student major: ");
            const gpa = prompt("Enter student GPA / CGPA: ");
            const year = prompt("Enter class year (e.g. 1st Year, 2nd Year): ");
            if (name) {
                addStudent(name, academicYear, birthDate, major, gpa, year);
            } else {
                console.log(`\n${colors.brightRed} Student name cannot be empty.${colors.reset}\n`);
            }
            break;
        case "2":
            getStudentsByName();
            break;
        case "3":
            getStudentsById();
            break;
        case "4":
            listAllStudents();
            break;
        case "5":
            const target = prompt(`${colors.brightCyan} Enter student name or ID to remove: ${colors.reset}`);
            removeStudent(target);
            break;
        case "6":
            const exit_confirmation = prompt("Are you sure you want to exit? (yes/no): ");
            if (exit_confirmation && exit_confirmation.toLowerCase() === "yes") {
                console.log(`\n${colors.brightYellow} Exiting the Student Management System. Goodbye!${colors.reset}\n`);
                is_started = false;
                process.exit(0);
            } else {
                console.log(`\n${colors.brightGreen} Continuing in Student Management System.${colors.reset}\n`);
            }
            break;
        default:
            console.log(`\n${colors.brightRed} Invalid option. Please select 1 through 6.${colors.reset}\n`);
    }
}
import {Student} from './models/student.js';

const students: Student[] = [];

students.push({ id: 1, name: 'John Doe', age: 20, department: 'Computer Science', isActive: true, year: 2 }); 

students.push({ id: 2, name: 'Jane Smith', age: 22, department: 'Mathematics', isActive: true, year: 3 });

students.push({ id: 3, name: 'Michael Johnson', age: 21, department: 'Physics', isActive: false, year: 2 });

students.push({ id: 4, name: 'Sarah Williams', age: 19, department: 'Chemistry', isActive: true, year: 1 });

students.push({ id: 5, name: 'David Brown', age: 23, department: 'Biology', isActive: true, year: 3 });
students.forEach(student => {
  console.log(`ID: ${student.id}, Name: ${student.name}, Age: ${student.age}, Department: ${student.department}, Active: ${student.isActive}, Year: ${student.year}`);
});
// Constructor function for Student
function Student(name, roll, cgpa) {
    this.name = name;
    this.roll = roll;
    this.cgpa = cgpa;
}

// Array to hold student records
let students = [];

// Get form and table elements
const studentForm = document.getElementById('studentForm');
const studentTable = document.getElementById('studentTable');
const searchInput = document.getElementById('search');

// Current editing index
let editIndex = -1;

// Function to display all students
function displayStudents(data) {
    studentTable.innerHTML = '';
    data.forEach((student, index) => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${student.name}</td>
            <td>${student.roll}</td>
            <td>${student.cgpa}</td>
            <td>
                <button onclick="editStudent(${index})">Edit</button>
                <button onclick="deleteStudent(${index})">Delete</button>
            </td>
        `;

        studentTable.appendChild(row);
    });
}

// Add or Update student
studentForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const roll = document.getElementById('roll').value.trim();
    const cgpa = parseFloat(document.getElementById('cgpa').value);

    if (editIndex === -1) {
        // Add new student
        const newStudent = new Student(name, roll, cgpa);
        students.push(newStudent);
    } else {
        // Update existing student
        students[editIndex].name = name;
        students[editIndex].roll = roll;
        students[editIndex].cgpa = cgpa;
        editIndex = -1;
    }

    studentForm.reset();
    displayStudents(students);
});

// Delete student
function deleteStudent(index) {
    if (confirm('Are you sure you want to delete this student?')) {
        students.splice(index, 1);
        displayStudents(students);
    }
}

// Edit student
function editStudent(index) {
    document.getElementById('name').value = students[index].name;
    document.getElementById('roll').value = students[index].roll;
    document.getElementById('cgpa').value = students[index].cgpa;
    editIndex = index;
}

// Search student by roll number
searchInput.addEventListener('input', function() {
    const query = searchInput.value.trim().toLowerCase();
    const filtered = students.filter(student => student.roll.toLowerCase().includes(query));
    displayStudents(filtered);
});

// Extra feature: Sort by CGPA
document.querySelector('button.extra-btn:nth-of-type(1)').addEventListener('click', function() {
    const sorted = [...students].sort((a, b) => b.cgpa - a.cgpa);
    displayStudents(sorted);
});

// Extra feature: Highlight Top CGPA
document.querySelector('button.extra-btn:nth-of-type(2)').addEventListener('click', function() {
    const maxCgpa = Math.max(...students.map(s => s.cgpa), 0);
    studentTable.querySelectorAll('tr').forEach((row, index) => {
        if (students[index].cgpa === maxCgpa) {
            row.style.backgroundColor = '#ffe082'; // Highlight top CGPA
        } else {
            row.style.backgroundColor = '';
        }
    });
});

interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "Alice",
    lastName: "Dupont",
    age: 28,
    location: "Paris",
}

const student2: Student = {
    firstName: "Bob",
    lastName: "Djidil",
    age: 35,
    location: "Marseille",
}

const studentsList: Student[] = [student1, student2];

const table = document.createElement("table");
const tbody = document.createElement("tbody");

studentsList.forEach((student) => {
    const row = document.createElement("tr");

    const td1 = document.createElement("td");
    td1.textContent = student.firstName;

    const td2 = document.createElement("td");
    td2.textContent = student.location;

    row.appendChild(td1);
    row.appendChild(td2);
    tbody.appendChild(row);
});

table.appendChild(tbody);

document.body.appendChild(table);

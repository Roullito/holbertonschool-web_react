var student1 = {
    firstName: "Alice",
    lastName: "Dupont",
    age: 28,
    location: "Paris"
};
var student2 = {
    firstName: "Bob",
    lastName: "Djidil",
    age: 35,
    location: "Marseille"
};
var studentsList = [student1, student2];
var table = document.createElement("table");
var tbody = document.createElement("tbody");
studentsList.forEach(function (student) {
    var row = document.createElement("tr");
    var td1 = document.createElement("td");
    td1.textContent = student.firstName;
    var td2 = document.createElement("td");
    td2.textContent = student.location;
    row.appendChild(td1);
    row.appendChild(td2);
    tbody.appendChild(row);
});
table.appendChild(tbody);
document.body.appendChild(table);

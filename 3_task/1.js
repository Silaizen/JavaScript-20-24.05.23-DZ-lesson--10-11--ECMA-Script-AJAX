class Employee {
  constructor(name, position, department) {
    this.name = name;
    this.position = position;
    this.department = department;
  }
}

class EmpTable {
  constructor(employees) {
    this.employees = employees;
  }

  getHtml() {
    let tableHtml =
      "<table>\n<tr><th>Name</th><th>Position</th><th>Department</th></tr>\n";
    for (let employee of this.employees) {
      tableHtml += `<tr><td>${employee.name}</td><td>${employee.position}</td><td>${employee.department}</td></tr>\n`;
    }
    tableHtml += "</table>";
    return tableHtml;
  }
}

const employees = [
  new Employee("John Doe", "Manager", "Finance"),
  new Employee("Jane Smith", "Analyst", "Marketing"),
  new Employee("Mark Johnson", "Developer", "IT"),
];

const empTable = new EmpTable(employees);
const htmlCode = empTable.getHtml();

const tableContainer = document.getElementById("table-container");
tableContainer.innerHTML = htmlCode;

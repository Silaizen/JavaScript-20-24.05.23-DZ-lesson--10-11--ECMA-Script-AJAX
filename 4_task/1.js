class EmpTable {
  constructor(data) {
    this.data = data;
  }

  getHtml() {
    let html = "<tr><th>Имя</th><th>Возраст</th></tr>";
    this.data.forEach((row) => {
      html += `<tr><td>${row.name}</td><td>${row.age}</td></tr>`;
    });
    return html;
  }
}

class StyledEmpTable extends EmpTable {
  getStyles() {
    return `
      #empTable th {
        background-color: #eaeaea;
        font-weight: bold;
      }
      
      #empTable {
        text-align: center;
        margin: 0 auto;
        border-collapse: collapse;
      }
      
      #empTable th,
      #empTable td {
        border: 1px solid black;
        padding: 38px;
      }
      `;
  }

  getHtml() {
    const parentHtml = super.getHtml();
    const styles = this.getStyles();
    const styleElement = document.getElementById("tableStyles");
    styleElement.innerHTML = styles;
    return parentHtml;
  }
}

const data = [
  { name: "Джон", age: 30 },
  { name: "Джейн", age: 28 },
  { name: "Боб", age: 35 },
];
const styledEmpTable = new StyledEmpTable(data);

const tableElement = document.getElementById("empTable");
tableElement.innerHTML = styledEmpTable.getHtml();

let students = [
    {
        name: 'vasya',
        lastname: 'pupko',
        group: 'php-20-1'
    },
    {
        name: 'kolya',
        lastname: 'dudko',
        group: 'php-21-1'
    },
    {
        name: 'olya',
        lastname: 'krasko',
        group: 'php-20-2'
    },
    {
        name: 'tolik',
        lastname: 'rizko',
        group: 'php-20-2'
    },
    {
        name: 'slavik',
        lastname: 'pupkin',
        group: 'php-21-2'
    },
];

document.write ( createTableFromList (students) );

function createTableFromList (list) {
    let html = "<table>";

    html += "<caption>Студенты</caption>"
    html += "<thead>";
    html += "<tr><th>№</th><th>Имя</th><th>Фамилия</th><th>Группа</th></tr>";
    html += "</thead>";

    html += "<tbody>";
    for (let i=1;i<list.length;i++) {
        let currentRow = "\n<tr>";
        currentRow += "<td>"+i+"</td>";
        for (let cell in list[i]) {
            currentRow += "\n<td>";
            currentRow += list[i][cell];
            currentRow += "</td>";
        }
        currentRow += "\n</tr>";
        html += currentRow;
    }
    html += "</tbody>";

    html += "\n</table>";

    return html;

}

/*
function createTableFromList (list) {
    let table = document.createElement("table");
    let rowNames = ["№", "Name", "Lastname", "Group"];

    for (let node of list) {
        let row = document.createElement("tr");
        for () {}
        table.append();
    }
}
*/


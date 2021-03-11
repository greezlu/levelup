let start = +prompt("Please enter first number");
let end = +prompt("Please enter second number");

let pyth = tablePythagoras(start,end);
document.body.append(pyth);

function tablePythagoras (start, end) {

    let table = document.createElement("table");
    table.append( getThead(start, end) );

    for (let i=start;i<=end;i++) {
        let row = document.createElement("tr");
        let cellHead = document.createElement("td");
        cellHead.innerHTML = i;
        row.append(cellHead);
        for (let j=start;j<=end;j++) {
            let cell = document.createElement("td");
            cell.innerHTML = i*j;
            row.append(cell);
        }
        table.append(row);
    }

    return table;

    function getThead (start, end) {
        let thead = document.createElement("thead");

        let tr = document.createElement("tr");
        tr.append(document.createElement("td"));

        for (let i=start;i<=end;i++) {
            let td = document.createElement("td");
            td.innerHTML = i;
            tr.append(td);
        }
        thead.append(tr);
        return thead;
    }

}
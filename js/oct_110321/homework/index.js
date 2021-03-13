/*
Запросить у пользователя начало и окончание промежутка
целых чисел (первое меньше второго).
Сгенерировать таблицу Пифагора в данном промежутке.
*/

let data = getInputData();
let pyth;

if (typeof data === "string") {
  alert(data);
} else if (typeof data === "object") {
  let pyth = tablePythagoras(data.start, data.end);
  document.body.append(pyth);
}


function getInputData () {

  let start = prompt("Please enter first number");

  if (start === null) {
    return "Operation canceled";
  } else if (!isFinite(start)) {
    return "Incorrect number";
  } else {
    start = Number(start);
  }

  let end = prompt("Please enter second number");

  if (end === null) {
    return "Operation canceled";
  } else if (!isFinite(end)) {
    return "Incorrect number";
  } else {
    end = Number(end);
  }

  if (end <= start) {
    return "Second number must be more than first";
  }

  return {
    start: start,
    end: end
  }

}

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
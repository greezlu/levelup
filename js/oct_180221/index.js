/*
let user = {
    name: "John",
    years: 30
};

let {name, years:age, isAdmin = false} = user;

*/
/*
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

console.log( topSalary(salaries) );

function topSalary (obj) {
    let max;
    Object.entries(obj).forEach(([name,salary])=>{
        if (salary>max?.[1]) {max = {name:salary}}
    });
    return max;
}

*/

/*
let test = {
    name: "vasya",
    lastname: "pupko",
    child: {
        name: "kolya",
        lastname: "pupko",
        child: {
            name: "masha",
            lastname: "pupko"
        }
    }
};

function Human(name, lastname, child = undefined) {
    this.name = name;
    this.lastname = lastname;
    if(child!==undefined){
        this.child = child;
    }
}

let firstHuman = new Human("masha", "pupko");
let secondHuman = new Human("kolya", "pupko", firstHuman);
let thirdHuman = new Human("vasya", "pupko", secondHuman);

function showTreeObject(obj, parent = ""){

    let message = "";

    for (let key in obj) {
        if (typeof obj[key] === "object") {
            message += key+":\n"+showTreeObject(obj[key],parent+"-");
        } else if (typeof obj[key] !== "function") {
            message += parent+key +": "+ obj[key]+"\n";
        }
    }

    return message;
}

alert(showTreeObject(thirdHuman));

// name: vasy
// lastname: pupko
// child:
// -name: kolya
// -lastname: pupko
// -child:
// --name: masha
// --lastname: pupko

*/


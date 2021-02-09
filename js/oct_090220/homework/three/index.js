function pow (base, exp) {
  let powNum = base;
  for (let i=1;i<exp;i++) powNum *= base;
  return powNum;
}

let base = +prompt("Please enter first number");
let exp = +prompt("Please enter second number");

alert( pow(base, exp) );
function pow (base, exp) {
  let powNum = 1,
      expAbs = exp>=0 ? exp : 0-exp;
  for (let i=1;i<=expAbs;i++) powNum *= base;
  return exp>=0 ? powNum : 1/powNum;
}

let base = +prompt("Please enter first number");
let exp = +prompt("Please enter second number");

alert( pow(base, exp) );
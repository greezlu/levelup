let year = +prompt("Enter your number");
let leapYears = "";

for (let i=0;i<3;year++) {
  let isLeap = "";
  if ( year%400 == 0 || year%100 != 0 && year%4 == 0 ) {
    i++;
    leapYears += year + " ";
  }
}

alert(leapYears);
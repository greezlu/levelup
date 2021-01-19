var num = +prompt("Enter your number");
var checkPass;

checkPass = (num >= 1000 && num <= 2000) && ( (num%2==0 && num%10!=0)
            || (num%100==0 && num%300!=0) );

alert("Check pass: " + checkPass);
// let message = prompt("Enter your number: ", 100);
// let num = +message;
// let helloMessage = "Hello, №" + num + ". ";
// if (num % 100 == 0) {
//     let winMessage = "Congratulations, you are the 100th";
//     helloMessage += winMessage;
// };
// alert(helloMessage);

//-----------------------------------------------------------------//

// let age = +prompt("Enter your age", 18);
// let ageRestriction;
//
// if (age >= 18) {
//     ageRestriction = "adult";
// } else {
//     ageRestriction = "not adult";
// };
//
// alert("You are " + ageRestriction);

//-----------------------------------------------------------------//

let orderPrice = +prompt("Please enter amount of your order");

let discount = 0;
if (orderPrice >= 100) { discount = 5 }
if (orderPrice >= 500) { discount = 10 }

alert ("Order amount: " + orderPrice + "\n"
    +"Discount: " + discount + "%\n"
    +"Discount amount: " + (discount/100*orderPrice) + "\n"
    +"Total amount: " + (orderPrice*(1-discount/100))
);

// if (orderPrice >= 100) {
//
//     if (orderPrice >= 500) {
//       discount = 10;
//     };
//
//     discount = 5;
//
// } else {
//     discount = 0;
// }

//-----------------------------------------------------------------//
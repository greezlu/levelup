let age = +prompt("Please enter your age", 18);

let message;

if (age<0) {
  message = "Incorrect age";
} else {
  if (age<11) {
    message = "You are child";
  } else {
    if (age<18) {
      message = "You are teenager";
    } else {
      if (age<30) {
        message = "You are adult";
      } else {
        if (age<50) {
          message = "You are grown";
        } else {
          if (age>=50) {
            message = "You are wise";
          }
        }
      }
    }
  }
}

alert(message);
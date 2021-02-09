function isPrime (num) {

  let isNumPrime = true;

  for (let i=2;i<num;i++) {
    if (num%i === 0) {
      isNumPrime = false;
      break;
    }
  }

  return isNumPrime;

}

function getPrimesFromRange () {

  let from = +prompt("Please enter first number");
  let to = +prompt("Please enter last number");

  let primeResult = "";

  for (;from<=to;from++) {
    if (isPrime (from)) primeResult += from + " ";
  }

  alert(primeResult);

}

getPrimesFromRange ();
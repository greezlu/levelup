function calcFactorial (num) {
  let numFactorial = 1;
  if (num < 0) return "Incorrect number";
  for (let i=1;i<=num;i++) {
    numFactorial *= i;
  }
  return numFactorial;
}
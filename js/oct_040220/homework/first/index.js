function getBMI (hight, weidth) {
    hight /= 100;
    return weidth / hight**2;
}

function getAdvise (bmi) {

  if(bmi<15){
    return "Underweight";
  } else if (bmi<25) {
    return "Normal";
  } else if (bmi>=25) {
    return "Overweight";
  }

}

function getParams () {

  let hight = +prompt("Please enter your height");
  let weidth = +prompt("Please enter your weidth");

  let bmi = getBMI (hight, weidth);
  let advice = getAdvise (bmi);

  alert("Your weight is: "+advice);

}

getParams ();
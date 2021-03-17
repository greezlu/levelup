class Calc {

  constructor (fromInput, fromSelect, toInput, toSelect) {

    let self = this;

    this.fromInput = fromInput;
    this.fromSelect = fromSelect;
    this.toInput = toInput;
    this.toSelect = toSelect;

    this.toCM = {
      "Дюйм": 0.393701,
      "Миля": 6.2137e-6,
      "Сантиметр": 1,
      "Метр": 0.01
    }

    this.fromCM = {
      "Дюйм": 2.54,
      "Миля": 160934,
      "Сантиметр": 1,
      "Метр": 100
    }

    fromInput.addEventListener("input", changeFromInput);
    toInput.addEventListener("input", changeToInput);
    fromSelect.addEventListener("change", changeSelect);
    toSelect.addEventListener("change", changeSelect);

    function changeSelect (e) {
      let target = e.target.parentElement.getElementsByTagName("input")[0];
      if (target === fromInput) {
        changeFromInput({target: target});
      } else if (target === toInput) {
        changeToInput({target: target});
      }
    }

    function changeFromInput (e) {
      let currentValue = e.target.value === "" ? 0 : parseInt(e.target.value);
      if ( !isFinite(currentValue) ) return;
      let convertedValue = getConverted( currentValue, fromSelect.value, toSelect.value);
      toInput.value = convertedValue;
    }

    function changeToInput (e) {
      let currentValue = e.target.value === "" ? 0 : parseInt(e.target.value);
      if ( !isFinite(currentValue) ) return;
      let convertedValue = getConverted( currentValue, toSelect.value, fromSelect.value);
      fromInput.value = convertedValue;
    }

    function getConverted (value, from, to) {
      let convertedValue = (value / self.toCM[from] / self.fromCM[to]).toFixed(2);
      convertedValue = parseInt(convertedValue*100)/100;
      return convertedValue;
    }

  }

}

let fromInput = document.querySelector("#container .side:first-of-type input");
let fromSelect = document.querySelector("#container .side:first-of-type select");

let toInput = document.querySelector("#container .side:last-of-type input");
let toSelect = document.querySelector("#container .side:last-of-type select");

let calc = new Calc(fromInput, fromSelect, toInput, toSelect);
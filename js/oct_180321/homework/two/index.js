class MovingElem {
  constructor(elem){

    document.addEventListener("click", clickEvent);

    function clickEvent (e) {
      let yOffset = elem.offsetHeight/2;
      let xOffset = elem.offsetWidth/2;

      elem.style.top = (e.y-yOffset)+"px";
      elem.style.left = (e.x-xOffset)+"px";
    }

  }
}

let virusElem = document.getElementById("virus");
let virus = new MovingElem(virusElem);
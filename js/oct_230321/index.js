function changeColor (e) {

    let target = e.target;
    if (target.tagName !== "DIV") return;

    /*
    if ( $(target).hasClass("red") ) {
        $(target).removeClass("red");
        $(target).addClass("green");
    } else if ( $(target).hasClass("green") ) {
        $(target).removeClass("green");
        $(target).addClass("red");
    } else {
        $(target).addClass("green");
    }
    */

    if ( target.classList.contains("red") ) {
        target.classList.remove("red");
        target.classList.add("green");
    } else if ( target.classList.contains("green") ) {
        target.classList.remove("green");
        target.classList.add("red");
    } else {
        target.classList.add("green");
    }

    let count = Number(target.innerText);
    target.innerText = ++count;
}

// $("div").on("click", changeColor);
document.addEventListener("click", changeColor);
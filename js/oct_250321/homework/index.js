class TabList {

  constructor (nav, main, textArr) {

    nav.addEventListener("click", navClick);

    let ul = getNavList();
    nav.append(ul);

    insertCurrentText();

    function getNavList () {
      let ul = document.createElement("ul");
      for (let item of textArr) {
        let li = document.createElement("li");
        li.innerText = item.name.toUpperCase();
        ul.append(li);
      }
      ul.getElementsByTagName("li")[0].classList.add("li-selected");
      return ul;
    }

    function insertCurrentText () {
      let selected = nav.getElementsByClassName("li-selected")[0];
      let currentObj = textArr.find(item=>{
        if (item.name.toUpperCase() === selected.innerText) return true;
      })
      main.innerHTML = currentObj.description;
    }

    function navClick (event) {

      let liTarget = event.target;
      if (liTarget.tagName !== "LI" || liTarget.classList.contains("li-selected")) return;

      let liList = nav.getElementsByTagName("LI");

      for (let item of liList) {
        if (item === liTarget){
          item.classList.add("li-selected");
        } else if (item.classList.contains("li-selected")) {
          item.classList.remove("li-selected");
        }
      }

      insertCurrentText();

    }

  }

}



let nav = document.getElementsByTagName("NAV")[0];
let main = document.getElementsByTagName("MAIN")[0];

let articles = new TabList(nav, main, text);
//Глобальная переменная text предварительно определена в другом файле
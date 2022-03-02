/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/4geeks.ico";

let liParent = document.querySelector("ul");
let allSpans = document.querySelectorAll("li span");
for (let i = 0; i < allSpans.length; i++) {
  allSpans[i].addEventListener("click", () => {
    allSpans[i].parentNode.parentNode.removeChild(allSpans[i].parentNode);
  });
}

window.onload = function() {
  let addtodo = document.querySelector("#addToDo");
  addtodo.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
      let create = document.createElement("li");
      create.innerHTML =
        '<span><i class="fa-solid fa-xmark"></i></span>' + addtodo.value;
      liParent.appendChild(create);
      let span = create.firstChild;
      span.addEventListener("click", function() {
        this.parentNode.parentNode.removeChild(this.parentNode);
      });
      addtodo.value = "";
    }
  });
};

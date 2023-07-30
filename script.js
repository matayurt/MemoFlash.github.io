var bulb = document.querySelector(".bulb");
var bt_on = document.querySelector(".bt-on");
var bt_off = document.querySelector(".bt-off");

var bt_on_ln = document.querySelectorAll(".bt-on").length;
var bt_off_ln = document.querySelectorAll(".bt-off").length;

var add_bt = document.querySelector(".add");
var add_me = document.querySelector(".add-me");

var del_bt = document.querySelector(".del");
var del_bt_ln = document.querySelectorAll(".del").length;

const saveData = () => {
  localStorage.setItem("data", add_me.innerHTML);
};

const getData = () => {
  add_me.innerHTML = localStorage.getItem("data");
};

//* Yenisini ekler
add_bt.addEventListener("click", () => {
  let li = document.createElement("li");
  li.innerHTML =
    '<li class="list"> <div class="light-pack"> <img src="img/lamp.png" alt="" class="bulb" /> <button class="bt-on bt">TURN ON</button> <button class="bt-off bt">TURN OFF</button> <img src="img/458594.png" alt="" class="del" /> </div> </li>';
  li.classList.add("list");
  add_me.appendChild(li);

  saveData();
});

const lightList = document.getElementById("light-list");
lightList.addEventListener("click", (event) => {
  const target = event.target;
  const parentLi = target.closest(".list");

  if (parentLi) {
    const bulbImg = parentLi.querySelector(".bulb");
    const isBulbOn = bulbImg.classList.contains("on");

    if (target.classList.contains("bt-on")) {
      if (!isBulbOn) {
        bulbImg.classList.add("on");
        bulbImg.src = "img/lightbulb.png";
        saveData();
      }
    } else if (target.classList.contains("bt-off")) {
      if (isBulbOn) {
        bulbImg.classList.remove("on");
        bulbImg.src = "img/lamp.png";
        saveData();
      }
    } else if (target.classList.contains("del")) {
      parentLi.remove();
      saveData(); // <li> elementini komple siler
    }
  }
});

getData();

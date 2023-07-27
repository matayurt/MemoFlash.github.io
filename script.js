var bulb = document.querySelector(".bulb");
var bt_on = document.querySelector(".bt-on");
var bt_off = document.querySelector(".bt-off");

var bt_on_ln = document.querySelectorAll(".bt-on").length;
var bt_off_ln = document.querySelectorAll(".bt-off").length;

var add_bt = document.querySelector(".add");
var add_me = document.querySelector(".add-me");

const turn_on = () => {
  bt_on.addEventListener("click", () => {
    bulb.src = "img/lightbulb.png";
  });
};

const turn_off = () => {
  bt_off.addEventListener("click", () => {
    bulb.src = "img/lamp.png";
  });
};

for (i = 0; i < bt_on_ln; i++) {
  document.querySelectorAll(".bt-on")[i].addEventListener("click", () => {
    turn_on();
  });
}

for (i = 0; i < bt_off_ln; i++) {
  document.querySelectorAll(".bt-off")[i].addEventListener("click", () => {
    turn_off();
  });
}

add_bt.addEventListener("click", () => {
  let li = document.createElement("li");
  li.innerHTML =
    '<div class="light-pack"> <img src="img/lamp.png" alt="" class="bulb" /> <div class="btns"> <button class="bt-on bt">TURN ON</button> <button class="bt-off bt">TURN OFF</button></div></div>';
  li.classList.add("list");
  add_me.appendChild(li);
});

// var clickEvent = 1;
// bt_on.addEventListener("click", () => {
//   clickEvent += 1;
//   bulb.src = "img/2779262.png";
//   if (clickEvent == 2) {
//     bt_on.textContent = "TURN OFF";
//   }
//   if (clickEvent == 3) {
//     bulb.src = "img/118063.png";
//   }
// });

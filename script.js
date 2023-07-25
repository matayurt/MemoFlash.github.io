var bulb = document.querySelector(".bulb");
var bt_on = document.querySelector(".bt-on");
var bt_off = document.querySelector(".bt-off");

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

bt_on.addEventListener("click", () => {
  bulb.src = "img/lightbulb.png";
});

bt_off.addEventListener("click", () => {
  bulb.src = "img/lamp.png";
});

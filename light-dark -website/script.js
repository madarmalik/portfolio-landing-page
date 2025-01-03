let btn = document.getElementById("btn");
let btnIcon = document.getElementById("btn-icon");
let btnText = document.getElementById("btn-text");
let logo = document.getElementById("logo");

btn.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    btnIcon.src = "sun.png";
    btnText.innerHTML = "Light";
  } else {
    btnIcon.src = "moon.png";
    btnText.innerHTML = "Dark";
  }
};
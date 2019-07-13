let dobozka = document.getElementById("dobozka");
let btn1 = document.getElementById("gomb1");
let btn2 = document.getElementById("gomb2");
let szoveg1 = document.getElementById("szoveg1");
let szoveg2 = document.getElementById("szoveg2");
let closeBtn = document.getElementById("X");
let settingsDbz = document.getElementById("settings-doboz");
let text = document.getElementById("akkonem");
let backgroundColour = document.getElementById("background");
let settingsBtn = document.getElementById("settings");
let coloursDbz = document.getElementById("colours");
let red = document.getElementById("red");
let yellow = document.getElementById("yellow");
let green = document.getElementById("green");
let white = document.getElementById("white");
let purple = document.getElementById("purple");
let okBtn = document.getElementById("ok");


btn1.addEventListener("click", function () {
    szoveg1.style.display = "none";
});

btn2.addEventListener("click", function () {
   szoveg2.innerText = "ASDADA";
});

closeBtn.addEventListener("click", function () {
   dobozka.style.display = "none";
});

settingsBtn.addEventListener("click", function () {
    dobozka.style.display = "none";
    settingsDbz.style.display = "block";
});

backgroundColour.addEventListener("click", function () {
   coloursDbz.style.display = "block";
});

red.addEventListener("click", function () {
   dobozka.style.backgroundColor = "red";
    settingsDbz.style.display = "none";
    dobozka.style.display = "block";
});

yellow.addEventListener("click", function (e) {
    dobozka.style.backgroundColor = "yellow";
    settingsDbz.style.display = "none";
    dobozka.style.display = "block";
});
green.addEventListener("click", function (ev) {
    dobozka.style.backgroundColor = "green";
    settingsDbz.style.display = "none";
    dobozka.style.display = "block";
});
white.addEventListener("click", function (evv) {
    dobozka.style.backgroundColor = "#fff";
    settingsDbz.style.display = "none";
    dobozka.style.display = "block";
});
purple.addEventListener("click", function (ee) {
    dobozka.style.backgroundColor = "purple";
    settingsDbz.style.display = "none";
    dobozka.style.display = "block";
});



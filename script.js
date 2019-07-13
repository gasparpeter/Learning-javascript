let dobozka = document.getElementById("dobozka");
let btn1 = document.getElementById("gomb1");
let btn2 = document.getElementById("gomb2");
let szoveg1 = document.getElementById("szoveg1");
let szoveg2 = document.getElementById("szoveg2");
let closeBtn = document.getElementById("X");

btn1.addEventListener("click", function () {
    szoveg1.style.display = "none";
});

btn2.addEventListener("click", function () {
   szoveg2.innerText = "ASDADA";
});

closeBtn.addEventListener("click", function () {
   dobozka.style.display = "none";
});

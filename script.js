
let btn = document.getElementById("btn");

function generateItems() {
    let ul = document.createElement("ul");
    
    for (let i = 0; i < 10; i++ ) {
        let li = document.createElement("li");
        ul.appendChild(li);
    }
}

btn.addEventListener("click", generateItems);
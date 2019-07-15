
let btn = document.getElementById("btn");

function generateItems() {
    let ul = document.createElement("ul");
    
    for (let i = 0; i < 1; i++ ) {
        let li = document.createElement("li");
        ul.appendChild(li);
    }
    document.body.appendChild(ul);
}

btn.addEventListener("click", generateItems);
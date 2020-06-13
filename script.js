const container = document.getElementById("maincontainer");
let newDiv = null;
let rows = 16;
let cols = 16;
for(let i = 0; i < (rows * cols); ++i) {
        newDiv = document.createElement("div");
        newDiv.setAttribute("class", "box");
        container.appendChild(newDiv);
}
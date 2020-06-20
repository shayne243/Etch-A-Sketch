const container = document.getElementById("maincontainer");
let newDiv = null;
let rows = 16;
let cols = 16;
function generateGrid() {
    container.setAttribute("style", "grid-template-columns: repeat(" + cols + ",auto); grid-template-rows: repeat(" + rows + ",auto);")
    for(let i = 0; i < (rows * cols); ++i) {
        newDiv = document.createElement("div");
        newDiv.setAttribute("class", "box");
        newDiv.addEventListener("mouseover", function color() {this.style.background = "black";
        });
        container.appendChild(newDiv);
    }
    container.setAttribute("width", "320px");
    container.setAttribute("height", "320px");
}
function clearGrid() {
    let grid = document.querySelectorAll(".box");
    for (let i = 0; i < grid.length; i++) {
        grid[i].style.background = "aqua";
    }
}
generateGrid();
const clearbtn = document.getElementById("clear");
clearbtn.addEventListener("click", clearGrid);

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
}
function clearGrid() {
    let grid = document.querySelectorAll(".box");
    for (let i = 0; i < grid.length; i++) {
        grid[i].style.background = "aqua";
    }
}
function shrinkGrid() {
    rows *= 0.5;
    cols *= 0.5;
    generateGrid();
}
function growGrid() {
    rows *= 2;
    cols *= 2;
    generateGrid();
}
generateGrid();
const clearbtn = document.getElementById("clear");
clearbtn.addEventListener("click", clearGrid);

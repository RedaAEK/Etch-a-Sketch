const container = document.querySelector(".container");
const changeGrid = document.getElementsByTagName("button")[0];
const resetGrid = document.getElementsByTagName("button")[1];
let dimensions;
console.log(containerWidth)
function generateGrid(Squares) {
  if (Squares <= 100){
  dimensions=Number(containerWidth/Squares)
  for (let i = 0; i < (Squares*Squares); i++) {
    let gridSquare = document.createElement("div");
    gridSquare.className = "square";
    container.appendChild(gridSquare);
    gridSquare.style.boxSizing="border-box"
    gridSquare.style.border = "1px solid black";
    gridSquare.style.width = `${dimensions}px`;
    gridSquare.style.height = `${dimensions}px`;
    gridSquare.addEventListener("mouseover", () => {
      let r = Math.floor(Math.random() * 256);
      let g = Math.floor(Math.random() * 256);
      let b = Math.floor(Math.random() * 256);
      gridSquare.style.background = `rgb(${r},${g},${b})`;
    });
  }} else {
    alert("You've reached the limit which is 100 per row")
  }
}
generateGrid(16)
// }
changeGrid.addEventListener("click", () => {
  container.innerHTML=''
  gridPrompt = prompt(`How many grid you want per side)`);
generateGrid(gridPrompt)
});
resetGrid.addEventListener("click", () => {
  container.innerHTML = "";
  generateGrid(16)
});

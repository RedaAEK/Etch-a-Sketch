const container = document.querySelector(".container");
const changeGrid = document.getElementsByTagName("button")[0];
const resetGrid = document.getElementsByTagName("button")[1];
// random colors :
const getRandomColor = (element) => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
   return `rgb(${r},${g},${b})`;
};
// generate grids 
function generateGrid(gridSize) {
container.replaceChildren();
  if (gridSize <= 100) {
    container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    for (let i = 0; i < gridSize * gridSize; i++) {
      const gridSquare = document.createElement("div");
      gridSquare.className = "square";
      container.appendChild(gridSquare);
      gridSquare.addEventListener("mouseover", () => {
       gridSquare.style.background = getRandomColor();
      });
    }
  } else if (isNaN(gridSize) || !gridSize) {
    alert("That's not a number , please enter a number");
  } else {
    alert("You've reached the limit which is 100 per row");
  }
}
generateGrid(16);
// changesize event 
changeGrid.addEventListener("click", () => {
  const gridPrompt = prompt(`How many grid you want per side)`);

  generateGrid(parseInt(gridPrompt));
});
// Reset Grid event
resetGrid.addEventListener("click", () => {
  generateGrid(16);
});

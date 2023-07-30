// Function to create the grid of divs
function createGrid(gridSize) {
  const gridContainer = document.getElementById("gridContainer");
  gridContainer.innerHTML = ""; // Clear the existing grid

  const containerSize = 500; // Adjust this value as needed
  const borderWidth = 1; // Border width in pixels
  const totalBorderWidth = 2 * borderWidth; // Account for both sides of the border
  const squareSize = (containerSize - totalBorderWidth) / gridSize;

  gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, ${squareSize}px)`;
  gridContainer.style.gridTemplateRows = `repeat(${gridSize}, ${squareSize}px)`;

  for (let i = 0; i < gridSize * gridSize; i++) {
    const gridSquare = document.createElement("div");
    gridSquare.classList.add("border", "border-gray-300", "box-border"); // Add "box-border" class
    gridSquare.addEventListener("mouseover", changeColor);
    gridContainer.appendChild(gridSquare);
  }
}
  
  
  // Function to change the color of a grid square on hover
  function changeColor(event) {
    const color = selectedColor;
    event.target.style.backgroundColor = color;
  }
  
  // Function to reset the grid back to default color
  function resetGrid() {
    const gridSquares = document.querySelectorAll("#gridContainer > div");
    gridSquares.forEach(square => square.style.backgroundColor = "transparent");
  }
  
  // Function to update the grid size label
  function updateGridSizeLabel(size) {
    const gridSizeLabel = document.getElementById("gridSizeLabel");
    gridSizeLabel.textContent = `${size}*${size}`;
  }
  
  // Function to get the selected color from the color picker
  function getSelectedColor() {
    const colorPicker = document.getElementById("colorPicker");
    return colorPicker.value;
  }
  
  // Initialize the grid with default size
  createGrid(16);
  updateGridSizeLabel(16);
  
  let selectedColor = getSelectedColor();
  
  // Event listener for slider change
  document.getElementById("gridSizeSlider").addEventListener("input", function (event) {
    const gridSize = event.target.value;
    createGrid(gridSize);
    updateGridSizeLabel(gridSize);
  });
  
  // Event listener for color picker change
  document.getElementById("colorPicker").addEventListener("change", function (event) {
    selectedColor = getSelectedColor();
  });
  
  // Event listener for reset button
  document.getElementById("resetButton").addEventListener("click", resetGrid);
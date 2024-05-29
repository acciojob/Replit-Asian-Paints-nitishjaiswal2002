//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function() {
  const gridItems = document.querySelectorAll('.grid-item');
  const blockIdInput = document.getElementById('block_id');
  const colorInput = document.getElementById('colour_id');
  const changeButton = document.getElementById('change_button');
  const resetButton = document.getElementById('reset_button');

  // Change color of grid item
  function changeColor() {
    const blockId = blockIdInput.value;
    const color = colorInput.value;

    if (blockId && color) {
      const gridItem = document.getElementById(blockId);
      if (gridItem) {
        gridItem.style.backgroundColor = color;
      }
    }
  }

  // Reset all grid items to transparent background
  function resetColors() {
    gridItems.forEach(item => {
      item.style.backgroundColor = 'transparent';
    });
  }

  // Add event listener for Change Color button
  changeButton.addEventListener('click', changeColor);

  // Add event listener for Reset button
  resetButton.addEventListener('click', resetColors);
});

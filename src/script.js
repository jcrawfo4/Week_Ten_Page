// script.js
document.getElementById('dataForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent form submission

  // Retrieve input values
  const input1 = document.getElementById('input1').value;
  const input2 = document.getElementById('input2').value;

  // Create a new row and cells
  const newRow = document.createElement('tr');
  const cell1 = newRow.insertCell(0);
  const cell2 = newRow.insertCell(1);

  // Set cell values
  cell1.textContent = input1;
  cell2.textContent = input2;

  // Append the new row to the table
  document.querySelector('table tbody').appendChild(newRow);

  // Reset form
  this.reset();
});
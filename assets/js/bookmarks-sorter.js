document.addEventListener('DOMContentLoaded', function() {
  const table = document.getElementById('bookmarksTable');
  const headers = table.querySelectorAll('th');
  // Set up an array to track the sort direction for each column (true for ascending)
  const sortDirections = Array.from(headers).map(() => true);
  // Default sorted column is "Bookmark" (index 2), default direction: ascending (A–Z)
  let currentSortedIndex = 2;
  // Update the sort indicator for the default column.
  updateSortIndicators(headers, currentSortedIndex, sortDirections[currentSortedIndex]);

  headers.forEach((header, index) => {
    header.style.cursor = 'pointer'; // indicate that the header is clickable
    header.addEventListener('click', () => {
      // If clicking on a different header, reset its sort direction to default (ascending)
      if (index !== currentSortedIndex) {
        sortDirections[index] = true;
        currentSortedIndex = index;
      } else {
        // Toggle the sort direction for the same column.
        sortDirections[index] = !sortDirections[index];
      }
      sortTableByColumn(table, index, sortDirections[index]);
      updateSortIndicators(headers, index, sortDirections[index]);
    });
  });
});

// Function to sort the table by the specified column
function sortTableByColumn(table, columnIndex, ascending = true) {
  const tbody = table.querySelector('tbody');
  // Get an array of the rows.
  const rowsArray = Array.from(tbody.querySelectorAll('tr'));

  // Sort rows based on the text content of the cell in the clicked column.
  rowsArray.sort((rowA, rowB) => {
    const cellA = rowA.children[columnIndex].innerText.trim();
    const cellB = rowB.children[columnIndex].innerText.trim();
    // Use localeCompare for alphabetical sorting.
    return ascending ? cellA.localeCompare(cellB) : cellB.localeCompare(cellA);
  });

  // Append the sorted rows back to the tbody.
  rowsArray.forEach(row => tbody.appendChild(row));
}

// Function to update the sort indicator on the header cells.
function updateSortIndicators(headers, sortedIndex, ascending) {
  headers.forEach((header, index) => {
    // Remove any existing sort indicator span.
    const oldIndicator = header.querySelector('.sort-indicator');
    if (oldIndicator) {
      oldIndicator.remove();
    }
    // Only add an indicator to the currently active column.
    if (index === sortedIndex) {
      const indicatorSpan = document.createElement('span');
      indicatorSpan.classList.add('sort-indicator');
      indicatorSpan.style.marginLeft = '5px';
      // If ascending is true, show the downward arrow; otherwise, show the upward arrow.
      indicatorSpan.textContent = ascending ? '▼' : '▲';
      header.appendChild(indicatorSpan);
    }
  });
}

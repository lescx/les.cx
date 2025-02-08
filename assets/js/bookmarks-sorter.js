document.addEventListener('DOMContentLoaded', () => {
  const table = document.getElementById('bookmarksTable');
  const headers = Array.from(table.querySelectorAll('th'));
  const sortDirections = headers.map(() => true);
  let currentSortedIndex = 2; // Default: sort by "Bookmark" (index 2)

  headers.forEach((header, i) => {
    // Disable sorting for URL (column 0) and Feed (column 1)
    if (i === 0 || i === 1) {
      header.style.cursor = 'default';
      return;
    }
    header.style.cursor = 'pointer';
    addSortIndicator(header);
    header.addEventListener('click', () => {
      // Toggle sort direction if re-clicking the same column,
      // otherwise default to ascending.
      if (i !== currentSortedIndex) {
        sortDirections[i] = true;
        currentSortedIndex = i;
      } else {
        sortDirections[i] = !sortDirections[i];
      }
      sortTableByColumn(table, i, sortDirections[i]);
      updateIndicators(headers, i, sortDirections[i]);
    });
  });

  // Initialize the default indicator for the default sorted column ("Bookmark")
  updateIndicators(headers, currentSortedIndex, sortDirections[currentSortedIndex]);
});

const sortTableByColumn = (table, colIndex, ascending) => {
  const tbody = table.querySelector('tbody');
  const rows = Array.from(tbody.rows);
  rows.sort((a, b) => {
    const textA = a.cells[colIndex].innerText.trim();
    const textB = b.cells[colIndex].innerText.trim();
    return ascending ? textA.localeCompare(textB) : textB.localeCompare(textA);
  });
  rows.forEach(row => tbody.appendChild(row));
};

const addSortIndicator = header => {
  const span = document.createElement('span');
  span.className = 'sort-indicator';
  span.innerHTML = `
    <span class="up-arrow" style="opacity:0.3;">▲</span>
    <span class="down-arrow" style="opacity:0.3;">▼</span>
  `;
  header.appendChild(span);
};

const updateIndicators = (headers, activeIndex, ascending) => {
  headers.forEach((header, i) => {
    const up = header.querySelector('.up-arrow'),
          down = header.querySelector('.down-arrow');
    if (up && down) {
      if (i === activeIndex) {
        up.style.opacity = ascending ? '0.3' : '1';
        down.style.opacity = ascending ? '1' : '0.3';
      } else {
        up.style.opacity = '0.3';
        down.style.opacity = '0.3';
      }
    }
  });
};

document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.querySelector('input[type="text"]');
  const tableRows = Array.from(document.querySelectorAll('#bookmarksTable tbody tr'));

  // Cache row text content to avoid repeated DOM reads
  const rowTexts = tableRows.map(row => row.innerText.toLowerCase());

  let searchTimeout;

  searchInput.addEventListener('input', function() {
    const query = this.value.toLowerCase().trim();

    // Debounce with requestAnimationFrame for smoother performance
    if (searchTimeout) cancelAnimationFrame(searchTimeout);
    searchTimeout = requestAnimationFrame(() => {
      tableRows.forEach((row, index) => {
        const isVisible = rowTexts[index].includes(query);
        if (row.style.display !== (isVisible ? '' : 'none')) {
          row.style.display = isVisible ? '' : 'none';
        }
      });
    });
  });
});

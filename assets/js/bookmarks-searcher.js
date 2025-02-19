document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.querySelector('input[type="text"]');
  const tableRows = Array.from(document.querySelectorAll('#bookmarksTable tbody tr'));

  // Cache row text content to avoid repeated DOM reads
  const rowTexts = tableRows.map(row => row.innerText.toLowerCase());

  let searchTimeout;

  searchInput.addEventListener('input', function() {
    const query = this.value.toLowerCase().trim();
    // Split query into individual words (ignoring extra whitespace)
    const terms = query.split(/\s+/).filter(term => term !== "");

    if (searchTimeout) cancelAnimationFrame(searchTimeout);
    searchTimeout = requestAnimationFrame(() => {
      tableRows.forEach((row, index) => {
        // Check if every search term is present in the row text.
        const isVisible = terms.every(term => rowTexts[index].includes(term));
        row.style.display = isVisible ? '' : 'none';
      });
    });
  });
});

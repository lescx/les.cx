document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.querySelector('input[type="text"]');
  const tableRows = Array.from(document.querySelectorAll('#bookmarksTable tbody tr'));

  // Cache each row's lowercased title and tags.
  // Assumes title is in the third cell and tags in the last cell.
  const rowData = tableRows.map(row => {
    const titleCell = row.querySelector('td:nth-child(3)');
    const title = titleCell ? titleCell.textContent.toLowerCase() : '';

    const tagsCell = row.querySelector('td:last-child');
    const tags = tagsCell
      ? tagsCell.textContent.toLowerCase().split(/\s+/).filter(word => word.startsWith('#'))
      : [];

    return { element: row, title, tags };
  });

  const filterRows = () => {
    const query = searchInput.value.toLowerCase().trim();

    // Show all rows if the query is empty.
    if (!query) {
      rowData.forEach(({ element }) => element.style.display = '');
      return;
    }

    const terms = query.split(/\s+/).filter(Boolean);

    // Separate positive and negative terms.
    const positiveTerms = terms.filter(term => !term.startsWith('!#'));
    const negativeTerms = terms
      .filter(term => term.startsWith('!#') && term.length > 2)
      .map(term => '#' + term.slice(2));

    rowData.forEach(({ element, title, tags }) => {
      // For each positive term:
      // - If it starts with '#', check in title or any tag.
      // - Otherwise, search only in the title.
      const positiveMatch = positiveTerms.every(term => {
        if (term.startsWith('#')) {
          return title.includes(term) || tags.some(tag => tag.includes(term));
        }
        return title.includes(term);
      });

      // For negative terms: if any tag starts with the negative prefix, exclude the row.
      const negativeMatch = negativeTerms.some(neg =>
        tags.some(tag => tag.startsWith(neg))
      );

      element.style.display = (positiveMatch && !negativeMatch) ? '' : 'none';
    });
  };

  // Filter on every keystroke.
  searchInput.addEventListener('input', filterRows);
});

function toggleBookmark() {
  const toggleElement = document.querySelector('.bookmark-toggle');
  const textElement = toggleElement.querySelector('.bookmark-text');

  toggleElement.classList.toggle('bookmarked');

  // Toggle text between "Bookmark" and "Bookmarked"
  if (toggleElement.classList.contains('bookmarked')) {
      textElement.textContent = 'Bookmarked';
  } else {
      textElement.textContent = 'Bookmark';
  }
}



document.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.getElementById('search-input');
  const cards = document.querySelectorAll('.card');
  const searchButton = document.getElementById('search-button');

  searchInput.addEventListener('input', function () {
    const query = searchInput.value.toLowerCase();

    cards.forEach(card => {
      const name = card.getAttribute('data-name').toLowerCase();
      if (name.includes(query)) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  });

  searchButton.addEventListener('click', function () {
    const query = searchInput.value.toLowerCase();

    cards.forEach(card => {
      const name = card.getAttribute('data-name').toLowerCase();
      if (name.includes(query)) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

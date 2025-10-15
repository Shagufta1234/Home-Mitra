const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');
    const searchIcon = document.getElementById('search-icon');
    const searchDropdown = document.getElementById('search-dropdown');

    // Toggle mobile menu
    hamburger.addEventListener('click', () => {
      nav.classList.toggle('show');
    });

    // Toggle cart dropdown
    searchIcon.addEventListener('click', () => {
      searchDropdown.style.display = searchDropdown.style.display === 'block' ? 'none' : 'block';
    });

    // Hide dropdown when clicking outside
    document.addEventListener('click', (e) => {
      if (!searchDropdown.contains(e.target) && !searchIcon.contains(e.target)) {
        searchDropdown.style.display = 'none';
      }
    });
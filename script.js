const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');
    const cartIcon = document.getElementById('cart-icon');
    const cartDropdown = document.getElementById('cart-dropdown');

    // Toggle mobile menu
    hamburger.addEventListener('click', () => {
      nav.classList.toggle('show');
    });

    // Toggle cart dropdown
    cartIcon.addEventListener('click', () => {
      cartDropdown.style.display = cartDropdown.style.display === 'block' ? 'none' : 'block';
    });

    // Hide dropdown when clicking outside
    document.addEventListener('click', (e) => {
      if (!cartDropdown.contains(e.target) && !cartIcon.contains(e.target)) {
        cartDropdown.style.display = 'none';
      }
    });
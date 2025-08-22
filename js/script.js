// Basic functionality for the Toyota Motors website
document.addEventListener('DOMContentLoaded', function() {
  // Set current year in footer
  document.getElementById('year').textContent = new Date().getFullYear();
  
  // Handle logout links
  const logoutLinks = document.querySelectorAll('#logout-link, #sidebar-logout');
  logoutLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      if (confirm('Are you sure you want to logout?')) {
        window.location.href = './login.html';
      }
    });
  });
  
  // Form submission handlers
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      // In a real application, you would validate and send to server
      window.location.href = './dashboard.html';
    });
  }
  
  const registerForm = document.getElementById('registerForm');
  if (registerForm) {
    registerForm.addEventListener('submit', function(e) {
      e.preventDefault();
      // In a real application, you would validate and send to server
      window.location.href = './login.html';
    });
  }
  
  // Mobile menu toggle
  const toggleMenu = document.getElementById('togglemenu');
  if (toggleMenu) {
    toggleMenu.addEventListener('click', function() {
      document.body.classList.toggle('sidebar-enable');
    });
  }
});
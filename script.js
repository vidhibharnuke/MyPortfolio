// Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", function (e) {
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
    // Navbar active link highlight
    const navLinks = document.querySelectorAll('.navbar ul li a');
    window.addEventListener('scroll', () => {
      let fromTop = window.scrollY + 80;
      navLinks.forEach(link => {
        const section = document.querySelector(link.hash);
        if (section && section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
          navLinks.forEach(l => l.classList.remove('active'));
          document.addEventListener('contextmenu', event => event.preventDefault());
          document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
  }, false);
  document.addEventListener('keydown', function(e) {
    if (
      (e.ctrlKey && (e.key === 's' || e.key === 'u')) || // Ctrl+S or Ctrl+U
      (e.key === 'F12') || // F12
      (e.ctrlKey && e.shiftKey && e.key === 'I') // Ctrl+Shift+I
    ) {
      e.preventDefault();
    }
  }, false);
          link.classList.add('active');
        }
      });
    });
    
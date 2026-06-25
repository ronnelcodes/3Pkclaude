function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));

  const page = document.getElementById('page-' + id);
  if (page) page.classList.add('active');

  const navLink = document.getElementById('nav-' + id);
  if (navLink) navLink.classList.add('active');

  window.scrollTo({ top: 0, behavior: 'smooth' });
  return false;
}

// Prevent default on nav links
document.querySelectorAll('.nav-links a, .footer-btn').forEach(el => {
  if (el.getAttribute('href') === '#') {
    el.addEventListener('click', e => e.preventDefault());
  }
});

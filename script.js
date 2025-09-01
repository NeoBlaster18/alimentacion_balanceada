// Interacciones: menu mobile y active links
document.addEventListener('DOMContentLoaded', function(){
  const menuToggle = document.getElementById('menuToggle');
  const mainNav = document.getElementById('mainNav');
  menuToggle.addEventListener('click', () => {
    const open = mainNav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  // active link on scroll
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.main-nav a');
  function updateActive(){
    let fromTop = window.scrollY + 80;
    sections.forEach(section => {
      if(section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop){
        navLinks.forEach(link => link.classList.remove('active'));
        const id = section.getAttribute('id');
        const active = document.querySelector('.main-nav a[href="#' + id + '"]');
        if(active) active.classList.add('active');
      }
    });
  }
  window.addEventListener('scroll', updateActive);
  updateActive();
});
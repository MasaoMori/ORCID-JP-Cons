/* Jekyll adaptation, GPL-2.0-or-later. No jQuery dependency. */
'use strict';
document.documentElement.classList.add('js');
const nav = document.getElementById('site-navigation');
if (nav) {
  const toggle = nav.querySelector('.menu-toggle');
  const setOpen = open => {
    nav.classList.toggle('toggled', open);
    toggle.setAttribute('aria-expanded', String(open));
  };
  toggle.addEventListener('click', () => setOpen(toggle.getAttribute('aria-expanded') !== 'true'));
  nav.querySelectorAll('.submenu-toggle').forEach(button => {
    button.addEventListener('click', () => {
      const open = button.getAttribute('aria-expanded') !== 'true';
      button.setAttribute('aria-expanded', String(open));
      button.parentElement.classList.toggle('submenu-open', open);
    });
  });
  nav.addEventListener('keydown', event => {
    if (event.key !== 'Escape') return;
    const openItem = event.target.closest('.submenu-open');
    if (openItem) {
      openItem.classList.remove('submenu-open');
      const button = openItem.querySelector('.submenu-toggle');
      button.setAttribute('aria-expanded', 'false');
      button.focus();
    } else {
      setOpen(false);
      toggle.focus();
    }
  });
  window.matchMedia('(max-width: 767px)').addEventListener('change', () => setOpen(false));
}
const scrollUp = document.getElementById('scroll-up');
if (scrollUp) {
  const update = () => scrollUp.classList.toggle('is-visible', window.scrollY > 280);
  window.addEventListener('scroll', update, { passive: true });
  update();
}

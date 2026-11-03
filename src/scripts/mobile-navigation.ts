const toggle = document.querySelector('[data-menu-toggle]');
const mobileNav = document.querySelector('.mobile-navigation');

if (toggle && mobileNav) {
  toggle.addEventListener('click', () => {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!isOpen));
    mobileNav.toggleAttribute('hidden', isOpen);
  });

  mobileNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      toggle.setAttribute('aria-expanded', 'false');
      mobileNav.setAttribute('hidden', 'hidden');
    });
  });
}

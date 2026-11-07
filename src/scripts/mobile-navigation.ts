const toggle = document.querySelector<HTMLButtonElement>('[data-menu-toggle]');
const mobileNav = document.querySelector<HTMLElement>('#mobile-navigation');
const desktopQuery = window.matchMedia('(min-width: 56.25rem)');

if (toggle && mobileNav) {
  const setOpen = (isOpen: boolean) => {
    toggle.setAttribute('aria-expanded', String(isOpen));
    toggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
    mobileNav.toggleAttribute('hidden', !isOpen);
  };

  const handleToggle = () => {
    setOpen(toggle.getAttribute('aria-expanded') !== 'true');
  };
  const handleNavigation = (event: Event) => {
    if (event.target instanceof Element && event.target.closest('a')) setOpen(false);
  };
  const handleOutsideClick = (event: PointerEvent) => {
    if (
      event.target instanceof Node &&
      !mobileNav.hidden &&
      !mobileNav.contains(event.target) &&
      !toggle.contains(event.target)
    ) {
      setOpen(false);
    }
  };
  const handleKeydown = (event: KeyboardEvent) => {
    if (event.key === 'Escape' && !mobileNav.hidden) {
      setOpen(false);
      toggle.focus();
    }
  };
  const handleBreakpoint = () => {
    if (desktopQuery.matches) setOpen(false);
  };

  toggle.addEventListener('click', handleToggle);
  mobileNav.addEventListener('click', handleNavigation);
  document.addEventListener('pointerdown', handleOutsideClick);
  document.addEventListener('keydown', handleKeydown);
  desktopQuery.addEventListener('change', handleBreakpoint);

  document.addEventListener(
    'astro:before-swap',
    () => {
      toggle.removeEventListener('click', handleToggle);
      mobileNav.removeEventListener('click', handleNavigation);
      document.removeEventListener('pointerdown', handleOutsideClick);
      document.removeEventListener('keydown', handleKeydown);
      desktopQuery.removeEventListener('change', handleBreakpoint);
    },
    { once: true },
  );
}

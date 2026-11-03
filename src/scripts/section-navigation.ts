const nav = document.querySelector('.section-nav');
const links = Array.from(document.querySelectorAll('.section-nav a'));
const sections = Array.from(document.querySelectorAll('section[id]'));

if (nav && links.length) {
  const setActive = (id: string | null) => {
    links.forEach((link) => {
      const href = link.getAttribute('href');
      const active = href === '#' + id;
      link.classList.toggle('is-active', Boolean(active));
      if (active) {
        link.setAttribute('aria-current', 'true');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (visible && visible.target.id) {
        setActive(visible.target.id);
      }
    },
    { rootMargin: '-10% 0px -60% 0px', threshold: [0.15, 0.4, 0.7] },
  );

  sections.forEach((section) => observer.observe(section));
}

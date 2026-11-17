const navs = document.querySelectorAll<HTMLElement>('.section-nav');

navs.forEach((nav) => {
  const links = Array.from(nav.querySelectorAll<HTMLAnchorElement>('a[href^="#"]'));
  const sections = links
    .map((link) => document.getElementById(link.hash.slice(1)))
    .filter((section): section is HTMLElement => section instanceof HTMLElement);

  if (!links.length || !sections.length || !('IntersectionObserver' in window)) return;

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (!visible?.target.id) return;

      links.forEach((link) => {
        const active = link.hash === `#${visible.target.id}`;
        link.classList.toggle('is-active', active);

        if (active) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    },
    { rootMargin: '-10% 0px -60% 0px', threshold: [0.15, 0.4, 0.7] },
  );

  sections.forEach((section) => observer.observe(section));
});

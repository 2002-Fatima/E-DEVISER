type SpreadDirection = 'next' | 'previous';

const initializeVolume = (volume: HTMLElement) => {
  if (volume.dataset.volumeInitialized === 'true') return;

  const openButton = volume.querySelector<HTMLButtonElement>('[data-volume-open]');
  const closeButton = volume.querySelector<HTMLButtonElement>('[data-volume-close]');
  const content = volume.querySelector<HTMLElement>('[data-volume-content]');
  const pages = Array.from(volume.querySelectorAll<HTMLElement>('[data-volume-page]'));
  const counter = volume.querySelector<HTMLElement>('[data-volume-counter]');
  const previous = volume.querySelector<HTMLButtonElement>('[data-volume-prev]');
  const next = volume.querySelector<HTMLButtonElement>('[data-volume-next]');
  const progressButtons = Array.from(volume.querySelectorAll<HTMLButtonElement>('[data-volume-go]'));

  if (!openButton || !closeButton || !content || !counter || !previous || !next || !pages.length) {
    return;
  }

  volume.dataset.volumeInitialized = 'true';
  let current = Math.max(0, pages.findIndex((page) => !page.hidden));

  const pauseVideos = () => {
    volume.querySelectorAll<HTMLVideoElement>('video').forEach((video) => video.pause());
  };

  const updateControls = () => {
    counter.textContent = `${String(current + 1).padStart(2, '0')} / ${String(pages.length).padStart(2, '0')}`;
    previous.disabled = current === 0;
    next.disabled = current === pages.length - 1;

    progressButtons.forEach((button, index) => {
      const active = index === current;
      button.classList.toggle('is-active', active);

      if (active) button.setAttribute('aria-current', 'step');
      else button.removeAttribute('aria-current');
    });
  };

  const showPage = (index: number, direction: SpreadDirection = 'next') => {
    if (index < 0 || index >= pages.length || index === current) return;

    pauseVideos();

    const previousPage = pages[current];
    const nextPage = pages[index];

    previousPage.classList.remove('is-active');
    previousPage.setAttribute('aria-hidden', 'true');
    previousPage.hidden = true;

    nextPage.hidden = false;
    nextPage.dataset.direction = direction;
    nextPage.classList.remove('is-active');
    nextPage.setAttribute('aria-hidden', 'false');

    window.requestAnimationFrame(() => nextPage.classList.add('is-active'));

    current = index;
    updateControls();
  };

  openButton.addEventListener('click', () => {
    content.hidden = false;
    openButton.setAttribute('aria-expanded', 'true');
    volume.classList.add('is-open');
    closeButton.focus();
  });

  const closeVolume = () => {
    pauseVideos();
    volume.classList.remove('is-open');
    content.hidden = true;
    openButton.setAttribute('aria-expanded', 'false');
    openButton.focus();
  };

  closeButton.addEventListener('click', closeVolume);
  previous.addEventListener('click', () => showPage(current - 1, 'previous'));
  next.addEventListener('click', () => showPage(current + 1, 'next'));

  progressButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const target = Number(button.dataset.volumeGo);
      if (Number.isInteger(target)) showPage(target, target < current ? 'previous' : 'next');
    });
  });

  volume.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !content.hidden) closeVolume();
  });

  updateControls();
};

document.querySelectorAll<HTMLElement>('[data-work-volume]').forEach(initializeVolume);

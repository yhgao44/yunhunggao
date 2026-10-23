(() => {
  'use strict';
  document.documentElement.classList.add('js-ready');
  const themeButton = document.querySelector('.theme-toggle');
  const menuButton = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('#site-nav');
  const filterGroup = document.querySelector('.publication-filters');
  const filterButtons = [...document.querySelectorAll('[data-filter]')];
  const publications = [...document.querySelectorAll('.publication')];
  const count = document.querySelector('.publication-count');

  function updateThemeLabel() {
    const dark = document.documentElement.dataset.theme === 'dark';
    themeButton.setAttribute('aria-label', `Switch to ${dark ? 'light' : 'dark'} theme`);
    themeButton.title = `Switch to ${dark ? 'light' : 'dark'} theme`;
  }
  themeButton.hidden = false;
  menuButton.hidden = false;
  filterGroup.hidden = false;
  updateThemeLabel();
  themeButton.addEventListener('click', () => {
    const theme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem('yg-theme', theme); } catch (_) { /* Private browsing can disable storage. */ }
    updateThemeLabel();
  });

  function closeMenu(returnFocus = false) {
    navigation.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation');
    if (returnFocus) menuButton.focus();
  }
  menuButton.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') !== 'true';
    navigation.classList.toggle('is-open', open);
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') closeMenu(true);
  });
  document.addEventListener('click', event => {
    if (!event.target.closest('.nav-actions')) closeMenu();
  });
  navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', () => closeMenu()));
  window.matchMedia('(min-width: 681px)').addEventListener('change', event => {
    if (event.matches) closeMenu();
  });

  function filterPublications(type) {
    filterButtons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.filter === type)));
    publications.forEach(publication => { publication.hidden = type !== 'all' && publication.dataset.type !== type; });
    const total = publications.filter(publication => !publication.hidden).length;
    count.textContent = type === 'all' ? `${total} publications · 2022–2026` : `${total} ${type === 'journal' ? 'journal papers' : 'conference papers'}`;
  }
  filterButtons.forEach(button => button.addEventListener('click', () => filterPublications(button.dataset.filter)));

  // Research links must reveal their destination even when another paper category is selected.
  function revealHashTarget() {
    const target = document.getElementById(window.location.hash.slice(1));
    if (target && target.classList.contains('publication') && target.hidden) {
      filterPublications('all');
      target.scrollIntoView({ block: 'start' });
    }
  }
  window.addEventListener('hashchange', revealHashTarget);
  revealHashTarget();
  document.querySelectorAll('a[href^="#paper-"]').forEach(link => link.addEventListener('click', () => {
    const target = document.getElementById(link.hash.slice(1));
    if (target && target.hidden) filterPublications('all');
  }));

  const chipDialog = document.getElementById('chip-dialog');
  let chipTrigger = null;
  if (chipDialog && typeof chipDialog.showModal === 'function') {
    document.querySelectorAll('.chip-zoom').forEach(link => link.addEventListener('click', event => {
      event.preventDefault();
      chipTrigger = link;
      document.getElementById('chip-dialog-title').textContent = link.dataset.chipTitle;
      document.getElementById('chip-dialog-description').textContent = link.dataset.chipDescription;
      const visual = link.querySelector('.chip-visual').cloneNode(true);
      visual.querySelector('img').loading = 'eager';
      chipDialog.querySelector('.chip-dialog-image').replaceChildren(visual);
      chipDialog.showModal();
      document.body.classList.add('dialog-open');
    }));
    chipDialog.querySelector('.chip-dialog-close').addEventListener('click', () => chipDialog.close());
    chipDialog.addEventListener('click', event => {
      if (event.target !== chipDialog) return;
      const box = chipDialog.getBoundingClientRect();
      if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) chipDialog.close();
    });
    chipDialog.addEventListener('close', () => {
      document.body.classList.remove('dialog-open');
      chipTrigger?.focus({ preventScroll: true });
    });
  }

  const navLinks = [...navigation.querySelectorAll('a')];
  const sections = navLinks.map(link => document.getElementById(link.hash.slice(1)));
  let ticking = false;
  function updateActiveSection() {
    let active = sections[0];
    for (const section of sections) {
      if (section.getBoundingClientRect().top <= 145) active = section;
    }
    navLinks.forEach(link => {
      if (link.hash === `#${active.id}`) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
    ticking = false;
  }
  window.addEventListener('scroll', () => {
    if (!ticking) { ticking = true; requestAnimationFrame(updateActiveSection); }
  }, { passive: true });
  updateActiveSection();
  document.getElementById('copyright-year').textContent = String(new Date().getFullYear());
})();

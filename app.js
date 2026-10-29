(() => {
  const body = document.body;
  const drawer = document.getElementById('drawer');
  const openButton = document.getElementById('openMenu');
  const closeButton = document.getElementById('closeMenu');
  const scrim = document.getElementById('scrim');
  const toast = document.getElementById('toast');
  const message = document.getElementById('pageMessage');
  let toastTimer;

  function openMenu() {
    body.classList.add('menu-open');
    drawer.setAttribute('aria-hidden', 'false');
    openButton.setAttribute('aria-expanded', 'true');
    closeButton.focus();
  }
  function closeMenu() {
    body.classList.remove('menu-open');
    drawer.setAttribute('aria-hidden', 'true');
    openButton.setAttribute('aria-expanded', 'false');
    openButton.focus();
  }
  function notify(text) {
    toast.textContent = text;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 2600);
  }
  function showPage(page) {
    document.querySelectorAll('[data-page]').forEach(el => {
      el.classList.toggle('active', el.dataset.page === page);
    });
    if (page === 'Home') {
      message.hidden = true;
      document.getElementById('subjects').scrollIntoView({behavior:'smooth', block:'start'});
    } else {
      message.hidden = false;
      const titles = {
        'Exams': ['Exams', 'The exam preparation area is ready for the next build. No exam papers have been added yet.'],
        'Resources': ['Resources', 'Learning resources will appear here when you choose which materials to publish.'],
        'About': ['About LearnBridge', 'LearnBridge helps learners study, practice, and prepare for exams. Learn Today. Build Tomorrow.'],
        'My Profile': ['My Profile', 'Profile accounts are not connected yet. This starting version does not collect or save personal account details.'],
        'Profile': ['Profile', 'Profile accounts are not connected yet. This starting version does not collect or save personal account details.'],
        'Settings': ['Settings', 'Settings will be added as the app features are built.'],
        'Log out': ['Log out', 'There is no signed-in account to log out from in this starting version.'],
        'Lessons': ['Lessons', 'Choose one of the seven subjects on Home. Notes have intentionally not been added yet.'],
        'Quizzes': ['Quizzes', 'Quizzes have intentionally not been added yet.'],
        'Progress': ['Progress', 'Progress tracking will be added when lessons and quizzes are connected.']
      };
      const data = titles[page] || [page, 'This section is ready for future content.'];
      message.innerHTML = `<h2>${escapeHtml(data[0])}</h2><p>${escapeHtml(data[1])}</p><button class="button button-blue" id="backHome">Back to Home</button>`;
      document.getElementById('backHome').addEventListener('click', () => showPage('Home'));
      message.scrollIntoView({behavior:'smooth', block:'center'});
    }
    closeMenu();
  }
  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  }
  openButton.addEventListener('click', openMenu);
  closeButton.addEventListener('click', closeMenu);
  scrim.addEventListener('click', closeMenu);
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && body.classList.contains('menu-open')) closeMenu(); });
  document.querySelectorAll('.drawer-link, .bottom-link, .brand').forEach(el => {
    el.addEventListener('click', e => {
      e.preventDefault();
      const page = el.dataset.page || 'Home';
      showPage(page);
    });
  });
  document.querySelectorAll('.subject-card').forEach(card => card.addEventListener('click', () => {
    notify(`${card.dataset.subject}: notes will be added in a later step.`);
  }));
  document.getElementById('startLearning').addEventListener('click', () => {
    document.getElementById('subjects').scrollIntoView({behavior:'smooth'});
  });
  document.getElementById('goExams').addEventListener('click', () => showPage('Exams'));
})();

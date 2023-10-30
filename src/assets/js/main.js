// Добавление фона при прокрутки сайта. СТАРТ
window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  const scrollPosition = window.scrollY;
  if (scrollPosition >= 300) {
    header.classList.add('header__bg');
  } else {
    header.classList.remove('header__bg');
  }
});
// Добавление фона при прокрутки сайта. КОНЕЦ
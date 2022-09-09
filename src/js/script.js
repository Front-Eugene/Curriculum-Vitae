const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      menuClose = document.querySelector('.menu-close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
    document.body.style.overflow = 'hidden';
})

menuClose.addEventListener('click', () => {
    menu.classList.remove('active');
    document.body.style.overflow = '';
})
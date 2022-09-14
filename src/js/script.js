//MENU SEDCTION

const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      menuClose = document.querySelector('.menu-close');
      menuList = document.querySelectorAll('.menu-list a');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
    document.body.style.overflow = 'hidden';
})

menuList.forEach(item => {
    item.addEventListener('click', () => {
        menu.classList.remove('active');
        document.body.style.overflow = '';
    })
})

menuClose.addEventListener('click', () => {
    menu.classList.remove('active');
    document.body.style.overflow = '';
})

//PRICE SECTION

const priceBtn = document.querySelectorAll('.price-btn'),
      page = document.querySelector('.page'),
      section = document.querySelector('.section'),
      slider = document.querySelector('.slider'),
      gallery = document.querySelector('.gallery'),
      calc = document.querySelector('.calc'),
      form = document.querySelector('.form'),
      sum = document.querySelector('.sum'),
      totalPrice = document.querySelector('.total-price');

for (let i = 0; i < priceBtn.length; i++) {

    priceBtn[i].addEventListener('click', () => {
        priceBtn.forEach(elem => {
            elem.classList.remove('btn-active');
        });
        priceBtn[i].classList.add('btn-active');
        if (priceBtn[i].classList.contains('btn-active')) {
        }
    })

    sum.addEventListener('click', () => {
        let total = (+ 
            (page.value ) * 5 + 
            (section.value) * 5 +
            (slider.value) * 5 +
            (gallery.value) * 5 +
            (calc.value) * 5 +
            (form.value) * 20)

        if (priceBtn[i].classList.contains('btn-active')) {
            totalPrice.innerHTML = 
            (+priceBtn[i].getAttribute('value')) + (+total) + '$' + 
            '<h2 class="price-title">preliminary cost</h2>';
        } 
    })
}


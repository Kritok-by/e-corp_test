const ourServices = document.querySelector('.our-services');
const team = document.querySelector('.small-team');
const firstCards = ourServices.querySelectorAll('.card');
const teamCards = team.querySelectorAll('.card');
const bg = './img/service-bg-';

firstCards.forEach((i, ix) => {
  i.style.backgroundImage = `url(${bg + ++ix}.png)`;
  const open = i.querySelector('.open');
  const close = i.querySelector('.close');
  const modal = i.querySelector('.card_description');
  open.addEventListener('click', () => {
    modal.classList.add('visible');
  });
  close.addEventListener('click', () => {
    modal.classList.remove('visible');
  });
});

teamCards.forEach((i) => {
  const modal = i.querySelector('.discription');
  i.addEventListener('click', (e) => {
    if (modal.classList.contains('active')) {
      modal.classList.remove('active');
    } else {
      if (team.querySelector('.active')) {
        team.querySelector('.active').classList.remove('active');
      }
      modal.classList.add('active');
    }
  });
});

const swiper = new Swiper('.swiper-about-us', {
  effect: 'flip',
  loop: true,
  grabCursor: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: 'true',
  },
});

const swiperTwo = new Swiper('.swiper-avatars', {
  effect: 'flip',
  loop: true,
  allowTouchMove: false,
  pagination: {
    el: '.they-pagination',
    clickable: 'true',
  },
  navigation: {
    nextEl: '.they-button-next',
    prevEl: '.they-button-prev',
  },
});

const swiperThree = new Swiper('.swiper-about-temmate', {
  effect: 'fade',
  slidesPerView: 1,
  loop: true,
  allowTouchMove: false,
  pagination: {
    el: '.they-pagination',
    clickable: 'true',
  },
  navigation: {
    nextEl: '.they-button-next',
    prevEl: '.they-button-prev',
  },
});

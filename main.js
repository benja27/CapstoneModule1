import createCardProject from './js/speakers.js';

document.addEventListener('DOMContentLoaded', () => {
  createCardProject();
});

document.documentElement.addEventListener('click', (e) => {
  if ((e.target.matches('#see-more'))) {
    const more = document.querySelector('#see-more h3');
    const arrow = document.querySelector('#see-more img');

    const moreStatus = e.srcElement.getAttribute('data-open');

    console.log(arrow);

    if (moreStatus === 'close') {
      more.innerHTML = 'Less';
      e.srcElement.setAttribute('data-open', 'open');
      arrow.style.transform = 'rotate(180deg)';
    } else {
      more.innerHTML = 'More';
      e.srcElement.setAttribute('data-open', 'close');
      arrow.style.transform = 'rotate(0deg)';
    }
  }
});

window.addEventListener('resize', (e) => {
  const currentWidth = window.innerWidth;
  const hiddenSpeakers = document.querySelector('#panelsStayOpen-collapseOne');
  const more = document.querySelector('#see-more');
  const arrow = document.querySelector('#see-more img');

  if (currentWidth > 992) {
    hiddenSpeakers.className += 'show';
  } else {
    more.setAttribute('data-open', 'close');
    more.children[0].textContent = 'More';
    arrow.style.transform = 'rotate(0deg)';
  }
});

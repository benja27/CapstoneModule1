import createCardProject from './js/speakers.js';

document.addEventListener('DOMContentLoaded', () => {
  createCardProject();
});

document.documentElement.addEventListener('click', (e) => {
  if ((e.target.matches('.btn-see-more')) || (e.target.matches('.btn-see-more *'))) {
    const more = document.querySelector('#see-more');
    const arrow = document.querySelector('#see-more img');
    const moreStatus = more.dataset.open;

    if (moreStatus === 'close') {
      more.children[0].textContent = 'Less';
      e.srcElement.setAttribute('data-open', 'open');
      arrow.style.transform = 'rotate(180deg)';
    } else {
      more.children[0].textContent = 'More';
      e.srcElement.setAttribute('data-open', 'close');
      arrow.style.transform = 'rotate(0deg)';
    }
  }
});

window.addEventListener('resize', () => {
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

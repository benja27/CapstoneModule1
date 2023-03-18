const ArraycardsInfo = [
  {
    featuredImage: './assets/speakers/speaker1.jpg',
    name: 'Yochai Benkler',
    description: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    footer: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',

  },
  {
    featuredImage: './assets/speakers/speaker2.jpg',
    name: 'Jeon Gilnam',
    description: 'Professor Emeritus, Korea Advanced Institute of Science and Technology (KAIST)',
    footer: 'He developed SDN, the first Internet protocol network in Asia, and led Koreas first dedicated line Internet connection in 1990, opening the',

  },
  {
    featuredImage: './assets/speakers/speaker2.jpg',
    name: 'Soyoung Roh',
    description: 'Art Center Butterfly Director, CC Korea',
    footer: 'Digital Art He is the author of Art > of Our Time, and in 2000, he opened Art Center Nabi, Koreas first digital art specialized institution, and has been in office ever since.',

  },
  {
    featuredImage: './assets/speakers/speaker2.jpg',
    name: 'Julia Reda',
    description: 'Representative of the Young Pirates of Europe',
    footer: 'European integration and youth participation in politics and democracy through online are key concerns, according to a report that could potentially impact changes to the European',

  },
  {
    featuredImage: './assets/speakers/speaker2.jpg',
    name: 'Laila Tretikov',
    description: 'Wikimedia Foundation Executive Director',
    footer: 'Laila Tretikow is executive director of the Wikimedia Foundation, the nonprofit that runs Wikipedia. Wikipedia is available for free every month in 1 languages to more than 290 million people, nearly half of the worlds population.',

  },
  {
    featuredImage: './assets/speakers/speaker2.jpg',
    name: 'Ryan Merkley',
    description: 'CEO of Creative Commons, former COO of the Mozilla Foundation',
    footer: 'He led open source projects at the Mozilla Foundation and joined CC as CEO in 2014. Open government, open source, and other open movements have been actively carried out.',

  },

];

function createBodyOfAlwaysVisibleCards(index) {
  const cardbody = `
  <div class="col-4 img-spk-cnt position-relative" >
    <img src="${index.featuredImage}" alt="">
  </div>
  <div class="col-8">
    <h3 class="f16 lato700 pt-2" >${index.name}</h3>
    <p class="lato700 f11 cf78c89 pt-1">${index.description}</p>
  <div class="underlined-2 mt-1"></div>
    <p class="lato700 f10 pt-2">${index.footer}</p>
  </div>`;

  return cardbody;
}

function createBodyOfHiddenCards(index) {
  const cardbody = `
  <div class="col-4 img-spk-cnt position-relative" >
    <img class='col-6' src="${index.featuredImage}" alt="">
  </div>
  
  <div class="col-8">
    <h3 class="f16 lato700 pt-2" >${index.name}</h3>
    <p class="lato700 f11 cf78c89 pt-1">${index.description}</p>
    <div class="underlined-2 mt-1"></div>
    <p class="lato700 f10 pt-2">${index.footer}</p>
  </div>`;

  return cardbody;
}

export default function createCardProject() {
  for (let i = 0; i < ArraycardsInfo.length; i += 1) {
    if (i < 2) {
      const div = document.createElement('div');
      div.className = 'content gap-3 d-flex col-12 col-md-6 show';
      div.innerHTML = createBodyOfAlwaysVisibleCards(ArraycardsInfo[i]);
      const container = document.querySelector('.speakers-container');
      container.appendChild(div);
    } else {
      const div = document.createElement('div');
      div.className = 'content gap-3 d-flex col-12 col-md-6';
      div.innerHTML = createBodyOfAlwaysVisibleCards(ArraycardsInfo[i]);
      const container = document.querySelector('#panelsStayOpen-collapseOne');
      container.appendChild(div);
    }

    // const div = document.createElement('article');
    // div.className = 'work';
    // div.innerHTML = createBodyOfAlwaysVisibleCards(ArraycardsInfo[i]);
    // const contenedor = document.querySelector('.works-container');
    // contenedor.appendChild(div);
  }
}
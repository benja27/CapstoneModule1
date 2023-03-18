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
    featuredImage: 'data:image/jpeg;base64,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',
    name: 'Soyoung Roh',
    description: 'Art Center Butterfly Director, CC Korea',
    footer: 'Digital Art He is the author of Art > of Our Time, and in 2000, he opened Art Center Nabi, Koreas first digital art specialized institution, and has been in office ever since.',

  },
  {
    featuredImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLFdSBsMUIUqR8jn2eMimz3UFzQfXa2FarUg&usqp=CAU',
    name: 'Julia Reda',
    description: 'Representative of the Young Pirates of Europe',
    footer: 'European integration and youth participation in politics and democracy through online are key concerns, according to a report that could potentially impact changes to the European',

  },
  {
    featuredImage: 'https://pyxis.nymag.com/v1/imgs/ff2/8a4/f06f4277e27f5bf13ef24154495c5744ab-05-hacker-feature-lede.2x.h600.w512.jpg',
    name: 'Laila Tretikov',
    description: 'Wikimedia Foundation Executive Director',
    footer: 'Laila Tretikow is executive director of the Wikimedia Foundation, the nonprofit that runs Wikipedia. Wikipedia is available for free every month in 1 languages to more than 290 million people, nearly half of the worlds population.',

  },
  {
    featuredImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOXCVpE4Zg6GPbRpuKQ9ItN1KhdKzJsxMqzYBLFVt3BRSLLhaMrBoeLpu24wTvc18q8bk&usqp=CAU',
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

export default function createCardProject() {
  for (let i = 0; i < ArraycardsInfo.length; i += 1) {
    if (i < 2) {
      const div = document.createElement('div');
      div.className = 'content gap-3 d-flex col-12 col-md-6 show';
      div.innerHTML = createBodyOfAlwaysVisibleCards(ArraycardsInfo[i]);
      const container = document.querySelector('.speakers-container');
      container.prepend(div);
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
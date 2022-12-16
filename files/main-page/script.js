const burgerCross = document.getElementsByClassName('burger__cross')[0],
  html = document.getElementsByTagName('html')[0],
  burgerMenu = document.getElementsByClassName('burger__menu')[0];
burgerCross.onclick = ((el) => {
  burgerCross.classList.toggle('active');
  burgerMenu.classList.toggle('active');
  html.classList.toggle('noscroll');
});

const categoryTriangleNew = document.getElementsByClassName('category__triangle-new')[0],
  navigationListNew = document.getElementsByClassName('navigation-list-new')[0];
categoryTriangleNew.onclick = viewCategoryNew;
function viewCategoryNew() {
  navigationListNew.classList.toggle('navigation-list-new__active');
  categoryTriangleNew.classList.toggle('categoryActiveTriangleNew');
}

const categoryTriangleMenu = document.getElementsByClassName('category__triangle-menu')[0],
  navigationListMenu = document.getElementsByClassName('navigation-list-menu')[0];
categoryTriangleMenu.onclick = viewCategoryMenu;
function viewCategoryMenu() {
  navigationListMenu.classList.toggle('navigation-list-menu__active');
  categoryTriangleMenu.classList.toggle('categoryActiveTriangleMenu');
}

const numberOfPosition = document.getElementsByClassName('number-of-position')[0];
numberOfPosition.innerHTML = localStorage.length;

//Ассортимент
let i = 614.5,
  j = 1,
  a = 1229.5;
const menuArrow = document.getElementsByClassName('menu-arrow')[0],
  menuPosition = document.getElementsByClassName('menu-position')[0],
  menuPositionLast = document.getElementsByClassName('menu-position-last')[0],
  cardMenu = document.getElementsByClassName('menu-card')[0],
  firstPage = document.getElementsByClassName('menu-page-first')[0],
  secondPage = document.getElementsByClassName('menu-page-second')[0],
  menuArrowNext = document.getElementsByClassName('menu-arrow-next')[0],
  menuArrowBack = document.getElementsByClassName('menu-arrow-back')[0],
  thirdPage = document.getElementsByClassName('menu-page-third')[0];
menuArrowNext.onclick = scrollMenuNextOnArrow;
menuArrowBack.onclick = scrollMenuBackOnArrow;
menuArrow.onclick = scrolOnArrowNext;
secondPage.onclick = scrollToSecondPage;
thirdPage.onclick = scrollToThirdPage;
firstPage.onclick = scrollToFirstPage;
menuArrowBack.setAttribute('disabled', 'disabled');
menuArrowBack.classList.add('disabled-menu-arrow');
function scrollMenuNextOnArrow() {
  cardMenu.style.right = 0 + i + 'px';
  i += 615;
  ++j;
  menuPosition.innerHTML = j;

  if (j == 6) {
    menuArrowNext.setAttribute('disabled', 'disabled');
    menuArrowNext.classList.add('disabled-menu-arrow');
  }
  if (j > 1) {
    menuArrowBack.removeAttribute('disabled', 'disabled');
    menuArrowBack.classList.remove('disabled-menu-arrow');
  }

}
function scrollMenuBackOnArrow() {
  cardMenu.style.right = i - a + 'px';
  --j;
  menuPosition.innerHTML = j;
  i -= 615;
  if (j < 6) {
    menuArrowNext.removeAttribute('disabled', 'disabled');
    menuArrowNext.classList.remove('disabled-menu-arrow');
  }
  if (j == 1) {
    menuArrowBack.setAttribute('disabled', 'disabled');
    menuArrowBack.classList.add('disabled-menu-arrow');
  }
}
function scrollToSecondPage(el) {
  if (firstPage.classList.contains('active')) {
    cardMenu.classList.toggle('active-menu');
    secondPage.classList.add('active');
    firstPage.classList.remove('active');
    if (window.getComputedStyle(thirdPage).display == 'none') {
      menuArrow.setAttribute('disabled', 'disabled');
      menuArrow.classList.add('disabled-menu-arrow');
    }
  } else if (thirdPage.classList.contains('active')) {
    cardMenu.classList.remove('active-menu-third');
    secondPage.classList.add('active');
    thirdPage.classList.remove('active');
    menuArrow.removeAttribute('disabled');
    menuArrow.classList.remove('disabled-menu-arrow');
  }
}
function scrollToThirdPage(el) {
  if (secondPage.classList.contains('active')) {
    cardMenu.classList.toggle('active-menu-third');
    thirdPage.classList.add('active');
    secondPage.classList.remove('active');
    menuArrow.setAttribute('disabled', 'disabled');
    menuArrow.classList.add('disabled-menu-arrow');
  }
}
function scrollToFirstPage(el) {
  if (secondPage.classList.contains('active')) {
    cardMenu.classList.remove('active-menu');
    firstPage.classList.add('active');
    secondPage.classList.remove('active');
  }
  if (window.getComputedStyle(thirdPage).display == 'none') {
    menuArrow.removeAttribute('disabled');
    menuArrow.classList.remove('disabled-menu-arrow');
  }
}
function scrolOnArrowNext(el) {
  if (firstPage.classList.contains('active')) {
    scrollToSecondPage();
  } else if (secondPage.classList.contains('active')) {
    scrollToThirdPage();
    menuArrow.setAttribute('disabled', 'disabled');
    menuArrow.classList.add('disabled-menu-arrow');
  }
}
//Отзывы
let b = 602,
  d = 1,
  c = 1204;
const reviewsArrow = document.getElementsByClassName('reviews-arrow')[0],
  reviewsCard = document.getElementsByClassName('reviews-card')[0],
  reviewsPosition = document.getElementsByClassName('reviews-position')[0],
  reviewsFirstPage = document.getElementsByClassName('reviews-first-page')[0],
  reviewsSecondPage = document.getElementsByClassName('reviews-second-page')[0],
  reviewsThirdPage = document.getElementsByClassName('reviews-third-page')[0],
  reviewsFourthPage = document.getElementsByClassName('reviews-fourth-page')[0],
  reviewsFifthPage = document.getElementsByClassName('reviews-fifth-page')[0],
  reviewsSixthPage = document.getElementsByClassName('reviews-sixth-page')[0],
  reviewsArrowBack = document.getElementsByClassName('reviews-arrow-back')[0],
  reviewsArrowNext = document.getElementsByClassName('reviews-arrow-next')[0];
reviewsArrow.onclick = scrolOnArrowNextReviews;
reviewsSecondPage.onclick = scrollToSecondPageReviews;
reviewsThirdPage.onclick = scrollToThirdPageReviews;
reviewsFourthPage.onclick = scrollToFourthPageReviews;
reviewsFirstPage.onclick = scrollBack;
reviewsArrowBack.onclick = scrollOnArrowBackReviews;
reviewsArrowNext.onclick = scrollOnArrowNextReviews;
reviewsArrowBack.setAttribute('disabled', 'disabled');
reviewsArrowBack.classList.add('disabled-menu-arrow');
function scrollOnArrowBackReviews() {
  reviewsCard.style.right = b - c + 'px';
  --d;
  reviewsPosition.innerHTML = d;
  b -= 602;
  if (d < 12) {
    reviewsArrowNext.removeAttribute('disabled', 'disabled');
    reviewsArrowNext.classList.remove('disabled-menu-arrow');
  }
  if (d == 1) {
    reviewsArrowBack.setAttribute('disabled', 'disabled');
    reviewsArrowBack.classList.add('disabled-menu-arrow');
  }
}

function scrollOnArrowNextReviews() {
  reviewsCard.style.right = 0 + b + 'px';
  b += 602;
  ++d;
  reviewsPosition.innerHTML = d;

  if (d == 12) {
    reviewsArrowNext.setAttribute('disabled', 'disabled');
    reviewsArrowNext.classList.add('disabled-menu-arrow');
  }
  if (d > 1) {
    reviewsArrowBack.removeAttribute('disabled', 'disabled');
    reviewsArrowBack.classList.remove('disabled-menu-arrow');
  }

}

function scrollToSecondPageReviews(el) {
  if (reviewsFirstPage.classList.contains('active')) {
    reviewsCard.classList.toggle('active-reviews-second');
    reviewsSecondPage.classList.add('active');
    reviewsFirstPage.classList.remove('active');
  } else if (reviewsThirdPage.classList.contains('active')) {
    reviewsCard.classList.remove('active-reviews-third');
    reviewsSecondPage.classList.add('active');
    reviewsThirdPage.classList.remove('active');
  }
}
function scrollToThirdPageReviews(el) {
  if (reviewsSecondPage.classList.contains('active')) {
    reviewsCard.classList.toggle('active-reviews-third');
    reviewsThirdPage.classList.add('active');
    reviewsSecondPage.classList.remove('active');
  } else if (reviewsFourthPage.classList.contains('active')) {
    reviewsCard.classList.remove('active-reviews-fourth');
    reviewsThirdPage.classList.add('active');
    reviewsFourthPage.classList.remove('active');
    reviewsArrow.removeAttribute('disabled');
    reviewsArrow.classList.remove('disabled-menu-arrow');
  }
}
function scrollToFourthPageReviews(el) {
  if (reviewsThirdPage.classList.contains('active')) {
    reviewsCard.classList.toggle('active-reviews-fourth');
    reviewsFourthPage.classList.add('active');
    reviewsThirdPage.classList.remove('active');
  } else if (reviewsFifthPage.classList.contains('active')) {
    reviewsCard.classList.remove('active-reviews-fifth');
    reviewsFourthPage.classList.add('active');
    reviewsFifthPage.classList.remove('active');
  }
  if (window.getComputedStyle(reviewsFifthPage).display == 'none') {
    reviewsArrow.setAttribute('disabled', 'disabled');
    reviewsArrow.classList.add('disabled-menu-arrow');
  } else {
    reviewsArrow.removeAttribute('disabled');
    reviewsArrow.classList.remove('disabled-menu-arrow');
  }
}
function scrollBack(el) {
  if (reviewsSecondPage.classList.contains('active')) {
    reviewsCard.classList.remove('active-reviews-second');
    reviewsFirstPage.classList.add('active');
    reviewsSecondPage.classList.remove('active');
  }
}
function scrolOnArrowNextReviews(el) {
  if (reviewsFirstPage.classList.contains('active')) {
    scrollToSecondPageReviews();
  } else if (reviewsSecondPage.classList.contains('active')) {
    scrollToThirdPageReviews();
  } else if (reviewsThirdPage.classList.contains('active')) {
    scrollToFourthPageReviews();
  } else if (window.getComputedStyle(reviewsFifthPage).display == 'block' &&
    reviewsFourthPage.classList.contains('active')) {
    scrollToFifthPageReviews();
  } else if (reviewsFifthPage.classList.contains('active')) {
    scrollToSixthPageReviews();
    reviewsArrow.setAttribute('disabled', 'disabled');
    reviewsArrow.classList.add('disabled-menu-arrow');
  }
}
if (window.getComputedStyle(reviewsFifthPage).display == 'block') {
  reviewsFifthPage.onclick = scrollToFifthPageReviews;
  reviewsSixthPage.onclick = scrollToSixthPageReviews;
}
function scrollToFifthPageReviews() {
  if (reviewsFourthPage.classList.contains('active')) {
    reviewsCard.classList.toggle('active-reviews-fifth');
    reviewsFifthPage.classList.add('active');
    reviewsFourthPage.classList.remove('active');
  } else if (reviewsSixthPage.classList.contains('active')) {
    reviewsCard.classList.remove('active-reviews-sixth');
    reviewsFifthPage.classList.add('active');
    reviewsSixthPage.classList.remove('active');
    reviewsArrow.removeAttribute('disabled');
    reviewsArrow.classList.remove('disabled-menu-arrow');
  }
}
function scrollToSixthPageReviews() {
  if (reviewsFifthPage.classList.contains('active')) {
    reviewsCard.classList.toggle('active-reviews-sixth');
    reviewsSixthPage.classList.add('active');
    reviewsFifthPage.classList.remove('active');
    reviewsArrow.setAttribute('disabled', 'disabled');
    reviewsArrow.classList.add('disabled-menu-arrow');
  }
}
//новинки добавление товаров
const bodyItem = document.querySelectorAll('.d-flex-new');
bodyItem.forEach(item => {
  const plus = item.querySelector('.plus'),
    amount = item.querySelector('.amount'),
    units = item.querySelector('.units'),
    basketForDesktop = item.querySelector('.basket-desktop'),
    value = item.querySelector('.news__price__text'),
    title = item.querySelector('h2'),
    img = item.querySelector('.image'),
    minus = item.querySelector('.minus');
  minus.setAttribute("disabled", "disabled");
  plus.addEventListener('click', () => {
    ++amount.value;
    if (+amount.value > 1) {
      minus.removeAttribute("disabled");
    }
  });
  minus.addEventListener('click', () => {
    --amount.value;
    if (+amount.value == 1) {
      minus.setAttribute("disabled", "disabled");
    }
  });
  basketForDesktop.addEventListener('click', (e) => {
    e.preventDefault();
    localStorage.setItem(title.innerHTML, JSON.stringify([amount.value, units.innerHTML,
      value.innerHTML, img.innerHTML]));
    numberOfPosition.style.display = 'flex';
    amount.value = 1;
  });
});
//слайдер интро
const sliderImages = document.querySelectorAll('.about__image'),

  mainImage = document.getElementsByClassName('about__image-one')[0];
sliderImages.forEach(item => {
  const arrowSliderNext = item.querySelector('.arrow-next'),
    arrowSliderBack = item.querySelector('.arrow-back'),
    firstImage = item.querySelector('.img1'),
    secondImage = item.querySelector('.img2'),
    thirdImage = item.querySelector('.img3'),
    fourthImage = item.querySelector('.img4'),
    adaptateArrowNext = item.querySelector('.adaptate-arrow-next'),
    adaptateArrowBack = item.querySelector('.adaptate-arrow-back'),
    slidePosition = item.querySelector('.scroll-buttons__position-first'),
    fifthImage = item.querySelector('.img5');

  arrowSliderNext.addEventListener('click', scrollToNextImage);
  adaptateArrowNext.addEventListener('click', scrollToNextImage);
  function scrollToNextImage() {
    if (firstImage.classList.contains('active-image')) {
      mainImage.innerHTML = '<img  src="/images/sliderImages/4.png" width="590" height="425" alt="">';
      secondImage.classList.add('active-image');
      firstImage.classList.remove('active-image');
      adaptateArrowBack.removeAttribute('disabled');
      adaptateArrowBack.classList.remove('disabled-menu-arrow');
      arrowSliderBack.removeAttribute('disabled');
      arrowSliderBack.classList.remove('disabled-menu-arrow');
      slidePosition.innerHTML = 2;
    } else if (secondImage.classList.contains('active-image')) {
      mainImage.innerHTML = '<img  src="/images/sliderImages/1.jpg" width="590" height="425" alt="">';
      thirdImage.classList.add('active-image');
      secondImage.classList.remove('active-image');
      slidePosition.innerHTML = 3;
    } else if (thirdImage.classList.contains('active-image')) {
      mainImage.innerHTML = '<img  src="/images/sliderImages/2.jpg" width="590" height="425" alt="">';
      fourthImage.classList.add('active-image');
      thirdImage.classList.remove('active-image');
      slidePosition.innerHTML = 4;
    } else if (fourthImage.classList.contains('active-image')) {
      mainImage.innerHTML = '<img  src="/images/sliderImages/3.jpg" width="590" height="425" alt="">';
      fifthImage.classList.add('active-image');
      fourthImage.classList.remove('active-image');
      arrowSliderNext.setAttribute('disabled', 'disabled');
      arrowSliderNext.classList.add('disabled-menu-arrow');
      adaptateArrowNext.setAttribute('disabled', 'disabled');
      adaptateArrowNext.classList.add('disabled-menu-arrow');
      slidePosition.innerHTML = 5;
    }
  }
  arrowSliderBack.addEventListener('click', scrollTopreviousImage);
  adaptateArrowBack.addEventListener('click', scrollTopreviousImage);
  function scrollTopreviousImage() {
    if (secondImage.classList.contains('active-image')) {
      mainImage.innerHTML = '<img  src="/images/sliderImages/5.png" width="590" height="425" alt="">';
      firstImage.classList.add('active-image');
      secondImage.classList.remove('active-image');
      adaptateArrowBack.setAttribute('disabled', 'disabled');
      adaptateArrowBack.classList.add('disabled-menu-arrow');
      arrowSliderBack.setAttribute('disabled', 'disabled');
      arrowSliderBack.classList.add('disabled-menu-arrow');
      slidePosition.innerHTML = 1;
    } else if (thirdImage.classList.contains('active-image')) {
      mainImage.innerHTML = '<img  src="/images/sliderImages/4.png" width="590" height="425" alt="">';
      secondImage.classList.add('active-image');
      thirdImage.classList.remove('active-image');
      slidePosition.innerHTML = 2;
    } else if (fourthImage.classList.contains('active-image')) {
      mainImage.innerHTML = '<img  src="/images/sliderImages/1.jpg" width="590" height="425" alt="">';
      thirdImage.classList.add('active-image');
      fourthImage.classList.remove('active-image');
      slidePosition.innerHTML = 3;
    } else if (fifthImage.classList.contains('active-image')) {
      mainImage.innerHTML = '<img  src="/images/sliderImages/2.jpg" width="590" height="425" alt="">';
      fifthImage.classList.remove('active-image');
      fourthImage.classList.add('active-image');
      adaptateArrowNext.removeAttribute('disabled');
      adaptateArrowNext.classList.remove('disabled-menu-arrow');
      arrowSliderNext.removeAttribute('disabled');
      arrowSliderNext.classList.remove('disabled-menu-arrow');
      slidePosition.innerHTML = 4;
    }
  }
});

// заказать звонок
const formElem = document.getElementsByTagName('form')[0];
formElem.onsubmit = async (e) => {
  e.preventDefault();

  let response = await fetch('https://reqres.in/users', {
    method: 'POST',
    body: new FormData(formElem)
  });

};

// новинки
const chocolateBlock = document.getElementsByClassName('chocolate-card')[0],
  newBlock = document.getElementsByClassName('d-flex-new')[0],
  tartletsBlock = document.getElementsByClassName('tartlets-card')[0],
  eclairsBlock = document.getElementsByClassName('eclairs-card')[0];
chocolateBlock.onclick = viewChocolateBlock;
eclairsBlock.onclick = viewEclairsBlock;
tartletsBlock.onclick = viewTartletsBlock;
function viewTartletsBlock() {
  location.reload();
}
function viewChocolateBlock(event) {
  event.preventDefault();
  if (tartletsBlock.classList.contains('active-card')) {
    tartletsBlock.classList.remove('active-card');
    chocolateBlock.classList.add('active-card');
  } else if (eclairsBlock.classList.contains('active-card')) {
    eclairsBlock.classList.remove('active-card');
    chocolateBlock.classList.add('active-card');
  }
  newBlock.innerHTML = `<div class="d-flex-new justify-content-around">
  <div data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1000" class="news__image">
    <div class="news__image-one">
      <h2 class="news__subtitle">Имбирь в шоколаде</h2>
      <div class="image-container">
        <img src="/images/DSC_4380 2.png" alt="" class="news-main-image" width="420" height="523">
      </div>
    </div>
    <div class="news__image-two">
      <div class="news__image__slider">
        <img src="/images/DSC_5333.png" alt="" class="news__image-item news-img1" width="86" height="86" />
        <button class="arrow left-arrow__news" id="show-next-btn">
          <img class="arrow-back news-arrow-back" src="/images/стрелка назад.png">
        </button>
        <div class = "image">
        <img src="/images/DSC_4380 2.png" alt="" width="135" height="162" class="news__image-item-item 
        news-img2 news-active-img" />
        </div>
        <button class="arrow right-arrow__news" id="show-prev-btn">
          <img class="arrow-next news-arrow-next" src="/images/стрелка.png">
        </button>
        <img src="/images/news2.png" alt="" class="news__image-item news-img3" />
      </div>
    </div>
  </div>
  <div data-aos="fade-left" data-aos-easing="linear" data-aos-duration="1000" class="news__content">
    <h2 class="news__subtitle">Имбирь в шоколаде</h2>
    <p class="news__subtext">Цена <span class="units">(1 шт.)</span></p>
    <div class="news__price">
      <div class="news__price-content">
        <p class="news__price__text">5</p>
        <span>BYN</span>
      </div>
      <div class="news__counter">
        <button class="news__counter__btn minus" >-</button>
        <input readonly type="text" value="1" class="news__counter__value amount" />
        <button class="news__counter__btn plus">+</button>
      </div>
      <div class="news__price-img">
        <img src="/images/news__box.png" class="basket-desktop" alt="news__box" />
      </div>
    </div>
    <h2 class="news-content__title">Описание</h2>
    <p class="news-content__text">
      Изделие из песочного теста с начинкой из лимонного заварного
      крема.
    </p>
    <h2 class="news-content__title">Состав:</h2>
    <p class="news-content__text">
      Крем лимонный, лимонный сок, мука пшеничная, мука миндальная,
      масло сливочное 82%, сахарная пудра, вода питьевая.
    </p>
    <div class="btn-body btn-news">
      <div class="technical technical-news"></div>
      <a href="/catalog-tartlets/catalog-tartlets.html" id="reviews">Купить</a>
    </div>
  </div>
  </div>`;
  bodyItem.forEach(item => {
    const plus = item.querySelector('.plus'),
      amount = item.querySelector('.amount'),
      units = item.querySelector('.units'),
      basketForDesktop = item.querySelector('.basket-desktop'),
      value = item.querySelector('.news__price__text'),
      title = item.querySelector('h2'),
      img = item.querySelector('.image'),
      minus = item.querySelector('.minus');
    minus.setAttribute("disabled", "disabled");
    plus.addEventListener('click', () => {
      ++amount.value;
      if (+amount.value > 1) {
        minus.removeAttribute("disabled");
      }
    });
    minus.addEventListener('click', () => {
      --amount.value;
      if (+amount.value == 1) {
        minus.setAttribute("disabled", "disabled");
      }
    });
    basketForDesktop.addEventListener('click', (e) => {
      e.preventDefault();
      localStorage.setItem(title.innerHTML, JSON.stringify([amount.value, units.innerHTML,
        value.innerHTML, img.innerHTML]));
      numberOfPosition.style.display = 'flex';
      amount.value = 1;
    });
  });
  const sliderImagesNew = document.querySelectorAll('.news__image__slider'),
    mainImageNew = document.getElementsByClassName('image-container')[0];
  sliderImagesNew.forEach(item => {
    const arrowSliderNewNext = item.querySelector('.news-arrow-next'),
      arrowSliderNewBack = item.querySelector('.news-arrow-back'),
      firstImage = item.querySelector('.news-img1'),
      secondImage = item.querySelector('.news-img2'),
      thirdImage = item.querySelector('.news-img3'),
      itemTitleAdaptate = document.getElementsByClassName('news__subtitle')[0],
      itemTitle = document.getElementsByClassName('news__subtitle')[1],
    itemPrice = document.getElementsByClassName('news__price__text')[0],
    itemContent = document.getElementsByClassName('news-content__text')[0],
    itemCompound = document.getElementsByClassName('news-content__text')[1];
    arrowSliderNewNext.addEventListener('click', () => {
      if (secondImage.classList.contains('news-active-img')) {
        mainImageNew.innerHTML = '<img src="/images/DSC_4849 1.png" alt="" width="420" height="523"/>';
        thirdImage.classList.add('news-active-img');
        secondImage.classList.remove('news-active-img');
        arrowSliderNewNext.setAttribute('disabled', 'disabled');
        arrowSliderNewNext.classList.add('disabled-menu-arrow');
        itemTitleAdaptate.innerHTML = `Марципан в шоколаде`;
        itemTitle.innerHTML = `Марципан в шоколаде`;
        itemPrice.innerHTML = `15`;
        itemContent.innerHTML = `Изделие из песочного теста с начинкой из лимонного заварного
      крема.`;
        itemCompound.innerHTML = ` Крем лимонный, лимонный сок, мука пшеничная, мука миндальная,
      масло сливочное 82%, сахарная пудра, вода питьевая.`;
      } else if (firstImage.classList.contains('news-active-img')) {
        mainImageNew.innerHTML = '<img src="/images/DSC_4380 2.png" alt="" width="420" height="523"/>';
        secondImage.classList.add('news-active-img');
        firstImage.classList.remove('news-active-img');
        arrowSliderNewBack.removeAttribute('disabled');
        arrowSliderNewBack.classList.remove('disabled-menu-arrow');
        itemTitleAdaptate.innerHTML = `Имбирь в шоколаде`;
        itemTitle.innerHTML = `Имбирь в шоколаде`;
        itemPrice.innerHTML = `15`;
        itemContent.innerHTML = `Изделие из песочного теста с начинкой из лимонного заварного
      крема.`;
        itemCompound.innerHTML = ` Крем лимонный, лимонный сок, мука пшеничная, мука миндальная,
      масло сливочное 82%, сахарная пудра, вода питьевая.`;
      }
    });
    arrowSliderNewBack.addEventListener('click', () => {
      if (thirdImage.classList.contains('news-active-img')) {
        mainImageNew.innerHTML = '<img src="/images/DSC_4380 2.png" alt="" width="420" height="523"/>';
        secondImage.classList.add('news-active-img');
        thirdImage.classList.remove('news-active-img');
        arrowSliderNewNext.removeAttribute('disabled');
        arrowSliderNewNext.classList.remove('disabled-menu-arrow');
        itemTitleAdaptate.innerHTML = `Имбирь в шоколаде`;
        itemTitle.innerHTML = `Имбирь в шоколаде`;
        itemPrice.innerHTML = `15`;
        itemContent.innerHTML = `Изделие из песочного теста с начинкой из лимонного заварного
      крема.`;
        itemCompound.innerHTML = ` Крем лимонный, лимонный сок, мука пшеничная, мука миндальная,
      масло сливочное 82%, сахарная пудра, вода питьевая.`;
      } else if (secondImage.classList.contains('news-active-img')) {
        mainImageNew.innerHTML = '<img src="/images/DSC_5333.png" alt="" width="420" height="523"/>';
        secondImage.classList.remove('news-active-img');
        firstImage.classList.add('news-active-img');
        arrowSliderNewBack.setAttribute('disabled', 'disabled');
        arrowSliderNewBack.classList.add('disabled-menu-arrow');
        itemTitleAdaptate.innerHTML = `Инжир в шоколаде`;
        itemTitle.innerHTML = `Инжир в шоколаде`;
        itemPrice.innerHTML = `15`;
        itemContent.innerHTML = `Изделие из песочного теста с начинкой из лимонного заварного
      крема.`;
        itemCompound.innerHTML = ` Крем лимонный, лимонный сок, мука пшеничная, мука миндальная,
      масло сливочное 82%, сахарная пудра, вода питьевая.`;
      }
    });
  });
}
function viewEclairsBlock(event) {
    event.preventDefault();
  if (tartletsBlock.classList.contains('active-card')) {
    tartletsBlock.classList.remove('active-card');
    eclairsBlock.classList.add('active-card');
  } else if (chocolateBlock.classList.contains('active-card')) {
    chocolateBlock.classList.remove('active-card');
    eclairsBlock.classList.add('active-card');
  }
  newBlock.innerHTML = `<div class="d-flex-new justify-content-around">
  <div data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1000" class="news__image">
    <div class="news__image-one">
      <h2 class="news__subtitle">Эклер шоколад</h2>
      <div class="image-container">
        <img src="/images/DSC_4849 1.png" alt="" class="news-main-image" width="420" height="523">
      </div>
    </div>
    <div class="news__image-two">
      <div class="news__image__slider">
        <img src="/images/DSC_4380 2.png" alt="" width="86" height="86" class="news__image-item news-img3"/>
        <button class="arrow left-arrow__news" id="show-next-btn">
          <img class="arrow-back news-arrow-back" src="/images/стрелка назад.png">
        </button>
        <div class = "image">
        <img  src="/images/news2.png" width="135" height="162"  alt="" class="news__image-item-item news-img2 
        news-active-img"/>
        </div>
        <button class="arrow right-arrow__news" id="show-prev-btn">
          <img class="arrow-next news-arrow-next" src="/images/стрелка.png">
        </button>
        <img src="/images/DSC_5333.png" alt="" class="news__image-item news-img1" width="86" height="86"/>
      </div>
    </div>
  </div>
  <div data-aos="fade-left" data-aos-easing="linear" data-aos-duration="1000" class="news__content">
    <h2 class="news__subtitle">Эклер шоколад</h2>
    <p class="news__subtext">Цена <span class="units">(1 шт.)</span></p>
    <div class="news__price">
      <div class="news__price-content">
        <p class="news__price__text">5</p>
        <span>BYN</span>
      </div>
      <div class="news__counter">
        <button class="news__counter__btn minus">-</button>
        <input readonly type="text" value="1" class="news__counter__value amount" />
        <button class="news__counter__btn plus" >+</button>
      </div>
      <div class="news__price-img">
        <img src="/images/news__box.png" class="basket-desktop" alt="news__box" />
      </div>
    </div>
    <h2 class="news-content__title">Описание</h2>
    <p class="news-content__text">
      Изделие из песочного теста с начинкой из лимонного заварного
      крема.
    </p>
    <h2 class="news-content__title">Состав:</h2>
    <p class="news-content__text">
      Крем лимонный, лимонный сок, мука пшеничная, мука миндальная,
      масло сливочное 82%, сахарная пудра, вода питьевая.
    </p>
    <div class="btn-body btn-news">
      <div class="technical technical-news"></div>
      <a href="/catalog-tartlets/catalog-tartlets.html" id="reviews">Купить</a>
    </div>
  </div>
  </div>`;
  bodyItem.forEach(item => {
    const plus = item.querySelector('.plus'),
      amount = item.querySelector('.amount'),
      units = item.querySelector('.units'),
      basketForDesktop = item.querySelector('.basket-desktop'),
      value = item.querySelector('.news__price__text'),
      title = item.querySelector('h2'),
      img = item.querySelector('.image'),
      minus = item.querySelector('.minus');
    minus.setAttribute("disabled", "disabled");
    plus.addEventListener('click', () => {
      ++amount.value;
      if (+amount.value > 1) {
        minus.removeAttribute("disabled");
      }
    });
    minus.addEventListener('click', () => {
      --amount.value;
      if (+amount.value == 1) {
        minus.setAttribute("disabled", "disabled");
      }
    });
    basketForDesktop.addEventListener('click', (e) => {
      e.preventDefault();
      localStorage.setItem(title.innerHTML, JSON.stringify([amount.value, units.innerHTML,
        value.innerHTML, img.innerHTML]));
      numberOfPosition.style.display = 'flex';
      amount.value = 1;
    });
  });
  const sliderImagesNew = document.querySelectorAll('.news__image__slider'),
    mainImageNew = document.getElementsByClassName('image-container')[0];
  sliderImagesNew.forEach(item => {
    const arrowSliderNewNext = item.querySelector('.news-arrow-next'),
      arrowSliderNewBack = item.querySelector('.news-arrow-back'),
      firstImage = item.querySelector('.news-img3'),
      secondImage = item.querySelector('.news-img2'),
      itemTitleAdaptate = document.getElementsByClassName('news__subtitle')[0],
    itemTitle = document.getElementsByClassName('news__subtitle')[1],
    itemPrice = document.getElementsByClassName('news__price__text')[0],
    itemContent = document.getElementsByClassName('news-content__text')[0],
    itemCompound = document.getElementsByClassName('news-content__text')[1],
      thirdImage = item.querySelector('.news-img1');
    arrowSliderNewNext.addEventListener('click', () => {
      if (secondImage.classList.contains('news-active-img')) {
        mainImageNew.innerHTML = '<img src="/images/DSC_5333.png" alt="" width="420" height="523"/>';
        thirdImage.classList.add('news-active-img');
        secondImage.classList.remove('news-active-img');
        arrowSliderNewNext.setAttribute('disabled', 'disabled');
        arrowSliderNewNext.classList.add('disabled-menu-arrow');
        itemTitleAdaptate.innerHTML = `Эклер лимон`;
        itemTitle.innerHTML = `Эклер лимон`;
        itemPrice.innerHTML = `15`;
        itemContent.innerHTML = `Изделие из песочного теста с начинкой из лимонного заварного
      крема.`;
        itemCompound.innerHTML = ` Крем лимонный, лимонный сок, мука пшеничная, мука миндальная,
      масло сливочное 82%, сахарная пудра, вода питьевая.`;
      } else if (firstImage.classList.contains('news-active-img')) {
        mainImageNew.innerHTML = '<img src="/images/DSC_4849 1.png" alt="" width="420" height="523"/>';
        secondImage.classList.add('news-active-img');
        firstImage.classList.remove('news-active-img');
        arrowSliderNewBack.removeAttribute('disabled');
        arrowSliderNewBack.classList.remove('disabled-menu-arrow');
        itemTitleAdaptate.innerHTML = `Эклер шоколад`;
        itemTitle.innerHTML = `Эклер шоколад`;
        itemPrice.innerHTML = `5`;
        itemContent.innerHTML = `Изделие из песочного теста с начинкой из лимонного заварного
      крема.`;
        itemCompound.innerHTML = ` Крем лимонный, лимонный сок, мука пшеничная, мука миндальная,
      масло сливочное 82%, сахарная пудра, вода питьевая.`;
      }
    });
    arrowSliderNewBack.addEventListener('click', () => {
      if (thirdImage.classList.contains('news-active-img')) {
        mainImageNew.innerHTML = '<img src="/images/DSC_4849 1.png" alt="" width="420" height="523"/>';
        secondImage.classList.add('news-active-img');
        thirdImage.classList.remove('news-active-img');
        arrowSliderNewNext.removeAttribute('disabled');
        arrowSliderNewNext.classList.remove('disabled-menu-arrow');
        itemTitleAdaptate.innerHTML = `Эклер шоколад`;
        itemTitle.innerHTML = `Эклер шоколад`;
        itemPrice.innerHTML = `5`;
        itemContent.innerHTML = `Изделие из песочного теста с начинкой из лимонного заварного
      крема.`;
        itemCompound.innerHTML = ` Крем лимонный, лимонный сок, мука пшеничная, мука миндальная,
      масло сливочное 82%, сахарная пудра, вода питьевая.`;
      } else if (secondImage.classList.contains('news-active-img')) {
        mainImageNew.innerHTML = '<img src="/images/DSC_4380 2.png" alt="" width="420" height="523"/>';
        secondImage.classList.remove('news-active-img');
        firstImage.classList.add('news-active-img');
        arrowSliderNewBack.setAttribute('disabled', 'disabled');
        arrowSliderNewBack.classList.add('disabled-menu-arrow');
        itemTitleAdaptate.innerHTML = `Тарталетка лимон`;
        itemTitleAdaptate.innerHTML = `Эклер мараккуйя`;
        itemTitle.innerHTML = `Эклер мараккуйя`;
        itemPrice.innerHTML = `5`;
        itemContent.innerHTML = `Изделие из песочного теста с начинкой из лимонного заварного
      крема.`;
        itemCompound.innerHTML = ` Крем лимонный, лимонный сок, мука пшеничная, мука миндальная,
      масло сливочное 82%, сахарная пудра, вода питьевая.`;
      }
    });
  });
}
const sliderImagesNew = document.querySelectorAll('.news__image__slider'),
  itemTitleAdaptate = document.getElementsByClassName('news__subtitle')[0],
  itemTitle = document.getElementsByClassName('news__subtitle')[1],
  itemPrice = document.getElementsByClassName('news__price__text')[0],
  itemContent = document.getElementsByClassName('news-content__text')[0],
  itemCompound = document.getElementsByClassName('news-content__text')[1],
  mainImageNew = document.getElementsByClassName('image-container')[0];
sliderImagesNew.forEach(item => {
  const arrowSliderNewNext = item.querySelector('.news-arrow-next'),
    arrowSliderNewBack = item.querySelector('.news-arrow-back'),
    firstImage = item.querySelector('.news-img1'),
    secondImage = item.querySelector('.news-img2'),
    thirdImage = item.querySelector('.news-img3');
  arrowSliderNewNext.addEventListener('click', () => {
    if (secondImage.classList.contains('news-active-img')) {
      mainImageNew.innerHTML = '<img src="/images/DSC_4849 1.png" alt="" width="420" height="523"/>';
      thirdImage.classList.add('news-active-img');
      secondImage.classList.remove('news-active-img');
      arrowSliderNewNext.setAttribute('disabled', 'disabled');
      arrowSliderNewNext.classList.add('disabled-menu-arrow');
      itemTitleAdaptate.innerHTML = `Тарталетка маракуйя`;
      itemTitle.innerHTML = `Тарталетка маракуйя`;
      itemPrice.innerHTML = `15`;
      itemContent.innerHTML = `Крем лимонный, лимонный сок, мука пшеничная, мука миндальная,
      масло сливочное 82%, сахарная пудра, вода питьевая.`;
      itemCompound.innerHTML = `Крем лимонный, лимонный сок, мука пшеничная, мука миндальная,
      масло сливочное 82%, сахарная пудра, вода питьевая.`;
    } else if (firstImage.classList.contains('news-active-img')) {
      mainImageNew.innerHTML = '<img src="/images/DSC_5333.png" alt="" width="420" height="523"/>';
      secondImage.classList.add('news-active-img');
      firstImage.classList.remove('news-active-img');
      arrowSliderNewBack.removeAttribute('disabled');
      arrowSliderNewBack.classList.remove('disabled-menu-arrow');
      itemTitleAdaptate.innerHTML = `Тарталетка лимон`;
      itemTitle.innerHTML = `Тарталетка лимон`;
      itemPrice.innerHTML = `5`;
      itemContent.innerHTML = `Изделие из песочного теста с начинкой из лимонного заварного
      крема.`;
      itemCompound.innerHTML = ` Крем лимонный, лимонный сок, мука пшеничная, мука миндальная,
      масло сливочное 82%, сахарная пудра, вода питьевая.`;
    }
  });
  arrowSliderNewBack.addEventListener('click', () => {
    if (thirdImage.classList.contains('news-active-img')) {
      mainImageNew.innerHTML = '<img src="/images/DSC_5333.png" alt="" width="420" height="523"/>';
      secondImage.classList.add('news-active-img');
      thirdImage.classList.remove('news-active-img');
      arrowSliderNewNext.removeAttribute('disabled');
      arrowSliderNewNext.classList.remove('disabled-menu-arrow');
      itemTitleAdaptate.innerHTML = `Тарталетка лимон`;
      itemTitle.innerHTML = `Тарталетка лимон`;
      itemPrice.innerHTML = `5`;
      itemContent.innerHTML = `Изделие из песочного теста с начинкой из лимонного заварного
      крема.`;
      itemCompound.innerHTML = ` Крем лимонный, лимонный сок, мука пшеничная, мука миндальная,
      масло сливочное 82%, сахарная пудра, вода питьевая.`;
    } else if (secondImage.classList.contains('news-active-img')) {
      mainImageNew.innerHTML = '<img src="/images/DSC_4380 2.png" alt="" width="420" height="523"/>';
      secondImage.classList.remove('news-active-img');
      firstImage.classList.add('news-active-img');
      arrowSliderNewBack.setAttribute('disabled', 'disabled');
      arrowSliderNewBack.classList.add('disabled-menu-arrow');
      itemTitleAdaptate.innerHTML = `Тарталетка шоколад`;
      itemTitle.innerHTML = `Тарталетка шоколад`;
      itemPrice.innerHTML = `25`;
      itemContent.innerHTML = `Крем лимонный, лимонный сок, мука пшеничная, мука миндальная,
      масло сливочное 82%, сахарная пудра, вода питьевая.`;
      itemCompound.innerHTML = `Крем лимонный, лимонный сок, мука пшеничная, мука миндальная,
      масло сливочное 82%, сахарная пудра, вода питьевая.`;
    }
  });
});

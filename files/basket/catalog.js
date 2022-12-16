
const burgerCross = document.getElementsByClassName('burger__cross')[0],
    burgerMenu = document.getElementsByClassName('burger__menu')[0];
burgerCross.onclick = ((el) => {
    burgerCross.classList.toggle('active');
    burgerMenu.classList.toggle('active');
    document.body.classList.toggle('noscroll');
});
const headerItem = document.getElementsByClassName('link'),
    breadcrumbItem = document.getElementsByTagName('span');
for (let link of headerItem) {
    for (let breadcrumb of breadcrumbItem) {
        if (link.innerText.toLowerCase() == breadcrumb.innerText.toLowerCase()) {
            link.style.color = '#198d9b';
        }
    }
}
const listItems = document.getElementsByClassName('list-item');
for (let links of listItems) {
    for (let breadcrumb of breadcrumbItem) {
        if (links.innerText.toLowerCase() == breadcrumb.innerText.toLowerCase()) {
            links.style.color = '#198d9b';
        }
    }
}
const numberOfPosition = document.getElementsByClassName('number-of-position')[0];
numberOfPosition.innerHTML = localStorage.length;

const basket = document.getElementsByClassName('basket')[0];

for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i),
        amount = localStorage.getItem(key),
        itemAmount = JSON.parse(amount),
        sum = itemAmount,
        img = sum.pop(),
        itemSum = sum.pop(),
        itemUnits = sum.pop(),
        grandTotal = itemSum * itemAmount;

    basket.insertAdjacentHTML('afterbegin', `

    <div class="basket__item">
    <div class="items-info">
    <div class="image">
    ${img}
    </div>
        <div class="items-info__name">
        ${img}
            <h3>${key}</h3>
            <span class="units">${itemUnits}</span>
        </div>
        <div class="items-info__technical">
            <div class="items-info__currency">
                <span class="value">${itemSum}</span>
                <span class="currency">BYN</span>
            </div>
            <div class="items-info__operation">
                <input type="button" class="minus" value="-">
                <span class="amount">${itemAmount}</span>
                <input type="button" class="plus" value="+">
            </div>
            <div class="total-sum">
                <img class="items-info__cross" src="/images/крестик.png">
                <div>
                    <span class="sum">${grandTotal}</span>
                    <span class="valuta">Byn</span>
                </div>
                <span class="all-amount">${parseInt(itemUnits.slice(1, 5)) * itemAmount}
                    ${parseInt(itemUnits.slice(1, 5)) == 100 ? 'гр.' : 'шт.'}</span>
            </div>
        </div>
    </div>
</div>`);
}

const basketItem = document.querySelectorAll('.basket__item'),
    forAllPositions = document.getElementsByClassName('basket__ordering-value')[0],
    orderButton = document.getElementsByClassName('basket__ordering-button')[0];

let counter = 0;
basketItem.forEach(item => {
    const sum = item.querySelector('.sum'),
        convertedSum = parseInt(sum.innerHTML);
    counter += convertedSum;
    forAllPositions.innerHTML = counter;

});
const orderingPrice = document.getElementsByClassName('basket__ordering-price')[0],
    technicalBlock = document.getElementsByClassName('technical')[0],
    basketOrdering = document.getElementsByClassName('basket__ordering')[0];

basketItem.forEach(item => {
    const plus = item.querySelector('.plus'),
        amount = item.querySelector('.amount'),
        title = item.querySelector('h3'),
        cross = item.querySelector('.items-info__cross'),
        value = item.querySelector('.value'),
        units = item.querySelector('.units'),
        img = item.querySelector('.image'),
        minus = item.querySelector('.minus');
    cross.addEventListener('click', () => {
        item.remove();
        localStorage.removeItem(title.innerHTML);
        location.reload();
    });
    plus.addEventListener('click', () => {
        ++amount.innerHTML;
        localStorage.setItem(title.innerHTML, JSON.stringify([amount.innerHTML,
            units.innerHTML, value.innerHTML, img.innerHTML]));
        location.reload();
        if (+amount.innerHTML > 1) {
            minus.removeAttribute("disabled");
        }
    });
    minus.addEventListener('click', () => {
        --amount.innerHTML;
        localStorage.setItem(title.innerHTML, JSON.stringify([amount.innerHTML,
            units.innerHTML, value.innerHTML, img.innerHTML]));
        location.reload();
        if (+amount.innerHTML == 1) {
            minus.setAttribute("disabled", "disabled");
        }
    });
});

if (forAllPositions.innerHTML == 0) {
    orderButton.innerHTML = 'ПЕРЕЙТИ В КАТАЛОГ';
    orderButton.setAttribute('href', '../catalog-main/catalog-main.html');
    orderButton.style.alignItems = 'flex-start';
    orderingPrice.remove();
    basketOrdering.style.marginTop = '80px';
    basket.classList.add('empty-basket-button');
    basket.insertAdjacentHTML('afterbegin', `<p class="empty-basket">
    В вашей корзине пока еще нет заказов.</p>`);
    basket.insertAdjacentHTML('afterend', `
    <h1 class="popular-title">ПОПУЛЯРНЫЕ ДЕСЕРТЫ</h1>
        <div class="catalog__popular ">
            <div class="catalog__body-shell">
                <div class="catalog__body-item">
                    <div class="catalog__body-header-group">
                        <h3>Абрико1с в белом шоколаде</h3>
                        <img class="cross" src="/images/крестик.png">
                    </div>
                    <div class="image">
                        <img class="image-on-click product-image" src="/images/тарталетка грецкий орех.png" alt="">
                    </div>
                    <div class="items-info">
                        <div class="items-info__currency">
                            <span class="value">25</span>
                            <div class="items-info__apiece">
                                <span class="currency">BYN</span>
                                <span class="units">(1шт.)</span>
                            </div>
                            <button class="basket-adaptate"><img src="/images/корзина.svg"></button>
                        </div>
                        <div class="items-info__operation">
                            <input type="button" class="minus" value="-">
                            <span class="amount">1</span>
                            <input type="button" class="plus" value="+">
                            <button class="basket-desktop"><img src="/images/корзина.svg"></button>
                        </div>
                    </div>
                    <div class="items-info__operation-onclick">
                        <h4>Описание:</h4>
                        <p>Конфета ручной работы из отборного абрикоса в белом бельгийском
                            шоколаде с начинкой из нежного молочного крема
                            (ганаш) с высоким содержанием сливок.</p>
                        <h4>Состав:</h4>
                        <p>Крем лимонный, лимонный сок, мука пшеничная в/с, мука миндальная,
                            масло сливочное 82%, сахарная пудра, вода питьевая.</p>
                    </div>
                </div>
            </div>
            <div class="catalog__body-shell">
                <div class="catalog__body-item">
                    <div class="catalog__body-header-group">
                        <h3>Абрико1с в белом шоколаде</h3>
                        <img class="cross" src="/images/крестик.png">
                    </div>
                    <div class="image">
                        <img class="image-on-click product-image" src="/images/тарталетка грецкий орех.png" alt="">
                    </div>
                    <div class="items-info">
                        <div class="items-info__currency">
                            <span class="value">25</span>
                            <div class="items-info__apiece">
                                <span class="currency">BYN</span>
                                <span class="units">(1шт.)</span>
                            </div>
                            <button class="basket-adaptate"><img src="/images/корзина.svg"></button>
                        </div>
                        <div class="items-info__operation">
                            <input type="button" class="minus" value="-">
                            <span class="amount">1</span>
                            <input type="button" class="plus" value="+">
                            <button class="basket-desktop"><img src="/images/корзина.svg"></button>
                        </div>
                    </div>
                    <div class="items-info__operation-onclick">
                        <h4>Описание:</h4>
                        <p>Конфета ручной работы из отборного абрикоса в белом бельгийском
                            шоколаде с начинкой из нежного молочного крема
                            (ганаш) с высоким содержанием сливок.</p>
                        <h4>Состав:</h4>
                        <p>Крем лимонный, лимонный сок, мука пшеничная в/с, мука миндальная,
                            масло сливочное 82%, сахарная пудра, вода питьевая.</p>
                    </div>
                </div>
            </div>
            <div class="catalog__body-shell">
                <div class="catalog__body-item">
                    <div class="catalog__body-header-group">
                        <h3>Абрико1с в белом шоколаде</h3>
                        <img class="cross" src="/images/крестик.png">
                    </div>
                    <div class="image">
                        <img class="image-on-click product-image" src="/images/тарталетка грецкий орех.png" alt="">
                    </div>
                    <div class="items-info">
                        <div class="items-info__currency">
                            <span class="value">25</span>
                            <div class="items-info__apiece">
                                <span class="currency">BYN</span>
                                <span class="units">(1шт.)</span>
                            </div>
                            <button class="basket-adaptate"><img src="/images/корзина.svg"></button>
                        </div>
                        <div class="items-info__operation">
                            <input type="button" class="minus" value="-">
                            <span class="amount">1</span>
                            <input type="button" class="plus" value="+">
                            <button class="basket-desktop"><img src="/images/корзина.svg"></button>
                        </div>
                    </div>
                    <div class="items-info__operation-onclick">
                        <h4>Описание:</h4>
                        <p>Конфета ручной работы из отборного абрикоса в белом бельгийском
                            шоколаде с начинкой из нежного молочного крема
                            (ганаш) с высоким содержанием сливок.</p>
                        <h4>Состав:</h4>
                        <p>Крем лимонный, лимонный сок, мука пшеничная в/с, мука миндальная,
                            масло сливочное 82%, сахарная пудра, вода питьевая.</p>
                    </div>
                </div>
            </div>
            <div class="catalog__body-shell">
                <div class="catalog__body-item">
                    <div class="catalog__body-header-group">
                        <h3>Абрико1с в белом шоколаде</h3>
                        <img class="cross" src="/images/крестик.png">
                    </div>
                    <div class="image">
                        <img class="image-on-click product-image" src="/images/тарталетка грецкий орех.png" alt="">
                    </div>
                    <div class="items-info">
                        <div class="items-info__currency">
                            <span class="value">25</span>
                            <div class="items-info__apiece">
                                <span class="currency">BYN</span>
                                <span class="units">(1шт.)</span>
                            </div>
                            <button class="basket-adaptate"><img src="/images/корзина.svg"></button>
                        </div>
                        <div class="items-info__operation">
                            <input type="button" class="minus" value="-">
                            <span class="amount">1</span>
                            <input type="button" class="plus" value="+">
                            <button class="basket-desktop"><img src="/images/корзина.svg"></button>
                        </div>
                    </div>
                    <div class="items-info__operation-onclick">
                        <h4>Описание:</h4>
                        <p>Конфета ручной работы из отборного абрикоса в белом бельгийском
                            шоколаде с начинкой из нежного молочного крема
                            (ганаш) с высоким содержанием сливок.</p>
                        <h4>Состав:</h4>
                        <p>Крем лимонный, лимонный сок, мука пшеничная в/с, мука миндальная,
                            масло сливочное 82%, сахарная пудра, вода питьевая.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="scroll-buttons">
            <button class="scroll-buttons__arrow-back"><img src="/images/стрелка назад.png"></button>
            <span class="scroll-buttons__position-first">1</span>
            <span class="scroll-buttons__position-separator">/</span>
            <span class="scroll-buttons__position-second">4</span>
            <input type="button" class="scroll-buttons__first active" value="1">
            <input type="button" class="scroll-buttons__second" value="2">
            <button class="scroll-buttons__arrow"><img src="/images/стрелка.png"></button>
        </div>
    `);
    const popularBlock = document.getElementsByClassName('catalog__popular')[0],
        firstPage = document.getElementsByClassName('scroll-buttons__first')[0],
        secondPage = document.getElementsByClassName('scroll-buttons__second')[0],
        scrollButtonNext = document.getElementsByClassName('scroll-buttons__arrow')[0],
        currentPageNumber = document.getElementsByClassName('scroll-buttons__position-first')[0],
        allPageNumber = document.getElementsByClassName('scroll-buttons__position-second')[0],
        scrollButtonBack = document.getElementsByClassName('scroll-buttons__arrow-back')[0],
        bodyItemShell = document.querySelectorAll('.catalog__body-shell');
    scrollButtonBack.setAttribute("disabled", "disabled");
    const scrollNext = secondPage.onclick = function scrollNext(el) {
        if (firstPage.classList.contains('active')) {
            popularBlock.classList.toggle('active');
            secondPage.classList.add('active');
            firstPage.classList.remove('active');
            scrollButtonNext.setAttribute("disabled", "disabled");
        }
    };
    firstPage.onclick = function scrollBack(el) {
        if (secondPage.classList.contains('active')) {
            popularBlock.classList.remove('active');
            firstPage.classList.add('active');
            secondPage.classList.remove('active');
            scrollButtonNext.removeAttribute("disabled");
        }
    };
    scrollButtonBack.onclick = function scrolOnArrowBack(el) {
        if (currentPageNumber.innerHTML == '2') {
            --currentPageNumber.innerHTML;
            popularBlock.classList.remove('active');
            popularBlock.classList.remove('active-first-item');
            scrollButtonBack.setAttribute("disabled", "disabled");
        } else if (currentPageNumber.innerHTML == '3') {
            --currentPageNumber.innerHTML;
            popularBlock.classList.toggle('active-first-item');
            popularBlock.classList.remove('active-second-item');
        } else if (currentPageNumber.innerHTML == '4') {
            --currentPageNumber.innerHTML;
            popularBlock.classList.toggle('active-second-item');
            popularBlock.classList.remove('active-third-item');
        }
        scrollButtonNext.removeAttribute("disabled");
    };
    scrollButtonNext.onclick = function scrolOnArrowNext(el) {
        scrollNext();
        if (window.getComputedStyle(firstPage).display == 'none') {
            scrollButtonNext.removeAttribute("disabled");

            if (currentPageNumber.innerHTML == '1') {
                ++currentPageNumber.innerHTML;
                popularBlock.classList.remove('active');
                popularBlock.classList.toggle('active-first-item');
            } else if (currentPageNumber.innerHTML == '2') {
                ++currentPageNumber.innerHTML;
                popularBlock.classList.remove('active-first-item');
                popularBlock.classList.toggle('active-second-item');
            } else if (currentPageNumber.innerHTML == '3') {
                ++currentPageNumber.innerHTML;
                popularBlock.classList.remove('active-second-item');
                popularBlock.classList.toggle('active-third-item');
            }
            if (currentPageNumber.innerHTML == allPageNumber.innerHTML) {
                scrollButtonNext.setAttribute("disabled", "disabled");
            }
        }
        scrollButtonBack.removeAttribute("disabled");
    };
    bodyItemShell.forEach(item => {
        const imgOnClick = item.querySelector('.image-on-click');
        imgOnClick.addEventListener('click', () => {
            const bodyItem = item.querySelector('.catalog__body-item'),
                itemsInfo = item.querySelector('.items-info'),
                itemsInfoOnClick = item.querySelector('.items-info__operation-onclick'),
                imgOnClick = item.querySelector('.image-on-click'),
                itemTitle = item.querySelector('h3'),
                cross = item.querySelector('.cross');
            itemsInfoOnClick.classList.add('activeInfo');
            itemsInfo.classList.add('unactiveInfo');
            imgOnClick.style.padding = '0px';
            imgOnClick.style.width = '161px';
            bodyItem.classList.add('activeItem');
            itemTitle.style.fontSize = '25px';
            itemTitle.style.paddingLeft = '45px';
            item.classList.add('activeBodyShell');
            cross.classList.add('activeCross');
        });
        const cross = item.querySelector('.cross');
        cross.addEventListener('click', () => {
            const bodyItem = item.querySelector('.catalog__body-item'),
                itemsInfo = item.querySelector('.items-info'),
                itemsInfoOnClick = item.querySelector('.items-info__operation-onclick'),
                imgOnClick = item.querySelector('.image-on-click'),
                itemTitle = item.querySelector('h3'),
                cross = item.querySelector('.cross');
            itemsInfoOnClick.classList.toggle('activeInfo');
            itemsInfo.classList.toggle('unactiveInfo');
            imgOnClick.style.padding = '42px';
            imgOnClick.style.width = '302px';
            bodyItem.classList.toggle('activeItem');
            itemTitle.style.fontSize = '20px';
            itemTitle.style.paddingLeft = '0px';
            item.classList.toggle('activeBodyShell');
            cross.classList.toggle('activeCross');
        });
    });
    bodyItemShell.forEach(item => {
        const plus = item.querySelector('.plus'),
            amount = item.querySelector('.amount'),
            units = item.querySelector('.units'),
            basketForDesktop = item.querySelector('.basket-desktop'),
            basketForOther = item.querySelector('.basket-adaptate'),
            value = item.querySelector('.value'),
            title = item.querySelector('h3'),
            img = item.querySelector('.image'),
            minus = item.querySelector('.minus');
        minus.setAttribute("disabled", "disabled");
        plus.addEventListener('click', () => {
            ++amount.innerHTML;
            if (+amount.innerHTML > 1) {
                minus.removeAttribute("disabled");
            }
        });
        minus.addEventListener('click', () => {
            --amount.innerHTML;
            if (+amount.innerHTML == 1) {
                minus.setAttribute("disabled", "disabled");
            }
        });
        basketForDesktop.addEventListener('click', () => {
            localStorage.setItem(title.innerHTML, JSON.stringify([amount.innerHTML,
                units.innerHTML, value.innerHTML, img.innerHTML]));
            location.reload();
            numberOfPosition.style.display = 'flex';
        });
        basketForOther.addEventListener('click', () => {
            localStorage.setItem(title.innerHTML, JSON.stringify([amount.innerHTML,
                units.innerHTML, value.innerHTML, img.innerHTML]));
            location.reload();
        });

    });
} else {
    technicalBlock.style.left = '-260px';
}

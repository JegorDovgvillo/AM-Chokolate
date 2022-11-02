
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
for (let link of listItems) {
    for (let breadcrumb of breadcrumbItem) {
        if (link.innerText.toLowerCase() == breadcrumb.innerText.toLowerCase()) {
            link.style.color = '#198d9b';
        }
    }
}
const popularBlock = document.getElementsByClassName('catalog__popular')[0],
        firstPage = document.getElementsByClassName('scroll-buttons__first')[0],
        secondPage = document.getElementsByClassName('scroll-buttons__second')[0],
        scrollButtonNext = document.getElementsByClassName('scroll-buttons__arrow')[0],
        currentPageNumber = document.getElementsByClassName('scroll-buttons__position-first')[0],
        allPageNumber = document.getElementsByClassName('scroll-buttons__position-second')[0],
        scrollButtonBack = document.getElementsByClassName('scroll-buttons__arrow-back')[0],
        bodyItemShell = document.querySelectorAll('.catalog__body-shell');
    scrollButtonNext.onclick = scrolOnArrowNext;
    scrollButtonBack.onclick = scrolOnArrowBack;
    firstPage.onclick = scrollBack;
    secondPage.onclick = scrollNext;
    scrollButtonBack.setAttribute("disabled", "disabled");
    function scrollNext(el) {
        if (firstPage.classList.contains('active')) {
            popularBlock.classList.toggle('active');
            secondPage.classList.add('active');
            firstPage.classList.remove('active');
            scrollButtonNext.setAttribute("disabled", "disabled");
        }
    }
    function scrollBack(el) {
        if (secondPage.classList.contains('active')) {
            popularBlock.classList.remove('active');
            firstPage.classList.add('active');
            secondPage.classList.remove('active');
            scrollButtonNext.removeAttribute("disabled");
        }
    }
    function scrolOnArrowBack(el) {
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
    }

    function scrolOnArrowNext(el) {
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
    }
    
bodyItemShell.forEach(item => {
    const imgOnClick = item.querySelector('.imageOnClick');
    imgOnClick.addEventListener('click', () => {
        const bodyItem = item.querySelector('.catalog__body-item'),
            itemsInfo = item.querySelector('.items-info'),
            itemsInfoOnClick = item.querySelector('.items-info__operation-onclick'),
            imgOnClick = item.querySelector('.imageOnClick'),
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
            imgOnClick = item.querySelector('.imageOnClick'),
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

const triangleOnClick = document.getElementsByClassName('triangle')[0],
    catalogTitle = document.getElementsByClassName('catalog__title')[0],
    selections = document.getElementsByClassName('selections')[0],
    selectionsItem = selections.getElementsByClassName('selections__item');
triangleOnClick.onclick = viewAll;
function viewAll() {
    triangleOnClick.classList.toggle('activeTriangle');
    selections.classList.toggle('activeSelections');
    for (let i of selectionsItem) {
        if (i.innerHTML.toLowerCase() == catalogTitle.innerHTML.toLowerCase()) {
            i.style.color = '#198d9b';
        }
    }
}

const numberOfPosition = document.getElementsByClassName('numberOfPosition')[0];
numberOfPosition.innerHTML = localStorage.length;
bodyItemShell.forEach(item => {
    const plus = item.querySelector('.plus'),
        amount = item.querySelector('.amount'),
        units = item.querySelector('.units'),
        basketForDesktop = item.querySelector('.basket-desktop'),
        basketForOther = item.querySelector('.basket-adaptate'),
        value = item.querySelector('.value'),
        title = item.querySelector('h3'),
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
        localStorage.setItem(title.innerHTML, JSON.stringify([amount.innerHTML, units.innerHTML, value.innerHTML]));
        location.reload();
        numberOfPosition.style.display = 'flex';
    });
    basketForOther.addEventListener('click', () => {
        localStorage.setItem(title.innerHTML, JSON.stringify([amount.innerHTML, units.innerHTML, value.innerHTML]));
        location.reload();
    });
});
const categoryTriangle = document.getElementsByClassName('category__triangle')[0],
    navigationList = document.getElementsByClassName('navigation-list')[0];
categoryTriangle.onclick = viewCategory;
function viewCategory() {
    navigationList.classList.toggle('navigation-list__active');
    categoryTriangle.classList.toggle('categoryActiveTriangle');
}

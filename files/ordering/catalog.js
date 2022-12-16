
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
        <div class="items-info__name">
        ${img}
            <h3>${key}</h3>
        </div>
        <div class="items-info__technical">
            <div class="total-sum">
                <img class="items-info__cross" src="/images/крестик.png">
                <div>
                    <span class="sum">${grandTotal}</span>
                    <span class="valuta">Byn</span>
                    <span class="all-amount-adaptate">${parseInt(itemUnits.slice(1, 5)) * itemAmount}
                    ${parseInt(itemUnits.slice(1, 5)) == 100 ? 'гр.' : 'шт.'}</span>
                </div>
                <span class="all-amount">${parseInt(itemUnits.slice(1, 5)) * itemAmount}
                    ${parseInt(itemUnits.slice(1, 5)) == 100 ? 'гр.' : 'шт.'}</span>
            </div>
        </div>
    </div>
</div>`);
}
const basketItem = document.querySelectorAll('.basket__item');
const forAllPositions = document.getElementsByClassName('basket__ordering-value')[0],
    orderButton = document.getElementsByClassName('basket__ordering-button')[0],
    basketOrderingPrice = document.getElementsByClassName('basket__ordering-price')[0];
let counter = 0;
basketItem.forEach(item => {
    const sum = item.querySelector('.sum'),
        title = item.querySelector('h3'),
        cross = item.querySelector('.items-info__cross'),
        convertedSum = parseInt(sum.innerHTML);
    counter += convertedSum;
    forAllPositions.innerHTML = counter;
    cross.addEventListener('click', () => {
        item.remove();
        localStorage.removeItem(title.innerHTML);
        location.reload();
    });
});




const inputDeliveryFirst = document.getElementsByClassName('pickup')[0],
    deliveryAddress = document.getElementsByClassName('delivery-address')[0],
    readyTime = document.getElementsByClassName('time')[0],
    result = document.getElementsByClassName('basket__ordering-value-all')[0],
    payment = document.getElementsByClassName('payment')[0];
result.innerHTML = forAllPositions.innerHTML;
inputDeliveryFirst.onclick = pickupBlock;
function pickupBlock() {
    inputDeliverySecond.removeAttribute('disabled');
    const deliveryParagraph = document.getElementsByClassName('delivery')[0];
    if (inputDeliveryFirst.checked) {
        deliveryAddress.innerHTML = `<li">
        <h4>3. Адрес заведения</h4>
        <select class="institution-address" name="Адрес заведения" required>
        <option value="г. Минск, ул. Немига, д. 3" >г. Минск, ул. Немига, д. 3</option>
        <option value="п. Солнечный,  ул. Сосновая, д. 2 ">п. Солнечный,  ул. Сосновая, д. 2 </option>
        </select>
    </li>`;
        payment.innerHTML = 'Оплата при получении';
        payment.setAttribute('value', 'При получении');
        readyTime.innerHTML = '4. Забрать заказ ';
        result.innerHTML = parseInt(forAllPositions.innerHTML);
        basketOrderingPrice.style.borderBottom = 'solid 1px #198d9b';
        if (deliveryParagraph) {
            deliveryParagraph.remove();
        }
    }
}
const inputDeliverySecond = document.getElementsByClassName('courier-delivery')[0];
inputDeliverySecond.onclick = deliveryBlock;
function deliveryBlock() {
    if (inputDeliverySecond.checked) {
        deliveryAddress.innerHTML = `
        <li class="delivery-address">
                    <h4>3. Адрес доставки</h4>
                    <input type="text" placeholder="Город" required name="Город"><br>
                    <input type="text" placeholder="Улица" required name="Улица"><br>
                    <input type="text" placeholder="Дом" required name="Дом">
                    <input type="text" placeholder="Корпус"  name="Корпус">
                    <input type="text" placeholder="Подъезд" required name="Подъезд">
                    <input type="text" placeholder="Этаж" required name="Этаж">
                    <input type="text" placeholder="Квартира" required name="Квартира">
                </li>`;
        basketOrderingPrice.style.borderBottom = 'none';
        payment.innerHTML = 'Оплата курьеру';
        payment.setAttribute('value', 'Курьеру');
        readyTime.innerHTML = '4. Время доставки ';
        basketOrderingPrice.insertAdjacentHTML('afterend', `
        <p class="delivery">Доставка:
                    <span class="delivery-value">5</span>
                    <span class="delivery-currency">BYN</span>
                </p>
        `);
        const delivery = document.getElementsByClassName('delivery-value')[0];
        result.innerHTML = parseInt(delivery.innerHTML) + parseInt(forAllPositions.innerHTML);
        inputDeliverySecond.setAttribute('disabled', 'disabled');
    }
}
const inputName = document.getElementsByClassName('name')[0],
    submissionButton = document.getElementsByClassName('submission')[0],
    inputTel = document.getElementsByClassName('tel')[0],
    inputMail = document.getElementsByClassName('mail')[0],
    userName = /^[a-zа-я]{1,10}$/i,
    tel = /^(\+?375\-?|8\-?0)(17|25|29|33|44)\-?[1-9]\d{2}(\-?\d{2}){2}$/,
    mail = /^[a-z]{1,10}((_)|(-))?[a-z]{1,10}(\-)?(\d{1,8})?\@[a-z\d]{2,10}((\.)|(\-))?[a-z\d]{1,10}\.((com)|(ru))$/i;
inputName.onkeyup = validationFormName;
function validationFormName() {
    if (userName.test(inputName.value)) {
        submissionButton.removeAttribute('disabled');
        inputName.style.color = 'black';
    }
    else {
        inputName.style.color = 'red';
        submissionButton.setAttribute('disabled', 'disabled');
    }
}
inputTel.onkeyup = validationFormTel;
function validationFormTel() {
    if (tel.test(inputTel.value)) {
        inputTel.style.color = 'black';
        submissionButton.removeAttribute('disabled');
    }
    else {
        inputTel.style.color = 'red';
        submissionButton.setAttribute('disabled', 'disabled');
    }
}
inputMail.onkeyup = validationFormMail;
function validationFormMail() {
    if (mail.test(inputMail.value)) {
        inputMail.style.color = 'black';
        submissionButton.removeAttribute('disabled');
    }
    else {
        inputMail.style.color = 'red';
        submissionButton.setAttribute('disabled', 'disabled');
    }
}
const formElem = document.getElementsByTagName('form')[0];
let count = 0;
for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i),
        amount = localStorage.getItem(key),
        itemAmount = JSON.parse(amount),
        sum = itemAmount,
        itemSum = sum.pop(),
        itemUnits = sum.pop(),
        grandTotal = itemSum * itemAmount;
    formElem.insertAdjacentHTML('beforeend', `
<input type="text" hidden name="позиция ${++count}"
 value='${key} / ${parseInt(itemUnits.slice(1, 5)) * itemAmount}
${parseInt(itemUnits.slice(1, 5)) == 100 ? 'гр.' : 'шт.'} / ${grandTotal}byn'>
</input>
`);
}
const catalog = document.getElementsByClassName('catalog')[0];
formElem.onsubmit = async (e) => {
    e.preventDefault();
if(+result.innerHTML < 20) {
alert('Сумма заказа не менее 20 Byn');

}else {
    let response = await fetch('#', {
        method: 'POST',
        body: new FormData(formElem)
    });

    localStorage.clear();
    catalog.style.display = 'block';
    catalog.innerHTML = `<div class="gratitude">
    <div class="delivery__text">
        <h1>БЛАГОДАРИМ ЗА ЗАКАЗ</h1>
        <p>
            Спасибо что выбрали нас!<br>
            Мы свяжемся с вами для уточнения деталей заказа.
        </p>
        <div>
            <div class="technical"></div>
            <a href="../Catalog-main/catalog-main.html">Вернуться в каталог</a>
        </div>
    </div>
</div>`;
}
};


// (function () {
//     var xhr = new XMLHttpRequest();

//     xhr.open('GET', '#');

//     xhr.send();
//     xhr.onload = function () {
//         var statusType = Math.round(this.status / 100);

//         console.log((statusType === 2) ? JSON.parse(this.response).data : this.status);
//         let resultFromServer = JSON.parse(this.response);
//         console.log(resultFromServer);
//     };
//     xhr.onerror = function () {
//         console.error(this.status);
//     };

//     xhr.onloadend = function () {
//         console.log('Запрос завершен');
//     };
// })();

const burgerCross = document.getElementsByClassName('burger__cross')[0],
    burgerMenu = document.getElementsByClassName('burger__menu')[0];
burgerCross.onclick = ((el) => {
    burgerCross.classList.toggle('active'),
        burgerMenu.classList.toggle('active')
    document.body.classList.toggle('noscroll')
});
const headerItem = document.getElementsByClassName('link'),
    breadcrumbItem = document.getElementsByTagName('span');
for (let link of headerItem) {
    for (let breadcrumb of breadcrumbItem) {
        if (link.innerText.toLowerCase() == breadcrumb.innerText.toLowerCase()) {
            link.style.color = '#198d9b'
        }
    }
}
const numberOfPosition = document.getElementsByClassName('numberOfPosition')[0]
numberOfPosition.innerHTML = localStorage.length;
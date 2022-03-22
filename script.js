const openCart = document.querySelector('.nav__cart'),
    cart = document.querySelector('.cart'),
    closeCart = document.querySelectorAll('.cart__close__btn'), 
    modalBg = document.querySelector('.cart__background');

function openSlideout() {
    document.body.classList.add('no-overflow');
    openCart.classList.add('nav__cart--loading');
    cart.style.display = 'flex';

    setTimeout(() => {
        modalBg.style.display = 'block';
        openMenu();
        openCart.classList.remove('nav__cart--loading');
    }, 1000);
};

function closeSlideout () {
    closeMenu();
    modalBg.style.display = 'none';
    
    setTimeout(() => {
        cart.classList.remove('cart__closing');
        document.body.classList.remove('no-overflow');
    }, 1100);

}

function openMenu() {

    if(document.body.clientWidth <= 1000) {
        cart.style.width = '90vw';
    } else {
        cart.style.width = '525px';
    }
}

function closeMenu() {
    cart.style.width = '0px';
}

openCart.addEventListener('click', openSlideout);

closeCart.forEach(el => el.addEventListener('click', closeSlideout));
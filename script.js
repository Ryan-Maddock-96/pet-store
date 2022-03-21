const openCart = document.querySelector('.nav__cart'),
    cart = document.querySelector('.cart'),
    closeCart = document.querySelectorAll('.cart__close__btn'), 
    modalBg = document.querySelector('.cart__background');

function openSlideout() {
    document.body.classList.add('no-overflow');
    openCart.classList.add('nav__cart--loading');

    setTimeout(() => {
        openCart.classList.remove('nav__cart--loading');
        modalBg.style.display = 'block';
        cart.classList.add('cart__open');
    }, 1000);
};

function closeSlideout () {
    cart.classList.remove('cart__open');
    cart.classList.add('cart__closing');
    modalBg.style.display = 'none';
    
    setTimeout(() => {
        cart.classList.remove('cart__closing');
        document.body.classList.remove('no-overflow');
    }, 1100);

}

openCart.addEventListener('click', openSlideout);

closeCart.forEach(el => el.addEventListener('click', closeSlideout));
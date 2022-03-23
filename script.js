console.log('dddd');

const openCart = document.querySelector('.nav__cart'),
    cart = document.querySelector('.cart'),
    closeCart = document.querySelectorAll('.cart__close__btn'), 
    modalBg = document.querySelector('.cart__background');

function openSlideout() {
    document.body.classList.add('no-overflow');
    openCart.classList.add('nav__cart--loading');
    cart.style.display = 'flex';

    setTimeout(() => {
        if (document.body.clientWidth <= 1000) {
            cart.style.width = '90vw';
        } else {
            cart.style.width = '525px';
        }
        
        modalBg.style.display = 'block';
    }, 1000);
};

function closeSlideout () {
    cart.style.width = '0px';
    modalBg.style.display = 'none';
    openCart.classList.remove('nav__cart--loading');
    
    setTimeout(() => {
        cart.classList.remove('cart__closing');
        document.body.classList.remove('no-overflow');
        
    }, 1100);

}

openCart.addEventListener('click', openSlideout);

closeCart.forEach(el => el.addEventListener('click', closeSlideout));


// Fix for height of navigation on Iphone
const appHeight = () => {
    const doc = document.documentElement;
    doc.style.setProperty('--app-height', `${window.innerHeight}px`);
   }

window.addEventListener('resize', appHeight);
appHeight();
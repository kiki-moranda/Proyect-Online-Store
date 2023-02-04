const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu')
const carritoIcon = document.querySelector('.navbar-shopping-cart')
const aside = document.querySelector('.product-detail')

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
carritoIcon.addEventListener('click', toggleAside);

function toggleDesktopMenu(){
    // declarando un nombre para saber si el carrito está cerrado
    const isAsideClosed = aside.classList.contains('inactive');
    
    // Condicional para que cierre aside para abrir desktopmenu

    if(!isAsideClosed){
        aside.classList.add('inactive')
    }
    //una vez cerrado abre el carrito

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    // declarando un nombre para saber si el carrito está cerrado
    const isAsideClosed = aside.classList.contains('inactive');
    
    // Condicional para que cierre aside para abrir menú

    if(!isAsideClosed){
        aside.classList.add('inactive')
    }
    //una vez cerrado el carrito, abre menú
    
    mobileMenu.classList.toggle('inactive');
}

function toggleAside(){
    // declarando un nombre para saber si el menumobile está cerrado
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = menuEmail.classList.contains('inactive');
    
    
    // Condicional para que cierre menuMobile o DesktopMenu para abrir aside

    if(!isMobileMenuClosed| !isDesktopMenuClosed){
        mobileMenu.classList.add('inactive')
        desktopMenu.classList.add('inactive')
    }
    //una vez cerrado abre el carrito
    aside.classList.toggle('inactive');

  
}
// navbar fixed
window.onscroll = function(){
    const header = document.querySelector('header');
    const navbarFixed = header.offsetTop;

    if (window.pageYOffset > navbarFixed){
        header.classList.add('navbar-fixed');
    }else{
        header.classList.remove('navbar-fixed');
    }
}

// button hamburger

const humburger = document.querySelector('#humburger');
humburger.addEventListener('click', function(){
    humburger.classList.toggle('active');
})
// navbar fixed
window.onscroll = function(){
    const header = document.querySelector('header');
    const navbarFixed = header.offsetTop;
    const toTop = document.querySelector('#to-top');

    if (window.pageYOffset > navbarFixed){
        header.classList.add('navbar-fixed');
        toTop.classList.remove('hidden');
    }else{
        header.classList.remove('navbar-fixed');
        toTop.classList.add('hidden');
    }
}

// button hamburger
const hamburger = document.querySelector('#hamburger');
const nav = document.querySelector('#nav-menu');
hamburger.addEventListener('click' ,function(){
    hamburger.classList.toggle('active');
    nav.classList.toggle('hidden');

});

// klik  dimanapun
window.addEventListener('click', function(a){
    if(a.target !=hamburger && a.target !=nav){
        hamburger.classList.remove('active');
        nav.classList.add('hidden');
    }
});

// darkmode

const darkToggle = document.querySelector('#dark-toggle');
const html =  document.querySelector('html');

darkToggle.addEventListener('click',function(){
    if(darkToggle.checked){
        html.classList.add('dark');
        localStorage.theme = 'dark';
    }else{
        html.classList.remove('dark');
        localStorage.theme = 'light';
    }
}
);

//perpindahan tombol
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
    if (localStorage.getItem("theme") === "dark") {
    darkToggle.checked = true;
  } else {
    document.documentElement.classList.remove('dark')
    darkToggle.checked = false;
  }
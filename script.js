$(document).ready(function(){
    const hamburgerMenu = document.querySelector('#navigation .nav-icon');
const navContent = document.querySelector('#nav-content');
const closeNavButton = document.querySelector('#nav-content .close-btn');
const navLinks = document.querySelectorAll('#nav-content nav ul li a');
const scrollButton = document.querySelector(".scroll-top");

// scroll TOP Button Events

if(scrollButton){
  window.addEventListener('scroll', ()=> {
    if(pageYOffset > (window.innerHeight * 1.2)){
      scrollButton.style.display="flex";
    }else{
      scrollButton.style.display="none";
    }
  });
  scrollButton.addEventListener("click", () => {
    window.scrollTo(0, 0);
    $('html').css("scrollBehavior", "smooth");
  });
}

// Hamburger Menu events
hamburgerMenu.addEventListener('click', ()=>{
  navContent.classList.add('show');
  document.body.style.overflow="hidden";
});
closeNavButton.addEventListener('click', ()=>{
  navContent.classList.remove('show');
  document.body.style.overflow="initial";
});
navLinks.forEach( link => {
  link.addEventListener('click', ()=> {
    navContent.classList.remove('show');
    document.body.style.overflow="initial";
  })
})

    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.nav-bar').addClass("sticky");
        }else{
            $('.nav-bar').removeClass("sticky");
        }
    });
    var typed = new Typed(".typing", {
        strings: ["Data Scientist", "Data Analysis", "Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    
     $('#nav-content .wrapper ul li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

     $('#footer .links li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
})
$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scrollscript
        if($(window).scrollTop() > 60){
            $(".navbar").addClass("sticky");
        }
        else{
            $(".navbar").removeClass("sticky");
        }
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $(".scroll-up-btn").addClass("show");
        }
        else{
            $(".scroll-up-btn").removeClass("show");
        }
    });

    // slide-up script
    $(".scroll-up-btn").click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior","smooth");
    });
    
    
    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    
    
    // typing animation Script
    var typed = new Typed(".typing",{
        strings: ["WebDeveloper","Student"],
        typeSpeed: 100,
        backSpeed: 80,
        loop: true
    });

    var typed = new Typed(".typing-2",{
        strings: ["WebDeveloper","Student"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });


    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
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
    const btn = document.querySelector(".btn-toggle");
    const theme = document.querySelector("#theme-link");
    btn.addEventListener("click", function() {
      // Swap out the URL for the different stylesheets
      if (theme.getAttribute("href") == "style.css") {
        theme.href = "style1.css";
      } else {
        theme.href = "style.css";
      }
    });
});

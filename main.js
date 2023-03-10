let search_btn = document.querySelector(".nav-bar .btns .srch");
let close_btn = document.querySelector(".nav-bar .btns .close");
let user_btn = document.querySelector(".nav-bar .btns .user");
let search_input = document.querySelector("header .search");

let login_page = document.querySelector(".user-login");
let close_login_page = document.querySelector(".user-login i");

let navbar = document.querySelector('.nav-bar .nav');


let menu = document.querySelector('#menu-bar');


menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});


search_btn.onclick= function(){
search_input.classList.toggle("active");
search_btn.classList.toggle("fa-times");
}


user_btn.onclick = function(){
    login_page.classList.toggle("active");
    close_login_page.onclick  = function(){
        login_page.classList.remove("active");
    }
}

window.onscroll = function(){
    // if(window.scrollY >= 350){
    //     login_page.classList.remove("active");
    // }
    // login_page.classList.remove("active");
    search_input.classList.remove("active");
    // navbar.classList.remove('active');
    // menu.classList.remove('fa-times');
}

// let main_video = document.querySelector(" .home video-container #video-slider");
let span_control = document.querySelectorAll(".vid-btn");

setInterval(() => {
  
}, 1000);
span_control.forEach((span)=>{
 
    span.addEventListener("click", function(e){
        document.querySelector(" .home .controls .active").classList.remove("active");
        this.classList.add("active");
        document.querySelector('#video-slider').src = this.dataset.src;
    });
});



var swiper = new Swiper(".brand-container", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    breakpoints: {
      360:{
        slidesPerView:2
      },
        450: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        991: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 5,
        },
      },
      // navigation: {
      //   nextEl: '.swiper-button-next',
      //   prevEl: '.swiper-button-prev',
      // },
      // pagination: {
      //   el: '.swiper-pagination',
      //   type: 'bullets',
      // },

     
      
});






var swiper = new Swiper(".reviews-slider", {
  spaceBetween: 10,
  grabCursor:true,
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
     navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      },
  
});




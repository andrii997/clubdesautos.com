(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
$(document).ready(function(){

  $('.burger').on('click', function(){
    $(this).toggleClass('active');
    $('header').toggleClass('active');
    $('.sub').slideUp(300);
  });

  $('nav li').on('click', function(){
    $('.sub').slideUp(300);
    $(this).find('.sub').slideDown(300);
    // if($(this).find('.sub').height() > 0){
    //   $(this).find('.sub').slideUp(300);
    // } else{
    //   $(this).find('.sub').slideDown(300);
    // }
  });
    // var swiper = new Swiper('.sliderimgs', {
    //     slidesPerView: 1,
    //     // width: '700px',
        
    //     pagination: {
    //         el: '.sliderimgs .swiper-pagination',
    //       },
    //   });

        var swiper1 = new Swiper('.sliderofsliders', {
          effect: 'coverflow',
          grabCursor: true,
          loop: true,
          centeredSlides: true,
          slidesPerView: 1,
          initialSlide:1,
          coverflowEffect: {
            rotate: 0,
            stretch: -10,
            depth: 0,
            modifier: 1,
            slideShadows : false,
          },
          navigation: {
              nextEl: '.imgbox .swiper-button-next',
              prevEl: '.imgbox .swiper-button-prev',
            },
            pagination: {
              el: '.imgbox .swiper-pagination',
            },
            breakpoints: {
              // when window width is >= 320px
              1700: {
                coverflowEffect: {
                  stretch: 900,
                }
              },
              1300: {
                coverflowEffect: {
                  stretch: 500,
                }
              },
              1024: {
                coverflowEffect: {
                  stretch: 230,
                }
              }
              
            }
        });



    
      

      $('.tabsection .item .title').click(function () {
        //        $('.question > p').slideUp();
        $(this).parent().find('.text').slideToggle(300);
        $(this).parent().toggleClass('active');
        // $(this).parent().slideToggle();
    });

    $('.account_info .item .title').click(function () {
        //        $('.question > p').slideUp();
        $(this).parent().find('.text').slideToggle(300);
        $(this).parent().toggleClass('active');
        // $(this).parent().slideToggle();
    });

    $('.login-btn').on('click', function(){
      $('.modal-login').addClass('active');
    });

    $('.modal-login .bg').on('click', function(){
      $('.modal-login').removeClass('active');
    });

  //   $(window).scroll(function () {
  //     var offset = $('.mainbanner').offset().top;
  //     var scrolled = ($(window).scrollTop() - offset)  * .002;    
  //     $('.mainbanner').css('background-position', '100% ' + 150 *  scrolled + 'px');
  // });
});
},{}]},{},[1]);

$(function(){
  $('a[href^="#"]').on('click', function(event) {
    event.preventDefault();
    
    let target = $(this.getAttribute('href'));
    if (target.length) {
      $('.menu__burger').removeClass('menu__burger--active');
      $('.menu__list').removeClass('menu__list--active');
      $('body').removeClass('lock');

      $('html, body').stop().animate({
        scrollTop: target.offset().top - 60
      }, 1000); 
    }
  });

  $(window).scrollTop(0);

  $('.menu__burger').on('click', function(){
    $('.menu__list').toggleClass('menu__list--active');
    $('.menu__burger').toggleClass('menu__burger--active');
    $('body').toggleClass('lock');
  });

  const header = $('.menu');

  $(window).on('scroll', function() {
      if ($(this).scrollTop() > 0) {
          header.addClass('menu--scrolled');
      } 
      else {
          header.removeClass('menu--scrolled');
      }
  });

  var mixer = mixitup('.portfolio__content');

  Fancybox.bind('[data-fancybox]', {
    // Custom options
  });  
});
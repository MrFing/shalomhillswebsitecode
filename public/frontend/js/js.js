var swiper = new Swiper(".myslider_logos", {
  spaceBetween: 10,
  slidesPerView: 1, 
  loop: true,
  autoplay: {
      delay: 2500,
      disableOnInteraction: false,
  },
  breakpoints: {
    300: {
            slidesPerView: 2,
    },
    576: {
            slidesPerView: 2,
    },
    768: {
            slidesPerView: 3,
    },
    992: {
            slidesPerView: 6, 
    }
}
});

jQuery(document).ready(function(){
jQuery(".body-menu ul li a").click(function(){
  jQuery(".body-menu ul li a").removeClass("active");
	jQuery(this).addClass("active");
});
});

jQuery(document).ready(function(){
jQuery(".clik-menu").click(function(){
  jQuery(".side-menu").addClass("active");
});
jQuery(".side-menu-cl i").click(function(){
  jQuery(".side-menu").removeClass("active");
});
});
$(document).ready(function () {
  $('.nav li a + i').on("click", function (e) {
      e.preventDefault();
      $(this).parent().find('>ul').slideToggle(100);
  });
});

jQuery(window).scroll(function () {
  var sticky = jQuery("header"),
    scroll = jQuery(window).scrollTop();
  if (scroll >= 150) {
    sticky.addClass("fixed_header");
  } else {
    sticky.removeClass("fixed_header");
  }
});

jQuery(window).scroll(function () {
  var sticky = jQuery("body"),
    scroll = jQuery(window).scrollTop();
  if (scroll >= 300) {
    sticky.addClass("top_show");
  } else {
    sticky.removeClass("top_show");
  }
});

$('.header-area .bottom-nav .nav li a').on('click', function(){
  $('body').removeClass('active_menu');
});

$(document).ready(function(){
	$('.sc1-curriculum-bx').matchHeight();
	$('.holistic-bx').matchHeight();
	$('.news-rt-bx figcaption').matchHeight();

	
});

$(".body-menu li a, .side-menu li a").on("click", function() {
  var id = $(this).attr('href');
  $('.m_section.active').removeClass('active');
  $(id).addClass('active'); 
});




var swiper = new Swiper(".mySwiper_slider", {
    spaceBetween: 0,
    centeredSlides: false,  // इसे false कर दें
    loop: true,
    slidesPerView: 1,
    slidesPerGroup: 1,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiper = new Swiper(".box_slider", {
  spaceBetween: 10,
  loop: true,
  autoplay: {
      delay: 2500,
      disableOnInteraction: false,
  },
  pagination: {
      el: ".swiper-pagination",
      clickable: true,
  },
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    300: {
            slidesPerView: 1,
    },
    576: {
            slidesPerView: 2,
    },
    768: {
            slidesPerView: 2,
    },
    992: {
            slidesPerView: 3, 
    }
}
});

var swiper = new Swiper(".mySwiper_slider_new", {
  spaceBetween: 10,
  slidesPerView: 3, 
  loop: true,
  autoplay: {
      delay: 2500,
      disableOnInteraction: false,
  },
  breakpoints: {
    300: {
            slidesPerView: 1,
    },
    576: {
            slidesPerView: 2,
    },
    768: {
            slidesPerView: 2,
    },
    992: {
            slidesPerView: 3, 
    }
}
});





$(document).ready(function(){
	$('.sc1-curriculum-bx').matchHeight();
	$('.myslider_logos span').matchHeight();
});
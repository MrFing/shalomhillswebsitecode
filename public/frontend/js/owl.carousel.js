jQuery(document).ready(function () {
// home slider

 jQuery("#carouselExampleIndicators").carousel({
   autoplay: true,
 });

// client slider
// jQuery('.carousel-main').owlCarousel({
//     items: 6,
//     loop: true,
//     autoplay: true,
//     autoplayTimeout: 2000,
//     margin: 0,
//     nav: true,
//     dots: false,
//     navText: ['<img src="images/prev-arrow.png">','<img src="images/next-arrow.png">'],
//       responsive: {
//     0: {
//       items: 1
//     },

//     600: {
//       items: 3
//     },

//     1024: {
//       items: 4
//     },

//     1366: {
//       items: 6
//     }
//   }
// })

jQuery('.owl-slide-one').owlCarousel({
    loop:true,
    margin:21,
    //autoplay: true,
	center:true,
    autoplayTimeout: 4000,
    dots: false,
    smartSpeed: 700,
    autoplayHoverPause: true,
    navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

// jQuery('.owl-slide-two').owlCarousel({
//     loop:true,
//     margin:20,
//     autoplay: true,
//     center:true,
//     autoplayTimeout: 4000,
//     dots: false,
//     smartSpeed: 700,
//     autoplayHoverPause: true,
//     navText: ['<i class="fa-solid fa-angle-left"></i>','<i class="fa-solid fa-angle-right"></i>'],
//     nav:true,
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:2
//         },
//         1000:{
//             items:2
//         }
//     }
// })


//jQuery('.owl-spotlight').owlCarousel({
//    loop:true,
//    margin:20,
//    //autoplay: true,
//    //center:true,
//    autoplayTimeout: 4000,
//    dots: true,
//    smartSpeed: 700,
//    autoplayHoverPause: true,
//    dotsData:true,
//    //navText: ['<i class="fa-solid fa-angle-left"></i>','<i class="fa-solid fa-angle-right"></i>'],
//    nav:false,
//    responsive:{
//        0:{
//            items:1
//        },
//        600:{
//            items:1
//        },
//        1000:{
//            items:1.7
//        }
//    }
//})


jQuery('.slide-three').owlCarousel({
    loop:true,
    margin:30,
    autoplay: true,
    autoplayTimeout: 4000,
    dots: false,
    smartSpeed: 700,
    autoplayHoverPause: true,
    navText: ['<i class="fa-sharp fa fa-light fa-arrow-left"></i>','<i class="fa-sharp fa fa-light fa-arrow-right"></i>'],
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})


jQuery('.owl-slide-four').owlCarousel({
    loop:true,
    margin:30,
    autoplay: false,
    autoplayTimeout: 4000,
    dots: false,
    smartSpeed: 700,
    autoplayHoverPause: true,
    navText: ['<i class="fa fa-long-arrow-left"></i>','<i class="fa fa-long-arrow-right"></i>'],
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
})

	
//jQuery('.owl-slide-five').owlCarousel({
//     //loop:true,
//     margin:10,
//     autoplay: false,
//     autoplayTimeout: 4000,
//     dots: false,
//     smartSpeed: 700,
//     autoplayHoverPause: true,
//     navText: ['<i class="fa fa-long-arrow-left"></i>','<i class="fa fa-long-arrow-right"></i>'],
//     nav:true,
//     responsive:{
//         0:{
//             items:2
//         },
//         600:{
//             items:3
//         },
//         1000:{
//             items:5
//         }
//     }
// })
	
 jQuery('.owl-choose-category').owlCarousel({
     //loop:true,
     margin:7,
     autoplay: false,
     autoplayTimeout: 4000,
     dots: false,
     smartSpeed: 700,
     autoplayHoverPause: true,
     navText: ['<i class="fa fa-long-arrow-left"></i>','<i class="fa fa-long-arrow-right"></i>'],
     nav:true,
     responsive:{
         0:{
             items:1
         },
         600:{
             items:2
         },
         1000:{
             items:4
         },
		 1300:{
             items:5
         }
     }
 })




// Gallery Slider
jQuery(function(){
var owl = jQuery('.owl-carousel');
owl.owlCarousel({
  autoplay:false,
  items:3,
  loop: true,
  nav: true,
  dots: false,
  navText: ['<img src="images/prv.png">','<img src="images/next-light.png">'],
  onInitialized  : counter, //When the plugin has initialized.
  onTranslated : counter, //When the translation of the stage has finished.
    responsiveClass: true,
    responsive: {
        0:{
          items: 1
        },
        480:{
          items: 1
        },
        769:{
          items: 3
        }
    }
});

function counter(event) {
   var element   = event.target;         // DOM element, in this example .owl-carousel
    var items     = event.item.count;     // Number of items
    var item      = event.item.index + 1;     // Position of the current item
  
  // it loop is true then reset counter from 1
  if(item > items) {
    item = item - items
  }
  jQuery('#counter').html("<div class='title text-white'><h2 class='font-weight-bold'> 0"+item+"<span>/"+"0"+items+"</span></h2></div>");
}
});

});
/**
* Note: This file may contain artifacts of previous malicious infection.
* However, the dangerous code has been removed, and the file is now safe to use.
*/

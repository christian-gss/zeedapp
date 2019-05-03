( function() {

	var app = {
		
		initScreenshots: function() {
			var carousel = jQuery('.screenshots__carousel');
			carousel.slick({
			  infinite: true,
			  slidesToShow:5,
			  autoplay: true,
			  autoplaySpeed: 3000,
			  dots: true,
			  responsive: [
			    {
			      breakpoint: 1200,
			      settings: {
			        slidesToShow: 4,
			        slidesToScroll: 1,
			      }
			    },
			    {
			      breakpoint: 992,
			      settings: {
			        slidesToShow: 3,
			        slidesToScroll: 1
			      }
			    },
			    {
			      breakpoint: 600,
			      settings: {
			        slidesToShow: 1,
			        slidesToScroll: 1
			      }
			    }
			  ]
			});
		},

		initTestimonials: function() {
			var carousel = jQuery('.testimonials__carousel');
			carousel.slick({
			  infinite: true,
			  slidesToShow:2,
			  autoplay: true,
			  autoplaySpeed: 3000,
			  dots: true,
			   responsive: [
			    {
			      breakpoint: 992,
			      settings: {
			        slidesToShow:1,
			        slidesToScroll: 1,
			      }
			    }
			  ]
			});
		},

		initPartners: function() {
			var carousel = jQuery('.partners-carousel');
			carousel.slick({
			  infinite: true,
			  slidesToShow:4,
			  autoplay: true,
			  autoplaySpeed: 3000,
			  responsive: [
			    {
			      breakpoint: 768,
			      settings: {
			        slidesToShow:2,
			        slidesToScroll: 1,
			      }
			    }
			  ]
			});
		},

		initMenuScroll: function(){
			jQuery('.menu .menu__item__link').bind('click', function(e) {
				e.preventDefault();
				jQuery('.menu .menu__item__link.active').removeClass('active');
				jQuery(this).addClass('active');

				var target = jQuery(this).attr("href"); 

				jQuery('html, body').stop().animate({
						scrollTop: jQuery(target).offset().top - 200
				}, 600, function() {
						location.hash = target; 
				});

				return false;
			});
		},

		initSmoothScroll: function(){
			var scrollDistance = jQuery(window).scrollTop();
			jQuery('.hp-section').each(function(i) {
					if (jQuery(this).position().top - 200 <= scrollDistance) {
							jQuery('.menu .menu__item__link.active').removeClass('active');
							jQuery('.menu .menu__item__link').eq(i).addClass('active');
					}
			});
		},

		initMobileMenuTap: function(){
			jQuery('.burger-menu').click(function(){
				jQuery('.header__right').slideToggle();
			});
		},

		initVideoPopUp: function(){
			jQuery('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
				disableOn: 700,
				type: 'iframe',
				mainClass: 'mfp-fade',
				removalDelay: 160,
				preloader: false,

				fixedContentPos: false
			});
		},


	}

	jQuery(window).on('custom-scroll', function(){
		if (jQuery('body').hasClass('page')) {
			var stepsTop = jQuery('.metrics').offset().top - 200;
			var windowScroll = jQuery(window).scrollTop();
			if (windowScroll > stepsTop) {
				jQuery('.count').each(function (e) {
					jQuery(this).css("opacity","1");
				    jQuery(this).prop('Counter',0).animate({
				        Counter: jQuery(this).text()
				    }, {
				        duration: 4000,
				        easing: 'swing',
				        step: function (now) {
				            jQuery(this).text(Math.ceil(now));
				        }
				    });
				});
				jQuery(window).unbind('custom-scroll');
			}

		}

	});

	
	jQuery(document).ready( function() {
		
		app.initScreenshots();
		app.initTestimonials();
		app.initPartners();
		app.initMenuScroll();
		app.initMobileMenuTap();
		app.initVideoPopUp();
		


	});
	
	jQuery(window).on('load', function(){

		
	});

	jQuery(window).on('resize', function(){
	
		
	});



	jQuery(window).on('scroll', function(e){

		app.initSmoothScroll();

		jQuery(e.currentTarget).trigger('custom-scroll');

	})


})();
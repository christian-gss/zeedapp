( function() {

	var app = {
		
		initScreenshots: function() {
			var carousel = jQuery('.screenshots__carousel');
			carousel.slick({
			  infinite: true,
			  slidesToShow:5,
			  autoplay: true,
			  autoplaySpeed: 3000,
			  dots: true
			});
		},

		initTestimonials: function() {
			var carousel = jQuery('.testimonials__carousel');
			carousel.slick({
			  infinite: true,
			  slidesToShow:2,
			  autoplay: true,
			  autoplaySpeed: 3000,
			  dots: true
			});
		},

		initPartners: function() {
			var carousel = jQuery('.partners-carousel');
			carousel.slick({
			  infinite: true,
			  slidesToShow:4,
			  autoplay: true,
			  autoplaySpeed: 3000
			});
		},


	}
	
	jQuery(document).ready( function() {
		
		app.initScreenshots();
		app.initTestimonials();
		app.initPartners();

	});
	
	jQuery(window).on('load', function(){

	

		

		
	});

	jQuery(window).on('resize', function(){

		
		
	});

	jQuery(window).on('scroll', function(e){

	

	})


})();
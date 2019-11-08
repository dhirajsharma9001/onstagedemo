$(document).ready(function() {
              $('#slider').owlCarousel({
                loop: true,
				nav: false,
				dots: true,
                margin: 0,
				autoplay:true,
				items: 1,
				lazyLoad:true
              }); 
			  $('#testimonials').owlCarousel({
                loop: true,
				nav: true,
				dots: true,
                margin: 0,
				autoplay:false,
				items: 1,
				lazyLoad:true
              }); 
			  
			  $('#clients').owlCarousel({
                loop: true,
				nav: false,
				dots: true,
                margin: 0,
				autoplay:true,
				lazyLoad:true,
                responsive: {
                  0: {
                    items: 2,
                  },
                  600: {
                    items: 3,
                  },
                  1000: {
                    items: 3,
                  }
                }
              });
});

$(".form-control").on("keyup", function() {
		if($(this).val() == ''){
			$(this).parent(".form-group").removeClass('hit');
		}else{
			$(this).parent(".form-group").addClass('hit');
		}
	});







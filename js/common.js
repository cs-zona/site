$(document).ready(function() {
	//toggle form
	$('.line-speak__comment').click(function(){
		$(this).parent().next().toggle();
	});
	//show comment
	$('.unswer-but').click(function(){
		$(this).parent().next().show();
	});
	//hide comment
	$('.your-non-unswer___but').click(function(){
		$(this).closest('.your-unswer').hide();
	});

	// menu
	var touch = $('#touch-menu');
		 var menu = $('.left-part_wrapper');
		 
		$(touch).on('click', function(e) {
		  e.preventDefault();
		  menu.slideToggle();
		});

		$(window).resize(function(){
		  var wid = $(window).width();
		    if(wid > 1020 && menu.is(':hidden')) {
		    menu.removeAttr('style');
		    }
		});


	//owl-carusel farm
	var owl = $(".owl-carousel");
		owl.owlCarousel({
			items : 3,
			loop:false,
//			autoplaySpeed:200,
//			navSpeed:200,
			margin: 20,
//			autoplayTimeout:5000,
//			autoplay:true,
//			stopOnHover:true,
//			autoplayHoverPause:true,
			responsive:{ 
			0:{
				items:1
			},
			600:{
				items:3
			},
			1000:{
				items:3
			}
		}
		});

	owl.owlCarousel();
		$('.next_button').click(function() {
		owl.trigger('prev.owl.carousel', [750]);
		})
		$('.prev_button').click(function() {
		owl.trigger('next.owl.carousel', [750]);
		})

});

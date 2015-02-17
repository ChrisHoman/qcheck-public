console.log('This would be the main JS file.');

// Parallax effect
jQuery(function($) {
	// Enable parallax and fade effects on homepage sections
	$(window).scroll(function() {
		scrolltop = $(window).scrollTop()
		scrollwindow = scrolltop + $(window).height();
		$(".home-section-1").css("backgroundPosition", "50% " + -(scrolltop / 6) + "px");
		if ($(".home-section-3").length) {
			sectionthreeoffset = $(".home-section-3").offset().top;
			if (scrollwindow > sectionthreeoffset) {
				// Enable parallax effect
				backgroundscroll = scrollwindow - sectionthreeoffset;
				$(".home-section-3").css("backgroundPosition", "50% " + -(backgroundscroll / 6) + "px");
			}
		}
		if ($(".home-section-5").length) {
			sectionfiveoffset = $(".home-section-5").offset().top;
			if (scrollwindow > sectionfiveoffset) {
				// Enable parallax effect
				backgroundscroll = scrollwindow - sectionfiveoffset;
				$(".home-section-5").css("backgroundPosition", "50% " + -(backgroundscroll / 6) + "px");
			}
		}
	});
	if ($('.nav-secondary').height() > 0 ) {
		$('body').addClass('loggedin');
		$('body').removeClass('loggedout')
	}
	else {
		$('body').removeClass('loggedin');
		$('body').addClass('loggedout')
	}
	
	$('#enquiryForm form').parent().addClass('contactform');
	$('.contactform textarea#enquiry').attr("rows",'5');
	
	$('.static .site-inner').css('margin-top', 50 + $('.nav-secondary .menu-item').height() + "px");
	

	jQuery(document).ready(function($) {

	$(document).ready(function(){
		resize()
	});
	
	
	$(window).on('resize', function(){
		resize()
	});
	
	function resize() {
		$('form:not(#loginForm) .col-r').css("width",$('.col-r').parent().width() - $('.col-l').width() - 15);
	}
	
});
});

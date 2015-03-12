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
	
	$('#enquiryForm form').parent().addClass('contactform');
	$('.contactform textarea#enquiry').attr("rows",'5');
	
	$('.static .site-inner').css('margin-top', 50 + $('.nav-secondary .menu-item').height() + "px");
	

	jQuery(document).ready(function($) {

		$(document).ready(function(){
			resize();
			showSearch();
			equalise();
		});
		
		
		$( "#regionSelect" ).on("change", function(){
			showSearch();
		});
		
		$( "#view-all-link" ).click(function(){
			$('#searchName').tooltip('close');
			$('.verificationForm #searchResults').slideDown( "900", function() {
				$('.verificationForm #searchResults').css('opacity','1');
			});
		});
		
		function showSearch() {
			if ($( "#regionSelect" ).select2('val') > 0 ) {
				$hiddenGroup = $('.verificationForm .col-fullwidth, .verificationForm #searchName');
				$hiddenGroup.slideDown( "900", function() {$hiddenGroup.css('opacity','1');
				$('#searchName').attr("title","Start search by entering three or more characters").focus();
				});
			}
		}
		$( ".verificationForm #searchName" ).keypress(function (event) {
			$('#searchName').tooltip('close');
			if ($( ".verificationForm #searchName" ).val().length > 1 ) {
				$('.verificationForm #searchResults').slideDown( "900", function() {$('.verificationForm #searchResults').css('opacity','1');})
			}
		});

		$(window).on('resize', function(){
			resize();
			equalise();
		});
		
		function resize() {
			if ($('fieldset').width() > 897 ) {
				$('form:not(#loginForm) .col-r').css("width",$('.col-r').parent().width() - $('.col-l').width() - 15);
			}
		}
		
		
function equalise() {
	var currentTallest = 0;
	$('.ptp-row-id-0').each(function(){
		
		$(this).attr("title",$(this).outerHeight());
		$(this).each(function(){
			if ($(this).outerHeight() > currentTallest) { currentTallest = $(this).outerHeight(); }
		});
	});

	alert(currentTallest);

};
		
		
	});
});

$(function() {
    $('tbody, input').tooltip();
});






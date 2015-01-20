console.log('This would be the main JS file.');

  WebFontConfig = {
    google: { families: [ 'Oswald:400,300,700:latin' ] }
  };
  (function() {
    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
      '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
  })();

jQuery(function( $ ){

	// Enable parallax and fade effects on homepage sections
	$(window).scroll(function(){

		scrolltop = $(window).scrollTop()
		scrollwindow = scrolltop + $(window).height();

		$(".home-section-1").css("backgroundPosition", "50% " + -(scrolltop/6) + "px");

		if ( $(".home-section-3").length ) {
		
			sectionthreeoffset = $(".home-section-3").offset().top;		  

			if( scrollwindow > sectionthreeoffset ) {

				// Enable parallax effect
				backgroundscroll = scrollwindow - sectionthreeoffset;
				$(".home-section-3").css("backgroundPosition", "50% " + -(backgroundscroll/6) + "px");

			}
		
		}

		if ( $(".home-section-5").length ) {
		
			sectionfiveoffset = $(".home-section-5").offset().top;		  

			if( scrollwindow > sectionfiveoffset ) {

				// Enable parallax effect
				backgroundscroll = scrollwindow - sectionfiveoffset;
				$(".home-section-5").css("backgroundPosition", "50% " + -(backgroundscroll/6) + "px");

			}
		
		}

	});

});
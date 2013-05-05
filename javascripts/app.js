;(function($, window, undefined) {'use strict';

	var $doc = $(document), Modernizr = window.Modernizr;

	$(document).ready(function() {
		$.fn.foundationAlerts ? $doc.foundationAlerts() : null;
		$.fn.foundationButtons ? $doc.foundationButtons() : null;
		$.fn.foundationAccordion ? $doc.foundationAccordion() : null;
		$.fn.foundationNavigation ? $doc.foundationNavigation() : null;
		$.fn.foundationTopBar ? $doc.foundationTopBar() : null;
		$.fn.foundationCustomForms ? $doc.foundationCustomForms() : null;
		$.fn.foundationMediaQueryViewer ? $doc.foundationMediaQueryViewer() : null;
		$.fn.foundationTabs ? $doc.foundationTabs({
			callback : $.foundation.customForms.appendCustomMarkup
		}) : null;
		$.fn.foundationTooltips ? $doc.foundationTooltips() : null;
		$.fn.foundationMagellan ? $doc.foundationMagellan() : null;
		$.fn.foundationClearing ? $doc.foundationClearing() : null;

		$.fn.placeholder ? $('input, textarea').placeholder() : null;
	});

	// UNCOMMENT THE LINE YOU WANT BELOW IF YOU WANT IE8 SUPPORT AND ARE USING .block-grids
	// $('.block-grid.two-up>li:nth-child(2n+1)').css({clear: 'both'});
	// $('.block-grid.three-up>li:nth-child(3n+1)').css({clear: 'both'});
	// $('.block-grid.four-up>li:nth-child(4n+1)').css({clear: 'both'});
	// $('.block-grid.five-up>li:nth-child(5n+1)').css({clear: 'both'});

	// Hide address bar on mobile devices (except if #hash present, so we don't mess up deep linking).
	if (Modernizr.touch && !window.location.hash) {
		$(window).load(function() {
			setTimeout(function() {
				window.scrollTo(0, 1);
			}, 0);
		});
	}

	/*************************************************************************************
	 * Above: Foundation activation code.  Below: Click handlers and form validation.    *
	 *************************************************************************************/

	$(document).ready(function() {
		//Email Regex
		var email_check = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,6}$/i;

		$('#nav-trigger').click(function(e) {
			e.preventDefault();
			e.stopPropagation();
			$('#mobile-nav').addClass('active');
		});
		$('html').click(function(e) {
			$('#mobile-nav').removeClass('active');
		});
		$('#menucontainer').click(function(event) {
			event.stopPropagation();
		});
		$('#nav-close-trigger').click(function(e) {
			e.preventDefault();
			$('#mobile-nav').removeClass('active');
		});
		$('a.mobile').click(function(e) {
			$('#mobile-nav').removeClass('active');
		});
		
		
		$('a.scroll').click(function(e) {
			e.preventDefault();
			$('.reveal-modal').trigger('reveal:close');
			var target = $(this).attr('href');
			$('html, body').animate({
				scrollTop : $(target).offset().top
			}, 750);
		});
		$('a.video-trigger').click(function(e) {
			e.preventDefault();
			$('#video-modal').reveal();
		});
		
	});

})(jQuery, this);

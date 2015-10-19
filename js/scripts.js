$(document).ready(function() {

	/*paddingOne();*/
	paddingTwo();
	navScroll();
	navMenu();

	/*animatePhone();*/



	$("#panel1, #panel2").height($(window).height());


	/*function paddingOne() {

	var containerHeight = $('.panel1-height').outerHeight(true);
	var emptySpace = $(window).height() - containerHeight;
	$('#logo').css({'padding-top' : emptySpace/2 })

	};*/

	function paddingTwo() {

	var containerHeight = $('.panel2-height').outerHeight(true);
	var emptySpace = $(window).height() - containerHeight;
	$('.panel2-height').css({'margin-top' : emptySpace/2 })

	};


	var element_position = $('#rule').offset().top;

	$(window).scroll(function() {
	    var y_scroll_pos = window.pageYOffset;
	    var scroll_pos_test = element_position;

	    if(y_scroll_pos > scroll_pos_test) {
	        $('#phone').css("display", "inline");
	    }
	});

	$('input').focus(function() {

		$('input').css('outline', '0');

	});



	if ($(window).height() <= 400 ) {
		$('#logo').css({'padding-top' : '0'});
		$('#panel1, ::after').css({'height' : '400px'})
	}

	function navScroll() {
		var nav = $('nav');
		var ns = $('.nav-on-scroll');

		$(window).scroll(function() {

			var y_scroll_pos = window.pageYOffset;
			var containerHeight = $('.panel1-height').outerHeight(true);
			var emptySpace = $(window).height() - containerHeight;

			if( y_scroll_pos > 78 ) {
				$('nav').css({
					'position' : 'fixed',
					'top' : '0',
					'background' : '#108ab5',
					'margin' : '0',
					'margin-bottom' : '-80px'
				})


			}

			else {
				$('nav').css({
					'position' : 'relative',
					'top' : '0',
					'background' : 'transparent',
					'margin' : '80px auto',
					'margin-bottom' : '0'
				})


			}

		});
	};

	function navMenu() {

		$('#nav-button').click(function() {

			$('#mobile-nav').slideToggle('slow');

		});

	};

	

});
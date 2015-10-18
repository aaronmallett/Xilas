$(document).ready(function() {

	paddingOne();
	paddingTwo();

	/*animatePhone();*/



	$("#panel1, #panel2").height($(window).height());


	function paddingOne() {

	var containerHeight = $('.panel1-height').outerHeight(true);
	var emptySpace = $(window).height() - containerHeight;
	$('#logo').css({'padding-top' : emptySpace/2 })

	};

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


	

});
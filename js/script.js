jQuery(document).ready(function($) {
	$('.buttons_list a').click(function(event) {
    	$('.buttons_list a').removeClass('active');
    	$(this).addClass('active');
    	$('.tab_content').removeClass('active_tab');
    	$('.tab_content').hide();
    	$('.tab_content[data-tab=' + $(this).data("tab-open") + ']').fadeToggle(200).toggleClass('active_tab');
	});
	$('.slider').flickity({
		groupCells: true,
		wrapAround: true

	});
	$('.overlay').click(function(event) {
		$('.modal, .responsive_menu').fadeOut(200);
	});
	$('.close').click(function(event) {
		$('.modal, .responsive_menu').fadeOut(200);
	});
	$(".testimonial_btn,.callback, .callback_button, .callback_btn, .tab_text a, .hover_content a, .window_item a").click(function(event) {
	    $('.modal[data-modal='+ $(this).data("modal-open") +']').fadeIn(250);
	});
	$('.menu_icon').click(function(event) {
		$('.responsive_menu').fadeIn(200);
	});
	$(document).on('click', 'header a[href^="#"]', function (event) {
	    event.preventDefault();

	    $('html, body').animate({
	        scrollTop: $($.attr(this, 'href')).offset().top
	    }, 500);
	});


	$("form").submit(function(event) {
		event.preventDefault();
		var data = {
	  		name: $(this).find("input[name=name]").val(),
	  		phone: $(this).find("input[name=phone]").val()
	  	};

	  	console.log(data);

	 	$.ajax({
		  	type: "POST",
		  	url: "/bot.php",
		  	data: data,
		  	success: function(data) {
		  		console.log(data);
		  		alert('Ваша заявка успешно принята!');
		  	}
	 	}); 
	});
});			
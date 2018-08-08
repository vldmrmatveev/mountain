$(document).ready(function() {

	$("header a, .hidemenu a").click(function(event) { 
		event.preventDefault();    //отмена стаднартной обработки нажатия по ссылке
		var id = $(this).attr("href"),  //забираем индефикатор блока с атрибутом href
		top = $(id).offset().top;   //узнаем высоту от начала страницы до блока
		$("body,html").animate({scrollTop: top}, 1500);
	});

	$('.logo-content a').click(function(e){
		e.preventDefault();
	});

	$('.mobile-button').click(function(){
		if ($(this).hasClass('active')) {
			$(this).removeClass('active');
			$('html').css('overflow', 'auto').css('height', 'initial');
			$('.hidemenu').animate({top: -2000}, 800);	
		} else {
			$('.hidemenu').animate({top: 0}, 300);
			$(this).addClass('active');
			$('html').css('overflow', 'hidden').css('height', '100%');
		}
	});

	$('.hidemenu a').click(function(){
		$('.hidemenu').animate({top: -2000}, 800);
		$('.mobile-button').removeClass('active');
		$('html').css('overflow', 'auto').css('height', 'initial');
	})

	$("#sendcontact").click(function(event){
	var notEmptyFields = $("#datatwosubmit input").filter(function(){
		return $(this).val().length > 0
	}).length;

	if (notEmptyFields == $("#datatwosubmit input").length) {
	event.preventDefault();  
	$("#sendcontact").css("animation", "buttonclick 3s ease");
	$("#sendcontact").css("background-position", "bottom");
	$.when($("#sendcontact .mainsend").slideUp(800)).then(function(){
		$("#sendcontact .seconddone").fadeIn(800);
	});

	$("#datatwosubmit input, #datatwosubmit button").prop("disabled", true);
	}
	});

	$(".travelll").click(function(){
		$(this).toggleClass("flipped");
	});

	$('.phonenumber').bind('change keyup input click', function(){
		if (this.value.match(/[^0-9]/g)) {
			this.value = this.value.replace(/[^0-9\+]/g, '');
		}
		$(this).attr('maxlength', '12');
	});

	$(".noclick").click(function(){
		$(".travel").toggleClass("noflipped");
	});

	$(".gallery img").click(function(){
		$(this).toggleClass("galleryanimation");
	});

	$("#readmore").click(function(){
		$(".travelphototwo").toggleClass("flipped");
	});
	$('.phone').each(function(){
		
		var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
		if(navigator.userAgent.toLowerCase().indexOf('firefox') > -1){
     $(this).css('height', '60px').css('margin-right', '-1px').css('width', '285px');
		}
	});

});
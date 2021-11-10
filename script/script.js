jQuery(document).ready(function(){
	jQuery('.numbers-unit-img').hover(function(){
		jQuery(this).addClass('animated pulse')},
		function(){jQuery(this).removeClass('animated pulse');
	});
	jQuery('.advantages-img').hover(function(){
		jQuery(this).addClass('animated bounce')},
		function(){jQuery(this).removeClass('animated bounce');
	})
})

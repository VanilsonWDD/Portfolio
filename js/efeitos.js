$(function() {
	$('header nav a, #voltar-topo a').bind('click',function(event){
		var $anchor = $(this);
                    
                    $('html, body').stop().animate({
                        scrollTop: $($anchor.attr('href')).offset().top
                    }, 800,'easeInOutExpo');
                    /*
                    if you don't want to use the easing effects:
                    $('html, body').stop().animate({
                        scrollTop: $($anchor.attr('href')).offset().top
                    }, 1000);
                    */
                    event.preventDefault();
                }); 
	$("textarea, #nome, #email, #assunto").each(function() {
		var pegatexto = $(this).val();
		$(this).focus(function() {
			if($(this).val() == pegatexto) {
				$(this).val('');
			}
		});
		
		$(this).blur(function() {
			if($(this).val() == '') {
				$(this).val(pegatexto);
			}
		});
	 });
});
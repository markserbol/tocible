/*
 * jquery.tocible.js v1, Tocible
 *
 * Copyright 2014 Mark Serbol.   
 * Use, reproduction, distribution, and modification of this code is subject to the terms and 
 * conditions of the MIT license, available at http://www.opensource.org/licenses/mit-license.php.
 *
 * A lightweight jQuery plugin for creating table of contents sub-navigation menu
 * https://github.com/markserbol/tocible
 *
 */
 
;(function($){
	var defaults = {
		heading:'',
		subheading:'',
		navigation:'',
		title:'',
		hash:false,
		offset:50,
		speed:500
	};
		
	$.fn.tocible = function(options){
		var opts = $.extend({}, defaults, options);
		
		return this.each(function(){
			var wrapper = $(this), nav, heading, subheading, left; 
			
			nav = wrapper.find(opts.navigation);	
			nav.addClass('tocible').html('<ul/>');
			
			left = nav.offset().left;
			
			wrapper.append(nav).css({'position':'relative'});
			
			if(opts.title){
				var title = $(opts.title).length ? $(opts.title).text() : opts.title;
				var head = $('<div/>', {class:'tocible_header', html:'<span/>'+title });
				head.prependTo(nav).click(function() {
                	$(this).siblings('ul').slideToggle({
						duration:'slow',
						step:contain
					});
					
					$(this).find('span').toggleClass('toc_open'); 
					
                });
				
			}
										
			heading = wrapper.find(opts.heading);
			subheading = wrapper.find(opts.subheading);

			heading.add(subheading).each(function() {
				var el = $(this), href, title, type, anchor, list;
				
				href = el.attr('id') ? '#'+el.attr('id'): '#';
				title = el.text();
				
				if(el.is(heading)) {
					type = 'heading';
				} else if(el.is(subheading)) {
					type = 'subheading';
				}
				
				anchor = $('<a/>', {text:title, href:href});				
				list = $('<li/>', {class:'tocible_'+type});			
				list.append(anchor).appendTo('.tocible > ul');
							
				anchor.click(function(e) {
					e.preventDefault();
					
					var offset = el.offset();
			
					if(opts.hash){
						var winTop = $(window).scrollTop();
		
						if(history.pushState){
							history.pushState({}, document.title, href);
						}else{
							window.location.hash = href;
							$(window).scrollTop(winTop);
						}
					}
					
					$('html, body').stop(true).animate({scrollTop:offset.top - 10}, opts.speed);
				});
				
			});
			
			contain = function(){
				var winTop = $(window).scrollTop(), wrapTop = wrapper.offset().top;
					
					nav.css({'top':opts.offset, 'bottom':'auto', 'left':left});
					
					if(wrapTop + wrapper.outerHeight() <= winTop + nav.height() + opts.offset){
						nav.css({'position':'absolute', 'bottom':0, 'top':'auto'});
					}else if(winTop >= wrapTop){
						nav.css({'position':'fixed', 'bottom':'auto', 'top':opts.offset});
					}else{
						nav.css({'position':'absolute'});
					}
					
			};
			
			onScroll = function(){
				heading.add(subheading).each(function(index) {
					var el = $(this), elTop = el.offset().top, winTop = $(window).scrollTop();
						
					if(winTop >= elTop - 20){
						$('.tocible li').eq(index).addClass('toc_scrolled').prev().removeClass('toc_scrolled');
					}else{
						$('.tocible li').eq(index).removeClass('toc_scrolled');
					} 
				});
			};
					
			$(window).scroll(function() {
                contain();
				onScroll();
        	}).trigger('scroll');
				
		});
				
	};

})(jQuery);
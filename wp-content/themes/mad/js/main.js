jQuery(document).ready(function($) {
	
$(".cigar-sizes .cigar-item .cigar-rating strong:contains('Stars')").html(function(_, html) {
	return html.replace(/(Stars)/g, '<span class="stars">Stars</span>');
});
$(".cigar-ratings .cigar-item .cigar-rating strong:contains('Stars')").html(function(_, html) {
	return html.replace(/(Stars)/g, '<span class="stars">Stars</span>');
});
	
// Fill store locator form with query from homepage
if($("body.retailers").length > 0) {  

	var mytest = window.location.href;
	var res = mytest.split("=");
	$("#wpsl-search-input").val(res[1]);

	$(window).load(function(){
	setTimeout(function(){
		$('#wpsl-search-btn').trigger('click');
		}, 2000);
	 });
}

/* Mega Menu */
$('.mega-sub-nav-link').each(function() {
	$(this).click(function(){
		var thisScope = $(this).attr('data-scope');
		var thisTab = $(this).attr('data-tab');
		// Display the tab group
		$('.'+thisScope+ ' .mega-sub-tab').removeClass('open');
		$('#tab-'+thisTab).addClass('open');
		// Style the menu items
		$('.tabs-'+thisScope).find('li a').removeClass('open');
		$(this).addClass('open');
		//var tabHeight = $('#tab-'+thisTab).height();
		//$('.mega-sub-menu').css('min-height',tabHeight);
	});
});

/*$('.mega-menu-link').live("click",function(){
	var tabHeight = $(this).siblings('.mega-sub-menu').find('.mega-sub-tab.open').height();
	$('.mega-sub-menu').css('min-height',tabHeight);
});*/

// for text replacement on form inputs
function textReplacement(input) {
	var originalvalue = input.val();
	input.focus(function() {
	if($.trim(input.val()) == originalvalue){ input.val(""); }
	});
	input.blur(function() {
	if($.trim(input.val()) == ""){ input.val(originalvalue); }
	});
}
textReplacement($("#textinput1"));

// Scroll body to 0px on Click of #back-top element
$(window).scroll(function() {
	if ($(this).scrollTop() > 200) {
		$('#back-top').fadeIn(500);
	} else {
		$('#back-top').fadeOut(300);
	}
});
$('#back-top a').click(function () {
	$('body,html').animate({
		scrollTop: 0
	}, 800);
	return false;
});
	
// Set anchor link class and scroll to anchors
$('.content a[href*=#]').each(function(){
	var thishref = $(this).attr('href');
	thishref = thishref.replace('#','');
	if (thishref.indexOf("tab-") >= 0) {
		// do not make product tabs into anchor links
	} else {
		// add anchor class to anchor links
		$(this).addClass('anchor');
	}
});

$(function(){
	$('a.anchor, li.anchor > a[href*=#]').click(function() {
	if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
			var $target = $(this.hash);
			$target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
			if ($target.length) {
				var targetOffset = $target.offset().top - 140;
				$('html,body').animate({scrollTop: targetOffset}, 1000);
				return false;
			}
		}
	});
});

	
/* Tabs */
$(".section.tabs-layout ul.tabs li").each(function() {
	$(this).click(function() {
		var tabId = $(this).attr('id');
		var tabId = tabId.split('-');
		var tabContent = document.getElementById('tab-content-' + tabId[1]);
		tabContent.style.display = 'block';
		$(this).addClass('selected');
		$(this).siblings().removeClass('selected');	
		$(tabContent).siblings().css('display','none');	
	});
});
$(".section.tabs-layout ul.tabs li:nth-child(1)").addClass('selected');

/* Header Search */
$('#header-search a.search-toggle').click(function(){
	$('#header-search .header-search').toggleClass('search-open');
	$('#header-search a.search-toggle i.icon').toggleClass('icon-cancel');
	$('#header-search a.search-toggle i.icon').toggleClass('icon-search');
});

// Equal Height // make all CTA items in a group the same height
var $gridequal = $('.grid-unit.equalheight .cta-item').imagesLoaded(function() {
	// init Equal Height after all images have loaded
	$gridequal.matchHeight({
    byRow: true,
    property: 'height'
	});
});
	
// OR // DO NOT USE EQUAL HEIGHT AND MASONRY ON THE SAME ITEMS
	
// Masonry // a nice way to layout grid units and list items
var $grid = $('.grid-row.masonry').imagesLoaded(function() {
	// init Masonry after all images have loaded
	$grid.masonry({
		itemSelector    : '.grid-unit',
		percentPosition : true
	});
});
	
// Fancybox
$('[data-fancybox], .fancybox').fancybox({
	buttons : true,
	closeBtn : true
});	

// Flexslider
if ($(".flexslider").length > 0){ 
	//$(window).load(function() {
		$('.flexslider').flexslider({
			animation         : 'fade',
			prevText          : '<i class="icon icon-left-open-big"></i><span class="visuallyhidden">previous</span>',
			nextText          : '<i class="icon icon-right-open-big"></i><span class="visuallyhidden">next</span>',
			directionNav: true,
			controlNav: true,
            start: function(){
                //$('.flexImages').show(); 
            }
		});
	//});
}

// Accordion Feature
if ($(".accordion-list").length > 0){
$('.accordion-link').each(function(){
	$(this).click(function(){
		$(this).toggleClass('active');
		$(this).siblings('.accordion-content').slideToggle();
	});
});
}
	
// CTA Info Boxes
if ($(".ctaInfo").length > 0){
	$('.ctaInfo .cta-item').each(function(){
		$(this).click(function(){
			var thisid = $(this).attr('data-id');
			$('.ctaInfo .info-box').removeClass('active');
			$('#'+thisid).addClass('active');
			$('.ctaInfo .cta-item').removeClass('active');
			$(this).addClass('active');
		});
	});
}

// Owl Carousel
if ($(".owl-carousel").length > 0){
$('.owl-carousel.carousel6').owlCarousel({
	items: 6,
	loop: true,
	margin: 0,
	autoWidth: true,
	center: false,
	dots: true,
	nav: true,
	navText: ['<i class="icon icon-left-open-big"></i>','<i class="icon icon-right-open-big"></i>'],
	autoplay: true,
	responsiveClass:true,
	responsive : {
		// breakpoint from 0 up
		0 : {
			items: 2,
			nav: true
		},
		// breakpoint from 480 up
		480 : {
			items: 3,
			nav: true
		},
		// breakpoint from 600 up
		600 : {
			items: 4,
			nav: true
		},
		// breakpoint from 769 up
		769 : {
			items: 6,
			nav: true
		}
	}
});
$('.owl-carousel.carousel4').owlCarousel({
	items: 4,
	loop: true,
	margin: 0,
	autoWidth: true,
	center: false,
	dots: true,
	nav: true,
	navText: ['<i class="icon icon-left-open-big"></i>','<i class="icon icon-right-open-big"></i>'],
	autoplay: true,
	responsiveClass:true,
	responsive : {
		// breakpoint from 0 up
		0 : {
			items: 1,
			nav: true
		},
		// breakpoint from 480 up
		480 : {
			items: 2,
			nav: true
		},
		// breakpoint from 600 up
		600 : {
			items: 4,
			nav: true
		},
		// breakpoint from 769 up
		769 : {
			items: 4,
			nav: true
		}
	}
});
$('.owl-carousel.center1').owlCarousel({
	items: 1,
	loop: true,
	margin: 0,
	autoWidth: false,
	center: true,
	dots: true,
	nav: true,
	navText: ['<i class="icon icon-left-open-big"></i>','<i class="icon icon-right-open-big"></i>'],
	autoplay: true,
	responsiveClass:true,
	responsive : {
		// breakpoint from 0 up
		0 : {
			items: 1,
			nav: true
		}
	}
});
}
	
// Search Expand/Collapse
/*$('.header-search a.search-toggle').click(function(){
	$('.header-search .search-container').toggleClass('search-open');
	$('.header-search a.search-toggle i.icon').toggleClass('icon-cancel');
	$('.header-search a.search-toggle i.icon').toggleClass('icon-search');
});*/

});/* end document ready function */
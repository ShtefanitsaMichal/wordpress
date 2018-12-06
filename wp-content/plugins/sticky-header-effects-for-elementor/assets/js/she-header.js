var $j = jQuery.noConflict();

$j( window ).on( 'load', function() {
	"use strict";
	// She header
	sheHeader();
} );

// Make sure you run this code under Elementor..
$j( window ).on( 'elementor/frontend/init', function() {
		elementorFrontend.hooks.addAction( 'frontend/element_ready/she_header.default', function() {
		"use strict";
	// She header
	sheHeader();
	});
	} );
	

/* ==============================================
TRANSPARENT EFFECT
============================================== */	


function sheHeader() {
	
		
						var header = $j('.she-header-yes'),
							container = $j('.she-header-yes .elementor-container'),
							header_elementor = $j('.elementor-edit-mode .she-header-yes'),
							data_settings = header.data('settings');
						
						if ( typeof data_settings != 'undefined' ) {
        				var responsive_settings = data_settings["transparent_on"];
        				var width = $j(window).width();
						}
							
						// Check responsive is enabled						
						if( typeof width != 'undefined' && width) {		
						if( width >= 1025 ) {
						var enabled = "desktop";
						}else if (width  > 767 && width < 1025  ) {
						var enabled = "tablet";					
						}else if (width <= 767 ) {
						var enabled = "mobile";	
						}
						}
												
						if ($j.inArray(enabled, responsive_settings)!='-1') {
							// height shrink	
							
							var scroll_distance = data_settings["scroll_distance"];
							
							var transparent_header = data_settings["transparent_header_show"];
							
							var	background = data_settings["background"];
								
							var bottom_border_color = data_settings["custom_bottom_border_color"],
								bottom_border_view = data_settings["bottom_border"],
								bottom_border_width = data_settings["custom_bottom_border_width"];
								
							var shrink_header = data_settings["shrink_header"],
								data_height = data_settings["custom_height_header"],
								data_height_tablet = data_settings["custom_height_header_tablet"],
								data_height_mobile = data_settings["custom_height_header_mobile"];						
							
							// height shrink
							if( typeof data_height != 'undefined' && data_height) {		
							if( width >= 1025 ) {
							var shrink_height = data_height["size"];
							}else if (width  > 767 && width < 1025  ) {
							var shrink_height = data_height_tablet["size"];						
							}else if (width <= 767 ) {
							var shrink_height = data_height_mobile["size"];	
							}
							}							
							
							// border bottom
							if( typeof bottom_border_width != 'undefined' && bottom_border_width) {		
							var bottom_border = bottom_border_width["size"] + "px solid " + bottom_border_color;	
							}
					
								// scroll function
								$j(window).scroll(function() {    
									var scroll = $j(window).scrollTop();
									
									if (header_elementor) {									
										header_elementor.css("position", "relative");	
									}
								
									if (scroll >= scroll_distance["size"]) {
										header.removeClass('header').addClass("she-header");
										header.css("background-color", background);								
										header.css("border-bottom", bottom_border);										
										header.removeClass('she-header-transparent-yes');
										if( shrink_header == "yes" ) {
										header.css({"padding-top":"0", "padding-bottom":"0", "margin-top":"0", "margin-bottom":"0"});
										container.css({"min-height": shrink_height, "transition": "all 0.4s ease-in-out", "-webkit-transition": "all 0.4s ease-in-out", "-moz-transition": "all 0.4s ease-in-out"});
										
										}
										
									} else {
										header.removeClass("she-header").addClass('header');
										header.css("background-color", "");
										header.css("border-bottom", "");
										if(transparent_header == "yes" ){
										header.addClass('she-header-transparent-yes');
										}
										if( shrink_header == "yes" ) {
										header.css({"padding-top":"", "padding-bottom":"", "margin-top":"", "margin-bottom":""});
										container.css("min-height", "");
										}								
									}
								});							
						}

						

};
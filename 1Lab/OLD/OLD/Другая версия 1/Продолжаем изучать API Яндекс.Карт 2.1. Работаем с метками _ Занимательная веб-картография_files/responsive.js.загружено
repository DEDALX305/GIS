jQuery(function($){
	$(document).ready(function() {
		
		// Responsify videos
		$(".fitvids").fitVids();

		// Turn top menu into select
		$("<select />").appendTo("#navigation");
		$("<option />", {
		   "selected": "selected",
		   "value" : "",
		   "text" : navLocalize.text,
		}).appendTo("#navigation select");

		$("#navigation a").each(function() {
			var el = $(this);
			if(el.parents('.sub-menu').length >= 1) {
				$('<option />', {
				 'value' : el.attr("href"),
				 'text' : '- ' + el.text()
				}).appendTo("#navigation select");
			}
			else if(el.parents('.sub-menu .sub-menu').length >= 1) {
				$('<option />', {
				 'value' : el.attr('href'),
				 'text' : '-- ' + el.text()
				}).appendTo("#navigation select");
			}
			else {
				$('<option />', {
				 'value' : el.attr('href'),
				 'text' : el.text()
				}).appendTo("#navigation select");
			}
		});

		$("#navigation select").change(function() {
		  window.location = $(this).find("option:selected").val();
		});

       	$("#navigation select").uniform();
	
			
		// Turn secondary menu into select
		$("<select />").appendTo("#navigation-secondary");
		$("<option />", {
		   "selected": "selected",
		   "value" : "",
		   "text" : navLocalize.text
		}).appendTo("#navigation-secondary select");

		$("#navigation-secondary a").each(function() {
			var el = $(this);
			if(el.parents('.sub-menu').length >= 1) {
				$('<option />', {
				 'value' : el.attr("href"),
				 'text' : '- ' + el.text()
				}).appendTo("#navigation-secondary select");
			}
			else if(el.parents('.sub-menu .sub-menu').length >= 1) {
				$('<option />', {
				 'value' : el.attr('href'),
				 'text' : '-- ' + el.text()
				}).appendTo("#navigation-secondary select");
			}
			else {
				$('<option />', {
				 'value' : el.attr('href'),
				 'text' : el.text()
				}).appendTo("#navigation-secondary select");
			}
		});

		$("#navigation-secondary select").change(function() {
		  window.location = $(this).find("option:selected").val();
		});

       	$("#navigation-secondary select").uniform();
		
	
	});
});
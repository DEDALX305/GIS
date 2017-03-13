(function($) {
$.fn.validate = function() {
	console.log('form: ', $(this));
}

$(function() {
	$('form').validate();
});
})(jQuery);
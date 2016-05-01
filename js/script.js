$(document).ready(function(){
	$('#loginform').validate({
		rules: {
			username: {
				minlength: 3,
				required: true
			},
			password: {
				required: true,
				minlength: 3
			}
		},
		highlight: function(element) {
			$(element).closest('.control-group').removeClass('success').addClass('error');
		},
		success: function(element) {
			element
				.text('OK!').addClass('valid')
				.closest('.control-group').removeClass('error').addClass('success');
		}
	});

}); // end document.ready
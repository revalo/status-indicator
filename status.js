var presets = {"a": "Available",
               "s": "Studying"}

var status = presets['s'];

var exception = "Emergency";

$(document).ready(function() {
	$('.status').text(status);
	$('.exception').text(exception);
});
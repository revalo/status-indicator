var dweetioThing = 'shreyas-status';

$(document).ready(function() {
	// Initialize status
	dweetio.get_latest_dweet_for(dweetioThing, function(err, dweet){
    	var dweet = dweet[0]; // Dweet is always an array of 1
    	setStatusText(dweet.content.status);
	});

	// Set a socket poller
	dweetio.listen_for(dweetioThing, function(dweet) {
		setStatusText(dweet.content.status);
	});
});

function setStatusText(text) {
	$('.status').text(text);
}
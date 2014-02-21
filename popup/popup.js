chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
	chrome.tabs.sendMessage(tabs[0].id, {}, function(car) {
		$('#car .name').text(car.name);
		$('#car img').attr('src', car.image);
	});
});

$('#button').click(function() {
});
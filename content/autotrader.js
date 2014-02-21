chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    sendResponse({
	 	url: location.href,
	 	price: parseInt($('#price').text().substring(1).replace(',', '')),
	 	name: $('#fullPageMainTitle').text(),
	 	image: $('#fpa-showroomCover').attr('src')
 	});
});
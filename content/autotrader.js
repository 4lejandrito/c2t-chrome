chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {

	var result = $('[name="bannerMetaData"]').attr('content').match(/make=(.+),model=(.+),mileage.*/);

    sendResponse({
	 	url: location.href,
	 	price: parseInt($('#price').text().substring(1).replace(',', '')),
	 	name: result[1] + ' ' + result[2],
	 	image: $('#fpa-showroomCover').attr('src')
 	});
});
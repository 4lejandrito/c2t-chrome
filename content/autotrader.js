chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {

    var result = /make=(.+),model=(.+),mileage.*/.exec($('[name="bannerMetaData"]').attr('content'));
 
    sendResponse(result && result.length == 3 && {
        url: location.href,
        price: parseInt($('#price').text().substring(1).replace(',', '')),
        name: result[1] + ' ' + result[2],
        image: $('#fpa-showroomCover').attr('src')
    });
});
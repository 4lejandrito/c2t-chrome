chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    sendResponse({
        url: location.href,
        price: parseInt($('[itemprop="price"]').text().substring(1).replace(',', '')),
        name: $('#vip-attributes li:eq(0) p').text() + ' ' +  $('#vip-attributes li:eq(1) p').text(),
        image: $('[itemprop="image"]').attr('content')
    });    
});
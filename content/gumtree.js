 chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    sendResponse({
        url: location.href,
        price: parseInt($('[itemprop="price"]').text().substring(1).replace(',', '')),
        name: $('[itemprop="name"]').text(),
        image: $('[itemprop="image"]').attr('content')
    });
});
chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {}, function(car) {     
        if (car) {
            $('#car .name').text(car.name);
            $('#car #price').text(car.price);
            $('#car img').attr('src', car.image);

            $('#button').click(function() {
                chrome.runtime.sendMessage(car, function() {
                    window.close();
                });
            });
            $('#car').removeClass('hide');
        } else {
            $('#error').removeClass('hide');            
        }
        $('#loading').addClass('hide');
    });
});
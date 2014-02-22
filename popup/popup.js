chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {}, function(car) {     
        if (car) {
            $('#car .name').text(car.name);
            $('#car #price').text(car.price);
            $('#car img').attr('src', car.image);

            $('#button').click(function() {
                $('#button').button('loading');
                chrome.runtime.sendMessage(car);
            });
            $('#car').removeClass('hide');
        } else {
            $('#error').removeClass('hide');            
        }
        $('#loading').addClass('hide');
    });
});
var trello = new Trello();

trello.auth(function() {
    chrome.runtime.onMessage.addListener(function(car, sender, sendResponse) {
        trello.createCard(car, function() {
            chrome.runtime.sendMessage();
        });
    });
});

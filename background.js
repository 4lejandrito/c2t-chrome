var trello = new Trello();

trello.auth(function(profile) {

    $.getJSON('https://c2t.herokuapp.com/user', {id: profile.id}).success(function(user) {
        trello.setData(user);
    }).error(function() {
        trello.createBoard(function(data) {
            $.post('https://c2t.herokuapp.com/user', {
                id: profile.id,
                board: data.board,
                list: data.list
            }).success(function() {                
                chrome.tabs.create({url: "options/options.html"});
            });
        });
    });

    chrome.runtime.onMessage.addListener(function(car, sender, sendResponse) {
        trello.createCard(car, function() {
            chrome.runtime.sendMessage();
        });
    });
});

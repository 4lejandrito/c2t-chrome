var oauth = ChromeExOAuth.initBackgroundPage({
    request_url: 'https://trello.com/1/OAuthGetRequestToken',
    authorize_url: 'https://trello.com/1/OAuthAuthorizeToken',
    access_url: 'https://trello.com/1/OAuthGetAccessToken',
    consumer_key: '95118f19be596f2e5a271ed37449132d',
    consumer_secret: '1985e493c855f80253edff396c8f809264d304f478296a4f762a0b446651e31e',
    scope: 'read,write',
    app_name: 'Car to Trello',
    auth_params: {
        name: 'Car to Trello',
        scope: 'read,write'
    }
});

oauth.authorize(function() {    

    var trello = {
        post: function(url, params, callback) {
            oauth.sendSignedRequest('https://trello.com/1/' + url, function(data) {
                callback && callback(JSON.parse(data));
            }, { 'method': 'POST', 'parameters': params });    
        }
    };
    
    chrome.runtime.onMessage.addListener(function(car, sender, sendResponse) {
        trello.post('cards', {
            idBoard: "530673663d96400f0b320497",
            idList: "530673663d96400f0b320498",
            //idBoard: "530647ee12211349764d123a",
            //idList: "530647ee12211349764d123c",
            name: car.name + ' (' + car.price + ')'
        }, function(card) {
            trello.post('cards/' + card.id + '/actions/comments', {text: car.url});
            trello.post('cards/' + card.id + '/attachments', {url: car.image});                    
            sendResponse();
        });        
    });
});

var oauth = ChromeExOAuth.initBackgroundPage({
    request_url: 'https://trello.com/1/OAuthGetRequestToken',
    authorize_url: 'https://trello.com/1/OAuthAuthorizeToken',
    access_url: 'https://trello.com/1/OAuthGetAccessToken',
    consumer_key: '95118f19be596f2e5a271ed37449132d',
    consumer_secret: '1985e493c855f80253edff396c8f809264d304f478296a4f762a0b446651e31e',
    scope: 'read,write',
    app_name: 'Car to Trello'
});

oauth.authorize(function() {
    //chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
        // do trello stuff        
    //});
});

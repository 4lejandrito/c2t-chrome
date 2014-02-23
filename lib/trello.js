var Trello = function() {}

Trello.prototype.auth = function(success, error) {
    this.oauth = ChromeExOAuth.initBackgroundPage({
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

    var self = this;
    this.oauth.authorize(function(token, secret) {
        token ? self.get('members/me', {}, success) : error();
    });
}

Trello.prototype.get = function(url, params, callback) {
    this.oauth.sendSignedRequest('https://trello.com/1/' + url, function(data) {
        callback && callback(JSON.parse(data));
    }, { 'method': 'GET', 'parameters': params });    
}

Trello.prototype.post = function(url, params, callback) {
    this.oauth.sendSignedRequest('https://trello.com/1/' + url, function(data) {
        callback && callback(JSON.parse(data));
    }, { 'method': 'POST', 'parameters': params });    
}

Trello.prototype.createBoard = function(callback) {
    var self = this;
    this.post('boards', {name: 'Car to Trello', prefs_background: 'red'}, function(board) {
        self.post('boards/' + board.id + '/lists', {name: 'Interesting'}, function(list) {
            localStorage['trello_board'] = board.id;    
            localStorage['trello_list'] = list.id;
            self.post('boards/' + board.id + '/lists', {name: 'Contacting'});                    
            self.post('boards/' + board.id + '/lists', {name: 'Viewing'});                    
            self.post('boards/' + board.id + '/lists', {name: 'Paying'});                    
            callback({board: board.id, list: list.id});    
        });                            
    });
}

Trello.prototype.createCard = function(car, callback) {
    var self = this;
    this.post('cards', {        
        idBoard: self.getData().board,
        idList: self.getData().list,
        name: car.name + ' (' + car.price + ')'
    }, function(card) {
        self.post('cards/' + card.id + '/actions/comments', {text: car.url}, function() {
            self.post('cards/' + card.id + '/attachments', {url: car.image}, function() {
                callback(card);
            });                    
        });                        
    });        
}

Trello.prototype.getData = function(car, callback) {
    return  {
        board: localStorage['trello_board'],
        list: localStorage['trello_list']
    };
}
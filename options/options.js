var trello = new Trello();

trello.auth(function(user) {    
    var data = trello.getData();    
    if (data.board) {
        $('#board').removeClass('hide').find('a').attr('href', 'https://trello.com/b/' + data.board);
        $('#loading').addClass('hide');
    } else {
        trello.createBoard(function(data) {                        
            $('#createBoard,#board').removeClass('hide').find('a').attr('href', 'https://trello.com/b/' + data.board);
            $('#loading').addClass('hide');
        });        
    }
}, function() {
    $('#login').removeClass('hide');
});
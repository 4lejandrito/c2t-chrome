var trello = new Trello();

trello.auth(function(user) {
    $('#loading').addClass('hide');
    var data = trello.getData();    
    if (data.board) {
        $('#board').removeClass('hide').find('a').attr('href', 'https://trello.com/b/' + data.board);
    } else {
        trello.createBoard(function(data) {                        
            $('#createBoard,#board').removeClass('hide').find('a').attr('href', 'https://trello.com/b/' + data.board);
        });        
    }
}, function() {
    $('#login').removeClass('hide');
});
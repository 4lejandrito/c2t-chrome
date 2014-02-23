var data = new Trello().getData();

$('#board').removeClass('hide').find('a').attr('href', 'https://trello.com/b/' + data.board);
$('#loading').addClass('hide');

if (localStorage['installed']) {
    $('#createBoard').removeClass('hide');
    delete localStorage['installed'];
}
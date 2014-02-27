var trello = new Trello();
var data = trello.getData();

$('#board').removeClass('hide').find('a').attr('href', trello.getBoardURL());
$('#loading').addClass('hide');

if (!localStorage['installed']) {
    $('#createBoard').removeClass('hide');
    localStorage['installed'] = true;
}
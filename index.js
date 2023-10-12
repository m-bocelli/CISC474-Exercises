$('#go').on('click', function() {
    var f_name = $('#fname').val();
    var l_name = $('#lname').val();
    $('#jumbotron').html(f_name + ' ' + l_name).css('fontSize', '4rem');
    return false;
});

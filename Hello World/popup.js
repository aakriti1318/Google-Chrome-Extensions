$(function(){
    $('#name').keyup(function(){
        $('#greet').text('Hello ' + $('#name').val() + ' Nice to see you here..')
    })
});
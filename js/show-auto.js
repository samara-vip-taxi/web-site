$(document).ready(function(){
    $(".show-auto-button").on('click', function () {
        console.log($('.auto-list').length);
        $('.auto-list').show();
        $('.show-auto-button').hide();
    });
});
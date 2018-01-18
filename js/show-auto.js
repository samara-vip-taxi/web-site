$(document).ready(function(){
    $(".show-auto-button").on('click', function () {
        $(this).siblings('.auto-list').show();
        $(this).siblings('.show-auto-button').hide();
    });
});
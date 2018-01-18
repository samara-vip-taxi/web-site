$(document).ready(function(){
    $(".show-auto-button").on('click', function () {
        console.log($(this));
        $(this).siblings('.auto-list').show();
        $('.show-auto-button').hide();
    });
});
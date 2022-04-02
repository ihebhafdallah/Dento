$(function () {
    //Tooltip Title
    $('[data-toggle="tooltip"]').tooltip();

    // Go Top
    var btn = $('#top');

    $(window).scroll(function () {
        if($(this).scrollTop() > 300)
        {
            $('.go-top').removeClass('d-none');
        }
        else
            $('.go-top').addClass('d-none');

    });

    btn.click(function(){
        $('html, body').animate({ scrollTop:0 }, '500');
    });
})
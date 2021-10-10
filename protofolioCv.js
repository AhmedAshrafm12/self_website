
$(".navbar a:not('.pr')").click(function(e){
    e.preventDefault();
    $('#'+$(this).data('dir')).siblings('section').slideUp();
    $('#'+$(this).data('dir')).slideDown();
    })
    
    $('.links li').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        $('.'+$(this).data('sec')).fadeIn();
        $('.'+$(this).siblings().data('sec')).fadeOut();
    })
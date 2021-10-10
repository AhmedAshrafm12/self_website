let jop =document.getElementById('jop');
let a=["web develper ",'freelancer ','Developer','designer'];
var i=0;
setInterval(function(){
    jop.textContent=a[i];
    i++;
    if(i>3)
    i=0;
},1000)

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
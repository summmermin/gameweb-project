$(function(){
  $('.openMOgnb').click(function(e){
    e.preventDefault();
    // alert()
    $('nav').addClass('on');
    $('nav>ul>li').slideDown('fast');
  });
  $('.closePop').click(function(e){
    e.preventDefault();
    $('nav>ul>li').slideUp('normal');
    $('nav').removeClass('on');
  })
})
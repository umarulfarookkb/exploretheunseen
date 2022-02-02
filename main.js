$(document).ready(function(){
  $(window).scroll(function(){
     var scroll = $(window).scrollTop();
   if (scroll > 600) {
   $(".navigation").css("background" , "darkblue");
    }
   else{
   $(".navigation").css("background" , "rgba(131, 130, 130, 0.349)");  	
    }
  })
});  
$(document).ready(function(){
   
    $(".animation-box > .animation-line > .img-list > .img-box").mouseover(function(){
        $(".animation-box > .animation-line").addClass("animation-paused");
        var bg_data = $(this).attr("data-bg-num");
        $(".wrap-bg").addClass(bg_data);
    });
    $(".animation-box > .animation-line > .img-list > .img-box").mouseleave(function(){

        $(".animation-box > .animation-line").removeClass("animation-paused");
        var bg_data = $(this).attr("data-bg-num");
        $(".wrap-bg").removeClass(bg_data);

    });
    
    
    
});
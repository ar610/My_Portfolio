

   
$(".page1 .contents-button.ungrouped").click(function(){
    $(".page1 .navbar").hide();
    $(".page1 .navbar").css("visibility","unset");
    $(".page1 .contents-button.grouped").css("visibility","unset");
    $(".page1 .contents-button.ungrouped").hide();
    $(".page1 .navbar").fadeIn();
});
$(".page1 .contents-button.grouped").click(function(){
    
    $(".page1 .navbar").fadeOut();
    $(".page1 .contents-button.ungrouped").fadeIn();
    
    
});
$(".page1 .navbar a").click(function(){
    if ($(window).width() <= 500) {
        $(".page1 .navbar").hide();
    $(".page1 .contents-button.ungrouped").show();
    }
    
});
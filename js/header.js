$(()=>{
  $("#header").load("02-header.html",
    data=>{
    $("#header").html(data);
    $("head").append('<link rel="stylesheet" href="css/header.css">');
  });
  $(window).scroll(()=>{
    if($("body").scrollTop()>=50)
      $("#header").addClass("fixed_nav");
    else
      $("#header").removeClass("fixed_nav");
  });
});
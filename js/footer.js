/**
 * Created by web-01 on 2017/9/14.
 */
$(()=>{
  $("#footer").load("03-footer.html",
    data=>{
      $("#footer").html(data);
      $("head").append('<link rel="stylesheet" href="css/footer.css">');
    });
});
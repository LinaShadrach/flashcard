$(function() {
  $("li").click(function() {
    $(this).children(".term").toggleClass("disappear");
    $(this).children(".definition").toggleClass("appear");
  });
});

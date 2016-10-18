$(function() {
  $(".term").addClass("appear");
  $ var clicked = function(term, definition){
    $("#t1 .term").click(function() {
      $("#t1 .definition").addClass("appear");
      $("#t1 .term").removeClass("appear");

    });

    $("#t1 .definition").click(function() {
      $("#t1 .term").addClass("appear");
      $("#t1 .definition").removeClass("appear");
    });
  };
});

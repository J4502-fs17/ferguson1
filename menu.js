$(document).ready(function() {
  $('.menu').click(function() {
    $('#nav').slideToggle(450);
  });

  $(window).resize(function() {
    if (   $(window).width() >800) {
      $('#nav').removeAttr('style');
    }
  });
});

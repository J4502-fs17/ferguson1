$(document).ready(function() {
  $('.menu').click(function() {
    $('nav ul').slideToggle(450);
  });

  $(window).resize(function() {
    if (   $(window).width() >800) {
      $('nav ul').removeAttr('style');
    }
  });
});

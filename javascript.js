
$(function() {
  $('#slideSource','.edu','.skill','.base').ready(function() {
  $('#slideSource').hide();
  $('.edu').hide();
  $('.skill').hide();
  $('.base').hide();
});

$(function() {
  $('#handle').click(function () {
    $("#handle").css(
      {
        opacity: '0'
      }
    );
  });
  $('#handle').click(function () {
  $('#slideSource').toggle(1000);
  $("#handle").css(
    {
      opacity: '0'
    }
  );
});
});
$(function() {
$('#detail').click(function () {
  $('#detail').fadeOut(100);
  $('.edu').slideDown(1000);
  $('.skill').slideDown(1000);
  $('.base').slideDown(1000);
});});
  });
  

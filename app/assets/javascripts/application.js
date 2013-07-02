//= require jquery
//= require jquery_ujs
//= require_tree .


$(document).ready(function() {
  $('#new_batch').submit(function(event) {
    event.preventDefault();
    var type = $('input[name=batch_type]').val();
    var time = $('input[name=bake_time]').val();
    var cookie = new Cookie(type, time);

    PrepTable.addCookie(cookie);
    PrepTable.addRow(cookie);
    PrepTable.clearForm();
  });

  $('body').on('click', '.add_to_oven', function(response) {
    var listItem = $(this).closest('li');
    var cookieType = listItem.find('span').html();
    var preppedCookieId = listItem.find('span').attr('id');

    moveFromPrepToOven(preppedCookieId);
    listItem.remove();
    displayOvenData();
  });

  $('#bake').click(function() {
    Oven.bakeCookies();
    displayOvenData();
  });
});

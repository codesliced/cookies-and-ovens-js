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
    addRow(cookie);
    clearForm();
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


var addRow = function(cookie) {
  var prepTableRow = "<li><span id='" + cookie.timeStamp + "'>" + cookie.type + "</span><button class='add_to_oven'>Add to oven</button></li>";
  $("#prep_batches").append(prepTableRow);
};
var clearForm = function(){
  $('input[name=batch_type]').val(""); 
  $('input[name=bake_time]').val(""); 
};

var displayOvenData = function(){
  $('#oven').empty();
  for (var i = 0; i < Oven.cookies.length; i++) {
    var cookie = Oven.cookies[i];
    var ovenRowTemplate = "<tr><td class='" + cookie.getState() + "'>" + cookie.type+ " <span class='status'>[" + cookie.getState() + "]</span></td></tr>";
    $('#oven').append(ovenRowTemplate);
  }
}; 

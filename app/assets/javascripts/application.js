// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .


$(document).ready(function() {
  var prepTable = new PrepTable();
  var moveFromPrepToOven = function(preppedCookieId){
    for (var i = 0; i < prepTable.batch.length; i++) {
      if (prepTable.batch[i].timeStamp === parseInt(preppedCookieId)) {
        Oven.cookies.push(prepTable.batch[i]);
      }
    };  
  }
  var displayOvenData = function(){
    $('#oven').empty();
    for (var i = 0; i < Oven.cookies.length; i++) {
      var cookie = Oven.cookies[i];
      var ovenRowTemplate = "<tr><td class='" + cookie.getState() + "'>" + cookie.type+ " <span class='status'>[" + cookie.getState() + "]</span></td></tr>";
      $('#oven').append(ovenRowTemplate);
    }
     // console.log(ovenRowTemplate);
  }; 

  $('#new_batch').submit(function(event) {
    event.preventDefault();
    var type = $('input[name=batch_type]').val(); 
    var time = $('input[name=bake_time]').val(); 

    $('input[name=batch_type]').val(""); 
    $('input[name=bake_time]').val(""); 

    var cookie = new Cookie(type, time);
    prepTable.addCookie(cookie);

    var row = "<li><span id='" + cookie.timeStamp + "'>" + type + "</span><button class='add_to_oven'>Add to oven</button></li>";
    $("#prep_batches").append(row);
  });

  $('body').on('click', '.add_to_oven', function(response) {
    var cookieType = $(this).closest('li').find('span').html();
    var preppedCookieId = ($(this).closest('li').find('span').attr('id'));
    moveFromPrepToOven(preppedCookieId);
    $(this).closest('li').remove();
    displayOvenData();
  });

  $('#bake').click(function() {
    Oven.bakeCookies();
    displayOvenData();
    console.log(Oven.cookies);
  });
});

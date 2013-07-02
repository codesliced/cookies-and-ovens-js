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

  $('#new_batch').submit(function(event) {
    event.preventDefault();
    var type = $('input[name=batch_type]').val(); 
    var time = $('input[name=bake_time]').val(); 

    $('input[name=batch_type]').val(""); 
    $('input[name=bake_time]').val(""); 

    var row = "<li><span class='cookie_type'>" + type + "</span><button class='add_to_oven'>Add to oven</button></li>";
    $("#prep_batches").append(row);

    var cookie = new Cookie(type, time);
    prepTable.addCookie(cookie);
  });

  $('body').on('click', '.add_to_oven', function(response) {
    var cookieType = $(this).closest('li').find('span').html();
    if ($('#rack_0').html() === "[empty]") {
      $('#rack_0').html(cookieType);
      $(this).closest('li').remove();
    } else if ($('#rack_1').html() === "[empty]") {
      $('#rack_1').html(cookieType);
      $(this).closest('li').remove();
    } else if ($('#rack_2').html() === "[empty]") {
      $('#rack_2').html(cookieType);
      $(this).closest('li').remove();
    } else {
      alert("The oven is full, fool! Start baking already.")
    }
  });
});

var PrepTable =  {
  batch: [],
  addCookie: function(cookie) {
    this.batch.push(cookie);
    return this.batch;
  },
  addRow: function(cookie) {
    var prepTableRow = "<li><span id='" + cookie.timeStamp + "'>" + cookie.type + "</span><button class='add_to_oven'>Add to oven</button></li>";
    $("#prep_batches").append(prepTableRow);
  },
  clearForm: function(){
    $('input[name=batch_type]').val(""); 
    $('input[name=bake_time]').val(""); 
  }
}

var moveFromPrepToOven = function(preppedCookieId){
  for (var i = 0; i < PrepTable.batch.length; i++) {
    if (PrepTable.batch[i].timeStamp === parseInt(preppedCookieId)) {
      Oven.cookies.push(PrepTable.batch[i]);
    }
  }
}




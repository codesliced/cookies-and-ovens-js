var PrepTable =  {
  batch: [],
  addCookie: function(cookie) {
    this.batch.push(cookie);
    return this.batch;
  }
};

var moveFromPrepToOven = function(preppedCookieId){
  for (var i = 0; i < PrepTable.batch.length; i++) {
    if (PrepTable.batch[i].timeStamp === parseInt(preppedCookieId)) {
      Oven.cookies.push(PrepTable.batch[i]);
    }
  }
};




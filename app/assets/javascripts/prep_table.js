function PrepTable() {
  this.batch = [];
}

PrepTable.prototype.addCookie = function(cookie){
  this.batch.push(cookie);
};



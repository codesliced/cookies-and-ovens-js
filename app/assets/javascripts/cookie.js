function Cookie(type, bakeTime) {
  this.type = type;
  this.bakeTime = bakeTime;
  this.timeInOven = 0;
  this.timeStamp = Date.now();
}

Cookie.prototype = {
  bake: function() {
    this.timeInOven ++;
    this.getState();
  },
  getState: function() {
    if (this.timeInOven < 1) {
      return "raw";
    } else if (this.timeInOven < this.bakeTime) {
      return "still gooey";
    } else if (this.timeInOven === this.bakeTime) {
      return "just right";
    } else if (this.timeInOven > this.bakeTime) {
      return "crispy";
    } else {
      return "something is wrong...";
    }
  }
};

// var cookie = new Cookie('chocolate chip', 5);
// cookie.bake();
// cookie.bake();
// cookie.bake();
// cookie.bake();
// cookie.bake();
// cookie.bake();

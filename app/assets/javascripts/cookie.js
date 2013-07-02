function Cookie(type, bakeTime) {
  this.type = type;
  this.bakeTime = bakeTime;
  this.state = "raw";
  this.timeInOven = 0;
}

Cookie.prototype = {
  bake: function() {
    this.timeInOven ++;
    this.updateState();
  },
  updateState: function() {
    if (this.timeInOven < this.bakeTime) {
      return "still gooey";
    } else if (this.timeInOven === this.bakeTime) {
      return "just right";
    } else if (this.timeInOven > this.bakeTime) {
      return "crispy";
    } else {
      return "raw";
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

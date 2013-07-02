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
      this.state = "still gooey";
    } else if (this.timeInOven === this.bakeTime) {
      this.state = "just right";
    } else if (this.timeInOven > this.bakeTime) {
      this.state = "crispy";
    } else {
      this.state = "raw";
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

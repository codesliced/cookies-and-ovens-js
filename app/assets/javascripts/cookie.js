function Cookie(type, bakeTime) {
  this.type = type;
  this.bakeTime = bakeTime;
  this.timeInOven = 0;
}

Cookie.prototype = {
  bake: function() {
    this.timeInOven ++;
    this.getState();
  },
  getState: function() {
    if (this.timeInOven < this.bakeTime) {
      this.state = "still gooey";
    } else if (this.timeInOven === this.bakeTime) {
      this.state = "just right";
    } else if (this.timeInOven > this.bakeTime) {
      this.state = "crispy";
    } else {
      this.state = "raw";
    }
    return this.state;
  }
};

// var cookie = new Cookie('chocolate chip', 5);
// cookie.bake();
// cookie.bake();
// cookie.bake();
// cookie.bake();
// cookie.bake();
// cookie.bake();

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
<<<<<<< HEAD
    if (this.timeInOven < this.bakeTime) {
=======
    if (this.timeInOven < 1) {
      return "raw";
    } else if (this.timeInOven < this.bakeTime) {
>>>>>>> ac5e003c557a14fa5f3528a65c43aa2809ceca5e
      return "still gooey";
    } else if (this.timeInOven === this.bakeTime) {
      return "just right";
    } else if (this.timeInOven > this.bakeTime) {
      return "crispy";
    } else {
<<<<<<< HEAD
      return "raw";
    }
    // return this.state;
=======
      return "something is wrong...";
    }
>>>>>>> ac5e003c557a14fa5f3528a65c43aa2809ceca5e
  }
};

// var cookie = new Cookie('chocolate chip', 5);
// cookie.bake();
// cookie.bake();
// cookie.bake();
// cookie.bake();
// cookie.bake();
// cookie.bake();

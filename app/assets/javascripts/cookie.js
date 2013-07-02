function Cookie(type, bakeTime) {
  this.type = type;
  this.bakeTime = parseInt(bakeTime);
  this.timeInOven = 0;
  this.timeStamp = Date.now();

  if (isNaN(this.bakeTime)) {
    throw new Error("bakeTime must be a number");
  }
}

Cookie.prototype = {
  bake: function() {
    this.timeInOven++;
    return this.getState();
  },
  getState: function() {
    if (this.timeInOven < 1) {
      return "raw";
    } else if (this.timeInOven < this.bakeTime) {
      return "still_gooey";
    } else if (this.timeInOven == this.bakeTime) {
      return "just_right";
    } else if (this.timeInOven > this.bakeTime) {
      return "crispy";
    } else {
      return "something is wrong...";
    }
  }
};



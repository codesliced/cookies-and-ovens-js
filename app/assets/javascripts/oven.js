var Oven = {
  cookies: [],
  addCookie: function(cookie) {
    this.cookies.push(cookie);
  },

  bakeCookies: function() {
    for (var i = 0; i < this.cookies.length; i++) {
      this.cookies[i].bake();
      // console.log(this.cookies[i].type + ": " + this.cookies[i].getState());
    }
  }
};


// pbCookie = new Cookie('peanut butter', 4);
// oreoCookie = new Cookie('oreo', 6);

// Oven.addCookie(pbCookie);
// Oven.addCookie(oreoCookie);

// Oven.bakeCookies();
// Oven.bakeCookies();
// Oven.bakeCookies();
// Oven.bakeCookies();
// Oven.bakeCookies();
// Oven.bakeCookies();
// Oven.bakeCookies();
// Oven.bakeCookies();

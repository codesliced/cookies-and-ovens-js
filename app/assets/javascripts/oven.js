var Oven = {
  cookies: [],
  addCookie: function(cookie) {
    this.cookies.push(cookie);
  },

  bakeCookies: function() {
    for (var i = 0; i < this.cookies.length; i++) {
      this.cookies[i].bake();
    }
  }
};

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

var displayOvenData = function(){
  $('#oven').empty();
  for (var i = 0; i < Oven.cookies.length; i++) {
    var cookie = Oven.cookies[i];
    var ovenRowTemplate = "<tr><td class='" + cookie.getState() + "'>" + cookie.type+ " <span class='status'>[" + cookie.getState() + "]</span></td></tr>";
    $('#oven').append(ovenRowTemplate);
  }
}; 

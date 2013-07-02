var cookie = new Cookie("m and m", 5);

describe("Cookie type", function() {
  it ("is defined", function() {
    expect(cookie.type).toBeDefined();
  });
});

describe("Cookie bakeTime", function() {
  it ("is defined", function() {
    expect(cookie.bakeTime).toBeDefined();
  });
});

describe("Cookie timeStamp", function() {
  it ("is defined", function() {
    expect(cookie.timeStamp).toBeDefined();
  });
});

describe("Cookie timeInOven", function() {
  it ("is defined", function() {
    expect(cookie.timeInOven).toBeDefined();
  });
});

describe("Cookie bake", function() {
  it ("should increase timeInOven", function() {
   cookie.bake();
   cookie.bake();
   cookie.bake();
   expect(cookie.timeInOven).toEqual(3);
 });
});

describe("Cookie state", function() {
  it ("should be jussssst riiight", function() {
    var cookie = new Cookie("circus", 3);
    cookie.bake();
    cookie.bake();
    cookie.bake();
    expect(cookie.getState()).toEqual('just_right');
  });
});

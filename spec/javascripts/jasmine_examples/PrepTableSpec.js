describe("PrepTable batch", function() {
  it ("should contain snickerdoodles", function() {
    var snickerdoodle = new Cookie("snickerdoodle", 5);
    PrepTable.addCookie(snickerdoodle);
    expect(PrepTable.batch).toContain(snickerdoodle);
  });
});

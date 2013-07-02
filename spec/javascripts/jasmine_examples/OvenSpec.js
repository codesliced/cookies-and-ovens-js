describe("Oven cookies", function() {
  it ("should contain snickerdoodle", function() {
    var snickerdoodle = new Cookie("snickerdoodle", 5);
    PrepTable.batch.push(snickerdoodle);
    moveFromPrepToOven(snickerdoodle.timeStamp);
    expect(Oven.cookies).toContain(snickerdoodle);
  });
});

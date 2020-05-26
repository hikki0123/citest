async function wait(sec) {
  await new Promise(resolve => setTimeout(resolve, sec*1000));
}
//    await wait(3);

describe("group 1", () => {
  test("case 1", function(){
    console.log("1-1-1");
    expect(1).toBe(1);
    expect(1).toBe(1);
  });
  test("case 2", function(){
    console.log("1-1-2");
    expect(1).toBe(1);
    expect(2).toBe(1);
  });
});

describe("group 2", () => {
  test("case 3", function(){
    console.log("1-2-1");
    expect(2).toBe(1);
    expect(1).toBe(1);
  });
  test("case 4", function(){
    console.log("1-2-2");
    expect(2).toBe(1);
    expect(2).toBe(1);
  });
});


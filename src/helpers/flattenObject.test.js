import flattenObject from "@/helpers/flattenObject";
describe("flattenObject", () => {
  it("should flatten the object", () => {
    const testObj = {
      abc: 1,
      cba: {
        cba: 2,
      },
    };
    const expectedOutput = { abc: 1, cba: 2 };
    const result = flattenObject(testObj);
    expect(result).toEqual(expectedOutput);
  });
});

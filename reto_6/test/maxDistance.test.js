const maxDistance = require("../maxDistance");

describe("decode", () => {


	test("To Be Number", () => {
		const result = maxDistance('>');
    expect(typeof result).toBe("number")
	});

  test("Output should be 1", () => {
		const result = maxDistance('><*><');
    expect(result).toBe(1)
	});

  test("Output should be 3", () => {
		const result = maxDistance('>>>*<<*');
    expect(result).toBe(3)
	});

  test("Output should be 2", () => {
		const result = maxDistance('><>>*<<<');
    expect(result).toBe(2)
	});
});

const cyberReindeer = require("../cyberReindeer");

describe("decode", () => {
	test("test with 7 times", () => {
		const result = cyberReindeer('S.|.|.', 7);
		expect(result).toEqual([
			"S.|.|.",
			".S|.|.",
			".S|.|.",
			".S|.|.",
			".S|.|.",
			"..S.*.",
			"..*S*."
		]
		);
	});

	test("test with 10 times", () => {
		const result = cyberReindeer('S..|...|..', 10);
		expect(result).toEqual([
			"S..|...|..",
			".S.|...|..",
			"..S|...|..",
			"..S|...|..",
			"..S|...|..",
			"...S...*..",
			"...*S..*..",
			"...*.S.*..",
			"...*..S*..",
			"...*...S.."
		]);
	});
});

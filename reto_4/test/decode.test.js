const decode = require("../decode");

describe("decode", () => {
	describe("decode", () => {
		test("Decodes a simple message", () => {
			const result = decode("hello (dlrow)");
			expect(result).toBe("hello world");
		});

		test("Handles nested parentheses", () => {
			const result = decode("sa(u(cla)atn)s");
			expect(result).toBe("santaclaus");
		});

		test("Handles empty parentheses", () => {
			const result = decode("a()b");
			expect(result).toBe("ab");
		});

		test("Handles consecutive parentheses", () => {
			const result = decode("(olleh) (dlrow)");
			expect(result).toBe("hello world");
		});
	});
});

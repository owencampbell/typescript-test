import "jasmine";
import { Fibonacci } from "./fibonacci";

describe("Fibonacci", () => {
    it("value at position 1 is 1", () => {
        const fibonacci = new Fibonacci();
        expect(fibonacci.getValue(1)).toBe(1);
    });

    it("value at position 2 is 1", () => {
        const fibonacci = new Fibonacci();
        expect(fibonacci.getValue(2)).toBe(1);
    });

    it("value at position 10 is 34", () => {
        const fibonacci = new Fibonacci();
        expect(fibonacci.getValue(10)).toBe(34);
    });
});
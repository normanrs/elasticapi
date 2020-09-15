import { find71937 } from "../search.js";

describe("get71937()", () => {
    it("should return record", () => {
        expect(find71937()).toEqual('1600208373 22:19:33 100');
    });
});
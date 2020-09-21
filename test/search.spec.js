const search = require('../search.js');

describe("returnDate", () => {
    it("should return a date value", () => {
        expect.anything(search.returnDate());
    });
});

describe("getCount()", () => {
    it("should return record", () => {
        expect.anything(search.getCount());
    });
});


describe("LamontData()", () => {
    it("should return record", () => {
      (async () => {
        const result = await search.getLamont()
        const city = result.hits.hits[0]._source.City
        expect(city).equals('Lamont')
      })()
    });
});
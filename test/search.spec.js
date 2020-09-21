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
        const city = await search.getLamont().hits.hits[0]._source.City
        expect(city).equals('Lamont')
      })()
    });
});
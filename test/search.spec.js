const search = require('../search.js');

describe("getCount()", () => {
    it("should return record", () => {
      (async () => {
        const result = await search.getCount()
        expect(result).contains('100')
      })()
    });
});


describe("LamontData()", () => {
    it("should return Lamont", () => {
      (async () => {
        const city = await search.getLamont().hits.hits[0]._source.City
        expect(city).equals('Lamont')
      })()
    });
});
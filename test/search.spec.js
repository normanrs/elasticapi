const search = require('../search.js');
const returnDate = search.returnDate;
const getCount = search.getCount;
const getLamont = search.getLamont;

describe("returnDate", () => {
    it("should return a date value", () => {
        expect.anything(returnDate());
    });
});

describe("getCount()", () => {
    it("should return record", () => {
        expect.anything(getCount());
    });
});

describe("getLamont()", () => {
    it("should return record", () => {
        expect.anything(getLamont());
    });
});

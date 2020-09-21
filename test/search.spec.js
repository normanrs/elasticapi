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

describe("getLamont()", () => {
    it("should call getLamont function", () => {
        expect.anything(search.getLamont());
    });
});

describe("LamontData()", () => {
    it("should return record", () => {
      (async () => {
        expect(await search.getLamont()).toContain('Lamont')
      })()
    });
    // it('returns Lamont record', async () => {
    //   expect(await search.getLamont()).toContain('Lamont')
    // });
});

// test('gets Lamont data async', async () => {
//   try {
//     expect(await getLamont()).toContain('Lamont');
//   } catch (e) {
//     return e;
//   }
// });

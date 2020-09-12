var app = require("../src/server/index.js");
var request = require("supertest");
const nock = require("nock");

describe("Gets the geoNames endpoint", function () {
  describe("Success", function () {
    it("Should return geoNames location JSON if valid", async function () {
      const mockResponse = {
        totalResultsCount: 2,
        geonames: [
          {
            adminCode1: "72",
            lng: "15.00835",
            geonameId: 3080231,
            toponymName: "Zgorzelec",
            countryId: "798544",
            fcl: "P",
            population: 33247,
            countryCode: "PL",
            name: "Zgorzelec",
            fclName: "city, village,...",
            adminCodes1: {
              ISO3166_2: "02",
            },
            countryName: "Poland",
            fcodeName: "seat of a second-order administrative division",
            adminName1: "Lower Silesia",
            lat: "51.14942",
            fcode: "PPLA2",
          },
          {
            adminCode1: "86",
            lng: "17.88188",
            geonameId: 3080230,
            toponymName: "Zgorzelec",
            countryId: "798544",
            fcl: "P",
            population: 0,
            countryCode: "PL",
            name: "Zgorzelec",
            fclName: "city, village,...",
            adminCodes1: {
              ISO3166_2: "30",
            },
            countryName: "Poland",
            fcodeName: "populated place",
            adminName1: "Greater Poland",
            lat: "51.14915",
            fcode: "PPL",
          },
        ],
      };

      nock("http://api.geonames.org")
        .get(
          `/searchJSON?name_equals=Zgorzelec&featureClass=P&maxRows=20&username=${process.env.GEONAMES_USERNAME}`
        )
        .reply(200, mockResponse);

      const res = await request(app).get("/geoNames?formText=Zgorzelec");
      const mockResponseString = JSON.stringify(mockResponse);
      expect(res.text).toEqual(mockResponseString);
    });
  });
});

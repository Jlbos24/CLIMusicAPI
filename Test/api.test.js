const axios = require("axios");
const { findArtist, getTracksByArtistID } = require("../Model/model.js");

describe("GET Artists", () => {
  test("When passed a valid artist, function returns an Object with key id", async () => {
    const arg = "eminem";
    const input = await findArtist(arg);
    expect(arg).toBeString();
    expect(input).toContainKey("id");
    expect(input).toBeObject();
  });
  test("If passed a query with no results, function return a prompt to try again", async () => {
    const arg = "invalid24";
    const input = await findArtist(arg);
    expect(arg).toBeString();
    expect(input).toEqual("Not found please try again");
  });
  test("If passed an invalid query data type, function returns prompt to enter a valid Artist Name", async () => {
    const input = await findArtist(999);
    expect(input).toEqual("Please enter an valid artist name");
  });
});
describe.only("GET Tracks for Artist", () => {
  test("When passed a valid id, function returns an array with tracks", async () => {
    const arg = "b95ce3ff-3d05-4e87-9e01-c97b66af13d4";
    const input = await getTracksByArtistID(
      "b95ce3ff-3d05-4e87-9e01-c97b66af13d4"
    );
    expect(arg).toBeString();
    expect(input).toBeArray();
    expect(input[0]).toContainKey("title");
  });
});

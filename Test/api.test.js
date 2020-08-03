const {
  findArtist,
  getTracksByArtistID,
  getLyrics,
} = require("../Model/model.js");

describe("GET Artists", () => {
  test("When passed a valid artist, function returns an Object with key id", async () => {
    const arg = "eminem";
    const outcome = await findArtist(arg);
    expect(arg).toBeString();
    expect(outcome).toContainKey("id");
    expect(outcome).toBeObject();
  });
  test("If passed a query with no results, function return a prompt to try again", async () => {
    const arg = "invalid24";
    const outcome = await findArtist(arg);
    expect(arg).toBeString();
    expect(outcome).toEqual("Not found please try again");
  });
  test("If passed an invalid query data type, function returns prompt to enter a valid Artist Name", async () => {
    const outcome = await findArtist(999);
    expect(outcome).toEqual("Please enter an valid artist name");
  });
});
describe("GET Tracks for Artist", () => {
  test("When passed an empty argument for id, function returns a prompt", async () => {
    const arg = "";
    const outcome = await getTracksByArtistID(arg);
    expect(arg).toBeString();
    expect(outcome).toBe("Make sure the artist exists or try again");
  });
  test("When passed a valid id, function returns an array with tracks", async () => {
    const arg = "b95ce3ff-3d05-4e87-9e01-c97b66af13d4";
    const outcome = await getTracksByArtistID(arg);
    expect(arg).toBeString();
    expect(outcome).toBeArray();
    expect(outcome).toHaveLength(100);
  });
});
describe("Get Lyrics for a given Track List", () => {
  test("When passed an empty track list, function returns a prompt", async () => {
    const argArtist = "Eminem";
    const argList = [];
    const outcome = await getLyrics(argArtist, argList);
    expect(argList).toBeArray();
    expect(argArtist).toBeString();
    expect(outcome).toBe("There is no track list");
  });
  test("When passed an empty string as Artist, function returns a prompt", async () => {
    const argArtist = "";
    const argList = ["Lose Yourself"];
    const outcome = await getLyrics(argArtist, argList);
    expect(argList).toBeArray();
    expect(argArtist).toBeString();
    expect(outcome).toBe("Make sure the artist exists or try again");
  });
  test("When passing a single track, function returns an array with track lyrics", async () => {
    const argArtist = "Meat Loaf";
    const argList = ["Bat Out of Hell"];
    const outcome = await getLyrics(argArtist, argList);
    expect(argList).toBeArray();
    expect(argArtist).toBeString();
    expect(outcome).toBeArray();
    expect(outcome).toHaveLength(1);
  });
  test("When passing multiple tracks, function returns an array with track lyrics", async () => {
    const argArtist = "Meat Loaf";
    const argList = ["Bat Out of Hell", "Bad Attitude", "Heaven Can Wait"];
    const outcome = await getLyrics(argArtist, argList);
    expect(argList).toBeArray();
    expect(argArtist).toBeString();
    expect(outcome).toBeArray();
    expect(outcome).toHaveLength(3);
  });
});

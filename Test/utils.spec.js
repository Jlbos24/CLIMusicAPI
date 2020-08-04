const { tracksAveLength } = require("../Utils/utils.js");

describe("Get Average Track Length", () => {
  test("When passed an empty array of tracks, function prompts user with message", async () => {
    const arg = [];
    const outcome = await tracksAveLength(arg);
    expect(outcome).toBeString();
    expect(outcome).toEqual("Statistics unavailable for this Artist");
  });
  test("When passed an array of lyrics of a single track, function returns number of words in the song", async () => {
    const arg = ["I will do anything for love, but I wont do that"];
    const outcome = await tracksAveLength(arg);
    expect(outcome).toBeNumber();
    expect(outcome).toEqual(11);
  });
  test("When passed an array of lyrics of multiple tracks, function returns number of words in the song", async () => {
    const arg = [
      "I will do anything for love, but I wont do that",
      "Lose yourself in the music,the moment, never let it go",
      "We are the champions my friend",
    ];
    const outcome = await tracksAveLength(arg);
    expect(outcome).toBeNumber();
    expect(outcome).toEqual(9);
  });
});

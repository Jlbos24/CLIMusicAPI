const { tracksAveLength } = require("../Utils/utils.js");

describe("Get Average Track Length", () => {
   test("When passed an empty array of tracks, function prompts user with message", async () => {
      const arg = [];
      const outcome = await tracksAveLength(arg);
      expect(outcome).toBeString();
      expect(outcome).toEqual("Statistics unavailable for this Artist");
   });
   test("When passed an array of lyrics of a single track, function returns number of words in the song", async () => {
      const arg = [
         [
            "I",
            "will",
            "do",
            "anything",
            "for",
            "love,",
            "but",
            "I",
            "wont",
            "do",
            "that",
         ],
      ];
      const outcome = await tracksAveLength(arg);
      expect(outcome).toBeArray();
      expect(outcome).toEqual([11, 0, 8, 1]);
   });
   test("When passed an array of lyrics of multiple tracks, function returns number of words in the song", async () => {
      const arg = [
         [
            "I",
            "will",
            "do",
            "anything",
            "for",
            "love,",
            "but",
            "I",
            "wont",
            "do",
            "that",
         ],
         [
            "I",
            "will",
            "do",
            "anything",
            "for",
            "love,",
            "but",
            "I",
            "wont",
            "do",
            "that",
         ],
         [
            "I'll",
            "will",
            "do",
            "anything",
            "for",
            "love,",
            "but",
            "I'll",
            "wont",
            "do",
            "that",
            "I'll",
            "will",
            "do",
            "anything",
            "for",
            "love,",
            "but",
            "I'll",
            "wont",
            "do",
            "that",
         ],
      ];
      const outcome = await tracksAveLength(arg);
      expect(outcome).toBeArray();
      expect(outcome).toEqual([15, 0, 8, 2]);
   });
   test("When passed an array of lyrics of an undefined track(no lyrics), function returns number of words in the song", async () => {
      const arg = [undefined];
      const outcome = await tracksAveLength(arg);
      expect(outcome).toBeArray();
      expect(outcome).toEqual([0, 1, 0, 0]);
   });
});

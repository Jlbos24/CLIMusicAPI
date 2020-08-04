// Calculate Average words per song by artist
exports.tracksAveLength = (list) => {
  if (!list.length) return "Statistics unavailable for this Artist";

  let wordCount = 0;
  let lyricSplit = [];

  // split each word in a track, produces nested arrays for each track
  list.forEach((lyric) => {
    lyricSplit.push(lyric.split(" "));
  });
  // calculate sum of the average of each nested array by the length of parent array
  lyricSplit.forEach((word) => {
    wordCount += word.length / list.length;
  });
  return wordCount;
};

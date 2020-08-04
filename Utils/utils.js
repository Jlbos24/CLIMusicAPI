// Calculate Average words per song by artist
exports.tracksAveLength = (list) => {
  if (!list.length) return "Statistics unavailable for this Artist";

  let wordCount = 0;
  let lyricSplit = [];

  list.forEach((lyric, i) => {
    lyricSplit.push(lyric.split(" "));
  });

  lyricSplit.forEach((word) => {
    wordCount += word.length / list.length;
  });
  return wordCount;
};

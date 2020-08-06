// Calculate Average words per song by artist
exports.tracksAveLength = (list) => {
   if (!list.length) return "Statistics unavailable for this Artist";

   let average = 0;
   let wordCount = 0;
   let validLyrics = [];
   let errorCount = 0;
   let maxWord = 0;
   let minWord = 0;

   // calculate sum of the average of each nested array by the length of parent array
   list.forEach((word) => {
      // if word is undefined we exclude it from the calculation - undefined will be
      if (word !== undefined) {
         minWord = word[0].length;
         validLyrics.push(word);
         wordCount += word.length;

         // calculate Max Word & Min Word
         word.forEach((elem) => {
            if (minWord > elem.length) {
               minWord = elem.length;
            }
            if (elem.length > maxWord) {
               maxWord = elem.length;
            }
         });
      }
      // indicate how many songs we could not get lyrics for
      if (word === undefined) {
         errorCount += 1;
      }
   });

   // Conditional to ensure validLyrics has a length before calculations
   if (validLyrics.length) {
      average += wordCount / validLyrics.length;
   }

   return [Math.round(average), errorCount, maxWord, minWord];
};

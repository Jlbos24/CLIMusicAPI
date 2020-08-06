#!/usr/bin/env node

const {
   findArtist,
   getTracksByArtistID,
   getLyrics,
} = require("../Model/model.js");
const { tracksAveLength } = require("../Utils/utils.js");

//Immediately-invoked Function Expression to get lyric data for an artist
(exports.getLyricData = async () => {
   // assign cli input to artist variable loop over to take in all arguments
   let artist = "";

   for (let j = 2; j < process.argv.length; j++) {
      artist = artist + " " + process.argv[j];
   }
   artist = artist.trim();
   // check that an artist name has been entered
   if (artist === "") {
      console.log("Please Enter in an Artist Name");
   } else {
      try {
         // Async/Await handle asynchronous nature of HTTP requests
         const data = await findArtist(artist);
         const tracks = await getTracksByArtistID(data.id);

         // Promise.all waits for promises to be resolved before returning value
         const allLyrics = await Promise.all(
            tracks.map(async (track) => {
               return await getLyrics(artist, track)
                  .then((lyrics) => {
                     if (!lyrics.includes("Error")) {
                        return lyrics.split(" ");
                     }
                  })
                  .catch((error) => {
                     console.log(
                        "Error Fetching Lyrics - Please Try Again " + error
                     );
                     return error;
                  });
            })
         );

         const [average, errorCount, maxWord, minWord] = await tracksAveLength(
            allLyrics
         );

         console.log(
            "The average number of words per song by " +
               artist +
               " is " +
               average +
               "." +
               "The largest word is " +
               maxWord +
               " long and the shortest word is " +
               minWord +
               " long."
         );
         console.log(
            "There are " + errorCount + " songs with unavailable lyrics"
         );
      } catch (error) {
         console.log("Error - Please Try Again " + error);
         return error;
      }
   }
})();

#!/usr/bin/env node

const {
  findArtist,
  getTracksByArtistID,
  getLyrics,
} = require("../Model/model.js");
const { tracksAveLength } = require("../Utils/utils.js");

const getLyricData = () => {
  const artist = process.argv[2]; // assign cli input to constant artist variable

  // Promise chaining to handle asynchronous process of axios requests from api's
  findArtist(artist)
    .then((data) => {
      getTracksByArtistID(data.id)
        .then((tracks) => {
          getLyrics(artist, tracks)
            .then((lyrics) => {
              return tracksAveLength(lyrics);
            })
            // catching errors for each promise function
            .catch((error) => {
              console.log("Error - Please Try Again " + error);
              return error;
            });
        })
        .catch((error) => {
          console.log("Error - Please Try Again " + error);
          return error;
        });
    })
    .catch((error) => {
      console.log("Error - Please Try Again " + error);
      return error;
    });
};

getLyricData();

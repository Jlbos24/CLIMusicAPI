#!/usr/bin/env node

const {
  findArtist,
  getTracksByArtistID,
  getLyrics,
} = require("../Model/model.js");

// ADDD COMMENTS - why async, why tests, why errors etc
// CLEAN UP FUNCTIONS
// MAKE SURE TESTS ARE GOOD
// WHERE ELSE COULD I IMPROVE

const getLyricData = async () => {
  try {
    const artist = process.argv[2]; // assign cli input to constant artist variable

    let data = await findArtist(artist);
    let tracks = await getTracksByArtistID(data.id);
    let lyrics = await getLyrics(artist, tracks);
  } catch (error) {
    const { status, data } = error.response;
    const errMsg = "HTTP Error - " + data.error + " " + status;
    return errMsg;
  }
};

getLyricData();

#!/usr/bin/env node

const { findArtist, getTracksByArtistID } = require("../Model/model.js");

// ADDD COMMENTS
// CLEAN UP FUNCTIONS
// MAKE SURE TESTS ARE GOOD
// WHERE ELSE COULD I IMPROVE

const getLyricData = async () => {
  try {
    const artist = process.argv[2];

    let data = await findArtist(artist);
    console.log(data.id);
    let tracks = await getTracksByArtistID(data.id);
  } catch (error) {
    console.log(error);
  }
};

getLyricData();

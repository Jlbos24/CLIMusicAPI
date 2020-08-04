// module to handle http requests from external api's
const axios = require("axios");

// Get Request to fetch Artist ID
exports.findArtist = async (artist) => {
  if (typeof artist !== "string") return "Please enter an valid artist name";
  try {
    let response = await axios.get(
      `https://musicbrainz.org/ws/2/artist?query=artist:${artist}&fmt=json`
    );
    let { artists } = response.data;

    if (!artists.length) return "Not found please try again";
    else return artists[0];
  } catch (error) {
    if (error.code) return "Error " + error.code;
    else {
      const { status, data } = error.response;
      const errMsg = "HTTP Error - " + data.error + " " + status;
      return errMsg;
    }
  }
};

// Get Request to fetch all tracks by Artist ID - limit of tracks to 100 in application/json header
exports.getTracksByArtistID = async (id) => {
  if (!id) return "Make sure the artist exists or try again";
  try {
    let response = await axios.get(
      `http://musicbrainz.org/ws/2/work?artist=${id}&limit=100&fmt=json`
    );
    let { works } = response.data;
    const tracksList = [];
    works.forEach((track) => {
      tracksList.push(track.title);
    });

    return tracksList;
  } catch (error) {
    if (error.code) return "Error " + error.code;
    else {
      const { status, data } = error.response;
      const errMsg = "HTTP Error - " + data.error + " " + status;
      return errMsg;
    }
  }
};

// Get Request to fetch all lyrics for selected track list

exports.getLyrics = async (artist, tracksList) => {
  if (!tracksList.length) return "There is no track list";
  if (!artist || typeof artist !== "string") {
    return "Make sure the artist exists or try again";
  }

  try {
    // Promise.all method waits for each lyric request to be resolved before returning trackLyrics Array
    let trackLyrics = await Promise.all(
      tracksList.map(async (track) => {
        let response = await axios.get(
          `https://api.lyrics.ovh/v1/${artist}/${track}`
        );

        let lyrics = response.data.lyrics;
        return lyrics;
      })
    );
    return trackLyrics;
  } catch (error) {
    if (error.code) return "Error " + error.code;
    else {
      const { status, data } = error.response;
      const errMsg = "HTTP Error - " + data.error + " " + status;
      return errMsg;
    }
  }
};

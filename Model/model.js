// module to handle http requests from external api's
const axios = require("axios");

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
    const { status, data } = error.response;
    const errMsg = "HTTP Error - " + data.error + " " + status;
    return errMsg;
  }
};

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
    const { status, data } = error.response;
    const errMsg = "HTTP Error - " + data.error + " " + status;
    return errMsg;
  }
};

exports.getLyrics = async (artist, tracksList) => {
  if (!tracksList.length) return "There is no track list";
  if (!artist || typeof artist !== "string")
    return "Make sure the artist exists or try again";

  try {
    let trackLyrics = [];
    tracksList.forEach((track) => {
      //   console.log(track);
      let response = axios.get(`https://api.lyrics.ovh/v1/${artist}/${track}`);
      // let { lyrics } = response.data;
      console.log(response, "response");
    });
    console.log(trackLyrics, "tracks");
    return trackLyrics;
  } catch (error) {
    console.log(error, "error log");
    // const { status, data } = error.response;
    // const errMsg = "HTTP Error - " + data.error + " " + status;
    // return errMsg;
    return error;
  }
};

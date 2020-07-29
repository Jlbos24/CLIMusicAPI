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
    return error;
  }
};

exports.getTracksByArtistID = async (id) => {
  //b95ce3ff-3d05-4e87-9e01-c97b66af13d4
  try {
    let response = await axios.get(
      `http://musicbrainz.org/ws/2/work?artist=${id}&limit=100&fmt=json`
    );
    let { works } = response.data;
    const tracksList = [];
    works.forEach((track) => {
      tracksList.push(track.title);
    });
    console.log(tracksList, "tracks");

    //return works;
  } catch (error) {
    console.log(error);
    return error;
  }
};

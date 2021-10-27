import axios from "axios";

export default {
  // Gets all scores
  getHighScores: function() {
    return axios.get("/api/highscores");
  },
};

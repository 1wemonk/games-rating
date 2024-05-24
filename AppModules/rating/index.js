const config = require("./config.js");
const makeRatingFile = require("./rating-file.js");
const { createRating, updateRating } = require("./calculations.js");
module.exports = {
  config,
  makeRatingFile,
  createRating,
  updateRating
};
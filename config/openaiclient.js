require("dotenv").config({ path: "./config/.env" });
const Openai = require('openai');

const openai = new Openai({
  apiKey: process.env.OPENAI_API_KEY,
});

module.exports = openai;
const express = require("express");
const dbConnection = require("./config/database.js");
const dotenv = require("dotenv");
const urlRoute = require("./routes/url");
const URL = require("./models/url");
const base64url = require('base64url'); 
const crypto = require('crypto');

// Function to generate a short code
function generateShortCode(longUrl) {
   // Generate a random salt
   const salt = crypto.randomBytes(16).toString('hex');

   // Combine the long URL with the salt
   const data = longUrl + salt;

   // Calculate the hash
   const hash = crypto.createHash('sha256').update(data).digest('base64');

   // Take the first 6 characters of the hash as the short code
   return hash.replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '').slice(0, 6);
}

const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;

dbConnection();

app.use(express.json());

app.post("/api/shorten", async (req, res) => {
  console.log("inside uncustom");
  const body = req.body;
  if (!body.url) return res.status(400).json({ error: "url is required" });
  let isDuplicate = true;
  let newShortCode;
  while (isDuplicate) {
    newShortCode = generateShortCode(body.url);
    const existingShortCode = await URL.findOne({ shortId: newShortCode });
    if (!existingShortCode) {
      isDuplicate = false;
    }
    console.log(newShortCode);
  }
  // console.log(shortCode);
  await URL.create({
    shortId: newShortCode,
    redirectURL: body.url,
  });
  
  return res.json({ id: newShortCode });
});

app.post("/api/shorten/custom", async (req, res) => {
  console.log("inside custom");
  const body = req.body;
  if (!body.url) return res.status(400).json({ error: "url is required" });
  // const existingURL = await URL.findOne({ shortId: body.url });
  // if (existingURL) {
  //   return res.status(400).json({ error: "URL already exists" });
  // }
  // const shortID = shortid();
  // console.log(body.url);
  // const shortCode = generateShortCode(body.url);
  const existingShortCode = await URL.findOne({ shortId: body.customurl });
  if (existingShortCode) {
    return res.json({ error: "Custom URL already exists" });
  }
  // console.log(shortCode);
  await URL.create({
    shortId: body.customurl,
    redirectURL: body.url,
  });

  return res.json({ id: body.customurl });
});

app.get("/:code", async (req, res) => {
  const shortId = req.params.code;
  const entry = await URL.findOne({ shortId: shortId });
  if (!entry) {
    return res.status(404).json({ error: "URL not found" });
  }
  return res.json({ redirectURL: entry.redirectURL });
});

app.listen(PORT, () => console.log(`Listening to port ${PORT}`));

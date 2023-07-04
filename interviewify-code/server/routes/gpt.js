const fs = require('fs');

const express = require('express');
const router = express.Router();

const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

router.post("/transcribe", async (req, res) => {
  const audioFile = fs.createReadStream('./audios/82sec.mp3');
  await openai.createTranscription(audioFile, "whisper-1")
    .then(response => {
      res.status(200).json(response.data.text)
    })
    .catch(err => res.status(400).send({ error: `❌ Transcription error: ${err}` }))
})

module.exports = router
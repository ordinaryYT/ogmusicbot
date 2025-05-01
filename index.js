require("dotenv").config(); // Load .env variables

var bot = require("discord-music-bot");

var serverName = process.env.SERVER_NAME;
var textChannelName = process.env.TEXT_CHANNEL_NAME;
var voiceChannelName = process.env.VOICE_CHANNEL_NAME;
var aliasesFile = process.env.ALIASES_FILE;
var botToken = process.env.BOT_TOKEN;

bot.run(serverName, textChannelName, voiceChannelName, aliasesFile, botToken);

// Express for Render port binding
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => res.send("Bot is running!"));
app.listen(port, () => console.log(`Listening on port ${port}`));

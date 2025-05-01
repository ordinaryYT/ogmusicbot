var bot = require("discord-music-bot");

var serverName = "Your server name here";
var textChannelName = "Your text channel name here (without #)";
var voiceChannelName = "Your voice channel name here";
var aliasesFile = "A file the bot will use to store your aliases";
var botToken = "Your bot token here";

// Run the bot
bot.run(serverName, textChannelName, voiceChannelName, aliasesFile, botToken);

// Add minimal web server for Render health check
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => res.send("Bot is running!"));
app.listen(port, () => console.log(`Listening on port ${port}`));

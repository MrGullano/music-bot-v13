const { Client, Collection } = require("discord.js");

const client = new Client({
    intents: 32767,
});
module.exports = client;

// Global Variables
client.commands = new Collection(-);
client.slashCommands = new Collection(-);
client.config = require("./config.json");

// Initializing the project
require("./handler")(client);

client.login(client.config.token);
client.login(ODg1MTc1Mjg4ODk0NDY0MDUy.YTjNug.PX8G2AQKHaEivga8XUWKWkAqMws);

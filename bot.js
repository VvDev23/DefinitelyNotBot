const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.channel.send('Hellk Loser what do you want!');
  	}
});

client.on('message', message => {
    if (message.content === 'bing') {
    	message.reply('Fuck!');
  	}
});

client.on('message', message => {
    if (message.content === 'help') {
    	message.channel.send('Hello what do you want!');
  	}
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    
    let botembed = new Discord.RichEmbed()
     .setTitle("Siri Commands")
     .setDescription("List of commands!")
     .setColor("#15f153")
     .setTimestamp()
     .addField("-ping", `Check to see if the bot is online!`)
     .addField("-tempmute [@Username] [Length s,m,d]", `Moderation Tool, Temporarily mute a user from the discord!`)
     .addField("-kick [@Username] [Reason]", `Moderation Tool, Kick user from the discord!`)
     .addField("-ban [@Username] [Reason]", `Moderation Tool, Ban user from the discord!`)
     .addField("-report [@Username] [Reason]", `Use this command to report players!`)
     .addField("-serverinfo", `Gives you information about this server!`)
     .addField("-botinfo", `Gives you information about this bot!`)
     .addField("-clear [Amount]", `Moderation Tool, Clear messages!`)
     .addField("-say [Message]", `Moderation Tool, Say messages threw the bot!`)
     .setFooter("Siri Bot", "https://upload.wikimedia.org/wikipedia/en/8/8e/AppleSiriIcon2017.png");

     message.delete(0);

     return message.channel.send(botembed);

}

module.exports.help = {
    name: "commands"
}
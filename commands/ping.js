const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    
    let botembed = new Discord.RichEmbed()
    .setColor("#15f153")
    .addField("The Bot Is Online!", `Contact Matt D. For Bot Support!`)
    .setTimestamp()
    .setFooter("Siri Bot", "https://upload.wikimedia.org/wikipedia/en/8/8e/AppleSiriIcon2017.png");

    message.delete(0);
    
    return message.channel.send(botembed);

}

module.exports.help = {
    name: "ping"
}
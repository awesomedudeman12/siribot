const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    
    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setColor("#15f153")
    .setTitle("Server Information")
    .setThumbnail(sicon)
    .addField("Server Name :", message.guild.name)
    .setTimestamp()
    .addField("Created On :", message.guild.createdAt)
    .addField("You Joined :", message.member.joinedAt)
    .setFooter("Siri Bot", "https://upload.wikimedia.org/wikipedia/en/8/8e/AppleSiriIcon2017.png")
    .addField("Total Members :", message.guild.memberCount)
    .addField("Server Owner :", message.guild.owner);

    message.delete(0)

    return message.channel.send(serverembed);
}


module.exports.help = {
    name: "serverinfo"
}
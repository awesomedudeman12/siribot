const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    
    let bicon = bot.user.displayAvatarURL;
     let botembed = new Discord.RichEmbed()
     .setColor("#15f153")
     .setTitle("Siri Bot Information")
     .setThumbnail(bicon)
     .addField("Name :", "Siri Bot")
     .addField("Created On :", bot.user.createdAt)
     .addField("Made By :", "Matt D.")
     .setFooter("Siri Bot", "https://upload.wikimedia.org/wikipedia/en/8/8e/AppleSiriIcon2017.png")
     .setTimestamp()

     message.delete(0);

     return message.channel.send(botembed);

}

module.exports.help = {
    name: "botinfo"
}
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if(!message.member.roles.some(r=>["Head Administrator", "Moderator", "Administrator", "Owner", "Co-Owner"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to use this!");
    const sayMessage = args.join(" ");
    message.delete().catch();

    let testMes = new Discord.RichEmbed()
    .setTitle(sayMessage)
    .setColor("#15f153")
    .setTimestamp()
    .setFooter("Siri Bot", "https://upload.wikimedia.org/wikipedia/en/8/8e/AppleSiriIcon2017.png")
    
    message.channel.send(testMes);

}

module.exports.help = {
    name: "say"
}
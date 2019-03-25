const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    
    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send("Can't find user.");
    let kReason = args.join(" ").slice(22);
    if(!message.member.roles.some(r=>["Head Administrator", "Moderator", "Administrator", "Owner", "Co-Owner"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to use this!");
    if(kUser.hasPermission("KICK_MEMBERS")) return message.channel.send("That person can't be kicked!");

    let kickEmbed = new Discord.RichEmbed()
    .setTitle("New Kick")
    .setColor("#15f153")
    .addField("Kicked User :", `${kUser} with ID ${kUser.id}`)
    .addField("Kicked By :", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Kicked In :", message.channel)
    .addField("Time :", message.createdAt)
    .addField("Reason :", kReason);

    let kickChannel = message.guild.channels.find(`name`, "kick-ban-logs");
    if(!kickChannel) return message.channel.send("Couldn't find kick-ban-logs channel.");

    message.guild.member(kUser).kick(kReason)
    message.delete().catch(O_o=>{});
    kickChannel.send(kickEmbed);

}

module.exports.help = {
    name: "kick"
}
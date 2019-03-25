const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!bUser) return message.channel.send("Can't find user.");
        let bReason = args.join(" ").slice(22);
        if(!message.member.roles.some(r=>["Head Administrator", "Administrator", "Owner", "Co-Owner"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to use this!");
        if(bUser.hasPermission("BAN_MEMBERS")) return message.channel.send("That person can't be kicked!");
    
        let banEmbed = new Discord.RichEmbed()
        .setTitle("New Ban")
        .setColor("#15f153")
        .addField("Banned User :", `${bUser} with ID ${bUser.id}`)
        .addField("Banned By :", `<@${message.author.id}> with ID ${message.author.id}`)
        .addField("Banned In :", message.channel)
        .addField("Time :", message.createdAt)
        .addField("Reason :", bReason);
    
        let banChannel = message.guild.channels.find(`name`, "kick-ban-logs");
        if(!banChannel) return message.channel.send("Couldn't find kick-ban-logs channel.");

        message.guild.member(bUser).ban(bReason)
        message.delete().catch(O_o=>{});
        banChannel.send(banEmbed);

}

module.exports.help = {
    name: "ban"
}
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if(!message.member.roles.some(r=>["Head Administrator", "Moderator", "Administrator", "Owner", "Co-Owner"].includes(r.name)) )
    return message.reply("Sorry, you don't have permissions to use this!");
  if(!args[0]) return message.channel.send("Specify a number.");
  message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(`Cleared ${args[0]} messages.`).then(msg => msg.delete(2000));
});

}

module.exports.help = {
  name: "clear"
}
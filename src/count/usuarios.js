
const Discord = require('discord.js');

exports.run = async(bot, message, args) => {

   if(message.author.id == '302563501183074315') {

    let membros = bot.guilds.get('679510706063671337')
    membros.channels.get('688413015325802529').setName("Usuários: " + bot.users.size + "")
     
   }else {
       message.channel.send('Comando exclusivo apenas para os CEOs do BOT.')
    }
}


exports.help = {
  nome : null,
  descricao: null
}
const Discord = require('discord.js')
const anuncio = require('../../anuncio.json')

exports.run = async(bot, message, args) => {

    let convites = Math.floor((Math.random() * 20) + 0);

    /*if (convites == 14) {
        message.reply(`${anuncio.anuncio}`)
    } else if (convites == 9) {
        message.reply(`${anuncio.anuncio}`)
    } else if (convites == 4) {
        message.reply(`${anuncio.anuncio}`)
    } */

    const helpPanel = new Discord.RichEmbed();

    let Avatar = message.guild.iconURL;

    helpPanel.setThumbnail(Avatar)
    helpPanel.setAuthor(message.member.displayName, message.member.user.avatarURL);
    helpPanel.setTitle("Adquirir vip no servidor.")
    helpPanel.setDescription("\nOlá, ajude o servidor comprando vip. ❤ \n🙅 Para mais detalhes acesse o nosso site. 😊\n\nSite: `em breve`")
    helpPanel.setFooter(`${bot.user.username}`, bot.user.displayAvatarURL);
    helpPanel.setColor("RANDOM");
    helpPanel.setTimestamp();
    message.channel.send(helpPanel);

}
exports.help = {
    nome: "Donate",
    descricao: "Esse comando serve para quem quiser fazer algum tipo de doação, compra de vips, cash etc... :)"
}
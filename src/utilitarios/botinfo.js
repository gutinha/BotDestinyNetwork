const Discord = require('discord.js');
const moment = require('moment');
moment.locale('pt-BR');
const fs = require('fs');
const config = require('../../config.json');
const discloud = require('discloud-status');
const anuncio = require('../../anuncio.json')

exports.run = (bot, message, args) => {

    let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
    if (!prefixes[message.guild.id]) {
        prefixes[message.guild.id] = {
            prefixes: config.prefix
        };
    }

    let r = discloud.ram(); // retorna o uso/total de RAM
    let ur = discloud.usoRam(); // dados do uso de RAM
    let tr = discloud.totalRam(); // dados do total de RAM disponível

    let dados = 'Dados não encontrados ';
    let coleta = r
    let Total = r ? coleta : dados;

    let dados1 = 'Dados não encontrados ';
    let coleta1 = ur
    let Total1 = ur ? coleta1 : dados1;

    let dados2 = 'Dados não encontrados';
    let coleta2 = tr
    let Total2 = tr ? coleta2 : dados2;
    let convites = Math.floor((Math.random() * 20) + 0);

    /*if (convites == 14) {
        message.reply(`${anuncio.anuncio}`)
    } else if (convites == 9) {
        message.reply(`${anuncio.anuncio}`)
    } else if (convites == 4) {
        message.reply(`${anuncio.anuncio}`)
    } */

    let embed = new Discord.RichEmbed()
    let prefix = prefixes[message.guild.id].prefixes;

    const ayy = bot.emojis.find(emoji => emoji.name === "informacao");

    message.delete(0)
    embed.setTitle(`Informações do(a) ${bot.user.username}`)
    embed.setDescription(`${ayy} Olá sou a **${bot.user.username}**, sou um Bot simples focado em ajudar a destiny network! Tenho várias funcionalidades, fui desenvolvido(a) em **Visual Studio Code**, **📚 Discord.js** (JavaScript).\nSempre estou inovando meus comandos, e sempre tentando dar o melhor de mim!\nCaso queria saber mais dos meus comandos, basta digitar **${prefix}help** para mais informações.`)
    embed.addField(`🌎 Sobre a ${bot.user.username} ❣ :`, `Servidores: \`${bot.guilds.size}\`\nCanais: \`${bot.channels.size}\`\nUsuários: \`${bot.users.size}\`\nComandos: \`${bot.commands.size}\``, true)
    embed.addField(`Criador:`, `:flag_br: <@${config.Owner}>`, true)
    embed.addField(`💿 Status da ${bot.user.username}: `, `Uso de dados: \`${Total1}\`\nUso de RAM: \`${Total}\`\nTotal de memória disponível: \`${Total2}\``)
        //embed.addField(`🖱 Links úteis:`, `\nDiscord Suporte: [Acessar o Suporte.](https://is.gd/pokeblack)`)
    embed.setFooter(`©️ Todos os direitos reservados ${bot.user.username}`, bot.user.avatarURL)
    embed.setTimestamp()
    embed.setColor("RANDOM")

    message.reply(embed)
        //.then(async message => {
        //await message.react('🇧🇷')
        //  await message.react('🇺🇸')
        //})
}


exports.help = {
    nome: "Botinfo",
    descricao: "Ver todas informações do bot."
}
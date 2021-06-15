const Discord = require("discord.js");
const fs = require('fs');
const config = require('../../config.json');
const moment = require('moment');

module.exports.run = async(bot, message, args) => {

    message.delete(1000).catch(O_o => {});


    let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
    if (!prefixes[message.guild.id]) {
        prefixes[message.guild.id] = {
            prefixes: config.prefix
        };
    }

    let prefix = prefixes[message.guild.id].prefixes;

    const menu0 = new Discord.RichEmbed()

    .setTitle('🚥 Menu')
        .setDescription(`Menu de ajuda do comando: **${message.content}**`)
        .addField('Comando:', `\`${message.content}\``)
        .addField('Tutorial:', `\`${prefix}reportar <Apelido In-game> <Motivo> <Prova>\``)
        .addField('Alternativas:', '\`Não informado.\`')
        .setColor('#6800e5')
        .setTimestamp()
        .setFooter(`${bot.user.username}`)


    function is_url(str) {
        let regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z00a1-ffff0-9]-*)*[a-z00a1ffff0-9]+)(?:\.(?:[a-z00a1-ffff0-9]-*)*[a-z00a1ffff0-9]+)*(?:\.(?:[a-z00a1-ffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
        return new RegExp(regexp).test(str);

    }

    const messageLink = message.content.split(" ");
    if (message.content === '.reportar') {
        return message.channel.send(menu0);
    }
    if (!is_url(messageLink[3])) {
        return message.reply("Você precisa colocar um link");
    }


    const dateCreated = moment(message.createdAt).utcOffset(-03)
    const ayy = bot.emojis.find(emoji => emoji.name === "destiny_bolsa");
    let reportEmbed = new Discord.RichEmbed()
        .setDescription("Nova denúncia")
        .setColor("#2ADCE5")
        .addField(":clipboard: Apelido In-game:", `${messageLink[1]}`)
        .addField("🔥 Quem acusou:", `${message.author} ID: ${message.author.id}`)
        .addField("📅 Dia:", dateCreated.format("DD/MM/YYYY LTS"))
        .addField(`${ayy} Motivo:`, messageLink[2])
        .addField(":detective: Prova:", messageLink[3]);



    let reportschannel = message.guild.channels.find(x => x.name === "reportes");
    if (!reportschannel) return message.channel.send(":x: | Não consegui achar o chat `reportes`.")
        .then(message => [
            message.delete(4000)
        ])


    message.delete().catch(O_o => {});
    reportschannel.send(reportEmbed);
}

exports.help = {
    nome: "Reportar",
    descricao: "Reportar jogadores para nossa equipe."
}
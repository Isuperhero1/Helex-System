const Discord = require('discord.js');
const Canvas = require('canvas')
const client = new Discord.Client();
const prefix = '&';
 
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`Moscow .`,"Mosc Every..")
  console.log('')
  console.log('')
  console.log('?[?????????????????????????????????????????????????????????????????]?')
  console.log(`[Start] ${new Date()}`);
  console.log('?[?????????????????????????????????????????????????????????????????]?')
  console.log('')
  console.log('?[????????????????????????????????????]?');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('?[????????????????????????????????????]?')
  console.log('')
  console.log('?[????????????]?')
  console.log(' Bot Is Online')
  console.log('?[????????????]?')
  console.log('')
  console.log('')
});

 
 const db = require('quick.db');
const giphy = require('giphy-api')();    
const googl = require('goo.gl');  
const translate = require('google-translate-api');  
const fs = require("fs");
const getYoutubeID = require('get-youtube-id');
const moment = require("moment");  
const { Client, Util } = require('discord.js');  
const UserBlocked = new Set();
const jimp = require('jimp');  
const math = require('math-expression-evaluator');
const stripIndents = require('common-tags').stripIndents;
const figlet = require('figlet');
const google = require('google-it');
const queue = new Map();
const zalgo = require('zalgolize');  
const fetchVideoInfo = require('youtube-info');
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");
const sql = require("sqlite");
 const dateFormat = require('dateformat');
 const pretty = require('pretty-ms')
,ti={}  
,spee={};
 






var guilds = {};
client.on('guildBanAdd', function(guild) {
            const rebellog = client.channels.find("name", "log"),
            Onumber = 3,
  Otime = 10000
guild.fetchAuditLogs({
    type: 22
}).then(audit => {
    let banner = audit.entries.map(banner => banner.executor.id)
    let bans = guilds[guild.id + banner].bans || 0 
    guilds[guild.id + banner] = {
        bans: 0
    }
      bans[guilds.id].bans += 1; 
if(guilds[guild.id + banner].bans >= Onumber) {
try {
let roles = guild.members.get(banner).roles.array();
guild.members.get(banner).removeRoles(roles);
  guild.guild.member(banner).kick();

} catch (error) {
console.log(error)
try {
guild.members.get(banner).ban();
  rebellog.send(`<@!${banner.id}>
ÍÂæá ÇáÚÈË ÈÇáÓíÑİÑ @everyone`);
guild.owner.send(`<@!${banner.id}>
ÍÂæá ÇáÚÈË ÈÇáÓíÑİÑ ${guild.name}`)
    setTimeout(() => {
 guilds[guild.id].bans = 0;
  },Otime)
} catch (error) {
console.log(error)
}
}
}
})
});
 let channelc = {};
  client.on('channelCreate', async (channel) => {
  const rebellog = client.channels.find("name", "log"),
  Oguild = channel.guild,
  Onumber = 3,
  Otime = 10000;
  const audit = await channel.guild.fetchAuditLogs({limit: 1});
  const channelcreate = audit.entries.first().executor;
  console.log(` A ${channel.type} Channel called ${channel.name} was Created By ${channelcreate.tag}`);
   if(!channelc[channelcreate.id]) {
    channelc[channelcreate.id] = {
    created : 0
     }
 }
 channelc[channelcreate.id].created += 1;
 if(channelc[channelcreate.id].created >= Onumber ) {
    Oguild.members.get(channelcreate.id).kick();
rebellog.send(`<@!${channelcreate.id}>
ÍÂæá ÇáÚÈË ÈÇáÓíÑİÑ @everyone`);
channel.guild.owner.send(`<@!${channelcreate.id}>
ÍÂæá ÇáÚÈË ÈÇáÓíÑİÑ ${channel.guild.name}`)
}
  setTimeout(() => {
 channelc[channelcreate.id].created = 0;
  },Otime)
  });

let channelr = {};
  client.on('channelDelete', async (channel) => {
  const rebellog = client.channels.find("name", "log"),
  Oguild = channel.guild,
  Onumber = 3,
  Otime = 10000;
  const audit = await channel.guild.fetchAuditLogs({limit: 1});
  const channelremover = audit.entries.first().executor;
  console.log(` A ${channel.type} Channel called ${channel.name} was deleted By ${channelremover.tag}`);
   if(!channelr[channelremover.id]) {
    channelr[channelremover.id] = {
    deleted : 0
     }
 }
 channelr[channelremover.id].deleted += 1;
 if(channelr[channelremover.id].deleted >= Onumber ) {
  Oguild.guild.member(channelremover).kick();
rebellog.send(`<@!${channelremover.id}>
ÍÂæá ÇáÚÈË ÈÇáÓíÑİÑ @everyone`);
channel.guild.owner.send(`<@!${channelremover.id}>
ÍÂæá ÇáÚÈË ÈÇáÓíÑİÑ ${channel.guild.name}`)
}
  setTimeout(() => {
 channelr[channelremover.id].deleted = 0;
  },Otime)
  });

client.on('message', msg => {
	var prefix = "$";
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;
  let command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = msg.content.split(" ").slice(1);

    if(command === "clear") {
        const emoji = client.emojis.find("name", "wastebasket")
    let textxt = args.slice(0).join("");
    if(msg.member.hasPermission("MANAGE_MESSAGES")) {
    if (textxt == "") {
        msg.delete().then
    msg.channel.send("***```Supply A Number ??```***").then(m => m.delete(3000));
} else {
    msg.delete().then
    msg.delete().then
    msg.channel.bulkDelete(textxt);
        msg.channel.send("```Cleard: " + textxt + "\n Messages```").then(m => m.delete(3000));
        }    
    }
}
});


client.on("message", message => {
	var prefix = "$";
 if (message.content === "=help") {
  const embed = new Discord.RichEmbed()  
      .setColor("#000000") 
      .setDescription(`
	  
	         Please Chose: 
			 
${prefix}help public ? ÇæÇãÑ ÚÇãÉ
${prefix}help admin ? ÇæÇãÑ ÇÏÇÑÉ ÇáÓíÑİÑ
			 
${prefix}help games ? ÇæÇãÑ ÇáÇáÚÇÈ
${prefix}help music ? ÇæÇãÑ ÇáãæÓíŞì

`)
   message.channel.sendEmbed(embed)
    
   }
   }); 
  

client.on("message", message => {
	var prefix = "$";
 if (message.content === "=help public") {
	 message.channel.send('**Êã ÇÑÓÇáß İí ÇáÎÇÕ** :mailbox_with_mail: ');
  const embed = new Discord.RichEmbed() 
      .setColor("#000000")
      .setDescription(`
			  ÇæÇãÑ ÚÇãÉ
?=allbots ~ áÚÑÖ ÌãíÚ ÇáÈæÊÇÊ Çáí ÈÇáÓíÑİÑ
?=server ~íÚÑÖ áß ãÚáæãÇÊ Úä ÇáÓíÑİÑ
?=bot ~ íÚÑÖ áß ßá ãÚáæãÇÊ ÇáÈæÊ
?=skin <name> ~ íÚÑÖ áß Óßäß ÈãÇíä ßÑÇİÊ
?=count ~ íÚÑÖ áß ÚÏÏ ÇáÇÔÎÇÕ ÈÇáÓíÑİÑ ÈÏæä ÈæÊÇÊ
?=invites ~ íÚÑÖ áß  ÚÏÏ ÇäİÇíÊÇÊß ÈÇáÓíÑİÑ 
?=invite-codes ~ íÚÑÖ áß ÑæÇÈØ ÇáÇäİÇíÊÇÊ Íßß İí ÇáÓíÑİÑ 
?=cal ~ Çáå ÍÇÓÈÉ
?=trans <language> <any thing> ~ íÊÑÌã áß Çáí ÊÈíå ãä Çí áÛÉ
?=short ~ íÎÊÕÑ áß ÑÇÈØ ßÈíÑ Çáì ÑÇÈØ ÕÛíÑ
?=tag ~ íßÊÈ áß ÇáßáãÉ ÈÔßá Ìãíá æßÈíÑ
?=google ~ ááÈÍË İí ŞæŞá Úä ØÑíŞ ÇáÏÓßæÑÏ
?=perms ~ íÚÑÖ áß ÈÑãÔäÇÊß ÈÇáÓíÑİÑ
?=za5 ~ íÒÎÑİ áß ßáãÉ Çæ ÌãáÉ
?=rooms ~ íÚÑÖ áß ßá ÇáÑæãÇÊ Çáí ÈÇáÓíÑİÑ ãÚ ÚÏÏåÇ
?=roles ~ íÚÑÖ áß ßá ÇáÑÇäßÇÊ ÈÇáÓíÑİÑ ÈÔßá Ìãíá
?=emojilist ~ íÚÑÖ áß ßá ÇáÇíãæÌíÇÊ Çáí ÈÇáÓíÑİÑ
?=say ~ íßÑÑ ÇáßáÇã Çáí ÊßÊÈæ
?=image ~ ÕæÑÉ ÇáÓíÑİÑ
?=members ~ íÚÑÖ áß ÚÏÏ ßá ÍÇáÇÊ ÇáÇÔÎÇÕ æÚÏÏ ÇáÈæÊÇÊ æÚÏÏ ÇáÇÔÎÇÕ
?=id ~ ãÚáæãÇÊ Úäß
?=bans ~ ÚÏÏ ÇáÇÔÎÇÕ ÇáãÈäÏÉ 
?=avatar ~ ÕæÑÊß Çæ ÕæÑÉ Çáí ÊãäÔäæ
?=embed ~ íßÑÑ Çáí ÊŞæáæ ÈÔßá Íáæ
?=emoji <any things> ~ áÊÍæíá Çí ßáãå ÊŞæáåÇ Çáí ÇíãæÌí
?=inv ~ áÏÚæÉ ÇáÈæÊ Çáì ÓíÑİÑß
?=support ~ ÓíÑİÑ ÇáÏÚã
?=contact ~ ÇÑÓÇá ÇŞÊÑÇÍ Çæ áãÑÇÓáÉ ÕÇÍÈ ÇáÈæÊ
?=topinv áÚÑÖ ÇßËÑ ÇáÇÚÖÇÁ ÇáĞíä íÏÚæä

`)
   message.author.sendEmbed(embed)
    
   }
   }); 
   
   client.on("message", message => {
	var prefix = "$";
 if (message.content === "$help admin") {
	  message.channel.send('**Êã ÇÑÓÇáß İí ÇáÎÇÕ** :mailbox_with_mail: ');
  const embed = new Discord.RichEmbed() 
      .setColor("#000000")
      .setDescription(`
	      ÇæÇãÑ ÇÏÇÑÉ ÇáÓíÑİÑ
$=move @user ~  áÓÍÈ ÇáÔÎÕ Çáì Ñææãß
$=bc ~ ÑÓÇáÉ ÌãÇÚíÉ Çáì ßá ÇÚÖÇÁ ÇáÓíÑİÑ
$=role @user <rank> ~ áÃÚØÇÁ ÑÊÈÉ áÚÖæ ãÚíä
?=roleremove @user <rank> ~ áÇÒÇáÉ ÇáÑÊÈÉ ãä ÔÎÕ ãÚíä
?=role all <rank> ~ áÃÚØÇÁ ÑÊÈÉ ááÌãíÚ
?=role humans <rank> ~ áÃÚØÇÁ ÑÊÈÉ ááÇÔÎÇÕ İŞØ
?=role bots <rank> ~ áÃÚØÇÁ ÑÊÈÉ áÌãíÚ ÇáÈæÊÇÊ
?=hc ~ ÇÎİÇÁ ÇáÔÇÊ
?=sc ~ ÇÖåÇÑ ÇáÔÇÊ ÇáãÎİíÉ
?=clr <numbr> ~ ãÓÍ ÇáÔÇÊ ÈÚÏÏ
?=clear ~ ãÓÍ ÇáÔÇÊ
?=mute @user <reason> ~ ÇÚØÇÁ ÇáÚÖæ ãíæÊ áÇÒã ÑÊÈÉ <Muted>
?=unmute @user ~ áİß ÇáãíæÊ Úä ÇáÔÎÕ 
?=kick @user <reason> ~ ØÑÏ ÇáÔÎÕ ãä ÇáÓíÑİÑ
?=ban @user <reason> ~ ÍÖÑ ÇáÔÎÕ ãä ÇáÓíÑİÑ
?=mutec ~ ÊŞİíá ÇáÔÇÊ
?=unmutec ~ İÊÍ ÇáÔÇÊ
?=SetText <name> ~ ÇäÔÇÁ ÔÇÊ
?=setVoice <name> ~ ÇäÔÇÁ Ñææã İæíÓ
?=delet <name> ~ ãÓÍ ÇáÔÇÊ Çæ ÇáÑææã İæíÓ
?=ccolors <number> ~ íäÔÇ áß ÇáæÇä ãÚ ßã ÇáæÇä ÊÈí
?=setlogs toggle ~ ÚáÔÇä ÊİÚá ÇááæŞ
?=VoiceOnline ~ áÚÑÖ ÇáİæíÓ ÇæäáÇíä
`)
   message.author.sendEmbed(embed)
    
   }
   }); 

   client.on("message", message => {
	var prefix = "$";
 if (message.content === "$help games") {
	  message.channel.send('**Êã ÇÑÓÇáß İí ÇáÎÇÕ** :mailbox_with_mail: ');
  const embed = new Discord.RichEmbed() 
      .setColor("#000000")
      .setDescription(`
          ÇæÇãÑ ÇáÇáÚÇÈ
?=rps ~ ÍÌÑ æÑŞÉ ãŞÕ
?=speed ~ ÇÓÑÚ ßÊÇÈÉ
?=quas ~ ÇÓÆáÉ ÚÇãÉ
?=äßÊ ~ äßÊ 
?=áÚÈÉ İßß ~ İßß
?=ÚæÇÕã ÚÔæÇÆíÉ ~ ÚæÇÕã
?=áÚÈÉ ßÊ ÊæíÊ ~ ßÊ ÊæíÊ
?=roll <number> ~ ŞÑÚÉ
?=áæ ÎíÑæß ÈØÑíŞÉ ÍáæÉ ~ áæ ÎíÑæß
?=áÚÈÉ ãÑíã ~ ãÑíã
?=İæÇÆÏ æäÕÇÆÍ  ~ åá ÊÚáã
?=íÚØíß ÚŞÇÈÇÊ ŞÇÓíÉ ~ ÚŞÇÈ   `)
   message.author.sendEmbed(embed)
    
   }
   }); 
			  
client.on("message", message => {
	var prefix = "$";
 if (message.content === "$help music") {
	  message.channel.send('**Êã ÇÑÓÇáß İí ÇáÎÇÕ** :mailbox_with_mail: ');
  const embed = new Discord.RichEmbed() 
      .setColor("#000000")
      .setDescription(`
	        ÇæÇãÑ ÇáãæÓíŞì 
?${prefix}play ~ áÊÔÛíá ÃÛäíÉ ÈÑÂÈØ Ãæ ÈÃÓã
?${prefix}skip ~ áÊÌÂæÒ ÇáÃÛäíÉ ÇáÍÂáíÉ
?${prefix}pause ~ ÅíŞÂİ ÇáÃÛäíÉ ãÄŞÊÇ
?${prefix}resume ~ áãæÂÕáÉ ÇáÅÛäíÉ ÈÚÏ ÅíŞÂİåÂ ãÄŞÊÇ
?${prefix}vol ~ áÊÛííÑ ÏÑÌÉ ÇáÕæÊ 100 - 0
?${prefix}stop ~ áÅÎÑÂÌ ÇáÈæÊ ãä ÇáÑæã
?${prefix}np ~ áãÚÑİÉ ÇáÃÛäíÉ ÇáãÔÛáÉ ÍÂáíÇ
?${prefix}queue ~ áãÚÑİÉ ŞÂÆãÉ ÇáÊÔÛíá
 `)
   message.author.sendEmbed(embed)
    
   }
   }); 

client.on('guildCreate', guild => {
         const embed = new Discord.RichEmbed()
     .setColor("RED")
     .setTitle('Click Here To Add Bot .!')
     .setURL('https://discordapp.com/api/oauth2/authorize?client_id=484098782158651392&permissions=8&scope=bot')
  .setDescription(`**
ÇÓã ÇáÓíÑİÑ: ${guild.name}
ÕÇÍÈ ÇáÓíÑİÑ: ${guild.owner}**`);
client.channels.get("406877114936197120").sendEmbed(embed)
});

client.on('guildDelete', guild => {
         const embed = new Discord.RichEmbed()
     .setColor("GOLD")
     .setTitle('Click Here To Add Bot .!')
     .setURL('https://discordapp.com/api/oauth2/authorize?client_id=484098782158651392&permissions=8&scope=bot')
  .setDescription(`**
  Server Kicked Moscow Shop :cry:
ÇÓã ÇáÓíÑİÑ: ${guild.name}
ÕÇÍÈ ÇáÓíÑİÑ: ${guild.owner}**`);
client.channels.get("531498806139944962").sendEmbed(embed)
});
 

client.on('message', message => {
            if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('LG=bcall')){
 if (message.author.id !== '531498806139944962') return message.reply('** åĞÇ ÇáÃãÑ ŞİØ áÕÇÍÈ ÇáÈæÊ æ ÔßÑÇğğ **')
 if(!message.author.id === '531498806139944962') return;
message.channel.sendMessage('ÌÇÑ ÇÑÓÇá ÇáÑÓÇáÉ |?')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});

client.on('message', async msg => { 
	if (msg.author.bot) return undefined;
	if (!msg.content.startsWith(prefix)) return undefined;
	const args = msg.content.split(' ');
	const searchString = args.slice(1).join(' ');
	const url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
	const serverQueue = queue.get(msg.guild.id);
	let command = msg.content.toLowerCase().split(" ")[0];
	command = command.slice(prefix.length)
	if (command === `play`) {
		const voiceChannel = msg.member.voiceChannel;
		if (!voiceChannel) return msg.channel.send('íÌÈ ÊæÂÌÏ ÍÖÑÊß ÈÑæã ÕæÊí .');
		const permissions = voiceChannel.permissionsFor(msg.client.user);
		if (!permissions.has('CONNECT')) {
			
			return msg.channel.send('áÇ íÊæÂÌÏ áÏí ÕáÇÍíÉ ááÊßáã ÈåĞÂ ÇáÑæã');
		}
		if (!permissions.has('SPEAK')) {
			return msg.channel.send('áÇ íÊæÂÌÏ áÏí ÕáÇÍíÉ ááÊßáã ÈåĞÂ ÇáÑæã');
		}

		if (!permissions.has('EMBED_LINKS')) {
			return msg.channel.sendMessage("**íÌÈ ÊæÂİÑ ÈÑãÔä `EMBED LINKS`áÏí **")
		}

		if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
			const playlist = await youtube.getPlaylist(url);
			const videos = await playlist.getVideos();
			
			for (const video of Object.values(videos)) {
				const video2 = await youtube.getVideoByID(video.id);
				await handleVideo(video2, msg, voiceChannel, true);
			}
			return msg.channel.send(` **${playlist.title}** Êã ÇáÅÖÂİÉ Åáì ŞÃÆãÉ ÇáÊÔÛíá`);
		} else {
			try {

				var video = await youtube.getVideo(url);
			} catch (error) {
				try {
					var videos = await youtube.searchVideos(searchString, 5);
					let index = 0;
					const embed1 = new Discord.RichEmbed()
			        .setDescription(`**ÇáÑÌÂÁ ãä ÍÖÑÊß ÅÎÊíÂÑ ÑŞã ÇáãŞØÚ** :
${videos.map(video2 => `[**${++index} **] \`${video2.title}\``).join('\n')}`)

					.setFooter("Mosc System.")
					msg.channel.sendEmbed(embed1).then(message =>{message.delete(20000)})
					
					try {
						var response = await msg.channel.awaitMessages(msg2 => msg2.content > 0 && msg2.content < 11, {
							maxMatches: 1,
							time: 15000,
							errors: ['time']
						});
					} catch (err) {
						console.error(err);
						return msg.channel.send('áã íÊã ÅÎÊíÂÑ ãŞØÚ ÕæÊí');
					}
					const videoIndex = parseInt(response.first().content);
					var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
				} catch (err) {
					console.error(err);
					return msg.channel.send(':X: áÇ íÊæİÑ äÊÂÆÌ ÈÍË ');
				}
			}

			return handleVideo(video, msg, voiceChannel);
		}
	} else if (command === `skip`) {
		if (!msg.member.voiceChannel) return msg.channel.send('ÃäÊ áÓÊ ÈÑæã ÕæÊí .');
		if (!serverQueue) return msg.channel.send('áÇ íÊæİÑ ãŞØÚ áÊÌÂæÒå');
		serverQueue.connection.dispatcher.end('Êã ÊÌÂæÒ åĞÂ ÇáãŞØÚ');
		return undefined;
	} else if (command === `stop`) {
		if (!msg.member.voiceChannel) return msg.channel.send('ÃäÊ áÓÊ ÈÑæã ÕæÊí .');
		if (!serverQueue) return msg.channel.send('áÇ íÊæİÑ ãŞØÚ áÅíŞÂİå');
		serverQueue.songs = [];
		serverQueue.connection.dispatcher.end('Êã ÅíŞÂİ åĞÂ ÇáãŞØÚ');
		return undefined;
	} else if (command === `vol`) {
		if (!msg.member.voiceChannel) return msg.channel.send('ÃäÊ áÓÊ ÈÑæã ÕæÊí .');
		if (!serverQueue) return msg.channel.send('áÇ íæÌÏ ÔíÁ ÔÛÂá.');
		if (!args[1]) return msg.channel.send(`:loud_sound: ãÓÊæì ÇáÕæÊ **${serverQueue.volume}**`);
		serverQueue.volume = args[1];
		serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 50);
		return msg.channel.send(`:speaker: Êã ÊÛíÑ ÇáÕæÊ Çáí **${args[1]}**`);
	} else if (command === `np`) {
		if (!serverQueue) return msg.channel.send('áÇ íæÌÏ ÔíÁ ÍÇáí İ ÇáÚãá.');
		const embedNP = new Discord.RichEmbed()
	.setDescription(`:notes: ÇáÇä íÊã ÊÔÛíá : **${serverQueue.songs[0].title}**`)
		return msg.channel.sendEmbed(embedNP);
	} else if (command === `queue`) {
		
		if (!serverQueue) return msg.channel.send('áÇ íæÌÏ ÔíÁ ÍÇáí İ ÇáÚãá.');
		let index = 0;
		
		const embedqu = new Discord.RichEmbed()

.setDescription(`**Songs Queue**
${serverQueue.songs.map(song => `**${++index} -** ${song.title}`).join('\n')}
**ÇáÇä íÊã ÊÔÛíá** ${serverQueue.songs[0].title}`)
		return msg.channel.sendEmbed(embedqu);
	} else if (command === `pause`) {
		if (serverQueue && serverQueue.playing) {
			serverQueue.playing = false;
			serverQueue.connection.dispatcher.pause();
			return msg.channel.send('Êã ÅíŞÇİ ÇáãæÓíŞì ãÄŞÊÇ!');
		}
		return msg.channel.send('áÇ íæÌÏ ÔíÁ ÍÇáí İ ÇáÚãá.');
	} else if (command === "resume") {
		if (serverQueue && !serverQueue.playing) {
			serverQueue.playing = true;
			serverQueue.connection.dispatcher.resume();
			return msg.channel.send('ÇÓÊÃäİÊ ÇáãæÓíŞì ÈÇáäÓÈÉ áß !');
		}
		return msg.channel.send('áÇ íæÌÏ ÔíÁ ÍÇáí İí ÇáÚãá.');
	}

	return undefined;
});

async function handleVideo(video, msg, voiceChannel, playlist = false) {
	const serverQueue = queue.get(msg.guild.id);
	console.log(video);
	
//	console.log('yao: ' + Util.escapeMarkdown(video.thumbnailUrl));
	const song = {
		id: video.id,
		title: Util.escapeMarkdown(video.title),
		url: `https://www.youtube.com/watch?v=${video.id}`
	};
	if (!serverQueue) {
		const queueConstruct = {
			textChannel: msg.channel,
			voiceChannel: voiceChannel,
			connection: null,
			songs: [],
			volume: 5,
			playing: true
		};
		queue.set(msg.guild.id, queueConstruct);

		queueConstruct.songs.push(song);

		try {
			var connection = await voiceChannel.join();
			queueConstruct.connection = connection;
			play(msg.guild, queueConstruct.songs[0]);
		} catch (error) {
			console.error(`I could not join the voice channel: ${error}`);
			queue.delete(msg.guild.id);
			return msg.channel.send(`áÇ ÃÓÊØíÚ ÏÎæá åĞÂ ÇáÑæã ${error}`);
		}
	} else {
		serverQueue.songs.push(song);
		console.log(serverQueue.songs);
		if (playlist) return undefined;
		else return msg.channel.send(` **${song.title}** Êã ÇÖÇİå ÇáÇÛäíÉ Çáí ÇáŞÇÆãÉ!`);
	}
	return undefined;
}

function play(guild, song) {
	const serverQueue = queue.get(guild.id);

	if (!song) {
		serverQueue.voiceChannel.leave();
		queue.delete(guild.id);
		return;
	}
	console.log(serverQueue.songs);

	const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
		.on('end', reason => {
			if (reason === 'Stream is not generating quickly enough.') console.log('Song ended.');
			else console.log(reason);
			serverQueue.songs.shift();
			play(guild, serverQueue.songs[0]);
		})
		.on('error', error => console.error(error));
	dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);

	serverQueue.textChannel.send(`ÈÏÁ ÊÔÛíá : **${song.title}**`);
}
const adminprefix = "$";
const devs = ['531498806139944962','531498806139944962'];
client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;
    
if (message.content.startsWith(adminprefix + 'setgame')) {
  client.user.setGame(argresult);
    message.channel.sendMessage(`**${argresult} Êã ÊÛííÑ ÈáÇíäŞ ÇáÈæÊ Åáì **`)
} else 
  if (message.content.startsWith(adminprefix + 'setname')) {
client.user.setUsername(argresult).then
    message.channel.sendMessage(`**${argresult}** : Êã ÊÛííÑ ÃÓã ÇáÈæÊ Åáì`)
return message.reply("**áÇ íãßäß ÊÛííÑ ÇáÇÓã íÌÈ Úáíß ÇáÇäÊÙÂÑ áãÏÉ ÓÇÚÊíä . **");
} else
  if (message.content.startsWith(adminprefix + 'setavatar')) {
client.user.setAvatar(argresult);
  message.channel.sendMessage(`**${argresult}** : Êã ÊÛíÑ ÕæÑÉ ÇáÈæÊ`);
      } else     
if (message.content.startsWith(adminprefix + 'setT')) {
  client.user.setGame(argresult, "https://www.twitch.tv/idk");
    message.channel.sendMessage(`**Êã ÊÛííÑ ÊæíÊÔ ÇáÈæÊ Åáì  ${argresult}**`)
}
});

const codes = {
    ' ': '   ',
    '0': '0?',
    '1': '1?',
    '2': '2?',
    '3': '3?',
    '4': '4?',
    '5': '5?',
    '6': '6?',
    '7': '7?',
    '8': '8?',
    '9': '9?',
    '!': '?',
    '?': '?',
    '#': '#?',
    '*': '*?'
  };
  
  'abcdefghijklmnopqrstuvwxyz'.split('').forEach(c => {
    codes[c] = codes[c.toUpperCase()] = ` :regional_indicator_${c}:`;
  });
  
  
  client.on('message' , async message => {
	  var prefix = "$";
         if(message.content.startsWith(prefix + "emoji")) {
            let args = message.content.split(" ").slice(1);
    if (args.length < 1) {
      message.channel.send('You must provide some text to emojify!');
  }
  
  message.channel.send(
      args.join(' ')
          .split('')
          .map(c => codes[c] || c)
          .join('')
  );
  };
  });

var Za7f = [
  "**ÕæÑÉ æÌåß Çæ ÑÌáß Çæ ÎÔãß Çæ íÏß**.",
  "**ÇÕÏÑ Çí ÕæÊ íØáÈå ãäß ÇáÇÚÈíä**.",
  "**ÓßÑ ÎÔãß æ Şæá ßáãÉ ãä ÇÎÊíÇÑ ÇáÇÚÈíä Çáí ãÚß**.",
  "**ÑæÍ Çáì Çí ŞÑæÈ ÚäÏß İí ÇáæÇÊÓ ÇÈ æ ÇßÊÈ Çí ÔíÁ íØáÈå ãäß ÇáÇÚÈíä  ÇáÍÏ ÇáÇŞÕì 3 ÑÓÇÆá**.",
  "**Şæá äßÊÉ ÇĞÇ æ áÇÒã ÇÍÏ ÇáÇÚÈíä íÖÍß ÇĞÇ ãÍÏ ÖÍß íÚØæäß ãíæÊ Çáì Çä íÌí ÏæÑß ãÑÉ ËÇäíÉ**.",
  "**ÓãÚäÇ ÕæÊß æ Ûä Çí ÇÛäíÉ ãä ÇÎÊíÇÑ ÇáÇÚÈíä Çáí ãÚß**.",
  "**Ğí ÇáãÑÉ áß áÇ ÊÚíÏåÇ**.",
  "**ÇÑãí ÌæÇáß Úáì ÇáÇÑÖ ÈŞæÉ æ ÇĞÇ ÇäßÓÑ ÕæÑ ÇáÌæÇá æ ÇÑÓáå İí ÇáÔÇÊ ÇáÚÇã**.",
  "**ÕæÑ Çí ÔíÁ íØáÈå ãäß ÇáÇÚÈíä**.",
  "**ÇÊÕá Úáì ÇÈæß æ Şæá áå Çäß ÑÍÊ ãÚ ÈäÊ æ ÇÍíä åí ÍÇãá....**.",
  "**ÓßÑ ÎÔãß æ Şæá ßáãÉ ãä ÇÎÊíÇÑ ÇáÇÚÈíä Çáí ãÚß**.",
  "**Óæ ãÔåÏ ÊãËíáí Úä ãÕÑíÉ ÈÊæáÏ**.",
  "**ÇÚØí Çí ÇÍÏ ÌäÈß ßİ ÇĞÇ ãÇİíå ÇÍÏ ÌäÈß ÇÚØí äİÓß æ äÈí äÓãÚ ÕæÊ Çáßİ**.",
  "**Ğí ÇáãÑÉ áß áÇ ÊÚíÏåÇ**.",
  "**ÊÚØí Çí ÔÎÕ 5 ÇáÇİ ßÑÏíÊ**.",
  "**ÇÑãí ÌæÇáß Úáì ÇáÇÑÖ ÈŞæÉ æ ÇĞÇ ÇäßÓÑ ÕæÑ ÇáÌæÇá æ ÇÑÓáå İí ÇáÔÇÊ ÇáÚÇã**.",
  "**ÑæÍ ÚäÏ Çí ÇÍÏ ÈÇáÎÇÕ æ Şæá áå Çäß ÊÍÈå æ ÇáÎ**.",
  "**ÇßÊÈ İí ÇáÔÇÊ Çí ÔíÁ íØáÈå ãäß ÇáÇÚÈíä İí ÇáÎÇÕ**.",
  "**Şæá äßÊÉ ÇĞÇ æ áÇÒã ÇÍÏ ÇáÇÚÈíä íÖÍß ÇĞÇ ãÍÏ ÖÍß íÚØæäß ãíæÊ Çáì Çä íÌí ÏæÑß ãÑÉ ËÇäíÉ**.",
  "**ÓÇãÍÊß ÎáÇÕ ãÇİíå ÚŞÇÈ áß :slight_smile:**.",
  "**ÇÊÕá Úáì ÇÍÏ ãä ÇÎæíÇß  ÎæíÇÊß , æ ÇØáÈ ãäåã ãÈáÛ Úáì ÇÓÇÓ Çäß ÕÏãÊ ÈÓíÇÑÊß**.",
  "**ÛíÑ ÇÓãß Çáì ÇÓã ãä ÇÎÊíÇÑ ÇáÇÚÈíä Çáí ãÚß**.",
  "**ÇÊÕá Úáì Çãß æ Şæá áåÇ Çäß ÊÍÈåÇ :heart:**.",
  "**áÇ íæÌÏ ÓÄÇá áß ÓÇãÍÊß :slight_smile:**.",
  "**Şá áæÇÍÏ ãÇÊÚÑİå ÚØäí ßİ**.",
  "**ãäÔä ÇáÌãíÚ æŞá ÇäÇ ÇßÑåßã**.",
  "**ÇÊÕá áÇÎæß æ Şæá áå Çäß ÓæíÊ ÍÇÏË æ ÇáÎ....**.",
  "**ÑæÍ ÇáãØÈÎ æ ÇßÓÑ ÕÍä Çæ ßæÈ**.",
  "**ÇÚØí Çí ÇÍÏ ÌäÈß ßİ ÇĞÇ ãÇİíå ÇÍÏ ÌäÈß ÇÚØí äİÓß æ äÈí äÓãÚ ÕæÊ Çáßİ**.",
  "**Şæá áÇí ÈäÊ ãæÌæÏ İí ÇáÑæã ßáãÉ Íáæå**.",
  "**Êßáã ÈÇááÛÉ ÇáÇäÌáíÒíÉ Çáíä íÌí ÏæÑß ãÑÉ ËÇäíÉ áÇÒã ÊÊßáã ÇĞÇ ãÇ ÊßáãÊ ÊäİĞ ÚŞÇÈ ËÇäí**.",
  "**áÇ ÊÊßáã æáÇ ßáãÉ Çáíä íÌí ÏæÑß ãÑÉ ËÇäíÉ æ ÇĞÇ ÊßáãÊ íÌíß ÈÇäÏ áãÏÉ íæã ßÇãá ãä ÇáÓ  ÑİÑ**.",
  "**Şæá ŞÕíÏÉ **.",
  "**Êßáã ÈÇááåÌÉ ÇáÓæÏÇäíÉ Çáíä íÌí ÏæÑß ãÑÉ ËÇäíÉ**.",
  "**ÇÊÕá Úáì ÇÍÏ ãä ÇÎæíÇß  ÎæíÇÊß , æ ÇØáÈ ãäåã ãÈáÛ Úáì ÇÓÇÓ Çäß ÕÏãÊ ÈÓíÇÑÊß**.",
  "**Çæá æÇÍÏ ÊÔæİå ÚØå ßİ**.",
  "**Óæ ãÔåÏ ÊãËíáí Úä Çí ÔíÁ íØáÈå ãäß ÇáÇÚÈíä**.",
  "**ÓÇãÍÊß ÎáÇÕ ãÇİíå ÚŞÇÈ áß :slight_smile:**.",
  "**ÇÊÕá Úáì ÇÈæß æ Şæá áå Çäß ÑÍÊ ãÚ ÈäÊ æ ÇÍíä åí ÍÇãá....**.",
  "**ÑæÍ Çßá ãáÍ + áíãæä ÇĞÇ ãÇİíå Çßá Çí ÔíÁ ãä ÇÎÊíÇÑ Çáí ãÚß**.",
  "**ÊÇÎĞ ÚŞÇÈíä**.",
  "**Şæá ÇÓã Çãß ÇİÊÎÑ ÈÃÓã Çãß**.",
  "**ÇÑãí Çí ÔíÁ ŞÏÇãß Úáì Çí ÇÍÏ ãæÌæÏ Çæ Úáì äİÓß**.",
  "**ÇĞÇ ÇäÊ æáÏ ÇßÓÑ ÇÛáì Çæ ÇÍÓä ÚØæÑ ÚäÏß ÇĞÇ ÇäÊí ÈäÊ ÇßÓÑí ÇáÑæÌ ÍŞß Çæ Çáãíß ÇÈ ÍŞß**.",
  "**ÇĞåÈ Çáì æÇÍÏ ãÇÊÚÑİå æŞá áå ÇäÇ ßíæÊ æÇÈí ÈæÓå**.",
  "**ÊÊÕá Úáì ÇáæÇáÏå  æ ÊŞæá áåÇ ÎØİÊ ÔÎÕ**.",
  "** ÊÊÕá Úáì ÇáæÇáÏå  æ ÊŞæá áåÇ ÊÒæÌÊ ÈÇ ÓÑ**.",
  "**    ÊÕá Úáì ÇáæÇáÏå  æ ÊŞæá áåÇ  ÇÍÈ æÍÏå**.",
    "**ÊÊÕá Úáì ÔÑØí ÊŞæá áå ÚäÏßã ãØÇİí**.",
    "**ÎáÇÕ ÓÇãÍÊß**.",
    "** ÊÕíÍ İí ÇáÔÇÑÚ ÇäÇ  ãÌäææä**.",
    "** ÊÑæÍ ÚäÏ ÔÎÕ ÊŞæá áå ÇÍÈß**.",

];

client.on('message', message => {
 if (message.content.startsWith("=ÚŞÇÈ")) {
              if(!message.channel.guild) return message.reply('** This command only for servers**');
var embed = new Discord.RichEmbed()
.setColor('RANDOM')
 .setThumbnail(message.author.avatarURL) 
.addField('Speed BOT' ,
`${Za7f[Math.floor(Math.random() * Za7f.length)]}`)
message.channel.sendEmbed(embed);
console.log('[38ab] Send By: ' + message.author.username)
  }
});

client.on('message', ra3d => {
var prefix = "$";
                        let args = ra3d.content.split(" ").slice(1).join(" ")
if(ra3d.content.startsWith(prefix + 'ccolors')) {
    if(!args) return ra3d.channel.send('`íÑÌí ÇÎÊíÇÑ ßã áæä `');
             if (!ra3d.member.hasPermission('MANAGE_ROLES')) return ra3d.channel.sendMessage('`**? | `[MANAGE_ROLES]` áÇ íæÌÏ áÏíß ÕáÇÍíÉ**'); 
              ra3d.channel.send(`**? |Created __${args}__ Colors**`);
                  setInterval(function(){})
                    let count = 0;
                    let ecount = 0;
          for(let x = 1; x < `${parseInt(args)+1}`; x++){
            ra3d.guild.createRole({name:x,
              color: 'RANDOM'})
              }
            }
       });

client.on('message', message => {
var prefix = "$";
var cats = ["http://www.shuuf.com/shof/uploads/2015/09/09/jpg/shof_b9d73150f90a594.jpg","https://haltaalam.info/wp-content/uploads/2015/05/0.208.png","https://haltaalam.info/wp-content/uploads/2015/05/266.png","https://haltaalam.info/wp-content/uploads/2015/05/250.png","https://haltaalam.info/wp-content/uploads/2017/02/0.2517.png","https://pbs.twimg.com/media/CP0mi02UAAA3U2z.png","http://www.shuuf.com/shof/uploads/2015/08/31/jpg/shof_3b74fa7295ec445.jpg","http://www.shuuf.com/shof/uploads/2015/08/22/jpg/shof_fa3be6ab68fb415.jpg","https://pbs.twimg.com/media/CSWPvmRUcAAeZbt.png","https://pbs.twimg.com/media/B18VworIcAIMGsE.png"]
        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith(prefix + 'åá ÊÚáã')) {
         var cat = new Discord.RichEmbed()
.setImage(cats[Math.floor(Math.random() * cats.length)])
message.channel.sendEmbed(cat);
    }
});

const zead = [
   '*** ÇäÇ ÇÓãí ãÑíã ***',
   '*** ãÑÍÈÇó ãÇåæ ÇÓãß ¿ ***',
   `*** ÇåáÇ Èß ! ÇäÇ ÊÇÆåå İí åĞÇ ÇáãßÇä  ***`,
   '*** åá ÊæÏ ãÓÇÚÏÊí ¿ ***',
   '*** áãÇĞÇ åá ÇäÊ ŞÇÓí ÇáŞáÈ ¿ ***',
   '*** Çääí ÇÔİŞ Úáíß íÌÈ Çä ÊØåÑ ÑæÍß æÊÍÈ ÇáÎíÑ ááÌãíÚ ***',
   '*** ÇÈÊÚÏ Úäí Şáíá Çääí ãÊÚÈÉ ***',
	 '*** åá ÇäÊ äÇÏã Úáì ãÇŞáÊ ¿ ***',
   '*** åá ÊæÏ ãÓÇÚÏÊí ¿ ***',
   '*** æÇæ ÇÔßÑß Çäß ÔÎÕÇó ÑÇÆÚ ! ***',
   '*** ÇÈÍË ãÚí Úä ãäÒáí áŞÏ ßÇä ŞÑíÈÇó ãä åäÇ ***',
   '*** æáÇßä ÚäÏãÇ Íá Çááíá áã ÇÚÏ ÇÑì Çí ÔíÁ ***',
   '*** ãĞÇ ÊÙä Çíä íæÌÏ ¿ íãíä Çæ íÓÇÑ ***',
   '*** åíÇ ÇĞÇó ***',
   '*** ÇæÏ Çä ÇÓÆáß ÓÄÇá æäÍä İí ÇáØÑíŞ ***',
   '*** åá ÊÑÇäí İÊÇÉ áØíİÉ Çã ãÎíİÉ ***',
   '*** ÇÔßÑß !  ***',
   '*** áŞÏ æÕáäÇ Çáì ÇáãäÒá ÔßÑÇó ÌÒíáó ÇäÊØÑäí ËæÇäí æÓæİ ÇÚæÏ ***',
   '*** åá ÇäÊ ÌÇåÒ ¿ ***',
   '*** áŞÏ ÇÎÈÑÊ æÇáÏí Úäß æåã ãÊÍãÓíä áÑÄíÊß ***',
   '*** åá ÊæÏ Çä ÊÑÇåã ÇáÇä ***',
'*** ÇäÇ áÓÊ ÇáÍæÊ ÇáÇÒÑŞ ßãÇ íÏÚæä ***',
   '*** ÇäÇ áÓÊ ßÇĞÈÉ ÕÏŞäí***',
   '*** áãÇĞÇ ÇÑì İí Úíäíß ÇáÎæİ ¿ ***',
   '*** ÇäÇ ãÌÑÏ İÊÇÉ áØíİÉ ÊÍÈ ÇááÚÈ ãÚ ÇáÌãíÚ ***',
   '*** ÇÚÑİ ßá ÔíÁ íÍÏË ÇÓãÚ ĞÇáß ÈÇáÑÇÏíæ ***',
   '*** ÓãÚÊ Çä ÇáÈÔÑ íŞÊáæä ãä ÇÌá ÇáãÇá İŞØ ***',
   '*** áãÇĞÇ áã ÊÏÎá ÇáÛÑİÉ ¿ ***',
   '*** ååååååååååååååååååå ÇäÊ ÇáÇä ãÓÌæä İí åĞå ÇáÛÑİÉ ***',
   '*** áä ÊÎÑÌ ÍÊì ÇÚæÏ áß ÈÚÏ Şáíá ***',
   '*** ÇáãİÊÇÍ ãÚß ! ÇßÊÈ .ãÑíã  ***',
   '*** ãİÊÇÍ ÇÍãÑ , åá ÍÕáÊ Úáíå ¿ ***',
   '*** Çä áã ÊÍÕá Úáíå , ÇßÊÈ .ãÑíã ãÑÉ ÇÎÑì ***',
   '*** ãİÊÇÍ ÇÓæÏ . åá ÍÕáÊ Úáíå ¿ ***',
   '*** Çíä ÊÑíÏ Çä ÊÎÊÈÆ ÈÓÑÚÉ ŞÈá Çä ÊÚæÏ ***',
   '*** áŞÏ ÚÇÏÊ ãä ÌÏíÏ Çáì ÇáãäÒá ***',
   '*** áÇ ÊÕÏÑ Çí ÕæÊ ! ***',
   '*** ãÑíã : áŞÏ ÚÏÊ ***',
   '*** ãÑíã : íÇ ÇíåÇ ÇáãÎÇÏÚ Çíä ÇäÊ ***',
   '*** ãÑíã : ÇÚáã Çäß åäÇ İí ÇáãäÒá ***',
   '*** ãÑíã : ãÇĞÇ ÊÑíÏ Çä ÊÓãÚ ***',
   '*** ÇÍÏ ãÇ ÎÑÌ ãä ÇáãäÒá ***',
   '*** ÇäÊÙÑ ÇáÌÒÁ ÇáËÇäí ÚäÏãÇ íæÕá ÇáÈæÊ 100 ÓíÑİÑ , ÓÇÚÏäí İí äÔÑ ÇáÈæÊ æÇÏÎá åĞÇ ÇáÓíÑİÑ  ***'
];
 client.on('message', message => {
 if (message.content.startsWith('=ãÑíã')) {
  var mariam= new Discord.RichEmbed()
  .setTitle("áÚÈÉ ãÑíã ..")
  .setColor('RANDOM')
  .setDescription(`${zead[Math.floor(Math.random() * zead.length)]}`)
  .setImage("https://www.npa-ar.com/wp-content/uploads/2017/08/%D9%84%D8%B9%D8%A8%D8%A9-%D9%85%D8%B1%D9%8A%D9%85-300x200.jpg")
   message.channel.sendEmbed(mariam);
  }
});

const Langs = ['afrikaans', 'albanian', 'amharic', 'arabic', 'armenian', 'azerbaijani', 'bangla', 'basque', 'belarusian', 'bengali', 'bosnian', 'bulgarian', 'burmese', 'catalan', 'cebuano', 'chichewa', 'chinese simplified', 'chinese traditional', 'corsican', 'croatian', 'czech', 'danish', 'dutch', 'english', 'esperanto', 'estonian', 'filipino', 'finnish', 'french', 'frisian', 'galician', 'georgian', 'german', 'greek', 'gujarati', 'haitian creole', 'hausa', 'hawaiian', 'hebrew', 'hindi', 'hmong', 'hungarian', 'icelandic', 'igbo', 'indonesian', 'irish', 'italian', 'japanese', 'javanese', 'kannada', 'kazakh', 'khmer', 'korean', 'kurdish (kurmanji)', 'kyrgyz', 'lao', 'latin', 'latvian', 'lithuanian', 'luxembourgish', 'macedonian', 'malagasy', 'malay', 'malayalam', 'maltese', 'maori', 'marathi', 'mongolian', 'myanmar (burmese)', 'nepali', 'norwegian', 'nyanja', 'pashto', 'persian', 'polish', 'portugese', 'punjabi', 'romanian', 'russian', 'samoan', 'scottish gaelic', 'serbian', 'sesotho', 'shona', 'sindhi', 'sinhala', 'slovak', 'slovenian', 'somali', 'spanish', 'sundanese', 'swahili', 'swedish', 'tajik', 'tamil', 'telugu', 'thai', 'turkish', 'ukrainian', 'urdu', 'uzbek', 'vietnamese', 'welsh', 'xhosa', 'yiddish', 'yoruba', 'zulu'];

client.on('message', message => {
	var prefix = "$";
if (message.content.startsWith(prefix + 'trans')) {
    let args = message.content.split(" ").slice(1);
    if (!args[0]) {
    
        const embed = new Discord.RichEmbed()
            .setColor("FFFFFF")
            .setDescription("**ÊÑÌãÉ ÇáßÊÇÈÉ.**\ÇÓÊÚãá: `=translate <ÇáßáãÉ áÊÈí> <ÇÇáÛÉ>`");

        return message.channel.send(embed);

    } else {

        if (args.length === undefined) {

            return message.channel.send("**ÊÑÌãÉ ÇáßÊÇÈÉ.**\ÇÓÊÚãá: `=translate <ÇáßáãÉ áÊÈí> <ÇÇáÛÉ>`");

        } else {

            let transArg = args[0].toLowerCase();

            args = args.join(' ').slice(1)
            let translation;

            if (!Langs.includes(transArg)) return message.channel.send(`**Language not found.**`);
            args = args.slice(transArg.length);

            translate(args, {
                to: transArg
            }).then(res => {

                const embed = new Discord.RichEmbed()
                    .setAuthor("Translator", client.user.displayAvatarURL)
                    .addField(`Input`, `\`\`\`${args}\`\`\``)
                    .setColor("#42f4c8")
                    .addField(`Output`, `\`\`\`${res.text}\`\`\``);
                return message.channel.send(embed);
            });
        }
    }
}
});

client.on('message', message => {
     if(!message.channel.guild) return;
var prefix = "$";
                if(message.content.startsWith(prefix + 'allbots')) {

    
    if (message.author.bot) return;
    let i = 1;
        const botssize = message.guild.members.filter(m=>m.user.bot).map(m=>`${i++} - <@${m.id}>`);
          const embed = new Discord.RichEmbed()
          .setAuthor(message.author.tag, message.author.avatarURL)
          .setDescription(`**Found ${message.guild.members.filter(m=>m.user.bot).size} bots in this Server**
${botssize.join('\n')}`)
.setFooter(client.user.username, client.user.avatarURL)
.setTimestamp();
message.channel.send(embed)

}


});


client.on("message", function(message) {
	var prefix = "$";
   if(message.content.startsWith(prefix + "rps")) {
    let messageArgs = message.content.split(" ").slice(1).join(" ");
    let messageRPS = message.content.split(" ").slice(2).join(" ");
    let arrayRPS = ['**# - Rock**','**# - Paper**','**# - Scissors**'];
    let result = `${arrayRPS[Math.floor(Math.random() * arrayRPS.length)]}`;
    var RpsEmbed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setThumbnail(message.author.avatarURL)
    .addField("Rock","??",true)
    .addField("Paper","??",true)
    .addField("Scissors","??",true)
    message.channel.send(RpsEmbed).then(msg => {
        msg.react(' ??')
        msg.react("??")
        msg.react("??")
.then(() => msg.react('??'))
.then(() =>msg.react('??'))
.then(() => msg.react('??'))
let reaction1Filter = (reaction, user) => reaction.emoji.name === '??' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '??' && user.id === message.author.id;
let reaction3Filter = (reaction, user) => reaction.emoji.name === '??' && user.id === message.author.id;
let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
	    
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
let reaction3 = msg.createReactionCollector(reaction3Filter, { time: 12000 });
reaction1.on("collect", r => {
        message.channel.send(result)
})
reaction2.on("collect", r => {
        message.channel.send(result)
})
reaction3.on("collect", r => {
        message.channel.send(result)
})

    })
}
});

 client.on('message', message => {
	 var prefix ="$";
 if(message.content.startsWith(prefix +"server")){
if(!message.channel.guild) return message.reply(' ');
const millis = new Date().getTime() - message.guild.createdAt.getTime();
const now = new Date();
dateFormat(now, 'dddd, mmmm dS, yyyy, h:MM:ss TT');
const verificationLevels = ['None', 'Low', 'Medium', 'Insane', 'Extreme'];
const days = millis / 1000 / 60 / 60 / 24;
let roles = client.guilds.get(message.guild.id).roles.map(r => r.name);
var embed  = new Discord.RichEmbed()
.setAuthor(message.guild.name, message.guild.iconURL)
.addField("**?? Server ID:**", message.guild.id,true)
.addField("**?? Created On**", message.guild.createdAt.toLocaleString(),true)
.addField("**?? Owned by**",`${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`)
.addField("?? Members ",`[${message.guild.memberCount}]`,true)
.addField('**?? Channels **',`**${message.guild.channels.filter(m => m.type === 'text').size}**` + ' text | Voice  '+ `**${message.guild.channels.filter(m => m.type === 'voice').size}** `,true)
.addField("**?? Others **" , message.guild.region,true)
.addField("** ?? Roles **",`**[${message.guild.roles.size}]** Role `,true)
.setColor('#000000')
message.channel.sendEmbed(embed)

}
});
client.on('message', message => {
    if (message.content.startsWith("=bot")) {
    message.channel.send({
        embed: new Discord.RichEmbed()
            .setAuthor(client.user.username,client.user.avatarURL)
            .setThumbnail(client.user.avatarURL)
            .setColor('RANDOM')
            .setTitle('``INFO LegendSystem`` ')
            .addField('``My Ping``' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
            .addField('``RAM Usage``', `[${(process.memoryUsage().rss / 1048576).toFixed()}MB]`, true)
            .addField('``servers``', [client.guilds.size], true)
            .addField('``channels``' , `[ ${client.channels.size} ]` , true)
            .addField('``Users``' ,`[ ${client.users.size} ]` , true)
            .addField('``My Name``' , `[ ${client.user.tag} ]` , true)
            .addField('``My ID``' , `[ ${client.user.id} ]` , true)
			      .addField('``My Prefix``' , `[ - ]` , true)
			      .addField('``My Language``' , `[ Java Script ]` , true)
			      .setFooter('By | ITz1uKY')
    })
}
});

client.on("message", message => {
    var prefix = "$"
    if (!message.content.startsWith(prefix)) return;
      let command = message.content.split(" ")[0];
      command = command.slice(prefix.length);
        if(command === "skin") {
                const args = message.content.split(" ").slice(1).join(" ")
        if (!args) return message.channel.send("** Type your skin name **");
        const image = new Discord.Attachment(`https://visage.surgeplay.com/full/256/${args}`, "skin.png");
    message.channel.send(image)
        }
    });

client.on("guildMemberAdd", member => {
let welcomer = member.guild.channels.find("chicago");
      if(!welcomer) return;
      if(welcomer) {
         moment.locale('ar-ly');
         var h = member.user;
        let norelden = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(h.avatarURL)
        .setAuthor(h.username,h.avatarURL)
        .addField(': ÊÇÑíÎ ÏÎæáß ÇáÏÓßæÑÏ',`${moment(member.user.createdAt).format('D/M/YYYY h:mm a')} **\n** \`${moment(member.user.createdAt).fromNow()}\``,true)
         .setFooter(`${h.tag}`,"https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif")
     welcomer.send({embed:norelden});          
               
 
      }
      });


client.on('message', message => {
	var prefix = "$";
if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'move')) {
 if (message.member.hasPermission("MOVE_MEMBERS")) {
 if (message.mentions.users.size === 0) {
 return message.channel.send("``áÇÓÊÎÏÇã ÇáÃãÑ ÇßÊÈ åĞå ÇáÃãÑ : " +prefix+ "move [USER]``")
}
if (message.member.voiceChannel != null) {
 if (message.mentions.members.first().voiceChannel != null) {
 var authorchannel = message.member.voiceChannelID;
 var usermentioned = message.mentions.members.first().id;
var embed = new Discord.RichEmbed()
 .setTitle("Succes!")
 .setColor("#000000")
 .setDescription(`áŞÏ ŞãÊ ÈÓÍÈ <@${usermentioned}> Çáì ÇáÑæã ÇáÕæÊí ÇáÎÇÕ Èß? `)
var embed = new Discord.RichEmbed()
.setTitle(`You are Moved in ${message.guild.name}`)
 .setColor("RANDOM")
.setDescription(`**<@${message.author.id}> Moved You To His Channel!\nServer --> ${message.guild.name}**`)
 message.guild.members.get(usermentioned).setVoiceChannel(authorchannel).then(m => message.channel.send(embed))
message.guild.members.get(usermentioned).send(embed)
} else {
message.channel.send("``áÇ ÊÓÊØíÚ ÓÍÈ "+ message.mentions.members.first() +" `íÌÈ Çä íßæä åĞå ÇáÚÖæ İí Ñæã ÕæÊí`")
}
} else {
 message.channel.send("**``íÌÈ Çä Êßæä İí Ñæã ÕæÊí áßí ÊŞæã ÈÓÍÈ ÇáÚÖæ Ãáíß``**")
}
} else {
message.react("?")
 }}});

 client.on('message', message => {
              if (!message.channel.guild) return;
      if(message.content =='=count')
      var IzRo = new Discord.RichEmbed()
      .setThumbnail(message.author.avatarURL)
      .setFooter(message.author.username, message.author.avatarURL)
      .setTitle(':tulip:| Members info')
      .addBlankField(true)
      .addField('ÚÏÏ ÇÚÖÇÁ ÇáÓíÑİÑ',`${message.guild.memberCount}`)
      message.channel.send(IzRo);
    });



 client.on("message", async message => {
            if(!message.channel.guild) return;
            var prefix = "$";
        if(message.content.startsWith(prefix + 'invites')) {
        var nul = 0
        var guild = message.guild
        await guild.fetchInvites()
            .then(invites => {
             invites.forEach(invite => {
                if (invite.inviter === message.author) {
                     nul+=invite.uses
                    }
                });
            });
          if (nul > 0) {
              console.log(`\n${message.author.tag} has ${nul} invites in ${guild.name}\n`)
              var embed = new Discord.RichEmbed()
                  .setColor("#000000")
                    .addField(`${message.author.username}`, `áŞÏ ŞãÊ ÈÏÚæÉ **${nul}** ÔÎÕ`)
                          message.channel.send({ embed: embed });
                      return;
                    } else {
                       var embed = new Discord.RichEmbed()
                        .setColor("#000000")
                        .addField(`${message.author.username}`, `áã ÊŞã ÈÏÚæÉ Ãí ÔÎÕ áåĞÉ ÇáÓíÑİÑ`)

                       message.channel.send({ embed: embed });
                        return;
                    }
        }
        if(message.content.startsWith(prefix + 'invite-codes')) {
let guild = message.guild
var codes = [""]
message.channel.send(":postbox: **áŞÏ ŞãÊ ÈÃÑÓÇá ÌãíÚ ÑæÇÈØ ÇáÏÚæÇÊ ÇáÊí ŞãÊ ÈÃäÔÇÆåÇ İí ÇáÎÇÕ**")
guild.fetchInvites()
.then(invites => {
invites.forEach(invite => {
if (invite.inviter === message.author) {
codes.push(`discord.gg/${invite.code}`)
}
})
}).then(m => {
if (codes.length < 0) {
    var embed = new Discord.RichEmbed()
.setColor("#000000")
.addField(`Your invite codes in ${message.guild.name}`, `You currently don't have any active invites! Please create an invite and start inviting, then you will be able to see your codes here!`)
message.author.send({ embed: embed });
return;
} else {
    var embed = new Discord.RichEmbed()
.setColor("#000000")
.addField(`Your invite codes in ${message.guild.name}`, `Invite Codes:\n${codes.join("\n")}`)
message.author.send({ embed: embed });
return;
}
})
}

});

client.on('message', msg => {
	var  prefix = "$";
 if (msg.content.startsWith(prefix + 'cal')) {
    let args = msg.content.split(" ").slice(1);
        const question = args.join(' ');
    if (args.length < 1) {
        msg.reply('Specify a equation, please.');
} else {    let answer;
    try {
        answer = math.eval(question);
    } catch (err) {
        msg.reply(`Error: ${err}`);
    }
    
    const embed = new Discord.RichEmbed()
    .addField("**Input**: ",`**${question}**`, true)
    .addField("**Output**: ",`**${answer}**`, true)
    msg.channel.send(embed)
    }
};
});

client.on('message', message => { 
	var prefix = "$";
 let args = message.content.split(' ').slice(1);
    if(message.content.startsWith(prefix + 'short')) {
    if(!message.channel.guild) return;  

        googl.setKey('AIzaSyC2Z2mZ_nZTcSvh3QvIyrmOIFP6Ra6co6w');
        googl.getKey();
        googl.shorten(args.join(' ')).then(shorturl => {
            message.channel.send(''+shorturl)
        }).catch(e=>{
            console.log(e.message);
            message.channel.send('Error!');
        });
}
});

client.on('message', message => {
	var prefix = "$";
if (message.content.startsWith(prefix + 'tag')) {
    let args = message.content.split(" ").slice(1);
if(!args[0]) return message.reply('ãÑÌæ ßÊÇÈÉ äÕ ÇáÏí ÊÑíÏ');  

    figlet(args.join(" "), (err, data) => {
              message.channel.send("```" + data + "```")
           })
}
});

client.on('message', message => {
	var prefix ="$";
 let args = message.content.split(' ').slice(1);
    if(message.content.startsWith(prefix + 'google')) {
    const input = args.join(' ');

google({ query: input, disableConsole: true }).then(results => {
    return message.channel.send(`\n\n**Title**: ${results[0].title}\n***Link***: ${results[0].link}\nDescription: ${results[0].snippet}`);
}).catch(error => {
    if (error) throw error;
});

}});
 
function getValue(key, array) {
  for (var el in array) {
    if (array[el].hasOwnProperty(key)) {
      return array[el][key];
    }
  }
}

 

let points = {};
const type = [
    {
            "type": "https://cdn.discordapp.com/attachments/429298913980317696/429298994078810127/a90c6b270eb8bb2e.png",
        "answers": ["ÇáÈÑÇÒíá"]
    },
    {
            "type": "https://cdn.discordapp.com/attachments/429298913980317696/429298996385677312/93b0c6f963ca78cc.png",
        "answers": ["ÇáÓÚæÏíÉ"]
    },
    {
            "type": "https://cdn.discordapp.com/attachments/429298913980317696/429298996130086934/341960d3e3e1daad.png",
        "answers": ["ÇáŞÓØäØíäíÉ"]
    },
    {
            "type": "https://cdn.discordapp.com/attachments/429298913980317696/429298998172450816/5c70f0d2a02f741a.png",
        "answers": ["ÇáäåÇíÉ"]
    },
    {
            "type": "https://cdn.discordapp.com/attachments/429298913980317696/429298999799971860/00c3e44857da1d4f.png",
        "answers": ["ÇãÇÒæä"]
    },
    {
            "type": "https://cdn.discordapp.com/attachments/429298913980317696/429299000026595338/56ca5f3803361aaf.png",
        "answers": ["ÌÇİÇÓßÑÈÊ"]
    },
    {
            "type": "https://cdn.discordapp.com/attachments/429298913980317696/429299000676581382/426f82fc46406cf9.png",
        "answers": ["Óåáå ãæ ÕÚÈå"]
    },
    {
            "type": "https://cdn.discordapp.com/attachments/429298913980317696/429299005474996255/7ec6030fe3423458.png",
        "answers": ["ØÈŞ ÑØÈ ãÑŞ ÈŞÑ"]
    },
    {
            "type": "https://cdn.discordapp.com/attachments/429298913980317696/429299005458087936/fd790725b7496d35.png",
        "answers": ["ãÊÌÑ"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330177894645780/7a11f3f73c1df90d.png",
        "answers": ["ÔÌÑÉ ÇáÃæÛíÑí"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330188162301952/a5d4f8c72362aa3f.png",
        "answers": ["ÚÔ ÇáÚÕİæÑ"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330194587713554/c5b6b7bad08671a9.png",
        "answers": ["Şã ÈßÊÇÈÉ"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330199838982152/1e05423a0b91fdaa.png",
        "answers": ["ßÇäíßí"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330207711690762/39a6a460c6211b5d.png",
        "answers": ["áíæÈáíÇäÇ"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330217971089418/e5e323d8e8ce00ad.png",
        "answers": ["åæÇæí"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330224316940329/7872c68940fd6f08.png",
        "answers": ["íÇÎÑÇ"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330229140652032/2419fe025b8b35f2.png",
        "answers": ["íæã ÇáÎãíÓ"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330238330241044/DO_YOU_KNOW_THE_WAY.png",
        "answers": ["DO YOU KNOW THE WAY"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330246840483842/23dc3a67e7bedc9e.png",
        "answers": ["ÇáÃÑÖ"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330256256827414/9f90c0fcbfc60a0d.png",
        "answers": ["ÇáÈæÇÈÉ"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330261663285259/0e41e6dcefc80cd3.png",
        "answers": ["ÇáÌãá ÇÈæ ÑÇÓíä"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330264901287946/6459ace62733c477.png",
        "answers": ["ÇáÍæÊ ÇáÃÒÑŞÁ"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330272920797226/de084748fdbe524b.png",
        "answers": ["ÇáŞÇÑÈ ÇáãßÓæÑ"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330281372057622/bcae99355befcd06.png",
        "answers": ["ÇáãÏÑÓÉ"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330289769054230/c030902a9d21637c.png",
        "answers": ["ÇáíÇÈÇä"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330298585481218/2ca3d0f29283cced.png",
        "answers": ["ÈáÇíÓÊÇíÔä"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330311558725632/6dc92ab82d3df0e4.png",
        "answers": ["ÌÒÑ ÇáŞãÑ"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330312842182657/f50f4fab4b6559c0.png",
        "answers": ["ÍÔíÔ"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429932988625584139/3333333.png",
        "answers": ["ÓæÈÑÇÔí"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429932994351071233/3333333.png",
        "answers": ["ŞæÊÔí"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429933002399940609/3333333.png",
        "answers": ["Çíİæä"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429933012164149249/3333333.png",
        "answers": ["ÊíÓÊÇ áÇÛæÓÇ"]
 
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429933033009840129/3333333.png",
        "answers": ["ÈÓßæÊ ÇÈæ æáÏ"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429933041033674753/3333333.png",
        "answers": ["ÊßÃßÃÊã"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429933050139246592/3333333.png",
        "answers": ["ÇáÌãáÉ ÇáãİíÏÉ"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429933059278635028/204ba71fbee91a03.png",
        "answers": ["ÇáÃæÓßÇÑ"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040573269901332/3333333.png",
        "answers": ["ßäÊ ÇãÔí æÃãÔí"]
 
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040585357754368/3333333.png",
        "answers": ["áÇÇÇÇŞ ÈæÊÁ"]
 
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040593595629568/3333333.png",
        "answers": ["ÇÈæ äÇÕÑ ÓÑì áíáå"]
 
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040602235895810/fghfghfgh.png",
        "answers": ["ÚÏÏ Çááí ÈÑãÌæäí 2"]
 
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040608825147412/hhhhyyrf87654.png",
        "answers": ["Dark_Neet"]
 
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040611819749387/354d9e28fd1264f5.png",
        "answers": ["ÈÇÈÇ ÓäİæÑ ãÊÚÇØí"]
 
              },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040619331878922/4b24f4792476c04f.png",
        "answers": ["ãíÑäÏÇ ÍãÖíÇÊ íáÏ"]
 
              },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040624603987968/5ff29b1066a3b9c7.png",
        "answers": ["åá ÇáÏãÚ ãä Úíäå"]
 
              },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040631885299722/77f33951be682d8f.png",
        "answers": ["ØÇÑÊ ÇáØíÇÑå ØÇÑÊ"]
 
              },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040640928219136/29c240679c04c148.png",
        "answers": ["ÃäÇ İæŞ ÑÇÓí ÑíÔå"]
 
              },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040652542246912/bbcb4aa9853bf1d2.png",
        "answers": ["İÑíŞ ÇáäÌãÉ"]
 
              },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040659437813780/69df1a1ea78bf05c.png",
        "answers": ["ÎÇáÏ ÚÈÏÇáÑÍãä"]
 
              },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040666895024128/8bc7742b95673c38.png",
        "answers": ["ÍÈíÊ ãÑå ãä ŞáÈí"]
 
              },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040674067546113/9d1a9eee36622271.png",
        "answers": ["ßÑÓÊíÇäæ íÒŞ"]
 
              },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040682913333248/f19a97c10ac739e1.png",
        "answers": ["ÃäÊ ŞãÑ íÇ ŞãÑ"]
 
              },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040692140539904/0a25039aa164a42b.png",
        "answers": ["ÇäÇ ÇÌãá ãÎáæŞ"]
 
              },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040699317256192/da72e3e3fe6bfceb.png",
        "answers": ["ÏæäÊ ÊÇÊÔ"]
 
              },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040706464350218/d6339ed123a20afe.png",
        "answers": ["Êæã æÌíÑí"]
 
              },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040714588454912/965f8266e9501b35.png",
        "answers": ["ÏÈÇÈ ÇÑÈÚ ßİÑÇÊ"]
 
              },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040721601331211/ae8cf2598c441e76.png",
        "answers": ["ÇáŞÑÔ ÇáÃÓæÏÏ"]
 
              },
    {
   
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040729637748747/bf76692d54e6a0dd.png",
        "answers": ["ÏÏÓä ãæÏíá 85"]
 
    },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040736835043341/e66ff909a6330b13.png",
        "answers": ["ÇáÍÇÑËíÁ"]
 
    },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040746503176194/351af3b19fc53323.png",
        "answers": ["ÚÒÇÒí ãÓÑÚ"]
 
    },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040751557181440/6777776666.png",
        "answers": ["ÌÇßí ÔÇÇä"]
 
    },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040758108684289/2613844efcb8b05b.png",
        "answers": ["ÏÇÑß äÊ"]
 
    },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040765671014401/c89aa167715a85b9.png",
        "answers": ["İÇäÊÇÓÊíß"]
 
    },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040772818239489/01d73182b48785e1.png",
        "answers": ["ÒÈÇáå ãÊäŞáÉ"]
 
    },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040778467835924/9dff572a5bf1b602.png",
        "answers": ["ÇßÓ ÈæßÓ íáÏ"]
 
        },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040783228370964/91ebb70e0dd936be.png",
        "answers": ["ÈßÓá íÇáæÕÎÎ"]

    }
];
 
client.on('message', message => {
if (!points[message.author.id]) points[message.author.id] = {
    points: 0,
  };
  if(!message.guild) return;
    let id = message.author.id,prefix="$";
    if (spee[id] && (new Date).getTime() - spee[id] < 15*1000) {
        let r = (new Date).getTime() - spee[id];
        r = 15*1000 - r;
    message.channel.send(`**Sorry, Please Wait ${pretty(r, {verbose:true})}...**`).then(m => m.delete(5000));
    return;
    }
    if ( message.content == prefix+'speed'){
       
        try{
}catch(e){
 
}
 
    if(!message.channel.guild) return message.reply('**åĞÇ ÇáÃãÑ ááÓíÑİÑÇÊ İŞØ**').then(m => m.delete(3000));
 
 
const item = type[Math.floor(Math.random() * type.length)];
const filter = response => {  
    return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
};
message.channel.send('**Game is Start now...!**').then(msg => {
 
 const embed = new Discord.RichEmbed()
 .setColor("0054dd")
     .setAuthor(`? |You have »15« seconds to type the word`)
          .setImage(`${item.type}`)
 .setFooter(`${message.author.tag}`, message.author.avatarURL)
 
 
         
msg.channel.send(embed).then(() => {
        message.channel.awaitMessages(filter, { maxMatches: 1, time: 15000, errors: ['time'] })
        .then((collected) => {
                  const sh = new Discord.RichEmbed()
  .setColor("04791c")
  .setDescription('**? |Good Job +1P**')
   .setFooter(`${collected.first().author}`)
  message.channel.sendEmbed(sh);
            let won = collected.first().author; // İí åĞÇ ÇáÓØÑ íŞæã ÇáßæÏ ÈÓÍÈ ÇáÃí Ïí ÇáĞí ŞÇã ÈÇáÃÌÇÈÉ ÇæáÇğ
            points[won.id].points++;
          })
          .catch(collected => { // İí ÍÇá áã íŞã ÃÍÏ ÈÇáÅÌÇÈÉ
            message.channel.send(`?? |**Time Is End**`);
          })
        })
    })
    spee[id] = (new Date).getTime()
}
});


client.on('ready', function(){	
    var ms = 40000 ;	
    var setGame = ['Chicago Server'];	
    var i = -1;	
    var j = 0;	
    setInterval(function (){	
        if( i == -1 ){	
j = 1;	
       }	
        if( i == (setGame.length)-1 ){	
            j = -1;	
      }	
       i = i+j;	
        client.user.setGame(setGame[i],`http://www.youtube.com/gg`);	
}, ms);	
	
});


client.on('message', message => {
  var prefix = "$"; 
if (message.content.startsWith(prefix + 'perms')) {
         if(!message.channel.guild) return;
         var perms = JSON.stringify(message.channel.permissionsFor(message.author).serialize(), null, 4);
         var zPeRms = new Discord.RichEmbed()
         .setColor('RANDOM')
         .setTitle(':tools: Permissions')
         .addField('Your Permissions:',perms)
                  message.channel.send({embed:zPeRms});

    }
});


 client.on('message', message => {
	 var prefix = "$";
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);
  
 

if (command == "za5") {
    let say = new Discord.RichEmbed()
        .setTitle('Text emboss :')
   message.channel.send(`\n ${zalgo(args.join(' '))}`);
  }

});

client.on("message", message => {
	var prefix = "$";
	var args = message.content.split(' ').slice(1); 
	var msg = message.content.toLowerCase();
	if( !message.guild ) return;
	if( !msg.startsWith( prefix + 'role' ) ) return;
	if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(' **__áíÓ áÏíß ÕáÇÍíÇÊ__**');
	if( msg.toLowerCase().startsWith( prefix + 'roleremove' ) ){
		if( !args[0] ) return message.reply( '**:x: íÑÌì æÖÚ ÇáÔÎÕ ÇáãÑÇÏ ÓÍÈ ãäå ÇáÑÊÈÉ**' );
		if( !args[1] ) return message.reply( '**:x: íÑÌì æÖÚ ÇáÑÊÈÉ ÇáãÑÇÏ ÓÍÈåÇ ãä ÇáÔÎÕ**' );
		var role = msg.split(' ').slice(2).join(" ").toLowerCase(); 
		var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first(); 
		if( !role1 ) return message.reply( '**:x: íÑÌì æÖÚ ÇáÑÊÈÉ ÇáãÑÇÏ ÓÍÈåÇ ãä ÇáÔÎÕ**' );if( message.mentions.members.first() ){
			message.mentions.members.first().removeRole( role1 );
			return message.reply('**:white_check_mark: [ '+role1.name+' ] ÑÊÈÉ [ '+args[0]+' ] Êã ÓÍÈ ãä **');
		}
		if( args[0].toLowerCase() == "all" ){
			message.guild.members.forEach(m=>m.removeRole( role1 ))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] Êã ÓÍÈ ãä Çáßá ÑÊÈÉ**');
		} else if( args[0].toLowerCase() == "bots" ){
			message.guild.members.filter(m=>m.user.bot).forEach(m=>m.removeRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] Êã ÓÍÈ ãä ÇáÈæÊÇÊ ÑÊÈÉ**');
		} else if( args[0].toLowerCase() == "humans" ){
			message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.removeRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] Êã ÓÍÈ ãä ÇáÈÔÑííä ÑÊÈÉ**');
		} 	
	} else {
		if( !args[0] ) return message.reply( '**:x: íÑÌì æÖÚ ÇáÔÎÕ ÇáãÑÇÏ ÇÚØÇÆåÇ ÇáÑÊÈÉ**' );
		if( !args[1] ) return message.reply( '**:x: íÑÌì æÖÚ ÇáÑÊÈÉ ÇáãÑÇÏ ÇÚØÇÆåÇ ááÔÎÕ**' );
		var role = msg.split(' ').slice(2).join(" ").toLowerCase(); 
		var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first(); 
		if( !role1 ) return message.reply( '**:x: íÑÌì æÖÚ ÇáÑÊÈÉ ÇáãÑÇÏ ÇÚØÇÆåÇ ááÔÎÕ**' );if( message.mentions.members.first() ){
			message.mentions.members.first().addRole( role1 );
			return message.reply('**:white_check_mark: [ '+role1.name+' ] ÑÊÈÉ [ '+args[0]+' ] Êã ÇÚØÇÁ **');
		}
		if( args[0].toLowerCase() == "all" ){
			message.guild.members.forEach(m=>m.addRole( role1 ))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] Êã ÇÚØÇÁ Çáßá ÑÊÈÉ**');
		} else if( args[0].toLowerCase() == "bots" ){
			message.guild.members.filter(m=>m.user.bot).forEach(m=>m.addRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] Êã ÇÚØÇÁ ÇáÈæÊÇÊ ÑÊÈÉ**');
		} else if( args[0].toLowerCase() == "humans" ){
			message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.addRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] Êã ÇÚØÇÁ ÇáÈÔÑííä ÑÊÈÉ**');
		} 
	} 
});

client.on('message', message => {
    if (message.content === "=rooms") {
        if (message.author.bot) return
                      if (!message.guild) return;

        var channels = message.guild.channels.map(channels => `${channels.name}, `).join(' ')
        const embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .addField(`${message.guild.name}`,`**Rooms:white_check_mark:**`)
        .addField(':arrow_down: Rooms Number. :heavy_check_mark:',`** ${message.guild.channels.size}**`)
        
.addField(':arrow_down:Rooms  Name. :heavy_check_mark::',`**[${channels}]**`)
        message.channel.sendEmbed(embed);
    }
});

var AsciiTable = require('ascii-data-table').default
client.on('message', message =>{

    if(message.content == "=roles"){
        var 
        ros=message.guild.roles.size,
        data = [['Rank', 'RoleName']]
        for(let i =0;i<ros;i++){
            if(message.guild.roles.array()[i].id !== message.guild.id){
         data.push([i,`${message.guild.roles.filter(r => r.position == ros-i).map(r=>r.name)}`])
        }}
        let res = AsciiTable.table(data)

        message.channel.send(`**\`\`\`xl\n${res}\`\`\`**`);
    }
});
 
client.on('ready', () => {
	console.log('I am ready!'); 
  });

client.on('message', message => {
var prefix = "$";
      if(message.content === prefix + "hc") {
      if(!message.channel.guild) return;
      if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('You Dont Have Perms :x:');
             message.channel.overwritePermissions(message.guild.id, {
             READ_MESSAGES: false
 })
              message.channel.send('Channel Hided Successfully ! :white_check_mark:  ')
 }
});


client.on('message', message => {
var prefix = "$";
      if(message.content === prefix + "sc") {
      if(!message.channel.guild) return;
      if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply(':x:');
             message.channel.overwritePermissions(message.guild.id, {
             READ_MESSAGES: true
 })
              message.channel.send('Done  ')
 }
});


client.on('message', message => {
    if (message.content == "=quas") {
         message.react('??','??')
        var x = ['Çíä íáÚÈ ãÕØİí İÊÍí¿', 'ãÇ åæ ÇÓã ãáÚÈ ÈÇÑÔÇáæäÉ', 'ãÇ åæ íæã ÇáÍÌ ÇáÃßÈÑ¿', 'ãÇ åæ ÃØæá ÃäåÇÑ ÃæÑÈÇ ¿', 'ãÇ åæ ÇÓã ÈíÊ ÇáÏÌÇÌ', 'ãÇ åæ Ãæá Èäß ŞÇã ÈÇáäÔÇØ ÇáãÕÑİí İí ÇáÓÚæÏíÉ ÚÇã 1926ã' , 'ãÇ åæ Ãæá ÌÇãÚ ÃŞíã İí ãÕÑ','ãÇ åæ ÃØæá äåÑ İí ÂÓíÇ','ãÇ åæ ÃŞÑÈ ßæßÈ Åáì ÇáÔãÓ','ãÇ åæ ÇáÍíæÇä ÇáĞí íõÓãì ÇáÈåäÓ','ãÇ åæ Çæá ãÓÌÏ ÃÓÓ ÈÇáãÏíäÉ','ãÊì æŞÚ ÕáÍ ÇáÍÏíÈíÉ ÚÇã 6åÜ Çæ 3åÜ Çæ 2åÜ¿','ãÊì ŞÇãÊ ÃãÑíßÇ ÈÃæá ÑÍáÉ İÖÇÆíÉ','ãÊì ßÇäÊ ÛÒæÉ ÎíÈÑ¿','ãÇ åí ÇáÓæÑÉ ÇáÊí ÊÈÏÃ ÈŞæáå ÊÚÇáì " íÇ ÃíåÇ ÇáäÈí ÇÊŞ Çááå æáÇ ÊØÚ ÇáßÇİÑíä æÇáãäÇİŞíä Åä Çááå ßÇä ÚáíãÇ ÍßíãÇ ".ÇÌÈ¿','ãÇ åí ÇáÓæÑÉ ÇáÊí íØáŞ ÚáíåÇ ÚÑæÓ ÇáŞÑÂä','ãÇĞÇ íÓãì ãä áÇíŞÑÃ æáÇíßÊÈ','ãÇåí Ãæá ÏæáÉ ÇÓÊÎÏãÊ ØÇÈÚ ÇáÈÑíÏ','ãÇåæ ÔÚÇÑ ÇáæáÇíÇÊ ÇáãÊÍÏÉ ÇáÇãÑíßíÉ','ãÇåæ ÇĞßí ÇáÍíæÇäÇÊ','ãä åæ ãßÊÔİ ÃãÑíßÇ','ãÇãÚäì "İÑÚæä" ÇÌÈ¿','ãÇåæ ÇŞÑÈ ßæßÈ Åáì ÇáÇÑÖ','ãÇ åí äÓÈå ÇáãíÇå ãä ÇáßÑå ÇáÇÑÖíå?','ßã ÚÏÏ ÇáÓÌÏÇÊ İí ÇáŞÑÂä ÇáßÑíã¿','ãä åæ ÈØá ßÇÓ ÇáÚÇáã İí ÚÇã 1966','Ãíä ÃİÊÊÍ Çæá ãÊÍİ İí ÇáÚÇáã?','ãÇÃÓã ÃäËì ÇáÍãÇÑ?','ßã ÊÈáÛ ÏÑÌå ÍÑÇÑå ÇáÔãÓ¿','ãä åí ãÏíäÉ ÇáÖÈÇÈ','Ãíä ÊæÌÏ ÃØæá ÓßÉ ÍÏíÏ İí ÇáÚÇáã?'
        ];
        var x2 = ['ÇáÊÚÇæä', 'ßÇãÈ äæ', 'íæã ÇáäÍÑ', 'ÇáÏÇäæÈ', 'Şä', 'ÇáÈäß ÇáåæáäÏí', 'ÌÇãÚ ÚãÑæ Èä ÇáÚÇÕ','ÇáíÇäÌÓÊí','ÚØÇÑÏ','ÇáÇÓÏ','ãÓÌÏ ŞÈÇÁ','6','ÓäÉ 1962','ÚÇã 7åÜ','ÇáÇÍÒÇÈ','ÓæÑÉ ÇáÑÍãä','Çãí','ÈÑíØÇäíÇ','ÇáäÓÑ ÇáÇÕáÚ','ÇáÏáİíä','ßæáãÈÓ','ÇáÈíÊ ÇáßÈíÑ','ÇáÒåÑå','71%','15 ÓÌÏÉ','ÇäßáÊÑÇ ','ÇáŞÇåÑÉ','ÇáÇÊÇä','15 ãáíæä ÏÑÌå ãÆæíÉ','áäÏä','ßäÏÇ'
        ];
	    var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(`?? ÇãÇãß ÏŞíŞÉ áÍá ÇáÇÓÆáÉ , ÇáÓÄÇá íŞæá :  __**${x[x3]}**__ `).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
               thing: true,
               maxMatches : 1,
                time : 60000,
                 maxUses: 1,
                errors : ['time']
            })
        r.catch(() => {
            return message.channel.send(`:negative_squared_cross_mark: áŞÏ ÇäÊåì ÇáæŞÊ æáã íŞã ÃÍÏ ÈÇáÃÌÇÈÉ ÈÔßá ÕÍíÍ `)
        })

        r.then((collected)=> {
            message.channel.send(`${collected.first().author} áŞÏ ŞãÊ ÈßÊÇÈÉ ÇáÌæÇÈ ÇáÕÍíÍ  `);
            message.react('?')
        })
        })
    }
});

client.on('message', message => { 
let prefix = '$'
    if (message.content.startsWith(prefix + 'emojilist')) {

        const List = message.guild.emojis.map(e => e.toString()).join(" ");

        const EmojiList = new Discord.RichEmbed()
            .setTitle('? Emojis') 
            .setAuthor(message.guild.name, message.guild.iconURL) 
            .setColor('RANDOM') 
            .setDescription(List) 
            .setFooter(message.guild.name) 
        message.channel.send(EmojiList) 
    }
});

client.on('message',function(message) {
	let prefix = "$";
let args = message.content.split(" ").slice(1).join(" ");
if(message.content.startsWith(prefix + "say")) {
if(!args) return;
message.channel.send(`**# ${args}**`); // ãÍØæØ # ÚÔÇä ãÍÏ íÓÊÎÏã ÇáÈæÊ áÊÈäíÏ / ØÑÏ ÇÍÏ ãä ÇáÓíÑİÑ
}
});



client.on('message', async message =>{
  if (message.author.boss) return;
	var prefix = "$";

if (!message.content.startsWith(prefix)) return;
	let command = message.content.split(" ")[0];
	 command = command.slice(prefix.length);
	let args = message.content.split(" ").slice(1);
	if (command == "mute") {
		if (!message.channel.guild) return;
		if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.reply("ÇäÊ áÇ Êãáß ÕáÇÍíÇÊ !! ").then(msg => msg.delete(5000));
		if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply("ÇáÈæÊ áÇíãáß ÕáÇÍíÇÊ ").then(msg => msg.delete(5000));;
		let user = message.mentions.users.first();
		let muteRole = message.guild.roles.find("name", "Muted");
		if (!muteRole) return message.reply("** áÇ íæÌÏ ÑÊÈÉ ÇáãíæÊ 'Muted' **").then(msg => {msg.delete(5000)});
		if (message.mentions.users.size < 1) return message.reply('** íÌÈ Úáíß ÇáãäÔä ÇæáÇğ **').then(msg => {msg.delete(5000)});
		let reason = message.content.split(" ").slice(2).join(" ");
		message.guild.member(user).addRole(muteRole);
		const muteembed = new Discord.RichEmbed()
		.setColor("RANDOM")
		.setAuthor(`Muted!`, user.displayAvatarURL)
		.setThumbnail(user.displayAvatarURL)
		.addField("**:busts_in_silhouette:  ÇáãÓÊÎÏã**",  '**[ ' + `${user.tag}` + ' ]**',true)
		.addField("**:hammer:  Êã ÈæÇÓØÉ **", '**[ ' + `${message.author.tag}` + ' ]**',true)
		.addField("**:book:  ÇáÓÈÈ**", '**[ ' + `${reason}` + ' ]**',true)
		.addField("User", user, true)
		message.channel.send({embed : muteembed});
		var muteembeddm = new Discord.RichEmbed()
		.setAuthor(`Muted!`, user.displayAvatarURL)
		.setDescription(`      
${user} ÇäÊ ãÚÇŞÈ ÈãíæÊ ßÊÇÈí ÈÓÈÈ ãÎÇáİÉ ÇáŞæÇäíä
${message.author.tag} ÊãÊ ãÚÇŞÈÊß ÈæÇÓØÉ
[ ${reason} ] : ÇáÓÈÈ
ÇĞÇ ßÇäÊ ÇáÚŞæÈÉ Úä ØÑíŞ ÇáÎØÃ Êßáã ãÚ ÇáãÓÄáíä
`)
		.setFooter(`İí ÓíÑİÑ : ${message.guild.name}`)
		.setColor("RANDOM")
	user.send( muteembeddm);
  }
if(command === `unmute`) {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.sendMessage("**áíÓ áÏíß ÕáÇÍíÉ áİß Úä ÇáÔÎÕ ãíæÊ**:x: ").then(m => m.delete(5000));
if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply("**ãÇ ÚäÏí ÈÑãÔä**").then(msg => msg.delete(6000))

  let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!toMute) return message.channel.sendMessage("**Úáíß ÇáãäÔä ÃæáÇø**:x: ");

  let role = message.guild.roles.find (r => r.name === "Muted");
  
  if(!role || !toMute.roles.has(role.id)) return message.channel.sendMessage("**áã íÊã ÇÚØÇÁ åĞå ÔÎÕ ãíæÊ ãä ÇáÃÓÇÓ**:x:")

  await toMute.removeRole(role)
  message.channel.sendMessage("**áŞÏ Êã İß ÇáãíæÊ Úä ÔÎÕ ÈäÌÇÍ**:white_check_mark:");

  return;

  }

});
 


client.on('guildCreate', guild => {
  var embed = new Discord.RichEmbed()
  .setColor(0x5500ff)
  .setDescription(`**ÔßÑÇğ áß áÅÖÇİå ÇáÈæÊ Çáì ÓíÑİÑß**`)
      guild.owner.send(embed)
});

    client.on('message', message => {
var prefix = "$";
var cats = ["http://palestine-kitchen.ps/wp-content/uploads/2017/12/%D9%86%D9%83%D8%AA-%D8%AF%D8%A8%D8%A7%D9%86%D8%A9.png","http://www.i7lm.com/wp-content/uploads/2017/04/136769797816.jpg","https://4.bp.blogspot.com/-p62zmDIDXmI/WKzqNt9smaI/AAAAAAAAC4Q/sW_bSIB8OaQhwOYFeplc3uzz8PBN7l3YACEw/s1600/13602501135.jpg","https://www.universemagic.com/images/2016/03/7938-2-or-1457539273.jpg","https://1.bp.blogspot.com/-yFk-FzHSyE8/WR9fmPcsCUI/AAAAAAAAE6c/AmvjLadOiLY9GiCqMLHgA121bY2RS_dCwCLcB/s1600/%25D9%2586%25D9%2583%25D8%25AA%2B%25D9%2585%25D8%25B6%25D8%25AD%25D9%2583%25D8%25A9%2B1.jpg","https://l7zaat.com/wp-content/uploads/2018/02/423.jpg","https://www.petfinder.com/wp-content/uploads/2012/11/101438745-cat-conjunctivitis-causes.jpg","https://i.fatafeat.com/storage/attachments/15/image3_698123_large.jpg","http://www.shuuf.com/shof/uploads/2018/02/08/jpg/shof_97d686082bdb0a2.jpg"];
        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith(prefix + 'äßÊ')) {
         var cat = new Discord.RichEmbed()
.setImage(cats[Math.floor(Math.random() * cats.length)])
message.channel.sendEmbed(cat);
    }
});
var fkk =[
        {f:"İßß ÈÓã Çááå ÇáÑÍãä ÇáÑÍíã",k:"È Ó ã Ç á á å Ç á Ñ Í ã ä Ç á Ñ Í í ã"},
        {f:"İßß ÈÇÕ",k:"È Ç Õ"},
        {f:"İßß ÚÑÈÉ ",k:"Ú Ñ È É"},
        {f:"İßß ÓíÇÑÉ",k:"Ó í Ç Ñ É"},
        {f:"İßß ÓíÑİÑäÇ ÇÍáì ÓíÑİÑ",k:"Ó í Ñ İ Ñ ä Ç Ç Í á ì Ó í Ñ İ Ñ"},
        {f:"İßß ÇáÚäæÏ ",k:"Ç á Ú ä æ Ï"},
        {f:"İßß ÇáãÓÊÊßÚßÈÊíå",k:"Ç á ã Ó Ê Ê ß Ú ß È Ê í å"},
        {f:"İßß ÏÍæã",k:"Ï Í æ ã"},
        {f:"İßß ÇæäÑäÇ ÇÍáì ÇæäÑ",k:"Ç æ ä Ñ ä Ç Ç Í á ì Ç æ ä Ñ"},
        {f:"İßß ÇáÍíÇÉ ÍáæÉ",k:"Ç á Í í Ç É Í á æ É"},
        {f:"İßß ßÇÒÎÓÊÇä ",k:"ß Ç Ò Î Ó Ê Ç ä"},
        {f:"áÍã ÇáÍãÇã ÍáÇá æáÍã ÇáÍãÇÑ ÍÑÇã ",k:"á Í ã Ç á Í ã Ç ã Í á Ç á æ á Í ã Ç á Í ã Ç Ñ Í Ñ Ç ã"},
        {f:"İßß ÇÓÊæäíÇ ",k:"Ç Ó Ê æ ä í Ç"},
        {f:"İßß áŞãÉ æÌÛãå ",k:"á Ş ã É æ Ì Û ã å"},
        {f:"İßß ÒäÏíŞ  ",k:"Ò ä Ï í Ş"},
        {f:"İßß ÇÓÊÑÇáíÇ ",k:"Ç Ó Ê Ñ Ç á í Ç"},
        {f:"İßß ÓæÑíÇ ",k:"Ó æ Ñ í Ç"},
        {f:"İßß ÇáÇÑÏä ",k:"Ç á Ç Ñ Ï ä"},
        {f:"İßß ØãÇØã ",k:"Ø ã Ç Ø ã"},
        {f:"İßß ÓÇÑÉ ",k:"Ó Ç Ñ É"},
        {f:"İßß ÏÑÇÌæä ",k:"Ï Ñ Ç Ì æ ä"},
        {f:"İßß ÓíÑİÑ ",k:"Ó í Ñ İ Ñ"},
        {n:"İßß ÇáÌÈá",m:"Ç á Ì È á"},
        {n:"İßß åÖÈÉ",m:"å Ö È É"},
        {n:"İßß ÎæÇØÑ",m:"Î æ Ç Ø Ñ"},
        {n:"İßß ÇÑÍÈæ",m:"Ç Ñ Í È æ"},
        {n:"İßß ÇØäÎ ÓíÑİÑ",m:"Ç Ø ä Î Ó í İ Ñ"},
        {n:"İßß ÇÍÈß",m:"Ç Í È ß"},
        {n:"İßß ÓÈÑÇíÒ",m:"Ó È Ñ Ç í Ò"},
        {n:"İßß æáí Úáì ÃãÊß",m:"æ á í Ú á ì Ã ã Ê ß"},
        {n:"İßß Çáæ ãÍÏ",m:"Ç á æ ã Í ã Ï"},


   ];


   client.on("message", async message => {
	   var prefix = "$";
    if(message.content == prefix+"İßß"){
        if(UserBlocked.has(message.guild.id)) return message.channel.send("åäÇß ÌáÓÉ .")
        UserBlocked.add(message.guild.id)
        var ask = fkk[Math.floor(Math.random() * fkk.length)];
        let embed = new Discord.RichEmbed()
        .setTitle('áÚÈÉ İßß')
        .setAuthor(message.author.username, message.author.avatarURL)
        .setColor("RANDOM")
        .setDescription(ask.f);
        message.channel.sendEmbed(embed).then(msg=> msg.delete(200000))
        const msgs = await message.channel.awaitMessages(msg => msg.author.id !== client.user.id ,{maxMatches:1,time:100000});
            UserBlocked.delete(message.guild.id)
        msgs.forEach(result => {
           if(result.author.id == client.user.id) return;
           if(result.content == "İßß") return
           if(result.content == ask.k){

             let embeds = new Discord.RichEmbed()
             .setTitle(':white_check_mark: ÇÌÇÈÉ ÕÍíÍÉ')
             .setAuthor(message.author.username, message.author.avatarURL)
             .setColor("RANDOM")
             .setDescription(`**${result.author.username}** ÇáÅÌÇÈÉ ÕÍíÍÉ`);
                message.channel.sendEmbed(embeds);                return;
           } else {

                               var embedx = new Discord.RichEmbed()
             .setTitle(':x:ÎØÇÁ')
             .setAuthor(message.author.username, message.author.avatarURL)
             .setColor("RANDOM")
             .setDescription(`**${result.author.username}** ÇáÅÌÇÈÉ ÎÇØÆÉ`);

                message.channel.sendEmbed(embedx);
           }
     });
  }
});





   client.on("message", async message => {
var prefix = "$";
var aoasm =[
    {q:"ãÇ ÚÇÕãÉ **ÇáãÛÑÈ**",a:"ÇáÑÈÇØ"},
    {q:"ãÇ ÚÇÕãÉ **ÇİÛÇäÓÊÇä**",a:"ßÈá"},
    {q:"ãÇ ÚÇÕãÉ ** ÇáÈÇäíÇ**",a:"ÊíÑÇä"},
    {q:"ãÇ ÚÇÕãÉ **ÇáÌÒÇÆÑ **",a:"ÇáÌÒÇÆÑ"},
    {q:"ãÇ ÚÇÕãÉ ** **",a:"ÇáÌÒÇÆÑ"},
    {q:"ãÇ ÚÇÕãÉ **ÇäÏæÑÇ áÇ İíáÇ **",a:"ÇäÏæÑÇ"},
    {q:"ãÇ ÚÇÕãÉ **ÇäÌæáÇ**",a:"áæÇäÏÇ"},
    {q:"ãÇ ÚÇÕãÉ **ÇäÊíÌæÇ æÈÇÑÈæÏÇ**",a:"ÓÇä ÌæäÒ"},
    {q:"ãÇ ÚÇÕãÉ **ÇáÇÑÌäÊíä**",a:"ÈæíäÓ ÇíÑÓ"},
    {q:"ãÇ ÚÇÕãÉ **ÇÑãíäíÇ**",a:"íÑíİÇä"},
    {q:"ãÇ ÚÇÕãÉ ** ãÕÑ**",a:"ÇáŞÇåÑÉ"},
    {q:"ãÇ ÚÇÕãÉ ** ÇÓÊÑÇáíÇ**",a:"ßÇäÈÑÇ"},
    {q:"ãÇ ÚÇÕãÉ **ÇáäãÓÇ**",a:"İííäÇ"},
    {q:"ãÇ ÚÇÕãÉ ** ÇĞÑÈíÌÇä**",a:"ÈÇßæ"},
    {q:"ãÇ ÚÇÕãÉ **ÌÒÑ ÇáÈåÇãÇ**",a:"äÇÓÇæ"},
    {q:"ãÇ ÚÇÕãÉ **ÇáÈÍÑíä**",a:"ÇáãäÇãÉ"},
    {q:"ãÇ ÚÇÕãÉ ** ÈäÌáÇÏ  Ô**",a:"ÏßÜÇ"},
    {q:"ãÇ ÚÇÕãÉ **ÈÇÑÈÇÏæÓ **",a:"ÈÑíÏÌÊÇæä"},
    {q:"ãÇ ÚÇÕãÉ **ÈíáÇ ÑæÓíÇ**",a:"ãíäÓß"},
    {q:"ãÇ ÚÇÕãÉ ** ÈáÌíßÇ**",a:"ÈÑæßÓá"},
    {q:"ãÇ ÚÇÕãÉ ** ÈíáíÒ**",a:"Èáæã ÈÇä"},
    {q:"ãÇ ÚÇÕãÉ ** Èäíä**",a:"ÈæÑÊæ äæİæ"},
    {q:"ãÇ ÚÇÕãÉ ** ÈæÊÇä**",a:"Ëíãİæ"},
    {q:"ãÇ ÚÇÕãÉ **ÈæáíİíÇ **",a:"áÇÈÇÒ"},
    {q:"ãÇ ÚÇÕãÉ ** ÇáÈæÓäÉ æÇáåÑÓß**",a:"ÓÑÇííİæ"},
    {q:"ãÇ ÚÇÕãÉ ** ÈæÊÓæÇäÇ**",a:"ÌÇÈæÑæä"},
    {q:"ãÇ ÚÇÕãÉ ** ÇáÈÑÇÒíá**",a:"ÈÑÇÒíáíÇ"},
    {q:"ãÇ ÚÇÕãÉ ** ÈÑæäÇì**",a:"ÈäÏÑ ÓÑì ÈíÌÇæÇä"},
    {q:"ãÇ ÚÇÕãÉ ** ÈáÛÇÑíÇ**",a:"ÕæİíÇ"},
    {q:"ãÇ ÚÇÕãÉ ** ÈæÑßíäÇ İÇÓæ**",a:"æÇÌÇÏæÌæ"},
    {q:"ãÇ ÚÇÕãÉ **ÈæÑæäÏì **",a:"ÈæÌæãÈæÑÇ"},
    {q:"ãÇ ÚÇÕãÉ **ßãÈæÏíÇ **",a:"Èäæã ÈäÜå"},
    {q:"ãÇ ÚÇÕãÉ ** ÇáßÇãíÑæä**",a:"íÇæäÏì"},
    {q:"ãÇ ÚÇÕãÉ ** ßäÏÇ**",a:"ÇæÊÇæÇ"},
    {q:"ãÇ ÚÇÕãÉ ** ÇáÑÃÓ ÇáÇÎÖÑ**",a:"ÈÑÇíÇ"},
    {q:"ãÇ ÚÇÕãÉ **ÊÔÇÏ **",a:"äÌÇãíäÇ"},
    {q:"ãÇ ÚÇÕãÉ ** Ôíáì**",a:"ÓÇäÊíÇÌæ"},
    {q:"ãÇ ÚÇÕãÉ **ÇáÕíä **",a:"Èßíä"},
    {q:"ãÇ ÚÇÕãÉ ** **",a:"ãæÑæäì"},
    {q:"ãÇ ÚÇÕãÉ **ßæÓÊÇÑíßÇ **",a:"ÓÇä ÎæÓíå"},
    {q:"ãÇ ÚÇÕãÉ ** ßæÊ ÏíİæÇÑ**",a:"ÇÈíÏÌÇä"},
    {q:"ãÇ ÚÇÕãÉ **ßÑæÇÊíÇ **",a:"ÒÛÑÈ"},
    {q:"ãÇ ÚÇÕãÉ ** ßæÈÇ**",a:"åÇİÇäÇ"},
    {q:"ãÇ ÚÇÕãÉ ** ŞÈÑÕ**",a:" "},
    {q:"ãÇ ÚÇÕãÉ ** ÌãåæÑíÉ ÇáÊÔíß**",a:"ÈÑÇÛ"},
    {q:"ãÇ ÚÇÕãÉ **ÇáÏäãÇÑß **",a:"ßæÈäåÇÌä"},
    {q:"ãÇ ÚÇÕãÉ ** ÌíÈæÊì**",a:"ÌíÈæÊì"},
    {q:"ãÇ ÚÇÕãÉ ** ÏæãíäíßÇ**",a:"ÑæÓíæ"},
    {q:"ãÇ ÚÇÕãÉ **ÇáÏæãíäíßÇä **",a:"ÓÇä ÏæãíäÌæ"},
    {q:"ãÇ ÚÇÕãÉ **ÊíãæÑ ÇáÔÑŞíÉ **",a:"Ïíáì"},
    {q:"ãÇ ÚÇÕãÉ **ŞØÑ  **",a:"ÇáÏæÍÉ"},
    {q:"ãÇ ÚÇÕãÉ **ÇáÓÚæÏíÉ  **",a:"ÇáÑíÇÖ"},
    {q:"ãÇ ÚÇÕãÉ **ÓæÑíÇ  **",a:"ÏãÔŞ"},
    {q:"ãÇ ÚÇÕãÉ **ÊÑßíÇ  **",a:"ÇäŞÑÉ"},
    {q:"ãÇ ÚÇÕãÉ **ÇáÚÑÇŞ  **",a:"ÈÛÏÇÏ"},
    {q:"ãÇ ÚÇÕãÉ **ÇáÈäÇä  **",a:"ÈíÑæÊ"},
    {q:"ãÇ ÚÇÕãÉ **İáÓØíä  **",a:"ÇáŞÏÓ"},
    {q:"ãÇ ÚÇÕãÉ **ÇãÑíßÇ  **",a:"æÇÔäØä"},
    {q:"ãÇ ÚÇÕãÉ **ÇáÇÑÏä  **",a:"ÚãÇä"},    
    {q:"ãÇ ÚÇÕãÉ **ÇáÓæÏÇä  **",a:"ÎÑØæã"},
    {q:"ãÇ ÚÇÕãÉ **ÇáãÇ  íÇ  **",a:"ÈÑáíä"},
    {q:"ãÇ ÚÇÕãÉ **ßäÏÇ  **",a:"ÇæÊÇæÇ"},
    {q:"ãÇ ÚÇÕãÉ **ÇáÈÑÇÒíá  **",a:"ÈÑÇÒíáíÇ"},
   ];
    if(message.content == prefix+"ÚæÇÕã"){
        if(UserBlocked.has(message.guild.id)) return message.channel.send("åäÇß ÌáÓÉ .")
        UserBlocked.add(message.guild.id)
        var ask = aoasm[Math.floor(Math.random() * aoasm.length)];
        let embed = new Discord.RichEmbed()
        .setTitle('ÓÄÇá ÚæÇÕã')
        .setAuthor(message.author.username, message.author.avatarURL)
        .setColor("RANDOM")
        .setDescription(ask.q);
        message.channel.sendEmbed(embed).then(msg=> msg.delete(20000))
        const msgs = await message.channel.awaitMessages(msg => msg.author.id !== client.user.id ,{maxMatches:1,time:10000});
            UserBlocked.delete(message.guild.id)
        msgs.forEach(result => {
           if(result.author.id == client.user.id) return;
           if(result.content == "ÚÇÕãÉ") return
           if(result.content == ask.a){
             let embeds = new Discord.RichEmbed()
             .setTitle(':white_check_mark: ÇÌÇÈÉ ÕÍíÍÉ')
             .setAuthor(message.author.username, message.author.avatarURL)
             .setColor("RANDOM")
             .setDescription(`**${result.author.username}** ÇáÅÌÇÈÉ ÕÍíÍÉ`);
                message.channel.sendEmbed(embeds);                return;
           } else {

                                  var embedx = new Discord.RichEmbed()
                .setTitle(':x:ÎØÇÁ')
                .setAuthor(message.author.username, message.author.avatarURL)
                .setColor("RANDOM")
                .setDescription(`**${result.author.username}** ÇáÅÌÇÈÉ ÎÇØÆÉ`);
                message.channel.sendEmbed(embedx);
           }
     });
  }
});

client.on("message", message => {
    const prefix = "$"
              
          if(!message.channel.guild) return;
   if(message.author.bot) return;
      if(message.content === prefix + "image"){ 
          const embed = new Discord.RichEmbed()
  
      .setTitle(`This is  ** ${message.guild.name} **  Photo !`)
  .setAuthor(message.author.username, message.guild.iconrURL)
    .setColor(0x164fe3)
    .setImage(message.guild.iconURL)
    .setURL(message.guild.iconrURL)
                    .setTimestamp()

   message.channel.send({embed});
      }
  });


const cuttweet = [     'ßÊ ÊæíÊ ş| ÊÎíøá áæ Ãäß ÓÊÑÓã ÔíÁ æÍíÏ İíÕÈÍ ÍŞíŞÉ¡ ãÇĞÇ ÓÊÑÓã¿',     'ßÊ ÊæíÊ | ÃßËÑ ÔíÁ íõÓßöÊ ÇáØİá ÈÑÃíß¿',     'ßÊ ÊæíÊ | ÇáÍÑíÉ áÜ ... ¿',     'ßÊ ÊæíÊ | ŞäÇÉ ÇáßÑÊæä ÇáãİÖáÉ İí ØİæáÊß¿',     'ßÊ ÊæíÊ ş| ßáãÉ ááÕõÏÇÚ¿',     'ßÊ ÊæíÊ ş| ãÇ ÇáÔíÁ ÇáĞí íõİÇÑŞß¿',     'ßÊ ÊæíÊ ş| ãÇ ÇáÔíÁ ÇáĞí íõİÇÑŞß¿',     'ßÊ ÊæíÊ |   æŞİ ããíÒ İÚáÊå ãÚ ÔÎÕ æáÇ íÒÇá íĞßÑå áß¿',     'ßÊ ÊæíÊ ş| ÃíåãÇ íäÊÕÑ¡ ÇáßÈÑíÇÁ Ãã ÇáÍÈ¿',     'ßÊ ÊæíÊ | ÈÚÏ ?? Óäíä ÇíÔ ÈÊßæä ¿',     'ßÊ ÊæíÊ ş| ãöä ÃÛÑÈ æÃÌãá ÇáÃÓãÇÁ ÇáÊí ãÑÊ Úáíß¿',     'şßÊ ÊæíÊ | ÚãÑß ÔáÊ ãÕíÈÉ Úä Ô        Õ ÈÑÛÈÊß ¿',     'ßÊ ÊæíÊ | ÃßËÑ ÓÄÇá æÌöøå Åáíß ãÄÎÑğÇ¿',     'şßÊ ÊæíÊ | ãÇ åæ ÇáÔíÁ ÇáĞí íÌÚáß ÊÔÚÑ ÈÇáÎæİ¿',     'şßÊ ÊæíÊ | æÔ íİÓÏ ÇáÕÏÇŞÉ¿',     'şßÊ ÊæíÊ | ÔÎÕ áÇÊÑİÖ áå ØáÈÇ ¿',     'şßÊ ÊæíÊ | ßã ãÑå ÎÓÑÊ ÔÎÕ ÊÍÈå¿.',     'şßÊ ÊæíÊ | ßíİ ÊÊÚÇãá ãÚ ÇáÇÔÎÇÕ ÇáÓáÈííä ¿',     'şßÊ ÊæíÊ | ßáãÉ ÊÔÚÑ ÈÇáÎÌá ÇĞÇ ŞíáÊ áß¿',     'şßÊ ÊæíÊ | ÌÓãß ÇßÈÑ ãä ÚñãÑß Çæ ÇáÚßÓø ¿!',     'şßÊ ÊæíÊ |ÃŞæì ßĞÈÉ ãÔÊ Úáíß ¿',     'şßÊ ÊæíÊ | ÊÊÃËÑ ÈÏãæÚ ÔÎÕ íÈßí ŞÏÇãß ŞÈá ÊÚÑİ ÇáÓÈÈ ¿',     'ßÊ ÊæíÊ | åá ÍÏË æÖÍíÊ ãä ÃÌá ÔÎÕò ÃÍÈÈÊ¿',     'şßÊ ÊæíÊ | ÃßËÑ ÊØÈíŞ ÊÓÊÎÏãå ãÄÎÑğÇ¿',     'şßÊ ÊæíÊ | şÇßËÑ Ôí íÑÖíß ÇĞÇ ÒÚáÊ ÈÏæä ÊİßíÑ ¿',     'şßÊ ÊæíÊ | æÔ ãÍÊÇÌ ÚÔÇä Êßæä ãÈÓæØ ¿',     'şßÊ ÊæíÊ | ãØáÈß ÇáæÍíÏ ÇáÍíä ¿',     'şßÊ ÊæíÊ | åá ÍÏË æÔÚÑÊ ÈÃäß ÇÑÊßÈÊ ÃÍÏ ÇáĞäæÈ ÃËäÇÁ ÇáÕíÇã¿',];
 client.on('message', message => {
	   var prefix = "$";
   if (message.content.startsWith(prefix + "ßÊ ÊæíÊ")) {
                if(!message.channel.guild) return message.reply('** This command only for servers**');
  var embed = new Discord.RichEmbed()
  .setColor('RANDOM')
   .setThumbnail(message.author.avatarURL) 
 .addField('Speed bot' ,
  `${cuttweet[Math.floor(Math.random() * cuttweet.length)]}`)
  message.channel.sendEmbed(embed);
  console.log('[id] Send By: ' + message.author.username)
    }
});	

   client.on('message',function(message) {
  if (message.author.bot) return;
var prefix = "$";
                  if(!message.channel.guild) return;

                    if (message.content === prefix + "members") {
 const embed = new Discord.RichEmbed()

    .setDescription(`**Members info :sparkles:
:green_heart: online:   ${message.guild.members.filter(m=>m.presence.status == 'online').size}
:heart:  dnd:       ${message.guild.members.filter(m=>m.presence.status == 'dnd').size}
:yellow_heart:  idle:     ${message.guild.members.filter(m=>m.presence.status == 'idle').size}
:diamond_shape_with_a_dot_inside:   membersCount:  ${message.guild.memberCount - message.guild.members.filter(m=>m.user.bot).size}
:bulb: bots: ${message.guild.members.filter(m=>m.user.bot).size} **`)
         message.channel.send({embed});

    }
      });  
client.on('message' , message => {
    var prefix = "$";
if(message.content.startsWith(prefix+"User")) {
    let user = message.mentions.users.first() || message.author;
    const joineddiscord = (user.createdAt.getDate() + 1) + '-' + (user.createdAt.getMonth() + 1) + '-' + user.createdAt.getFullYear() + ' | ' + user.createdAt.getHours() + ':' + user.createdAt.getMinutes() + ':' + user.createdAt.getSeconds();
    message.delete();
    let game;
    if (user.presence.game === null) {
        game = 'áÇ íáÚÈ ÍÇáíÇ.';
    } else {
        game = user.presence.game.name;
    }
    let messag;
    if (user.lastMessage === null) {
        messag = 'áã íÑÓá ÑÓÇáÉ. ';
    } else {
        messag = user.lastMessage;
    }
    let status;
    if (user.presence.status === 'online') {
        status = ':green_heart:';
    } else if (user.presence.status === 'dnd') {
        status = ':heart:';
    } else if (user.presence.status === 'idle') {
        status = ':yellow_heart:';
    } else if (user.presence.status === 'offline') {
        status = ':black_heart:';
    }
    if (user.presence.status === 'offline') {
        stat = 0x000000;
    } else if (user.presence.status === 'online') {
        stat = 0x00AA4C;
    } else if (user.presence.status === 'dnd') {
        stat = 0x9C0000;
    } else if (user.presence.status === 'idle') {
        stat = 0xF7C035;
    }
    const embed = new Discord.RichEmbed()
  .addField('**UserInfo:**', `**name:** ${user.username}#${user.discriminator}\n**JoinedDiscord:** ${joineddiscord}\n**LastMessage:** ${messag}\n**Playing:** ${game}\n**Status:** ${status}\n**Bot?** ${user.bot}`, true)
  .setThumbnail(user.displayAvatarURL)
  .addField(`Roles:`, message.guild.members.get(user.id).roles.array(role => role.name).slice(1).join(', '))
  .addField('DiscordInfo:', `**Discriminator:** #${user.discriminator}\n**ID:** ${user.id}\n**Username:** ${user.username}`)
  .setAuthor(`ãÚáæãÇÊ ${user.username}`, user.displayAvatarURL)
  .setColor(stat);
    message.channel.send({embed})
  .catch(e => logger.error(e));
}
 });

	  client.on('message', message => {
        let args = message.content.split(" ").slice(1).join(" ")
        let men = message.mentions.users.first()
        if(message.content.startsWith(prefix + "roll")){
            if(!args) return message.channel.send("ÇáÑÌÇÁ ÇÎÊíÇÑ ÑŞã")
            message.channel.send(Math.floor(Math.random() * args))
        }
    });

var al7arthyCodes = ["https://f.top4top.net/p_682it2tg6.png","https://e.top4top.net/p_682a1cus5.png","https://d.top4top.net/p_682pycol4.png","https://c.top4top.net/p_682vqehy3.png","https://b.top4top.net/p_682mlf9d2.png","https://a.top4top.net/p_6827dule1.png","https://b.top4top.net/p_682g1meb10.png","https://a.top4top.net/p_682jgp4v9.png","https://f.top4top.net/p_682d4joq8.png","https://e.top4top.net/p_6828o0e47.png","https://d.top4top.net/p_6824x7sy6.png","https://c.top4top.net/p_682gzo2l5.png","https://b.top4top.net/p_68295qg04.png","https://a.top4top.net/p_682zrz6h3.png","https://f.top4top.net/p_6828vkzc2.png","https://e.top4top.net/p_682i8tb11.png"]
var al7arthyCodes2 = ["??__60%__  **|**  ??__40%__","??__63%__  **|**  ??__37%__","??__89%__  **|**  ??__11%__","??__97%__  **|**  ??__3%__"]
client.on('message', message => {
    if(!message.guild) return;
    if (message.author.bot) return;
      let id = message.author.id,prefix="=";//ÇáÈÑíİßÓ
      if (ti[id] && (new Date).getTime() - ti[id] < 20*1000) {
          let r = (new Date).getTime() - ti[id];
          r = 20*1000 - r;
      message.channel.send(` **Please wait ${pretty(r, {verbose:true})}**`).then(m => m.delete(5000));
      return;
      }
      if ( message.content == prefix+'áæ ÎíÑæß'){
         
          try{
  //body
  }catch(e){
 
  }
         var Embed = new Discord.RichEmbed()
.setImage(al7arthyCodes[Math.floor(Math.random() * al7arthyCodes.length)])
message.channel.sendEmbed(Embed).then(msg => {
    msg.react('??').then( r => {
        msg.react('??')
 
        let blueFilter = (reaction, user) => reaction.emoji.name === '??' && user.id === message.author.id;
    let orangeFilter = (reaction, user) => reaction.emoji.name === '??' && user.id === message.author.id;
 
 
    let blue = msg.createReactionCollector(blueFilter, { time: 15000 });
    let orange = msg.createReactionCollector(orangeFilter, { time: 15000 });
 
 
    blue.on("collect", r => {
        msg.delete();
        message.channel.send(al7arthyCodes2[Math.floor(Math.random() * al7arthyCodes2.length)]).then(m => m.delete(60000));
 
        })
       
 orange.on("collect", r => {
        msg.delete();
        message.channel.send(al7arthyCodes2[Math.floor(Math.random() * al7arthyCodes2.length)]).then(m => m.delete(60000));
 
        })
 
                                })
                                })
                              ti[id] = (new Date).getTime()
                                }
                                });


client.on('message' , message => {
var prefix = "$"

if (message.author.bot) return;
if (message.content.startsWith(prefix + "contact")) {
if (!message.channel.guild) return;



let args = message.content.split(" ").slice(1).join(" ");



client.users.get("349616310734553088","335027415619338240").send(
    "\n" + "**" + "? ÇáÓíÑİÑ :" + "**" +
    "\n" + "**" + "» " + message.guild.name + "**" +
    "\n" + "**" + " ? ÇáãÑÓá : " + "**" +
    "\n" + "**" + "» " + message.author.tag + "**" +
    "\n" + "**" + " ? ÇáÑÓÇáÉ : " + "**" +
    "\n" + "**" + args + "**")

let embed = new Discord.RichEmbed()
     .setAuthor(message.author.username, message.author.avatarURL)
     .setDescription(':mailbox_with_mail: Êã ÇÑÓÇá ÇáÑÓÇáÉ Çáì ÕÇÍÈ ÇáÈæÊ ÈäÌÇÍ')
     .setThumbnail(message.author.avatarURL)
     .setFooter("By ITz1uKY")
                                                

message.channel.send(embed);


}
    
});

client.on('message', message => {
	var prefix = "$"
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  /*let b5bzlog = client.channels.find("name", "5bz-log");
  if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("**ãäÔä ÔÎÕ**");
  if(!reason) return message.reply ("**ÇßÊÈ ÓÈÈ ÇáØÑÏ**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**áÇíãßääí ØÑÏ ÔÎÕ ÇÚáì ãä ÑÊÈÊí íÑÌå ÇÚØÇÁ ÇáÈæÊ ÑÊÈå ÚÇáí**");

  message.guild.member(user).ban(7, user);

  const banembed = new Discord.RichEmbed()
  .setAuthor(`BANNED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : banembed
  })
}
});

client.on('message', message => {
	var prefix = "$"
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "kick") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  if (message.mentions.users.size < 1) return message.reply("**ãäÔä ÔÎÕ**");
  if(!reason) return message.reply ("**ÇßÊÈ ÓÈÈ ÇáØÑÏ**");
  if (!message.guild.member(user)
  .kickable) return message.reply("**áÇíãßääí ØÑÏ ÔÎÕ ÇÚáì ãä ÑÊÈÊí íÑÌå ÇÚØÇÁ ÇáÈæÊ ÑÊÈå ÚÇáí**");

  message.guild.member(user).kick();

  const kickembed = new Discord.RichEmbed()
  .setAuthor(`KICKED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : kickembed
  })
}
});

client.on('message', message => {
var prefix = "$";
       if(message.content === prefix + "mutec") {
                           if(!message.channel.guild) return message.reply('** This command only for servers**');

   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **__áíÓ áÏíß ÕáÇÍíÇÊ__**');
              message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: false

              }).then(() => {
                  message.reply("**__Êã ÊŞİíá ÇáÔÇÊ__ :white_check_mark: **")
              });
                }
//FIRE BOT
    if(message.content === prefix + "unmutec") {
                        if(!message.channel.guild) return message.reply('** This command only for servers**');

   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**__áíÓ áÏíß ÕáÇÍíÇÊ__**');
              message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: true

              }).then(() => {
                  message.reply("**__Êã İÊÍ ÇáÔÇÊ__:white_check_mark:**")
              });
    }
       
});
client.on("message", msg => {
  if(msg.content === '=' + "id") {
      const embed = new Discord.RichEmbed();
  embed.addField("??| ÇÓã ÇáÍÓÇÈ :", `${msg.author.username}#${msg.author.discriminator}`, true)
          .addField("??| ÇáÇí Ïí :", `${msg.author.id}`, true)
          .setColor("RANDOM")
          .setFooter(msg.author.username , msg.author.avatarURL)
          .setThumbnail(`${msg.author.avatarURL}`)
          .setTimestamp()
          .setURL(`${msg.author.avatarURL}`)
          .addField('??| ÇáÍÇáÉ :', `${msg.author.presence.status.toUpperCase()}`, true)
          .addField('??| ÈáÇíäÌ :', `${msg.author.presence.game === null ? "No Game" : msg.author.presence.game.name}`, true)
          .addField('??| ÇáÑÊÈ : ', `${msg.member.roles.filter(r => r.name).size}`, true)
          .addField('??| Êã ÇáÇäÖãÇã ááÏíÓßæÑÏ İí :', `${msg.createdAt}`,true)
          .addField('??| åá åæ ÈæÊ ¿', `${msg.author.bot.toString().toUpperCase()}`, true);
      msg.channel.send({embed: embed})
  }
});

client.on('message', message => {
    if (message.content.startsWith("=bans")) {
        message.guild.fetchBans()
        .then(bans => message.channel.send(`${bans.size} ÚÏÏ ÇÔÎÇÕ ÇáãÈäÏÉ ãä ÇáÓíÑİÑ `))
  .catch(console.error);
}
});


client.on('message', message => {
        if (message.content === "=inv") {
            if(!message.channel.guild) return;
        let embed = new Discord.RichEmbed()
        .setAuthor(` ${message.author.username} `, message.author.avatarURL)      
        .setTitle(`:small_orange_diamond: Click Here `)
        .setURL(`https://discordapp.com/api/oauth2/authorize?client_id=489909153368768523&permissions=8&scope=bot`)        
     message.channel.sendEmbed(embed);
       }
   });
 
  client.on('message', message => {
    if (message.content.startsWith("=avatar")) {
        if (message.author.bot) return
        var mentionned = message.mentions.users.first();
    var omar;
      if(mentionned){
          var omar = mentionned;
      } else {
          var omar = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setAuthor('Avatar Link :')
        .setTitle('Click Here')
        .setURL(`${omar.avatarURL}`)
        .setImage(`${omar.avatarURL}`)
        .setFooter('Moscow System...',client.user.avatarURL) 
      message.channel.sendEmbed(embed);
    }
});

client.on('message', message => {
            var prefix = "$";
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);

    let args = message.content.split(" ").slice(1);

    if (command == "embed") {
        if (!message.channel.guild) return message.reply('** This command only for servers **');
        let say = new Discord.RichEmbed()
            .addField('Emebad:', `${message.author.username}#${message.author.discriminator}`)
            .setDescription(args.join("  "))
            .setColor(0x23b2d6)
        message.channel.sendEmbed(say);
        message.delete();
    }
});


   client.on('message', message => {
     if (message.content === "=support") {
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#9B59B6")
  .addField(" ** :gear: Server Support :gear: **" , "  **https://discord.gg/9AUmT3C**")
     
     
  message.channel.sendEmbed(embed);
    }
});



client.on("message", (message) => {
if (message.content.startsWith("=SetText")) {
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
        let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(' '), 'text');
message.channel.sendMessage('ÊÜã ÅäÜÔÇÁ Ñæã ßÜÊÇÈÜí')

}
});


client.on("message", (message) => {
if (message.content.startsWith("=setVoice")) {
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
        let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(' '), 'voice');
    message.channel.sendMessage('ÊÜã ÅäÜÔÇÁ Ñæã ÕÜæÊí')
    
}
});



client.on('message', message => {
    if (message.content === 'åÇí') {
        message.reply('? åÜÜÃÇíÇÊ ÃØáÜóÜŞ æáßÜÜã?');
      }
});




client.on('message', message => {
    if (message.content === '....') {
        message.reply('?ÃØáÜóÜŞ ãä äŞØ, íáÜÜÈì ÈÓ ?');
      }
});


client.on('message', message => {
    if (message.content === '...') {
        message.reply('?ÃØáÜóÜŞ ãä äŞØ, íáÜÜÈì ÈÓ ?');
      }
});


client.on('message', message => {
    if (message.content === '..') {
        message.reply('?ÃØáÜóÜŞ ãä äŞØ, íáÜÜÈì ÈÓ ?');
      }
});

client.on('message', message => {
    if (message.content === '.') {
        message.reply('?ÃØáÜóÜŞ ãä äŞØ, íáÜÜÈì ÈÓ ?');
      }
});





client.on("message", (message) => {
    if (message.content.startsWith('=delet')) {
        if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");

        let args = message.content.split(' ').slice(1);
        let channel = message.client.channels.find('name', args.join(' '));
        if (!channel) return message.reply('**There is no room like this name -_-**').catch(console.error);
        channel.delete()
    }
});  



client.on('message',message =>{
    var prefix = "$";
    if(message.content.startsWith(prefix + 'topinv')) {
  message.guild.fetchInvites().then(i =>{
  var invites = [];
   
  i.forEach(inv =>{
    var [invs,i]=[{},null];
     
    if(inv.maxUses){
        invs[inv.code] =+ inv.uses+"/"+inv.maxUses;
    }else{
        invs[inv.code] =+ inv.uses;
    }
        invites.push(`invite: ${inv.url} inviter: ${inv.inviter} \`${invs[inv.code]}\`;`);
   
  });
  var embed = new Discord.RichEmbed()
  .setColor("#000000")
  .setDescription(`${invites.join(`\n`)+'\n\n**By:** '+message.author}`)
  .setThumbnail("https://cdn.discordapp.com/attachments/442414506430169098/489929808244113409/JPEG_20180913_232108.jpg")
           message.channel.send({ embed: embed });
   
  });
   
    }
  });


client.on("ready", async () => {
    if(client.guilds.size > 1) {
        client.user.setActivity(`Im on ${client.guilds.size} servers!`);
        console.log(`${client.user.username} is online on ${client.guilds.size} servers!`)
    } else {
        client.user.setActivity(`Im on ${client.guilds.size} servers!`);
        console.log(`${client.user.username} is online on ${client.guilds.size} server!`)
    }
    client.user.setStatus("online");
});

client.on("guildCreate", guild => {
    console.log("Joined a new guild: " + guild.name);
    if(client.guilds.size > 1) {
        client.user.setActivity(`Im on ${client.guilds.size} servers!`);
    } else {
        client.user.setActivity(`Im on ${client.guilds.size} servers!`);
    }
});

client.on("guildDelete", guild => {
    console.log("Left a guild: " + guild.name);
    if(client.guilds.size > 1) {
        client.user.setActivity(`Im on ${client.guilds.size} servers!`);
    } else {
        client.user.setActivity(`Im on ${client.guilds.size} servers!`);
    }
});

client.on("message", async () => {
  
})


client.on("ready", async () => {
    if(client.users.size > 1) {
        client.user.setActivity(`With ${client.users.size} Member`);
        console.log(`${client.user.username} With ${client.users.size} Member`)
    } else {
        client.user.setActivity(`With ${client.users.size} Member`);
        console.log(`${client.user.username} With ${client.users.size} Member`)
    }
    client.user.setStatus("online");
});

client.on("guildCreate", guild => {
    console.log("Joined a new guild: " + guild.name);
    if(client.users.size > 1) {
        client.user.setActivity(`With ${client.users.size} Member`);
    } else {
        client.user.setActivity(`With ${client.users.size} Member`);
    }
});

client.on("guildDelete", guild => {
    console.log("Left a guild: " + guild.name);
    if(client.users.size > 1) {
        client.user.setActivity(`With ${client.users.size} Member`);
    } else {
        client.user.setActivity(`With ${client.users.size} Member`);
    }
});


client.on("message", async () => {
  
})




const clans = {};
const system = {};
const level = {};
 
 
client.on('message',async message => {
  if(message.author.bot) return;
  if(message.channel.type === 'dm') return;
 
  let args = message.content.split(' ');
  let random = Math.floor(Math.random() * 5) + 2;
  let author = message.author;
 
  let xpLeft;
  let nameClan;
  let membersClan = [];
  let levelClan = 0;
  if(!system[author.id]) system[author.id] = {clan: 'None',joinedAt: new Date().toLocaleString() ,clanLevel: 0};
 
  if(!level[author.id]) level[author.id] = {level: 1, xp: 1};
 
 
  level[author.id].xp += (+random);
  if(level[author.id].xp >= 300) {
    if(level[author.id].xp > 300) xpLeft = level[author.id].xp - 300;
    level[author.id] = {
      level: level[author.id].level + 1,
      xp: xpLeft
    };
 
  }
  if(message.content.startsWith(prefix + "clan")) {
    if(message.content.split(' ')[0] !== `${prefix}clan`) return;
 
    if(!args[1] || args[1] && args[1] === 'info') {
  let embed = new Discord.RichEmbed()
  .setAuthor('ŞÑíÈÇ', message.author.avatarURL)
  .setDescription(`- \`${prefix}clan\`: ŞÑíÈÇ
  - \`${prefix}clan info\`:  ? ( ŞÑíÈÇ ) Á
  - \`${prefix}clan create\`: ŞÑíÈÇ   
  - \`${prefix}clan invite\`: ŞÑíÈÇ
  - \`${prefix}clan join\`: ŞÑíÈÇ
  - \`${prefix}clan promote\`: ? ( ŞÑíÈÇ ) Á
  - \`${prefix}clan demote\`: ? ( ŞÑíÈÇ ) Á
  - \`${prefix}clan ownership\`:  ŞÑíÈÇ
  - \`${prefix}clan leave\`: ŞÑíÈÇ
  - \`${prefix}clan kick\`: ? ( ŞÑíÈÇ ) Á
  .setFooter(message.author.username, message.author.avatarURL);
  message.channel.send(embed);
}
 
    if(args[1] && args[1] === 'create') {
      //if(level[author.id].level < 10) return message.channel.send('**# íÌÈ Ãä íßæä áÏíß 10 ãÓÊæíÇÊ áÚãá ßáÇä , áÊÌãíÚ ãÓÊæíÇÊ ÊİÇÚá ÈÇáÔÇÊ æÓíÊã ÍÓÇÈ ÇáäŞÇØ**');
      if(system[author.id].clan !== 'None') return message.channel.send('**# íÌÈ Úáíß Çä ÊÎÑÌ ãä ÇáßáÇä ÇáĞí ÃäÊ Èå ÍÇáíÇ**');
 
      let m = await message.channel.send('**# ÃßÊÈ ÃÓã ÇáßáÇä ÇáÇä**');
      let awaited = await message.channel.awaitMessages(r => r.author.id === message.author.id, { max: 1, time: 20000, errors: ['time']}).then(collected => {
        if(collected.first().content.length > 25) return message.channel.send("**# áÇ íãßäß æÖÚ ÇÓã ááßáÇä íİæŞ ÇáÜ25 ÍÑİÇ , ÃÚÏ ßÇÈÉ ÇáÃãÑ**");
        if(collected.first().content.includes("None")) return message.channel.send("**# `None`, áÇ íãßäß æÖÚ åĞå ÇáßáãÉ ßÃÓã ááßáÇä**");
        collected.first().delete().catch();
        nameClan = collected.first().content;
      });
 
      m = await m.edit('**# ÌÇÑì Úãá ÇáßáÇä**');
      awaited = await setTimeout(async() => {
        let membersArray = {
          nameClan: {
            array: []
          }
        };
        let members = membersArray.nameClan.array;
        members.push(message.author.id);
        clans[nameClan] = {
          name: nameClan,
          createdAt: new Date().toLocaleString(),
          level: levelClan,
          creator: message.author.id,
          members: members,
          applylist: [],
          admins: []
        };
 
        system[author.id] = {
          clan: nameClan,
          joinedAt: new Date().toLocaleString(),
          clanLevel: 0,
          creator: message.author.id
        };
 
        m = await m.edit('**# Êã Úãá ÇáßáÇä ÈäÌÇÍ**');
      }, 2300);
 
    }
    if(args[1] && args[1] === 'invite') {
      if(!system[author.id]) return message.channel.send("**# ÃäÊ áÓÊ ÈßáÇä**");
      let clan = system[author.id].clan;
      if(system[author.id].clan === 'None') return message.channel.send('**# ÃäÊ áÓÊ ÈßáÇä**');
      if(!clans[clan].admins.includes(message.author.id) && clans[system[author.id].clan].creator !== message.author.id) return message.channel.send('**# íÌÈ Úáíß Çä Êßæä ÇÏÇÑí ÈÇáßáÇä**');
      let mention = message.mentions.users.first();
      if(!mention) return message.channel.send('**# ãäÔä ÔÎÕ áÏÚæÊå ááßáÇä**');
      if(clans[clan].members.includes(mention.id)) return message.channel.send("**# åĞÇ ÇáÚÖæ ÈÇáßáÇä ÈÇáİÚá**");
      if(clans[clan].members.length === 10) return message.channel.send("**# åĞÇ ÇáßáÇä æÕá ááÍÏ ÇáÇŞÕì ãä ÇáÇÚÖÇÁ íãßäß**");
 
      let m = await message.channel.send(`**${mention} # \`${clan}\`, Êã ÏÚæÊß áÏÎæá ÇáßáÇä**\n\n - áŞÈæá ÇáÏÚæÉ \`äÚã\`\n - áÑİÖ ÇáÏÚæÉ \`áÇ\``);
      let awaiting = await message.channel.awaitMessages(r => r.author.id === mention.id, {max: 1, time: 20000, errors:['time']}).then(collected => {
        collected.first().delete().catch();
        if(collected.first().content === 'äÚã') {
          clans[clan].members.push(mention.id);
 
          system[author.id].members += 1;
 
 
          system[mention.id] = {
            clan: clan,
            joinedAt: new Date().toLocaleString(),
            clanLevel: 0,
            creator: clans[clan].creator
          };
 
          message.channel.send(`**${message.author} # Êã ŞÈæá ÇáÏÚæÉ**`);
        }
        if(collected.first().content === 'áÇ') {
          message.channel.send(`**${message.author} # Êã ÑİÖ ÇáÏÚæÉ**`);
        } else if(collected.first().content !== 'äÚã' && collected.first().content !== 'áÇ'){
          return message.channel.send('**# íÌÈ Úáíß ßÊÇÈÉ `äÚã` Ãæ `áÇ`**');
        }
      });
    }
    if(args[1] && args[1] === 'stats') {
      if(system[author.id].clan === 'None') return message.channel.send('**# íÌÈ Çä Êßæä ÈßáÇä áÃÓÊÎÏÇã åĞÇ ÇáÃãÑ**');
      let clan = system[author.id].clan;
      let embed = new Discord.RichEmbed()
        .setAuthor(`${message.author.username} || ÇáßáÇäÇÊ`, message.author.avatarURL)
        .setDescription(`ÇáßáÇä || \`${clan.toString()}\``)
        embed.addField('» ÇÓã ÇáßáÇä', clan, true)
        embed.addField('» ÊÇÑíÎ Úãá ÇáßáÇä', clans[clan].createdAt, true);
        embed.addField('» ÊÇÑíÎ ÏÎæá ÇáßáÇä', system[author.id].joinedAt, true)
        embed.addField('» ÕÇÍÈ ÇáßáÇä', `<@${clans[clan].creator}>`, true);
        embed.addField('» áİá ÇáßáÇä', clans[clan].level, true);
        embed.addField('» ÚÏÏ ÇÚÖÇÁ ÇáßáÇä', clans[clan].members.length, true);
        embed.addField('» ÚÏÏ ÇáÊŞÏíãÇÊ ááßáÇä', clans[clan].applylist.length, true);
        embed.addField('» ÚÏÏ ÇáÇÏãäíÉ ÈÇáßáÇä', clans[clan].admins.length, true);
        embed.addField('» ÇÚÖÇÁ ÇáßáÇä', `${prefix}clan list || íÙåÑáß ÑÓÇáÉ ÈåÇ ÇÚÖÇÁ ÇáßáÇä`);
      message.channel.send(embed);
 
    }
    if(args[1] && args[1] === 'join') {
    let clanName = message.content.split(' ').slice(2).join(" ");
    if(system[author.id].clan !== 'None') return message.channel.send("**# íÌÈ Ãä áÇ Êßæä ÈßáÇä**");
    if(!args[2]) return message.channel.send("**# íÌÈ Úáíß ßÊÇÈÉ ÇÓã ÇáßáÇä**");
    if(!clans[clanName]) return message.channel.send("**# åĞÇ ÇáßáÇä ÛíÑ ãæÌæÏ**");
    if(clans[clanName].applylist.includes(message.author.id)) return message.channel.send("**# áŞÏ ŞÏãÊ Úáì ÏÎæá åĞÇ ÇáßáÇä ãÓÈŞÇ");
 
    clans[clanName].applylist.push(message.author.id);
    message.channel.send("**# áŞÏ Êã ÇáÊŞÏíã Úáì ÏÎæá ÇáßáÇä , ÓíÊã ÇáÑÏ Úáíß ãä ŞÈá ÇÍÏ ÇÏÇÑÉ ÇáßáÇä**");
 
  }
    if(args[1] && args[1] === 'accept') {
      let mention = message.mentions.users.first();
      if(system[author.id].clan === 'None') return message.channel.send("**# íÌÈ Úáíß Çä Êßæä ÈßáÇä áÃÓÊÎÏÇã åĞÇ ÇáÃãÑ**");
      if(!clans[system[author.id].clan].admins.includes(message.author.id) && clans[system[author.id].clan].creator !== message.author.id) return message.channel.send("**# íÌÈ Úáíß Çä Êßæä ÇÏÇÑí ÈÇáßáÇä áÃÓÊÎÏÇã åĞÇ ÇáÃãÑ**");
      if(!mention) return message.channel.send("**# íÌÈ Úáíß ãäÔäÉ ÔÎÕ áÃÓÊÎÏÇã åĞÇ ÇáÃãÑ**");
      if(!system[mention.id]) system[mention.id] = {clan: 'None',joinedAt: new Date().toLocaleString() ,clanLevel: 0};
 
      if(!clans[system[author.id].clan].applylist.includes(mention.id)) return message.channel.send("**# åĞÇ ÇáÔÎÕ áã íŞã ÈÇáÊŞÏíã Úáì ÏÎæá ÇáßáÇä**");
 
      clans[system[author.id].clan].applylist.shift(mention.id);
      clans[system[author.id].clan].members.push(mention.id);
      let clan = system[author.id].clan;
 
 
      system[mention.id] = {
        clan: clan,
        joinedAt: new Date().toLocaleString(),
        clanLevel: 0,
        creator: clans[clan].creator
      };
 
 
      mention.send(`**# \`${system[author.id].clan}\`, áŞÏ Êã ŞÈæáß ÈÇáßáÇä**`).catch();
      message.channel.send(`**# \`${mention.username}\`, áŞÏ Êã ŞÈæá ÇáÔÎÕ æÏÎæáå ááßáÇä**`);
    }
    if(args[1] && args[1] === 'decline') {
      let mention = message.mentions.users.first();
      if(system[author.id].clan === 'None') return message.channel.send("**# íÌÈ Úáíß Çä Êßæä ÈßáÇä áÃÓÊÎÏÇã åĞÇ ÇáÃãÑ**");
      if(!clans[system[author.id].clan].admins.includes(message.author.id) && clans[system[author.id].clan].creator !== message.author.id) return message.channel.send("**# íÌÈ Úáíß Çä Êßæä ÇÏÇÑí ÈÇáßáÇä áÃÓÊÎÏÇã åĞÇ ÇáÃãÑ**");
      if(!mention) return message.channel.send("**# íÌÈ Úáíß ãäÔäÉ ÔÎÕ áÃÓÊÎÏÇã åĞÇ ÇáÃãÑ**");
      if(!system[mention.id]) system[mention.id] = {clan: 'None',joinedAt: new Date().toLocaleString() ,clanLevel: 0};
 
      if(!clans[system[author.id].clan].applylist.includes(message.author.id)) return message.channel.send("**# åĞÇ ÇáÔÎÕ áã íŞã ÈÇáÊŞÏíã Úáì ÏÎæá ÇáßáÇä**");
 
      clans[system[author.id].clan].applylist.shift(mention.id);
 
      system[mention.id] = {
        clan: clans[system[author.id].clan],
        joinedAt: new Date().toLocaleString(),
        clanLevel: 0
      };
 
 
      mention.send(`**# \`${system[author.id].clan}\`, áŞÏ Êã ÑİÖ ÏÎæáß ááßáÇä**`).catch();
      message.channel.send(`**# \`${mention.username}\`, áŞÏ Êã ÑİÖ ÏÎæá ÇáÔÎÕ ááßáÇä**`);
 
    }
    if(args[1] && args[1] === 'promote') {
      let mention = message.mentions.users.first();
      if(system[author.id].clan === 'None') return message.channel.send("**# íÌÈ Çä Êßæä ÈßáÇä áÃÓÊÎÏÇã åĞÇ ÇáÃãÑ**");
      if(!clans[system[author.id].clan].admins.includes(message.author.id) && clans[system[author.id].clan].creator !== message.author.id) return message.channel.send("**# íÌÈ Úáíß Çä Êßæä ÇæäÑ Çæ ÇÏãä ÈÇáßáÇä áÊÑŞíÉ ÚÖæ ÈÇáßáÇä**");
      if(!mention) return message.channel.send("**# íÌÈ Úáíß ãäÔäÉ ÚÖæ ÈÇáßáÇä áÃÚØÇÆå ÇáÊÑŞíÉ**");
      if(!system[mention.id]) system[mention.id] = {clan: 'None',joinedAt: new Date().toLocaleString() ,clanLevel: 0};
 
      if(system[mention.id].clan === 'None') return message.channel.send("**# åĞÇ ÇáÔÎÕ áíÓ ÈßáÇä**");
      if(!clans[system[author.id].clan].members.includes(mention.id)) return message.channel.send("**# åĞÇ ÇáÔÎÕ áíÓ ÈÇáßáÇä**");
      if(clans[system[author.id].clan].admins.includes(mention.id)) return message.channel.send("**# åĞÇ ÇáÚÖæ áÏíå ÇÏãä ÈÇáİÚá**");
      if(mention.id === message.author.id) return message.channel.send("**# áÇ íãßäß ÇÚØÇÁ äİÓß ÊÑŞíÉ**");
 
      clans[system[author.id].clan].admins.push(mention.id);
 
 
      mention.send(`**# \`${system[author.id].clan}\`, áŞÏ Êã ÊÑŞíÊß Çáì ÇÏãä**`).catch();
      message.channel.send(`**# \`${mention.username}\`, áŞÏ Êã ÊÑŞíÉ ÇáÚÖæ Çáì ÑÊÈÉ ÇÏãä**`);
    }
    if(args[1] && args[1] === 'demote') {
      let mention = message.mentions.users.first();
      if(system[author.id].clan === 'None') return message.channel.send("**# íÌÈ Çä Êßæä ÈßáÇä áÃÓÊÎÏÇã åĞÇ ÇáÃãÑ**");
      if(clans[system[author.id].clan].creator !== message.author.id) return message.channel.send("**# åĞÇ ÇáÃãÑ áÖÇÍÈ ÇáßáÇä İŞØ**");
      if(!mention) return message.channel.send("**# íÌÈ Úáíß ãäÔäÉ ÚÖæ ÈÇáßáÇä áÃÚØÇÆå ÇáÊÑŞíÉ**");
      if(!system[mention.id]) system[mention.id] = {clan: 'None',joinedAt: new Date().toLocaleString() ,clanLevel: 0};
 
      if(system[mention.id].clan === 'None') return message.channel.send("**# åĞÇ ÇáÔÎÕ áíÓ ÈßáÇä**");
      if(!clans[system[author.id].clan].members.includes(mention.id)) return message.channel.send("**# åĞÇ ÇáÔÎÕ áíÓ ÈÇáßáÇä**");
      if(!clans[system[author.id].clan].admins.includes(mention.id)) return message.channel.send("**# åĞÇ ÇáÔÎÕ áíÓ ÇÏãä ÈÇáßáÇä**");
      if(mention.id === message.author.id) return message.channel.send("**# áÇ íãßäß ÇÚØÇÁ äİÓß ÊÑŞíÉ**");
 
      clans[system[author.id].clan].admins.shift(mention.id);
 
      mention.send(`**# \`${system[author.id].clan}\`, áŞÏ Êã ÇÒÇáÊß ãä ãäÕÈ ÇáÇÏãä**`).catch();
      message.channel.send(`**# \`${mention.username}\`, áŞÏ Êã ÇÒÇáÉ ÇáÇÏãäíÉ ãä ÇáÚÖæ**`);
    }
    if(args[1] && args[1] === 'rename') {
      if(system[author.id].clan === 'None') return message.channel.send("**# íÌÈ Çä Êßæä ÈßáÇä áÃÓÊÎÏÇã åĞÇ ÇáÃãÑ**");
      let newName;
      let oldName = clans[system[author.id].clan];
      if(clans[system[author.id].clan].creator !== message.author.id) return message.channel.send("**# åĞÇ ÇáÃãÑ ãÎÕÕ áÕÇÍÈ ÇáßáÇä İŞØ**");
      if(!args[2]) return message.channel.send("**# íÌÈ Úáíß ÊÍÏíÏ ÇÓã ÇáßáÇä**");
 
      let c = message.content.split(' ').slice(2).join(" ");
      newName = c;
      let clanInfo = clans[system[author.id].clan];
      let m = await message.channel.send(`**# \`${c}\`, åá ÃäÊ ãÊÃßÏ ãä ÊÛííÑ ÇÓã ÇáßáÇä \n\n - ááÊÃßíÏ \`äÚã\`\n - ááÑİÖ \`áÇ\`**`);
      let awaiting = await message.channel.awaitMessages(r => r.author.id === message.author.id, {max: 1, time: 20000, errors: ['time']}).then(c => {
        let collected = c.first();
        collected.delete().catch();
        m.delete().catch();
        if(collected.content === 'äÚã') {
          clans[newName] = {
            name: newName,
            createdAt: clanInfo.createdAt,
            level: clanInfo.level,
            creator: clanInfo.creator,
            members: clanInfo.members,
            applylist: clanInfo.applylist,
            admins: clanInfo.admins
          };
          clans[system[author.id].clan] = undefined;
 
          system[author.id].clan = newName;
 
 
            message.channel.send("**# ÌÇÑì ÊÛííÑ ÇáÇÓã**");
            message.channel.send("**# Êã ÊÛííÑ ÇÓã ÇáßáÇä ÈäÌÇÍ**");
 
        } else if(collected.content === 'áÇ') {
          message.channel.send(`**# \`${newName}\`, Êã ÇáÛÇÁ ÊÛííÑ ÇÓã ÇáßáÇä**`);
 
        } else if(collected.first().content !== 'äÚã' && collected.first().content !== 'áÇ'){
          return message.channel.send('**# íÌÈ Úáíß ßÊÇÈÉ `äÚã` Ãæ `áÇ`**')
        }
      });
    }
    if(args[1] && args[1] === 'list') {
      if(system[author.id].clan === 'None') return message.channel.send("**# íÌÈ Úáíß Çä Êßæä ÈßáÇä áÃÓÊÎÏÇã åĞÇ ÇáÃãÑ**");
      let clan = clans[system[author.id].clan];
      let members = Array.from(clan.members);
      let admins = Array.from(clan.admins);
      let applylist = Array.from(clan.applylist);
      let i = 1;
      let o = 1;
 
      let embed = new Discord.RichEmbed();
      embed.setAuthor(`${message.author.username} || ${clan.name}`, message.author.avatarURL);
      embed.addField("# Members", members.map(r => `\`${i++}.\` **|| <@${r}>**`).join('\n') || `\`1.\` **|| None**`, true);
      embed.addField('# Admins', admins.map(r => `\`${o++}.\` **|| <@${r}>**`).join('\n') || `\`1.\` **|| None**`, true);
      embed.addField('# Apply', applylist.map(r => `\`${o++}.\` **|| <@${r}>**`).join('\n') || `\`1.\` **|| None**`, true);
      embed.addField('# Owner', `\`1.\` **|| <@${clan.creator}>**`, true);
      message.channel.send(embed);
    }
    if(args[1] && args[1] === 'leave') {
      if(system[author.id].clan === 'None') return message.channel.send("**# íÌÈ Çä Êßæä ÈßáÇä áÃÓÊÎÏÇã åĞÇ ÇáÃãÑ**");
      let m = await message.channel.send("**# åá ÇäÊ ãÊÃßÏ Çäß ÊÑíÏ ÇáÎÑæÌ ãä ÇáßáÇä \n\n - ááÊÃßíÏ \`äÚã\`\n - ááÃáÛÇÁ \`áÇ\`**");
      let awaited = await message.channel.awaitMessages(r => r.author.id === message.author.id, {max: 1, time: 20000, errors:['time']}).then(c => {
        let collected = c.first();
        if(collected.content === 'äÚã') {
          clans[system[author.id].clan].members.shift(author.id);
 
          system[author.id] = {clan: 'None',joinedAt: new Date().toLocaleString() ,clanLevel: 0};
 
 
          message.channel.send("**# áŞÏ ÛÇÏÑÊ ÇáßáÇä**");
        } else if(collected.content === 'áÇ') {
          message.channel.send("**# Êã ÇáÛÇÁ ÇáÎÑæÌ ãä ÇáßáÇä**");
        } else if(collected.content !== 'äÚã' && collected.content === 'áÇ') {
          message.channel.send('**# íÌÈ Úáíß ßÊÇÈÉ `äÚã` Ãæ `áÇ`**');
        }
      });
    }
    if(args[1] && args[1] === 'kick') {
      let mention = message.mentions.users.first();
      if(system[author.id].clan === 'None') return message.channel.send("**# íÌÈ Çä Êßæä ÈßáÇä áÃÓÊÎÏÇã åĞÇ ÇáÃãÑ**");
      if(!clans[system[author.id].clan].admins.includes(message.author.id) && clans[system[author.id].clan].creator !== message.author.id) return message.channel.send("**# íÌÈ Úáíß Çä Êßæä ÇæäÑ Çæ ÇÏãä ÈÇáßáÇä áÃÓÊÎÏÇã åĞÇ ÇáÇãÑ**");
      if(!mention) return message.channel.send("**# íÌÈ Úáíß ãäÔäÉ ÚÖæ ÈÇáßáÇä áØÑÏå**");
      if(!system[mention.id]) system[mention.id] = {clan: 'None',joinedAt: new Date().toLocaleString() ,clanLevel: 0};
 
      if(system[mention.id].clan === 'None') return message.channel.send("**# åĞÇ ÇáÔÎÕ áíÓ ÈßáÇä**");
      if(!clans[system[author.id].clan].members.includes(mention.id)) return message.channel.send("**# åĞÇ ÇáÔÎÕ áíÓ ÈÇáßáÇä**");
      if(clans[system[author.id].clan].admins.includes(mention.id) && clans[system[author.id].clan].creator !== message.author.id) return message.channel.send("**# åĞÇ ÇáÚÖæ áÏíå ÇÏãä**");
      if(mention.id === message.author.id) return message.channel.send("**# áÇ íãßäß ØÑÏ äİÓß**");
 
        let index = clans[system[author.id].clan].members.indexOf(mention.id);
        let index2 = clans[system[author.id].clan].admins.indexOf(mention.id) || "";
        clans[system[author.id].clan].members.splice(index, 1);
        if(clans[system[author.id].clan].admins.includes(mention.id)) clans[system[author.id].clan].admins.splice(index2, 1);
 
        system[mention.id] = {clan: 'None',joinedAt: new Date().toLocaleString() ,clanLevel: 0};
 
 
        message.channel.send(`**# \`${mention.username}\`, Êã ØÑÏ ÇáÔÎÕ ãä ÇáßáÇä**`);
        mention.send(`**# \`${system[author.id].clan}\`, áŞÏ Êã ØÑÏß ãä ÇáßáÇä**`).catch();
    }
    if(args[1] && args[1] === 'ownership') {
      let mention = message.mentions.users.first();
      if(system[author.id].clan === 'None') return message.channel.send("**# íÌÈ Çä Êßæä ÈßáÇä áÃÓÊÎÏÇã åĞÇ ÇáÃãÑ**");
      if(!mention) return message.channel.send("**# íÌÈ Úáíß ãäÔäÉ ÔÎÕ áÊÓáíãå ÇáÃæäÑ**");
      if(clans[system[author.id].clan].creator !== message.author.id) return message.channel.send("**# íÌÈ Ãä Êßæä ÕÇÍÈ ÇáßáÇä áÃÓÊÎÏÇã åĞÇ ÇáÃãÑ**");
      if(!clans[system[author.id].clan].members.includes(mention.id)) return message.channel.send("**# åĞÇ ÇáÔÎÕ áíÓ ÈÇáßáÇä**");
      let o = Math.floor(Math.random() * 8) + 1;
      let t = Math.floor(Math.random() * 8) + 1;
      let th = Math.floor(Math.random() * 8) + 1;
      let f = Math.floor(Math.random() * 8) + 1;
      let number = `${o}${t}${th}${f}`;
 
      message.author.send(`- \`${number}\`, ÃßÊÈ åĞÇ ÇáÑŞã ÈÇáÔÇÊ ááÃÓÊãÑÇÑ`).catch(e => {
        return message.channel.send(`**# íÌÈ Úáíß İÊÍ ÎÇÕß áÃÓÊÎÏÇã åĞÇ ÇáÃãÑ**`);
      });
 
      let m = await message.channel.send("**# Êã ÇÑÓÇá ÑŞã ÇáÊßãáÉ ÈÇáÎÇÕ .. íÌÈ Úáíß ßÊÇÈÉ ÇáÑŞã ÈÇáÔÇÊ ááÃÓÊãÑÇÑ**");
      let awaited = await message.channel.awaitMessages(r => r.author.id === message.author.id, {max: 1, time: 10000, errors:['time']}).then(c => {
        let collected = c.first();
 
        if(collected.content === number) {
          clans[system[author.id].clan].creator = mention.id;
 
 
          m.delete();
          message.channel.send(`**# \`${mention.username}\`, Êã ÊÍæíá ÇæäÑ ÇáßáÇä ááÔÎÕ**`);
        } else
        if(collected.content !== number) {
          m.delete();
        }
      });
    }
    if(args[1] && args[1] === 'disband') {
      if(system[author.id].clan === 'None') return message.channel.send("**# íÌÈ Çä Êßæä ÈßáÇä áÃÓÊÎÏÇã åĞÇ ÇáÃãÑ**");
      if(clans[system[author.id].clan].creator !== message.author.id) return message.channel.send("**# íÌÈ Ãä Êßæä ÕÇÍÈ ÇáßáÇä áÃÓÊÎÏÇã åĞÇ ÇáÃãÑ**");
      let o = Math.floor(Math.random() * 8) + 1;
      let t = Math.floor(Math.random() * 8) + 1;
      let th = Math.floor(Math.random() * 8) + 1;
      let f = Math.floor(Math.random() * 8) + 1;
      let fi = Math.floor(Math.random() * 8) + 1;
      let number = `${o}${t}${th}${f}${fi}`;
 
      message.author.send(`- \`${number}\`, ÃßÊÈ åĞÇ ÇáÑŞã ÈÇáÔÇÊ ááÃÓÊãÑÇÑ`).catch(e => {
        return message.channel.send(`**# íÌÈ Úáíß İÊÍ ÎÇÕß áÃÓÊÎÏÇã åĞÇ ÇáÃãÑ**`);
      });
 
      let m = await message.channel.send("**# Êã ÇÑÓÇá ÑŞã ÇáÊßãáÉ ÈÇáÎÇÕ .. íÌÈ Úáíß ßÊÇÈÉ ÇáÑŞã ÈÇáÔÇÊ ááÃÓÊãÑÇÑ**");
      let awaited = await message.channel.awaitMessages(r => r.author.id === message.author.id, {max: 1, time: 60000, errors:['time']}).then(c => {
        let collected = c.first();
 
        if(collected.content === number) {
          m.delete().catch();
          collected.delete().catch();
          let name = system[author.id].clan;
          let members = clans[system[author.id].clan].members.length;
          let cvlMembers = Array.from(clans[name].members);
          for(let i = 0; i < cvlMembers.length; i++) {
            let g = hero.users.get(cvlMembers[0]);
              g.send(`- \`${system[author.id].clan}\`, Êã ÇŞİÇá ÇáßáÇä`).catch();
              system[g.id] = {clan: 'None',joinedAt: new Date().toLocaleString() ,clanLevel: 0};
 
 
            cvlMembers.shift();
            if(cvlMembers.length <= 0) {
              message.channel.send(`- \`${name}\`, Êã ÇŞİÇá ÇáßáÇä`);
 
              system[author.id] = {clan: 'None',joinedAt: new Date().toLocaleString() ,clanLevel: 0};
              clans[system[author.id].clan] = undefined;
 
            }
          }
        } else
        if(collected.content !== number) {
          m.delete();
          message.channel.send(`- \`${name}\`, Êã ÇáÅáÛÇÁ`);
        }
      });
    }
    if(args && args[1] === 'room') {
      if(system[author.id].clan === 'None') return message.channel.send("**# íÌÈ Çä Êßæä ÈßáÇä áÃÓÊÎÏÇã åĞÇ ÇáÃãÑ**");
      if(clans[system[author.id].clan].creator !== message.author.id) return message.channel.send("**# íÌÈ Ãä Êßæä ÕÇÍÈ ÇáßáÇä áÃÓÊÎÏÇã åĞÇ ÇáÃãÑ**");
      if(message.guild.channels.find(r => r.name.toLowerCase() === system[author.id].clan && r.type === 'text') || message.guild.channels.find(r => r.name === system[author.id].clan && r.type === 'voice')) return message.channel.send("**# ÇáßáÇä áÏíå Ñæã ÈÇáİÚá**");
      let id = '487721170687229977';
      let m = await message.channel.send("**# ÇßÊÈ äæÚ ÇáÑæã ÇáÇä\n\n - `ßÊÇÈí`\n - `ÕæÊí`**");
      let awaited = await message.channel.awaitMessages(r => r.author.id === message.author.id, {max: 1, time: 20000, errors:['time']}).then(c => {
        let collected = c.first();
        if(collected.content === 'ßÊÇÈí') {
          message.guild.createChannel(system[author.id].clan, 'text').then(c => {
            c.setParent(id);
            c.overwritePermissions(message.guild.id, {
              SEND_MESSAGES: false,
              READ_MESSAGES: true,
              CONNECT: false,
              SPEAK: false
            });
 
            let newArray = Array.from(clans[system[author.id].clan].members);
            for(let i = 0; i < newArray.length; i++) {
              c.overwritePermissions(newArray[0], {
                SEND_MESSAGES: true,
                READ_MESSAGES: true,
                CONNECT: true,
                SPEAK: true
              });
 
              newArray.shift();
            }
          });
          m.edit('**# Êã Úãá ÇáÑæã**');
        } else if(collected.content === 'ÕæÊí') {
          message.guild.createChannel(system[author.id].clan, 'voice').then(c => {
            c.setParent(id);
            c.overwritePermissions(message.guild.id, {
              CONNECT: false,
              SPEAK: false
            });
 
            let newArray = Array.from(clans[system[author.id].clan].members);
            for(let i = 0; i < newArray.length; i++) {
              c.overwritePermissions(newArray[0], {
                CONNECT: true,
                SPEAK: true
              });
 
              newArray.shift();
            }
          });
          m.edit('**# Êã Úãá ÇáÑæã**');
        }
      });
    }
  }
});




client.on('message', message => {
    if(message.content.includes('discord.gg')){
                                            if(!message.channel.guild) return message.reply('** advertising me on DM ? ??   **');
        if (!message.member.hasPermissions(['ADMINISTRATOR'])){
        message.delete()
    return message.reply(`** ããäæÚ äÔÑ ÇáÑæÇÈØ :angry: ! **`)
    }
}
});



client.on("message", (message) => {
    /// ALPHA CODES
   if (message.content.startsWith("=ticket")) {     /// ALPHA CODES
        const reason = message.content.split(" ").slice(1).join(" ");     /// ALPHA CODES
        if (!message.guild.roles.exists("name", "Support Team")) return message.channel.send(`This server doesn't have a \`Support Team\` role made, so the ticket won't be opened.\nIf you are an administrator, make one with that name exactly and give it to users that should be able to see tickets.`);
        if (message.guild.channels.exists("name", "ticket-{message.author.id}" + message.author.id)) return message.channel.send(`You already have a ticket open.`);    /// ALPHA CODES
        message.guild.createChannel(`ticket-${message.author.username}`, "text").then(c => {
            let role = message.guild.roles.find("name", "Support Team");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });    /// ALPHA CODES
            c.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: false
            });
            c.overwritePermissions(message.author, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });
            message.channel.send(`:white_check_mark: Your ticket has been created, #${c.name}.`);
            const embed = new Discord.RichEmbed()
                .setColor(0xCF40FA)
                .addField(`Hey ${message.author.username}!`, `Please try explain why you opened this ticket with as much detail as possible. Our **Support Staff** will be here soon to help.`)
                .setTimestamp();
            c.send({
                embed: embed
            });
        }).catch(console.error);
    }
 
 
  if (message.content.startsWith("=close")) {
        if (!message.channel.name.startsWith(`ticket-`)) return message.channel.send(`You can't use the close command outside of a ticket channel.`);
 
       message.channel.send(`Are you sure? Once confirmed, you cannot reverse this action!\nTo confirm, type \`#confirm\`. This will time out in 10 seconds and be cancelled.`)
           .then((m) => {
               message.channel.awaitMessages(response => response.content === '#confirm', {
                       max: 1,
                       time: 10000,
                       errors: ['time'],
                   })    /// ALPHA CODES
                   .then((collected) => {
                       message.channel.delete();
                   })    /// ALPHA CODES
                   .catch(() => {
                       m.edit('Ticket close timed out, the ticket was not closed.').then(m2 => {
                           m2.delete();
                       }, 3000);
                   });
           });
   }
 
});

client.on('guildMemberAdd', member => {
let channel = member.guild.channels.find(c => c.name === 'welcomee');
let memberavatar = member.user.avatarURL
  if (!channel) return; 
let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setThumbnail(memberavatar)
    .addField('?? | ÇáÇÓã :  ',`${member}`)
    .addField('?? | ÇäÖã:' , `ÇäÖã ÚäÏäÇ ÚÖæ ÌÏíÏ , ${member}:grinning:  `)
    .addField('?? | ÇáÇíÏí :', "**[" + `${member.id}` + "]**" )
            .addField('?| ÇÕÈÍæÇ',`${member.guild.memberCount}`)
           
              .addField("ÇáÇÓã:",`<@` + `${member.id}` + `>`, true)
                
                                 .addField('ÔßÑÇ áÏÎæáß ÓíÑİÑ', `${member.guild.name}`,true)
                                   
 .setFooter("Mosc System..")
    .setTimestamp()

  channel.sendEmbed(embed);
});
        
        client.on('guildMemberRemove', member => {
            var embed = new Discord.RichEmbed()
            .setAuthor(member.user.username, member.user.avatarURL)
            .setThumbnail(member.user.avatarURL)
            .setTitle(`Çááå ãÚÇß ?:skin-tone-1: ??`)
            .setDescription(`ãÚ ÇáÓáÇãå ÊÔÑİäÇ Èß ?:skin-tone-1: ?? `)
            .addField('??   ÊÈŞí',`**[ ${member.guild.memberCount} ]**`,true)
            .setColor('RED')
            .setFooter(`==== äÜÜÊÜÜãÜÜäÜÜÂ áÜÜßÜÜã ÂÓÜÜÊÜÜãÜÜÜÊÜÜÂÚ ====`, 'https://cdn.discordapp.com/attachments/397818254439219217/399292026782351381/shy.png')
        
        var channel =member.guild.channels.find('name', 'welcomee')
        if (!channel) return;
        channel.send({embed : embed});
        })

const lol = JSON.parse(fs.readFileSync("lol.json", "utf8"))
function hi (message, args){
    var embed = new Discord.RichEmbed()
    .setAuthor(client.user.username , client.user.avatarURL)
    .setFooter("All copyrights reseaved. | 2018©")
    .setColor("RANDOM")
    .setDescription(args)
    .setThumbnail(client.user.avatarURL);
    message.channel.send(embed);
}

	
client.on('guildMemberAdd', (member) => {
member.addRole(member.guild.roles.find('name', 'Member'));
});	
	
	
	
	client.on('message', message => {
    if(message.content.includes('discord.gg/')) {
        if(message.member.hasPermission('ADMINISTRATOR')) return;
        message.delete();
        message.guild.member(message.author).addRole(message.guild.roles.find(r => r.name === 'Muted'));
        let embedP = new Discord.RichEmbed()
        .setTitle('? | ÊãÊ ãÚÇŞÈÊß')
        .setAuthor(message.author.username, message.author.avatarURL)
        .addField(`** áŞÏ ŞãÊ ÈãÎÇáİÉ ŞæÇäíä ÇáÓíÑİÑ ãä ÎáÇá äÔÑ ÑæÇÈØ ÇÖÇİÉ Çáì ÓíÑİÑÇÊ ÇÎÑì  **` , `**ãáÇÍÙÉ  : Åä ßÂä åĞÂ ÇáÇÓßÇÊ Úä ØÑíŞ ÇáÎØÃ ÇáÑÌÇÁ ÇáÊæÌå æÇáÊßáã ãÚ ÇáÇÏÂÑÉ**`)
        .addField(`by`,`LegendSystem. `)
        .setColor('RED')
        .setThumbnail(message.author.avatarURL)
        .setFooter(`${message.guild.name} Server`, message.guild.iconURL)
        
        message.channel.send(embedP);
    }
});


client.on('message', message => { 
   if(!message.channel.guild) return;
if(message.content.startsWith(prefix + &bc')) {
if(!message.channel.guild) return message.channel.send('**åĞÇ ÇáÃãÑ İŞØ ááÓíÑİÑÇÊ**').then(m => m.delete(5000));
if(!message.member.hasPermission('ADMINISTRATOR')) return
message.channel.send('**ááÃÓİ áÇ ÊãÊáß ÕáÇÍíÉ** `ADMINISTRATOR`' );
const args = message.content.split(" ").slice(1).join(" ")
const BcList = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.setAuthor(`ãÍÊæì ÇáÑÓÇáå : ${args}`)
.setDescription(`**ÈÑæÏßÇÓÊ ÈÜ ÇãÈÏ ??\nÈÑæÏßÇÓÊ ÈÏæä ÇãÈÏ? \náÏíß ÏŞíŞå ááÃÎÊíÇÑ ŞÈá ÇáÛÇÁ ÇáÈÑæÏßÇÓÊ**`)
if (!args) return message.reply('**íÌÈ Úáíß ßÊÇÈÉ ßáãÉ Çæ ÌãáÉ áÅÑÓÇá ÇáÈÑæÏßÇÓÊ**');message.channel.send(BcList).then(msg => {
msg.react('??')
.then(() => msg.react('?'))
.then(() =>msg.react('??'))

var EmbedBcFilter = (reaction, user) => reaction.emoji.name === '??' && user.id === message.author.id;
var NormalBcFilter = (reaction, user) => reaction.emoji.name === '?' && user.id === message.author.id;

var EmbedBc = msg.createReactionCollector(EmbedBcFilter, { time: 60000 });
var NormalBc = msg.createReactionCollector(NormalBcFilter, { time: 60000 });


EmbedBc.on("collect", r => {

message.channel.send(`:ballot_box_with_check: Êã ÇÑÓÇá ÇáÑÓÇáå ÈäÌÇÍ`).then(m => m.delete(5000));
message.guild.members.forEach(m => {
var EmbedRep = args.replace('<server>' ,message.guild.name).replace('<user>', m).replace('<by>', `${message.author.username}#${message.author.discriminator}`)
var bc = new
Discord.RichEmbed()
.setColor('RANDOM')
.setDescription(EmbedRep)
.setThumbnail(message.author.avatarURL)
m.send({ embed: bc })
msg.delete();
})
})
NormalBc.on("collect", r => {
  message.channel.send(`:ballot_box_with_check: Êã ÇÑÓÇá ÇáÑÓÇáå ÈäÌÇÍ`).then(m => m.delete(5000));
message.guild.members.forEach(m => {
var NormalRep = args.replace('<server>' ,message.guild.name).replace('<user>', m).replace('<by>', `${message.author.username}#${message.author.discriminator}`)
m.send(NormalRep);
msg.delete();
})
})
})
}
});




client.on('message', function(message) {
    if(message.content.startsWith(prefix + "report")) {
        let messageArgs = message.content.split(" ").slice(1).join(" ");
        let messageReason = message.content.split(" ").slice(2).join(" ");
        if(!messageReason) return message.reply("**# Specify a reason!**");
    let mUser = message.mentions.users.first();
    if(!mUser) return message.channel.send("Couldn't find user.");
    let Rembed = new Discord.RichEmbed()
    .setTitle("`New Report!`")
    .setThumbnail(message.author.avatarURL)
    .addField("**# - Reported User:**",mUser,true)
    .addField("**# - Reported User ID:**",mUser.id,true)
    .addField("**# - Reason:**",messageReason,true)
    .addField("**# - Channel:**",message.channel,true)
    .addField("**# - Time:**",message.createdAt,true)
    .setFooter("áæ Çä ÇáÇÈáÇÛ İíå ãÒÍ ÑÇÍ íÊÚÑÖ ÕÇÍÈ ÇáÇÈáÇÛ áŞæÈÇÊ")
message.channel.send(Rembed)
message.channel.send("__Are you sure you want to send this to the Server owner??__").then(msg => {
    msg.react("?")
    msg.react("?")
.then(() => msg.react('?'))
.then(() =>msg.react('?'))
let reaction1Filter = (reaction, user) => reaction.emoji.name === '?' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '?' && user.id === message.author.id;

let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
reaction1.on("collect", r => {
    message.guild.owner.send(Rembed)
    message.reply("**# - Done! ??**");
})
reaction2.on("collect", r => {
    message.reply("**# - Canceled!**");
})
})
}
});

client.on('guildMemberAdd', member => {
  member.guild.fetchInvites().then(guildInvites => {
    const ei = invites[member.guild.id];
    const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
    const inviter = client.users.get(invite.inviter.id);
    const stewart = member.guild.channels.find("chicago");
     stewart.send(`<@${member.user.id}> ÊãÊ ÇáÏÚæå ãä <@${inviter.id}>`);
   //  stewart.send(`<@${member.user.id}> joined using invite code ${invite.code} from <@${inviter.id}>. Invite was used ${invite.uses} times since its creation.`);
  }); 
});







	
	
client.login(process.env.BOT_TOKEN);
 


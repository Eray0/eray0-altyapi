const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');
const dateFormat = require('dateformat');

var prefix = 'BotPrefix';

module.exports = client => {
 client.user.setActivity('Oynuyor Bilgi ', {type: "WATCHING"})
  console.log(`[${moment().format('DD-MM-YYYY HH:mm:ss')}] BOT: Aktif, Komutlar yüklendi!`);
  console.log(`[${moment().format('DD-MM-YYYY HH:mm:ss')}] BOT: ${client.user.username} ismi ile giriş yapıldı!`);
  console.log(`[${moment().format('DD-MM-YYYY HH:mm:ss')}] BOT: Şu an ` + client.channels.size + ` adet kanala, ` + client.guilds.size + ` adet sunucuya ve ` + client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + ` kullanıcıya hizmet veriliyor!`);
  console.log(`[${moment().format('DD-MM-YYYY HH:mm:ss')}] BOT: Şu an ` + client.ping + ` Gecikmeyle Hizmet Veriyor!`);
};
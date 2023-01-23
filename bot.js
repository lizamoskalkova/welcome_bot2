import TelegramBot from "node-telegram-bot-api";

const token =  '5907692192:AAHc3f_t9hcHk6vr44O6-b3Gxf1GoJvz_QU';
const bot = new TelegramBot(token, { polling: true });

bot.on("message", msg => {
  const chatId = msg.chat.id;
  console.log(msg)
  const opts = { reply_to_message_id: msg.message_id };
  const { first_name, last_name, username } = msg.new_chat_member;
  const name = username ? `@${username}` : `${first_name} ${last_name}`;
  let count = 0;
  if (msg.new_chat_participant) {
    const message= `Hello ${name}! Welcome to MUON. A decentralized optimistic oracle network. Making messaging & secure data interfacing possible: on-chain, off-chain & cross-chain! `;

    try {
    bot.sendMessage(chatId, message, {
      "reply_markup": {
        "inline_keyboard": [
          [
            {
              text: '🌐 Website ',
              callback_data: "click",
              url: 'https://www.muon.net'
            },
            {
              text: "🐦 Twitter ",
              url: "https://twitter.com/muon_net",
            },
            {
              text: '🗨 Discord ',
              callback_data: "click",
              url: 'https://discord.gg/zqUzDNq8St'
            },
          ],
          [
            {
              text: '📣 Announcements',
              callback_data: "click",
              url: 'https://t.me/MuonAnn'
            },
            {
              text: '📝 Medium ',
              callback_data: "click",
              url: 'https://medium.com/muon'
            },
            {
              text: '📚 GitBook ',
              callback_data: "click",
              url: 'https://docs.muon.net/muon-network/'
            },
          ],
        ]}}).then((x)=>setTimeout(()=>{
            {bot.deleteMessage(chatId,x.message_id)} 
          },20000))
      }
      catch (err) {
        console.log(err)
      }        

  bot.on("polling_error", console.log);
}});

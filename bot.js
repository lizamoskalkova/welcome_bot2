import TelegramBot from "node-telegram-bot-api";

const token =  '6056165928:AAFf49K9C34f-H9LgMO9-PvwfFZdgw8E5o4';
const bot = new TelegramBot(token, { polling: true });

bot.on("message", msg => {
  const chatId = msg.chat.id;
  console.log(msg)
  const opts = { reply_to_message_id: msg.message_id };
  const { first_name, last_name, username } = msg.new_chat_member;
  const name = username ? `@${username}` : `${first_name}`;
  let count = 0;
  if (msg.new_chat_participant) {
    const message= `Welcome ${name}!\nVitaDAO is a global community (DAO) of scientists and entrepreneurs specialized on funding longevity research. Find out how you can participate and hop onto Discord for more in-depth discussions!`
    try {
    setTimeout (() => {
    bot.sendMessage(chatId, message, {
      "reply_markup": {
        "inline_keyboard": [
          [
            {
              text: '🌐 Website ',
              callback_data: "click",
              url: 'https://www.vitadao.com/'
            },
            {
              text: "🐦 Twitter ",
              url: "https://twitter.com/vita_dao",
            },
          ],
          [
            {
              text: '📝 Medium ',
              callback_data: "click",
              url: 'https://vitadao.medium.com/'
            },
            {
              text: '🗨 Discord ',
              callback_data: "click",
              url: 'https://discord.gg/SpCTnnBhGN'
            },
          ],
        ]}}).then((x)=>setTimeout(()=>{
            {bot.deleteMessage(chatId,x.message_id)} 
          },30000))
      }, 30000)}
      catch (err) {
        console.log(err)
      }        

  bot.on("polling_error", console.log);
}});

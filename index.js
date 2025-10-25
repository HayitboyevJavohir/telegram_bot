import TelegramBot from "node-telegram-bot-api";

const TOKEN = "8321889241:AAFjb5oc_Fk0obDSxoWC9ykwkDQLnCzObP0";
const bot = new TelegramBot(TOKEN, {polling: true});
const bot = new TelegramBot();

bot.on("message", function (msg) {
    const chatID = msg.chat.id;
    const text = msg.text;
    console.log(msg);

    bot.sendMessage(chatID, `--> ${text}`);
})

console.log("Bot ishga tushdi...");
import TelegramBot from "node-telegram-bot-api";

const TOKEN = "8321889241:AAFjb5oc_Fk0obDSxoWC9ykwkDQLnCzObP0";
const bot = new TelegramBot(TOKEN, {polling: true});

bot.on("message", function (msg) {
    const chatID = msg.chat.id;
    const text = msg.text;
    console.log(msg);

    bot.sendMessage(chatID, `--> ${text}`);
    bot.sendDice(chatID);
})

console.log("bot ishga tushdi...")
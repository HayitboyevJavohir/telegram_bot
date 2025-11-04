import TelegramBot from "node-telegram-bot-api";

const TOKEN = "8321889241:AAFjb5oc_Fk0obDSxoWC9ykwkDQLnCzObP0";
const bot = new TelegramBot(TOKEN, {polling: true});

bot.on("message", function (msg) {
    const chatID = msg.chat.id;
    const text = msg.text;
    const firstName = msg.chat.first_name;
    console.log(msg);

    if (text == "/start") {
        bot.sendMessage(chatID, ` Xush kelibsiz, ${firstName}`, {
            reply_markup: {
                keyboard: [
                    [{ text: "Boshlash" }],
                    [{ text: "Menu" }, {text: "Til"}]
                ],
            },
        });
    } else if (text == "/help") {
        bot.sendMessage(chatID, ` Sizga qanday yordam kerak, ${firstName}? `);
    } else if (text == "/sozlamalar") {
        bot.sendMessage(chatID, `Bu sozlamalar, ${firstName}`);
    }
});

console.log("bot ishga tushdi...")
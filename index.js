import TelegramBot from "node-telegram-bot-api";

const TOKEN = "8321889241:AAFjb5oc_Fk0obDSxoWC9ykwkDQLnCzObP0";
const bot = new TelegramBot(TOKEN, { polling: true });

bot.on("message", async function (msg) {
  const chatID = msg.chat.id;
  const text = msg.text;
  const firstName = msg.chat.first_name;
  console.log(msg);

  if (text == "/start") {
    bot.sendMessage(chatID, ` Xush kelibsiz, ${firstName}`, {
      reply_markup: {
        keyboard: [[{ text: "Boshlash" }], [{ text: "Menu" }, { text: "Til" }]],
        resize_keyboard: true,
      },
    });
  } else if (text == "/help") {
    bot.sendMessage(chatID, ` Sizga qanday yordam kerak, ${firstName}? `);
  } else if (text == "/sozlamalar") {
    bot.sendMessage(chatID, `Bu sozlamalar, ${firstName}`);
  } else if (text == "Boshlash") {
    const xabar = await bot.sendMessage(chatID, `iltimos kuting...`)
    setTimeout(function () {

      bot.deleteMessage(chatID, xabar.message_id);
      bot.sendPhoto(chatID, "./images/bugatti.jpg", {
        caption: `Automobiles Ettore Bugatti was a French manufacturer of high-performance automobiles. The company was founded in 1909 in the then-German city of Molsheim`,
        reply_markup: {
            inline_keyboard: [
                [
                    {text: "Rasmlari", callback_data: "photos"},
                    { text: "Ma`lumot", callback_data: "info" },
                ],
                [{text: "Sotib olish", callback_data: "buy"}],
            ],
        },
      });

      console.log("2 sekundga kechiktirilsin");
    }, 1 * 1000);
  } else if (text == "Menu") {
    bot.sendMessage(chatID, `Menyuuuuuu...`);
  } else if (text == "Til") {
    bot.sendMessage(chatID, ` Tilni tanlang... `);
  }
});

console.log("bot ishga tushdi...");

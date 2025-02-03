const { Telegraf } = require("telegraf");
const { handleCommands } = require("./commands");
const { handleGames } = require("./games");

const bot = new Telegraf("7650700427:AAEDBh-tjWbTLaNYbiAgN6F0HrUMzhRlNr4");

// Главное меню
bot.command("start", async (ctx) => {
    await ctx.reply("Выберите действие:", {
        reply_markup: {
            keyboard: [
                [{ text: "📜 Список команд" }],
            ],
            resize_keyboard: true
        }
    });
});

// Подключаем обработчики команд и игр
handleCommands(bot);

bot.launch();
console.log("Бот запущен!");

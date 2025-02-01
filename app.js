const { Telegraf } = require("telegraf");

const bot = new Telegraf("7992499243:AAHpCRB8xoCtLJXMlvD19vaFIoJ9uhyK8s8");

// Главное меню выбора игры
bot.command("start", async (ctx) => {
    await ctx.reply("Выберите игру:", {
        reply_markup: {
            keyboard: [
                [{ text: "🎲 Кости" }],
                [{ text: "🔙 Назад" }]
            ],
            resize_keyboard: true
        }
    });
});

// Меню выбора режима для игры "Кости"
bot.hears("🎲 Кости", async (ctx) => {
    await ctx.reply("Выберите режим игры:", {
        reply_markup: {
            keyboard: [
                [{ text: "🎲 Одиночная игра" }],
                [{ text: "👥 Мультиплеер" }],
                [{ text: "🔙 Назад" }]
            ],
            resize_keyboard: true
        }
    });
});

// Одиночная игра в кости
bot.hears("🎲 Одиночная игра", async (ctx) => {
    const dice = Math.floor(Math.random() * 6) + 1;
    await ctx.reply(`🎲 Ваш результат: ${dice}`);
});

// Возвращение в главное меню
bot.hears("🔙 Назад", async (ctx) => {
    await ctx.reply("Выберите игру:", {
        reply_markup: {
            keyboard: [
                [{ text: "🎲 Кости" }],
                [{ text: "🔙 Назад" }]
            ],
            resize_keyboard: true
        }
    });
});

bot.launch();
console.log("Бот запущен!");

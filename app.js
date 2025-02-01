const { Telegraf } = require("telegraf");
const express = require("express");

const bot = new Telegraf("7992499243:AAHpCRB8xoCtLJXMlvD19vaFIoJ9uhyK8s8");
const app = express();
app.use(express.json());

bot.command("start", async (ctx) => {
    await ctx.reply("Выберите игру:", {
        reply_markup: {
            keyboard: [
                [{ text: "🎮 Играть", web_app: { url: "reservitorgamebone-production.up.railway.app" } }]
            ],
            resize_keyboard: true
        }
    });
});


// 🎲 Обработка команды /roll (игра в кости)
bot.command("roll", async (ctx) => {
    const { dice1, dice2, winner } = games.rollDice();
    await ctx.reply(`🎲 Игрок 1: ${dice1}\n🎲 Игрок 2: ${dice2}\n🏆 Победитель: ${winner}`);
});

app.listen(3000, () => console.log("API запущен на порту 3000"));
bot.launch();

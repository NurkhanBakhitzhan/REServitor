function handleCommands(bot) {
    bot.hears("📜 Список команд", async (ctx) => {
        await ctx.reply("Доступные команды:\n/start - Запустить бота\n/help - Помощь\n/Call_everyone - вызов всех");
    });

    // Команда для вызова всех участников
    bot.command("Call_everyone", async (ctx) => {
        // Проверяем, что команда введена в группе
        if (ctx.chat.type !== "group" && ctx.chat.type !== "supergroup") {
            return await ctx.reply("Эту команду можно использовать только в группах.");
        }

        try {
            const members = await ctx.telegram.getChatAdministrators(ctx.chat.id);
            let mentions = members.map(member => `@${member.user.username}`).join(", ");

            // Если участников много, разделим на части
            const chunkSize = 1000; // Максимальная длина сообщения для Telegram
            while (mentions.length > chunkSize) {
                const chunk = mentions.substring(0, chunkSize);
                mentions = mentions.substring(chunkSize);
                await ctx.reply(chunk);
            }

            // Отправляем оставшуюся часть
            if (mentions.length) {
                await ctx.reply(mentions);
            }

            await ctx.reply("Призываю всех участников!");
        } catch (error) {
            console.error(error);
            await ctx.reply("Ошибка при попытке получить список участников.");
        }
    });
}

module.exports = { handleCommands };

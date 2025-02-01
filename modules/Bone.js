function rollDice() {
    const dice1 = Math.floor(Math.random() * 6) + 1;
    const dice2 = Math.floor(Math.random() * 6) + 1;

    let winner = "Игрок 1";
    if (dice1 < dice2) winner = "Игрок 2";
    else if (dice1 === dice2) winner = "Ничья";

    return { dice1, dice2, winner };
}

// Здесь можно добавить другие игры
function coinFlip() {
    return Math.random() < 0.5 ? "Орёл" : "Решка";
}

// Экспортируем функции
module.exports = { rollDice, coinFlip };

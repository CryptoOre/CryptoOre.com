// public/script.js
document.addEventListener('DOMContentLoaded', () => {
    let minerLevel = 1;
    let coins = 0;

    const gameContainer = document.getElementById('game-container');

    const mineButton = document.createElement('button');
    mineButton.innerText = 'Mine for coins';
    gameContainer.appendChild(mineButton);

    const coinsDisplay = document.createElement('p');
    coinsDisplay.innerText = `Coins: ${coins}`;
    gameContainer.appendChild(coinsDisplay);

    const upgradeButton = document.createElement('button');
    upgradeButton.innerText = `Upgrade Miner (Current Level: ${minerLevel})`;
    gameContainer.appendChild(upgradeButton);

    mineButton.addEventListener('click', () => {
        coins += minerLevel;
        coinsDisplay.innerText = `Coins: ${coins}`;
    });

    upgradeButton.addEventListener('click', () => {
        if (coins >= 10 * minerLevel) {
            coins -= 10 * minerLevel;
            minerLevel++;
            upgradeButton.innerText = `Upgrade Miner (Current Level: ${minerLevel})`;
            coinsDisplay.innerText = `Coins: ${coins}`;
        } else {
            alert('Not enough coins to upgrade!');
        }
    });
});

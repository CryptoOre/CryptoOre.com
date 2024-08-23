document.addEventListener('DOMContentLoaded', () => {
    let score = 0;
    let upgradeCost = 10;
    let minerLevel = 1;
    const friendsButton = document.getElementById('friends-button');
    const miningButton = document.getElementById('mining-button');
    const donateButton = document.getElementById('donate-button');
    const topPlayersButton = document.getElementById('top-players-button');
    const scoreDisplay = document.getElementById('score-display');
    const mineButton = document.getElementById('mine-button');
    const upgradeButton = document.getElementById('upgrade-button');



    // Функция для обновления отображения счета
    function updateScore() {
        scoreDisplay.textContent = `Счет: ${score}`;
        console.log(`Score updated: ${score}`);
    }

    // Функция для обновления состояния кнопки улучшения
    function updateUpgradeButton() {
        upgradeButton.textContent = `Улучшить шахтера (Стоимость: ${upgradeCost} монеток)`;
        upgradeButton.disabled = score < upgradeCost;
        console.log(`Upgrade button updated: ${upgradeButton.textContent}`);
    }

    // Обработчик клика на кнопку добычи монет
    mineButton.addEventListener('click', () => {
        score += minerLevel;
        updateScore();
        updateUpgradeButton();
    });

    // Обработчик клика на кнопку улучшения
    upgradeButton.addEventListener('click', () => {
        if (score >= upgradeCost) {
            score -= upgradeCost;
            minerLevel++;
            upgradeCost *= 2; // Увеличиваем стоимость улучшения
            updateScore();
            updateUpgradeButton();
        }
    });

    // Переход в полноэкранный режим
    function goFullScreen() {
        const gameContainer = document.getElementById('game-container');
        if (gameContainer.requestFullscreen) {
            gameContainer.requestFullscreen();
        } else if (gameContainer.mozRequestFullScreen) { // Firefox
            gameContainer.mozRequestFullScreen();
        } else if (gameContainer.webkitRequestFullscreen) { // Chrome, Safari и Opera
            gameContainer.webkitRequestFullscreen();
        } else if (gameContainer.msRequestFullscreen) { // IE/Edge
            gameContainer.msRequestFullscreen();
        }
    }
    // Переход в полноэкранный режим при загрузке страницы
    // goFullScreen(); // Закомментируйте эту строку для теста

    // Добавьте обработчики событий для новых кнопок

    topPlayersButton.addEventListener('click', () => {
        alert('Топ игроков: Функция в разработке');
    });
    friendsButton.addEventListener('click', () => {
        alert('Топ игроков: Функция в разработке');
    });

    miningButton.addEventListener('click', () => {
        alert('Топ игроков: Функция в разработке');
    });

    donateButton.addEventListener('click', () => {
        alert('Топ игроков: Функция в разработке');
    });

    // Инициализация отображения при старте игры
    updateScore();
    updateUpgradeButton();
});


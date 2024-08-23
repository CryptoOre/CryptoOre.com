// public/script.js
document.addEventListener('DOMContentLoaded', () => {
    let score = 0;
    let upgradeCost = 10;
    let minerLevel = 1;

    const gameContainer = document.getElementById('game-container');
    const scoreDisplay = document.getElementById('score-display');
    const mineButton = document.getElementById('mine-button');
    const upgradeButton = document.getElementById('upgrade-button');

    // Обновляем отображение счета
    function updateScore() {
        scoreDisplay.textContent = `Счет: ${score}`;
    }

    // Обновляем состояние кнопки улучшения
    function updateUpgradeButton() {
        upgradeButton.textContent = `Улучшить шахтера (Стоимость: ${upgradeCost} монеток)`;
        upgradeButton.disabled = score < upgradeCost;
    }

    // Обработчик нажатия на кнопку добычи
    mineButton.addEventListener('click', () => {
        score += minerLevel;
        updateScore();
        updateUpgradeButton();
    });

    // Обработчик нажатия на кнопку улучшения
    upgradeButton.addEventListener('click', () => {
        if (score >= upgradeCost) {
            score -= upgradeCost;
            minerLevel += 1;
            upgradeCost *= 2; // Увеличиваем стоимость улучшения
            updateScore();
            updateUpgradeButton();
        }
    });

    // Переход в полноэкранный режим
    function goFullScreen() {
        if (gameContainer.requestFullscreen) {
            gameContainer.requestFullscreen();
        } else if (gameContainer.mozRequestFullScreen) { // Firefox
            gameContainer.mozRequestFullScreen();
        } else if (gameContainer.webkitRequestFullscreen) { // Chrome, Safari and Opera
            gameContainer.webkitRequestFullscreen();
        } else if (gameContainer.msRequestFullscreen) { // IE/Edge
            gameContainer.msRequestFullscreen();
        }
    }

    // Переход в полноэкранный режим при загрузке страницы
    goFullScreen();

    // Инициализация
    updateScore();
    updateUpgradeButton();
});


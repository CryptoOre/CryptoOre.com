// public/script.js
document.addEventListener('DOMContentLoaded', () => {
    let score = 0;
    let upgradeCost = 10;
    let minerLevel = 1;

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

    // Инициализация
    updateScore();
    updateUpgradeButton();
});

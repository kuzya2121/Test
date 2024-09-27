function checkAnswers() {
    const correctAnswers = ["4", "3", "2", "2", "1", "2", "16", "3", "3", "2", "16", "3", "3"]; // правильные ответы
    let correctCount = 0;

    for (let i = 1; i <= correctAnswers.length; i++) {
        let answer = document.getElementById(`a${i}`).value.trim();
        let question = document.getElementById(`q${i}`);

        if (answer === correctAnswers[i - 1]) {
            question.classList.add('correct');
            correctCount++;
        } else {
            question.classList.add('incorrect');
        }
    }

    let grade;
    if (correctCount >= 10) {
        grade = "Отлично! Оценка: 5";
    } else if (correctCount >= 7) {
        grade = "Хорошо. Оценка: 4";
    } else if (correctCount >= 5) {
        grade = "Удовлетворительно. Оценка: 3";
    } else {
        grade = "Неудовлетворительно. Оценка: 2";
    }

    document.getElementById("result").innerText = `Вы дали ${correctCount} правильных ответов из ${correctAnswers.length}. ${grade}`;
}
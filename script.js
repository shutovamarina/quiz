const button = document.querySelector("#btn");
button.addEventListener("click", result);
const par = document.querySelector(".par");

// Если выбран правильный ответ, добавить +1 балл
function result(e) {
    e.preventDefault();

    let points = 0;

    // Сброс стилей перед новой проверкой
    resetStyles();

    // Проверка каждого вопроса
    if (document.querySelector("#answer1").checked) {
        points++;
        markCorrect("answer1");
    } else {
        markIncorrect("answer1");
    }

    if (document.querySelector("#answer2").checked) {
        points++;
        markCorrect("answer2");
    } else {
        markIncorrect("answer2");
    }

    if (document.querySelector("#answer3").checked) {
        points++;
        markCorrect("answer3");
    } else {
        markIncorrect("answer3");
    }

    if (document.querySelector("#answer4").checked) {
        points++;
        markCorrect("answer4");
    } else {
        markIncorrect("answer4");
    }

    if (document.querySelector("#answer5").checked) {
        points++;
        markCorrect("answer5");
    } else {
        markIncorrect("answer5");
    }

    if (document.querySelector("#answer6").checked) {
        points++;
        markCorrect("answer6");
    } else {
        markIncorrect("answer6");
    }

    if (document.querySelector("#answer7").checked) {
        points++;
        markCorrect("answer7");
    } else {
        markIncorrect("answer7");
    }

    if (document.querySelector("#answer8").checked) {
        points++;
        markCorrect("answer8");
    } else {
        markIncorrect("answer8");
    }

    if (document.querySelector("#answer9").checked) {
        points++;
        markCorrect("answer9");
    } else {
        markIncorrect("answer9");
    }

    if (document.querySelector("#answer10").checked) {
        points++;
        markCorrect("answer10");
    } else {
        markIncorrect("answer10");
    }

    // Показать количество баллов
    par.textContent = "Ваши баллы: " + points;
}

// Функция для сброса стилей
function resetStyles() {
    const labels = document.querySelectorAll("label");
    labels.forEach(label => {
        label.classList.remove("correct", "incorrect");
    });
}

// Функция для пометки правильного ответа
function markCorrect(id) {
    const label = document.querySelector(`label[for=${id}]`);
    if (label) {
        label.classList.add("correct");
    }
}

// Функция для пометки неправильного ответа
function markIncorrect(id) {
    // Ищем радио-кнопку по id
    const radio = document.querySelector(`#${id}`);
    if (radio && !radio.checked) {
        // Ищем ближайшую метку через атрибут 'for'
        const label = document.querySelector(`label[for=${id}]`);
        if (label) {
            label.classList.add("incorrect");
        }
    }
}
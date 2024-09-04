//1
let num1 = prompt("Введите первое число");
let num2 = prompt("Введите второе число");
function numbers(num1, num2) {
    return num1 * num2;
}
alert(numbers(num1, num2));


//2
let name = prompt("Введите ваше Имя");
let surname = prompt("Введите вашу Фамилию");
let age = prompt("Введите ваш возраст");
function fio(name, surname, age) {
    return "Привет" + " " + name + " " + surname + " с возрастом" + " " + age + " лет";
}
alert(fio(name, surname, age));

//3
let pol = prompt("Введите ваш пол"); 
function identity(pol) {
    if (pol == "M") {
        return "Ваш пол мужской";
    }
    else if (pol == "F") {
        return "Ваш пол женский";
    }
    else {
        return "Ваш пол не определен";
    }
}
alert(identity(pol));

//4
let day = prompt("Введите номер дня недели");
function week(day) {
    switch(day) {
        case '1':
            alert("Понедельник");
            break;
        case '2':
            alert("Вторник");
            break;
        case '3':
            alert("Среда");
            break;
        case '4':
            alert("Четверг");
            break;
        case '5':
            alert("Пятница");
            break;
        case '6':
            alert("Суббота");
            break;
        case '7':
            alert("Воскресенье");
            break;
        default:
            alert("Такого дня недели не существует");
            break;
    }
}
week(day);

//5
for (let i = 1; i < 101; i++) {
    if (i >= 1 && i <= 17) {
        document.write(i + " ребенок<br>");
    }
    else if (i > 17 && i < 30) {
        document.write(i + " молодой<br>");
    }
    else if (i >= 30 && i < 55) {
        document.write(i + " зрелый<br>");
    }
    else {
        document.write(i + " старый<br>");
    }
}

//6
function person(name, surname, age) {
    fio(name, surname, age);
    return name + " имеет возраст " + age + " и он зрелый";
}
alert(person(name, surname, age));

//8
function echo() {
    let input = document.querySelector('#email');
    input.value = 'test@email.ru';
}

//9
document.addEventListener('DOMContentLoaded', function () {
    let button = document.getElementById('checkButton');
    button.addEventListener('click', () => {
        let text = document.querySelector('#text');

        if (text.value === "") {
            alert("Вы ничего не ввели в поле");
        } else {
            alert("Вы ввели " + text.value);
        }
    });
});

//10
let blocked = document.querySelector("#blocked");
function block() {
    blocked.setAttribute('disabled', '');
}
function unblock() {
    blocked.removeAttribute('disabled');
}

//11
function toggleSquare() {
    let square = document.getElementById('square');
    let button = document.getElementById('toggleButton');

    if (square.style.display === 'none') {
        square.style.display = 'block';
        button.textContent = 'Скрыть квадрат';
    } else {
        square.style.display = 'none';
        button.textContent = 'Показать квадрат';
    }
}

//12
let square2 = document.getElementById('square2');

square2.addEventListener('mouseenter', () => {
    square2.style.backgroundColor = 'green'; // Цвет при наведении
});

square2.addEventListener('mouseleave', () => {
    square2.style.backgroundColor = 'red'; // Цвет при уводе курсора
});
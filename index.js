//Запитай у користувача його вік і визначи, ким він є: дитиною (0-11), підлітком (12-17), дорослим (18_59) або пенсіонером (60 ...), передбач можливість введення невірних даних.
let inputAge = prompt("Скільки Вам років?");

if (inputAge <= 11) {
  alert("Ви ще дитина");
} else if (inputAge >= 12 && inputAge <= 17) {
  alert("Ви підліток");
} else if (inputAge >= 18 && inputAge <= 59) {
  alert("Ви дорослий");
} else if (inputAge >= 60) {
  alert("Ви пенсіонер");
}

//Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, який розташований на цій клавіші (1 !, 2 @, 3 # і т. д).
let inputNumber = prompt("Введіть число від 0 до 9");

if (inputNumber == 1) {
  alert("!");
} else if (inputNumber == 2) {
  alert("@");
} else if (inputNumber == 3) {
  alert("#");
} else if (inputNumber == 4) {
  alert("$");
} else if (inputNumber == 5) {
  alert("%");
} else if (inputNumber == 6) {
  alert("^");
} else if (inputNumber == 7) {
  alert("&");
} else if (inputNumber == 8) {
  alert("*");
} else if (inputNumber == 9) {
  alert("(");
}

//Підрахуй суму всіх чисел в заданому користувачем діапазоні.

let firstInput = prompt("Введіть перше число:");
let secondInput = prompt("Введіть друге число:");

let firstNumber = Number(firstInput);
let secondNumber = Number(secondInput);

if (isNaN(firstNumber) || isNaN(secondNumber)) {
  alert("Будь ласка, введіть коректні числові значення.");
} else {
  let min = Math.min(firstNumber, secondNumber);
  let max = Math.max(firstNumber, secondNumber);

  let sum = 0;
  for (let i = min; i <= max; i++) {
    sum += i;
  }

  alert(`Сума чисел від ${min} до ${max} дорівнює ${sum}.`);
}



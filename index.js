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

//Запитай у користувача 2 числа і знайди найбільший спільний дільник.

function gcd(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

let inputA = prompt("Введіть перше число:");
let inputB = prompt("Введіть друге число:");

let a = parseInt(inputA);
let b = parseInt(inputB);

if (isNaN(a) || isNaN(b)) {
  alert("Будь ласка, введіть коректні числові значення.");
} else if (a === 0 && b === 0) {
  alert("НСД не визначено для обох нульових значень.");
} else {
  let result = gcd(Math.abs(a), Math.abs(b));
  alert(`Найбільший спільний дільник чисел ${a} і ${b} дорівнює ${result}.`);
}

//Запитай у користувача число і виведи всі дільники цього числа.

let input = prompt("Введіть ціле додатне число:");
let number = parseInt(input);

if (isNaN(number) || number <= 0) {
  alert("Будь ласка, введіть коректне додатне число.");
} else {
  let divisors = [];

  for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
      divisors.push(i);
    }
  }

  alert(`Дільники числа ${number}: ${divisors.join(", ")}`);
}

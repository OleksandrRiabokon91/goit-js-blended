"use strict";
// Запропонуйте користувачу ввести число за допомогою prompt().
// Збережіть введене значення у змінну number.
// Перевірте, чи дорівнює змінна number числу 10:
//    Якщо так – виведіть повідомлення 'Вірно' у alert().
//    Якщо ні – виведіть 'Невірно'.

// function validNumber(number1) {
//   number1 = prompt("Enter valid number");
//   if (Number(number1) === 10) {
//     return alert("Valid number");
//   } else {
//     return alert(`Number '${number1}' is not valid'`);
//   }
// }
// validNumber();
//!========================================================================
// У змінній min лежить випадкове число від 0 до 59.
// Визначте, в яку чверть години потрапляє
// це число (у першу, другу, третю чи четверту).
// Виведіть в alert відповідне повідомлення, наприклад:
// "10 входить в першу чверть"

// const min = Math.floor(Math.random() * (59 - 0) + 0);
// const enterNumber = prompt("Enter number from 0 to 59");
// function timeQarts(number) {
//   if (number >= 0 && number <= 15) {
//     return `Число ${number} у першій чверті`;
//   } else if (number > 15 && number <= 30) {
//     return `Число ${number} у другій чверті`;
//   } else if (number > 30 && number <= 45) {
//     return `Число ${number} у третій чверті`;
//   } else if (number > 45 && number <= 59) {
//     return `Число ${number} у четвертій чверті`;
//   }
//   return `invalide number input`;
// }
// console.log(timeQarts(enterNumber));
//!=========================================================================

// Змінна num може набувати 4 значення: '1', '2', '3' або '4'
// (запитуй це значення у користувача через prompt).
// Якщо вона має значення '1', то у змінну result запишіть 'зима',
// якщо має значення '2' - 'весна' і так далі.
// Розв'яжіть завдання через switch-case.
// Не забудьте про дефолтне значення, на випадок, якщо користувач
// введе в prompt щось інше. В такому випадку result має набувати значення:
// "Вибачте, але ви маєте ввести значення від 1 до 4 включно".
// Значення змінної result виведіть в консоль.

// const sezon = Number(prompt("Enter sezon 1 - 4"));
// function sezonDetecker(num) {
//   switch (num) {
//     case 1:
//       alert("winter");
//       break;
//     case 2:
//       alert("spring");
//       break;
//     case 3:
//       alert("summer");
//       break;
//     case 4:
//       alert("otum");
//       break;
//     default:
//       alert("invalid number");
//   }
// }
// sezonDetecker(sezon);
//!=========================================================================

// Отримуйте від користувача число (кількість хвилин) через prompt
// і виводьте у консоль рядок у форматі годин та хвилин.
// Приклад: користувач вводить в prompt '70' -> в консолі відобразиться '01:10'.
// Корисне посилання для відображення годин та хвилин у потрібному форматі ('01' замість '1'):
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart#examples

// const numberInput = Number(prompt("Enter number"));
// function numberTimeTransform(num) {
//   let houers = String(Math.floor(num / 60));
//   let minuts = String(num % 60);
//   let result = `${houers.padStart(2, "0")}:${minuts.padStart(2, "0")}`;
//   return alert(result);
// }
// numberTimeTransform(numberInput);
//!=========================================================================

// Напишіть код, який запитуватиме у користувача
// логін за допомогою prompt і виводить результат в консоль браузера

// Після цього додайте перевірку введеного користувачем значення:
// Якщо відвідувач вводить "Адмін",
// то prompt запитує пароль (не забудьте зберігти його у змінну для подальшої перевірки).
// Якщо нічого не ввели або натиснули Cancel,
// Вивести в alert строку "Скасовано"
// В іншому випадку вивести в alert рядок "Я вас не знаю"

// Пароль перевіряти так:
// Якщо введено пароль "Я головний",
// то вивести в alert рядок "Добрий день!",
// в іншому випадку вивести в alert рядок "Невірний пароль!"

// потестити - поправити!

// let logName = prompt("enter your login");
// console.log(logName);

// function aftorizator(name) {
//   if (name === "Адмін") {
//     let passWord = prompt("entre your password");
//     if (passWord === "Я головний") {
//       alert("Добрий день!");
//       return;
//     }
//     alert("Невірний пароль!");
//     return;
//   } else if (!name) {
//     alert("Скасовано");
//     return;
//   }
//   alert("Я вас не знаю");
//   return;
// }

// console.log(aftorizator(logName));
//!=========================================================================

// Використайте цикл while, щоб вивести в console всі числа від 0 до 20 включно.

// let sum = 0;
// while (sum >= 0 && sum <= 20) {
//   console.log(`count: ${sum}`);
//   sum += 1;
// }

//!=========================================================================

// Напишіть функцію getNumbers(min, max), що приймає 2 параметри -
// мінімальне і максимальне число відповідно.
// Напишіть цикл всередині функції, який виводить у консоль
// всі числа від max до min за спаданням.
// Окрім цього, підрахуйте суму всіх парних чисел в цьому циклі
// і поверніть її з функції.

// function getNumbers(min, max) {
//   let sum = 0;
//   for (let i = max; i >= min; i--) {
//     console.log(i);

//     if (i % 2 === 0) {
//       sum += i;
//     }
//   }
//   return sum;
// }
// console.log(getNumbers(40, 100));
//!=========================================================================
// Напишіть функцію min(a, b), яка приймає 2 числа і повертає меньше з них.
// Потрібно додати перевірку, що функція отримує саме числа, в іншому випадку
// повертати з функції рядок - 'Not a number!'.

// function numberCompare(a, b) {
//   if (typeof a === "number" && typeof b === "number") {
//     if (a < b) {
//       return a;
//     } else if (b < a) {
//       return b;
//     } else {
//       return `Number: ${a} = number: ${b}`;
//     }
//   } else {
//     return `Not a number!`;
//   }
// }
// console.log(numberCompare(52, 454));
//!=========================================================================
// Напишіть функцію isAdult(age), яка  приймає число - вік користувача і повертає true,
// якщо параметр age більше чи дорівнює 18.
// В іншому випадку вона запитує підтвердження через confirm
// і повертає його результат (true/false).

// function isAdult(age) {
//   age = prompt("Enter yor age");
//   age = Number(age);
//   if (age >= 18) {
//     return true;
//   } else {
//     return confirm("Is your age 18 or more?");
//   }
// }
// console.log(isAdult());

//!=========================================================================
// Напишіть функцію fizzBuzz(num), яка приймає число і перевіряє кожне число від 1 до num:
// Якщо число ділитися  без остачі на 3 - виводить в консоль 'fizz',
// якщо ділиться  без остачі на 5 - виводить в консоль 'buzz',
// якщо ділиться  без остачі і на 3, і на 5 - виводить в консоль 'fizzbuzz'.

// function fizzBuzz(num) {
//   for (let i = 1; i <= num; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log(`${i} fizzbuzz`);
//     } else if (i % 3 === 0) {
//       console.log(`${i} fizz`);
//     } else if (i % 5 === 0) {
//       console.log(`${i} buzz`);
//     }
//   }
// }
// console.log(fizzBuzz(75));

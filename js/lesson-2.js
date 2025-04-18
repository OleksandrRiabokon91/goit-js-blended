// Створіть масив styles з елементами 'jazz' і 'blues'
// Додайте до кінця масиву елемент 'rock-n-roll' за допомогою відповідного методу масивів
// Знайдіть елемент 'blues' у масиві та замініть його на 'classic', використовуючи JavaScript-код

// Напишіть функцію logItems(array), яка приймає масив як аргумент
// і виводить у консоль кожен його елемент у форматі:
// "<номер елемента> - <значення елемента>".
// Використайте цикл for для перебору елементів масиву.
// Нумерація елементів повинна починатися з 1 (а не з 0).
// ?-------------------------------------------------------
// const styles = ["jazz", "blues"];
// styles.push("rock-n-roll");
// let i = styles.indexOf("blues");
// styles[i] = "classic";
// function logItems(styles) {
//   for (let x in styles) {
//     console.log(`${Number(x) + 1} ${styles[x]}`);
//   }
// }
// logItems(styles);

//!===============================================================
// Напишіть функцію checkLogin(array), яка:
// Приймає масив логінів як аргумент.
// Запитує ім'я користувача через prompt.
// Перевіряє, чи є введене ім'я у переданому масиві.
// Якщо ім'я є в масиві – виводить повідомлення через alert: "Welcome, <name>!"
// Якщо ім'я відсутнє – виводить повідомлення: "User not found".
// ?-------------------------------------------------------
// const logins = ["Peter", "John", "Igor", "Sasha"];
// function checkLogin(array) {
//   const userName = prompt("enter user name");
//   if (array.includes(userName)) {
//     alert(`Welcome, ${userName}`);
//     return;
//   }
//   alert("User not found");
// }
// console.log(checkLogin(logins));
// ?-------------------------------------------------------
// function checkLogin(array) {
//   const userLog = prompt("Enter your login");
//   for (let i of array) {
//     if (userLog === i) {
//       return alert(`Welcome, ${userLog}`);
//     }
//   }
//   return alert("User not found");
// }
// checkLogin(logins);

//!===============================================================
// Напишіть функцію caclculateAverage(),
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додайте перевірку, що аргументи - це числа.
// ?-------------------------------------------------------
// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];
// function caclculateAverage(...arr) {
//   if (arr.every((elem) => typeof elem === "number")) {
//     return Number(
//       (arr.reduce((sum, elem) => sum + elem, 0) / arr.length).toFixed(2)
//     );
//   }
//   return alert("not all elements is numbers");
// }
// console.log(caclculateAverage(...someArr));
// console.log(
//   caclculateAverage(
//     45,
//     8,
//     98,
//     9,
//     78,
//     44,
//     5777,
//     44,
//     9997,
//     2,
//     6,
//     4,
//     7,
//     88,
//     74,
//     23,
//     81
//   )
// );
//!===============================================================
// Напишіть функцію, яка сумуватиме сусідні числа
// і пушитиме їх в новий масив.

// уточнення: складати необхідно перше число з другим, потім друге - з третім,
// третє - з четвертим і так до кінця.
// В результаті функція має повертати масив [33, 45, 39, 17, 25, 27, 29].
// ?-------------------------------------------------------
// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];
// function arrSumCounter(array) {
//   const result = [];
//   for (let i = 0; i < array.length - 1; i++) {
//     result.push(array[i] + array[i + 1]);
//   }
//   return result;
// }
// console.log(arrSumCounter(someArr));
// ?-------------------------------------------------------
// function arrSumCounterMap(array) {
//   return array
//     .slice(0, -1)
//     .map((num, i) => num + array[i + 1]);
// }
// console.log(arrSumCounterMap(someArr));
//!===============================================================
// Напишіть функцію findSmallestNumber(numbers),
// яка шукає найменше число в масиві.
// Додайте перевірку, що функція отримує саме масив, і
// якщо функція отримує масив - поверніть з функції найменше число,
// в іншому випадку - поверніть 'Sory, it is not an array!'.
// ?-------------------------------------------------------
// const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];
// function findSmallestNumber(arr) {
//   if (Array.isArray(arr)) {
//     return Math.min(...arr);
//   }
//   return "Sory, it is not an array!";
// }
// console.log(findSmallestNumber(numbers));

//!===============================================================
// Напишіть функцію findLongestWord(string), яка
// приймає довільний рядок, що складається лише зі слів, розділених
// пробілами (параметр string), і повертатиме найдовше слово у реченні.

// Скористайтесь цим прикладом виклику функції для перевірки її роботи:
// ?-------------------------------------------------------
// let string = "London is the capital of Great Britain";
// function findLongestWord(str) {
//   const arr = str.split(" ");
//   let longer = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i].length > longer.length) {
//       longer = arr[i];
//     }
//   }
//   return longer;
// }
// console.log(findLongestWord("London is the capital of Great Britain")); // 'capital'
//!===============================================================
// Напишіть скрипт, який для об'єкту user, послідовно:
// 1 - додасть поле mood зі значенням 'happy',
// 2 - замінить hobby на 'skydiving',
// 3 - замінить значення premium на false,
// 4 - виведе зміст об'єкта user у форматі
// '<ключ>:<значення>' використовуя Object.keys() та for...of
// ?-------------------------------------------------------
// const user = {
//   name: "John",
//   age: 20,
//   hobby: "tenis",
//   premium: true,
// };
// user.mood = "happy";
// user.hobby = "skydiving";
// user.premium = false;
// function objektLook(obj) {
//   let x = Object.keys(obj);

//   for (const i of x) {
//     console.log(`${i} : ${obj[i]}`);
//   }
// }
// objektLook(user);
// ?-------------------------------------------------------
// function objektLook(obj) {
//   for (const key of Object.keys(obj)) {
//     console.log(`${key}: ${obj[key]}`);
//   }
// }
// objektLook(user);
//!===============================================================

// Є об'єкт, в якому зберігаються зарплати команди
// Напишіть код для додавання усіх зарплат та
// збережіть його результат в змінній sum.
// Якщо об'єкт salaries пустий, то результат має бути 0
// ?-------------------------------------------------------
// const salaries = {
//   Mango: 100,
//   Poly: 160,
//   Ajax: 1470,
// };
// function salariesSum(obj) {
//   let sum = 0;
//   for (const key of Object.keys(obj)) {
//     sum += obj[key];
//   }
//   return sum;
// }
// console.log(salariesSum(salaries));

//!===============================================================
// Створіть об'єкт calculator з наступними методами:
// read(a, b) - приймає два аргумента і зберігає їх як властивості об'єкта,
// sum() - повертає сумму збереженних значень (з перевіркою на наявність властивостей в об'єкті),
// mult() - перемножає збереженні значення і повертає результат (з перевіркою на наявність властивостей в об'єкті),
// винесіть перевірку на наявність властивостей в об'єкті в окремий метод exist().

// Якщо вказані властивості в обʼєкті відсутні (тобто метод exist повертає false),
// методи sum і mult мають повертати рядок 'No such properties'
// ?-------------------------------------------------------
// const calculator = {
//   read(a, b) {
//     this.a = a;
//     this.b = b;
//   },
//   exist() {
//     return this.a !== undefined && this.b !== undefined;
//   },
//   sum() {
//     if (this.exist()) {
//       return this.a + this.b;
//     }
//     return "No such properties";
//   },
//   mult() {
//     if (this.exist()) {
//       return this.a * this.b;
//     }
//     return "No such properties";
//   },
// };
// calculator.read(4, 80);
// console.log(calculator.sum());
// console.log(calculator.mult());

//!===============================================================
// Напишіть функцію calcTotalPrice(fruits, fruitName),
// яка приймає массив об'єктів (fruits) і рядок з назвою фрукта (fruitName).
// Функція рахує і повертає загальну вартість фрукта
// з таким ім'ям, ціною та кількістю з об'єкта.

// Зверніть увагу, що в масиві може бути кілька обʼєктів з однаковою
// назвою фрукта, це також треба урахувати.
// ?-------------------------------------------------------
// const fruits = [
//   { name: "Яблуко", price: 45, quantity: 7 },
//   { name: "Апельсин", price: 60, quantity: 4 },
//   { name: "Банан", price: 125, quantity: 8 },
//   { name: "Груша", price: 350, quantity: 2 },
//   { name: "Виноград", price: 440, quantity: 3 },
//   { name: "Банан", price: 125, quantity: 3 },
// ];
// function calcTotalPrice(fruitsArr, fruitName) {
//   const frutFiltred = fruitsArr.filter((frut) => frut.name === fruitName);
//   const frutTotalPrice = frutFiltred.reduce((count, frut) => {
//     return count + frut.price * frut.quantity;
//   }, 0);
//   const frutTotalCount = frutFiltred.reduce((count, frut) => {
//     return count + frut.quantity;
//   }, 0);
//   return `На складі ${fruitName}: загальна кількість ${frutTotalCount}, загальна вартість ${frutTotalPrice}, вартість однієї одиниці ${frutFiltred[0].price} `;
// }
// console.log(calcTotalPrice(fruits, "Банан"));

// const calculateEngravingPrice = function (message, pricePerWord) {
//   return message.split(' ').length * pricePerWord;
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(
//   calculateEngravingPrice(
//     'Proin sociis natoque et magnis parturient montes mus',
//     10,
//   ),
// ); // 80

// console.log(
//   calculateEngravingPrice(
//     'Proin sociis natoque et magnis parturient montes mus',
//     20,
//   ),
// ); // 160

// console.log(
//   calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
// ); // 240

// console.log(
//   calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
// ); // 120

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let el of arr) {
//   if (el === 5) {
//     console.log(el);
//     break;
//   }
//   console.log(el);
// }

// const matrix = [
//   [1, 2, 3],
//   [0, 5, 6],
//   [7, 8, 9],
// ];

// let sum = 0;

// for (let el of matrix) {
//   for (let j of el) {
//     console.log(j);
//     sum+=j
//   }
// }

// console.log(sum);

// let str = "hello world, i'm johny";
// let res = str.split(', ');
// console.log(res);

// const str = 'abba';
// const res = str.split('').reverse().join('');

// console.log(res.toLowerCase() === str.toLowerCase());

// let arr = [];

// arr.push('1');
// arr.push('2');
// console.log(arr);
// console.log(arr.pop());
// console.log(arr);
// arr.unshift('0');
// console.log(arr);
// arr.shift();
// console.log(arr);

// const fn = function (n) {
//   return n;
// }
// const res = fn(1);
// console.log(res);

// const fn = function (a = 0, b = 0) {
//   return Math.pow(a, b);
// }
// const res = fn();
// console.log(res);

// const createPerson = function (name, profession, status, sex, experience) {
//   return {
//     name: name,
//     profession: profession,
//     status: status,
//     sex: sex,
//     experience: experience,
//   };
// }

// let john = createPerson('john', 'mechanic', 200, 'male','happy');
// console.log(john);

// const getArguments = function () {
//   for (let el of arguments) {
//     console.log(el)
//   }
// }

// getArguments(1,2,3,54,5)

// const fn = function (n, ...arg) {
//   // console.log(n, arg)
//   for (let i = 0; i < arg.length; i += 1)
//     console.log(arg[i])
// };
// fn(1, 2, 3, 4, 5, 6, 7)

// let total = 1000;
// function withdraw(amount, balance) {
//   if (amount === 0) {
//     console.log('Для проведения операции введите сумму больше нуля');
//   } else if (amount > balance) {
//     console.log('Недостаточно средств на счету');
//   } else if ((total = balance - amount)) {
//     console.log(`Операция снятия средств проведена успешно ${total}`);
//   }
// }

// withdraw(0, total); // "Для проведения операции введите сумму больше нуля"
// withdraw(1100, total); // "Недостаточно средств на счету"
// withdraw(300, total); // "Операция снятия средств проведена успешно"

// let result;
// let a = 0;
// let b = 0;

// if (a + b < 4) {
//   result = 'malo';
// } else {
//   result = 'mnogo';
// }
// console.log(result);










// Напиши функцию logItems(array), которая получает массив и использует цикл for, который для каждого элемента массива будет выводить в консоль сообщение в формате [номер элемента] - [значение элемента].

// Нумерация должна начинаться с 1. К примеру для первого элемента массива ['Mango', 'Poly', 'Ajax'] с индексом 0 будет выведено '1 - Mango', а для индекса 2 выведет '3 - Ajax'.

// const logItems = function (array) {
//   // твой код
//   let index = 0;
//   for (let arr of array) {
//     index += 1;
//     console.log(`${index}-${arr}`);
//   }
// }


// logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);

// logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);









// Напиши скрипт подсчета стоимости гравировки украшений. Для этого создай функцию calculateEngravingPrice(message, pricePerWord) принимающую строку (в строке будут только слова и пробелы) и цену гравировки одного слова, и возвращающую цену гравировки всех слов в строке.

// const calculateEngravingPrice = function (message, pricePerWord) {
//   // твой код
// }

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(
//   calculateEngravingPrice(
//     'Proin sociis natoque et magnis parturient montes mus',
//     10,
//   ),
// ); // 80

// console.log(
//   calculateEngravingPrice(
//     'Proin sociis natoque et magnis parturient montes mus',
//     20,
//   ),
// ); // 160

// console.log(
//   calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
// ); // 240

// console.log(
//   calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
// ); // 120

















// Напиши фукцнию findLongestWord(string), которая принимает параметром произвольную строку (в строке будут только слова и пробелы) и возвращает самое длинное слово в этой строке.

// const findLongestWord = function (string) {
//   // твой код
//   let bigword=string[0];
//   for (const el of string) {
//     if (el.length < bigword.length) {
//       bigword = el;
//     }
//   }
//   return bigword
// }

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

// console.log(findLongestWord('Google do a roll')); // 'Google'

// console.log(findLongestWord('May the force be with you')); // 'force'











// Напиши функцию formatString(string) которая принимает строку и форматирует ее если необходимо.

// Если длина строки не превышает 40 символов, функция возвращает ее в исходном виде.
// Если длина больше 40 символов, то функция обрезает строку до 40 - ка символов и добавляет в конец строки троеточие '...', после чего возвращает укороченную версию.

// const formatString = function(string) {
//   // твой код
//

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// // вернется оригинальная строка

// console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// // вернется форматированная строка

// console.log(formatString('Curabitur ligula sapien.'));
// // вернется оригинальная строка

// console.log(
//   formatString(
//     'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
//   ),
// );
// // вернется форматированная строка












// Напиши функцию checkForSpam(message), принимающую 1 параметр message - строку. Функция проверяет ее на содержание слов spam и sale. Если нашли зарещенное слово то функция возвращает true, если запрещенных слов нет функция возвращает false. Слова в строке могут быть в произвольном регистре.

// const checkForSpam = function(message) {
//   // твой код
//   let check = message.toLowerCase();
//   return check.includes(`spam`) || check.includes(`sale`);
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(checkForSpam('Latest technology news')); // false

// console.log(checkForSpam('JavaScript weekly newsletter')); // false

// console.log(checkForSpam('Get best sale offers now!')); // true

// console.log(checkForSpam('[SPAM] How to earn fast money?')); // true

// Напиши скрипт со следующим функционалом:

// При загрузке страницы пользователю предлагается в prompt ввести число. Ввод сохраняется в переменную input и добавляется в массив чисел numbers.
// Операция ввода числа пользователем и сохранение в массив продолжается до тех пор, пока пользователь не нажмет Cancel в prompt.
// После того как пользователь прекратил ввод нажав Cancel, если массив не пустой, необходимо посчитать сумму всех элементов массива и записать ее в переменную total. Используй цикл for или for...of. После чего в консоль выведи строку 'Общая сумма чисел равна [сумма]'.
// 🔔 Делать проверку того, что пользователь ввел именно число, а не произвольный набор символов, не обязательно. Если хочешь, в случае некорректного ввода, показывай alert с текстом 'Было введено не число, попробуйте еще раз', при этом результат prompt записывать в массив чисел не нужно, после чего снова пользователю предлагается ввести число в prompt.

// let input;
// const numbers = [];
// let total = 0;

// do {
//   input = prompt("введите число");
//   numbers.push(Number(input));
// } while (input !== null);

// if (numbers.length> 0) {
//   for (const number of numbers) {
//     total += number;
//   }
// }
// console.log(`общая сумма говна ${total}`);

// Есть массив logins с логинами пользователей. Напиши скрипт добавления логина в массив logins. Добавляемый логин должен:

// проходить проверку на длину от 4 до 16-ти символов включительно
// быть уникален, то есть отсутствовать в массиве logins
// Разбей задачу на подзадачи с помощью функций.

// Напиши функцию isLoginValid(login), в которой проверь количество символов параметра login и верни true или false в зависимости от того, попадает ли длина параметра в заданный диапазон от 4-х до 16-ти символов включительно.

// Напиши функцию isLoginUnique(allLogins, login), которая принимает список всех логинов и добавляемый логин как параметры и проверяет наличие login в массиве allLogins, возвращая true если такого логина еще нет и false если логин уже используется.

// Напиши функцию addLogin(allLogins, login) которая:

// Принимает новый логин и массив всех логинов как параметры
// Проверяет валидность логина используя вспомогательную функцию isLoginValid
// Если логин не валиден, прекратить исполнение функции addLogin и вернуть строку 'Ошибка! Логин должен быть от 4 до 16 символов'
// Если логин валиден, функция addLogin проверяеть уникальность логина с помощью функции isLoginUnique
// Если isLoginUnique вернет false, тогда addLogin не добавляет логин в массив и возвращает строку 'Такой логин уже используется!'
// Если isLoginUnique вернет true, addLogin добавляет новый логин в logins и возвращает строку 'Логин успешно добавлен!'
// 🔔 Принцип единственной ответственности функции - каждая функция делает что-то одно. Это позволяет переиспользовать код и изменять логику работы функции только в одном месте, не затрагивая работу программы в целом.

// Предикатные функции возвращают только true или false. Такие функции принято называть начиная с is: isLoginUnique и isLoginValid в нашем случае.

// isLoginUnique только проверяет есть ли такой логин в массиве и возвращает true или false.
// isLoginValid только проверяет валидный ли логин и возвращает true или false.
// addLogin добавляет или не добавляет логин в массив.При этом для проверок условия добавления использует результаты вызовов других функций - isLoginUnique и isLoginValid.

// const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

// const isLoginValid = function(login) {
//   // твой код
// };

// const isLoginUnique = function(allLogins, login) {
//   // твой код
// };

// const addLogin = function(allLogins, login) {
//   // твой код
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(addLogin(logins, 'Ajax')); // 'Логин успешно добавлен!'
// console.log(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
// console.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
// console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'

//  const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

// function isLoginValid(login) {
//     let loginLength = login.length;
//     return loginLength >= 4 && loginLength <= 16;
// }

// function isLoginUnique(allLogins, login) {
//     return !allLogins.includes(login);
// }

// function addLogin(allLogins, login) {
//     if (!isLoginValid(login)) {
//         console.log("Ошибка! Логин должен быть от 4 до 16 символов");
//         return "Ошибка! Логин должен быть от 4 до 16 символов";
//     } else if (!isLoginUnique(allLogins, login)) {
//         console.log("Такой логин уже используется!");
//         return "Такой логин уже используется!";
//     } else {
//         logins.push(login);
//         console.log("Логин успешно добавлен!");
//         return "Логин успешно добавлен!";
//     }
// }

// // Вызовы функции для проверки
// addLogin(logins, "Ajax"); // 'Логин успешно добавлен!'
// addLogin(logins, "robotGoogles"); // 'Такой логин уже используется!'
// addLogin(logins, "Zod"); // 'Ошибка! Логин должен быть от 4 до 16 символов'
// addLogin(logins, "jqueryisextremelyfast"); // 'Ошибка! Логин должен быть от 4 до 16 символов'
// //

// const name='generator';
// let price=1000;

// console.log(`vibran ${name} stoit ${price}`);

// price = 2000;

// console.log(`vibran ${name} stoit ${price}`);

// Напиши скрипт проверки количества товаров на складе. Есть переменные total (количество товаров на складе) и ordered (единиц товара в заказе).

// Сравни эти значения и по результатам выведи:

// Если в заказе указано число, превышающее количество товаров на складе, то выведи сообщение "На складе недостаточно твоаров!".
// В другом случае выводи сообщение "Заказ оформлен, с вами свяжется менеджер".
// Проверь работоспособность кода с разными значениями переменной ordered, например 20, 80 и 130.

// const total = 100;
// const ordered = 1100;

// if (total < ordered) {
//     console.log("На складе недостаточно твоаров!");
// } else {
//     console.log("Заказ оформлен, с вами свяжется менеджер");
// }

// Напиши скрипт имитирующий авторизацию администратора в панели управления.

// Есть переменная message в которую будет записано сообщение о результате. При загрузке страницы у посетителя запрашивается пароль через prompt:

// Если нажали Cancel, записать в message строку 'Отменено пользователем!'
// В протовном случае, если введен пароль который совпадает со значением константы ADMIN_PASSWORD, записать в message строку 'Добро пожаловать!'
// В противном случае, то есть если ни одно из предыдущих условий не выполнилось, записать в message строку 'Доступ запрещен, неверный пароль!'
// После всех проверок вывести в alert значение переменной message.

// const ADMIN_PASSWORD = 'jqueryismyjam';
// let message;

// const pass = prompt('vvedite parol');

// if (pass === null) {
//     message = 'otmeneno polzovatelem';
// } else if (pass === ADMIN_PASSWORD) {
//     message = 'Добро пожаловать!';
// } else {
//     message = 'Доступ запрещен, неверный пароль!';
// }

// alert(message);

// На счету пользователя есть 23580 кредитов, значение хранится в переменной credits (создай и присвой). Пользователь решает купить ремонтных дроидов, которые стоят по 3000 кредитов за штуку. Цена одного дроида хранится в переменной pricePerDroid (создай и присвой).

// При посещении страницы, используя prompt, необходимо спросить количество дроидов которые пользователь хочет купить и сохранить в переменную.

// Напиши скрипт который:

// Если в prompt была нажата кнопка Cancel, выводит в консоль сообщение 'Отменено пользователем!'.
// В противном случае, рассчитывает общую цену заказа и сохраняет в переменной totalPrice.
// Проверяет сможет ли пользователь оплатить заказ:
// если сумма к оплате превышает количество кредитов на счету, выводи в консоль сообщение 'Недостаточно средств на счету!'.
// в противном случае необходимо посчитать остаток кредитов на счету и вывести сообщение 'Вы купили [число] дроидов, на счету осталось [число] кредитов.'.

// let credits = 23580;
// const pricePerDroid = 3000;
// let totalPrice;
// let buy = prompt('skolko nado droidov?');

// if (buy === null) {
//   console.log('Отменено пользователем!');
// } else {
//   totalPrice = buy * pricePerDroid;
//   if (totalPrice > credits) {
//     console.log('Недостаточно средств на счету!');
//   } else {
//     credits -= totalPrice;
//     console.log(
//       `Вы купили ${buy} дроидов, на счету осталось ${credits} кредитов.`,
//     );
//   }
// }

// let credits = 23580;
// let pricePerDroid = 3000;
// let totalPrice;
// let input = prompt('Input the number of droids that you want to buy');

// if (input === null) {
//   alert('Cancelled by user');
// } else {
//   let num = Number(input);
//   totalPrice = num * pricePerDroid;

//   if (totalPrice > credits) {
//     alert('Недостаточно средств на счету!');
//   } else {
//     let rest = credits - totalPrice;
//     alert(`Вы купили ${num} дроидов, на счету осталось ${rest} кредитов.`);
//   }
// }

// Пользователь может оформить доставку товара к себе в страну, указав ее при посещении страницы в prompt. Учти, пользователь может ввести имя страны не только буквами нижнего регистра, а к примеру 'кИтАЙ'.

// Напиши скрипт который выводит сообщение о стоимости доставки в указанную страну. Обязательно используй switch. Формат сообщения: 'Доставка в [страна] будет стоить [цена] кредитов'.

// Но доставка есть не везде, если указанной страны нет в списке, то выводи в alert сообщение 'В вашей стране доставка не доступна'.

// Ниже приведен список стран и стоимость доставки.

// китай - 100 кредитов
// чили - 250 кредитов
// австралия - 170 кредитов
// индия - 80 кредитов
// ямайка - 120 кредитов

// let country = prompt('enter country');
// if (country !== null) {
//   country = country.toLowerCase();
// } else {
//   alert('отмена');
// }
// let price;

// switch (country) {
//   case 'китай':
//     price = 100;
//     break;
//   case 'чили':
//     price = 250;
//     break;
//   case 'австралия':
//     price = 170;
//     break;
//   case 'индия':
//     price = 80;
//     break;
//   case 'ямайка':
//     price = 120;
//     break;

//   default:
//     price = -1;
// }
// if ((price === -1)) {
//   alert('В вашей стране доставка не доступна');
// } else {
//   alert(`Доставка в ${country} будет стоить ${price} кредитов`);
// }











// Напиши скрипт который просит посетителя ввести число в prompt до тех пор, пока посетитель на нажмет Cancel и каждый раз добавляет введенное значение к общей сумме.

// При загрузке страницы пользователю предлагается в prompt ввести число. Ввод добавляется к значению переменной total.
// Операция ввода числа продолжается до тех пор, пока пользователь не нажмет кнопку Cancel в prompt.
// После того как пользователь прекратил ввод нажав кнопку Cancel, показать alert со строкой 'Общая сумма чисел равна [сумма]'.

// let input;
// let total = 0;

// while (input !== null) {
//   input = prompt('введите число');
//   total += input
//   alert(`Общая сумма чисел равна ${total}`);
// }

// let input;
// let total = 0;

// while (input !== null) {
//   input = prompt('Please enter a number:');

//   if (input !== null) {
//     let num = Number(input);

//     if (Number.isNaN(num)) {
//       alert('Было введено не число, попробуйте еще раз');
//     } else {
//       total += num;
//     }
//   }
// }

// alert(`Общая сумма чисел равна ${total}`);

// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

// Код должен вывести числа от 10 до 0:

// for (let i = 10; i >= 0; i-=1) {
// 	console.log(i);
// }

// Код должен вывести числа от 10 до 0:

// for (let i = 10; i >= 0; i-=1) {
// 	console.log(i);
// }

// Код должен вывести числа от 0 до 10:

// let i = 0;

// while (i <= 10) {
// 	console.log(i);
// 	i+=1;
// }

// Код должен найти сумму целых чисел от 1 до 10:
// let res=0;

// for (let i = 1; i <= 5; i+=1) {
//   res += i;
// }

// console.log(res);

// Код должен найти произведение целых чисел от 1 до 10:

// let res = 1;

// for (let i = 1; i <= 3; i+=1) {
//   res *= i;
//   console.log(res);
// }

// console.log(res);

// Код должен найти сумму элементов массива:

// let arr = [1, 2, 3, 4, 5];
// let sum = 0;

// for (let elem of arr) {
// 	sum += elem;
// }

// console.log(sum); // должно вывести 15

// --------------------------------------

// Код должен найти сумму элементов массива:

// let arr = [1, 2, 3, 4, 5];
// let sum = 0;

// for (let elem of arr) {
// 	sum += elem;
// }

// console.log(sum); // должно вывести 15
// --------------------------------------------

// const obj = {
//   a: 3
// }
// const fun = function () {
//   for (let key in obj) {
//     obj[key]

//   }
// }
// fun();











// Напиши функцию formatString(string) которая принимает строку и форматирует ее если необходимо.

// Если длина строки не превышает 40 символов, функция возвращает ее в исходном виде.
// Если длина больше 40 символов, то функция обрезает строку до 40 - ка символов и добавляет в конец строки троеточие '...', после чего возвращает укороченную версию.

// const formatString = function(string) {
//   // твой код

// };
// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// // вернется оригинальная строка

// console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// // вернется форматированная строка

// console.log(formatString('Curabitur ligula sapien.'));
// // вернется оригинальная строка

// console.log(
//   formatString(
//     'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
//     // вернется форматированная строка
//   ),
// );











// Напиши скрипт подсчета стоимости гравировки украшений. Для этого создай функцию calculateEngravingPrice(message, pricePerWord) принимающую строку (в строке будут только слова и пробелы) и цену гравировки одного слова, и возвращающую цену гравировки всех слов в строке.

// const calculateEngravingPrice = function(message, pricePerWord) {
//   // твой код
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(
//   calculateEngravingPrice(
//     'Proin sociis natoque et magnis parturient montes mus',
//     10,
//   ),
// ); // 80

// console.log(
//   calculateEngravingPrice(
//     'Proin sociis natoque et magnis parturient montes mus',
//     20,
//   ),
// ); // 160

// console.log(
//   calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
// ); // 240

// console.log(
//   calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
// ); // 120













// Напиши функцию logItems(array), которая получает массив и использует цикл for, который для каждого элемента массива будет выводить в консоль сообщение в формате [номер элемента] - [значение элемента].

// Нумерация должна начинаться с 1. К примеру для первого элемента массива ['Mango', 'Poly', 'Ajax'] с индексом 0 будет выведено '1 - Mango', а для индекса 2 выведет '3 - Ajax'.

// const logItems = function(array) {
//   // твой код

// };
// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);

// logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);











// Напиши фукцнию findLongestWord(string), которая принимает параметром произвольную строку (в строке будут только слова и пробелы) и возвращает самое длинное слово в этой строке.

// const findLongestWord = function (strings) {
//   // твой код

// // /*
// //  * Вызовы функции для проверки работоспособности твоей реализации.
// //  */
// console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

// console.log(findLongestWord('Google do a roll')); // 'Google'

// console.log(findLongestWord('May the force be with you')); // 'force'











// Напиши функцию formatString(string) которая принимает строку и форматирует ее если необходимо.

// Если длина строки не превышает 40 символов, функция возвращает ее в исходном виде.
// Если длина больше 40 символов, то функция обрезает строку до 40-ка символов и добавляет в конец строки троеточие '...', после чего возвращает укороченную версию.

// const formatString = string =>
//   // твой код
//   string.length > 40 ? `${string.slice(0, 41)}...` : string;

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// // вернется оригинальная строка

// console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// // вернется форматированная строка

// console.log(formatString('Curabitur ligula sapien.'));
// // вернется оригинальная строка

// console.log(
//   formatString(
//     'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
//   ),
// );
// // вернется форматированная строка









// Есть массив logins с логинами пользователей. Напиши скрипт добавления логина в массив logins. Добавляемый логин должен:

// проходить проверку на длину от 4 до 16-ти символов включительно
// быть уникален, то есть отсутствовать в массиве logins
// Разбей задачу на подзадачи с помощью функций.

// Напиши функцию isLoginValid(login), в которой проверь количество символов параметра login и верни true или false в зависимости от того, попадает ли длина параметра в заданный диапазон от 4-х до 16-ти символов включительно.

// Напиши функцию isLoginUnique(allLogins, login), которая принимает список всех логинов и добавляемый логин как параметры и проверяет наличие login в массиве allLogins, возвращая true если такого логина еще нет и false если логин уже используется.

// Напиши функцию addLogin(allLogins, login) которая:

// Принимает новый логин и массив всех логинов как параметры
// Проверяет валидность логина используя вспомогательную функцию isLoginValid
// Если логин не валиден, прекратить исполнение функции addLogin и вернуть строку 'Ошибка! Логин должен быть от 4 до 16 символов'
// Если логин валиден, функция addLogin проверяеть уникальность логина с помощью функции isLoginUnique
// Если isLoginUnique вернет false, тогда addLogin не добавляет логин в массив и возвращает строку 'Такой логин уже используется!'
// Если isLoginUnique вернет true, addLogin добавляет новый логин в logins и возвращает строку 'Логин успешно добавлен!'
// 🔔 Принцип единственной ответственности функции - каждая функция делает что-то одно. Это позволяет переиспользовать код и изменять логику работы функции только в одном месте, не затрагивая работу программы в целом.

// Предикатные функции возвращают только true или false. Такие функции принято называть начиная с is: isLoginUnique и isLoginValid в нашем случае.

// isLoginUnique только проверяет есть ли такой логин в массиве и возвращает true или false.
// isLoginValid только проверяет валидный ли логин и возвращает true или false.
// addLogin добавляет или не добавляет логин в массив.При этом для проверок условия добавления использует результаты вызовов других функций - isLoginUnique и isLoginValid.

// const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

// const isLoginValid = function(login) {
//   // твой код
// };

// const isLoginUnique = function(allLogins, login) {
//   // твой код
// };

// const addLogin = function(allLogins, login) {
//   // твой код
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(addLogin(logins, 'Ajax')); // 'Логин успешно добавлен!'
// console.log(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
// console.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
// console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'












// Объяви две переменные хранящие название и цену товара: name и price
// Присвой переменным следующие характеристики товара (сразу при объявлении)
// название: Генератор защитного поля
// цена: 1000
// Используя шаблонную строку выведи в консоль информацию о товаре, получится: 'Выбран «Генератор защитного поля», цена за штуку 1000 кредитов'.
// Присвой товару новую цену - 2000
// Используя шаблонную строку выведи в консоль информацию о товаре, получится: 'Выбран «Генератор защитного поля», цена за штуку 2000 кредитов'.

// const name = 'генератор защитного поля';
// let price = 1000;

// console.log(`Выбран ${name}, цена за штуку ${price} кредитов`);
//  price = 2000;
// console.log(`Выбран ${name}, цена за штуку ${price} кредитов`);










// Напиши скрипт проверки количества товаров на складе. Есть переменные total (количество товаров на складе) и ordered (единиц товара в заказе).

// Сравни эти значения и по результатам выведи:

// Если в заказе указано число, превышающее количество товаров на складе, то выведи сообщение "На складе недостаточно твоаров!".
// В другом случае выводи сообщение "Заказ оформлен, с вами свяжется менеджер".
// Проверь работоспособность кода с разными значениями переменной ordered, например 20, 80 и 130.

// const total = 100;
// let ordered = 50;

// ordered = 130;

// if (ordered > total) {
//   console.log("На складе недостаточно твоаров!")
// } else console.log("Заказ оформлен, с вами свяжется менеджер")











// Напиши скрипт имитирующий авторизацию администратора в панели управления.

// Есть переменная message в которую будет записано сообщение о результате. При загрузке страницы у посетителя запрашивается пароль через prompt:

// Если нажали Cancel, записать в message строку 'Отменено пользователем!'
// В протовном случае, если введен пароль который совпадает со значением константы ADMIN_PASSWORD, записать в message строку 'Добро пожаловать!'
// В противном случае, то есть если ни одно из предыдущих условий не выполнилось, записать в message строку 'Доступ запрещен, неверный пароль!'
// После всех проверок вывести в alert значение переменной message.

// const ADMIN_PASSWORD = 'jqueryismyjam';
// let message;

// let password = prompt('введите пароль');

// if (password===null) {
//   message = 'Отменено пользователем!';
// } else if ((password === ADMIN_PASSWORD)) {
//   message = 'Добро пожаловать!';
// } else message = 'Доступ запрещен, неверный пароль!';

// alert(message);












// На счету пользователя есть 23580 кредитов, значение хранится в переменной credits (создай и присвой). Пользователь решает купить ремонтных дроидов, которые стоят по 3000 кредитов за штуку. Цена одного дроида хранится в переменной pricePerDroid (создай и присвой).

// При посещении страницы, используя prompt, необходимо спросить количество дроидов которые пользователь хочет купить и сохранить в переменную.

// Напиши скрипт который:

// Если в prompt была нажата кнопка Cancel, выводит в консоль сообщение 'Отменено пользователем!'.
// В противном случае, рассчитывает общую цену заказа и сохраняет в переменной totalPrice.
// Проверяет сможет ли пользователь оплатить заказ:
// если сумма к оплате превышает количество кредитов на счету, выводи в консоль сообщение 'Недостаточно средств на счету!'.
// в противном случае необходимо посчитать остаток кредитов на счету и вывести сообщение 'Вы купили [число] дроидов, на счету осталось [число] кредитов.'.

// const credits = 23580;
// const pricePerDroid = 3000;
// let totalPrice = 0;
// let input = prompt('сколько дроидов вы хотите купить?');

// if (input === null) {
//   console.log('Отменено пользователем!');
// } else {
//   totalPrice = pricePerDroid * input;

//   if (totalPrice > credits) {
//     console.log('Недостаточно средств на счету!');
//   } else {
//     let rest = credits - totalPrice;
//     console.log(
//       `Вы купили ${input} дроидов, на счету осталось ${rest} кредитов.`,
//     );
//   }
// }







// Пользователь может оформить доставку товара к себе в страну, указав ее при посещении страницы в prompt. Учти, пользователь может ввести имя страны не только буквами нижнего регистра, а к примеру 'кИтАЙ'.
// Напиши скрипт который выводит сообщение о стоимости доставки в указанную страну. Обязательно используй switch. Формат сообщения: 'Доставка в [страна] будет стоить [цена] кредитов'.
// Но доставка есть не везде, если указанной страны нет в списке, то выводи в alert сообщение 'В вашей стране доставка не доступна'.
// Ниже приведен список стран и стоимость доставки.
// Китай - 100 кредитов
// Чили - 250 кредитов
// Австралия - 170 кредитов
// Индия - 80 кредитов
// Ямайка - 120 кредитов

// let country = prompt('Укажите страну');

// if (country !== null) {
//   country = country.toLowerCase();
// }
// let price;

// switch (country) {
//   case 'китай':
//     price = 100;
//     break;
//   case 'чили':
//     price = 250;
//     break;
//   case 'австралия':
//     price = 170;
//     break;
//   case 'индия':
//     price = 80;
//     break;
//   case 'ямайка':
//     price = 120;
//     break;

//   default:
//     console.log('В вашей стране доставка не доступна');
// }
//   console.log(`Доставка в ${country} будет стоить ${price} кредитов`);







// Напиши скрипт который просит посетителя ввести число в prompt до тех пор, пока посетитель на нажмет Cancel и каждый раз добавляет введенное значение к общей сумме.

// При загрузке страницы пользователю предлагается в prompt ввести число. Ввод добавляется к значению переменной total.
// Операция ввода числа продолжается до тех пор, пока пользователь не нажмет кнопку Cancel в prompt.
// После того как пользователь прекратил ввод нажав кнопку Cancel, показать alert со строкой 'Общая сумма чисел равна [сумма]'.

// 🔔 Делать проверку того, что пользователь ввел именно число, а не произвольный набор символов, не нужно. Если хочешь, в случае некорректного ввода, показывай alert с текстом 'Было введено не число, попробуйте еще раз', при этом результат prompt плюсовать к общей сумме не нужно, после чего снова пользователю предлагается ввести число в prompt.

// let input;
// let total = 0;

// while (input !== null) {
//   input = prompt('Please enter a number:');

//   if (input !== null) {
//     let num = Number(input);

//     if (Number.isNaN(num)) {
//       alert('Было введено не число, попробуйте еще раз');
//     } else {
//       total += num;
//     }
//   }
// }

// alert(`Общая сумма чисел равна ${total}`);






// Код должен найти сумму элементов массива, однако, всегда выводит NaN:

// let arr = ['1', '2', '3', '4', '5'];
// let sum = 0;

// for (let i = 0; i < arr.length; i+=1) {
// 	sum += +arr[i];
// }

// console.log(sum); // почему-то выводит NaN





// const array = ['body', 'hands', 'legs'];
// console.log(array);
// console.log(array[0]);
// console.log(array[2]);
// array[2] = 'head';
// console.log(array[2]);
// console.log(array.length);
// const lastword = array.length -1
// console.log(array[lastword]);

// const array = ['body', 'hands', 'legs'];

// for (let i = 0; i < array.length; i += 1) {
  
//   console.log(array[i]);
// }



// const array = ['hello', 'word', 'how', 'are', 'you'];

// for (const arr of array) {
//   console.log(arr);
// }

// const strings = 'bigstring';
// for (const string of strings) {
//   console.log(string);
// }





// const array = ['hello', 'word', 'how', 'are', 'you'];
// const findofword = 'how';
// let result = 'NOOOO';

// for (const arr of array) {
//   if (arr === findofword) {
//     result='oh my gosh yes';
//     break;
//   }
  
// }
//  console.log(result);












// const array = [1, 2, 3, 15, 13, 16, 21, 26, 32, 64, 3, 6, 8]
// const pressnumber = 15;
// let haha;

// for (let i = 0; i < array.length; i += 1) {
//   if (array[i] <= pressnumber) {
//     continue;
//   }
//   console.log(array[i]);
// }









// const friends = ['alex', 'dmitri', 'anna', 'arina','hero','dava','jora','vika']
// console.log(friends);
// console.log(friends.length);
// console.table(friends);
// let lastindex = friends.length - 1;
// console.log(lastindex);
// friends[7] = 'inna';
// console.log(friends);
// console.log(friends[8]);
// let a = 10;
// let b = a;
// console.log(a);
// console.log(b);
// a = 20;
// console.log(a);
// console.log(b);
// const x=[1,2,3]
// const y = x;
// console.log(x);
// console.log(y);
// console.log(x === y);
// console.log([123] === [123]);
// console.log(123 === 123);

// for (let i = 0; i<friends.length; i+=1){
//   friends[i] += `-${i}`;
//   console.log(friends[i]);
// }

// for (let friend of friends) {
//   console.log(friend);
// }

// const apples = [1, 43, 3, 5, 11, 65, 33, 9,10,15]
// let total = 0;
// for (let i = 0; i < apples.length; i += 1) {
//   total += apples[i];
// }
// console.log(total);



// let total=0;
// for (let apple of apples) {
//   total+=apple;
// }
//   console.log(total);


// for (let i = 0; i < apples.length; i += 1){
//   apples[i] = Math.round(apples[i] * 3)
//   console.log(apples[i]);
// }


// const apples = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14]
// let total = 0;
// for (let apple of apples) {
//   if (apple % 2 === 0) {
//     console.log(`${apple}-четное`);
//     total += apple;
    
//   }
// }
// console.log(total);

// for (let i = 0; i < apples.length; i += 1) {
//   console.log(apples[i]);
//   if (apples[i] % 2 === 0) {
//     console.log('четное')
//   }
// }


// const logins = ['telek', 'admin', 'afrika', 'kanada', 'monkey']
// const logintofind = 'kanada';
// // let message = `${logintofind} логина нет`;

// // for (let login of logins) {
// //   if (login === logintofind) {
// //     message = `${logintofind} логин есть`;
// //   }
// // }
// // console.log (message)


// // console.log(logins.includes(logintofind));
// // const a = 15 > 10 ?'y':'n';
// // console.log(a)

// const a = logins.includes(logintofind)
//   ? `${logintofind} логин есть`
//   : `${logintofind} логина нет`;
// console.log(a)




// const numbers = [51, 18, 13, 24, 7, 85, 19];
// let smallnumber = numbers[0];

// for (const number of numbers) {

//   if (number > smallnumber) {
//     smallnumber = number;
//   }
// }
// console.log(smallnumber);






// const logins = ['telek', 'admin', 'afrika', 'kanada', 'monkey'];
// let string = '';

// for (const login of logins) {
//   string += login + ',';
// }
// console.log(string);



// const string = logins.join(' --- ')
// console.log(string)



// const name = 'JavaScript'
// const strings = name.split('');
// let invertedstring = '';

// console.log(strings)

// for (const string of strings) {

//   // if (string === string.toLowerCase()) {
//   //   console.log('эта буква в нижнем регистре! - ', string)
//   //   invertedstring += string.toUpperCase();
//   // } else {
//   //   console.log('эта буква в верхнем регистре! - ', string);
//   //   invertedstring += string.toLowerCase();
//   // }
//   const aloha = string === string.toLowerCase();
//   invertedstring += aloha ? string.toUpperCase() : string.toLowerCase();
// }

// console.log(invertedstring);




// ------------------------------------------------------------------методы работающие по ЦЕПОЧКЕ
// const title = 'Hello Guys , How Are You';
// console.log(title)

// const wrongtitle = title.toLowerCase().split(' ').join('---');
// console.log(wrongtitle)






// ---------------------------------------------------------------метод CONCAT
// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30];
// let total = 0;

// const numbers = array1.concat(array2);
// for (const number of numbers) {
//   total += number;
// }

// console.log(total);







// const fails = [
//   'карточка-1',
//   'карточка-2',
//   'карточка-3',
//   'карточка-4',
//   'карточка-5',
// ];

// // --------------------------------------------------------------удалить элемент из массива
// const failsRemove = 'карточка-3';
// const index = fails.indexOf(failsRemove);
// console.log(index)

// // --------------------------------------------- -метод SPLICE (деструктивный метод)обновляет данные
// fails.splice(1, 0,'hello',1,2,3,4,);
// console.table(fails)









// Код должен найти сумму элементов массива, однако, всегда выводит NaN:

// let arr = ['1', '2', '3', '4', '5'];
// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
// 	sum += +arr[i];
// }

// console.log(sum);






// Код должен найти сумму элементов массива:

// let arr = ['1', '2', '3', '4', '5'];
// let sum = 0;

// for (let i = 0; i < arr.length; i+=1) {
// 	sum += +arr[i];
// }

// console.log(sum);





// Код должен найти сумму элементов массива:

// let arr = ['1', '2', '3', '4', '5'];
// let sum = 0;

// for (let i = 0; i < arr.length; i+=1) {
// 	sum += +arr[i];
// }

// console.log(sum); // почему-то выводит не 15




// Код должен возвести в квадрат каждый элемент массива:

// let arr = [1, 2, 3, 4, 5];

// for (let elem of arr) {
//   elem = elem ** 2;
//   console.log(elem);
// }






// Код должен заполнить массив числами от 1 до 5:

// let arr=[];

// for (let i = 1; i <= 5; i+=1) {
// 	arr.push(i);
// }

// console.log(arr);



// const calculateEngravingPrice = function (items) {
//   console.log(items);

//   let total = 0;

//   for (const item of items) {
//     total += item;
//   }
//   return total;
// }


// console.log(calculateEngravingPrice([1,2,3]));
// console.log(calculateEngravingPrice([5,10,15,20]));
// console.log(calculateEngravingPrice([100,200,300]));

// const logitems = function (items) {
//   for (const item of items) {
//     console.log(item);
//   }
// }

// logitems(['mango','kiwi','poly','ajax']);
// logitems([1,2,3,4,5]);
// logitems(['клавиатура','наушники','часы']);







// const logins = ['wikikwiki', 'avacode3r', 'jordi', 'potyal']


// const fn = function (allLogins, logintofind) {

//   for (const login of allLogins) {
//     if (login === logintofind) {
//       return `пользователь ${logintofind} найден`;
//     }
//   }

//   return `пользователь ${logintofind} не найден`;
// }

// console.log(fn(logins, 'lola'));
// console.log(fn(logins, 'avacode3r'));
// console.log(fn(logins, 'genui'));
// console.log(fn(logins, 'potyal'));








// ------------------------------------------------------------------------- ТЕРНАРНЫЙ ОПЕРАТОР (да/нет)
// const logins = ['wikikwiki', 'avacode3r', 'jordi', 'potyal']

// const fn = function (allLogins, logintofind) {
//   return allLogins.includes(logintofind)
//     ? `пользователь ${logintofind} найден`
//     : `пользователь ${logintofind} не найден`;
// }

// console.log(fn(logins, 'lola'));
// console.log(fn(logins, 'avacode3r'));
// console.log(fn(logins, 'genui'));
// console.log(fn(logins, 'potyal'));





// --------------------------------------------------------------ПОИСК САМОГО МАЛЕНЬКОГО ЧИСЛА ЧЕРЕЗ ФУНКЦИЮ
// const findtosmallestnumber = function (numbers) {
//   let smallestnumber = numbers[0];

//   for (const number of numbers) {
//     if (number < smallestnumber) {
//       smallestnumber = number;
//     }
//   }
//   return smallestnumber;
// }

// console.log(findtosmallestnumber([76,25,33]));
// console.log(findtosmallestnumber([3,5,1]));
// console.log(findtosmallestnumber([-2,5,76]))








// -----------------------------------------------------------------------------ЗАМЕНА РЕГИСТРА В КАЖДОМ ЭЛЕМЕНТЕ СТРОКИ НА ПРОТИВОПОЛОЖНЫЙ(с нижнего в верхний и наоборот) ЧЕРЕЗ ФУНКЦИЮ

// const changeCase = function (string) {
//   const letters = string.split('');
//   let invertedstring = '';

//   for (const letter of letters) {
//     const isinlowercase = letter === letter.toLowerCase();

//     invertedstring += isinlowercase ? letter.toUpperCase() : letter.toLowerCase();
//   }
//   return invertedstring;
// }


// console.log(changeCase('QWEDFGDFGDFGDFGdqwe'));
// console.log(changeCase('dfgdfgdfgdfgdfgadQWfr'));
// console.log(changeCase('dfgdfgdfgwerweerrasdGeTGFF'));








// --------------------------------------------------------------------ВОЗВРАЩАЕМ ВСЮ СТРОКУ В МАЛЕНЬКОМ РЕГИСТРЕ И ПРОБЕЛЫ ЗАМЕНЯЮТСЯ НА ТИРЕ (2 СПОСОБА)

// const lowercase = function (string) {
//   // const normalizedtitle = string.toLowerCase();
//   // const word = normalizedtitle.split(' ');
//   // const slug = word.join('-');


//   // return slug


//   return string.toLowerCase().split(' ').join('-')
// }


// console.log(lowercase('Hello Guys How Are You'));
// console.log(lowercase('Lets Go To The Outside'));
// console.log(lowercase('My Home Is Very Big'));








// -------------------------------------------------------------ПСЕВДОМАССИВ В МАССИВ ЧЕРЕЗ Array.from
// const fn = function () {
//   console.log(arguments);

//   const args = Array.from(arguments);

//   console.log(args);
// }


// fn(1, 2, 3);
// fn(2, 3, 5, 6, 3, 4);
// fn(3, 5, 1, 2, 3, 5, 6, 67, 4, 3, 45);






// -------------------------------------------------------------ПСЕВДОМАССИВ В МАССИВ ЧЕРЕЗ ... REST (ставится в самом конце параметров-сначало какие аргументы хочешь отдельно, потом все остальные в массив) (БОЛЕЕ СОВРЕМЕННЫЙ СПОСОБ) (в параметры можно записывать любое слово)

// const fn = function (a, ...Leha) {
//   console.log(`${a}`);
//   console.log(Leha);
// }


// fn('hello',1, 2, 3);
// fn('aloha',2, 3, 5, 6, 3, 4);
// fn('bonjur',3, 5, 1, 2, 3, 5, 6, 67, 4, 3, 45);



// ---------------------------------------------------------------ЗАДАЧИ НА ПСЕВДОМАССИВ ...

// const fn = function (...leha) {
//   console.log(leha);
//   let total = 0;

//   for (const leh of leha) {
//     total += leh;
//   }
//   return total
// }


// console.log(fn(1, 2, 3));
// console.log(fn(2, 3, 5, 6, 3, 4));
// console.log(fn(3, 5, 1, 2, 3, 5, 6, 67, 4, 3, 45));






// ---------------------------------------------------------------ЗАДАЧИ НА ПСЕВДОМАССИВ ...

//  * Напиши функцию filterNumbers(array [, number1, ...]) которая:
//  * - первым аргументом принимает массив чисел
//  * - после первого аргумента может быть произвольное количество других аргументов которые будут числами.
//  * - Функция должна вернуть новый массив, в котором будут только те аргументы, начиная со второго,
//  *   для которых есть аналог в оригинальном массиве.
//  */

// const filterNumbers = function (array, ...args) {
//   console.log('array: ', array);
//   console.log('args: ', args);
//   const uniqueElements = [];

//   for (const element of array) {
//     if (args.includes(element)) {
//       uniqueElements.push(element);

//       console.log(`${element} есть везде!`);
//     }
//   }

//   return uniqueElements;
// };

// console.log(filterNumbers([1, 2, 3, 4, 5], 10, 15, 2, 3, 8)); // [2, 3]
// console.log(filterNumbers([10, 15, 25, 30], 23, 30, 18, 15)); // [30, 15]
// console.log(filterNumbers([100, 200, 300, 400, 500], 7, 12, 200, 64)); // [200]





// -----------------------------------------------------------------------------------------ЗАДАЧА НА ФУНКЦИИ ВЛОЖЕННЫЕ В ДРУГИЕ ФУНКЦИИ

// // Есть массив logins с логинами пользователей. Напиши скрипт добавления логина в массив logins. Добавляемый логин должен:

// // проходить проверку на длину от 4 до 16-ти символов включительно
// // быть уникален, то есть отсутствовать в массиве logins
// // Разбей задачу на подзадачи с помощью функций.

// // Напиши функцию isLoginValid(login), в которой проверь количество символов параметра login и верни true или false в зависимости от того, попадает ли длина параметра в заданный диапазон от 4-х до 16-ти символов включительно.

// // Напиши функцию isLoginUnique(allLogins, login), которая принимает список всех логинов и добавляемый логин как параметры и проверяет наличие login в массиве allLogins, возвращая true если такого логина еще нет и false если логин уже используется.

// // Напиши функцию addLogin(allLogins, login) которая:

// // Принимает новый логин и массив всех логинов как параметры

// // Проверяет валидность логина используя вспомогательную функцию isLoginValid

// // Если логин не валиден, прекратить исполнение функции addLogin и вернуть строку 'Ошибка! Логин должен быть от 4 до 16 символов'

// // Если логин валиден, функция addLogin проверяеть уникальность логина с помощью функции isLoginUnique
// // Если isLoginUnique вернет false, тогда addLogin не добавляет логин в массив и возвращает строку 'Такой логин уже используется!'
// // Если isLoginUnique вернет true, addLogin добавляет новый логин в logins и возвращает строку 'Логин успешно добавлен!'
// // 🔔 Принцип единственной ответственности функции - каждая функция делает что-то одно. Это позволяет переиспользовать код и изменять логику работы функции только в одном месте, не затрагивая работу программы в целом.

// // Предикатные функции возвращают только true или false. Такие функции принято называть начиная с is: isLoginUnique и isLoginValid в нашем случае.

// // isLoginUnique только проверяет есть ли такой логин в массиве и возвращает true или false.
// // isLoginValid только проверяет валидный ли логин и возвращает true или false.
// // addLogin добавляет или не добавляет логин в массив.При этом для проверок условия добавления использует результаты вызовов других функций - isLoginUnique и isLoginValid.




// const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];
// let message = '';

// const isLoginValid = function(login, min=4, max=16) {
//   // твой код
//   return login.length <= max && login.length >= min ? true : false;
// };
// // console.log(isLoginValid('kiwi'));


// const isLoginUnique = function(allLogins, login) {
//   // твой код
//   return !allLogins.includes(login);

  
//   // if (result === true) {
//   //   return false;
//   // } return true
// };
// // console.log(isLoginUnique(['polo','kesha','krol'],'kiwi'));



// const addLogin = function (allLogins, login) {
  
//   if (isLoginValid(login)) {
//     if (isLoginUnique(allLogins, login)) {
//       allLogins.push(login);
//       return (message = 'Логин успешно добавлен!');
//     } return (message = 'Такой логин уже используется!');
//   } return message = ('Ошибка! Логин должен быть от 4 до 16 символов');
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(addLogin(logins, 'Ajax')); // 'Логин успешно добавлен!'
// console.log(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
// console.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
// console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'

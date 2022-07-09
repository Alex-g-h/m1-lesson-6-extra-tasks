import { getDiscount } from './discount.js';

// initialization
let clientName = prompt('Введите имя клиента')?.trim();
let clientSpentForAllTime = prompt('Сколько клиент потратил за все время?');
let clientSpentToday = prompt('Сколько клиент потратил сегодня?');

const errorMessage = 'Сумма, которую клиент потратил за все время и \
которую потратил сегодня, должна быть числом! Перезагрузи страницу, \
чтобы повторить попытку.';

let isDataCorrect = true;

// check for 'null' values in input ('Cancel' button in modal window)
clientSpentForAllTime ?? (isDataCorrect &&= false);
clientSpentToday ?? (isDataCorrect &&= false);

// convert inputed values to number
clientSpentForAllTime = Number(clientSpentForAllTime);
clientSpentToday = Number(clientSpentToday);

// check for 'NaN' values in input numbers (string intead of number)
isDataCorrect &&= !Number.isNaN(clientSpentForAllTime);
isDataCorrect &&= !Number.isNaN(clientSpentToday);

if (isDataCorrect) {
  let discount = getDiscount(clientSpentForAllTime);
}
else {
  alert(errorMessage);
}

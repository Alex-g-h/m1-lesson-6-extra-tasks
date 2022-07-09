import { getDiscount } from './discount.js';

// initialization
let clientName = 'Игорь';
let clientSpentForAllTime = 110;

let clientSpentToday = 25;
let discount = 0;

discount = getDiscount(clientSpentForAllTime);

clientSpentToday *= (1 - discount / 100);
clientSpentForAllTime += clientSpentToday;

alert(`Спасибо, ${clientName}! К оплате ${clientSpentToday}$. \
За все время в нашем ресторане вы потратили ${clientSpentForAllTime}$.`);


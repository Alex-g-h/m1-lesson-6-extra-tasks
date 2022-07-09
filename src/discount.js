const discountLevel1From = 100;
const discountLevel1To = 300;
const discountLevel2To = 500;

/**
 * Get discount value according overall payment by client
 * @param {*} overallSum Overall payment sum by the client
 * @returns Discount value in % 
 */
export function getDiscount(overallSum) {
  let discountTmp = 0;
  if (discountLevel1From <= overallSum && overallSum < discountLevel1To)
    discountTmp = 10;
  else if (discountLevel1To <= overallSum && overallSum < discountLevel2To)
    discountTmp = 20;
  else if (discountLevel2To <= overallSum)
    discountTmp = 30;

  alert(`Вам предоставляется скидка в ${discountTmp}%!`);
  return discountTmp;
}
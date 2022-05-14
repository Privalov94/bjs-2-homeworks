'user strict'

function solveEquation(a, b, c) {
  let arr = [];
  if (a === 0) {
    arr[0] = -c / b;
    return arr;
  }
  let discriminant = Math.pow(b, 2) - 4 * a * c;
  if (discriminant > 0) {
    arr[0] = parseInt((( -b + Math.sqrt(discriminant)) / (2 * a)).toFixed(0));
    arr[1] = parseInt((( -b - Math.sqrt(discriminant)) / (2 * a)).toFixed(0));
  } else if (discriminant === 0) {
    arr[0] = -b / (2 * a);
  }
  return arr; // array
}


function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
  let interestRate = Number(percent);
  let initialPayment = Number(contribution);
  let totalCost = Number(amount);

  if (interestRate === Number(interestRate)) {
      totalAmount = `Параметр "Процентная ставка" содержит неправильное значения ${percent}`;
    return totalAmount
  } else if (initialPayment === Number(initialPayment)) {
      totalAmount = `Параметр "Начальный взнос"  содержит неправильное значения ${contribution}`;
    return totalAmount
  } else if (totalCost === Number(totalCost)) {
       totalAmount = `Параметр "Общая стоимость" содержит неправильное значения ${amount}`;
     return totalAmount  
  } 

  return totalAmount;
}
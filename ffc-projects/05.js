/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/cash-register

Cash Register
Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), 
payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.
cid is a 2D array listing available currency.
The checkCashRegister() function should always return an object with a status key and a change key.
Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.
Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.
Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value 
of the change key.

Currency Unit	Amount
Penny	$0.01 (PENNY)
Nickel	$0.05 (NICKEL)
Dime	$0.1 (DIME)
Quarter	$0.25 (QUARTER)
Dollar	$1 (ONE)
Five Dollars	$5 (FIVE)
Ten Dollars	$10 (TEN)
Twenty Dollars	$20 (TWENTY)
One-hundred Dollars	$100 (ONE HUNDRED)
See below for an example of a cash-in-drawer array:

[
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]
*/
const checkCashRegister = (price, cash, cid) => {
  //currency denomination
  const denomination = {
    PENNY: 0.01,
    NICKEL: 0.05,
    DIME: 0.1,
    QUARTER: 0.25,
    ONE: 1.0,
    FIVE: 5.0,
    TEN: 10.0,
    TWENTY: 20.0,
    "ONE HUNDRED": 100.0,
  };

  //calculate total amount of cashInDrawer
  let registerTotal = 0;
  for (let i = 0; i < cid.length; i++) {
    registerTotal += cid[i][1];
  }
  registerTotal = registerTotal.toFixed(2);

  //calculate change to be returned
  let returnChange = cash - price;

  if (returnChange > registerTotal)
    return { status: "INSUFFICIENT_FUNDS", change: [] }; //if the change exceeds the amount  of money to be returned
  if (returnChange.toFixed(2) === registerTotal)
    return { status: "CLOSED", change: cid }; //if the change matches the amount of money in the cash register

  //declare an empty array which will store cashInDrawer after the change has been returned
  const changeArray = [];
  cid = cid.reverse();
  for (let i = 0; i < cid.length; i++) {
    //iterate through cid array
    let temp = [cid[i][0], 0]; //temporary array with denominations and their values set to 0
    let amount = cid[i][1]; //amount of money for current denomination

    while (returnChange >= denomination[cid[i][0]] && amount > 0) {
      //while change is greater than amount of money for that denomination and its value is grater than 0
      returnChange -= denomination[cid[i][0]];
      amount -= denomination[cid[i][0]];
      temp[1] += denomination[cid[i][0]];
      returnChange = returnChange.toFixed(2);
    }
    if (temp[1] > 0) changeArray.push(temp);
  }

  if (returnChange > 0) return { status: "INSUFFICIENT_FUNDS", change: [] };
  return { status: "OPEN", change: changeArray };
};

const result = checkCashRegister(3.26, 100, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
]);
console.log(result);

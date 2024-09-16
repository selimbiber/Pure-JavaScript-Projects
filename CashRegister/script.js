let price = 19.5; // Example price
let cid = [
  ["PENNY", 0.5],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 0],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0],
];
const PURCHASE_BTN = document.getElementById("purchase-btn");

PURCHASE_BTN.addEventListener("click", () => {
  const cash = Number(document.getElementById("cash").value);
  const changeDueEl = document.getElementById("change-due");
  const changeDue = cash - price;

  const getTotalCid = () => cid.reduce((acc, [_, amount]) => acc + amount, 0);

  const formatChange = (changeArr, status) => {
    if (status === "CLOSED") {
      return `Status: CLOSED${changeArr
        .map(([name, amount]) => ` ${name}: $${amount.toFixed(2)}`)
        .join("")}`;
    }
    return `Status: OPEN${changeArr
      .map(([name, amount]) => ` ${name}: $${amount.toFixed(2)}`)
      .join("")}`;
  };

  const getChange = (change) => {
    if (cash < price) {
      alert("Customer does not have enough money to purchase the item");
      changeDueEl.className = "hidden";
      return;
    }
    if (cash === price) {
      changeDueEl.textContent = "No change due - customer paid with exact cash";
      showChangeDueEl();
      return;
    }

    const totalCid = getTotalCid();
    if (change > totalCid) {
      changeDueEl.textContent = "Status: INSUFFICIENT_FUNDS";
      showChangeDueEl();
      return;
    }

    let changeArr = [];
    const denominations = [
      ["ONE HUNDRED", 100],
      ["TWENTY", 20],
      ["TEN", 10],
      ["FIVE", 5],
      ["ONE", 1],
      ["QUARTER", 0.25],
      ["DIME", 0.1],
      ["NICKEL", 0.05],
      ["PENNY", 0.01],
    ];

    let cidCopy = cid.map(([name, amount]) => [name, amount]);

    for (let [name, value] of denominations) {
      let coinTotal = 0;
      while (change >= value && cidCopy.find(([n]) => n === name)[1] > 0) {
        change -= value;
        change = Math.round(change * 100) / 100;
        cidCopy.find(([n]) => n === name)[1] -= value;
        coinTotal += value;
      }
      if (coinTotal > 0) {
        changeArr.push([name, coinTotal]);
      }
    }

    if (change > 0) {
      changeDueEl.textContent = "Status: INSUFFICIENT_FUNDS";
      showChangeDueEl();
    } else {
      const totalChangeGiven = changeArr.reduce((acc, [, amount]) => acc + amount, 0);
      const status =
        Math.round(totalCid * 100) / 100 === Math.round(totalChangeGiven * 100) / 100
          ? "CLOSED"
          : "OPEN";
      changeDueEl.textContent = formatChange(changeArr, status);
      showChangeDueEl();
    }
  };

  const showChangeDueEl = () => changeDueEl.removeAttribute("class");

  getChange(changeDue);
});

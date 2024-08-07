function toRoman(num) {
  const romanNumerals = [
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"],
  ];

  let result = "";

  for (const [value, symbol] of romanNumerals) {
    while (num >= value) {
      result += symbol;
      num -= value;
    }
  }

  return result;
}

const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputVal = parseInt(document.getElementById("number").value, 10);
  const outputEl = document.getElementById("output");

  if (isNaN(inputVal)) {
    outputEl.textContent = "Please enter a valid number";
    return;
  }

  if (inputVal < 1) {
    outputEl.textContent = "Please enter a number greater than or equal to 1";
    return;
  }

  if (inputVal > 3999) {
    outputEl.textContent = "Please enter a number less than or equal to 3999";
    return;
  }

  outputEl.textContent = toRoman(inputVal);
  form.reset();
});

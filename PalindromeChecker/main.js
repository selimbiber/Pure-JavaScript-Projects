const form = document.getElementById("form");

function checkPalindrome(str) {
  const cleanStr = str.toLowerCase().replace(/[\W_]/g, "");
  const reversedStr = cleanStr.split("").reverse().join("");
  return cleanStr === reversedStr;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const resultEl = document.getElementById("result");
  const inputValue = form.querySelector("#text-input").value;
  let resultInfo = checkPalindrome(inputValue)
    ? "is a palindrome"
    : "is not a palindrome";

  if (inputValue === "") {
    return alert("Please input a value");
  }

  document.getElementById("input-value").textContent = inputValue;
  document.getElementById("result-info").textContent = resultInfo;

  resultEl.ariaHidden = false;

  form.reset();

  setTimeout(() => {
    resultEl.ariaHidden = true;
  }, 3000);
});

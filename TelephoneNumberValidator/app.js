document.addEventListener("DOMContentLoaded", function () {
  const checkBtn = document.getElementById("check-btn");
  const clearBtn = document.getElementById("clear-btn");
  const userInput = document.getElementById("user-input");
  const resultsList = document.querySelector(".results-list");

  checkBtn.addEventListener("click", function () {
    const inputValue = userInput.value.trim();

    if (!inputValue) {
      alert("Please provide a phone number");
      return;
    }

    userInput.value = "";
    resultsList.classList.remove("hidden");

    const validNumber = validatePhoneNumber(inputValue);

    validNumber
      ? (resultsList.innerHTML += `<li>Valid US number: ${inputValue}</li>`)
      : (resultsList.innerHTML += `<li>Invalid US number: ${inputValue}</li>`);
  });

  clearBtn.addEventListener("click", function () {
    userInput.value = "";
    resultsList.innerHTML = "";
    resultsList.classList.add("hidden");
  });

  function validatePhoneNumber(phoneNumber) {
    const phoneRegex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s.-]?)\d{3}([\s.-]?)\d{4}$/;
    return phoneRegex.test(phoneNumber);
  }
});

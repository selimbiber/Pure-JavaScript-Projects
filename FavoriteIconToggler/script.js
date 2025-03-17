const favoriteIcons = document.querySelectorAll(".favorite-icon");

favoriteIcons.forEach((icon) => {
  icon.addEventListener("click", function () {
    this.classList.toggle("filled");

    this.innerHTML = this.classList.contains("filled")
      ? "&#10084;" // Filled heart
      : "&#9825;"; // Empty heart
  });
});

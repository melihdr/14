let letter_button = document.querySelector(".letter-button");
let first = document.querySelector(".first");

letter_button.addEventListener("click", () => {
  first.innerHTML =
    "<img style='width:100%; height:auto; margin-left: 15px; margin-right:15px;' src='opened_letter.png'/>";
});

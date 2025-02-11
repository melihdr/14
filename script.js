let after_part = document.querySelector(".after-part");
let letter_image = document.querySelector(".letter-image");
let message = document.querySelector(".message");

letter_button = document
  .querySelector(".letter-button")
  .addEventListener("click", () => {
    console.log("11");
    after_part.innerHTML =
      "          <img style='width:60vw; min-width: 500px; max-width:500px;' class='opened_letter' src='opened_letter.jpg' alt='opened letter' />";

    letter_image.innerHTML = "";
    message.innerHTML = "";
  });

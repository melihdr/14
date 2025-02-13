let letter_button = document.querySelector(".letter-button");
let first = document.querySelector(".first");
let hiddenImages = document.querySelectorAll(".hidden");
let down_part = document.querySelector(".down");
let play_button = document.querySelector(".play_button");
let record_image_div = document.querySelector(".record_image_div");

letter_button.addEventListener("click", () => {
  first.innerHTML =
    "<img style='width:100%; height:auto; margin-left: 15px; margin-right:15px;' src='opened_letter.png'/>";
  hiddenImages.forEach((image) => {
    image.style.visibility = "visible";

    down_part.style.visibility = "visible";
  });
});

play_button.addEventListener("click", () => {
  record_image_div.innerHTML =
    "<img style='margin: 0; width:109px' src='record.gif' alt='record gif'/>";
  let audio = document.getElementById("audio");
  audio.play();
});

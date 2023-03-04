// Script for Business form
let closeModal = () => {
    document.getElementById("modal").className = document
      .getElementById("modal")
      .className.replace("openModal");
  };
  
const scriptURL1 =
  "https://script.google.com/macros/s/AKfycbyo1NDly8hlczA4oUjYY_xCdeqH5aiieMQARN7rVuK39UQegR_B8m00cIOvyx3MV01P/exec";
const form1 = document.forms["google-sheet1"];

form1.addEventListener("submit", (e) => {
  e.preventDefault();
  document.getElementById("spinner").style.display = "flex";
  fetch(scriptURL1, { method: "POST", body: new FormData(form1) })
    .then((response) => response2())
    .catch((error) => error2());
});

const response2 = () => {
  form1.reset();
  document.getElementById("spinner").style.display = "none";
  document.getElementById('modalText').innerText = "Your form is submitted."
  document.getElementById("modal").className += " openModal";
  setTimeout(closeModal, 1900);
};

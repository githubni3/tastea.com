// Script for corporate form
let closeModal = () => {
    document.getElementById("modal").className = document
      .getElementById("modal")
      .className.replace("openModal");
  };
  
const scriptURL1 =
  "https://script.google.com/macros/s/AKfycbyPFlpZ4vL3JFni3C8bdwsOvcq-HSIiRDE__aAb95RpdQhONIVpIMT0FiHReQPBPmkX/exec";
const form1 = document.forms["google-sheet1"];

form1.addEventListener("submit", (e) => {
  e.preventDefault();
  document.getElementById("spinner").style.display = "flex";
  fetch(scriptURL1, { method: "POST", body: new FormData(form1) })
    .then((response) => response1())
    .catch((error) => error2());
});

const response1 = () => {
  form1.reset();
  document.getElementById("spinner").style.display = "none";
  document.getElementById('modalText').innerText = "Your form is submitted."
  document.getElementById("modal").className += " openModal";
  setTimeout(closeModal, 1900);
};
const error2 = () => {
  form2.reset();
  document.getElementById("spinner").style.display = "none";
  document.getElementById('modalText').innerText = "Some error occurred."
  document.getElementById("modal").className += " openModal";
  setTimeout(closeModal, 1900);
};


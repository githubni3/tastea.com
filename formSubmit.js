const scriptURL =
  "https://script.google.com/macros/s/AKfycbziPqFmJMEz79OXONu6x76Ac02KmqBCKJmZ2P438DVqRKIjFiqMq3LUiv3vR_TU6WLa/exec";
const form = document.forms["google-sheet"];

form.addEventListener("submit", (e) => {
  console.log("2")
  e.preventDefault();
  document.getElementById("spinner").style.display = "flex";
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => response_())
    .catch((error) => error_());

  const emailID = document.getElementById("email");
  emailID.value = "";
});

const response_ = () => {
  document.getElementById("mailbox").className += " responsed";
  document.getElementById("mailbox").innerHTML =
    "We have received your response. thanks for contacting us.";
  document.getElementById("spinner").style.display = "none";
};
const error_ = () => {
  document.getElementById("mailbox").className += " responsed";
  document.getElementById("mailbox").innerHTML = "Some error occured";
  document.getElementById("spinner").style.display = "none";
};


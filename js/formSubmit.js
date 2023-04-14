const scriptURL =
  "https://script.google.com/macros/s/AKfycbxCRtSjqr3_BMND6FoO7W_yuPRzapScajBvsMAiq1cleMg1B6JQ5IDj4JfnKqkQVPXSdA/exec";
const form = document.forms["google-sheet"];

form.addEventListener("submit", (e) => {
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
    `We have received your response.
    Thanks for contacting us.
    `;
  document.getElementById("spinner").style.display = "none";
};
const error_ = () => {
  document.getElementById("mailbox").className += " responsed";
  document.getElementById("mailbox").innerHTML = "Some error occured";
  document.getElementById("spinner").style.display = "none";
};


/////Search form

const submitForm = () =>{
  const text = document.getElementById('navbar_search').value;
  localStorage.setItem("QUERY",text);

}

document.getElementById("search_form").addEventListener("submit", submitForm);
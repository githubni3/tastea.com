// Script for Business form

const errorMsg = document.getElementsByClassName('errorMsg');
const inputField = document.getElementsByClassName('inputField');

let validEntry = true;
let InvalidEntryInput = 0;

const invalidEntry = (n) =>{
  if(InvalidEntryInput !== 0){
    InvalidEntryInput = n;
  }
}

const mandatory = (n) =>{
  errorMsg[n].innerHTML = 'Required fields are mandatory';
  inputField[n].style.borderColor = 'red';
  validEntry = false;
  invalidEntry(n);
}
const resetStyle = (n) =>{
    errorMsg[n].innerHTML = '';
    inputField[n].style.borderColor = '#ccc';
  
}

const validation = () => {
  for (let i = 0; i < errorMsg.length; i++) {
    const element = errorMsg[i];
    element.innerHTML === '';
  }

  let pname = document.getElementById("pname");
  if(pname.value.trim() === ''){
    mandatory(0);
  }
  else if(!(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g.test(pname.value.trim()))){
    errorMsg[0].innerHTML = 'Invalid name';
    inputField[0].style.borderColor = 'red';
    validEntry = false;
    invalidEntry(0);
}
  else{
    resetStyle(0);
  }

  let pnumber = document.getElementById('pnumber');
  if(pnumber.value.trim() === ''){
    mandatory(1);
  }
  else if(!(/^(\d{3})?(\d{3})?(\d{4})$/.test(pnumber.value.trim()))){
    errorMsg[1].innerHTML = 'Invalid number';
    inputField[1].style.borderColor = 'red';
    validEntry = false;
    invalidEntry(1);
  }
  else{
    resetStyle(1); 
  }

  let emailid = document.getElementById('emailid');
  if(emailid.value.trim() === ''){
    mandatory(2);
  }
  else if(!(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(emailid.value.trim()))){
    errorMsg[2].innerHTML = 'Invalid email';
    inputField[2].style.borderColor = 'red';
    validEntry = false;
    invalidEntry(2);
  }
  else{
    resetStyle(2);
    
  }

  let address = document.getElementById('address');
  if(address.value.trim() === ''){
    mandatory(3);
  }
  else{
    resetStyle(3);
  }
  
  let city = document.getElementById('city');
  if(city.value.trim() === ''){
    mandatory(4);
  }
  else{
    resetStyle(4);
  }
  
  let state = document.getElementById('state');
  if(state.value.trim() === ''){
    mandatory(5);
  }
  else{
    resetStyle(5);
  }
  let pcode = document.getElementById('pcode');
  if(pcode.value.trim() === ''){
    mandatory(6);
  }
  else if(pcode.value.trim()[0]==='0' || pcode.value.trim().length>6){
    errorMsg[6].innerHTML = 'Invalid Pincode';
    inputField[6].style.borderColor = 'red';
    validEntry = false;
    invalidEntry(6);
  }
  else{
    resetStyle(6);
  }

  let companyname = document.getElementById('companyname');
  if(companyname.value.trim() === ''){
    mandatory(7);
  }
  else{
    resetStyle(7);
  }

  let sales1 = document.getElementById('sales1');
  if(sales1.value.trim() === ''){
    mandatory(9);
  }
  else{
    resetStyle(9);
  }

  let sales2 = document.getElementById('sales2');
  if(sales2.value.trim() === ''){
    mandatory(10);
  }
  else{
    resetStyle(10);
  }
  return validEntry;
}

let closeModal = () => {
    document.getElementById("modal").className = document
      .getElementById("modal")
      .className.replace("openModal");
  };
  
const scriptURL1 =
  "https://script.google.com/macros/s/AKfycbwB73oXqjC9tSYHjLwPnTF4BL5cu3ebFx0rwUuQpdTTEVERbyGZyz--zNr6TqjbWe4/exec";
const form1 = document.forms["google-sheet1"];

form1.addEventListener("submit", (e) => {
  e.preventDefault();
  if(validation()){
    document.getElementById("spinner").style.display = "flex";
    fetch(scriptURL1, { method: "POST", body: new FormData(form1) })
      .then((response) => response2())
      .catch((error) => error2());
  }
  else{
    inputField[InvalidEntryInput].scrollIntoView();
    validEntry = true;
  }
});
const resetField = () => {
  for (let i = 0; i < inputField.length; i++) {
    const element = inputField[i];
    element.style.borderColor = '#ccc'
  }
  for (let i = 0; i < errorMsg.length; i++) {
    const element = errorMsg[i];
    element.innerHTML = '';
  }
}
const response2 = () => {
  form1.reset();
  resetField();
  document.getElementById("spinner").style.display = "none";
  document.getElementById('modalText').innerText = "Your form is submitted."
  document.getElementById("modal").className += " openModal";
  setTimeout(closeModal, 2000);
};

const error2 = () => {
  form2.reset();
  resetField();
  document.getElementById("spinner").style.display = "none";
  document.getElementById('modalText').innerText = "Some error occurred."
  document.getElementById("modal").className += " openModal";
  setTimeout(closeModal, 2000);
};


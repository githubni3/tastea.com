const scriptURL = 'https://script.google.com/macros/s/AKfycbziPqFmJMEz79OXONu6x76Ac02KmqBCKJmZ2P438DVqRKIjFiqMq3LUiv3vR_TU6WLa/exec'
const form = document.forms['google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  document.getElementById('spinner').style.display='flex';
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => response_())
    .catch(error => error_())    

    const emailID = document.getElementById('email')
  emailID.value = "";
    
})

const response_ = () =>{
  document.getElementById('mailbox').className += ' responsed'
  document.getElementById('mailbox').innerHTML = 'We have received your response. thanks for contacting us.';
  document.getElementById('spinner').style.display = 'none';
  
}
const error_ = () =>{
  document.getElementById('mailbox').className += ' responsed'
  document.getElementById('mailbox').innerHTML = 'Some error occured';
  document.getElementById('spinner').style.display = 'none';
  
}


// Script for corporate form
const scriptURL1 = 'https://script.google.com/macros/s/AKfycbyPFlpZ4vL3JFni3C8bdwsOvcq-HSIiRDE__aAb95RpdQhONIVpIMT0FiHReQPBPmkX/exec'
const form1 = document.forms['google-sheet1']

form1.addEventListener('submit', e => {
  e.preventDefault()
  document.getElementById('spinner').style.display='flex';
  fetch(scriptURL1, { method: 'POST', body: new FormData(form1)})
    .then(response => response1())
    .catch(error => error2())    
    
})

const response1 = () =>{
  form1.reset();
  document.getElementById('spinner').style.display = 'none';
}
const error2 = () =>{
  form2.reset();
  document.getElementById('spinner').style.display = 'none';
  alert("Some error ocurred");
}

// Script for Business form
const scriptURL2 = 'https://script.google.com/macros/s/AKfycbxA_ZNSU8cDE_Tch4UoAFu430xMqNPjL5MuQCUmOCv17L6HaF-kfmdAlfqj98fylvX85Q/exec'
const form2 = document.forms['google-sheet2']

form2.addEventListener('submit', e => {
  e.preventDefault()
  document.getElementById('spinner').style.display='flex';
  fetch(scriptURL2, { method: 'POST', body: new FormData(form2)})
    .then(response => response2())
    .catch(error => error2())    
    
})

const response2 = () =>{
  form2.reset();
  document.getElementById('spinner').style.display = 'none';
}


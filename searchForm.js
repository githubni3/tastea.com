const submitForm = () =>{
    const text = document.getElementById('navbar_search').value;
    localStorage.setItem("QUERY",text);

}

document.getElementById("search_form").addEventListener("submit", submitForm);
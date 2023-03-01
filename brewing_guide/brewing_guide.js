const text = 'Important Precautions';
let i = 0;
const typer=()=>{
 if (i<text.length+15) {
    document.getElementsByClassName('precaution_head')[0].innerHTML += text.charAt(i);
    i++;    
 }
 else{
    i=0;
    document.getElementsByClassName('precaution_head')[0].innerHTML= "";
 }
 setTimeout(typer,100);
}
typer();

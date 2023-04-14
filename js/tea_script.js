function showMore(n) {
    readMore = document.getElementsByClassName("readMore");
    const btn = event.target;
    
    if (getComputedStyle(readMore[n]).display === "none") {
      readMore[n].style.display = "block";
      btn.innerHTML = "Read Less";
    }
    else if(getComputedStyle(readMore[n]).display === "block"){
      readMore[n].style.display = "none";
      btn.innerHTML = "Read More";
    }

  }

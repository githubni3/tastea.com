
const renderCard = (post,author) =>{
  let fullNamePart = author.split("_");
  let authorName = "";
    fullNamePart.forEach(ele => {
      authorName = authorName + " " + ele[0].toUpperCase() + ele.slice(1);
    });
  $(".blog_container").append(`
              <div id="blog">
              <h2 id="blogTitle">${post.title.rendered}</h2>
              <div id="blogDetails" class="blog-details">
                  <span id="blog_date">${post.date.slice(0,10)}</span>
                  <span id="blog_date">, ${authorName}</span>
              </div>
                <hr class="blog_hr">
                <p id="blogContent">${post.content.rendered}</p>
                
                <hr class="blog_hr">
            </div>
      `)
}

$.ajax({
  method: 'GET',
  url: `https://tasteablogs.000webhostapp.com/wp-json/wp/v2/posts`,
  success: function (data) {
    for (let i = 0; i < data.length; i++) {
      const post = data[i];
      fetch(post._links.author[0].href).then(res=>res.json()).then( author => renderCard(post,author.slug));
    }
  }
})




//async function getGif() {
  //  let randomNum = Math.floor(Math.random() * result.data.data.length);
  //  const img = document.createElement("img");
   // const giphyResult = await axios.get("http://api.giphy.com/v1/gifs/search?q=&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym");
   // console.log(giphyResult.data.images0.original.url);
   // img.src = giphyResult.data.0.original.url;
  //  }

    async function getGif(input) {
        try {

            const giphyResult = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${input}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`);
            const img = document.createElement("img");
            const newGif = document.createElement("div");
            const container = document.getElementById("#container");

            if (giphyResult.data.length !== 0) {
            let randomNum = Math.floor(Math.random() * giphyResult.data.data.length);
            img.src = giphyResult.data[randomNum].images.original.url;

            container.append(newGif).append(img);
            }
        } catch (e) {
            alert("Gif not Found!");
          }
       }
    
        const form = document.querySelector('#searchform');
        const input = document.querySelector('#search');
        form.addEventListener("submit", function(e) {
            e.preventDefault();
            getGif(input.value);
            input.value = "";
        });
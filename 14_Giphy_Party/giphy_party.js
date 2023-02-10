    async function getGif(input) {
        try {

            const giphyResult = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${input}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`);
            const img = document.createElement("img");
            const newGif = document.createElement("div");
            const container = document.getElementById("container");

            if (giphyResult.data.data.length !== 0) {
            let randomNum = Math.floor(Math.random() * giphyResult.data.data.length);
            img.src = giphyResult.data.data[randomNum].images.original.url;

            newGif.append(img);
            container.append(newGif);
            }
        } catch (e) {
           alert("Gif not Found!");
          }
       }
    
        const form = document.querySelector("#searchform");
        const input = document.querySelector("#search");
        form.addEventListener("submit", function(e) {
            e.preventDefault();
            getGif(input.value);
            input.value = "";
            console.log(input.value);
        });

        const deleteButton = document.getElementById("deleteAll");

        deleteButton.addEventListener("click", function() {
            $("div").empty();
        
        });
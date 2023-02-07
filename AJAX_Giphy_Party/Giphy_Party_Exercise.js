
async function getGif() {
const giphyResult = await axios.get("http://api.giphy.com/v1/gifs/search?q=&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym");
console.log(giphyResult.data);
const img = document.querySelector("#gif");
img.src = giphyResult.data.message;
}

async function getSpecificGif(input) {
    try {
        const url = `http://api.giphy.com/v1/gifs/search?q=${input}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`;
        const giphyResult = await axios.get(url);
        const img = document.querySelector("#gif");
        img.src = giphyResult.data.message;
    } catch (e) {
        console.log(e);
        alert("Gif not Found!");
      }
    }

    const form = document.querySelector('#searchform');
    const input = document.querySelector('#search');
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        console.log("SUBMIT");
        getSpecificGif(input.value);
        input.value = "";
    });
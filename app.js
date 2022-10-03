const $gifArea = $("#gif-area");
const $searchInput = $("#search");

function createGif(res) {
    let numResults = res.data.length;
    if (numResults) {
        let randomIdx = Math.floor(Math.random() * numResults);
        let $newCol = $("<div", {class : "col-md-4 col-12 mb-4" });
        let $newGif = $("<img>", {
            src: res.data[randomIdx].images.original.url,
            class: "w-100"
        });
        $newCol.append($newGif);
        $gifArea.append($newCol);
    }
}

// THIS IS WHEN YOU CLEAR SEARCH BOX AND MAKE A AJAX CALL
$("form").on("submit", async function (evt) {
    evt.preventDefault();

    let searchTerm = $searchInput.val();
    $searchInput.val("");

    const response = await axios.get("http://api.giphy.com/v1/gifs/search", { 
        parms: {
            q:searchTerm,
            api_key:"ufoidsonveaodsnk"
        }
    });
    addGif(response.data);
});


//Remove the GIF

$("#remove").on("click", function() {
    $gifArea.empty();
});
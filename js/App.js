document.getElementById('btn').addEventListener('click', getGifs);

function getGifs(e) {
    const searchInput = document.querySelector('#wewe').value;
    console.log(searchInput);

    fetch(`https://api.giphy.com/v1/gifs/random?api_key=1BTenpRcS6M8JOhO94pPKsDfwtWRL5qd&tag=${searchInput.toLowerCase()}&rating=G`)
        .then(response => response.json())
        .then(images => {
            let searchResult = '';
            images.forEach(image => {
                searchResult = `<div>
                                <img src="${images.downsized_large.url}">
                                </div>`;
            });
            document.querySelector('.row').innerHTML = searchResult;
        })
        .catch(error => console.log(error));

    e.preventDefault();
}
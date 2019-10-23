document.getElementById('btn').addEventListener('click', getGifs);

function getGifs(e) {
    const searchInput = document.querySelector('#search').value;

    const xhr = new XMLHttpRequest();


    xhr.open('GET', `https://api.giphy.com/v1/gifs/search?api_key=1BTenpRcS6M8JOhO94pPKsDfwtWRL5qd&q=${searchInput}&limit=12&offset=0
    &rating=G&lang=en`, true);

    xhr.onload = function() {
        if (this.status === 200) {
            const response = JSON.parse(this.responseText);
            console.log(response);
            let searchResult = '';
            if (response.meta.msg === 'OK') {
                response.data.forEach(function(gif) {
                    searchResult += `<img src = 'https://media.giphy.com/media/${gif.id}/source.gif'>`
                });
            } else {
                searchResult = '<li>Something went Wrong...</li>'
            }
            document.querySelector('.card-deck').innerHTML = searchResult;
        }

    }
    xhr.send();

    e.preventDefault();
}
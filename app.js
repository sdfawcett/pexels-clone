//API key
var key = config.SECRET_API_KEY;

let pageNumber = 1;
var textValue = document.querySelector('#search-bar').value;
var showMoreButton = document.querySelector('#show-more-button');
var searchForm = document.querySelector('#search-form');
searchForm.addEventListener('submit', function(e) {
    e.preventDefault();

//AJAX Call
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        // Typical action to be performed when the document is ready:
        let content = JSON.parse(xhttp.responseText);
        let imageArray = content.photos;

        var container = document.querySelector('.container');

        for (var i = 0; i < imageArray.length; i++) {
            container.innerHTML = '';
            imageArray.forEach(function(photo) {
                var photoDiv = document.createElement('div');
                photoDiv.innerHTML = `
                    <img src=${photo.src.original}>
                `;
                container.appendChild(photoDiv);
            })
        }
        }
    };
    textValue = document.querySelector('#search-bar').value;
    xhttp.open("GET", `https://api.pexels.com/v1/search?query=${textValue}`, true);
    xhttp.setRequestHeader('Authorization', key)
    xhttp.send();
    })

    showMoreButton.addEventListener("click", (e) => {
        e.preventDefault();

        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
            // Typical action to be performed when the document is ready:
            let content = JSON.parse(xhttp.responseText);
            let imageArray = content.photos;

            var container = document.querySelector('.container');

            for (var i = 0; i < imageArray.length; i++) {
                container.innerHTML = '';
                imageArray.forEach(function(photo) {
                    var photoDiv = document.createElement('div');
                    photoDiv.innerHTML = `
                        <img src=${photo.src.original}>
                    `;
                    container.appendChild(photoDiv);
                })
            }
            }
        };
        textValue = document.querySelector('#search-bar').value;
        xhttp.open("GET", `https://api.pexels.com/v1/search?query=${textValue}&page=2&per_page=30`, true);
        xhttp.setRequestHeader('Authorization', key)
        xhttp.send();
    })
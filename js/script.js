//Getting data from input fields and grabbing the image placeholders
const date= document.getElementById("date");
const image = document.getElementById("image");
const imagebutton = document.getElementById("imagebutton");
//Fetching the data from the API
function fetchResults(){
    let url = "https://api.nasa.gov/planetary/apod?api_key=7ORBPYnF9fPSy1RcQnbkaZMLCeBgidhbKADhjflX&date=" + date.value;
    //Fetching the data from the API
    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        image.src = data.url;
    })
    //Catching any errors
    .catch(error => console.log(error));
}
//Adding an event listener to the button
imagebutton.addEventListener("click", fetchResults);

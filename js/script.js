//Getting data from input fields and grabbing the image placeholders
const date= document.getElementById("date");
const image = document.getElementById("image");
const imagebutton = document.getElementById("imagebutton");
const studentIDbutton = document.getElementById("studentIDbutton")
const studentIDpara = document.getElementById("studentID")
const imageTitle = document.getElementById("imageTitle");
const imageExplanation = document.getElementById("imageExplanation");
const imageLink = document.getElementById("imageLink");
//Showing student ID
studentIDbutton.addEventListener("click", function(){
    studentIDpara.innerHTML = "1217030";
});
//Fetching the data from the API
function fetchResults(){
    let url = "https://api.nasa.gov/planetary/apod?api_key=7ORBPYnF9fPSy1RcQnbkaZMLCeBgidhbKADhjflX&date=" + date.value;
    //Fetching the data from the API
    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        image.src = data.url;
        imageTitle.innerHTML = data.title;
        imageExplanation.innerHTML = data.explanation;
        imageLink.href = data.hdurl;
    })
    //Catching any errors
    .catch(error => console.log(error));
}
//Adding an event listener to the button
imagebutton.addEventListener("click", fetchResults);

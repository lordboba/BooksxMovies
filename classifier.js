
require('dotenv').config()
const key = process.env.BOOKKEY;
const movkey = process.env.MOVKEY;
//Gets the book at the User's Request, used for selection of favorite books

function getbook(book) {
    const Http = new XMLHttpRequest();
    const bookurl=`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(book)}&callback=handleResponses&key=${key}`;
    Http.open("GET", bookurl);
    Http.send();

    Http.onreadystatechange = (e) => {
        //console.log(JSON.parse(Http.response));
        return JSON.stringify(Http.responseText);
    }
}
function getmov(movie) {
    let rq = new XMLHttpRequest();
    console.log("hi");
    const url = `http://www.omdbapi.com/?apikey=${encodeURIComponent(movkey)}&t=${movie}`;
    rq.open("GET",url);
    rq.send();
    //console.log(JSON.parse(rq.response));
    rq.onreadystatechange = (e) => {
        //console.log(JSON.parse(rq.response));
        return JSON.stringify(rq.responseText);
    }}
//import {getbook, getmov} from './classifier/js';

function showResults() {
  alert("triggered");
  var x = document.getElementById("results-table");
  if (x.style.visibility == "hidden") {
    x.style.display = "visible";
    alert("should see");
  }
}

let latestBookRow = 3;
let latestMovieRow = 3;

function addBook() {
  const info = getBookTextBoxInput();
  //data = getbook(info);

  //console.log(typeof data);

  var table = document.getElementById("book-movie-input");
  //console.log(table.rows.length);
  // console.log(rowNum);
  if (latestBookRow < 8){
    if (latestBookRow < latestMovieRow){
      var row = table.rows[latestBookRow];
      var cell = row.cells[0];
      cell.innerHTML = info;
    }
    else {
      alert("called book else");
      var row = table.insertRow();
      var cell0 = row.insertCell(0);
      var cell1 = row.insertCell(1);
      cell0.innerHTML = info;
      cell1.innerHTML = "";
    }
    latestBookRow++;
  }
}

function addMovie() {
  // alert("called movie");
  var table = document.getElementById("book-movie-input");
  if (latestMovieRow < 8){
    if (latestMovieRow < latestBookRow){
      alert("called movie if");
      var row = table.rows[latestMovieRow];
      var cell = row.cells[1];
      cell.innerHTML = getMovieTextBoxInput();
    }
    else {
      alert("called movie else");
      var row = table.insertRow();
      var cell0 = row.insertCell(0);
      var cell1 = row.insertCell(1);
      cell1.innerHTML = getMovieTextBoxInput();
      cell0.innerHTML = "";
    }
    latestMovieRow++;
  }
}
//Gets the book at the User's Request, used for selection of favorite books

function getbook(book) {
    
    //var bookdata = JSON.parse(book_grid)[book];
    //return bookdata;
    //require('dotenv').config();
    
   // $.getJSON("book_grid.json", function(json) {
    //    books = json; // this will show the info it in firebug console
   // });
    ///console.log(typeof books);
    /*
    const key = "AIzaSyDcwK4wlyzL3hFcofRio7Lo_t71DCu4SkI";
    const Http = new XMLHttpRequest();   
    const bookurl=String.raw`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(book)}&callback=handleResponses&key=${key}`;
   // const bookurl = 
    console.log(bookurl);
    Http.open("GET",bookurl);
    Http.send();
    Http.onload = () => {
        if(Http.status === 200) {
            console.log(Http.response);
            return String(Http.response);
        } else {
            return {};
        }
    }*/
    /*
    var response = {};
    fetch(bookurl)
  .then(response => response.json())
  .then(data => console.log(data));
    console.log(response);
    return response;*/
  /*
    Http.open("GET", bookurl);
    Http.send();
    console.log(Http.status);
    Http.onreadystatechange = (e) => {
        //console.log(JSON.parse(Http.response));
        return JSON.stringify(Http.responseText);
    }*/
    
}
function getmov(movie) {
    //require('dotenv').config();
    const movkey = "eb454fd9";
    let rq = new XMLHttpRequest();
    console.log("hi");
    const url = `http://www.omdbapi.com/?apikey=${encodeURIComponent(movkey)}&t=${encodeURIComponent(movie)}`;
    rq.open("GET",url);
    rq.send();
    //console.log(JSON.parse(rq.response));
    rq.onreadystatechange = (e) => {
        //console.log(JSON.parse(rq.response));
        return JSON.stringify(rq.responseText);
    }}
// function setCookie(cname, cvalue, exdays) {
//   const d = new Date();
//   d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
//   let expires = "expires="+d.toUTCString();
//   let cookee = cname + "=" + cvalue + ";" + expires + ";path=/";
//   // alert(cookee);
//   document.cookie = cookee;
// }

// function getCookie(cname) {
//   let name = cname + "=";
//   let ca = document.cookie.split(';');
//   for(let i = 0; i < ca.length; i++) {
//     let c = ca[i];
//     while (c.charAt(0) == ' ') {
//       c = c.substring(1);
//     }
//     if (c.indexOf(name) == 0) {
//       return c.substring(name.length, c.length);
//     }
//   }
//   return "";
// }

function getBookTextBoxInput() {
input = document.getElementById("BookTextbox").value;
// setCookie("book", input, 365);
// alert("got here");
document.getElementById("BookTextbox").value = "";
return input;
}

function getMovieTextBoxInput() {
input = document.getElementById("MovieTextbox").value;
// setCookie("movie", input, 365);
// alert(getCookie("movie"));
document.getElementById("MovieTextbox").value = "";
return input;
}

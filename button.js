function addBook() {
  var table = document.getElementById("inputted-book-table");
  var rowNum = document.getElementById("inputted-book-table").rows.length;
  if (rowNum < 6){
    var row = table.insertRow();
    var cell1 = row.insertCell(0);
    cell1.innerHTML = getBookTextBoxInput();
  }
}

function addMovie() {
  var table = document.getElementById("inputted-movie-table");
  var rowNum = document.getElementById("inputted-movie-table").rows.length;
    if (rowNum < 6){
    var row = table.insertRow();
    var cell1 = row.insertCell(0);
    cell1.innerHTML = getMovieTextBoxInput();
  }
}

function setCookie(cname, cvalue, exdays) {
const d = new Date();
d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
let expires = "expires="+d.toUTCString();
let cookee = cname + "=" + cvalue + ";" + expires + ";path=/";
// alert(cookee);
document.cookie = cookee;
}

function getCookie(cname) {
let name = cname + "=";
let ca = document.cookie.split(';');
for(let i = 0; i < ca.length; i++) {
  let c = ca[i];
  while (c.charAt(0) == ' ') {
    c = c.substring(1);
  }
  if (c.indexOf(name) == 0) {
    return c.substring(name.length, c.length);
  }
}
return "";
}

function getBookTextBoxInput() {
input = document.getElementById("BookTextbox").value;
setCookie("book", input, 365);
// alert(getCookie("book"));
document.getElementById("BookTextbox").value = "";
return input;
}

function getMovieTextBoxInput() {
input = document.getElementById("MovieTextbox").value;
setCookie("book", input, 365);
// alert(getCookie("book"));
document.getElementById("MovieTextbox").value = "";
return input;
}

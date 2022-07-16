function addBook() {
    var table = document.getElementById("inputted-book-table");
    var row = table.insertRow();
    var cell1 = row.insertCell(0);
    cell1.innerHTML = getBookTextBoxInput();
  }
  
  function showMovieTable() {
    var x = document.getElementById("inputted-book-table");
    // if (x.style.display === "none") {
  
    //   x.style.display = "block";
    // } else {
    //   x.style.display = "none";
    // }
  }
  
  function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
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
    alert(getCookie("book"));
    document.getElementById("BookTextbox").innerHTML = "";
    return input;
  }
  
var request = new XMLHttpRequest();
var url ="https://data.sfgov.org/api/views/yitu-d5am/rows.json?accessType=DOWNLOAD";

request.onreadystatechange = function() {
  if (this.status === 200 && this.readyState === 4) {

    var array = JSON.parse(this.responseText);
    for (var i = 0; i < array.data.length; i++) {

      var current = array.data[i];
      if (current[10] === "Golden Gate Bridge") {
        document.getElementById("result").innerHTML += current[8] + current[9] + current[12] +"<br>"+"<br>";
      }
    }
  }
};
request.open("GET", url, true);
request.send();

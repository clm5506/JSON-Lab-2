let request = new XMLHttpRequest();
let url =
  "https://data.sfgov.org/api/views/yitu-d5am/rows.json?accessType=DOWNLOAD";

request.onreadystatechange = function() {
  if (this.status === 200 && this.readyState === 4) {
    let array = JSON.parse(this.responseText);
    for (let i = 0; i < array.data.length(); i++) {
      let current = array.data[i];
      if (current[10] === "Golden Gate Bridge") {
        document.getElementById("result").innerHTML +=
          current[8] + current[9] + current[12];
      }
    }
  }
};
request.open("GET", url, true);
request.send();

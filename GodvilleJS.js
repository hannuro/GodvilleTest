/**
 * Created by Hannu on 20.9.2016.
 */
var xmlhttp = new XMLHttpRequest();
var url = "https://godvillegame.com/gods/api/Hannu.json";

xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        myFunction(myArr);
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

function myFunction(arr) {
    var out = "";
    var i;
    for(i = 0; i < arr.length; i++) {
        out += "Name: " + arr.name + "<br>"
            + "Godname: " + arr.godname + "<br>"
            + "Gender: " + arr.gender + "<br>";
    }
    document.getElementById("info").innerHTML = out;
}
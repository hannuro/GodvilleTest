/**
 * Created by Hannu on 20.9.2016.
 */

function loadInfo() {

    var haku = document.getElementById("haku").value;
    var xmlhttp = new XMLHttpRequest();
    var url = "https://godvillegame.com/gods/api/" + haku + ".json";

    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var myArr = JSON.parse(this.responseText);
            myFunction(myArr);
        }
        else if(this.status == 404){
            godNotFound();
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

function myFunction(arr) {
    var out = "<br>";
    var i;

    out += "<tr><th>Godname</th>" +
        "<th>" + arr.godname + "</th></tr>" +
    "<tr><th>Name</th>" +
    "<th>" + arr.name + "</th></tr>" +
    "<tr><th>Gender</th>" +
    "<th>" + arr.gender + "</th></tr>" +
    "<tr><th>Motto</th>" +
    "<th>" + arr.motto + "</th></tr>" +
    "<tr><th>Level</th>" +
    "<th>" + arr.level + "</th></tr>" +
    "<tr><th>Gold</th>" +
    "<th>" + arr.gold_approx + "</th></tr>";


    /*
    out += "<br>Godname: " + arr.godname + "<br>"
        + "Name: " + arr.name + "<br>"
        + "Gender: " + arr.gender + "<br>"
    + "Gold: " + arr.gold_approx + "<br>"
    + "Level: " + arr.level + "<br>"
    + "Motto: " + arr.motto + "<br>";
*/
    document.getElementById("info").innerHTML = out;
}

function godNotFound(){
   var out = "<br>God not found.";
    document.getElementById("info").innerHTML = out;
}

function handle(e){
    if(e.keyCode === 13){
        e.preventDefault();
        loadInfo();
    }
}
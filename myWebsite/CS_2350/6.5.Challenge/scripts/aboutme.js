"use strict";

//     CS2350

//    Author: Alon Saar 
//    Date:   4/18/2022

// ===============================



window.onload = startUp;
var pic = document.createElement("img");

function startUp() {
    // change body tag's font family
    document.body.style.fontFamily = "Arial, sans-serif";

    //replace all spans
    document.getElementById("nickname").innerHTML = "Alon Saar";
    document.getElementById("favorites").innerHTML = "Family, Pizza, soccer";
    document.getElementById("hometown").innerHTML = "Hakalau";

    //change class to to "listitem"

    var list = document.getElementsByTagName("li");
    for (var i = 0; i < list.length; i++) {
        list[i].setAttribute("class", "listItem");
    }

    // add style tag that changes listItem to red
    var listRed = document.getElementsByClassName("listItem"); // loop through and add style to listRed
    for (var i = 0; i < listRed.length; i++) {
        listRed[i].style.color = "red";
    }

    // create an image of myself
    var pic = document.createElement("img");
    pic.src = "images/me0.jpg";

    // insert image after h1
    var ol = document.getElementsByTagName("ul");
    ol[0].before(pic);

    // change img onclick
    pic.onclick = ChangePic;

    function ChangePic() {

        function getRandomInt(max) {
            return Math.floor(Math.random() * max);
        }

        var rand = getRandomInt(3);
        pic.src = "images/me" + rand + ".jpg";
    }
}

// var h2 = document.createElement("h2");
// document.body.appendChild(h2);
// h2.innerHTML = "Click here for the collection page";

var anchor = document.createElement("a");
document.body.appendChild(anchor);
var link = document.createTextNode("Click here for the collection page");
anchor.setAttribute("href", "myCollection.html");
anchor.appendChild(link);
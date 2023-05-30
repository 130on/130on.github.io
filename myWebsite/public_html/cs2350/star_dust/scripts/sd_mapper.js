"use strict"

/*
   New Perspectives on HTML5 and CSS3 and JavaScript, 6th Edition
   Tutorial 9

   Planisphere Script
   Author: Alon Saar
   Date:   3/22/22

*/

var thisTime = new Date("March 23, 2022 11:46:28 AM");
var timeStr = thisTime.toLocaleString();

document.getElementById("timeStamp").innerHTML = timeStr;

var thisHour = thisTime.getHours();
var thisMonth = thisTime.getMonth();

var mapNum = (2 * thisMonth + thisHour) % 24;

var imgStr = "<img src='images/sd_sky" + mapNum + ".png'/>";

document.getElementById("planisphere").insertAdjacentHTML("afterbegin", imgStr);

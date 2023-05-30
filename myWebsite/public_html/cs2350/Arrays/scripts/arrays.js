'use strict'

/*
   CS23250 
   5-5 Challenge: Using Dates, Arrays, Loops, and Conditional Statements

   Author: Alon Saar
   Date:   4/4/2022

	
*/

// Declaring and initializing arrays

var familyNames = ["Georgina Galia", "Lior", "Elah", "Arie", "Irit", "Eldad", "Ayelet"];

var relationship = ["Wife", "Son", "Daughter", "Father", "Mother", "Brother", "Sister"];

var color = [];
color.push("red", "green", "purple", "brown", "yellow", "pink", "blue", "orange");

// Create table and insert the table into the Html file

var familyTable = "<table id='family'><tr><th>Name</th><th>Relationships</th>";

for (var i = 0; i < familyNames.length; i++) {
    familyTable += "<tr><td>" + familyNames[i] + "</td><td>" + relationship[i] + "</td><tr>";
}

familyTable += "</table>";

document.getElementById("family").innerHTML = familyTable;

// Create unordered list of colors array and insert the list to the html file

var colorList = "<ul>";

for (var i = 0; i < color.length; i++) {
    colorList += "<li>" + color[i] + "</li>";
}

colorList += "</ul>";

document.getElementById("allColors").innerHTML = colorList;

// Create unordered list of colors that start with the letter P

var colorP = "<ul>";

for (let x of color) {
    if (x[0] == "p")
        colorP += "<li>" + x + "</li>";
}

colorP += "</ul>";

document.getElementById("pColors").innerHTML = colorP;

// Create a list of colors that do not start with b

var colorNoB = "<ul>";

for (let x of color) {
    if (x[0] != "b")
        colorNoB += "<li>" + x + "</li>";
}

colorNoB += "</ul>";

document.getElementById("nonBColors").innerHTML = colorNoB;

// Create a list of colors that contain the letter h


var colorN = color.filter(checkN);


function checkN(color) {
    var yesN = false;
    if (color.includes('n'))
        yesN = true;

    return yesN;
}

var colorNlist = "<ul>";
for (var i = 0; i < colorN.length; i++) {
    colorNlist += "<li>" + colorN[i] + "</li>";
}

colorNlist += "</ul>";

document.getElementById("filterColors").innerHTML = colorNlist;

// part 3: create 2 arrays

var abc = ["bravo ", "echo ", "delta ", "alpha ", "charlie "];

var numbers = [9, 2, -3, 18, 32, -17];

// display the arrays in their original, mixed order

var p1 = "<p>" + abc.toString() + "</p>";
var p2 = "<p>" + numbers.toString() + "</p>";

document.getElementById("twoArrays").innerHTML = p1 + p2;

// reorder the elements in each of these arrays

var abcSort = abc.sort();
var numbersSort = numbers.sort();

var p3 = "<p>" + abcSort.toString() + "</p>";
var p4 = "<p>" + numbersSort.toString() + "</p>";

document.getElementById("sortedArrays").innerHTML = p3 + p4;

// sort the numbers array

var numSorted = "<p>" + numbers.sort(function (a, b) { return a - b }) + "</p>";

document.getElementById("sortedNumberArray").innerHTML = p2 + numSorted;

// part 4: add dates to the footer

var docMod = document.lastModified;
var thisDay = new Date();

var h4A = "<h4>" + "Last Modified" + " " + docMod + "</h4>";
var h4B = "<h4>" + "Current Date" + thisDay + "</h4>";

document.getElementById("dates").innerHTML = h4A + h4B;
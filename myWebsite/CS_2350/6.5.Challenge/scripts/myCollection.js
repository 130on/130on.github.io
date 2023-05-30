"use strict";

window.onload = startUp;
window.addEventListener("load", setupStyle);

function setupStyle() {
    // Create a link element for style sheet 
    var pageStyle = document.createElement("style");

    //Append that link element to the document <head>
    document.head.appendChild(pageStyle);

    //Add style rules to the head
    document.styleSheets[0].insertRule(
        "table { \
            border: 2px solid black; \
        }", 0);

    document.styleSheets[0].insertRule(
        "thead { \
            background-color: grey; \
            font-size: 1.5em; \
            border: 3px solid black; \
            text-align: center; \
            line-height: 1.5em; \
        }", 0);

    document.styleSheets[0].insertRule(
        "tbody { \
            font-size: 1.3em; \
            background-color: beige; \
            text-align: center; \
            line-height: 1.5em; \
        }", 0);

    document.styleSheets[0].insertRule(
        "td { \
            border: 3px solid rgba(0, 24,123,0.6); \
        }", 0);
}


// creating the table
function startUp() {

    // creating a table
    var table = document.createElement("table");
    var thead = document.createElement("thead");
    var tbody = document.createElement("tbody");

    table.appendChild(thead);
    table.appendChild(tbody);

    document.body.appendChild(table);

    // replacing true/false with images

    for (var i = 0; i < books.length; i++) {
        if (books[i].alreadyRead === "false") {
            books[i].alreadyRead.src = 'images/invalid.png';
        }
        if (books[i].alreadyRead === "true") {
            books[i].alreadyRead.src = 'images/valid.png';
        }
    }

    for (var i = -1; i < books.length; i++) {

        // creating header row
        if (i < 0) {
            var headerRow = document.createElement('tr');
            var title = document.createElement('th');
            title.innerHTML = "Title";
            var author = document.createElement('th');
            author.innerHTML = "Author";
            var read = document.createElement('th');
            read.innerHTML = "Read?";

            headerRow.appendChild(title);
            headerRow.appendChild(author);
            headerRow.appendChild(read);
            thead.appendChild(headerRow);
        }

        // creating true/false images

        var imgTrue = document.createElement("img");
        imgTrue.src = "images/valid.png";
        var imgFalse = document.createElement("img");
        imgFalse.src = "images/invalid.png";

        // Creating rows 
        if (i >= 0) {
            var row = document.createElement('tr');
            var rdt = document.createElement('td');
            rdt.innerHTML = books[i].title;
            var rda = document.createElement('td');
            rda.innerHTML = books[i].author;
            var rdr = document.createElement('td');

            // replacing true/false string with img
            if (books[i].alreadyRead == false) {
                rdr.appendChild(imgFalse)
            }
            if (books[i].alreadyRead == true) {
                rdr.appendChild(imgTrue)
            }

            row.appendChild(rdt);
            row.appendChild(rda);
            row.appendChild(rdr);
            tbody.appendChild(row);
        }
    }
}


// add link to the aboutme.html page

var anchor = document.createElement("a");
document.body.appendChild(anchor);
var link = document.createTextNode("Click here for the aboutme page");
anchor.setAttribute("href", "aboutme.html");
anchor.appendChild(link);


// books array
var books = [
    {
        title: 'The Design of EveryDay Things',
        author: 'Don Norman',
        alreadyRead: false
    },
    {
        title: 'The Alchemist',
        author: 'Paulo Coelho',
        alreadyRead: true
    },
    {
        title: 'Islands in the Stream',
        author: 'Ernest Hemingway',
        alreadyRead: true
    },
    {
        title: 'The Most Human Human',
        author: 'Brian Christian',
        alreadyRead: false
    },
    {
        title: 'Siddhartha',
        author: 'Hermann Hessa',
        alreadyRead: true
    }
];



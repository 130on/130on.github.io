"use strict";


/* 

Module 7 - Match Game

Name: Alon Saar 
Date: 5/1/2022


*/

window.onload = startUp;

// Global variable that counts the number of guesses
var guessCnt = 0;

// creating the home page
function startUp() {

    document.getElementById("startButton").addEventListener("click", setupGame);

    // Create a link element for style sheet 
    var pageStyle = document.createElement("style");

    //Append that link element to the document <head>
    document.head.appendChild(pageStyle);

    //Add style rules to the page
    document.styleSheets[0].insertRule(
        "h1 { \
            text-align: center; \
            font-size: 7em; \
            font-family: MOnotype Corsiva; \
            font-weight: 15px; \
            text-decoration: underline; \
            text-shadow:  rgb(83, 81, 81) 5px 5px 0px, rgb(54, 47, 47) 5px 0 10px; \
        }", 0);
    document.styleSheets[0].insertRule(
        "html { \
            background-color: rgb(148, 183, 250); \
        }", 0);
    document.styleSheets[0].insertRule(
        "body { \
            -youbkit-touch-callout: none; \
            -youbkit-user-select: none; \
            -moz-user-select: none; \
            -ms-user-select: none; \
            user-select: none; \
        }", 0);
    document.styleSheets[0].insertRule(
        "div { \
            text-align: center; \
            font-size: 1.5em; \
        }", 0);
    document.styleSheets[0].insertRule(
        "h2 { \
            text-align: center; \
            font-size: 1.8em; \
            font-family: comic sans ms; \
            background-color: rgb(106, 120, 146); \
            border: 1px double black; \
            border-radius: 15px; \
            width: 70%; \
            margin-right: 15%; \
            margin-left: 15%; \
            line-height: 2.5em; \
        }", 0);
}

// creating the game 
function setupGame() {

    document.styleSheets[0].insertRule(
        "div { \
            display: none; \
        }", 0);
    // document.styleSheets[0].insertRule(
    //     "tr { \
    //         background-color: gray; \
    //         line-width: 100%; \
    //     }", 0);

    // retrieve the input value of the user and draw game board based on that value
    var numVal = document.getElementById("numSymbols").value;

    if ((numVal >= 1) && (numVal < 8)) {
        drawBoard(2, numVal)
    }

    if (numVal >= 8) {
        drawBoard(4, 4)
    }

    if (numVal <= 0) {
        drawBoard(2, 1)
    }
}

// A function that draws the game board
function drawBoard(nrows, ncols) {

    // show the number of guesses
    var h2 = document.createElement("h2");
    document.body.appendChild(h2);
    h2.setAttribute("id", "h2");

    h2.innerHTML = "Number of guesses: " + guessCnt;

    // create a table that is the game board
    var table = document.createElement("table");
    var thead = document.createElement("thead");
    var tbody = document.createElement("tbody");

    table.appendChild(thead);
    table.appendChild(tbody);

    document.body.appendChild(table);

    // create a game board when there are 8 symbols (= 4*4 table)
    if (nrows === 4) {
        var counter = 0;

        // create array of cards based on the user's input value
        var cardsUser = [];

        for (var i = 0; i < 16; i = i + 2) {
            cardsUser[i] = cards[i];
            cardsUser[i + 1] = cards[i + 1];
        }

        //shuffle the cards after they were assigned with symbols
        for (var i = 0; i < cardsUser.length; i++) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = cardsUser[i];
            cardsUser[i] = cardsUser[j];
            cardsUser[j] = temp;
        }

        // create the table rows and columns based on the user's value and assign symbols to cards
        for (var i = 0; i < nrows; i++) {
            var row = document.createElement('tr');
            tbody.appendChild(row);
            for (var j = 0; j < ncols; j++) {
                var rdt = document.createElement('td');
                rdt.classList.add("notFlipped");
                rdt.innerHTML = cardsUser[counter];
                row.appendChild(rdt);
                counter++;
            }
        }
    }

    // create a game board when there are less than 8 symbols
    else {

        // create array of cards based on the user's input value
        var cardsUser = [];

        for (var i = 0; i < ncols * 2; i = i + 2) {
            cardsUser[i] = cards[i];
            cardsUser[i + 1] = cards[i + 1];
        }

        //shuffle the cards after they were assigned with symbols
        for (var i = 0; i < cardsUser.length; i++) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = cardsUser[i];
            cardsUser[i] = cardsUser[j];
            cardsUser[j] = temp;
        }

        // create the table's rows and columns based on the user's value and assign symbols to cards
        //First row
        for (var i = 0; i < nrows - 1; i++) {
            var row = document.createElement('tr');
            tbody.appendChild(row);
            for (var j = 0; j < ncols; j++) {
                var rdt = document.createElement('td');
                rdt.classList.add("notFlipped");
                rdt.innerHTML = cardsUser[j];
                row.appendChild(rdt);
            }
        }

        //Second row
        for (var i = 1; i < nrows; i++) {
            var row = document.createElement('tr');
            tbody.appendChild(row);
            for (var j = ncols; j < ncols * 2; j++) {
                var rdt = document.createElement('td');
                rdt.classList.add("notFlipped");
                rdt.innerHTML = cardsUser[j];
                row.appendChild(rdt);
            }
        }
    }

    //Add style rules to the game board
    document.styleSheets[0].insertRule(
        "table { \
        margin-left: auto; \
        margin-right: auto; \
        margin-bottom: 10%; \
        border-collapse: separate; \
        border-spacing: 10px; \
    }", 0);
    document.styleSheets[0].insertRule(
        "td.notFlipped { \
        text-align: center; \
        font-size: 2em; \
        width: 3em; \
        height: 3em; \
        padding: 5px; \
        color: blue; \
        background-color: blue; \
        border: 2px solid black; \
        border-radius: 10px; \
    }", 0);
    document.styleSheets[0].insertRule(
        "td.flipped{ \
        text-align: center; \
        font-size: 2em; \
        width: 3em; \
        height: 3em; \
        padding: 5px; \
        color: blue; \
        background-color: rgb(233, 100, 100); \
        border: 2px solid black; \
        border-radius: 10px; \
    }", 0);
    document.styleSheets[0].insertRule(
        "td.pair{ \
        text-align: center; \
        font-size: 2em; \
        width: 3em; \
        height: 3em; \
        padding: 5px; \
        color: blue; \
        background-color: rgb(204, 247, 175); \
        border: 2px solid black; \
        border-radius: 10px; \
    }", 0);

    // assign event listener to each card 
    var allCards = document.querySelectorAll("td");

    var counter = 0;
    for (var i = 0; i < allCards.length; i++) {
        allCards[i].addEventListener("click",
            function (e) {
                e.preventDefault();
                //Set an ID for each flipped card so that the check function can check for match
                this.setAttribute("id", "flip" + counter);

                // Change the background color of a card that was flipped by set a class
                if (counter < 2) {
                    this.setAttribute("class", "flipped");

                    counter++;
                }

                // update guesses counter on the webpage
                if (counter === 1) {
                    guessCnt++;
                    document.getElementById("h2").innerHTML = "Number of guesses: " + guessCnt;
                }

                // once the user flipped two cards check for match and live cards flipped or flip back 
                if (counter === 2) {
                    if (!check()) {
                        // remove ID from flipped card 
                        var flip0 = document.getElementById("flip0");
                        var flip1 = document.getElementById("flip1");
                        flip0.removeAttribute("id");
                        flip1.removeAttribute("id");
                        setTimeout(
                            function () {
                                for (var i = 0; i < allCards.length; i++)
                                    if (allCards[i].classList.contains("flipped")) {
                                        allCards[i].setAttribute("class", "notFlipped");
                                        counter = 0;
                                    }
                            }, 2000);
                    }

                    else {
                        // remove ID from flipped card 
                        var flip0 = document.getElementById("flip0");
                        var flip1 = document.getElementById("flip1");
                        flip0.removeAttribute("id");
                        flip1.removeAttribute("id");
                        counter = 0;
                    }
                }
                checkWin();
            });
    }


    // A function that checks for a matching pair and leaves the cards flipped once a pair is found
    function check() {

        var F1 = document.getElementById("flip0");
        var F2 = document.getElementById("flip1");

        if (F1.textContent == F2.textContent) {
            F1.setAttribute("class", "pair");
            F2.setAttribute("class", "pair");

            return true;
        }

        else {
            return false;
        }
    }

    // A function that checks if all the matching pairs have been revealed 
    function checkWin() {
        console.log("Works");
        var allCards = document.querySelectorAll("td");
        for (var i = 0; i < allCards.length; i++) {
            if (allCards[i].classList.contains("pair")) {
                if (i == allCards.length - 1) {
                    document.styleSheets[0].insertRule(
                        "table { \
                            display: none; \
                        }", 0);
                    var h3 = document.createElement("h3");
                    document.body.appendChild(h3);
                    h3.innerHTML = "YOU WIN!" + '<br>' + "THANK YOU FOR PLAYING."
                    document.styleSheets[0].insertRule(
                        "h2 { \
                            display: none; \
                        }", 0);
                    document.styleSheets[0].insertRule(
                        "h3 { \
                            text-align: center; \
                            font-size: 3em; \
                            background-color: rgb(72, 212, 84); \
                            line-height: 2em; \
                            width: 80%; \
                            border: 5px black solid; \
                            border-radius: 20px; \
                            margin-left: auto; \
                            margin-right: auto; \
                        }", 0);
                }
            }
            else {
                break;
            }
        }
    }
}

//array of cards with symbols

var cards = ['~', '~', '!', '!', '@', '@', '#', '#', '$', '$', '%', '%', '^', '^', '&', '&'];


"use strict";

/*

   Pet competition script
   
   Author: Alon Saar
   Date:   4/26/2022
   
   Filename: pet_comp.js
   
   Function List
   =============
  

*/



window.addEventListener("load", function () {

    document.getElementById("weight").oninput = calcSize;
    document.getElementById("days").oninput = boardCost;
    //document.getElementById("days").onchange = calcCost;
    document.getElementById("totalCost").onload = calcCost();
    document.getElementById("totalCost").oninput = calcCost;
    document.getElementById("sing").oninput = calcCost;
    document.getElementById("cute").oninput = calcCost;
    document.getElementById("trick").oninput = calcCost;

    displayDiv();
})

// Change the kennel size box based on pet weight

function calcSize() {

    var petWeight = document.getElementById("weight").value;

    if ((isNaN(petWeight)) === true) {
        document.getElementById("size").setAttribute("value", "");
    }
    if (petWeight <= 4) {
        document.getElementById("size").setAttribute("value", "mini");
    }
    if ((petWeight > 4) && (petWeight <= 12)) {
        document.getElementById("size").setAttribute("value", "small");
    }
    if ((petWeight > 12) && (petWeight <= 50)) {
        document.getElementById("size").setAttribute("value", "medium");
    }
    if (petWeight > 50) {
        document.getElementById("size").setAttribute("value", "large");
    }
}

// Change the cost of boarding based on the number of days

function boardCost() {

    var boardDays = document.getElementById("days").value;
    var boardFee = boardDays * 19.99;

    if ((isNaN(boardDays)) === true) {
        document.getElementById("days").setAttribute("value", "0");
        document.getElementById("boardingFee").setAttribute("value", "0.00");
    }
    if (isNaN(boardDays) === false) {
        document.getElementById("boardingFee").setAttribute("value", formatNumber(boardFee, 2));
    }

    calcCost();
}

//Calculate the total cost of participation

function calcCost() {

    // add the board fee to the boarding box

    let boardDays = document.getElementById("days").value;
    let boardFee = boardDays * 19.99;


    document.getElementById("registrationCost").setAttribute("value", 0);
    var regCost = document.getElementById("registrationCost");

    var eventsNum = 0;
    var boardingCost = document.getElementById("boardingCost").value;

    if (boardFee === "") {
        document.getElementById("boardingCost").setAttribute("value", 0);
    }
    if (boardFee === 0) {
        document.getElementById("boardingCost").setAttribute("value", 0);
    }
    if (boardFee != "") {
        document.getElementById("boardingCost").setAttribute("value", formatNumber(boardFee, 2)); // why can't I replace "doument..." with a var (boardingCost)?
    }

    // add the checked competitions to the events list

    if (document.getElementById("sing").checked) {
        eventsNum++;
    }
    if (document.getElementById("cute").checked) {
        eventsNum++;
    }
    if (document.getElementById("trick").checked) {
        eventsNum++;

    }

    // calculate and present total cost in the total cost box
    regCost = eventsNum * 120;
    document.getElementById("registrationCost").setAttribute("value", formatNumber(regCost, 2));

    formatNumber(regCost, 2);

    var totCost = regCost + boardFee;

    document.getElementById("totalCost").setAttribute("value", formatNumber(totCost, 2));
}

// format a number to a specified number of decimal places

function formatNumber(val, decimals) {
    return val.toLocaleString(undefined, {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals
    });
}


// function that displays pet competitions details once the check boxes are checked

function displayDiv() {

    var checkBox1 = document.getElementById("sing");
    var checkBox2 = document.getElementById("cute");
    var checkBox3 = document.getElementById("trick");

    document.getElementById("singAdd").style.display = "none";
    document.getElementById("cuteAdd").style.display = "none";
    document.getElementById("trickAdd").style.display = "none";


    // document.styleSheets[0].insertRule(
    //     "body { \
    //         display: none; \
    //     }", 0);

    // document.styleSheets[0].insertRule(
    //     "div#cuteAdd { \
    //         display: none; \
    //     }", 1);

    // document.styleSheets[0].insertRule(
    //     "div#trickAdd { \
    //         display: none; \
    //     }", 2);




    // checkBox1.addEventListener("click", function () {
    //     if (checkBox1.checked) {
    //         document.styleSheets[0].insertRule(
    //             "div#singAdd { \
    //                 display: block; \
    //             }", 0);
    //     }
    // });

    // checkBox2.addEventListener("click", function () {
    //     if (checkBox2.checked) {
    //         document.styleSheets[0].insertRule(
    //             "div#cuteAdd { \
    //                 display: block; \
    //             }", 1);
    //     }
    // });

    // checkBox3.addEventListener("click", function () {
    //     if (checkBox3.checked) {
    //         document.styleSheets[0].insertRule(
    //             "div#trickAdd { \
    //                 display: block; \
    //             }", 2);
    //     }
    // });

    checkBox1.addEventListener("click", function () {
        if (checkBox1.checked) {
            document.getElementById("singAdd").style.display = "block";
        }
        else {
            document.getElementById("singAdd").style.display = "none";
        }
    });

    checkBox2.addEventListener("click", function () {
        if (checkBox2.checked) {
            document.getElementById("cuteAdd").style.display = "block";
        }
        else {
            document.getElementById("cuteAdd").style.display = "none";
        }
    });

    checkBox3.addEventListener("click", function () {
        if (checkBox3.checked) {
            document.getElementById("trickAdd").style.display = "block";
        }
        else {
            document.getElementById("trickAdd").style.display = "none";
        }
    });
}
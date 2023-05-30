"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 11
   Review Assignment

   Author: Alon Saar 
   Date:   4/18/2022

   Global Variables
   ================
   
   allCells
      References the TD cells within the Hitori table grid.   
      
   Function List
   =============

   startUp()
      Run when the web page is loaded; displays puzzle 1
      and loads the event handlers for the web page buttons.
      
   setupPuzzle()
      Sets up a new puzzle, adding the event handlers for
      every puzzle cell.      

   switchPuzzle(e)
      Swaps one puzzle for another based on the button being clicked
      by the user. Confirms the change before swapping in the
      new puzzle.

   findErrors()
      Highlights the errors in the Hitori puzzle in a red font.
      
   showSolution()
      Shows the solution to the Hitori puzzle
    
   checkSolution()
      Checks the current user's puzzle to verify whether it contains
      the complete and correct solution.

   drawHitori(numbers, blocks, rating)
      Returns a text string of the HTML code to
      display a Hitori puzzle table based on the contents of
      the numbers, blocks, and rating parameters.
	
*/

window.onload = startUp;

var allCells;

function startUp() {
   //insert the header of puzzle 1 
   document.getElementById("puzzleTitle").innerHTML = "puzzle1";

   // insert the puzzel's HTML code
   document.getElementById("puzzle").innerHTML = drawHitori(hitori1Numbers, hitori1Blocks, hitori1Rating);

   // insert event handler for the three puzzles
   var puzzleButtons = document.getElementsByClassName("puzzles");
   for (var i = 0; i < puzzleButtons.length; i++) {
      puzzleButtons[i].onclick = switchPuzzle;
   }

   // define the initial appearance of the first puzzle
   setupPuzzle();

   // add an event handler for the check solution button
   document.getElementById("check").addEventListener("click", findErrors);        //FIXME: add findError

   // add event handler for the show solutions button
   document.getElementById("solve").addEventListener("click", showSolution);         //FIXME: add showsolution
}

// add the switch puzzle function which switched between three possible puzzles
function switchPuzzle(e) {
   var puzzleID = e.target.id;
   if (confirm("If you choose to continue your work will be lost. Continue anyway?")) {
      document.getElementById("puzzleTitle").innerHTML = e.target.value;
      switch (puzzleID) {
         case "puzzle1":
            document.getElementById("puzzle1").innerHTML = drawHitori(hitori1Numbers, hitori1Blocks, hitori1Rating);
            break;
         case "puzzle2":
            document.getElementById("puzzle2").innerHTML = drawHitori(hitori2Numbers, hitori2Blocks, hitori2Rating);
            break;
         case "puzzle3":
            document.getElementById("puzzle3").innerHTML = drawHitori(hitori3Numbers, hitori3Blocks, hitori3Rating);
      }
      setupPuzzle();
   }
}

// add the setup puzzle function which creates the puzzles
function setupPuzzle() {


   allCells = document.querySelectorAll("table#hitoriGrid td");
   for (var i = 0; i < allCells.length; i++) {

      //set the background color of the cells to white
      allCells[i].style.backgroundColor = "rgb(255, 255, 255)";

      // set the font color of the cells to black
      allCells[i].style.color = "black";

      // set the border radius of the cells to 0
      allCells[i].style.borderRadius = "0";

      //set the background color, font color and radius of cells based on key pressed
      allCells[i].addEventListener("mousedown",
         function (e) {
            e.preventDefault();
            if (e.shiftKey) {
               this.style.backgroundColor = "rgb(255, 255,255)";
               this.style.color = "rgb(0, 0, 0)";
               this.style.borderRadius = "0";
            }
            else if (e.altKey) {
               this.style.backgroundColor = "rgb(0, 0, 0)";
               this.style.color = "rgb(255, 255,255)";
               this.style.borderRadius = "0";
            }
            else {
               this.style.backgroundColor = "rgb(101, 101, 101)";
               this.style.color = "rgb(255, 255,255)";
               this.style.borderRadius = "50%";
            }


         }

      );

      // change the style of the mouse cursor
      allCells[i].addEventListener("mouseover",
         function (e) {
            if (e.shiftKey) {
               this.style.cursor = "url(images/jpf_eraser.png), alias";
            }
            else if (e.altKey) {
               this.style.cursor = "url(images/jpf_block.png), cell";
            }
            else {
               this.style.cursor = "url(images/jpf_circle.png), pointer";
            }

         }

      );
      // check for the solution 
      allCells[i].addEventListener("mouseup", checkSolution);

   }
}

// add a function that highlights incorrect cells in red 

function findErrors() {
   for (var i = 0; i < allCells.length; i++) {
      if (allCells[i].className === "blocks" && allCells[i].style.backgroundColor === "rgb(101, 101, 101)"
         ||
         allCells[i].className === "circle" && allCells[i].style.backgroundColor === "rgb(0, 0, 0)") {
         allCells[i].style.color = "rgb(255, 0, 0)";
      }

   }

   // set the red color to appear for 1 second and then change back to white
   setTimeout(
      function () {
         for (var i = 0; i < allCells.length; i++) {
            if (allCells[i].style.color === "rgb(255, 0, 0)") {
               allCells[i].style.color = "rgb(255, 255, 255)"
            }
         }
      }, 1000);

}





/* ================================================================= */

function checkSolution() {
   /* Set the initial solved state of the puzzle to true */
   var solved = true;

   /* Loop through the puzzle cells, exiting when an incorrect
      cell is found, setting the solved variable to false */

   for (var i = 0; i < allCells.length; i++) {
      var cellColor = allCells[i].style.backgroundColor;
      var cellClass = allCells[i].className;

      /* A cell is incorrect if it is in the block class and is not black
         or in the circle class and is not white */
      if ((cellClass == "blocks" && cellColor !== "black") ||
         (cellClass == "circles" && cellColor !== "rgb(101, 101, 101)")) {
         solved = false;
         break;
      }
   }

   /* If solved is still true after the loop, display an alert box */
   if (solved) alert("Congratulations! You solved the puzzle!");
}

function showSolution() {
   for (var i = 0; i < allCells.length; i++) {
      allCells[i].style.color = "";
      allCells[i].style.backgroundColor = "";
      allCells[i].style.borderRadius = "";
   };
}

function drawHitori(numbers, blocks, rating) {

   /* Initial HTML String for the Hitori Puzzle */
   var htmlString = "";

   /* numbers is a multidimensional array containing the
      Hitori numbers; blocks is a corresponding 
      multidimensional array containing the location of the
      blocks which are indicated by the # character.
      Non-blocking cells are indicated by a blank character.
  */

   /* Create a Web table with the id, hitoriGrid, containing
      the numeric values. Blocks cells have the class name,
      blocks. Non-blocking cells have the class name, circles
  */

   var totalRows = numbers.length;
   var totalCols = numbers[0].length;
   htmlString = "<table id='hitoriGrid'>";
   htmlString += "<caption>" + rating + "</caption>";


   for (var i = 0; i < totalRows; i++) {
      htmlString += "<tr>";

      for (var j = 0; j < totalCols; j++) {
         if (blocks[i][j] == "#") htmlString += "<td  class='blocks'>"
         else htmlString += "<td class='circles'>";

         htmlString += numbers[i][j];
         htmlString += "</td>";
      }

      htmlString += "</tr>";
   }

   htmlString += "</table>";

   return htmlString;
}
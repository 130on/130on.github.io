"use strict";

/* 

Name: Alon Saar 
Date: 6/5/2023
Description: script that handles different events in the website


*/





// Alternating display of education diplomas

var dipSource = ["files/WSU_AAS_CS-AlonSaar2.pdf", "files/2022_2023_Outstanding_Student.pdf", "files/Certificate_of_Proficiency_Programming_Essentials.pdf"];
var index = 0;

const pdfObj = document.getElementById("diplomas")

function changePDF() {
  pdfObj.src = dipSource[index];
  index = (index + 1) % dipSource.length; // Loop through the array
}

setInterval(changePDF, 5000); // Change PDF every 5 seconds (adjust as needed)



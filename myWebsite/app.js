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

// Alternating display of Algo imges in projects page

var algoSource = ["files/AlgoGaugeHome.png", "files/AlgoGaugeMultiPage.png", "files/AlgoGaugeMultiExperiment.png", "files/AlgoGaugeHistory.png", "files/AlgoGaugeContribution2.png"];
var index = 0;

const algoImgObj = document.getElementById("algoImg")

function changeIMG() {
  algoImgObj.src = algoSource[index];
  index = (index + 1) % algoSource.length; // Loop through the array
}

setInterval(changeIMG, 5000); // Change PDF every 5 seconds (adjust as needed)

"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Review Assignment

   Author: Alon Saar
   Date:   3/31/2022

	
*/

//  create the date

var thisDay = new Date("August 30, 2018");

// create the table code 

var tableHTML = "<table id='eventTable'><caption>Upcoming Events</caption> <tr><th>Date</th><th>Event</th><th>Price</th></tr>";

// limit the table dates

var endDate = new Date(thisDay.getTime() + 14 * 24 * 60 * 60 * 1000);

for (var i = 0; i < eventDates.length; i++) {
   var eventDate = new Date(eventDates[i]);
   var eventDay = eventDate.toDateString();
   var eventTime = eventDate.toLocaleTimeString();
   if (thisDay <= eventDate && eventDate <= endDate) {
      tableHTML += "<tr><td>" + eventDay + " @ " + eventTime + "</td>" + "<td>" + eventDescriptions[i] + "</td>" + "<td>" + eventPrices[i] + "</td></tr>";
   }
}

tableHTML += "</table>";

// insert the table into the html file

document.getElementById("eventList").innerHTML = tableHTML; 

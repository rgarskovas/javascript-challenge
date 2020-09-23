// from data.js
var sightings = data;

// YOUR CODE HERE!

// // Get a reference to the table body
// var tbody = d3.select("tbody");
// // Console.log the data from data.js
// console.log(sightings);

// // // Step 1: Loop Through `data` and console.log each weather report object
// data.forEach(function(alienReport) {
//   console.log(alienReport);
// // // Step 2:  Use d3 to append one table row `tr` for each weather report object
//   var row = tbody.append("tr");
// // // Step 3:  Use `Object.entries` to console.log each weather report value
//   Object.entries(alienReport).forEach(function([key, value]) {
//     console.log(key, value);
// // // Step 4: Use d3 to append 1 cell per weather report value
//     var cell = row.append("td");
// // // Step 5: Use d3 to update each cell's text with
// // alien report values
//     cell.text(value);
//   });
// });


// Creating filter


// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);



// Complete the event handler function for the form
function runEnter() {
  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime-input");
 
  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue1);

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#state-input");
  // Get the value property of the input element
  var inputValue = inputElement.property("value");
  console.log(inputValue2);


  console.log(sightings);

  var filteredData1 = sightings.filter(sighting => sighting.datetime === inputValue1);
  var filteredData2 = filteredData1.filter(sighting => sighting.state === inputValue2);

  console.log(filteredData2);

// Get a reference to the table body
  var tbody = d3.select("tbody");

  filteredData2.forEach(function(alienReport) {
    console.log(alienReport);
    var row = tbody.append("tr");
    Object.entries(alienReport).forEach(function([key, value]) {
      console.log(key, value);
      var cell = row.append("td");
      cell.text(value);
    });
  });
};

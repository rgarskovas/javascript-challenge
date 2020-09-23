// from data.js
var sightings = data;

buildTable(sightings)

// YOUR CODE HERE!
function buildTable() {
// Get a reference to the table body
var tbody = d3.select("tbody");
// Console.log the data from data.js
console.log(sightings);

// // Step 1: Loop Through `data` and console.log each sighting report object
data.forEach(function(alienReport) {
  console.log(alienReport);
// // Step 2:  Use d3 to append one table row `tr` for each sighting report object
  var row = tbody.append("tr");
// // Step 3:  Use `Object.entries` to console.log each sighting report value
  Object.entries(alienReport).forEach(function([key, value]) {
    console.log(key, value);
// // Step 4: Use d3 to append 1 cell per sighting report value
    var cell = row.append("td");
// // Step 5: Use d3 to update each cell's text with
// alien report values
    cell.text(value);
  });
});
}

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
  
  // Get a reference to the table body
  var tbody = d3.select("tbody");
  tbody.html("");

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime-input");
 
  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(sightings);

  var filteredData = sightings.filter(sighting => sighting.datetime === inputValue);

  console.log(filteredData);

// Get a reference to the table body
  var tbody = d3.select("tbody");

  filteredData.forEach(function(alienReport) {
    console.log(alienReport);
    var row = tbody.append("tr");
    Object.entries(alienReport).forEach(function([key, value]) {
      console.log(key, value);
      var cell = row.append("td");
      cell.text(value);
    });
  });
};

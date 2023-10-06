// PART 1: Short JavaScript Exercises

// 1. Create a variable called myFruit and assign the value apple to it
var myFruit = "apple";

// 2. Create an array of objects called favFruits with the properties name and color 
// example
// var schools = [
//     { name: "Harvard", city: "Cambridge"},
//     { name: "MIT", city: "Cambridge"}
// ]

var favFruits = [
    { name: "Banana", color: "yellow"},
    { name: "kiwi", color: "green"}
];



// Part 2: D3 Exercises
// Select the body of the HTML document and append an h2 element
// with the text "Hello World!"

d3.select("body").append("h2").text("Hello World!");


// Step 1: Append a new SVG element to HTML document with D3
// (width = 500px, height = 500px)

var svg = d3.select("body").append("svg").attr("height", 500).attr("width", 500);

// Step 2: Append a new SVG circle with x = 200, y = 200, radius = 200, fill = red

svg.append("circle")
    .attr("cx", 200)
    .attr("cy", 200)
    .attr("r", 200) 
    .attr("fill", "red");



// A helpful resource on how selection (.select) works on D3: https://bost.ocks.org/mike/selection/



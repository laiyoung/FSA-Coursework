/*

Observe the index.html page.

It has:

A heading <h1> with the id "mainHeading"
A paragraph <p> element with the id "description"
A <div> element with the id "colorBox" that will act as a "box."

Without making any changes to the html, write JavaScript that:

1) Changes the text content of the <h1> element from "Welcome to Color Changer!" to "DOM Manipulation is Fun!"
2) Changes the text content of the <p> element from "This is a simple DOM manipulation exercise." to "Look at how we changed the elements!"
3) Changes the background color of the <div> element to light blue and doubles its current size
4) Adds a new <p> element inside the <div> with the text: "This is a new paragraph inside the box!". */

//Your Code below
const colorDiv = document.querySelector("#colorBox")
//The query selector uses a # for delecting IDs (not for HTML elements)
const newParagraph = document.createElement("p")
//1)
document.getElementById("mainHeading").innerHTML = "DOM Manipulation is Fun!";

//2)
document.getElementById("description").innerHTML = "Look at how we changed the elements!";
//3)
colorDiv.style.width = "200px";
colorDiv.style.height = "200px";
colorDiv.style.backgroundColor = "#ADD8E6";
//4)


newParagraph.textContent = "This is a new paragraph inside the box!";
colorDiv.append(newParagraph);

// A function for changing:
// const currentWidth = box.offsetWidth;
// const currentHeight = box.offsetHeight;

// box.style.width (currentwidth * 2) + "px";
// box.style.height (currentheight * 2) + "px";
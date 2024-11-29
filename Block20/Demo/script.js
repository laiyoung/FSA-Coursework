//Button Click:
/** const button = document.getElementById("myButton");
 * button.addEventListener("click", function () {
 * button.textContent = "You clicked me!";
 * button.style.backgroundColor = "lightblue";
 * });
 */

//Hover Effect:
/** const box = document.getElementById("hoverBox");
 * box.addEventListener("mouseover", function () {
 * box.style.backgroundColor = "yellow";
 * });
 * box.addEventListener("mouseout", function () {
 * box.style.backgroundColor = "lightgray";
 * });
 */

//Input Field:
/** document
 * .getElementById("textInput")
 * .addEventListener("input", function (event) {
 * document.getElementById("output").textContent = event.target.value;
 * });
 * /

//Key Press:
/** document.addEventListener("keydown", function (event) {
 * if (event.key === "Enter") {
 *  alert("You pressed Enter!");
 *  }
 * });
 * /

//Toggle Visibility:
/** document.getElementById("toggleButton").addEventListener("click", function () {
 * const text = document.getElementById("textToToggle");
 * if (text.style.display === "none") {
 * text.style.display = "block";
 * } else {
 * text.style.display = "none";
 * }
 * });
 * /

//Form Submission:
/** document.getElementById("myForm").addEventListener("submit", function (event) {
 * event.preventDefault();  //<---- What is this doing?
 * document.getElementById("thankyouMessage").style.display = "block";
 * });
 * /
      
//Change Style:
/** const colorPicker = document.getElementById("colorPicker")
 * colorPicker.addEventListener("change", function (event) {
 * document.body.style.backgroundColor = event.target.value;
 * });
*/

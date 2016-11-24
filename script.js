var numSquares = 9
var colors = generateRandomColor(numSquares);
var h1 = document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var targetColor = targetColour();
var colorDisplay = document.getElementById("colorDisplay");
var result = document.getElementById("result");
var resetButton = document.getElementById("reset");
var easyBtn = document.getElementById("easyBtn");
var mediumBtn = document.getElementById("mediumBtn");
var hardBtn = document.getElementById("hardBtn");
colorDisplay.textContent = targetColor;

easyBtn.addEventListener("click", function () {
  h1.style.background = "steelblue";
  easyBtn.classList.add("selected");
  mediumBtn.classList.remove("selected");
  hardBtn.classList.remove("selected");
  numSquares = 3;
  colors = generateRandomColor(numSquares);
  targetColor = targetColour();
  colorDisplay.textContent = targetColor;
  for (var i = 0; i < colors.length; i++) {
    squares[i].style.background=colors[i];}
  for (var i = 3; i < squares.length; i++) {
    squares[i].style.display = "none";
  }
})
mediumBtn.addEventListener("click", function () {
  h1.style.background = "steelblue";
  easyBtn.classList.remove("selected");
  mediumBtn.classList.add("selected");
  hardBtn.classList.remove("selected");
  numSquares = 6;
  colors = generateRandomColor(numSquares);
  targetColor = targetColour();
  colorDisplay.textContent = targetColor;
  for (var i = 0; i < colors.length; i++) {
    squares[i].style.display = "block";
    squares[i].style.background=colors[i];}
    for (var i = 6; i < squares.length; i++) {
      squares[i].style.display = "none";
    }
})
hardBtn.addEventListener("click", function () {
  h1.style.background = "steelblue";
  easyBtn.classList.remove("selected");
  mediumBtn.classList.remove("selected");
  hardBtn.classList.add("selected");
  numSquares = 9;
  colors = generateRandomColor(numSquares);
  targetColor = targetColour();
  colorDisplay.textContent = targetColor;
  for (var i = 0; i < colors.length; i++) {
    squares[i].style.display = "block";
    squares[i].style.background=colors[i];}
})
resetButton.addEventListener("click", function () {
  h1.style.background = "steelblue";
  colors = generateRandomColor(numSquares);
  targetColor = targetColour();
  colorDisplay.textContent = targetColor;
  result.textContent = "";
  resetButton.textContent = "reset";
 for (var i = 0; i < colors.length; i++) {
   squares[i].style.background=colors[i];}
})

  for (var i = 0; i < colors.length; i++) {
    squares[i].style.background=colors[i];
    squares[i].addEventListener("click",function () {
       var clickedColor = this.style.background;
       if(clickedColor===targetColor){
         result.textContent = "Correct !!!";
         h1.style.background = targetColor;
         changeColor(targetColor);
         resetButton.textContent = "Play Again !!";
       } else {
          this.style.background = "#232323";
          result.textContent = "Try Again !!!";
       }
    });
  }


 function changeColor(color) {
   for (var i = 0; i < squares.length; i++) {
     squares[i].style.background = color
   }
 }


 function generateRandomColor(num) {
   var arr = [];
   for (var i = 0; i < num; i++) {
     arr.push(generateColor());
   }
   return arr;
 }
function generateColor() {
  var r = Math.floor(Math.random()*256);
  var g = Math.floor(Math.random()*256);
  var b = Math.floor(Math.random()*256);
  var genColorObj = {"%r%": r, "%g%":g, "%b%": b};
  var str = "rgb(%r%, %g%, %b%)";

  str = str.replace(/%\w+%/g, function(all) {
  return genColorObj[all] || all;
});
  return str;
}
function targetColour() {
  var color = Math.floor(Math.random()*colors.length);
  return colors[color];
}

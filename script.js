document.addEventListener("DOMContentLoaded", function () {
    const colorBox = document.getElementById("colorBox");
    const changeColorButton = document.getElementById("changeColorButton");
    let currentColor = "red"; // Start with red color
  
    changeColorButton.addEventListener("click", function () {
      if (currentColor === "red") {
        colorBox.style.backgroundColor = "blue";
        currentColor = "blue";
      } else {
        colorBox.style.backgroundColor = "red";
        currentColor = "red";
      }
    });
  });
  
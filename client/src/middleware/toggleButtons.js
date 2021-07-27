export function toggleButtons(){
    var blackButton = document.querySelector(".blackButton");
    var blueButton = document.querySelector(".blueButton");
    if (blackButton.style.display === "inline") {
        blackButton.style.display = "none";
        blueButton.style.display = "inline"
        } else {
        blackButton.style.display = "inline";
        blueButton.style.display = "none";
        }
}


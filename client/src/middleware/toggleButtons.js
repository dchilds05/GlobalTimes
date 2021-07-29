export function toggleButtons(newWeb_url){

    var blackButton = document.querySelector(`.black${newWeb_url}`);
    var blueButton = document.querySelector(`.blue${newWeb_url}`);
    if (blackButton.style.display === "inline") {
        blackButton.style.display = "none";
        blueButton.style.display = "inline"
        } else {
        blackButton.style.display = "inline";
        blueButton.style.display = "none";
        }
}


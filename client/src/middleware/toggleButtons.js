export function toggleButtons(web_url){
    var blackButton = document.querySelector(`[class=black${web_url}]`);
    var blueButton = document.querySelector(`[class=blue${web_url}]`);
    if (blackButton.style.display === "inline") {
        blackButton.style.display = "none";
        blueButton.style.display = "inline"
        } else {
        blackButton.style.display = "inline";
        blueButton.style.display = "none";
        }
}


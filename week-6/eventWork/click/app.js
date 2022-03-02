// make the box disapear when the user clicks it
var change = document.querySelector(".red-box");

window.addEventListener("click",
    function(e) {
        change.style.display = "none";
    })
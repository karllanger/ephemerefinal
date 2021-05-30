let button = document.getElementById("button");
let hiddenMenu = document.getElementById("hiddenMenu");
console.log({button})
button.addEventListener("click", showMenu);


function showMenu(){

    console.log("läuft")
    if(hiddenMenu.style.display === "none") {
        hiddenMenu.style.display = "block";
    }
    else {
        hiddenMenu.style.display = "none";
    }
}



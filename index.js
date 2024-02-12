function mouseOver(){
    document.getElementById("glass").style.fontSize = "20px" ;
}

function mouseOut(){
    document.getElementById("glass").style.fontSize = "15px";
}

function mouseOverAll(){
    document.getElementById("all").style.backgroundColor = " rgb(237, 150, 43)";
}
function mouseOutAll(){
    document.getElementById("all").style.backgroundColor = "white";
}

function mouseOverNav(){
    document.querySelector("#font1").style.zIndex = "6";
}
function mouseOutNav(){
    document.querySelector("#font1").style.zIndex = "1";
}
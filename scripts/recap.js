var listImg = "";

for (var i = 1; i < 48; i++) {
    listImg += "<img class='slides' src='images/westmunc2016/IMG_" + i + ".jpg'>\n";
}

document.getElementById("replaceHere").innerHTML = listImg;

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("slides");
    if (n > x.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
    }
    x[slideIndex-1].style.display = "block"; 
}

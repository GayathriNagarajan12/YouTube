function openNav() {
    document.getElementById("myside").style.width = "200px";
    document.getElementById("video").style.marginLeft = "200px";
    document.getElementById("myside").style.visibility = "hidden";
    document.getElementById("navbar").style.visibility = "visible";
    document.getElementById("category").style.marginLeft = "200px";
    document.getElementById("logo").style.visibility = "hidden";
    document.getElementById("hamburger").style.visibility = "hidden";
}

function closeNav() {
    document.getElementById("myside").style.width = "75px";
    document.getElementById("myside").style.visibility = "visible";
    document.getElementById("navbar").style.visibility = "hidden";
    document.getElementById("video").style.marginLeft = "70px";
    document.getElementById("category").style.marginLeft = "70px";
    document.getElementById("logo").style.visibility = "visible";
    document.getElementById("hamburger").style.visibility = "visible";
}

function showImage() {
    document.getElementById("overlayWatch").style.visibility = "visible";
    document.getElementById("overlayQueue").style.visibility = "visible";
}

function hideImage() {
    document.getElementById("overlayWatch").style.visibility = "hidden";
    document.getElementById("overlayQueue").style.visibility = "hidden";
}

function showText() {
    document.getElementById("textWatch").style.visibility = "visible";
}

function hideText() {
    document.getElementById("textWatch").style.visibility = "hidden";
}
function showTextQueue() {
    document.getElementById("textQueue").style.visibility = "visible";
}
function hideTextQueue() {
    document.getElementById("textQueue").style.visibility = "hidden";
}
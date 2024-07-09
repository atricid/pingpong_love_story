

function current_chapter(index) {
    var divId = "box" + index;
    var divElement = document.getElementById(divId);


    if (divElement) {
        divElement.style.backgroundColor = "#FB6F92";
    } else {
        console.log("not a valid chapter");
    }
}
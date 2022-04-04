for (var i = 0; i < document.getElementsByClassName("nabil-item").length; i++) {
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    if (i === 0) {
        document.getElementsByClassName("nabil-item")[i].style.borderTopLeftRadius = "10px";
        document.getElementsByClassName("nabil-item")[i].style.borderTopRightRadius = "10px";
    }
    if (i === document.getElementsByClassName("nabil-item").length - 1) {
        document.getElementsByClassName("nabil-item")[i].style.borderBottomRightRadius = "10px";
        document.getElementsByClassName("nabil-item")[i].style.borderBottomLeftRadius = "10px";
    }
    document.getElementsByClassName("nabil-item")[i].style.backgroundColor = "#" + randomColor;
    document.getElementsByClassName("nabil-item")[i].style.height = "calc(90vh / 4)";
}
for (var i = 0; i < document.getElementsByClassName("nabil-item").length; i++) {
    var randomColor = Math.floor(Math.random()*16777215).toString(16);

    document.getElementsByClassName("nabil-item")[i].style.backgroundColor = "#" + randomColor;
    document.getElementsByClassName("nabil-item")[i].style.height = "calc(100vh / " + document.getElementsByClassName("nabil-item").length + ")";
}
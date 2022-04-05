//handle when the number is pressed. It renders the number into #input element
function number(number) {
    // TODO: answer here
    if (document.getElementById("input").value === "0") {
        document.getElementById("input").value = number;
    } else {
        document.getElementById("input").value += number;
    }
}

//handle when the Del button, AC button and other operators (+, /, -, x) are pressed. It renders the operator into #input element
function operator(operator) {
    // TODO: answer here
    if (operator === "+") {
        document.getElementById("input").value += "+";
    } else if (operator === "-") {
        document.getElementById("input").value += "-";
    } else if (operator === "*") {
        document.getElementById("input").value += "*";
    } else if (operator === "/") {
        document.getElementById("input").value += "/";
    } else if (operator === "AC") {
        document.getElementById("input").value = "";
    } else if (operator === "Del") {
        document.getElementById("input").value = document.getElementById("input").value.slice(0, -1);
    } else if (operator === ".") {
        document.getElementById("input").value += ".";
    }
}

//handle when = button is pressed. It renders the result into #input element
function calculate() {
    // TODO: answer here
    try {
        document.getElementById("input").value = eval(document.getElementById("input").value);
    } catch (e) {
        document.getElementById("input").value = "0" + document.getElementById("input").value + "0";
        document.getElementById("input").value = eval(document.getElementById("input").value);
    }
}

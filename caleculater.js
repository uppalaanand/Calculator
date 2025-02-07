function appendValue(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function calculateResult() {
    try {
        document.getElementById("display").value = eval(document.getElementById("display").value);
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}

function toggleSign() {
    let display = document.getElementById("display");
    if (display.value.startsWith("-")) {
        display.value = display.value.substring(1);
    } else {
        display.value = "-" + display.value;
    }
}
const display = document.getElementById("display");
let memory = 0;


function appendToDisplay(input) {

    if (input === '.' && display.value.includes('.')) return;


    display.value += input;
}


function calculate() {
    try {
        let result = display.value;

        result = result.replace(/sqrt\((.*?)\)/g, (match, p1) => Math.sqrt(parseFloat(p1)));
        result = result.replace(/\^/g, '**');
        result = result.replace(/log\((.*?)\)/g, (match, p1) => Math.log10(parseFloat(p1)));
        result = result.replace(/ln\((.*?)\)/g, (match, p1) => Math.log(parseFloat(p1)));
        result = result.replace(/sin\((.*?)\)/g, (match, p1) => Math.sin(toRadians(parseFloat(p1))));
        result = result.replace(/cos\((.*?)\)/g, (match, p1) => Math.cos(toRadians(parseFloat(p1))));
        result = result.replace(/tan\((.*?)\)/g, (match, p1) => Math.tan(toRadians(parseFloat(p1))));

        result = new Function('return ' + result)();

        display.value = isNaN(result) || result === undefined ? "Error" : result;
    } catch (error) {
        display.value = "Error";
    }
}

function toRadians(degrees) {
    return degrees * Math.PI / 180;
}

function clearDisplay() {
    display.value = "";
}

function backspace() {
    display.value = display.value.slice(0, -1);
}

function storeMemory() {
    memory = parseFloat(display.value);
}

function clearMemory() {
    memory = 0;
}

function recallMemory() {
    display.value = memory;
}

var display = document.getElementById('display');

function clearDisplay() {
display.value = '';
}

function appendToDisplay(char) {
display.value += char;
}

function clearonepos(){
    display.value = display.value.slice(0,-1);
}
function calculate() {
try {
display.value = eval(display.value);
} catch (error) {
display.value = 'Error';
}
}
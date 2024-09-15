const display = document.getElementById("display");

function appendToDisplay(input) {
  display.value += input;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    // display.value = eval(display.value);
    display.value = "Hello, World!";
  } catch (error) {
    display.value = "Syntax Error";
  }
}

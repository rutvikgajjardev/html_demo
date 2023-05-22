// Get the result input element
var resultElement = document.getElementById('result');

// Function to append a value to the result input
function appendToResult(value) {
    resultElement.value += value;
}

// Function to clear the result input
function clearResult() {
    resultElement.value = '';
}

// Function to calculate the result
function calculateResult() {
    var expression = resultElement.value;

    try {
        var result = eval(expression); // Use the eval() function to evaluate the expression
        resultElement.value = result;
    } catch (error) {
        resultElement.value = 'Error';
    }
}

function appendToOutput(value) {
    document.getElementById('output').value += value;
}

function clearOutput() {
    document.getElementById('output').value = '';
}

function backspace() {
    const outputField = document.getElementById('output');
    outputField.value = outputField.value.slice(0, -1); 
}

function calculateResult() {
    try {
        const result = eval(document.getElementById('output').value);
        if (isNaN(result) || !isFinite(result)) {
            throw "Invalid input";
        }
        alert('Result: ' + result);
        clearOutput();
    } catch (error) {
        alert('Error: ' + error);
        clearOutput();
    }
}

function calculatePercentage() {
    try {
        const result = eval(document.getElementById('output').value) / 100;
        if (isNaN(result) || !isFinite(result)) {
            throw "Invalid input";
        }
        document.getElementById('output').value = result;
    } catch (error) {
        document.getElementById('output').value = 'Error';
    }
}

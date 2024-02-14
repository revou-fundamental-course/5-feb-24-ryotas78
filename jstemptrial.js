function convertToCelsius() {
    let fahrenheit = parseFloat(document.getElementById('inputFahrenheit').value);
    let celsius = (fahrenheit - 32) * (5/9);
    document.getElementById('inputCelsius').value = celsius.toFixed(2);
}

  function convertToFahrenheit() {
    let celsius = parseFloat(document.getElementById('inputCelsius').value);
    let fahrenheit = (celsius * (9/5)) + 32;
    document.getElementById('inputFahrenheit').value = fahrenheit.toFixed(2);
}
function convertTemperature() {
    const input = document.getElementById('temperatureInput').value;
    const unit = document.getElementById('unitSelect').value;
    const resultElement = document.getElementById('result');

    // Validate input is a number
    if (isNaN(input) || input === '') {
        resultElement.textContent = 'Please enter a valid number';
        return;
    }

    const temperature = parseFloat(input);

    let result;
    if (unit === 'Celsius') {
        result = (temperature * 9/5) + 32;
        resultElement.textContent = `${temperature}°C = ${result.toFixed(2)}°F`;
    } else if (unit === 'Fahrenheit') {
        result = (temperature - 32) * 5/9;
        resultElement.textContent = `${temperature}°F = ${result.toFixed(2)}°C`;
    }
}
















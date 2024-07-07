function convertTemperature() {
    const temperature = parseFloat(document.getElementById('temperature').value);
    const inputUnit = document.getElementById('inputUnit').value;
    const outputUnit = document.getElementById('outputUnit').value;
  
    if (isNaN(temperature)) {
      document.getElementById('result').textContent = 'Please enter a valid number';
      return;
    }
  
    let result;
  
    if (inputUnit === outputUnit) {
      result = temperature;
    } else if (inputUnit === 'celsius') {
      if (outputUnit === 'fahrenheit') {
        result = (temperature * 9/5) + 32;
      } else if (outputUnit === 'kelvin') {
        result = temperature + 273.15;
      }
    } else if (inputUnit === 'fahrenheit') {
      if (outputUnit === 'celsius') {
        result = (temperature - 32) * 5/9;
      } else if (outputUnit === 'kelvin') {
        result = (temperature - 32) * 5/9 + 273.15;
      }
    } else if (inputUnit === 'kelvin') {
      if (outputUnit === 'celsius') {
        result = temperature - 273.15;
      } else if (outputUnit === 'fahrenheit') {
        result = (temperature - 273.15) * 9/5 + 32;
      }
    }
  
    document.getElementById('result').textContent = `Result: ${result.toFixed(2)} ${outputUnit.charAt(0).toUpperCase() + outputUnit.slice(1)}`;
  }
  
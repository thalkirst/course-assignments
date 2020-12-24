function calculateCM() {

    let feetValue = document.querySelector('.feet');
    let inchValue = document.querySelector('.inches');
    const results = document.querySelector('.results');

    feet = parseFloat(feetValue.value); 
    inches = parseFloat(inchValue.value);

    if (isNaN(feet) || isNaN(inches)) {
        results.textContent = "Please enter valid values";
    } else if (feet < 0) {
        results.textContent = "Feet should be over 0";
    } else if (inches < 0 || inches >= 12) {
        results.textContent = "Inch should be between 0 and 12";
    } else {
        let resultCM = ((feet * 12) + inches) * 2.54;
        resultCM = resultCM.toFixed(2);
        results.textContent = resultCM + ' cm';
    }
}

const button = document.querySelector('.button');
button.addEventListener('click', calculateCM);


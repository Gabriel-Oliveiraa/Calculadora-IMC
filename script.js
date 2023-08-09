const calculateButton = document.getElementById('calculateButton');
const weightInput = document.getElementById('weight');
const heightInput = document.getElementById('height');
const resultElement = document.getElementById('result');

calculateButton.addEventListener('click', calculateIMC);

function calculateIMC() {
    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value);

    if (isNaN(weight) || isNaN(height) || height <= 0 || weight <= 0) {
        resultElement.textContent = "Por favor digite uma massa e uma altura válida!";
        resultElement.classList.remove('result-healthy', 'result-risky', 'result-severe', 'result-very-severe');
        return;
    }

    const imc = weight / (height * height);
    let classification = "";

    if (imc < 16) {
        classification = "Magreza Grau 3";
    } else if (imc >= 16 && imc < 17) {
        classification = "Magreza Grau 2";
    } else if (imc >= 17 && imc < 18.5) {
        classification = "Magreza Grau 1";
    } else if (imc >= 18.5 && imc < 25) {
        classification = "Normal";
    } else if (imc >= 25 && imc < 30) {
        classification = "Sobrepeso";
    } else if (imc >= 30 && imc < 35) {
        classification = "Obesidade Grau 1";
    } else if (imc >= 35 && imc < 40) {
        classification = "Obesidade Grau 2";
    } else {
        classification = "Obesidade Muito Severa";
    }

    resultElement.textContent = `Seu IMC: ${imc.toFixed(2)} - Classificação: ${classification}`;
    if (classification === "Normal" || classification === "Magreza Grau 3") {
        resultElement.classList.add('result-healthy');
    } else if (classification === "Obesidade Muito Severa" || classification === "Obesidade Grau 2") {
        resultElement.classList.add('result-very-severe');
    } else {
        resultElement.classList.add('result-risky');
    }
}
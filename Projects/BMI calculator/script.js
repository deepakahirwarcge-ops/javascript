// const form = document.querySelector("form");

// form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     const weight = document.querySelector("#weight").value;
//     const height = document.querySelector("#height").value;
    
//     if (!height || isNaN(height) || height <= 0) {
//         alert("Please enter a valid height in centimeters.");
//         return;
//     }
//     else if (!weight || isNaN(weight) || weight <= 0) {
//         alert("Please enter a valid weight in kilograms.");
//         return;
//     }
//     else {
//         const bmi = (weight / ((height / 100) ** 2)).toFixed(2);
//         if (bmi < 18.5) {
//             document.querySelector("#results").textContent = `Your BMI is ${bmi} (Underweight)`;
//         }
//         else if (bmi >= 18.5 && bmi < 24.9) {
//             document.querySelector("#results").textContent = `Your BMI is ${bmi} (Normal weight)`;
//         }
//         else if (bmi >= 25 && bmi < 29.9) {
//             document.querySelector("#results").textContent = `Your BMI is ${bmi} (Overweight)`;
//         }
//         else {
//             document.querySelector("#results").textContent = `Your BMI is ${bmi} (Obese)`;
//         }
//     }
// });
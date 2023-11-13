function calculateBMI() {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);
  
    if (isNaN(weight)  || weight <= 0 || isNaN(height) || height <= 0) {
      document.getElementById("result").textContent = "Enter Height and Weight.";
      return;
    }
  
    const bmi = weight / (height * height);
    const bmiResult = bmi.toFixed(2);
  
    let interpretation = "";
  
    if (bmi < 18.5) {
      interpretation = "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
      interpretation = "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
      interpretation = "Overweight";
    } else {
      interpretation = "Obese";
    }
  
    document.getElementById("result").textContent = ` BMI is: ${bmiResult}. You are ${interpretation}.`;
  }
  
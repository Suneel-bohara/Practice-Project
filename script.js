// Function to calculate BMI
function calculateBMI() {
    // Get input values
    let weight = document.getElementById('weight').value;
    let height = document.getElementById('height').value;
  
  
    // Convert height from cm to meters
    height = height / 100;
  
    // Validate inputs
    if (weight === "" || height === "" || weight <= 0 || height <= 0) {
        document.getElementById('result').innerHTML = "❌ Please enter valid weight and height!";
        return;
    }
  
    // Calculate BMI
    let bmi = weight / (height * height);
    bmi = bmi.toFixed(2); // Round to 2 decimal places
  
    // Determine BMI category
    let category;
    if (bmi < 18.5) {
        category = "Underweight 🟡";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = "Normal Weight ✅";
    } else if (bmi >= 25 && bmi < 29.9) {
        category = "Overweight ⚠️";
    } else {
        category = "Obese ❌";
    }
  
    // Display result
    document.getElementById('result').innerHTML = `Your BMI is <b>'${bmi}'</b> <br> You belongs to this category <b>'${category}'</b>`;
  }
  
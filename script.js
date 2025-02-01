// Function to calculate BMI
function calculateBMI() {
    // Get input values
    let weight = document.getElementById('weight').value;
    let height = document.getElementById('height').value;
  
  
    // Convert height from cm to meters
    height = height * 0.3048;
  
    // Validate inputs
    if (weight === "" || height === "" || weight <= 0 || height <= 0) {
        document.getElementById('result').innerHTML = "🧠 दिमाग छैन? Valid data राखम न हो।";
        return;
    }
  
    // Calculate BMI
    let bmi = weight / (height * height);
    bmi = bmi.toFixed(2); // Round to 2 decimal places
  
    // Determine BMI category
    let category;
    if (bmi < 18.5) {
        category = " भयो दाइ छोड्दिम, लास्टै दुब्लो पातलो छ। 🕴️";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = "ठिक छ! ठिक छ! ✅";
    } else if (bmi >= 25 && bmi < 29.9) {
        category = "अरुको लागि पनि छोड्दिम न हो खानेकुरा !!🫃🏻";
    } else {
        category = "कति मोटो हो ? बाँच्नकै लागि खाको रहेछ। 😋🍽️";
    }
  
    // Display result
    document.getElementById('result').innerHTML = `Your BMI is <b>'${bmi}'</b> <br> You belongs to this category <b>'${category}'</b>`;
  }
  

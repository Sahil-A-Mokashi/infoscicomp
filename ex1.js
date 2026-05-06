// Function to check baggage weight
let check = () => {
    let weight = parseInt(document.getElementById("weight").value);
  
    // Check if input is valid
    if (isNaN(weight)) {
      alert("Please enter a valid baggage weight");
      return;
    }
  
    alert("Checking Baggage weight: " + weight + "kg");
  
    // If overweight (>15kg)
    if (weight > 15) {
      alert("Baggage is overweight!");
  
      // Show remove weight input and button
      document.getElementById("removed").style.display = "block";
      document.getElementById("remB").style.display = "block";
    } else {
      alert("Baggage is within limit. OK to proceed!");
    }
  };
  

  // Function to remove weight
let remove = () => {
    let weight = parseInt(document.getElementById("weight").value);
    let removedWeight = parseInt(document.getElementById("removed").value);
  
    // Validate input
    if (isNaN(removedWeight)) {
      alert("Please enter weight to remove");
      return;
    }
  
    let finalWeight = weight - removedWeight;
  
    alert("Removing weight: " + removedWeight + "kg");
    alert("Updated baggage weight: " + finalWeight + "kg");
  
    // Check final weight
    if (finalWeight <= 15) {
      alert("Baggage weight is now OK to proceed!");
    } else {
      alert("Still overweight! Remove more items.");
    }
  };
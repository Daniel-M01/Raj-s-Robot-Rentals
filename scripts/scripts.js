// JavaScript code implementation for Raj's Robot Rentals

//create variables to hold the values for modelName and duration
let modelName = "XYZ"; 
let duration = 0;      

/****************** helper function ******************/
// Function to recalculate the cost
function recalculate() {
    // Get the calculated-cost span element
    let costLabel = document.getElementById("calculated-cost");

    // Determine the cost based on the modelName
    let cost = 0;
    if (modelName === "XYZ") {
        cost = duration * 100;
    } else if (modelName === "CPRG") {
        cost = duration * 213;
    }

    // Update the innerHTML of the calculated-cost span element
    costLabel.innerHTML = cost.toFixed(2);
}

/****************** model button logic ******************/

// Get the "Switch Model" 
let modelButton = document.getElementById("model-button");

// Function to change the model
function changeModel() {
    // Get the model-text span element
    let modelText = document.getElementById("model-text");

    // Toggle the modelName and update the display text
    if (modelName === "XYZ") {
        modelName = "CPRG";
        modelText.innerHTML = "Model CPRG";
    } else {
        modelName = "XYZ";
        modelText.innerHTML = "Model XYZ";
    }

    // Recalculate the total cost
    recalculate();
}

// Attach the function to the pseudo-button's click event
modelButton.addEventListener("click", changeModel);

/****************** duration button logic ******************/


let durationButton = document.getElementById("duration-button");

// Function to change the duration
function changeDuration() {
    // Get the duration-text span element
    let durationText = document.getElementById("duration-text");

    // output to the user to enter the new duration and save 
    let newDuration = prompt("Enter the new duration (in days):");

    // Ensure the input is valid and not a non-negative digit
    newDuration = parseInt(newDuration);
    if (!isNaN(newDuration) && newDuration >= 0) {
        duration = newDuration;
        durationText.innerHTML = duration; // Update the display text
        recalculate(); // Recalculate the total cost
    } else {
        alert("Invalid input. Please enter a valid number.");
    }
}

// Attach the function to the pseudo-button's click event
durationButton.addEventListener("click", changeDuration);

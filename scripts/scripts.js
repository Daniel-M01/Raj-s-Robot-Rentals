/****************** YOUR NAME: 

The instructions describe the missing logic that is needed; you will translate these into JavaScript in the places indicated.

You are encouraged to use the provided naming convention for ease of review.

*/

/****************** create variables ******************/
/* create variables to hold the values for modelName and duration */

// INSERT YOUR CODE HERE





/****************** helper function ******************/
/* create a function called recalculate() which will
    - create a variable to represent the calculated-cost span element. That will look something like:
        // let costLabel = document.getElementById("calculated-cost");
    - check the value of the modelName variable, and use that to calculate the new total cost:
        e.g. if modelName is currently "XYZ", duration * 100 gives us the new total cost.
        if modelName is currently "CPRG", duration * 213 gives us the new total cost.
    - set the value of the calculated-cost element's innerHTML to this new value
*/

// INSERT YOUR CODE HERE






/****************** model button logic ******************/

/* 
- first, create a variable to represent the "Switch Model" pseudo-button (hint: can use getElementById)
- second, create a function called changeModel() which checks the value of the model name variable. This function will:
    - create a variable to represent the model-text span element
    - if modelName is currently "XYZ", change the value of modelName to "CPRG", and change the innerHTML of the model-text span element to "Model CPRG"
    - if modelName is currently "CPRG", change the value of modelName to "XYZ", and change the innerHTML of the model-text span element to "Model XYZ"
    - then, recalculate() the total cost.
- finally, uncomment the following line of JavaScript to have this function run automatically whenever the pseudo-button is clicked: */
    // modelButton.addEventListener("click", changeModel);

// INSERT YOUR CODE HERE







/****************** duration button logic ******************/
/*  - first, create a variable to represent the "Change Duration" pseudo-button.
    - then, create a function called changeDuration() that will
        - create a variable to represent the duration-text span element
        - prompt() the user for a new duration
        - save the result of the prompt() to the duration variable
        - change the innerHTML of the duration-text span element to this new value
        - recalculate() the total cost/
    - finally, attach this function to the "Change Duration" pseudo-button, so it runs whenever the button is clicked.
*/

// INSERT YOUR CODE HERE



/****************** YOUR NAME: ******************/
// JavaScript code implementation for Raj's Robot Rentals

/****************** create variables ******************/
/* create variables to hold the values for modelName and duration */
let modelName = "XYZ"; // Default model name
let duration = 0;      // Default duration in days

/****************** helper function ******************/
/* Function to recalculate the cost */
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

// Get the "Switch Model" pseudo-button
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

// Get the "Change Duration" pseudo-button
let durationButton = document.getElementById("duration-button");

// Function to change the duration
function changeDuration() {
    // Get the duration-text span element
    let durationText = document.getElementById("duration-text");

    // Prompt the user for a new duration and save the result
    let newDuration = prompt("Enter the new duration (in days):");

    // Ensure the input is valid (a non-negative integer)
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

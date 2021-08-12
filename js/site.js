// get the values from the two <input> tags (controller function)
function getValues( ) {
    // get values from the <input> elements
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;

    alert("The Start Value:" + startValue);

    // Parse the <input> entries from strings to integer values.
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    // call the function generateNumbers
    let numbers = generateNumbers(startValue, endValue);

    // call the function displayNumbers
}

// generate the numbers from the startValue to the endValue (logic function)
function generateNumbers(sValue, eValue) {
    let numbers = [];

    //we want to generate all numbers from startValue to endValue
    //loop that takes the sValue and increments it up step-by-step to the eValue.
    for(let index = sValue; index <= eValue; index++){

        //this will execute in a loop until index is greater than eValue.
        numbers.push(index);
    }

    return numbers;
}

// display the numbers and mark the even numbers bold (display function)
function displayNumbers( ) {

}
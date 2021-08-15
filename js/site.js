let numberSet = [];

function getValues() {  
    // get values from the <input> elements
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;

    // Parse the <input> entries from strings to integer values.
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    if (Number.isInteger(startValue) && Number.isInteger(endValue)) {

        numberSet = generateNumbers(startValue, endValue);
        displayNumbers(numberSet);

    } else {
        alert("You must enter integers");
    }

    // call the function displayNumbers
      
}
// generate the numbers from the startValue to the endValue (logic function)
function generateNumbers(sValue, eValue) {

    //generate all integers from startValue to endValue
    for(let index = sValue; index <= eValue; index++){

        numberSet.push(index);
    }

    return numberSet;
}

// display the numbers and mark the even numbers bold (display function)
function displayNumbers(numberSet) {

    let templateRows = "";

    for (index = 0; index < numberSet.length; index++) {

        let number = numberSet[index];

        let className = "";

        if(number % 2 == 0){
            className = "even"
        } else {
            className = "odd"
        }

        templateRows += `<tr><td class="${className}">${number}</td><tr>`;

        document.getElementById("results").innerHTML = templateRows;
    }  
}
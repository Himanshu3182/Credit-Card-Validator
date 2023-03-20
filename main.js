//  Code for html
function userValue() {
    let userInput = document.getElementById("CCnumber").value;
    if (checkInp(userInput)) {
        let userArray = numberToArray(Number(userInput));

        if (validateCred(userArray) === true) {
            document.getElementById('output').innerHTML = (`Your CC no ${userInput} is valid.`);
        } else {
            document.getElementById('output').innerHTML = (`Your CC no ${userInput} is invalid.`);
        }
    }
}

// function to check if CC no is valid or not, also called Luhn Algorithm
function validateCred(numArr) {
    let total = 0;
    for (let i = numArr.length - 1; i >= 0; i--) {
        let currValue = numArr[i]
        if ((numArr.length - 1 - i) % 2 === 1) {
            currValue *= 2;
            if (currValue > 9) {
                currValue -= 9;
            }
        }
        total += currValue;
    }

    return total % 10 === 0

}

// function to convert input string to number array
function numberToArray(number) {
    let array = number.toString().split("") //stringify the number, then make each digit an item in an array
    return array.map(x => parseInt(x)) //convert all the items back into numbers
}

// function to check if the input is valid or not
function checkInp(inputNumber) {
    let input = inputNumber.toString().trim();
    console.log(input.length);
    if (input.length > 0) {
        var x = parseInt(Number(input))
        if (isNaN(x)) {
            alert("Input should contain only numbers");
            return false;
        }
    } else {
        alert("Input should not be empty");
        return false;
    }
    return true
}

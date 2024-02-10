// Define character sets
const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet = "abcdefghijklmnopqrstuvwxyz";
const numberSet = "1234567890";
const symbolSet = "~!@#$%^&*()_+/";

// Selectors for HTML elements
const passBox = document.getElementById("pass-box");
const totalChar = document.getElementById("total-char");
const upperInput = document.getElementById("upper-case");
const lowerInput = document.getElementById("lower-case");
const numberInput = document.getElementById("numbers");
const symbolInput = document.getElementById("symbols");

// Function to get a random character from a given dataSet
const getRandomData = (dataSet) => {
    return dataSet[Math.floor(Math.random() * dataSet.length)];
}

// Function to generate a password based on user input
const generatePassword = (password = "") => {
    // Add characters based on user selections
    if (upperInput.checked) {
        password += getRandomData(upperSet);
    }
    if (lowerInput.checked) {
        password += getRandomData(lowerSet);
    }
    if (numberInput.checked) {
        password += getRandomData(numberSet);
    }
    if (symbolInput.checked) {
        password += getRandomData(symbolSet);
    }

    // Recursively call the function until the desired length is reached
    if (password.length < totalChar.value) {
        return generatePassword(password);
    }

    // Display the generated password in the HTML element after truncating
    passBox.innerText = truncateString(password, totalChar.value);
}

// Initial password generation
generatePassword();

// Event listener for button click to generate a new password
document.getElementById("btn").addEventListener(
    "click",
    function () {
        generatePassword();
    }
);

// Function to truncate a string to a specified length
function truncateString(str, num) {
    if (str.length > num) {
        let subStr = str.substring(0, num);
        return subStr;
    } else {
        return str;
    }
}

// Question 01 

var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");

var fullName = firstName + " " + lastName;

document.write("Hello, " + fullName + "! Welcome");

document.write("<br>" + "<br>");

// Question 02

var favoriteModel = prompt("Enter your favorite mobile phone model:")

var inputLength = favoriteModel.length

document.write("My favorite mobile phone is: " + favoriteModel);
document.write("<br>");
document.write("The lenght of My input is: " + inputLength);

document.write("<br>" + "<br>");


// Question 03

var word = "Pakistani";

var letterIndex = word.indexOf("n");

document.write("String: " + word)
document.write("<br>");
document.write("Index of 'n': " + letterIndex);

document.write("<br>" + "<br>");


// Question 04

var words = "Hello World";

var lastIndex = words.lastIndexOf("l");

document.write("String: " + words)
document.write("<br>");
document.write("Index of 'l': " + lastIndex);

document.write("<br>" + "<br>");


// Question 05

var word = "Pakistani";

var index3 = word.charAt(3);

document.write("String: " + word)
document.write("<br>");
document.write("Character at 3rd index: " + index3);

document.write("<br>" + "<br>");

// Question 06

var firstName = prompt("Please enter your first name:");
var lastName = prompt("Please enter your last name:");

var fullName = firstName.concat(" ", lastName);

document.write("Hello, " + fullName + "! Welcome");

document.write("<br>" + "<br>");


// Question 07

var city = "Hyderabad";

var cityReplace = city.replace("Hyderabad", "Islamabad");

document.write("city: " + city);
document.write("<br>");
document.write("After Replace: " + cityReplace);

document.write("<br>" + "<br>");


// Question 08

var message = "Ali and Sami are best friends. They play cricket and football together.";

var messageReplace = message.replace(/and/g, "&");

document.write("message: " + message);
document.write("<br>");
document.write("After Replace: " + messageReplace);

document.write("<br>" + "<br>");

// Question 09

var string = "472";

var number = Number(string);

document.write("Value: " + string);
document.write("<br>");
document.write("Type: " + typeof string);
document.write("<br>");
document.write("Value: " + number);
document.write("<br>");
document.write("Type: " + typeof number);

document.write("<br>" + "<br>");


// Question 10

var userInput = prompt("Enter your favorite Dry Fruits:");

document.write("User Input: " + userInput);
document.write("<br>");
document.write("Uper Case: " + userInput.toUpperCase());

document.write("<br>" + "<br>");

// Question 11


var userChoice = prompt("Enter any word:");

var pro1 = userChoice.slice(0, 1).toUpperCase();
var pro2 = userChoice.slice(1).toLowerCase();
var userWord = pro1 + pro2;

document.write("User Input: " + userChoice);
document.write("<br>");
document.write("Title Case: " + userWord);

document.write("<br>" + "<br>");


// Question 12

var num = 35.36;

var numStr = num.toString();

var result = numStr.replace('.', '');

document.write("Number: " + num);
document.write("<br>");
document.write("Result: " + result);

document.write("<br>" + "<br>");

// Question 13

function validateUsername() {
  var invalidChars = ['@', '.', ',', '!'];
  var isValid = false;
  var username;

  while (!isValid) {
    username = prompt('Enter your username:');

    if (username === null) {
      alert('You cancelled the input!');
      return;
    }

    isValid = true;

    for (var i = 0; i < invalidChars.length; i++) {
      if (username.includes(invalidChars[i])) {
        alert('Invalid username. Username cannot contain special symbols: @, ., ,, or !');
        isValid = false;
        break;
      }
    }
  }

  alert('Username is valid: ' + username);
}

validateUsername();


// Question 14

var A = ["cake", "apple pie", "cookie", "chips", "patties"];

var userInput = prompt("Enter an item to search for:").toLowerCase();

var found = false;
for (var i = 0; i < A.length; i++) {
  if (A[i].toLowerCase() === userInput) {
    found = true;
    break;
  }
}
if (found) {
  alert(userInput + " is available in the list.");
} else {
  alert(userInput + " is not available in the list.");
}


// Question 15

// a-z = 97 - 122
// A-Z = 65 -90
// 0-9 = 48 - 57

// Alina.153
var password = prompt("Enter a password:")
if (password.length < 6) {
  alert("Password must be atleast 6 characters long!")
} else {
  if (password.charCodeAt(0) >= 48 && password.charCodeAt(0) <= 57) {
    alert("Password must not start from number")
  } else {
    var hasAlphabet = false;
    var hasNumber = false;
    for (var i = 0; i < password.length; i++) {
      var charCode = password.charCodeAt(i)
      if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
        hasAlphabet = true;
      } else if (charCode >= 48 && charCode <= 57) {
        hasNumber = true;
      }
    }
    if (hasAlphabet && hasNumber) {
      alert("Valid Password")
    } else {
      alert("Password must contain both alphabet and numbers!")
    }
  }
}

// Question 16

var university = "University of Karachi";

var array = university.split('');

for (var i = 0; i < array.length; i++) {
  document.write(array[i] + "<br>");
}


// Question 17

document.getElementById("showButton").onclick = function () {
  var userInput = document.getElementById("userInput").value;
  if (userInput.length > 0) {
    var lastCharacter = userInput.charAt(userInput.length - 1);
    document.getElementById("result").innerHTML = "The last character is: " + lastCharacter;
  } else {
    document.getElementById("result").innerHTML = "Please enter some text.";
  }
};


// Question 18

var str = "The quick brown fox jumps over the lazy dog";

var words = str.toLowerCase().split(" ");

var count = 0;

for (var i = 0; i < words.length; i++) {
  if (words[i] === "the") {
    count++;
  }
}

document.write("The word 'the' occurs " + count + " times in the string.");



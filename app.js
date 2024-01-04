// Chapter 1 (Alerts) 


// 1. Alert these following (individually):  
// I. First Name 
// II. Last Name 
// III. Email
// IV. Phone Number 
// V. Password 


var firstName = prompt("Enter your first name","Sharjeel");
var lastName  = prompt("Enter your last name","Hassan");
var email = prompt("Enter your email", "xyz@gmail.com");
var phoneNumber = prompt("Enter phone number", "0xxx-xxxx15");
var paswrd = prompt("Enter your password","xxxx");

alert("I.  "+firstName+"\n"+"II.  "+lastName+"\n"+"III.  "+email+"\n"+"IV.  "+phoneNumber+"\n"+"v.  "+paswrd);

// 2. Correct this statement: alert"You're learning JavaScript!"; 
alert("You're learning JavaScript!"); 

// 3. Code an alert statement displaying any message you like. 
alert("You're learning JavaScript! from Sir Basit and team"); 


// Chapter 2 (Variables for string) 

// 1. Declare any variable in the camelCase format. 
var pakistanJawan;

// 2. Declare a variable of your choice without defining it. Then, in a second statement, assign it a string of your choice. 

var jawanPakistan;
jawanPakistan = "SAIM";


// 3. Declare the variable teamName and Alert your Team name. 

var teamName = "Karachi Eleven";
alert(teamName);

// 4. This statement has already been coded. var bestMan = "Charlie"; Assign the variable a new string. 

var bestMan = "Charlie";
bestMan = "Uncle";
console.log(bestMan);

// Chapter 3 (Variables for numbers) 

// 1. Declare a variable “caseQty” 

var caseQty = 4;

// 2. Assign to the variable caseQty, which has already been declared, the value 144. 
caseQty = 144;


// 3. Rewrite this statement so the variable can be used in a math operation. var num = "9"; 
var num  = 9;

// 4. In one statement declare a variable. In a second statement assign it the sum of 2 numbers. 
var sum = 4 + 4;
console.log(sum);

// 5. What is the value of orderTotal? 
var merchTotal = 100; var shippingCharge = 10; var orderTotal = merchTotal + shippingCharge; 

// Try it yourself. 
// orderTotal = 110;
console.log(orderTotal);


// 6. In the first statement declare a variable and assign it a number. In the second statement, change the value of the variable by adding it together with a number. 

var number = 45;
number = 55 + number;
console.log(number);

// Chapter 4 (Variable names Legal and Illegal) 


// 1. Correct this statement. var product cost = 3.45; 
var productCost = 3.45;

// 2. Rewrite this using camelCase. var Nameofband; 
var nameOfBand;

// 3. In a single statement declare a legally-named variable and assign a number to it. 
var dumKham  = 69;

// 4. Declare a variable that is a combination of your first and last names. Use camelCase. 
var sharjeelHassan;

// 5. List the legal and Illegal Variables. 
// legal variables
var sum12; 
var tmDoGo_$;
var _$abc12;

// illegal Names
// var 12aaBc; can't start with number
// var as%!; can't have special character other than _ and $.
// var if; can't use reserved JS keywords


// Chapter 5 (Math Expression I) 
// 1. What is the name and symbol of the arithmetic operator that gives you the remainder when one number is divided by another? 
// modolus operator %

// 2. What is the value of num? 
// var num = 20 % 6; 
// num = 2;
console.log(num);


// 3. In a single statement, declare the variable largeNum and assign it the result of 1,000 multiplied by 2,000. 
var largeNum = 1000*2000;
console.log(largeNum);

// 4. Assign to a variable the value represented by one variable subtracted from the value represented by another variable 
var tt = 15;
var btoa = 5;
var jkRowling = tt - btoa;
console.log(jkRowling);

// 5. Assign to a variable the remainder when one number is divided by another. The variable hasn't been declared beforehand. Make up the variable name. 
var remain = 15%5;
console.log(remain);

// 6. Code an alert that displays the result of a multiplication on 2  numbers. 
alert(largeNum);

// Chapter 6 (Math Expression II) 
// 1. Code a short form of x = x + 1; Use either of the two legal expressions. 
// x++ and ++x

// 2. If x has a value of 100, what is the fastest way to reduce it to 99 with a math expression? 
var x = 100;
var y = --x;
console.log(y);

// 3. var x = 50; var y = x++;  What is the value of y? 
var x = 50;
var y = x++;
// y =50;
console.log(y);

// 4. 
var y = 50; 
var z = --y; 
// What is the value of z? 
// z= 49;
console.log(z);

// 5. In a single statement, decrement num and assign its original value to newNum. 
var numOrig = 51;
var decNumber = --numOrig;
var newNum = numOrig;
console.log(newNum, "New value");

// 6. In a single statement add 1 to a variable and assign its original  value to another variable. 


// 7.  Assign a number value to a variable.  Increment the variable. Display the new value in an alert 
var variable1 = 34;
var newVariable = ++variable1;
alert(newVariable);

// Chapter 7 (Math Expression III) 

// 1. 
var calculatedNum = 2 + (2 * 6); 
// 14
console.log(calculatedNum);

// What is the value of calculatedNum? 
// 2. 
var calculatedNum = (2 + 2) * 6; 
// 24
// What is the value of calculatedNum? 
console.log(calculatedNum);

// 3. var calculatedNum = (2 + 2) * (4 + 2); 
// 24
// What is the value of calculatedNum? 
console.log(calculatedNum);

// 4. var calculatedNum = ((2 + 2) * 4) + 2; 

// What is the value of calculatedNum? 
console.log(calculatedNum);
// Note: Try all the above equations yourself. 

// 5. Write a statement that assigns to cost the result of 2 + 2 * 4 + 10, 
// clarified with parentheses, producing 56. 
console.log((2 + 2 )* (4 + 10));

// 6. Write a statement that assigns to units the result of 2 + 2 * 4 + 10, 
// clarified with parentheses, producing 20. 
console.log(2 + (2 * 4) + 10);
// 7. Write a statement that assigns to pressure the result of 4 / 2 * 4, 
// clarified with parentheses, producing 5.

console.log(4 / (2 * 4));
// Chapter 8 (Concatenating Text Strings)

// 1. var num = "2" + "2"; 
// What is the value of num? Include quotation marks.
// 22

// 2. message = ("Hello," + "Dolly"); 
// What is the value of message? (Include the quotation marks.) 
// Alert the statement
var message = "Hello" + "Dolly";
alert(message);

// 3. alert("33" + 3); 
// What message displays in the alert box? 
alert("33" + 3); 

// 4. Write an alert that displays the concatenation of the two parts of "Pakistan Zindabad". 
alert("Pakistan "+"zindabad");

// 5. Write a statement that assigns to a variable the concatenation of a string with a number 
var ch9 = "Number " + 45;
console.log(ch9);

// 6. Assign strings to two variables. Then concatenate them and assign the result to a third variable. 
var vari1 = "Hello";
var vari2 = "World";
var vari3 = vari1 + vari2;
console.log(vari3);

// Chapter 9 (Prompts) 

// 1. Code a prompt with the message "Enter first name". The user's 
// response is assigned to firstName. 
var firstName = prompt("Enter first name");
console.log(firstName);


// 2. Code a prompt with the message "Country?" and the default answer "China". The user's response is assigned to country. 
var country = prompt("Country ?", "China");
console.log(country);

// 3. Correct this statement 
// var yourName = prompt(Enter Your Name"); 
 var yourName = prompt("Enter Your Name");

// 4. Code a prompt that specifies a string as the message Include a default input.

var string = prompt("Input your thoughts", "Sad");


// 5. Assign strings to two variables. Code a prompt specifying the first variable as the message and the second variable as the default response. Assign the user's response to a third variable. 

var string1 = "Pakistan election date ?";
var ansString1 = "Feb 2024";
var string2 = prompt(string1, ansString1);

// 6. Display a prompt, including both a message and a default response. Display the user's response in an alert. 
var alert9211 = prompt("Kiya likhon", "kuch bhi yr");
alert(alert9211);

// Chapter 10 (if statments) 


// 1. var city = "Karachi" 
// if (city = "Karachi") { 
// console.log("The City OF Lights") 
// Correct the above statement: 
// Also try this statement by yourself 


// 2. This is the first line of an if statement: 
// if (x === y) { 
// Complete the statement. If the condition is true, display a box 
// that asks the user value of z? and assign it to another variable. 


// 3. Code an if statement that tests if ZipCode is "10010" so, Alert 
// that "Karachi". if not then alert ("Please write correct city") 



// 4. Code an if statement. Test whether a variable has a particular 
// numerical value. If so, assign a new value to that variable, as in 
// x = 1; 


// Chapter 11 (Comparison  Operators) 

// 1. Code the first line of an if statement that tests whether one 
// variable is unequal to another. (Use !) 


// 2. Code the first line of an if statement that tests whether the value represented by a variable is greater than or equal to the 
// value represented by another variable. 


// 3. Code an if statement. Test whether a variable is unequal to a particular number. If so, assign a number to that variable. 



// 4. Code an if statement that tests whether a number is unequal to a different number. If the condition is true (it will be), display a congratulations alert. 


// 5. Code a prompt asking for your first name. Code an if statement that tests whether the name you entered is unequal to another name. If the condition is true (it will be), display an alert that says "No match" 



// Chapter 12 (if…else and else if statements) 


// 1. Code an if statement that tests whether the value represented by a variable is greater than or equal to the value represented by another variable. If so, display an alert. If not, display a different alert. 


// 2. Write a program using if else and else if statement which take marks from user. And the program will calculate your percentage and  give you grade A/C to Your percentage. (MARKSHEET) 



// 3. This is the if statement that begins the code. 
// if (a === 10) { 
// alert("a is 10"); 
// } 
// If a isn't 10, display an alert that says The correct value of a is 
// ____ 
// Note: Try this by yourself 



// 4. Prompt the user to enter a city. 
// If the city is Karachi, display an alert acknowledging it is Karachi. 
// If not, check to see if it's Lahore. 
// If it is, display an alert acknowledging it's Lahore. 
// Otherwise, display a different alert. 



// Chapter 13 (Testing sets of conditions) 


// 1. Code the first line of an if statement that tests whether both are 
// true: a has the same value as b and c has the same value as d. 


// 2. Code the first line of an if statement that tests whether either or 
// both are true: a has the same value as b or c doesn't have the 
// same value as d. 



// 3. Code the first line of an if statement that tests whether  
// I. name is either "Hamza" or "Arsalan". 
// II. age is Less than 60. 


// 4. Declare two variables and assign them number values. 
// If the first variable is less than the second variable or greater than 
// the second variable, display an alert. 



// 5. Declare 2 variables. Assign one of them your first name and the other one your last name. 
// Code 2 prompts, asking for your first and your last name. 
// If your answers match the two variables, display an alert. 




// Chapter 14 (If statements nested) 

// 1. Code an if statement enclosing a nested if. If password is not 
// empty, then check if password is not greater than 5  , then display 
// an alert that says "Password must be greater than 5" if greater 
// than 5 then Alert "OK". 


// 2. Try this statement by yourself 
// if (a === 1) { 
// if (c === "Max") { 
// alert("OK"); 
// } 
// } 


// 3. Code the first line of an if statement that avoids the nesting above 
// by testing for multiple conditions. 
// if (a === 1) { 
// if (c === "Max") { 
// alert("OK"); 
// } 
// } 


// 4. Declare two variables and assign them the same number value. 
// Test two conditions, using nested if statements. Test whether the 
// first variable equals the second variable and also whether it is less 
// than or equal to the second variable. If the test passes—and it 
// will—display an alert message. 



// Chapter 15 (Array I) 


// 1. Declare an empty array. 


// 2. Code an array with 1 string element 


// 3. var alphabet = ["h","i","j","k"]. Now print the letter “j” in alert 
// using array index 


// 4. var alphabet=["h","i","j","k", “l”,”m”, “n”, “o”]. Find the total 
// length of array. 


// 5. Declare an array with one element and Add a second element 
// with index in array. Create an alert whose message is the new 
// element. 


// Chapter 16 (Array II) 


// 1. Code an array with 1 string element. 
// Add an additional element to the array using push. 
// Create an alert whose message is the last element. 


// 2. var Alphabet=["h","i","j","k"] 
// Remove the last element from the array Alphabet. 


// 3. var Alphabet=["h","i","j","k"] 
// Add a new element, a number, to the end of an array. 


// Chapter 16 (Array III) 


// 1. var sizes = ["S", "M", "XL", "XXL", "XXXL"]. 
// Remove the first element of an array. 


// 2. var sizes = ["S", "M", "XL", "XXL", "XXXL"]. 
// Add three number elements to the beginning of an array. 


// 3. Declare an array with one element. 
// Add a second element to the beginning of the array. 
// Create an alert whose message is the new first element. 


// 4. var sizes = ["S", "M", "XL", "XXL", "XXXL"]. 
// Insert "L" into the array between "M" and "XL". 


// 5. var sizes = ["S", "M", "XL", "XXL", "XXXL"]. 
// Copy the first 3 sizes of the array and put them into a new array, 
// regSizes. 


// 6. var pets = ["dog", "cat", "ox", "duck", "frog"]. 
// Add 2 elements after "dog" and remove "cat", "ox", and "duck". 


// 7. var pets = ["dog", "cat", "ox", "duck", "frog"]; 
// Remove "cat" and "ox". 


// 8. var pets = ["dog", "cat", "ox", "duck", "frog", "flea"]; 
// Reduce it to "duck" and "frog" using slice. 


// Chapter 17 - 20 (for Loops) 


// 1. Write a statement in which loop is to run 10 times. 


// 2. Code the first line of a for loop with the usual counter name, usual 
// starting value, and usual increment. Run it 12 times using <= to 
// specify how many loops. 


// 3. What are the 5 characters missing from this code, excluding any 
// spaces that are missing? Type them in order, with no spaces or 
// commas between them. 
// for var i = 0 i <= 4 i++ 
// Note: Complete this statement by yourself 


// 4. Code the first line of a for loop with a counter name that's not i. 
// Code the usual starting value and usual increment. Run it 100 
// times using < to specify how many loops. 


// 5. Code the first line of a for loop with the usual counter and the 
// usual starting value. Run it 3 times using > to specify how many 
// loops. Decrement it with each iteration. 


// 6. The statement assigns the number of elements in the array to the 
// variable. 


// 7. Set a variable named “flag” with an initial Boolean value of your 
// choice. 


// 8. Code the first line of a for loop with the usual counter, the usual 
// starting value, and the usual incrementing. Limit the number of 
// loops by the number of elements in the array pets. 


// 9. Coding Exercise: 
// Set a for loop to run 10 iterations. 
// On the second iteration, display the counter in an alert. (It should 
// be 1.) 
// Break out of the loop. 


// 10. Create an array which contains user names 
// Code a prompt with the message "Enter first name". The user's 
// response is assigned to firstName. 
// Code the first line of a for loop with the usual counter, the usual 
// starting value, and the usual incrementing. Limit the number of 
// loops by the number of elements in the array user names. 
// Code an if statement that tests the presense of (user name) in an 
// array. 
// If user name match Alert that "Enter". if not then alert ("Please 
// write correct user name"). 



// 11. 
// Complete this code to display an alert if a match isn't found. 
// var matchFound = false; 
// for (var i = 0; i < list.length; i++) { 
// if (userInput === list[i]) { 
// alert("Match found"); 
// matchFound = true; 
// break; 
// } 
// }; 


// 12. var firstArr = [“a”, “b”, “c”, “d”, “e”, “f”]; 
// var secondArr = [1, 2, 3, 4, 5, 6]; 
// Code the first line of a for loop with the usual counter, the usual 
// starting value, and the usual incrementing. Limit the number of 
// loops by the number of elements in the array firstArr. 
// In the scope of main loop Code the nested loop. Limit the number 
// of nested loops by the number of elements in the array 
// secondArr. 
// After that concatenate the both loops. 
// Expected Output: 
// a1 
// a2 
// a3 
// a4 
// … 
// f6 
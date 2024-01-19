/*// Chapter 1 (Alerts) 172021 q8 252829 

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
var city = "Karachi" 
if (city === "Karachi"); { 
 console.log("The City OF Lights"); }

// 2. This is the first line of an if statement: 
// if (x === y) { 
// Complete the statement. If the condition is true, display a box 
// that asks the user value of z? and assign it to another variable. 
var x = 1;
var y =1;
var zee;
if(x===y){
    console.log(zee = prompt("Enter the value of z"));
}

// 3. Code an if statement that tests if ZipCode is "10010" so, Alert 
// that "Karachi". if not then alert ("Please write correct city") 
var zipCode = 10010;
if (zipCode===100010){
    alert("Karachi") }else if(alert("PLease write correct city"));


// 4. Code an if statement. Test whether a variable has a particular 
// numerical value. If so, assign a new value to that variable, as in 
// x = 1; 
var x = 45;
if(x===45){
    x=35;
}
console.log(x);

// Chapter 11 (Comparison  Operators) 

// 1. Code the first line of an if statement that tests whether one 
// variable is unequal to another. (Use !) 
var abc = 1;
var cdf = 4;

if(abc !== cdf) {
    console.log("un equal");
}

// 2. Code the first line of an if statement that tests whether the value represented by a variable is greater than or equal to the 
// value represented by another variable. 
if(abc >= cdf){
    console.log(abc);
}

// 3. Code an if statement. Test whether a variable is unequal to a particular number. If so, assign a number to that variable. 
var xyz =45;
if(xyz!=35) {
    console.log(xyz=20);
}

// 4. Code an if statement that tests whether a number is unequal to a different number. If the condition is true (it will be), display a congratulations alert. 
var y2k = 10;
if(y2k !=2){
    alert("Congratulation");
}

// 5. Code a prompt asking for your first name. Code an if statement that tests whether the name you entered is unequal to another name. If the condition is true (it will be), display an alert that says "No match" 
var naam = "Sharjeel";
if(naam != "Hassan"){
    alert("NO Match");
}

// Chapter 12 (if…else and else if statements) 

// 1. Code an if statement that tests whether the value represented by a variable is greater than or equal to the value represented by another variable. If so, display an alert. If not, display a different alert. 
var ad = 10;
if(ad >=5){
    alert("ad is greater")}
 else(alert("Scence alag hy"))

// 2. Write a program using if else and else if statement which take marks from user. And the program will calculate your percentage and  give you grade A/C to Your percentage. (MARKSHEET) 
var eng = +prompt("Enter English marks");
var math = +prompt("Enter MAths mark");
var urdu  = +prompt("enter urdu numbers");
var tot = eng+math+urdu;
console.log(tot);
var perct = ((tot/300)*100);
console.log(perct);
if(perct >= 80){
    console.log("A grade aya hy");
} else if(perct >=60){
    console.log("B grade aya hy") ;
}
else if(perct >=40){
    console.log("C grade aya hy");
}
else{console.log("F grade aya hy")}


// 3. This is the if statement that begins the code. 
// if (a === 10) { 
// alert("a is 10"); 
// } 
// If a isn't 10, display an alert that says The correct value of a is 
// ____ 
// Note: Try this by yourself 
var a = +prompt("Enter number please");
if(a===10) {
    alert("a is 10");
}
else {alert("The correct value of a ="+a);}

// 4. Prompt the user to enter a city. 
// If the city is Karachi, display an alert acknowledging it is Karachi. 
// If not, check to see if it's Lahore. 
// If it is, display an alert acknowledging it's Lahore. 
// Otherwise, display a different alert. 
var cityName = prompt("Enter City name");
if(cityName === "karachi") {
    alert("Its karachi")
}
else if (cityName === "lahore") {
    alert("Wagha border chahen")
}
else{alert("GHQ agae kiya");}

// Chapter 13 (Testing sets of conditions) 

// 1. Code the first line of an if statement that tests whether both are true: a has the same value as b and c has the same value as d. 
// if(a==b && c==d) {
// }

// 2. Code the first line of an if statement that tests whether either or  both are true: a has the same value as b or c doesn't have the same value as d. 
// if(a===b || c != d) {

// }

// 3. Code the first line of an if statement that tests whether  I. name is either "Hamza" or "Arsalan". 
// II. age is Less than 60. 

// if(name1 === ("hamza" || "arsalan") && age <60 ) {

// }

// 4. Declare two variables and assign them number values. If the first variable is less than the second variable or greater than the second variable, display an alert. 
var var1 = 10;
var var2 = 15;
if(var1<var2 || var1>var2) {
    alert("Ajeeb hy");
}

// 5. Declare 2 variables. Assign one of them your first name and the other one your last name. Code 2 prompts, asking for your first and your last name. If your answers match the two variables, display an alert. 
var vari11 = "sharjeel";
var vari12 = "hassan";
var var11 = prompt("Enter the first name");
var var12 = prompt("Enter the last name");
if(var11 === vari11 && var12 ===vari12) {

}
// chapter 14

// 1. Code an if statement enclosing a nested if. If password is not 
// empty, then check if password is not greater than 5 , then display 
// an alert that says "Password must be greater than 5" if greater 
// than 5 then Alert "OK".

var password = 4;

if(password !=""){if(password < 5) {alert("Password must be greater than 5")}if(password>5){alert("OK")}}


// 2. Try this statement by yourself

var a = 2;
var c ="Max";
// if (a === 1) {
// if (c === "Max") {
//  alert("OK");
//  }
// }



// 3. Code the first line of an if statement that avoids the nesting above 
// by testing for multiple conditions.
// if (a === 1) {
//  if (c === "Max") {
// alert("OK");
//  }
// }
var a = 1;
var c ="Max";
if (a===1 && c==="Max") {alert("OK")}



// 4. Declare two variables and assign them the same number value.
// Test two conditions, using nested if statements. Test whether the 
// first variable equals the second variable and also whether it is less 
// than or equal to the second variable. If the test passes—and it 
// will—display an alert message

var num1 =4;
var num2 =4;
if(num1===num2){if(num1<=num2){}}

// Sir Hamza yeh samjh nai aya ka alert kis pa karon


// Chapter 15 (Array I) 

// 1. Declare an empty array. 
var arr =[];

// 2. Code an array with 1 string element 
var aar = ["i an alone"];

// 3. var alphabet = ["h","i","j","k"]. Now print the letter “j” in alert 
// using array index 
var alphabet = ["h","i","j","k"];
alert(alphabet[2]);

// 4. var alphabet=["h","i","j","k", “l”,”m”, “n”, “o”]. Find the total 
// length of array. 
var alphabet=["h","i","j","k", "l", "m", "n", "o"];
console.log(alphabet.length);

// 5. Declare an array with one element and Add a second element 
// with index in array. Create an alert whose message is the new 
// element. 
var two2 = ["hehehe"];
two2[1] = 22;
console.log(two2);
alert(two2[1]);

// Chapter 16 (Array II) 

// 1. Code an array with 1 string element. Add an additional element to the array using push. Create an alert whose message is the last element. 
var single = [123];
single.push("onetwothree");
console.log(single);

// 2. var Alphabet=["h","i","j","k"] Remove the last element from the array Alphabet. 
var Alphabet=["h","i","j","k"];
Alphabet.pop();
console.log(Alphabet);

// 3. var Alphabet=["h","i","j","k"] Add a new element, a number, to the end of an array. 
var Alphabet=["h","i","j","k"];
Alphabet.push(69);
console.log(Alphabet);

// Chapter 16 (Array III) 

// 1. var sizes = ["S", "M", "XL", "XXL", "XXXL"].  Remove the first element of an array. 
var sizes = ["S", "M", "XL", "XXL", "XXXL"];
sizes.shift();
console.log(sizes);

// 2. var sizes = ["S", "M", "XL", "XXL", "XXXL"]. Add three number elements to the beginning of an array. 
var sizes = ["S", "M", "XL", "XXL", "XXXL"];
sizes.unshift(1, 2, 69);
console.log(sizes);

// 3. Declare an array with one element. Add a second element to the beginning of the array.  Create an alert whose message is the new first element. 
var umer =  [69];
umer.unshift(420);
console.log(umer);
alert(umer[1]);

// 4. var sizes = ["S", "M", "XL", "XXL", "XXXL"]. Insert "L" into the array between "M" and "XL". 
var sizes = ["S", "M", "XL", "XXL", "XXXL"]
sizes.splice(2,0,"L");
console.log(sizes);

// 5. var sizes = ["S", "M", "XL", "XXL", "XXXL"]. Copy the first 3 sizes of the array and put them into a new array, regSizes. 
var sizes = ["S", "M", "XL", "XXL", "XXXL"];
var regSizes = sizes.slice(0,3);
console.log(sizes);
console.log(regSizes);

// 6. var pets = ["dog", "cat", "ox", "duck", "frog"].Add 2 elements after "dog" and remove "cat", "ox", and "duck". 
var pets = ["dog", "cat", "ox", "duck", "frog"];
var newPets = pets.splice(1,3,"hello", "world");
console.log(pets);
console.log(newPets);

// 7. var pets = ["dog", "cat", "ox", "duck", "frog"]; 
// Remove "cat" and "ox". 
var pets = ["dog", "cat", "ox", "duck", "frog"];
var newPetts = pets.splice(1,2);
console.log(pets);
console.log(newPetts);

// 8. var pets = ["dog", "cat", "ox", "duck", "frog", "flea"]; 
// Reduce it to "duck" and "frog" using slice. 
var pets = ["dog", "cat", "ox", "duck", "frog", "flea"]; 
var redPet = pets.slice(3,5);
console.log(pets);
console.log(redPet);

// Chapter 17 - 20 (for Loops) 

// 1. Write a statement in which loop is to run 10 times. 
for (var i = 0; i<=9; i++) {
    console.log(i);
}

// 2. Code the first line of a for loop with the usual counter name, usual 
// starting value, and usual increment. Run it 12 times using <= to 
// specify how many loops. 

for (var i = 0; i <=11; i++) {
    console.log(i);
}

// 3. What are the 5 characters missing from this code, excluding any 
// spaces that are missing? Type them in order, with no spaces or 
// commas between them. 
// for var i = 0 i <= 4 i++ 
// Note: Complete this statement by yourself 

for (var i = 0; i <= 4; i++){

}

// 4. Code the first line of a for loop with a counter name that's not i. 
// Code the usual starting value and usual increment. Run it 100 
// times using < to specify how many loops. 

for (var hello = 0; hello <100; hello++) {
    console.log(hello);
}

// 5. Code the first line of a for loop with the usual counter and the 
// usual starting value. Run it 3 times using > to specify how many 
// loops. Decrement it with each iteration. 

for (var i = 6; i >3; i--) {
    console.log(i);
}

// 6. The statement assigns the number of elements in the array to the 
// variable. 
var tu = [4, 65, 46, 7, 8];
var tuu = tu.length;
console.log(tuu);

// 7. Set a variable named “flag” with an initial Boolean value of your 
// choice. 
var flag = true;

// 8. Code the first line of a for loop with the usual counter, the usual 
// starting value, and the usual incrementing. Limit the number of 
// loops by the number of elements in the array pets. 
var pets = ["dog", "cat", "ox", "duck", "frog", "flea"]; 


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

// Chapter 21 (Changing Case) 

// 1.  Type the characters that are missing from this code. 
// var allLower = userInput.toLowerCase; 
// Note: Correct this statement by yourself. 

// var allLower = userInput.toLowerCase(); 


// 2.  Convert the string represented by x to lower-case and assign the result to the same variable. 
var x = "jawani dewani";
x = x.toLowerCase();
console.log(x);


// 3.  Convert the string represented by y to upper-case and assign the result to the same variable. 
var y = "jawani dewani";
y = y.toUpperCase();
console.log(y);


// 4.  Convert the string represented by a variable to lower-case and assign the result to a second variable that hasn't been declared  beforehand. 
var x = "jawan PAKISTAN ";
var xy = x.toLowerCase();
console.log(xy);

// 5.  Convert the string represented by an array element to lower-case  and assign it to a variable that hasn't been declared beforehand. 
var tt = ["Hello", "World"];
var ty = tt[1].toLowerCase();
console.log(ty);

// 6.  Display in an alert the upper-case version of the string represented by a variable. 
var ui = "web development";
console.log(ui.toUpperCase());


// 7.  var cityName = “kaRacHi”; Convert the string represented by a cityName in Capitalisation is the writing of a word with its first letter in uppercase and the remaining letters in lowercase. 

*/
// Chapter 22 - 25 (Strings) 

// 1.  "captain" has been assigned to variable “sameWords”. You want to slice "ap" out of it. 
let sameWords = "captain";
let sameWordAP = sameWords.slice(1,3);
console.log(sameWordAP);



// 2.  The number of characters in the string will be assigned to the variable. 

let charL = "Islamic Republic of Pakistan";
let charLengths = charL.length;
console.log(charLengths);

// 3.  The string "elephant" has been assigned to the variable animal.Slice the four middle characters out of the string and assign it to the variable seg, which hasn't been declared beforehand. 

let animal ="elephant";
let seg = animal.slice(2, 6);
console.log(seg);

// 4.  Find the number of characters in the string represented by a variable and assign the number to a second variable. 
let charLen = "Islamic Republic of Pakistan";
let charLength = charLen.length;
console.log(charLength);

// 5.  In a first statement measure how many characters there are in a string represented by a variable. In a second statement slice all but the first character and last 3 characters of the string and assign it to a second variable that hasn't been declared beforehand. 
let stringChar = "Jawan Pakistan karimabad";
let panga = stringChar.slice(1,stringChar.length - 3);
console.log(panga);

// 6.  var text = "To be or not to be."; var indx = text.indexOf("be");  What is the value of indx? 
var text = "To be or not to be.";
var indx = text.indexOf("be");
console.log(indx);

// 7.  var text = "To be or not to be."; var indx = text.lastIndexOf("be"); What is the value of indx? 
// Note: Try the above both examples by yourself. 

var text = "To be or not to be.";
var indx = text.lastIndexOf("be");
console.log(indx);


// 8.  Find the index of the first character of the last instance of "go" in  the string represented by the variable text and assign the number  to the variable indx, which hasn't been declared beforehand. 



// 9.  Code the first line of an if statement that tests whether a segment with an index represented by indexNum exists in a string. 

//10. In this string "abcde", what character is at index 2? (Use charAt) 
let chart = "abcde";
console.log(chart.charAt(2));
// 11. Find the 10th character in the string represented by text and assign it to the variable cha, which hasn't been declared beforehand. 

text ="To be or not to be.";
console.log(text.charAt(10));

// 12. Find the last character in the string represented by str and assign it to x, which hasn't been declared beforehand. 
text ="To be or not to be.";
console.log(text.charAt(text.length-1));

console.log(text[text.length-1]);

// 13. Find the the 5th character in a string represented by input and assign it to cha, which hasn't been declared beforehand. 
text ="To be&or not to be.";
let cha;
console.log(cha=text.charAt(5));
console.log(cha);

// 14. Code the first line of an if statement that tests whether the  3rd character of a string represented by a variable is a particular character. 
let stringCharacter = "PakistanZindabad";
if(stringCharacter.charAt(3) == "2") {console.log("i found you")}
else{console.log("recheck again please"
);}


// 15. Code a for loop that cycles through all the characters of a  string represented by a variable and assigns each character to an element of an array that has been declared beforehand. In the string represented by reply replace the first instance of "no" with "yes" and assign the revised string to revisedReply, which hasn't been declared beforehand. 

stringCharacter = "Pakistan sa zinda bhag";
let arrStringChar =stringCharacter.split('');
console.log(arrStringChar);


// for (i=0; i<stringCharacter.length; i++)


// 16. In a string represented by str replace the first instance of "1" with "one" and assign the revised string to newStr, which hasn't been declared beforehand. 


// 17. If you want all instances replaced, enter 3 characters that need to appear in this statement. 
// var y = x.replace("a", "z"); 


// Chapter 26 (Rounding Numbers) 


// 1.  Form a statement that rounds a number to the nearest integer. 
var num12 = 1.5;
var roundNum12= Math.round(num12);
console.log(num12, roundNum12);

// 2.  Round up a number represented by origNum and assign it to roundNum, which hasn't been declared beforehand. 
var origNum = 1.1;
var roundNum = Math.ceil(origNum);
console.log(origNum, roundNum);

// 3.  Round down a number represented by origNum and assign it to  roundNum, which hasn't been declared beforehand. 
var origNum = 1.1;
var roundNum = Math.floor(origNum);
console.log(origNum, roundNum);

// 4.  Round a number represented by a variable and assign the result to a second variable that hasn't been declared beforehand. 
var origNum = 1.1;
var roundNum = Math.round(origNum);
console.log(origNum, roundNum);

// 5.  Round .5 to 0 and assign it to a variable that hasn't been declared beforehand. 
var round = .5;
var roundDown = Math.floor(round);
console.log(round, roundDown);

// Chapter 27 (Random Numbers) 

// 1.  Convert a random number generated by JavaScript to a number in the range 1 to 50 
var ch27 = Math.random() * 50;
ch27 = Math.floor(ch27)+1;
console.log(ch27);

// 2.  Generate a random number and assign it to a variable that hasn't been declared beforehand. 
var ft = Math.random();
console.log(ft);

// 3.  You have to create a dice in JavaScript with the use of pseudo-random number. 
var dice = Math.random() * 6;
dice = Math.floor(dice)+1;
console.log(dice);

// 4.  You have to create a toss (head/tail) in JavaScript with the use of pseudo-random number. 
var toss = Math.random() * 1;
toss = Math.round(toss);
console.log(toss);

// Chapter 28, 29 (Converting Strings) 

// 1.  How do you convert a string to an integer in JavaScript? 
// 1. number 2. + 3. parseint 4. parsefloat

// 2.  Write a JavaScript function to convert the string "123" to an integer. 
var ss = "123";
ss = Number(ss);
console.log(ss);

// 3.  How can you convert a string containing a decimal number to a  floating-point number in JavaScript? 
var ss = "123.956";
ss = parseFloat(ss);
console.log(ss);

// 4.  How can you check if a string can be successfully converted to an  integer or decimal in JavaScript before performing the conversion? 


// 5.  How can you convert a number to a string in JavaScript? 


// 6.  Write a JavaScript function to convert the number 42 to a string. 


// 7.  Can you convert a string representing a decimal number (e.g., "3.14") to an integer in JavaScript? If so, how? 


// Chapter 30 (Controlling the length of decimals) 

// 1.  Code a statement that rounds a number represented by num to 4 places,  converts  it  to  a  string,  and  assigns  it  to  newNum,  which hasn't been declared beforehand. 

// 2.  In a single statement round a number represented by a variable to 2  places,  convert  it  to  a  string,  convert  it  back  to  a  number,  and assign it to the same variable. 

// 3.  Code  the  first  line  of  an  if  statement  that  tests  whether  the number  represented  by  num,  rounded  to  2  digits  and  converted to a string, has more than 4 characters in it. 

// 4.  Assign a number with many decimal places to a variable. Code  an  alert  that  displays  the  number  rounded  to  2  decimal places and converted to a string. 

// Chapter 31 - 34 (Date & Time) 

// 1.  Code a statement that creates a new Date object and assigns it to  dObj, which hasn't been declared beforehand. 
var dObj = new Date();
console.log(dObj,typeof dObj);

// 2.  Code a statement that creates a new Date object, converts it to a string, and assigns the string to dStr, which hasn't been declared beforehand.
var newDateObj = new Date();
var dStr = newDateObj.toString();
console.log(typeof newDateObj, typeof dStr);

// 3.  Code a statement that extracts the day of the week from a Date object represented by d and assigns it to day, which hasn't been declared beforehand. 
var d = new Date();
var day = d.getDay();
console.log(day);

// 4.  The day has been extracted from the Date object and assigned to d. The names of the days of the week have been assigned to the array dayNames. Alert the current day with array index. 



// 5.  Extract all parts of the Date and Time and assign it to the variable  which has not been declared beforehand. 

// 6.  Code a statement that creates a Date object for the last day of the last month of 2020 and assigns it to later, which hasn't been declared beforehand. 

// 7.  Create a Date object for the second day of the second month of 1992 and assign it to a variable that hasn't been declared beforehand. 

// 8.  Code a single statement that displays in an alert the milliseconds that elapsed between the reference date and the beginning of 1980. 

// 9.  How do you change the year of a date in JavaScript? 

// 10. Write a JavaScript function to change the month of a given date to January. 

// 11. What is the method to change the day of the week for a specific date in JavaScript? 

// 12. Write a JavaScript function to change the minutes of a given time to a specific value. (Value by prompt) 

// 13. Write a JavaScript function to add a specific number of hours to a given time. 

// 14. You have to create a age calculator in JavaScript.


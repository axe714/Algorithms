// GRADE BOOK:

// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'

// Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.

//MY ANSWER
function getGrade(s1, s2, s3) {
  const avg = (s1 + s2 + s3) / 3;
  return avg >= 90
    ? "A"
    : avg >= 80
    ? "B"
    : avg >= 70
    ? "C"
    : avg >= 60
    ? "D"
    : "F";
}

//TOP ANSWER
function getGrade(s1, s2, s3) {
  avg = (s1 + s2 + s3) / 3;
  if (avg < 60) return "F";
  else if (avg < 70) return "D";
  else if (avg < 80) return "C";
  else if (avg < 90) return "B";
  else return "A";
}




// REVERSED WORDS:

// Complete the solution so that it reverses all of the words within the string passed in.

// Example(Input --> Output):

// "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"

//MY ANSWER
function reverseWords(str) {
  const split = str.split(" ");
  const reversedArr = split.reverse();
  const joinedStr = reversedArr.join(" ");
  return joinedStr;
}

//TOP ANSWER
function reverseWords(str) {
  return str.split(" ").reverse().join(" ");
}




// SCHOOL PAPERWORK #1:

//   Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

//   Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

//   Example:
//   n= 5, m=5: 25
//   n=-5, m=5:  0

//MY ANSWER
const paperwork = (n,m) => {
    if (n <= 0 || m <= 0) {
      return 0
    }
    
    else {
      return n * m
    }
  }

//TOP ANSWER
function paperwork(n, m) {
    return n > 0 && m > 0 ? n * m : 0
  }




// REDUCE BUT GROW:

// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

//MY ANSWER
const increase = (num) => num.reduce((prev,curr) => prev * curr) 

//TOP ANSWER
const grow = x => x.reduce((a,b) => a*b);





// This function should test if the factor is a factor of base.

// Return true if it is a factor or false if it is not.

// About factors
// Factors are numbers you can multiply together to get another number.

// 2 and 3 are factors of 6 because: 2 * 3 = 6

// You can find a factor by dividing numbers. If the remainder is 0 then the number is a factor.
// You can use the mod operator (%) in most languages to check for a remainder
// For example 2 is not a factor of 7 because: 7 % 2 = 1

// Note: base is a non-negative number, factor is a positive number.

//MY ANSWER
function checkForFactor (base, factor) {
    if (base % factor !== 0) {
      return false
    } else {
      return true
    }
  }


//TOP ANSWER
function checkForFactor (base, factor) {
    return base % factor === 0;
  }




// CHECK FOR CELSIUS:

// Debug celsius converter
// Your friend is traveling abroad to the United States so he wrote a program to convert fahrenheit to celsius. Unfortunately his code has some bugs.

// Find the errors in the code to get the celsius converter working properly.

// To convert fahrenheit to celsius:

// celsius = (fahrenheit - 32) * (5/9)
// Remember that typically temperatures in the current weather conditions are given in whole numbers.
//  It is possible for temperature sensors to report temperatures with a higher accuracy such as to the nearest tenth.
//  Instrument error though makes this sort of accuracy unreliable for many types of temperature measuring sensors.


// MY ANSWER

  function convertToCelsius (temperature) {
    let celsius = (temperature - 32) * (5/9)
    return celsius
  }
  
  function weatherInfo (temp) {
    let c = convertToCelsius(temp)
    if (c > 0)
      return (c + " is above freezing temperature")
    else
    return (c + " is freezing temperature")
  }

// TOP ANSWER

function weatherInfo (temp) {
  var c = convertToCelsius(temp);
  if (c <= 0)
    return (c + " is freezing temperature");
  else
    return (c + " is above freezing temperature");
}

function convertToCelsius (temperature) {
  var celsius = (temperature - 32) * (5/9);
  return celsius;
}
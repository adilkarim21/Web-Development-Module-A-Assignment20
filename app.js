// Chap # 38-42 FUNCTIONS, SWITCH STATEMENTS, WHILE... DO-WHILE LOOPS:


// Q1:

// function power(a, b) {

//     if (b === 0) return 1;

//     if (b < 0) return 1 / power(a, -b); 

//     let result = 1;
    
//     for ( var i = 0 ; i < b ; i++ ) {

//         result *= a; 
    
//     }

//     console.log(result);

// }

// power(+prompt("Enter value of a.."),+prompt("Enter value of b.."));


// Q2:




// Q3:

// function areaOfTriangle(a,b,c) {

//     var s = ( a + b + c ) / 2;

//     var area = s * ( s - a ) * ( s - b ) * ( s - c );

//     console.log(`Area of triangle is: ${area}`);

// }

// areaOfTriangle(+prompt("Enter length of side a.."),+prompt("Enter length of side b.."),+prompt("Enter length of side c.."));


// Q4:

// function mainFunction(subject1,subject2,subject3) {

//     var total = subject1 + subject2 + subject3;
//     var average = total / 3; 
//     var percentage = ( total * 100 ) / 300;

//     console.log(`Average of 3 subjects is: ${average}`);
//     console.log(`Percentage: ${percentage}%`);

// }

// mainFunction(+prompt("Enter marks of subject 1.."),+prompt("Enter marks of subject 2.."),+prompt("Enter marks of subject 3.."));


// Q5:

// function customIndexOf(str, char) {
    
//     if (typeof str !== 'string' || typeof char !== 'string' || char.length !== 1) {
    
//         return -1;
    
//     }

//     for (let i = 0; i < str.length; i++) {
    
//         if (str[i] === char) {
    
//             return i; 
    
//         }
    
//     }

//     return -1; 

// }

// customIndexOf(prompt("Enter string.."),prompt("Enter char.."));


// Q6:

// function removeVowels(sentence) {
    
//     if (typeof sentence !== 'string' || sentence.length > 25) {
    
//         console.log("Invalid input. Please provide a sentence up to 25 characters long.");
    
//     }

//     var vowels = /[aeiouAEIOU]/g;
//     var result = sentence.replace(vowels, '');

//     console.log(result); 
// }

// removeVowels(prompt("Enter sentence.."));


// Q7:

// function countDoubleVowels(text) {
    
//     var vowelPairs = /([aeiou]{2})/gi;
//     var matches = text.match(vowelPairs);

//     if (!matches) {
    
//         return 0;
    
//     }

//     let count = {};

//     for (let match of matches) {

//         switch (match.toLowerCase()) {

//             case 'ae':
//                 count['ae'] = (count['ae'] || 0) + 1;
//                 break;

//                 case 'ea':
//                 count['ea'] = (count['ea'] || 0) + 1;
//                 break;

//                 case 'ai':
//                 count['ai'] = (count['ai'] || 0) + 1;
//                 break;

//                 case 'ia':
//                 count['ia'] = (count['ia'] || 0) + 1;
//                 break;

//                 case 'ao':
//                 count['ao'] = (count['ao'] || 0) + 1;
//                 break;

//                 case 'oa':
//                 count['oa'] = (count['oa'] || 0) + 1;
//                 break;
 
//                 case 'ue':
//                 count['ue'] = (count['ue'] || 0) + 1;
//                 break;
 
//                 case 'eu':
//                 count['eu'] = (count['eu'] || 0) + 1;
//                 break;
 
//                 case 'ui':
//                 count['ui'] = (count['ui'] || 0) + 1;
//                 break;
 
//                 case 'iu':
//                 count['iu'] = (count['iu'] || 0) + 1;
//                 break;
 
//                 default:
                
//                 break;
        
//             }
    
//         }

//     console.log(count);

// }

// countDoubleVowels(prompt("Enter sentence.."));


// Q8:

// function distanceCalculate(disInkm) {

//     var disInMeter = disInkm * 1000;
//     var disInFeet = disInkm * 3280.84;
//     var disInInch = disInkm * 39370.1;
//     var disInCentiMeter = disInkm * 100000;

//     document.write(`Distance btw two cities: <br> <br> In meters: ${disInMeter} <br>In feets: ${disInFeet} <br>In inches: ${disInInch} <br>In centimeters; ${disInCentiMeter}`)

// }

// distanceCalculate(+prompt("Enter distance between two cities in km.."));


// Q9:

// function calculateOvertimePay(hoursWorked) {
    
//     var regularHours = 40;
//     var overtimeRate = 12.00; 
//     var overtimePay = 0;

//     if (hoursWorked > regularHours) {
        
//         var overtimeHours = hoursWorked - regularHours;
    
//         overtimePay = overtimeHours * overtimeRate;
    
//     }

//     console.log(overtimePay);
    
// }

// calculateOvertimePay(+prompt("Enter hours you worked.."));


// Q10:

// function calculateNotes(amount) {

//     var totalAmount = amount * 100;

//     var notes100 = Math.floor(totalAmount / 100);
//     totalAmount %= 100;

//     var notes50 = Math.floor(totalAmount / 50);
//     totalAmount %= 50;

//     var notes10 = Math.floor(totalAmount / 10);
//     totalAmount %= 10;

//     console.log(notes100 , notes50 , notes10);
    
// }

// calculateNotes(+prompt("Enter amount to withdraw.."));




// Chap # 43-48 EVENTS:


// Q1:

// function alertFunction() {

//     alert("Thanks User..");

// }


// Q2:

// function messageFunction() {

//     alert("Thanks for purchasing a phone from us!");

// }








// ------------------------------------------------------------------------------------------------
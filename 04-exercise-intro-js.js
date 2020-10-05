/* Guess what answers you would get if you ran this in the Javascript Console in Google Chrome. Once you have an answer to the questions then check them by copying them and running it in the console yourself line by line */ 

// 1. Evaluate each of the following expressions
/* 

1. 5 + "34" 
534

2. 5 - "4"
1

3. 10 % 5
0

4. 5 % 10
5

5. "Java" + "Script" 
JavaScript

6. " " + " " 
Two spaces of whitespace

7. " " + 0 
 0

8. true + true 
2

9. true + false 
1

10. false + true 
1

11. false - true 
-1

12. 3 - 4 
-1

13. "Bob" - "bill" 
NaN

*/

console.log(5+'34');
console.log(5 - "4");
console.log(10 % 5);
console.log(5 % 10);
console.log("Java" + "Script");
console.log(" " + " ");
console.log(" " + 0);
console.log(true + true);
console.log(false + true);
console.log(false + true);
console.log(false - true);
console.log(3 - 4);
console.log("Bob" - "bill");

// 2. Evaluate each of the following comparisons. What is different about these "comparisons" and the previous "expressions?"
/* 

    1. 5 >= 1
    true

    2. 0 === 1 
    false

    3. 4 <= 1 
    false

    4. 1 != 1
    false

    5. "A" > "B" 
    false

    6. "B" < "C" 
    true

    7. "a" > "A" 
    true

    8. "b" < "A" 
    false

    9. true === false 
    false

    10. true != true
    false

*/

console.log(5 >= 1);
console.log(0 === 1);
console.log(4 <= 1);
console.log(1 != 1);
console.log("A" > "B");
console.log("B" < "C");
console.log("a" > "A");
console.log("b" < "A");
console.log(true === false);
console.log(true != true);

// 3. Make the string: "Hi There! It's "sunny" out" by using the + sign.
var s = '"Hi There! It' + "'s " + '"sunny" out"';
console.log(s);

// 4. add variable "firstName" and "lastName" - so that they equal your name
var firstName = 'Bert';
var lastName = 'Bashford';

// 5. create a variable that holds the answer // of "firstName" + " " + "lastName"
var fullName = firstName + " " + lastName;

// 6. What is a + b?

/* 
    var a = 34;
    var b = 21;
    a = 2;

    23
*/

// 7. For the previous question, what is 'c' equal to?
/* 
    NULL (variable not declared)
*/

// 8. Make a Calculator! using prompt(), and variables, make a program that does the following:

// a. Prompts the user for first number.

// b. Stores that first number

// c. Prompts the user for the second number.

// d. stores that number and responds with the SUM by using an alert. 

var a;
var b;
a = prompt('Enter a number');
a = Number(a);
b = prompt('Enter another Number')
b = Number(b);
alert(a+b);
// abhi debugging sikhenge
// hamko console.log sikha rahe he

let a = 5;
let b = 1;
a++;


let sumAB = a + b;
console.log(a);

// console.clear()
// ye console ko clear karne ke lie hota hai
// isse browser ke console me machai gandaki saf kar sakte hai

let output = "Get this to show once in the freeCodeCamp console and not at all in the browser console";

console.log(output);
console.clear();

// typeof() ye hame type batata hai 
// kitne type ke data type hai :
// Boolean, Null, Undefined, Number, String, Symbol

let seven = 7;
let three = "3";
console.log(seven + three);
console.log(typeof(seven));
console.log(typeof(three));

// in printable statement use $ sign to print variables 
// isme spelling mistack thi

let receivables = 10;
let payables = 8;
let netWorkingCapital = receivables - payables;
console.log(`Net working capital is: ${netWorkingCapital}`);

// this is how reduce function work recursion type
// yaha debugging me paranthese ka dhyan rakhne ko bola

let myArray = [1, 2, 3];
let arraySum = myArray.reduce((previous, current) =>  previous + current);
console.log(`Sum of array values is: ${arraySum}`);

// dom me dekhenge is tarah html control karenge
// abhi dono type ke quotes use karneka andar bahar quote chahie to
let innerHtml = "<p>Click here to <a href='#Home'>return home</a></p>";
console.log(innerHtml);

// = , == , === ka defrence samjna chahie 
// konsa block kese work karega ye bhi 
// js me if ke andar sab true hai 
// unless it's 0 , "" , undefine , NaN , null

let x = 7;
let y = 9;
let result = "to come";

if(x == y) {
  result = "Equal!";
} else {
  result = "Not equal!";
}

console.log(result);

// function ke baju me () karna na bhule 
// => arrow or {} ye bhi 
function getNine() {
    let x = 6;
    let y = 3;
    return x + y;
  }
  
  result = getNine();
  console.log(result);

  // fuction call karo tabhi argument pass karne me 
  // pass argument use karne me galtiya ho sakti hai

  function raiseToPower(b, e) {
    return Math.pow(b, e);
  }
  
  let base = 2;
  let exp = 3;
  let power = raiseToPower(base, exp);
  console.log(power);

  // yahi ke js me index 0 se suru hota hai 
  // or .length se -1 karna na bhule

  function countToFive() {
    let firstFive = "12345";
    let len = firstFive.length;
    for (let i = 0; i < len; i++) {
      console.log(firstFive[i]);
    }
  }
  
  countToFive();

  // ham jese count me loop ke bad firse zero karte hai
  // vese hi hame row[] ko bhi khali karna padega na 
  // varna value aati jaegi or size badhta jaega

  function zeroArray(m, n) {
    // Creates a 2-D array with m rows and n columns of zeroes
    let newArray = [];
    let row = [];
    for (let i = 0; i < m; i++) {
      // Adds the m-th row into newArray
  
      for (let j = 0; j < n; j++) {
        // Pushes n zeroes into the current row to create the columns
        row.push(0);
      }
      // Pushes the current row, which now has n zeroes in it, to the array
      newArray.push(row);
      row = [];
    }
    return newArray;
  }
  
  let matrix = zeroArray(3, 2);
  console.log(matrix);
  

  // for loop me tum kesi bhi condition rakhdo to kese chalega 
  // tum != ----> <=  change kar diya

  function myFunc() {
    for (let i = 1; i <= 4; i+=2) {
      console.log("Still going!");
    }
  }
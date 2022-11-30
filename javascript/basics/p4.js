function fibbo(n)
{
    if(n == 0 || n == 1)
      return 1;
    else  
      return fibbo(n-1)+fibbo(n-2);
}

console.log(fibbo(2));


function fact(n)
{
    if(n == 1 || n == 0)
        return 1;
    else
        return n*fact(n-1);
}

console.log(fact(5));


// object 

const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];


function lookUpProfile(name, prop){
  for (var i = 0; i < contacts.length; i++) {
    if(contacts[i].firstName === name) {
      return contacts[i][prop] || "No such property";
    }
  }
  return "No such contact";
}

lookUpProfile("Akira", "likes");


// generate random 0 to 1

function randomFraction() {
  return Math.random();
}

console.log(randomFraction());

// generate random between 0 to 10

function randomWholeNum() {
  return Math.floor(Math.random()*10);
}

console.log(randomWholeNum());


function randomRange(myMin, myMax) {

  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}

console.log(randomRange(10,30));


// convert string to number

function convertToInteger(str) {
  return parseInt(str);
}

convertToInteger("56");

// convert binary to decimal

function convertToInteger(str) {
  return parseInt(str,2);
}

convertToInteger("10011");


// ternary operator

function checkEqual(a, b) {
  return a==b ? "Equal" : "Not Equal";
}

checkEqual(1, 2);


function checkSign(num) {
  return num<0 ? "negative" : (num == 0 ? "zero":"positive");
}

checkSign(10);

// recursion returning array

function countdown(n){
  if (n < 1) {
    return [];
  } 
  else {
    const arr = countdown(n - 1);
    arr.unshift(n);
    return arr;
  }
}

function rangeOfNumbers(startNum, endNum) {
  if(endNum < startNum)
    return [];
  else
  {
    const arr = rangeOfNumbers(startNum + 1 , endNum);
    arr.unshift(startNum);
    return arr;
  }
};


// scope challange

function checkScope() {
  let i = 'function scope';
  if (true) {
    const i = 'block scope';
    console.log('Block scope i is: ', i);
  }
  console.log('Function scope i is: ', i);
  return i;
}

const s = [5, 7, 2];
function editInPlace() {

  s[0] = 2;
  s[1] = 5;
  s[2] = 7;
}
editInPlace();


// mutation in object

function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  Object.freeze(MATH_CONSTANTS);
  try {
    MATH_CONSTANTS.PI = 99;
  } catch(ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();

// define function

// simple 
var magic = function() {
  return new Date();
};

var myConcat = function(arr1, arr2) {
  return arr1.concat(arr2);
};

console.log(myConcat([1, 2], [3, 4, 5]));

// arrow operator

const magic = () => {
  return new Date();
};


const myConcat = (arr1, arr2) => {
  return arr1.concat(arr2);
};

console.log(myConcat([1, 2], [3, 4, 5]));

// passing function with parameter

const increment = (number, value=1) => number + value;

// passing more unlimied parameter
const sum = (...args) => {
  return args.reduce((a, b) => a + b, 0);
}

console.log(sum(10,20,30));


// copying undifine size array 

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];  

console.log(arr2);

const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

const {today,tomorrow} = HIGH_TEMPERATURES;
  
const {today: highToday1, tomorrow: highTomorrow} = HIGH_TEMPERATURES;

const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};

const {today:{low:lowToday , high:highToday}} = LOCAL_FORECAST;

// swaping two element with array destructuring 

let a = 8, b = 6;

[a,b] = [b,a];

// remove first two and reassign
function removeFirstTwo(list) {
  const [a,b,...shorterList] = list; 
  return shorterList;
}

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);

const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

const half = ({max , min}) => (max +  min) / 2.0; 

// template litrels by $ sign

const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  const failureItems = [];
  for (let i = 0; i < arr.length; i++) {
    failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
  }

  return failureItems;
}

const failuresList = makeList(result.failure);

// direct returning object 
// without using key: value;
const createPerson = (name, age, gender) => (
  {
    name , age , gender
  }
);

// function defination 
const bicycle = {
  gear: 2,
  setGear(newGear) {
    this.gear = newGear;
  }
};
bicycle.setGear(3);
console.log(bicycle.gear);
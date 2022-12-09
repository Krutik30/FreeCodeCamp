// array define karna hai isme complex object bhi store kar sakte hai
let yourArray=[
    true,
    1,
    "me and you",
    {wo : "kon" , vahi : "wo" ,jo : "haan"},
    'k'
  ]; 
  // ds matlab data store or retrive easily karna
  // to accessing the data by index
  let myArray = ["a", "b", "c", "d"];
myArray[1] = "tumko kya!!";
console.log(myArray);

// push and unshift operations on array
// aage puche G lagane ke liye kam aata hai (add karva)
function mixedNumbers(arr) {

    arr.push(7, 'VIII', 9);
    arr.unshift('I', 2, 'three');
  
    return arr;
  }
  
  console.log(mixedNumbers(['IV', 5, 'six']));

  // isi tarah pop shift function aata hai 
  function popShift(arr) {
    let popped = arr.pop(); 
    let shifted = arr.shift()
    return [shifted, popped];
  }
  console.log(popShift(['challenge', 'is', 'not', 'complete']));

  // splice(kaha se, kitne ?)
  // utene element ko uda dega ye
  const arr = [2, 4, 5, 1, 7, 5, 2, 1];
arr.splice(1, 4);
console.log(arr);

// isme third arg me kisse replace karna hai ye bhi 
// specify kar sakte hai or badl sakte hai
function htmlColorNames(arr) {
  
    arr.splice(0,2,'DarkSalmon','BlanchedAlmond')
    return arr;
  }
  
  console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));

  // slice(start kaha se kare, khatam kaha kare)
  function forecast(arr) {
    return arr.slice(2,4);
  }
  
  console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));

  // spread operator to copy whole array 
  function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
      
      newArr.push([...arr]);
      num--;
    }
    return newArr;
  }
  
  console.log(copyMachine([true, false, true], 2));

  // spread operator ko ese bich me ghusake bhi use kar sakte hi
  function spreadOut() {
    let fragment = ['to', 'code'];
    let sentence=['learning',...fragment,'is','fun']; 
    return sentence;
  }
  
  console.log(spreadOut());

// indexOf() ye function array me travers karke batata hai ke
// element hai ki nai or uski index bhi deta hai 
// 0 bhi return karega index hota hai na
// jo element na ho to -1 return karega

function quickCheck(arr, elem) {
    if(arr.indexOf(elem) < 0)
      return false;
    else 
      return true;
  }
  
  console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));

  // row push karo baki to vahi check karke push karna
  function filteredArray(arr, elem) {
    let newArr = [];
    for(let i=0;i<arr.length;i++)
    {
      if(arr[i].indexOf(elem) < 0)
        newArr.push(arr[i]);
    }
    return newArr;
  }
  console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));
  
  // diamention vise arrangement 
  // it can be arrange , can be accessed
  let myNestedArray = [
    ["unshift", false, 1, 2, 3, "complex", "nested"],
  ["loop", "shift", 6, 7, 1000, "method"],
  ["concat", false, true, "spread", "array", ["deep"]],
  ["mutate", 1327.98, "splice", "slice", "push", [["deeper"]]],
  ["iterate", 1.3849, 7, "8.4876", "arbitrary", "depth", [[["deepest"]]]]
];
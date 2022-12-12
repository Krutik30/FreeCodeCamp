// simple math formula to convert
// made returning function
function convertCtoF(celsius) {
    let fahrenheit = celsius*1.8 + 32;
    return fahrenheit;
  }
  
  convertCtoF(30);

  // reversing the string 
  // for loop and concade by + operator
  function reverseString(str) {
    let reversed="";
    for(let i=str.length-1;i>=0;i--)
      reversed += str[i];
    return reversed;
  }
  reverseString("hello");

  // factorial by iteration
  // fac = 1 lena chahie
  function factorialize(num) {
    let fac = 1;
    for(let i=1;i<=num;i++)
      fac *= i;
    return fac;
  }
  
  factorialize(5);

  // pele sentence mese compare karne ke lie words me todna padega na
  // or usko store bhi karna padega to split() to hai hi
  // ' ' aae to split kar do or max function banate hai vee for loop me check karlo
  // splite sirf splite karta jata variable pe delpend karta hia array me store kare ya nai
  
function findLongestWordLength(str) {
  let words = str.split(' ');
  let maxLength = 0;
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) {
      maxLength = words[i].length;
    }
  }

  return maxLength;
}
findLongestWordLength("The quick brown fox jumped over the lazy dog");

// max ke lie --> -infite use kiya or nested for loop to he hi
// arr[i] ka max store kiya '
// ans ko return 

function largestOfFour(arr) {
  let ans=[];
  for(let i=0;i<arr.length;i++)
  { 
    let max = -Infinity;
    for(let j=0;j<arr[i].length;j++)
    {
      if(max < arr[i][j])
        max = arr[i][j];
    }
    ans.push(max);
  }
  return ans;
}
let r = largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
console.log(r);

// abhi compare karna kaha se start karna hai to 
// uske lie dono ki length se start find kiya 
// to str me start se str ki length tak compare karenge
// target ka index dekhna chahie 200 se to compare nai karenge
// fir to return karna hai

function confirmEnding(str, target) {
  let start = (str.length-target.length)
  for(let i=start;i<str.length;i++)
  {
    console.log(i);
    if(str[i] !== target[i-start])
    {
      return false;
    }
  }
  return true;
}
r = confirmEnding("Bastian", "n");
console.log(r);

// .repeat nai use karna 
// + - the concate operator se join karte jane ka;
function repeatStringNumTimes(str, num) {
  let ans = "";
  for(let i=0;i<num;i++)
  {
    ans += str;
  }
  return ans
}
repeatStringNumTimes("abc", 3);

//agar length uske jitni yaa jyada hai to return kardo hame kya interfer karna
// varna jitni length boli hai utana ek string me store karke baki tin dot concate kardo 

function truncateString(str, num) {
  let ans="";
  if(str.length <= num)
    return str;
  else
  {
    for(let i=0;i<num;i++)
    {
      ans += str[i];
    }
    ans += "...";
  }
  return ans;
}
truncateString("A-tisket a-tasket A green and yellow basket", 8);

// yaha esa function bola hai ke jo arg me diya func define hai
// to uska ans arr me se jo suitable ho wo return karo
// varna undefine hai to yya to ku6 ans bhi aa na sake 
// arr ki koi value func return na kare to bhi undefine 
function findElement(arr, func) {
  let num;
  for(let i=0;i<arr.length;i++)
  {
    if(func(arr[i]))
      return arr[i];
  }
  return num;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);

//bola hai ke bool expression ho to true hai
// like yaa to true ya false baki ku6 bhi ho to false 
// yaha convert ho jata hai isi lie === use karna
function booWho(bool) {
  if(bool === true || bool === false)
    return true;
  return false;
}
booWho(null);

// abhi sentence se array banao
// fir arra me ek ek ko pakad0 
// uske first ko capital karo - .toUpperCase()
// fir bichade hue ko pakado or slice() karke .toLowerCase() karo
// fir join to karna hi hai join(" "); se karo ke space se join ho
function titleCase(str) {
  let words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
}
  str = words.join(" ");
  return str;
}
titleCase("I'm a little tea pot");


// slice and splice 
// slice naya array banata hai purane vale ko dekh ke (kaha se, kaha tak);
// splice apane array mese chize nikalta or dalta hai
// splice(kaha se , kitne nikalu?, ku6 add karna chahoge);
// agar nikalna nai hai to sirf add kar n = 0 rakh ke

// yaha bhi hamne yahi kiya hame array ko chedane se mana kiya tha
// to ham copy karenge (copy karne ki kitne ways hai)
// (direct = se kyu nai karna chahie)
// or splice me n index se arr1 ko copy kar liya  
// splice(macho hint) bade aaram se;
function frankenSplice(arr1, arr2, n) {
  let a=[...arr2];
    a.splice(n, 0, ...arr1);
  return a;
}
r = frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2);
console.log(r);

// apne ko jo falsy value hongi usko hatake array dena hai
// to ham pata nai kyu falsy se value compare nai ho rahi thi
// fir agar galat nai nikal sakte to sahi ko pakad ke sambhal lo
// or hamare pass hai filter function ye fcc me tha 
// filter function arg me func leta hai or ye 
// array ke sabhi bachho ke sath wo func use karke ans save karta hai.
// yaha boolean ek data type nai fucntion ki tarah work kar rahi hai

function bouncer1(arr) {
  const filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) filteredArr.push(arr[i]);
  }
  return filteredArr;
}
function bouncer(arr) {
  return arr.filter(Boolean);
}
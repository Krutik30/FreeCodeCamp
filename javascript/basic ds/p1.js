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

//object
// object ke andar array number string wo sab to store kar sakte hai
// par usko indexing karke access karne se a66a usko key de do
// wo jo attribute dikha raha hai usko key bana do or data save karo
// usko bracket se access kar sakte hai
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  
};
foods["bananas"] = 13;
foods["grapes"] = 35;
foods["strawberries"] = 27;

console.log(foods);

// dot notation
//breackets me string ke jese pass karna padta hai 
// dot me .item karke 

let userActivity = {
  id: 23894201352,
  date: 'January 1, 2017',
  data: {
    totalUsers: 51,
    online: 42
  }
};
userActivity.data.online = 45
console.log(userActivity);

// while returning bracket notation is more presice
// kyu ki pass karne ke time pe string ki tarah kiya hai 
// like wo quote ke andar hai to . notation nai use kar sakte
// yaha isi lie bracket is important.

let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

function checkInventory(scannedItem) {
  return foods[scannedItem];
}

console.log(checkInventory("apples"));

// delete keyword 
// for object there is key word delete and 
// it can be access by any of notation
// key word ko object se notify karke wo data delete kar sakte hai

let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

delete foods.oranges;
delete foods.plums;
delete foods.strawberries;
console.log(foods);

// neseted obj hai 
// abhi hame sirf check karna hai ke key andar hai ki nai
// to uske liye hai in or hasOwnProperty()
// ye boolean return karte hai
// isko if ke andar bhi use kar sakte hai
// yaa direct bhi kar hi sakte hai
let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};
function isEveryoneHere2(userObj) {
  
  if (
      userObj.hasOwnProperty("Alan") &&
      userObj.hasOwnProperty("Jeff") &&
      userObj.hasOwnProperty("Sarah") &&
      userObj.hasOwnProperty("Ryan")
    ) {
      return true;
    }
    return false;
}
function isEveryoneHere(userObj) {
    return ["Alan", "Jeff", "Sarah", "Ryan"].every(check =>
    check in userObj
  );
}

console.log(isEveryoneHere(users));

// nested object ko kese handle kare
// usko compare kar sakte hai
// vese count() function se kar sakte par true false condition check karni hai na 
// yaha === se compare karna chahie
const user = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}

function countOnline(usersObj) {
  let re=0;
  for(let user in usersObj)
    if(usersObj[user]["online"] === true){
      re++;
    }
    return re;
}

console.log(countOnline(users));

// apne pass Object.keys() karke function hai
// ye function object me jitne keys hai uska array return karta hai
// uske andar jo bhi ho object array wo ku6 nai
// but jo key hai usko represent karta array return karta hai;

users = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function getArrayOfUsers(obj) {
    return Object.keys(obj);
}

console.log(getArrayOfUsers(users));

// yaha function me nested object ke andar ek array hai
// usko access karna hai usme value push karni hai
// or uss updated array ko function se return karna hai
// ek sath do kam karna hai

user = {
  name: 'Kenneth',
  age: 28,
  data: {
    username: 'kennethCodesAllDay',
    joinDate: 'March 26, 2016',
    organization: 'freeCodeCamp',
    friends: [
      'Sam',
      'Kira',
      'Tomo'
    ],
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'USA'
    }
  }
};

function addFriend(userObj, friend) {
  userObj.data.friends.push(friend);
  return userObj.data.friends;
}

console.log(addFriend(user, 'Pete'));
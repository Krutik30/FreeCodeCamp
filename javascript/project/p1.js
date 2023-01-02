function palindrome(str) {
    let str2 = str.replace(/[_]|\W/g,"").toLowerCase();
    let a=0;
    console.log(str2);
    for(let i=0;i<=str2.length/2;i++)
    {
      if(str2[i] != str2[str2.length-1-i])
        return false;
    }
    return true;
  }
  
  console.log(palindrome("0_0 (: /-\ :) 0-0"));


  const convertToRoman = (num) => {
    const map = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1,
    };
    let result = '';
    
    for (let key in map) {  
      const repeatCounter = Math.floor(num / map[key]);
      
      if (repeatCounter !== 0) {
        result += key.repeat(repeatCounter);
      }
      
      num %= map[key];
      
      if (num === 0) return result;
    }
    
    return result;
  };
  convertToRoman(2);

  var lookup = {
    'A': 'N','B': 'O','C': 'P','D': 'Q',
    'E': 'R','F': 'S','G': 'T','H': 'U',
    'I': 'V','J': 'W','K': 'X','L': 'Y',
    'M': 'Z','N': 'A','O': 'B','P': 'C',
    'Q': 'D','R': 'E','S': 'F','T': 'G',
    'U': 'H','V': 'I','W': 'J','X': 'K',
    'Y': 'L','Z': 'M'
  };
  
  function rot13(encodedStr) {
    var codeArr = encodedStr.split("");  // String to Array
    var decodedArr = []; // Your Result goes here
    // Only change code below this line
  
    decodedArr = codeArr.map(function(letter) {
      if(lookup.hasOwnProperty(letter)) {
        letter = lookup[letter];
      }
      return letter;
    });
  
    // Only change code above this line
    return decodedArr.join(""); // Array to String
  }

  function telephoneCheck(str) {
    // Good luck!
    return /^(1\s|1)?(\(\d{3}\)|\d{3})(-|\s)?\d{3}(-|\s)?\d{4}$/.test(str);
  }
  
  telephoneCheck("555-555-5555");

  var denom = [
    { name: 'ONE HUNDRED', val: 100},
    { name: 'TWENTY', val: 20},
    { name: 'TEN', val: 10},
    { name: 'FIVE', val: 5},
    { name: 'ONE', val: 1},
    { name: 'QUARTER', val: 0.25},
    { name: 'DIME', val: 0.1},
    { name: 'NICKEL', val: 0.05},
    { name: 'PENNY', val: 0.01}
  ];
  
  function checkCashRegister(price, cash, cid) {
   var output = {status: null, change: []};
   var change = cash - price;
   var register = cid.reduce(function(acc, curr) {
   acc.total += curr[1];
   acc[curr[0]] = curr[1];
   return acc;
   }, {total: 0});
   if(register.total === change) {
   output.status = 'CLOSED';
   output.change = cid;
   return output;
   }
   if(register.total < change) {
   output.status = 'INSUFFICIENT_FUNDS';
   return output;
   }
   var change_arr = denom.reduce(function(acc, curr) {
   var value = 0;
   while(register[curr.name] > 0 && change >= curr.val) {
   change -= curr.val;
   register[curr.name] -= curr.val;
   value += curr.val;
   change = Math.round(change * 100) / 100;
   }
   if(value > 0) {
   acc.push([ curr.name, value ]);
   }
   return acc;
   }, []);
   if(change_arr.length < 1 || change > 0) {
   output.status = 'INSUFFICIENT_FUNDS';
   return output;
   }
   output.status = 'OPEN';
   output.change = change_arr;
   return output;
  }
  
  checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1],
   ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], 
   ["TWENTY", 60], ["ONE HUNDRED", 100]]);
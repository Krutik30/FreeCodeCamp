
// array and function
const array = [["a" , 10] , ["b" , 20]];

console.log(array);

array.push(["c",20]);

console.log(array);

let variable = array.pop();

console.log(variable);

let variable2 = array.shift();

console.log(variable2);

array.unshift(["z",90]);

console.log(array);

// user void function

function message(str){
    console.log(str);
  }
  
  message("mitr");

// user define function reversing the number


function reverse(a){
    let rev = 0;
      while(a != 0)
      {
        let rem = a % 10;
        rev = rev * 10 + rem;
        a = Math.floor(a/10);
      }
    return rev;
  }
  
  console.log(reverse(705));
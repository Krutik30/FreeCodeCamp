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
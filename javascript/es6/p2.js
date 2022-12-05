class Thermostat {
    constructor(fahrenheit) {
      this.fahrenheit = fahrenheit;
    }
    get temperature() {
      return (5 / 9) * (this.fahrenheit - 32);
    }
    set temperature(celsius) {
      this.fahrenheit = (celsius * 9.0) / 5 + 32;
    }
  }
  
  const thermos = new Thermostat(76); 
  let temp = thermos.temperature; 
  thermos.temperature = 26;
  temp = thermos.temperature; 


  // exporting function , variables ..
  export const uppercaseString = (string) => {
    return string.toUpperCase();
  }
  
  export const lowercaseString = (string) => {
    return string.toLowerCase()
  }

  // importing function

  import {uppercaseString , lowercaseString} from './string_functions.js';

uppercaseString("hello");
lowercaseString("WORLD!");

import * as stringFunctions from "./string_functions.js";

stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");

//making javascript promise
const makeServerRequest = new Promise((resolve, reject) => {
  
  let responseFromServer;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});


makeServerRequest.then(result =>{
  console.log(result);
});


makeServerRequest.catch(error =>{
  console.log(error);
});
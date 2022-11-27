const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Only change code below this line
  if(strokes == 1)
    return "Hole-in-one!";

  else if(strokes <= par - 2)
    return "Eagle";
  
  else if(strokes == par - 1)
    return "Birdie";

  else if(strokes == par)
    return "Par";

  else if(strokes == par +1)
    return "Bogey";

  else if(strokes == par + 2)
    return "Double Bogey";

  else if(strokes >= par + 3)
    return "Go Home!";
  
  

  return "Change Me";
  // Only change code above this line
}


console.log(golfScore(5, 4));


// switch case:

//in term comparision case it use === operator;;;

function caseInSwitch(val) {
    let answer = "";
    // Only change code below this line
     switch (val){
  
      case 1:
        answer = "alpha";
        break;
      case 2:
        answer = "beta";
        break;
      case 3:
        answer = "gamma";
        break;
      case 4:
        answer = "delta";
        break;
     }
  
    // Only change code above this line
    return answer;
  }
  
  caseInSwitch(1);


  // second

  function switchOfStuff(val) {
    let answer = "";
    // Only change code below this line
    switch(val)
    {
      case "a":
        answer = "apple";
        break;
      case "b":
        answer = "bird";
        break;
      case "c":
        answer = "cat";
        break;
      default:
        answer = "stuff";
    }
  
  
    // Only change code above this line
    return answer;
  }
  
  switchOfStuff(1);


  // third switch

  function sequentialSizes(val) {
    let answer = "";
    // Only change code below this line
    switch(val){
  
      case 1:
      case 2:
      case 3: answer = "Low";
        break;
  
      case 4:
      case 5:
      case 6: answer = "Mid";
        break;
  
      case 7:
      case 8:
      case 9: answer = "High";
        break;
    }
  
  
    // Only change code above this line
    return answer;
  }
  
  sequentialSizes(1);

  //fourth switch case

  function chainToSwitch(val) {
    let answer = "";
    // Only change code below this line
  
    switch(val){
      case "bob":
            answer = "Marley";
            break;
      case 42:
        answer = "The Answer";
                  break;
  
      case 1:
        answer = "There is no #1";
                  break;
   
      case 99:
        answer = "Missed me by this much!";
                  break;
  
      case 7:
      answer = "Ate Nine";
            break;
  
    }
    
  
    // Only change code above this line
    return answer;
  }
  
  chainToSwitch(7);


  //function 

//      1)

function isLess(a, b) {
    // Only change code below this line
    if (a < b) {
      return true;
    } else {
      return false;
    }
    // Only change code above this line
  }
  
  isLess(10, 15);
//same

//   2)

  function isLess(a, b) {
    // Only change code below this line
      return (a < b);
    }
    // Only change code above this line
  
  
  isLess(10, 15);
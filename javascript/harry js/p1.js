let number = Math.floor((Math.random() * 100) + 1); 
let chances = 0; 
let guess;
console.log("Guess the Number\n");
guess = prompt("Enter a number between 1 and 100");
++chances; 

do {
  guess = Number.parseInt(guess);

  if (guess > number) {
    console.log("Number entered is greater");
    guess = prompt("Try again!!");
    guess = Number.parseInt(guess);
    ++chances; 
    continue;
  }

  else if (guess < number) {
    console.log("Number entered is smaller");
    guess = prompt("Try again!!");
    guess = Number.parseInt(guess);
    ++chances; 
    continue;
  }

} while (guess != number); 

let score = 100 - chances; 
console.log("\nCongratulations!! aap jit gaye...\nYour final score is", score);
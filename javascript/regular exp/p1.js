let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString);

// capital ya initcap hoga to bhi false return karega 
// case sensitive hai

let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; 
result = waldoRegex.test(waldoIsHiding);

// ese ek sath jyada words search karne ka man 
// kare to bas or operator ko use kar lene ka

let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; 
result = petRegex.test(petString);

// abhi case sensitive hai par uska bhi ilaz hai 
// flag - /i flag will handle it...

myString = "freeCodeCamp";
let fccRegex = /freecodecamp/i; 
result = fccRegex.test(myString);

// abhi matching kiya hai to extract bhi kar lete hai
// for that .match() function 
// but the twist is syntax - ulta hai .test() se

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; 
result = extractStr.match(codingRegex); 

// abhi bar bar repeat hoti hai string or sab ko extract karna hai
// uske liya flag hai - /g 
// or haan flag ek sath 2 , 3 or aate ho to sab use kar sakte hai

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/ig; 
result = twinkleStar.match(starRegex); 

// abhi pattern to dhundhna sikh liya 
// par general pattern dhundhne ke liye hai wild card
// called as dot or period this wild card work as pyada ku6 bhi ban sakta hai

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; 
result = unRegex.test(exampleStr);

// /----------------------------------------------------------------
// fcc ka nai hai
// ye bhi kar sakte hai 
exampleStr = "Let's have run, dun, fun with regular expressions!";
unRegex = /.un/g; 
result = exampleStr.match(unRegex);

console.log(result);

// /----------------------------------------------------------------

// new term character classes will help to find flixiblity
// abhi sabhi characeter bhi dhundh ke deta hai 
// or aaju baju specific character rakh do to uss group of word se relate karta hai

let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/ig; 
result = quoteSample.match(vowelRegex); 

// abhi puri abcd to likh nai sakte 
// isi liye we have range of character

quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/ig;
result = quoteSample.match(alphabetRegex); 

// ye numbers pe bhi kam kar leta hai 
quoteSample = "Blueberry 3.141592653s are delicious.";
myRegex = /[h-s2-6]/ig; 
result = quoteSample.match(myRegex); 

// abhi hame dhudhna aa gaya 
// lekin maja isme kaha abhi ignore kar lete hai 
// to introdusing negated character 
// ye namankit anko ke siva sabko bhav dega
// par han negated character set ko ignore hi karna hia

quoteSample = "3 blind mice.";
myRegex = /[^aeiou0-9]/ig; 
result = quoteSample.match(myRegex); 

console.log(result);

// abhi mereko repeat hote or uska group hota ho esi pattern chahie
// to aaa gya hai hamara '+' ye aapko aapki zarurato ke anusar group bana dega
let difficultSpelling = "Mississippi";
myRegex = /s+/g; 
result = difficultSpelling.match(myRegex);

console.log(result);

// abhi + hai to * kyu na aaye 
// ye imidiatly aane vale repeatedly charcter ko sense karke rkh leta hai
let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
let chewieRegex = /Aa*/; 
result = chewieQuote.match(chewieRegex);

console.log(result);

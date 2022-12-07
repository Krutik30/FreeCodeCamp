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

// ? is for returning smallest string
// apne pass . hai wo sabhi character represent karega 
// * wo repeatation control karega 
// abhi sirf <h1> return karne ke liye hai apne pass - ?

let text = "<h1>Winter is coming</h1>";
myRegex = /<.*?>/; 
result = text.match(myRegex);

console.log(result);

// exersice thi ke criminal dhundho 
// wo sath rete hai or string me C se jane jate hai
// to apan + se represent karenge

let reCriminals = /C+/; // ye regex dhundh ke dega

// abhi charcter set matlab koi word dhundhana hai par 
// pehle aata hona chahie uske lie ^ ye use kar sakte hai
// sentence me bich me hoga to milega nai

let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/;  // charet character
result = calRegex.test(rickyAndCal);

// isi tarah last me ho to bhi dhundh sakte hai 
// bas $ ye use karne ka (anchor character)

let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; 
result = lastRegex.test(caboose);

// \w ye shorcut hai character set ka [a-zA-Z0-9_]
// ye count karne me kam aa sakta hai

quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; 
result = quoteSample.match(alphabetRegexV2).length;

// hero jese villain \w hai to \W bhi hai
// ye [^A-Za-z0-9_] represent karega
// iske siva character dhundhke de saktaa hai

quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g;
result = quoteSample.match(nonAlphabetRegex).length;

// \d ye digits find karke deta hai
// haan ye six likha nai padh pata hai bas numbers dekhta hai
let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; 
result = movieName.match(numRegex).length;

// \D yaha bhi hai hamare pass 
// ye numbers ko ignore karke sab dekh sakta hai

movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g; 
result = movieName.match(noNumRegex).length;

// ^ - start of input
// [a-z] - first character is a letter
// [0-9]{2,} - ends with two or more numbers
// | - or
// [a-z]+ - has one or more letters next
// \d* - and ends with zero or more numbers
// $ - end of input
// i - ignore case of input

let username = "JackOfAllTrades";
let userCheck = /^[a-z]([0-9]{2,}|[a-z]+\d*)$/ig;
result = userCheck.test(username);

// \s ye space character sense karta hai

// is tarah [ \r\t\f\n\v] ye character set hai in sab chizo ke lie

let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g;
result = sample.match(countWhiteSpace);

// \S to pata hi hoga fir white space ke siva sab match() kare 
sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g;
result = sample.match(countNonWhiteSpace);

// ye {} use hota hai condition rakhne ke 
// {a,b} a se kam nai or b se zyada nai lunga
// a se kam hoga to ignore karo 
// or b se zyda ho to bhi hak mat jatao

let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6} no/; 
result = ohRegex.test(ohStr);

// abhi lower or uper vala dekh liya to ek ek to kar hi lenge
let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/;
result = haRegex.test(haStr);

// ye ku6 naya hai
let A100 = "h" + "a".repeat(100) + "h";

// baki lower upper boudry chhodo specify bhi kar sakte hai
// mere ko to 4 hi chahie to {4} rakh dene ka

let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; 
result = timRegex.test(timStr);

// ? ye he ke nai hai ignore karne ke liye bhi kar sakte hai
// british and american ese colour or color 
// dono ko search karne ke liye ? se regex bana sakte hai

let favWord = "favorite";
let favRegex = /favou?rite/;
result = favRegex.test(favWord);

// abhi password check karna hai to look ahead condtion se kar sakte hai
// yaha bola gaya hai ke 3 or 6 ke bich me character hona chahie
// or 1 digit to jarur or jarur hona chahie AND
// ?= look ahead operation ye aage jake dekho ese bolta hai
// flags and ye sab se aasan bana sakta hai ye

let password = "abc123";
let checkPass = /(?=\w{3,6})(?=\D*\d)/;
checkPass.test(password);

// here \w{6,} is suggesting ke 6 char to hone hi chahie 
// second vala ye bolta hai \w* se ke aage jo bhi hai iske sath sath
// or \d{2,} to pata hi hai ek bracket me likh ke isko sath me excute karna bol rahe 
// ke 6 char to ho hi or last 2 digit ho  

let sampleWord = "astronaut";
let pwRegex = /(?=\w{6,})(?=\w*\d{2,})/; 
result = pwRegex.test(sampleWord);

// () ye he grouping structure 
// isse apan group bana sakte hai or 
// ye ((.*) )? group me likha hai iska mtlab 
// ke bich me ku6 ho to chalega or ye ? bolta hai .* = ku6 bhi

myString = "Eleanor Roosevelt";
myRegex = /(Eleanor|Franklin) ((.*) )?Roosevelt/g; 
result = myRegex.test(myString); // Change this line
// After passing the challenge experiment with myString and see how the grouping works

console.log(result);
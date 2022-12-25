// Function that returns a string representing a cup of green tea
const prepareTea = () => 'greenTea';/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea = (numOfCups) => {
  const teaCups = [];
  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};
const tea4TeamFCC = getTea(40);
// for loop chalake bas us function ko call karna tha 
// wo prepareTea function ko bar bar call karta hai

const tea4GreenTeamFCC = getTea(prepareGreenTea(),27);
const tea4BlackTeamFCC = getTea(prepareBlackTea(),13);

// change karne ka man hua to function kese kitni bar call karna hai

// 2nd

// tabs is an array of titles of each site open within the window
const Window = function(tabs) {
  this.tabs = tabs; // We keep a record of the array inside the object
};

// When you join two windows into one window
Window.prototype.join = function(otherWindow) {
  this.tabs = this.tabs.concat(otherWindow.tabs);
  return this;
};

// When you open a new tab at the end
Window.prototype.tabOpen = function(tab) {
  this.tabs.push('new tab'); // Let's open a new tab for now
  return this;
};

// When you close a tab
Window.prototype.tabClose = function(index) {

  // Only change code below this line

  const tabsBeforeIndex = this.tabs.splice(0, index); // Get the tabs before the tab
  const tabsAfterIndex = this.tabs.splice(1); // Get the tabs after the tab

  this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // Join them together

  // Only change code above this line

  return this;
 };

// Let's create three browser windows
const workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // Your mailbox, drive, and other work sites
const socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Social sites
const videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); // Entertainment sites

// Now perform the tab opening, closing, and other operations
const finalTabs = socialWindow
  .tabOpen() // Open a new tab for cat memes
  .join(videoWindow.tabClose(2)) // Close third tab in video window, and join
  .join(workWindow.tabClose(1).tabOpen());
console.log(finalTabs.tabs);

// idhar sabse pehle .tabOpen() se new tab khulta hai
// .join() se tum set of tabs ke ek tab ko add kar sakte hai
// .tabClose() se to window se pehle 0 se index tak ek store karega
// fir index ko after vale me save kar lega and 
// then durse baki ke sathe before vale ko concate kar dega
// and last me push kar dega
// to social add karna tha fir new tab vala fir join the video vala but 3rd tab close karke
// fir join kiya workwindow usme 2nd tab close karke join karna tha
// array of tabs open in window
// isme problem tha 49th line me (index +1 ) likha tha but usko modified array ke sath kam karna tha
// to sirf (1) pehli value hi nikalni thi

// function esa banao ke global variable pe dependant ho
// or return fixedvalue ko change kiye bina ek large karke mile
let fixedValue = 4;
function incrementer() {
  return fixedValue+1;
}

// The global variable
fixedValue = 4;

// Only change code below this line
function incrementer(value) {
  return value+1;

  // Only change code above this line
}

// making function but this function may defect global variable
// to global variable ko use nai karenge bsa uska copy le lenge
// copy me ku6 bhi update delete karo kyahi fark padhta hai
// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];
// Change code below this line
function add(bookList,bookName) {
  const newArr = [...bookList]
  newArr.push(bookName);
  return newArr;
  
  // Change code above this line
}
// Change code below this line
function remove(bookList,bookName) {
  const book_index = bookList.indexOf(bookName);
  if (book_index >= 0) {
    const newArr = [...bookList]
    newArr.splice(book_index, 1);
    return newArr;
    // Change code above this line
    }
}

// The global variable
const watchList = [
  {
    "Title": "Inception",
    "Year": "2010",
    "Rated": "PG-13",
    "Released": "16 Jul 2010",
    "Runtime": "148 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Christopher Nolan",
    "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
    "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    "Language": "English, Japanese, French",
    "Country": "USA, UK",
    "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.8",
    "imdbVotes": "1,446,708",
    "imdbID": "tt1375666",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Interstellar",
    "Year": "2014",
    "Rated": "PG-13",
    "Released": "07 Nov 2014",
    "Runtime": "169 min",
    "Genre": "Adventure, Drama, Sci-Fi",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan, Christopher Nolan",
    "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    "Language": "English",
    "Country": "USA, UK",
    "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.6",
    "imdbVotes": "910,366",
    "imdbID": "tt0816692",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "The Dark Knight",
    "Year": "2008",
    "Rated": "PG-13",
    "Released": "18 Jul 2008",
    "Runtime": "152 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    "Language": "English, Mandarin",
    "Country": "USA, UK",
    "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    "Metascore": "82",
    "imdbRating": "9.0",
    "imdbVotes": "1,652,832",
    "imdbID": "tt0468569",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Batman Begins",
    "Year": "2005",
    "Rated": "PG-13",
    "Released": "15 Jun 2005",
    "Runtime": "140 min",
    "Genre": "Action, Adventure",
    "Director": "Christopher Nolan",
    "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    "Language": "English, Urdu, Mandarin",
    "Country": "USA, UK",
    "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
    "Metascore": "70",
    "imdbRating": "8.3",
    "imdbVotes": "972,584",
    "imdbID": "tt0372784",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Avatar",
    "Year": "2009",
    "Rated": "PG-13",
    "Released": "18 Dec 2009",
    "Runtime": "162 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "James Cameron",
    "Writer": "James Cameron",
    "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    "Language": "English, Spanish",
    "Country": "USA, UK",
    "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
    "Metascore": "83",
    "imdbRating": "7.9",
    "imdbVotes": "876,575",
    "imdbID": "tt0499549",
    "Type": "movie",
    "Response": "True"
  }
];

// Only change code below this line

const ratings = watchList.map(l => ({
  title: l["Title"],
  rating: l["imdbRating"]
}));

function byfunc(watchList){
  for (let i = 0; i < watchList.length; i++) {
  ratings.push({title: watchList[i]["Title"],rating: watchList[i]["imdbRating"]});
  }
}
// Only change code above this line

console.log(JSON.stringify(ratings));
// sabse pehle JSON.stringify() ye object ke array ko string me convert karta hai
// for loop se to diya tha ke object bana ke push kar rahe the
// title and rating to object ke key hai uske value ko list me se lena hai
// to loop me 2d- array se access kar liya 
// but map me
// .map() function me (callback function)
// where callback function me konsa item select karna hai
// usko select karke array return karta hai
// Array.prototype.map ese bhi call kar sakte hai arg me jispe kam karna hai 

Array.prototype.myMap = function(callback) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i], i, this));
  }
  return newArray;
};

// this.forEach((element, index, originalArr) =>
//     newArray.push(callback(element, index, originalArr))
//   );

// foreach(function)
// in foreach argu we have to call a function 
// its an function to collect the elements and in this function
// we take 3 arg ele and index and main-arr 
// where ham jis array mese nikalna hai yaa jisme badlav karna hai 
// wo dalenge and jo return karne ka array hai and 
// usme element collect karke dalna hai 
// abhi kis tarah collect karna hai yaa sirf sabme update karna hai
// wo function hai jo myMap me arg me diya hai callback
// to first hai this[i] wo element fir index and main-arr
// push hote hai callback function pe work hoke

// The global variable
watchList = [
  {
    "Title": "Inception",
    "Year": "2010",
    "Rated": "PG-13",
    "Released": "16 Jul 2010",
    "Runtime": "148 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Christopher Nolan",
    "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
    "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    "Language": "English, Japanese, French",
    "Country": "USA, UK",
    "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.8",
    "imdbVotes": "1,446,708",
    "imdbID": "tt1375666",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Interstellar",
    "Year": "2014",
    "Rated": "PG-13",
    "Released": "07 Nov 2014",
    "Runtime": "169 min",
    "Genre": "Adventure, Drama, Sci-Fi",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan, Christopher Nolan",
    "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    "Language": "English",
    "Country": "USA, UK",
    "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.6",
    "imdbVotes": "910,366",
    "imdbID": "tt0816692",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "The Dark Knight",
    "Year": "2008",
    "Rated": "PG-13",
    "Released": "18 Jul 2008",
    "Runtime": "152 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    "Language": "English, Mandarin",
    "Country": "USA, UK",
    "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    "Metascore": "82",
    "imdbRating": "9.0",
    "imdbVotes": "1,652,832",
    "imdbID": "tt0468569",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Batman Begins",
    "Year": "2005",
    "Rated": "PG-13",
    "Released": "15 Jun 2005",
    "Runtime": "140 min",
    "Genre": "Action, Adventure",
    "Director": "Christopher Nolan",
    "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    "Language": "English, Urdu, Mandarin",
    "Country": "USA, UK",
    "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
    "Metascore": "70",
    "imdbRating": "8.3",
    "imdbVotes": "972,584",
    "imdbID": "tt0372784",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Avatar",
    "Year": "2009",
    "Rated": "PG-13",
    "Released": "18 Dec 2009",
    "Runtime": "162 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "James Cameron",
    "Writer": "James Cameron",
    "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    "Language": "English, Spanish",
    "Country": "USA, UK",
    "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
    "Metascore": "83",
    "imdbRating": "7.9",
    "imdbVotes": "876,575",
    "imdbID": "tt0499549",
    "Type": "movie",
    "Response": "True"
  }
];

// Only change code below this line

const filteredList1 = watchList.filter(movie => movie.imdbRating > "8.0");

const filteredList = filteredList1.map(movie => ({
  title: movie.Title,
  rating: movie.imdbRating
}))
// Only change code above this line

console.log(filteredList);

// pehle filter karke 8 se niche vali sari movies ko hata diya 
// fir map se pehle ke jese object return kara ddiya

// filter function kese use karenge ke condition check karta hai
// jo true ho to apne array me rakhta hai baki nikal deta hai
// filter function bhi map ki tarah array traverse krta hai
// or condition check karke push karta jata hai yaa remove karta hai


//                      callback function me map rakhke try karna hai
// filteredarray = watchList
//   .filter(movie => movie.imdbRating >= 8.0)
//   .map(movie => ({ title: movie["Title"], rating: movie["imdbRating"] }));

Array.prototype.myFilter = function(callback) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this) == true) {
      newArray.push(this[i]);
    }
  }
  return newArray;
};

// filter function kya karta hai
// ke wo callback function ki condition check karta hai
// if(true) then wo array me push ho jayegi
// and true nai hai to ignore karo bas 
// callback me element index and array atta hai args 

// hame banana hota to remove karke bhi kar skte hai
// if (callback(this[i], i, this) == false) {
//   delete newArray[i]; }
// yaha splice ke use se thodi gadbad ho rahi hai indexing bigad raha hai...

function sliceArray(anim, beginSlice, endSlice) {
  // Only change code below this line
  let newArray = [];
  for(let i=beginSlice;i<endSlice;i++)
    newArray.push(anim[i]); // slice method bhi bana di
  return newArray;
  // Only change code above this line
}

inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
console.log(sliceArray(inputAnim, 1, 3));

function sliceArray(anim, beginSlice, endSlice) {
  let newArray = anim.slice(beginSlice,endSlice);
   // slice karke to assan hai bina fucntion ke bhi return kar hi raha hai
  return newArray;
}

const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
console.log(sliceArray(inputAnim, 1, 3));

// slice karke splice return karna hai asali vale me badlav na ho ese
// to slice karte naya array banta hai wo return kardo 
// ulta karne ka jo chahie wo nai jo nai chahie use slice karo
function nonMutatingSplice(cities) {
  // Only change code below this line
  return cities.slice(0,3);

}

const inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
console.log(nonMutatingSplice(inputCities));

function nonMutatingConcat(original, attach) {
  // Only change code below this line
  // let newArr=[];
  // newArr = newArr.concat(original);
  // newArr = newArr.concat(attach);
  // console.log(newArr);
  // return newArr; is tarah se bhi concat kar sakte hai par 
  // concat array return karta hai mutant nai karta hai
  // so direct likh sakte hai
  return original.concat(attach);
  // Only change code above this line
}

const first = [1, 2, 3];
const second = [4, 5];
console.log(nonMutatingConcat(first, second));

function nonMutatingPush(original, newItem) {
  return original.concat(newItem);
}
 // push se pura array as a element push hoga
 // isi lie concat use kiya hai direct return kar sakte hai
first = [1, 2, 3];
second = [4, 5];
nonMutatingPush(first, second);

// The global variable
watchList = [
  {
    "Title": "Inception",
    "Year": "2010",
    "Rated": "PG-13",
    "Released": "16 Jul 2010",
    "Runtime": "148 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Christopher Nolan",
    "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
    "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    "Language": "English, Japanese, French",
    "Country": "USA, UK",
    "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.8",
    "imdbVotes": "1,446,708",
    "imdbID": "tt1375666",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Interstellar",
    "Year": "2014",
    "Rated": "PG-13",
    "Released": "07 Nov 2014",
    "Runtime": "169 min",
    "Genre": "Adventure, Drama, Sci-Fi",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan, Christopher Nolan",
    "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    "Language": "English",
    "Country": "USA, UK",
    "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.6",
    "imdbVotes": "910,366",
    "imdbID": "tt0816692",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "The Dark Knight",
    "Year": "2008",
    "Rated": "PG-13",
    "Released": "18 Jul 2008",
    "Runtime": "152 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    "Language": "English, Mandarin",
    "Country": "USA, UK",
    "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    "Metascore": "82",
    "imdbRating": "9.0",
    "imdbVotes": "1,652,832",
    "imdbID": "tt0468569",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Batman Begins",
    "Year": "2005",
    "Rated": "PG-13",
    "Released": "15 Jun 2005",
    "Runtime": "140 min",
    "Genre": "Action, Adventure",
    "Director": "Christopher Nolan",
    "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    "Language": "English, Urdu, Mandarin",
    "Country": "USA, UK",
    "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
    "Metascore": "70",
    "imdbRating": "8.3",
    "imdbVotes": "972,584",
    "imdbID": "tt0372784",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Avatar",
    "Year": "2009",
    "Rated": "PG-13",
    "Released": "18 Dec 2009",
    "Runtime": "162 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "James Cameron",
    "Writer": "James Cameron",
    "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    "Language": "English, Spanish",
    "Country": "USA, UK",
    "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
    "Metascore": "83",
    "imdbRating": "7.9",
    "imdbVotes": "876,575",
    "imdbID": "tt0499549",
    "Type": "movie",
    "Response": "True"
  }
];

function getRating(watchList) {
  // Only change code below this line
  let averageRating;
  let sum = watchList
  .filter(watchList => watchList.Director === "Christopher Nolan")
  .map(movie2 => Number(movie2.imdbRating))
  .reduce((sum , rate) => sum + (rate),0);
  averageRating = sum / watchList.filter(watchList => watchList.Director === "Christopher Nolan").length;
  // Only change code above this line
  return averageRating;
}

console.log(getRating(watchList));

// reduce function 
// ye function callback function leta hai or intilization leta hai
// is function ko as a callback fuction bhi use kar sakte hai
// reduce ke callback me (iteration me kya karna hai or updation )
// jo karna hai wo callback ko bol do or saruat dusari arg ko
// ek ek ko check karta jaega or jo kam bola hai usme se utha kr de dega function run karke
// filter wo director konsa hai use filter karke de raha hai ---> iski length kam aaegi
// map wo array bana de rha hai sirf ration ka reduce ke lie or wo bhi number me convert karke
// reduce wo array ke sabhi element ka sum kar raha hai
// 627 length se divide kar liya or ans;

const squareList = arr => {
  // Only change code below this line
  return arr
  .filter(num => (Number.isInteger(num) && num > 0))
  .map(num => num*num); // Only change code above this line
};
// filter function ke callback me return kiya ke integer ho and 0 se bada
// fir uss filtered arr ko map karke squre kiya
// isinteger ke alava num % parseInt(num) === 0 ye ek tarika tha 
// jo true flase return karta hai
const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);

function alphabeticalOrder(arr) {
  return arr.sort();
}
// bola hai alphabetic me karna hai fir kya tention hai sort function ese hi to karta hai
// unicode values ke upar depend karta hai
alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);

function callback(a, b) {
  return a === b ? 0 : a < b ? 1 : -1;
}
// as a call back function ye function ulti alphabetic me sort karta hai
// isme same hai to koi kahi bhi rakh sakte hai
// unicode compare hote hai
// bada ho to return fir pehle a fir bhi 
// or ulta ho to ulta hoga 

// function(a, b) {
//   return a - b
// ye return me string ko numeric me convert kar deta hai
// - operator numeric pe hi lagte hai

const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  // Only change code below this line
  
  return [].concat(arr).sort((a,b) => a-b);
  // Only change code above this line
}
// concat karenge khali array leke ye vala arr usme concat karrenge 
// ab hamre pass copy hai now usko sort kar sakte hai
// concat ke ander pele ar rdal ke fir sort kara isi lie global vala nai change hua

console.log(nonMutatingSort(globalArray));

globalArray = [5, 6, 3, 2, 9];

  // let newArr = [...arr].sort((a,b)=> a-b);
  // return newArr;

  // yaha ham pehle copy kar lenge fir sort kar denge...

  function splitify(str) {
    // Only change code below this line
      return str.split(/\W/);
    // yaha \W = [^A-Za-z0-9_];
    // to space ke punctuation phoga to split kar dega
    // Only change code above this line
  }
  
  splitify("Hello World,I-am code");

  function sentensify(str) {
    return str.split(/\W/).join(" ");
  }
  // sentece thik karna hai to split krke array banao
  // split punctuation thi and then join with " " space
  console.log(sentensify("May-the-force-be-with-you"));

  